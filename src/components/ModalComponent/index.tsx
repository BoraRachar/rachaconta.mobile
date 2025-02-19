import { Modal, Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'
import { theme } from '@/src/theme'

type ModalComponentProps = {
  type: 'simple' | 'complete'
  title: string
  description?: string
  textButton1: string
  textButton2?: string
  onPress: () => void
  showModal: [
    modalVisible: boolean,
    setModalVisible: (modalVisible: boolean) => void,
  ]
}
export default function ModalComponent({
  type = 'simple',
  title,
  description,
  textButton1,
  textButton2,
  showModal,
  onPress,
}: ModalComponentProps) {
  const [modalVisible, setModalVisible] = showModal

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>

          {type === 'simple' ? (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={onPress}
                style={[styles.button, { backgroundColor: theme.colors.third }]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: theme.colors.primaryColor },
                  ]}
                >
                  {textButton1}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={[styles.button, { backgroundColor: theme.colors.third }]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: theme.colors.primaryColor },
                  ]}
                >
                  {textButton1}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={onPress}
                style={[
                  styles.button,
                  { backgroundColor: theme.colors.primaryColor },
                ]}
              >
                <Text
                  style={[styles.buttonText, { color: theme.colors.white }]}
                >
                  {textButton2}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  )
}
