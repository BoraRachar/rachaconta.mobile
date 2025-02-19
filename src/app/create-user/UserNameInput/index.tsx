import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigationControls } from '@/src/utils/CreateUserButtonsNavigation'
import useStore from '../../../store/CreateUserstore'
import useKeyboardStatus from '@/src/utils/keyboardUtils'
import { ButtonCustomizer } from '../../../components/ButtonCustomizer'
import { useForm, Controller, FieldValues, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState, useEffect } from 'react'
import * as yup from 'yup'
import { styles } from '../styles'
import { styles as globalStyles } from '../../styles'
import InputComponent from '@/src/components/InputComponent'
import SeparatorComponent from '@/src/components/SeparatorComponent'
import NameSuggestion from '@/src/components/NameSuggestion'
import ArrowRight from '../../../assets/images/arrowRight.svg'
import ArrowRightDisable from '../../../assets/images/arrowRightDisable.svg'
import { axiosClient } from '@/src/utils/axios'

const schema = yup
  .object({
    usuario: yup.string().required('O campo deve ser preenchido'),
  })
  .required()

export default function UserName() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { handleNavigationButton } = useNavigationControls()
  const { addUser } = useStore()
  const [isButtonDisable, setIsButtonDisable] = useState(true)
  const [userNameSuggestions, setUserNameSuggestions] = useState([])
  const [invalidUser, setInvalidUser] = useState(false)
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null)
  const isKeyboardVisible = useKeyboardStatus()

  const usuario = useWatch({ control, name: 'usuario', defaultValue: '' })

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await axiosClient.get('user/find-usuario', {
        params: { usuario: data.usuario },
      })

      if (response.data.statusCode === 204) {
        addUser({ usuario: data.usuario })
        handleNavigationButton()
      } else if (response.data?.data?.userNames?.length > 0) {
        setInvalidUser(true)
        setUserNameSuggestions(response.data.data.userNames)
      }
    } catch (error) {
      console.log('Error fetching user names:', error)
    }
  }

  useEffect(() => {
    if (usuario.trim().length > 0) {
      setIsButtonDisable(false)
    } else {
      setIsButtonDisable(true)
    }
  }, [usuario])

  const handleUserNameSelect = (userName: string) => {
    setValue('usuario', userName)
    setSelectedUserName(userName)
    setInvalidUser(false)
  }

  const handleAdvace = () => {
    if (selectedUserName) {
      addUser({ usuario: selectedUserName })
      handleNavigationButton()
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.contentForm}>
        <View>
          <Text style={globalStyles.createUserTitle}>
            Agora escolha um {'\n'}nome de usuário
          </Text>
          <Controller
            control={control}
            name="usuario"
            defaultValue=""
            render={({ field: { onChange, value } }) => {
              return (
                <InputComponent
                  placeholder="BoraRachar123"
                  value={value}
                  onChangeText={onChange}
                  errorInput={invalidUser}
                />
              )
            }}
          />
          {errors.usuario && (
            <Text style={globalStyles.errorText}>{errors.usuario.message}</Text>
          )}
          {invalidUser && (
            <Text style={globalStyles.errorText}>Usuário não disponível</Text>
          )}
          {userNameSuggestions.length > 0 && (
            <View>
              <SeparatorComponent />
              <NameSuggestion
                suggestions={userNameSuggestions}
                onNameSelect={handleUserNameSelect}
              />
            </View>
          )}
        </View>
      </View>
      {!isKeyboardVisible && (
        <View style={styles.buttonsContainer}>
          <ButtonCustomizer.Root
            type={'primary'}
            onPress={handleSubmit(async (data) => {
              await onSubmit(data)
              if (userNameSuggestions.length > 0 && !selectedUserName) {
                handleAdvace()
              }
            })}
            disabled={isButtonDisable}
            customStyles={
              isButtonDisable
                ? globalStyles.primaryButtonDisabled
                : globalStyles.primaryButton
            }
          >
            <ButtonCustomizer.Title
              title="Senha"
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
