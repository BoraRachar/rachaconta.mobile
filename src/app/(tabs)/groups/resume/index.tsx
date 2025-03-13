import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';

import PencilBlack from '@/src/assets/images/pencil-black.svg'
import { Link } from 'expo-router';

const Resume: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
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


    </ScrollView>
  )
}

export default Resume;
