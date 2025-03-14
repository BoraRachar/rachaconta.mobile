import { View, Text, FlatList, ScrollView } from 'react-native';
import { Link, router } from 'expo-router';

import { styles as globalStyles } from '@/src/app/styles';
import styles from './styles';

import UserImage from '@/src/assets/images/user-circle.svg'
import PencilBlack from '@/src/assets/images/pencil-black.svg'
import { ButtonCustomizer } from '@/src/components/ButtonCustomizer';

const DATA = ['Junior Alves', 'João da Silva', 'Maria da Silva', 'José da Silva', 'Junior Alves', 'João da Silva', 'Maria da Silva', 'José da Silva', 'Junior Alves', 'João da Silva', 'Maria da Silva', 'José da Silva', 'Junior Alves', 'João da Silva', 'Maria da Silva', 'José da Silva']

const Resume: React.FC = () => {
  return (
    <ScrollView style={styles.container} scrollEnabled={true}>
      {/* Header */}
      <Text style={styles.title}>Nova divisão</Text>

      {/* Resume list */}
      <View>
        <View style={styles.item}>
          <View>
            <Text style={styles.titleItem}>Nome do Grupo</Text>
            <Text style={styles.textItem}>Jantar com os amigos</Text>
            <Text style={[styles.category, styles.titleItem]}>Alimentação</Text>
          </View>
          <View>
            <Link href={'/groups/newGroup'}>
              <PencilBlack width={22} height={22} />
            </Link>
          </View>
        </View>

        <View style={styles.item}>
          <View>
            <Text style={styles.titleItem}>Descrição</Text>
            <Text style={styles.textItem}>Churras do Bora Churras do Bora Churras do Bora</Text>
          </View>
          <View>
            <Link href={'/groups/newGroup'}>
              <PencilBlack width={22} height={22} />
            </Link>
          </View>
        </View>

        <View style={styles.item}>
          <View>
            <Text style={styles.titleItem}>Quando</Text>
            <Text style={styles.textItem}>04/04/2024</Text>
          </View>
          <View>
            <Link href={'/groups/newGroup'}>
              <PencilBlack width={22} height={22} />
            </Link>
          </View>
        </View>

        <View style={styles.item}>
          <View>
            <Text style={styles.titleItem}>Condição de divisão</Text>
            <Text style={styles.textItem}>Igualitária</Text>
          </View>
          <View>
            <Link href={'/groups/newGroup'}>
              <PencilBlack width={22} height={22} />
            </Link>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.item}>
          <Text style={styles.titleItem}>Participantes</Text>
          <Link href={'/groups/newGroup'}>
            <PencilBlack width={22} height={22} />
          </Link>
        </View>

        <View style={{ maxHeight: 200 }}>
          <ScrollView nestedScrollEnabled={true}>
            {DATA.map((item, index) => (
              <View key={index} style={styles.participantsItem}>
                <Text style={styles.textItem}>{index + 1}</Text>
                <UserImage width={32} height={32} />
                <Text style={styles.textItem}>{item}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

      </View>

      {/* Botão */}
      <View style={{ marginTop: 50, paddingBottom: 50, flexDirection: "row", gap: 16 }}>
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
          onPress={() => router.push("/groups/resume")}
        >
          <ButtonCustomizer.Title
            title="Criar"
            customStyles={globalStyles.primaryButtonText}
          />
        </ButtonCustomizer.Root>
      </View>

    </ScrollView>
  )
}

export default Resume;
