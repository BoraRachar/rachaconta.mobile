import { router, Stack } from 'expo-router'

import LeftIcon from '@/src/assets/images/arrowBack.svg'
import Question from '@/src/assets/images/question.svg'

export default function GroupsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Meus grupos',
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
        name="newGroup/index"
        options={{
          title: 'Novo Grupo',
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
        name="resume/index"
        options={{
          title: 'Resumo',
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
        name="conditionPage/index"
        options={{
          title: 'Novo Grupo',
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
    </Stack>
  )
}
