import { Redirect, Tabs } from 'expo-router'
import { useAuthStore } from '@/src/store/useAuthStore'

import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from '@/src/theme'
export default function Layout() {
  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    return <Redirect href="/login" />
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colors.primaryColor }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity/index"
        options={{
          title: 'Atividade',
          tabBarIcon: ({ color }) => (
            <Ionicons name="swap-horizontal-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="expenses/index"
        options={{
          title: 'Desepesas',
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="friends"
        options={{
          title: 'Amigos',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="groups"
        options={{
          title: 'Grupos',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
