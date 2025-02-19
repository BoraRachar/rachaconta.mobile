import { KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import { Link, router } from 'expo-router'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuthStore } from '@/src/store/useAuthStore'

import Header from '@/src/components/HeaderComponent'
import InputComponent from '@/src/components/InputComponent'

import ArrowBack from '@/src/assets/images/arrowBack.svg'
import opeEye from '@/src/assets/images/openEye.svg'
import closeEye from '@/src/assets/images/closeEye.svg'

import { styles as globalStyles } from '@/src/app/styles'
import { styles } from './styles'
import useKeyboardStatus from '@/src/utils/keyboardUtils'
import { ButtonCustomizer } from '@/src/components/ButtonCustomizer'
import { useState } from 'react'
import { axiosClient } from '@/src/utils/axios'
import { ErrorResponse } from '@/src/interfaces/types'
import { AxiosError } from 'axios'

const schema = yup.object().shape({
  email: yup.string().required('O campo deve ser preenchido'),
  password: yup.string().required('O campo deve ser preenchido'),
})

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(true)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const isKeyboardVisible = useKeyboardStatus()
  const [validPassword, setValidPassword] = useState<boolean | null>(null)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [requestErrorMessage, setRequestErrorMessage] = useState<string | null>(
    null,
  )
  const { login } = useAuthStore()

  const eyesIcon = showPassword ? opeEye : closeEye

  const handleLogin = async (data: FieldValues) => {
    setIsSubmitted(true)
    setValidPassword(null)

    try {
      const response = await axiosClient.post('login', {
        email: data.email,
        password: data.password,
      })
      if (response) {
        const { accessToken, nome, cod } = response.data.data
        await login(accessToken, nome, cod)
        router.push('/home')
      }
    } catch (err) {
      const error = err as AxiosError
      const responseData = error.response?.data as ErrorResponse
      const userMessage = responseData.errors[0]?.userMessage
      setRequestErrorMessage(userMessage)
      setValidPassword(false)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Login"
        leftIcon={{
          icon: <ArrowBack />,
          onPress: () => {
            router.push('/')
          },
        }}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={globalStyles.formContainer}>
          <Text style={styles.title}>Que bom que você voltou!</Text>
          <Text style={styles.subtitle}>
            Faça login e comece a dividir suas contas.
          </Text>

          <View style={{ marginTop: 26 }}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <InputComponent
                  label="E-mail ou usuário"
                  value={value}
                  onChangeText={onChange}
                  placeholder="joão@mail.com"
                  errorOrSucess={errors.email?.message}
                />
              )}
            />
            {errors.email && (
              <Text style={globalStyles.errorText}>{errors.email.message}</Text>
            )}
          </View>

          <View style={{ marginTop: 20 }}>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <>
                  <InputComponent
                    label="Senha"
                    value={value}
                    onChangeText={(text) => {
                      setValidPassword(null)
                      setRequestErrorMessage(null)
                      onChange(text)
                    }}
                    secureTextEntry={showPassword}
                    icon={eyesIcon}
                    onIconPress={() => setShowPassword(!showPassword)}
                    errorOrSucess={isSubmitted ? errors.password?.message : ''}
                    errorInput={requestErrorMessage !== null}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <Text style={globalStyles.errorText}>
                      {isSubmitted &&
                        errors.password &&
                        !value &&
                        errors.password?.message}
                      {validPassword === false &&
                        isSubmitted &&
                        requestErrorMessage}
                    </Text>
                    <Link
                      href={'/forgot-password'}
                      style={styles.forgotPassword}
                    >
                      Esqueceu a senha?
                    </Link>
                  </View>
                </>
              )}
            />
          </View>
        </View>

        {!isKeyboardVisible && (
          <View style={{ paddingHorizontal: 24 }}>
            <ButtonCustomizer.Root
              type="primary"
              onPress={handleSubmit(handleLogin)}
            >
              <ButtonCustomizer.Title
                title="Login"
                customStyles={globalStyles.primaryButtonText}
              />
            </ButtonCustomizer.Root>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 16,
              }}
            >
              <Text style={styles.signUp}>Ainda não possui uma conta?</Text>
              <Link href={'/create-user'} style={styles.span}>
                Crie agora
              </Link>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </View>
  )
}
