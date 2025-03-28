import { Text, View, Pressable, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { styles } from "./styles";
import { useState } from 'react';
import TeamSpirit from '@/src/assets/images/teamSpirit.svg'
import { theme } from '@/src/theme'
import { ButtonCustomizer } from "@/src/components/ButtonCustomizer";
import { styles as globalStyles } from "@/src/app/styles";
import { router } from 'expo-router'
import { useGroupStore } from '@/src/store/useGroupStore';

export default function ConditionPage() {
  const [selectedOption, setSelectedOption] = useState<'equal' | 'value' | 'percentage' | 'quota' | null>(null)
  const { setGroupData } = useGroupStore()

  const handleSubmit = () => {
    if (selectedOption === null) {
      Alert.alert('Atenção', 'Selecione uma opção de divisão.')
      return
    }

    const validOptions = {
      equal: 0,
      value: 1,
      percentage: 2,
      quota: 3
    }

    setGroupData({ tipoDivisao: validOptions[selectedOption] })
    router.push('/groups/newGroup/resume')
  }



  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'space-between', minHeight: '100%' }}>
        <View>
          <Text style={styles.title}>Como será feita a divisão?</Text>

          <TouchableOpacity
            style={styles.containerCheckboxArea}
            onPress={() => setSelectedOption(selectedOption === 'equal' ? null : 'equal')}
          >
            <View style={styles.containerTitleCheckbox}>
              <Text style={[styles.secondaryTitle, selectedOption === 'equal' ? { fontFamily: theme.fontFamily.semiBold } : { fontFamily: theme.fontFamily.regular }]}>Igualitária</Text>
              <Pressable
                onPress={() => setSelectedOption(selectedOption === 'equal' ? null : 'equal')}
                style={[
                  styles.checkbox,
                  selectedOption === 'equal' && styles.checked,
                  { borderColor: selectedOption === 'equal' ? '#545F71' : '#9BA5B7' },
                ]}
              >
                {selectedOption === 'equal' && <Text style={styles.checkmark}>✓</Text>}
              </Pressable>
            </View>
            <View style={selectedOption === 'equal' ? styles.containerImageText : { display: 'none' }}>
              <TeamSpirit />
              <Text style={styles.text}>
                Na divisão iguálitária todos os participantes pagam o mesmo valor, independente do consumo ou contribuição. Ou seja, para despesa de R$100,00 em que 4 pessoas querem dividir, cada um pagaria R$25,00.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerCheckboxArea}
            onPress={() => setSelectedOption(selectedOption === 'value' ? null : 'value')}
          >
            <View style={styles.containerTitleCheckbox}>
              <Text style={[styles.secondaryTitle, selectedOption === 'value' ? { fontFamily: theme.fontFamily.semiBold } : { fontFamily: theme.fontFamily.regular }]}>Por valor exato</Text>
              <Pressable
                onPress={() => setSelectedOption(selectedOption === 'value' ? null : 'value')}
                style={[
                  styles.checkbox,
                  selectedOption === 'value' && styles.checked,
                  { borderColor: selectedOption === 'value' ? '#545F71' : '#9BA5B7' },
                ]}
              >
                {selectedOption === 'value' && <Text style={styles.checkmark}>✓</Text>}
              </Pressable>
            </View>
            <View style={selectedOption === 'value' ? styles.containerImageText : { display: 'none' }}>
              <TeamSpirit />
              <Text style={styles.text}>
                Cada pessoa paga o valor exato que consumiu. Exemplo: Uma conta de R$100 com 2 pessoas: a pessoa que consumiu R$ 60 paga R$60, e a outra pessoa paga R$40. Ideal para: Quando há itens com valores distintos e a divisão precisa ser precisa. Observação: Pode ser trabalhoso registrar os valores individuais e nem sempre resulta em valores redondos para pagamento.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerCheckboxArea}
            onPress={() => setSelectedOption(selectedOption === 'percentage' ? null : 'percentage')}
          >
            <View style={styles.containerTitleCheckbox}>
              <Text style={[styles.secondaryTitle, selectedOption === 'percentage' ? { fontFamily: theme.fontFamily.semiBold } : { fontFamily: theme.fontFamily.regular }]}>Por percentual</Text>
              <Pressable
                onPress={() => setSelectedOption(selectedOption === 'percentage' ? null : 'percentage')}
                style={[
                  styles.checkbox,
                  selectedOption === 'percentage' && styles.checked,
                  { borderColor: selectedOption === 'percentage' ? '#545F71' : '#9BA5B7' },
                ]}
              >
                {selectedOption === 'percentage' && <Text style={styles.checkmark}>✓</Text>}
              </Pressable>
            </View>
            <View style={selectedOption === 'percentage' ? styles.containerImageText : { display: 'none' }}>
              <TeamSpirit />
              <Text style={styles.text}>
                Cada pessoa contribui com um percentual pré-definido do total. Exemplo: Uma conta de R$100 com 3 pessoas: Pessoa 1 (30%): R$30, Pessoa 2 (40%): R$40, Pessoa 3 (30%): R$30. Ideal para: Quando as pessoas têm diferentes níveis de renda ou desejam ter pesos diferentes na divisão. Observação: Requer definir as porcentagens de cada um, o que pode gerar discussões.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerCheckboxArea}
            onPress={() => setSelectedOption(selectedOption === 'quota' ? null : 'quota')}
          >
            <View style={styles.containerTitleCheckbox}>
              <Text style={[styles.secondaryTitle, selectedOption === 'quota' ? { fontFamily: theme.fontFamily.semiBold } : { fontFamily: theme.fontFamily.regular }]}>Por cotas</Text>
              <Pressable
                onPress={() => setSelectedOption(selectedOption === 'quota' ? null : 'quota')}
                style={[
                  styles.checkbox,
                  selectedOption === 'quota' && styles.checked,
                  { borderColor: selectedOption === 'quota' ? '#545F71' : '#9BA5B7' },
                ]}
              >
                {selectedOption === 'quota' && <Text style={styles.checkmark}>✓</Text>}
              </Pressable>
            </View>
            <View style={selectedOption === 'quota' ? styles.containerImageText : { display: 'none' }}>
              <TeamSpirit />
              <Text style={styles.text}>
                Cada pessoa paga um valor fixo previamente definido, independente do valor total da conta. Exemplo: Uma cota de R$50 por pessoa para um jantar. Se o jantar custar R$150, todos pagam R$50, dividindo o restante (R$50) igualmente entre quem consumiu algo a mais. Ideal para: Grupos com orçamentos definidos ou quando há custos fixos (aluguel, internet) a serem divididos. Observação: Pode ser necessário ajustar as cotas conforme o valor real das despesas, e nem sempre todos pagam o valor exato que consumiram.
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={[{ marginTop: 'auto', paddingTop: 25, flexDirection: "row", gap: 16 }, selectedOption === null ? { paddingBottom: 0 } : { paddingBottom: 25 }]}
        >
          <ButtonCustomizer.Root
            type="tertiaryHalfWidth"
            onPress={() => router.push('/groups')}
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
              title="Continuar"
              customStyles={globalStyles.primaryButtonText}
            />
          </ButtonCustomizer.Root>
        </View>
      </View>
    </ScrollView>
  )
}