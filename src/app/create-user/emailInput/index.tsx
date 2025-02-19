import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigationControls } from '@/src/utils/CreateUserButtonsNavigation'
import { useState, useEffect } from 'react'
import useStore from '../../../store/CreateUserstore'
import usekeyboardStatus from '../../../utils/keyboardUtils'
import { ButtonCustomizer } from '../../../components/ButtonCustomizer'
import { useForm, Controller, FieldValues, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { styles } from '../styles'
import { styles as globalStyles } from '../../styles'
import InputComponent from '@/src/components/InputComponent'
import ArrowRight from '../../../assets/images/arrowRight.svg'
import ArrowRightDisable from '../../../assets/images/arrowRightDisable.svg'
import { isValidInput } from '@/src/utils/isValidInput'

const schema = yup
  .object({
    email: yup
      .string()
      .email('Insira um e-mail válido')
      .required('O campo deve ser preenchido'),
  })
  .required()

export default function EmailInput() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { handleNavigationButton } = useNavigationControls()
  const { addUser } = useStore()
  const [isButtonDisable, setIsButtonDisable] = useState(true)
  const isKeyboardVisible = usekeyboardStatus()

  const email = useWatch({ control, name: 'email', defaultValue: '' })

  const onSubmit = (data: FieldValues) => {
    addUser({ email: data.email })
    handleNavigationButton()
  }

  useEffect(() => {
    if (email.trim().length > 0) {
      setIsButtonDisable(false)
    } else {
      setIsButtonDisable(true)
    }
  }, [email])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.contentForm}>
        <View>
          <Text style={globalStyles.createUserTitle}>
            Nos diga seu melhor e-mail
          </Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => {
              const isValid = isValidInput(schema, 'email', value)
              return (
                <InputComponent
                  placeholder="borarachar@mail.com"
                  value={value}
                  onChangeText={onChange}
                  errorOrSucess={errors.email?.message}
                  isValid={isValid}
                />
              )
            }}
          />
          {errors.email && (
            <Text style={globalStyles.errorText}>{errors.email.message}</Text>
          )}
        </View>
      </View>
      {!isKeyboardVisible && (
        <View style={styles.buttonsContainer}>
          <ButtonCustomizer.Root
            type={'primary'}
            onPress={handleSubmit(onSubmit)}
            disabled={isButtonDisable}
            customStyles={
              isButtonDisable
                ? globalStyles.primaryButtonDisabled
                : globalStyles.primaryButton
            }
          >
            <ButtonCustomizer.Title
              title="Usuário"
              customStyles={
                isButtonDisable
                  ? globalStyles.primaryButtonTextDisabled
                  : globalStyles.primaryButtonText
              }
            />
            <ButtonCustomizer.Icon
              icon={isButtonDisable ? ArrowRightDisable : ArrowRight}
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
