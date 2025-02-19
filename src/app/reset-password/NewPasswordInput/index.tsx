import { KeyboardAvoidingView, Platform, Text, View, StyleProp, TextStyle, ScrollView } from 'react-native'
import { useState, useEffect, useRef } from 'react'
import { router } from 'expo-router'
import { axiosClient } from '@/src/utils/axios'
import { AxiosError } from 'axios'
import { useForm, Controller, useWatch } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { ButtonCustomizer } from '@/src/components/ButtonCustomizer'
import { ErrorResponse } from '@/src/interfaces/types'
import InputComponent from '@/src/components/InputComponent'
import resetPasswordStore from '@/src/store/ResetPasswordStore'

import useKeyboardStatus from '@/src/utils/keyboardUtils'

import CloseEye from '@/src/assets/images/closeEye.svg'
import OpenEye from '@/src/assets/images/openEye.svg'
import ArrowRight from '@/src/assets/images/arrowRight.svg'

import { styles as globalStyles } from '@/src/app/styles'
import { styles } from './styles'

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .required('O campo "nova senha" não pode ser vázio')
    .matches(/[A-Z]/, 'Deve conter pelo menos uma letra maiúscula')
    .matches(/[a-z]/, 'Deve conter pelo menos uma letra minúscula')
    .matches(/[0-9]/, 'Deve conter pelo menos um número')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Deve conter pelo menos um dos caracteres: [!@#$%^&*(),.?":{}|<>]',
    )
    .min(8, 'A senha deve conter no mínimo 8 caracteres'),
  confirmPassword: yup
    .string()
    .required('O campo "Confirmar nova senha" não pode ser vázio')
    .oneOf([yup.ref('newPassword')], 'A senhas não conferem'),
})

type handleSubmitToApiPROPS = {
  novaSenha: string
  confirmacaoSenha: string
}

type Strength = 'Fraca' | 'Média' | 'Forte'

export default function NewPasswordInput() {
  const [showPassword1, setShowPassword1] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState<Strength>('Fraca')
  const [isButtonDisable, setIsButtonDisable] = useState(true)
  const isKeyboardVisible = useKeyboardStatus()
  const scrollViewRef = useRef<ScrollView>(null)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })
  const [resetPassword, setResetPassword] = resetPasswordStore((state) => [
    state.resetPassword,
    state.setResetPassword,
  ])
  const iskeyboardVisible = useKeyboardStatus()

  const newPassword = useWatch({
    control,
    name: 'newPassword',
    defaultValue: '',
  })

  const confirmPassword = useWatch({
    control,
    name: 'newPassword',
    defaultValue: '',
  })

  const handleScrollToEnd = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true })
  }

  useEffect(() => {
    if (
      newPassword.trim().length > 0 &&
      !errors.newPassword &&
      !errors.confirmPassword
    ) {
      setIsButtonDisable(false)
    } else {
      setIsButtonDisable(true)
    }
  }, [newPassword, confirmPassword])

  useEffect(() => {
    if (isKeyboardVisible) {
      handleScrollToEnd()
    }
  }, [isKeyboardVisible])

  const getInputStyle = (strength: Strength): StyleProp<TextStyle> => {
    switch (strength) {
      case 'Fraca':
        return { borderColor: '#FDA29B' }
      case 'Média':
        return { borderColor: '#FEC84B' }
      case 'Forte':
        return { borderColor: '#6CE9A6' }
      default:
        return { borderColor: '' }
    }
  }

  const getPasswordStrength = (newPassword: string) => {
    if (newPassword.length < 8) return 'Fraca'

    const hasUpperCase = /[A-Z]/.test(newPassword)
    const hasNumber = /\d/.test(newPassword)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword)

    if (hasUpperCase && hasNumber && hasSpecialChar) return 'Forte'
    if (
      (hasUpperCase && hasNumber) ||
      (hasUpperCase && hasSpecialChar) ||
      (hasNumber && hasSpecialChar)
    )
      return 'Média'

    return 'Fraca'
  }

  useEffect(() => {
    setPasswordStrength(getPasswordStrength(newPassword))
  }, [newPassword])

  const handleSubmitToApi = async (
    resetPasswordToApi: handleSubmitToApiPROPS,
  ) => {
    if (resetPasswordToApi.novaSenha && resetPasswordToApi.confirmacaoSenha) {
      try {
        await axiosClient.post('/user/reset-password', resetPasswordToApi)
        router.push('/reset-password/Success/')
      } catch (err) {
        const error = err as AxiosError
        const responseData = error.response?.data as ErrorResponse
        const userMessage = responseData.errors[0]?.userMessage
        console.log(userMessage)
      }
    }
  }

  const onSubmit = ({
    newPassword,
    confirmPassword,
  }: {
    newPassword: string
    confirmPassword: string
  }) => {
    const resetPasswordToApi = {
      ...resetPassword,
      novaSenha: newPassword,
      confirmacaoSenha: confirmPassword,
    }
    setResetPassword(resetPasswordToApi)
    handleSubmitToApi(resetPasswordToApi)
  }

  const eyesIconTopassword1 = showPassword1 ? CloseEye : OpenEye
  const eyesIconToPassword2 = showPassword2 ? CloseEye : OpenEye

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.subTitle}>Redefinir sua senha</Text>
        <Text style={styles.description}>
          Sua senha deve ter 8 caracteres, inclua uma letra maiúscula, um número
          e um caractere especial (como @, #, $, &).
        </Text>

        <View style={{ gap: 16, marginTop: 24 }}>
          <View>
            <Controller
              control={control}
              name="newPassword"
              render={({ field: { onChange, value } }) => (
                <InputComponent
                  label="Nova senha"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={!showPassword1}
                  icon={eyesIconTopassword1}
                  onIconPress={() => setShowPassword1(!showPassword1)}
                  strength={passwordStrength}
                  customStyle={getInputStyle(passwordStrength)}
                />
              )}
            />
            {errors.newPassword && (
              <Text style={globalStyles.errorText}>
                {errors.newPassword.message}
              </Text>
            )}
          </View>

          <View>
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <InputComponent
                  label="Confirmar nova senha"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={!showPassword2}
                  icon={eyesIconToPassword2}
                  onIconPress={() => setShowPassword2(!showPassword2)}
                />
              )}
            />
            {errors.newPassword && (
              <Text style={globalStyles.errorText}>
                {errors.newPassword.message}
              </Text>
            )}
          </View>
        </View>
      </View>

      {!iskeyboardVisible && (
        <View style={{ marginBottom: 24 }}>
          <ButtonCustomizer.Root
            type="primary"
            onPress={handleSubmit((data) => onSubmit(data))}
            disabled={isButtonDisable}
            customStyles={
              isButtonDisable
                ? globalStyles.primaryButtonDisabled
                : globalStyles.primaryButton
            }
          >
            <ButtonCustomizer.Title
              title="Criar nova senha"
              customStyles={
                isButtonDisable
                  ? globalStyles.primaryButtonTextDisabled
                  : globalStyles.primaryButtonText
              }
            />
            <ButtonCustomizer.Icon
              icon={ArrowRight}
              customStyles={
                isButtonDisable
                  ? globalStyles.primaryButtonIconDisabled
                  : globalStyles.primaryButtonIcon
              }
            />
          </ButtonCustomizer.Root>
        </View>
      )}
    </KeyboardAvoidingView>
  )
}
