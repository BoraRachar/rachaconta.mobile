import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function AddParticipantsComponent() {
  return (
    <View>
      <Text style={styles.label}>Adicionar participantes</Text>
      <TextInput style={styles.input} placeholder="Sem amigos cadastrados" />
      <View style={styles.participantsContainer}>
        <Text>Onde ficaram os nomes dos amigos</Text>
        <Text>Onde ficaram os nomes dos amigos</Text>
        <Text>Onde ficaram os nomes dos amigos</Text>
        <Text>Onde ficaram os nomes dos amigos</Text>
        <Text>Onde ficaram os nomes dos amigos</Text>
        <Text>Onde ficaram os nomes dos amigos</Text>
      </View>
    </View>
  );
}
