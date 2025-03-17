import { Pressable, Text, TextInput, View } from "react-native"
import { router } from "expo-router"

import ActionLinkButton from "@/src/components/ActionLinkButton"
import { ButtonCustomizer } from "@/src/components/ButtonCustomizer"

import useKeyboardStatus from "@/src/utils/keyboardUtils"

import LinkIcon from '@/src/assets/images/linkIcon.svg'
import AddFriendIcon from '@/src/assets/images/addFriendIcon.svg'
import Search from '@/src/assets/images/search.svg'

import { styles as globalStyles } from "@/src/app/styles"
import { styles } from "../styles"

export default function AddParticipants() {
  const isKeyboardVisible = useKeyboardStatus()

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, gap: 30 }}>
        <View>
          <Text style={styles.label}>Adicionar participantes</Text>

          <View style={styles.searchInputContainer}>
            <TextInput
              placeholder="Sem amigos cadastrados"
            />
            <Pressable onPress={() => console.log('Clicked on search')}>
              <Search width={24} height={24} />
            </Pressable>
          </View>
          <View style={styles.participantsContainer}>
            <Text>Onde ficaram os nomes dos amigos</Text>
            <Text>Onde ficaram os nomes dos amigos</Text>
            <Text>Onde ficaram os nomes dos amigos</Text>
            <Text>Onde ficaram os nomes dos amigos</Text>
            <Text>Onde ficaram os nomes dos amigos</Text>
            <Text>Onde ficaram os nomes dos amigos</Text>
          </View>
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