import { useState } from 'react'
import { FlatList, Text, useWindowDimensions, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { TabView, SceneMap, TabBar, TabBarProps } from 'react-native-tab-view'

import { styles } from './styles'
import { theme } from '@/src/theme'
import { verticalScale } from '@/src/utils/responsiveUtils'

import LinkToAddNewFriendsPage from './components/LinkToAddNewFriendsPage'
import PendingInvitationsCard from './components/PedingInvitationsCards'
import SentInvitationCard from './components/SentEmailInvitationCard'

import { useFriendStore } from '@/src/store/useFriendStore'

type Route = {
  key: string
  title: string
}

export default function Invitations() {
  const { initialIndex } = useLocalSearchParams()
  const [index, setIndex] = useState<number>(Number(initialIndex) || 0)

  const { pendingInvitations, emailInvitations } = useFriendStore()
  const layout = useWindowDimensions()

  const [routes] = useState<Route[]>([
    { key: 'enviados', title: 'Enviados' },
    { key: 'pendentes', title: 'Pendentes' },
  ])

  const renderScene = SceneMap({
    enviados: () => (
      <FlatList
        data={emailInvitations}
        renderItem={({ item }) => <SentInvitationCard friend={item} />}
        keyExtractor={(item) => item.idConvite}
        extraData={emailInvitations}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
              gap: 8,
            }}
          >
            <Text
              style={[styles.text, styles.textBold, { textAlign: 'center' }]}
            >
              Não existem solicitações enviadas
            </Text>
            <Text style={[styles.text, { textAlign: 'center' }]}>
              Clique em{' '}
              <Text style={styles.textBold}>Adicionar novo amigo</Text> para
              enviar convite para alguém que você conhece
            </Text>
          </View>
        }
      />
    ),
    pendentes: () => (
      <FlatList
        data={pendingInvitations}
        renderItem={({ item }) => <PendingInvitationsCard friend={item} />}
        keyExtractor={(item) => item.amigoId}
        extraData={pendingInvitations}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}
          >
            <Text
              style={[styles.text, styles.textBold, { textAlign: 'center' }]}
            >
              Não existem solicitações de amizade pendentes
            </Text>
          </View>
        }
      />
    ),
  })

  const RenderTabBar = (props: TabBarProps<Route>) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.primaryColor }}
      style={{ backgroundColor: theme.colors.white }}
      renderLabel={({ route, focused }: { route: Route; focused: boolean }) => (
        <Text style={[styles.text, focused && styles.tabLabelActive]}>
          {route.title}
        </Text>
      )}
    />
  )

  return (
    <View style={styles.container}>
      <LinkToAddNewFriendsPage />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={RenderTabBar}
        style={{ marginTop: verticalScale(24) }}
      />
    </View>
  )
}
