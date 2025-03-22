import { Text, View, Pressable } from 'react-native'
import { styles } from "./styles";
import { useState } from 'react';

export default function ConditionPage() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como será feita a divisão?</Text>

      <View style={styles.containerButton}>
        <Text style={styles.text}>Igualitária</Text>
        <Pressable
          style={[
            styles.checkbox, 
            isChecked && styles.checked,
            { borderColor: isChecked ? '#545F71' : '#9BA5B7' },
          ]}
          onPress={() => setIsChecked(!isChecked)}
        >
          {isChecked && <Text style={styles.checkmark}>✓</Text>}
        </Pressable>

      </View>
    </View>
  )
}