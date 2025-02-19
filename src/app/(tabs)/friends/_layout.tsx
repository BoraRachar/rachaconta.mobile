import { Stack, router } from 'expo-router'

import LeftIcon from '@/src/assets/images/arrowBack.svg'
import Question from '@/src/assets/images/question.svg'
import CloseIcon from '@/src/assets/images/close-roudend.svg'

export default function FriendsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Amigos',
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <LeftIcon
              onPress={() => {
                router.back()
              }}
            />
          ),
          headerRight: () => <Question />,
        }}
      />

      <Stack.Screen
        name="invitations"
        options={{
          title: 'Convites',
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <LeftIcon
              onPress={() => {
                router.back()
              }}
            />
          ),
          headerRight: () => <Question />,
        }}
      />

      <Stack.Screen
        name="addNewFriendsPage/index"
        options={{
          title: 'Adicionar Amigos',
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <LeftIcon
              onPress={() => {
                router.back()
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="addNewFriendsPage/friendSearchResults"
        options={{
          title: 'Adicionar Amigos',
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <LeftIcon
              onPress={() => {
                router.back()
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="emailInvitationPage/index"
        options={{
          title: 'Convidar por E-mail',
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <LeftIcon
              onPress={() => {
                router.back()
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="emailInvitationPage/sucessInvitationEmailPage"
        options={{
          title: 'Sucesso',
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => false,
          headerRight: () => (
            <CloseIcon
              onPress={() => {
                router.replace('/friends/')
              }}
            />
          ),
        }}
      />
    </Stack>
  )
}
