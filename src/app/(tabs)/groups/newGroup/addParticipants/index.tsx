import { View } from "react-native"
import AddParticipantsComponent from "../../components/AddParticipants"
import ActionLinkButton from "@/src/components/ActionLinkButton"

import LinkIcon from '@/src/assets/images/linkIcon.svg'
import AddFriendIcon from '@/src/assets/images/addFriendIcon.svg'

export default function AddParticipants() {
  return (
    <View>
      <View style={{ marginTop: 16 }}>
        <AddParticipantsComponent />
      </View>

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
  )
}