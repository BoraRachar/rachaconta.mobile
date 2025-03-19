import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"
import Checkbox from 'expo-checkbox'
import { axiosPrivateClient } from '@/src/utils/axios'

import ActionLinkButton from "@/src/components/ActionLinkButton"
import { ButtonCustomizer } from "@/src/components/ButtonCustomizer"

import useKeyboardStatus from "@/src/utils/keyboardUtils"

import LinkIcon from '@/src/assets/images/linkIcon.svg'
import AddFriendIcon from '@/src/assets/images/addFriendIcon.svg'
import Search from '@/src/assets/images/search.svg'

import { styles as globalStyles } from "@/src/app/styles"
import { styles } from "../styles"
import { theme } from '@/src/theme'
import { useAuthStore } from '@/src/store/useAuthStore'

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

  // Busca amigos na API ao carregar a tela
  useEffect(() => {
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

  // Atualiza a lista filtrada conforme o usuário digita
  const handleSearch = (text: string) => {
    const filtered = friends?.filter(friend => friend.nome.includes(text))
    setFilteredFriends(filtered)
  }

  // Alterna a seleção de um amigo
  const toggleSelection = (amigoId: string) => {
    setSelected((prev) => {
      console.log(prev)
      return (
        prev.includes(amigoId) ? prev.filter((item) => item !== amigoId) : [...prev, amigoId]
      )
    }
    );
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#007AFF" />}

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

                  const isSelected = selected.includes(item.amigoId)

                  return (
                    <TouchableOpacity
                      style={[styles.checkboxItem, isSelected && { backgroundColor: theme.colors.third }]}
                      onPress={() => toggleSelection(item.amigoId)}
                    >
                      <Checkbox
                        value={isSelected}
                        onValueChange={() => toggleSelection(item.amigoId)}
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
            onPress={() => router.push("/groups/newGroup/addParticipants")}
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