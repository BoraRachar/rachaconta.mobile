import { useCallback, useEffect, useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import { router, useFocusEffect } from "expo-router"
import Checkbox from 'expo-checkbox'
import { axiosPrivateClient } from '@/src/utils/axios'

import ActivityIndicatorComponent from '@/src/components/ActivityIndicatorComponent'
import ActionLinkButton from "@/src/components/ActionLinkButton"
import { ButtonCustomizer } from "@/src/components/ButtonCustomizer"

import useKeyboardStatus from "@/src/utils/keyboardUtils"
import { useAuthStore } from '@/src/store/useAuthStore'

import LinkIcon from '@/src/assets/images/linkIcon.svg'
import AddFriendIcon from '@/src/assets/images/addFriendIcon.svg'
import Search from '@/src/assets/images/search.svg'

import { styles as globalStyles } from "@/src/app/styles"
import { styles } from "../styles"
import { theme } from '@/src/theme'
import { useGroupStore } from '@/src/store/useGroupStore'

interface Friend {
  amigoId: string
  gruposEmComun: number
  nome: string
}

export default function AddParticipants() {
  const [isLoading, setIsLoading] = useState(false)
  const [friends, setFriends] = useState<Friend[]>()
  const [selected, setSelected] = useState<string[]>([])
  const [filteredFriends, setFilteredFriends] = useState<Friend[] | undefined>([])

  const isKeyboardVisible = useKeyboardStatus()
  const { userCod } = useAuthStore()
  const { setGroupData } = useGroupStore()

  // console.log(useGroupStore.getState())

  // Busca amigos na API ao carregar a tela
  useFocusEffect(
    useCallback(() => {
      const fetchFriends = async () => {
        setIsLoading(true)
        try {
          const { data } = await axiosPrivateClient.get('amizade/lista-amizades', {
            params: { userCod, 'metaData.pageNumber': 1, 'metaData.pageSize': 10 }
          })

          if (data.statusCode === 200) {
            setFriends(data.data)
            setFilteredFriends(data.data)
          }

        } catch (error) {
          console.log("Erro ao Buscar Amigos", error)

        } finally {
          setIsLoading(false)
        }
      }
      fetchFriends()
    }, [])
  )

  // Atualiza a lista filtrada conforme o usuário digita
  const handleSearch = (text: string) => {
    const filtered = friends?.filter(friend => friend.nome.includes(text))
    setFilteredFriends(filtered)
  }

  // Alterna a seleção de um amigo
  const toggleSelection = (nome: string) => {
    setSelected((prev) => {
      if (prev.includes(nome)) {
        return prev.filter((item) => item !== nome)
      }

      return [...prev, nome]
    })
  };

  const handleSubmit = () => {
    selected && setGroupData({ participantes: selected })
    router.push("/groups/newGroup/conditionPage")
  }

  if (isLoading) {
    return (
      <ActivityIndicatorComponent />
    )
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, gap: 30 }}>
        <View>
          <Text style={styles.label}>Adicionar participantes</Text>

          <View style={styles.searchInputContainer}>
            <TextInput
              placeholder={friends ? "Procurar amigos..." : "Sem amigos cadastrados"}
              onChangeText={handleSearch}
              style={{ flex: 1 }}
            />
            <Search width={24} height={24} />
          </View>

          {!isLoading && (filteredFriends?.length ?? 0) > 0 && (
            <View style={styles.participantsContainer}>
              <FlatList
                data={filteredFriends}
                keyExtractor={(item) => item.amigoId}
                renderItem={({ item }) => {

                  const isSelected = selected.includes(item.nome)

                  return (
                    <TouchableOpacity
                      style={[styles.checkboxItem, isSelected && { backgroundColor: theme.colors.third }]}
                      onPress={() => toggleSelection(item.nome)}
                    >
                      <Checkbox
                        value={isSelected}
                        onValueChange={() => toggleSelection(item.nome)}
                        color={isSelected ? theme.colors.primaryColor : undefined}
                        style={styles.checkbox}
                      />
                      <Text
                        style={[styles.checkboxText, isSelected && { fontFamily: theme.fontFamily.bold }]}
                      >
                        {item.nome}
                      </Text>
                    </TouchableOpacity>
                  )
                }}
              />
            </View>
          )}
        </View>

        <View>
          <View>
            <ActionLinkButton
              text="Convidar com link"
              icon={<LinkIcon />}
              link="/friends/addNewFriendsPage"
            />
          </View>

          <View>
            <ActionLinkButton
              text="Adicionar amigo"
              icon={<AddFriendIcon />}
              link="/friendsv/addNewFriendsPage"
            />
          </View>
        </View>
      </View>

      {/* Botão */}
      {!isKeyboardVisible &&
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <ButtonCustomizer.Root
            type="tertiaryHalfWidth"
            onPress={() => console.log("cancelar")}
          >
            <ButtonCustomizer.Title
              title="Cancelar"
              customStyles={globalStyles.secondaryButtonText}
            />
          </ButtonCustomizer.Root>

          <ButtonCustomizer.Root
            type="primaryHalfWidth"
            onPress={handleSubmit}
          >
            <ButtonCustomizer.Title
              title="Proximo"
              customStyles={globalStyles.primaryButtonText}
            />
          </ButtonCustomizer.Root>
        </View>
      }
    </ View>
  )
}