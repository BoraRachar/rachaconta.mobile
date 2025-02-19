import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { useAuthStore } from '@/src/store/useAuthStore'

import { ButtonCustomizer } from '@/src/components/ButtonCustomizer'
import { Carousel } from '@/src/components/CardReceberPagar/'

import { theme } from '@/src/theme'
import { styles as globalStyles } from '@/src/app/styles'

import Bells from '@/src/assets/images/bell-icon.svg'
import CircleUser from '@/src/assets/images/user-circle-icon.svg'
import qrcodeImage from '@/src/assets/images/qrcode.svg'
import calculatorImage from '@/src/assets/images/calculator.svg'
import ChevronRight from '../../../assets/images/chevron-right.svg'
import HandCoins from '../../../assets/images/HandCoins.svg'
import Money from '../../../assets/images/MoneyWavy.svg'

export default function Home() {
  const { userName } = useAuthStore()
  const getHeightScreen = Dimensions.get('window').height

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.title}>{userName && `Ola, ${userName}`}</Text>

        <View style={styles.headerIcon}>
          <Bells />
          <CircleUser />
        </View>
      </View>

      {/* Slider */}
      <View style={{ gap: 12, paddingTop: 10 }}>
        <Carousel />
      </View>

      {/* Button */}
      <View style={[styles.buttonsContainer, { marginTop: 30 }]}>
        <ButtonCustomizer.Root
          type="tertiaryHalfWidth"
          onPress={() => console.log('Meu QR')}
          customStyles={{ backgroundColor: theme.colors.third, borderWidth: 0 }}
        >
          <ButtonCustomizer.Icon
            icon={qrcodeImage}
            customStyles={{ marginRight: 8 }}
          />
          <ButtonCustomizer.Title
            title="Meu QR"
            customStyles={globalStyles.tertiaryButtonText}
          />
        </ButtonCustomizer.Root>

        <ButtonCustomizer.Root
          type="primaryHalfWidth"
          onPress={() => console.log('Calculadora')}
          customStyles={globalStyles.primaryButtonHalfWidth}
        >
          <ButtonCustomizer.Icon
            icon={calculatorImage}
            customStyles={(globalStyles.primaryButtonIcon, { marginRight: 8 })}
          />
          <ButtonCustomizer.Title
            title="Calculadora"
            customStyles={globalStyles.primaryButtonText}
          />
        </ButtonCustomizer.Root>
      </View>

      {/* List */}
      <View style={{ gap: 16, marginTop: 27, padding: 24 }}>
        <View
          style={{
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: theme.colors.Gray[700],
              }}
            >
              Últimas Atividades
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Link
                href="/activity"
                style={{
                  color: theme.colors.Gray[400],
                }}
              >
                Ver mais
              </Link>
              <ChevronRight />
            </View>
          </View>
        </View>
        <ScrollView
          style={{ height: getHeightScreen * 0.3 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: theme.colors.Primary[100],
              paddingVertical: 12,
            }}
          >
            <View style={{ width: '100%', flexDirection: 'row', gap: 10 }}>
              <View
                style={{
                  width: '17%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <View
                  style={{
                    backgroundColor: theme.colors.Error[500],
                    width: 48,
                    height: 48,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}
                >
                  <Money />
                </View>
              </View>
              <View style={{ width: '60%', gap: 2 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: theme.colors.Gray[700],
                    lineHeight: 22,
                  }}
                >
                  Pagamento da Cerveja
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: theme.colors.Gray[700],
                    lineHeight: 22,
                  }}
                >
                  Churras do Bora
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: theme.colors.Gray[700],
                    lineHeight: 22,
                  }}
                >
                  Yesterday, 21:49
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: theme.colors.Error[500],
                    lineHeight: 22,
                  }}
                >
                  -R$4,30
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: theme.colors.Primary[100],
              paddingBottom: 12,
            }}
          >
            <View style={{ width: '100%', flexDirection: 'row', gap: 10 }}>
              <View
                style={{
                  width: '17%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <View
                  style={{
                    backgroundColor: theme.colors.Success[500],
                    width: 48,
                    height: 48,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}
                >
                  <HandCoins />
                </View>
              </View>
              <View style={{ width: '60%', gap: 2 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: theme.colors.Gray[700],
                    lineHeight: 22,
                  }}
                >
                  Pagamento da Cerveja
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: theme.colors.Gray[700],
                    lineHeight: 22,
                  }}
                >
                  Churras do Bora
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: theme.colors.Gray[700],
                    lineHeight: 22,
                  }}
                >
                  Ontem, 21:41
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: theme.colors.Success[500],
                    lineHeight: 22,
                  }}
                >
                  +R$9,00
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: theme.colors.Primary[100],
              paddingBottom: 30,
            }}
          >
            <View style={{ width: '100%', flexDirection: 'row', gap: 10 }}>
              <View
                style={{
                  width: '17%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <View
                  style={{
                    backgroundColor: theme.colors.Error[500],
                    width: 48,
                    height: 48,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}
                >
                  <Money />
                </View>
              </View>
              <View style={{ width: '60%', gap: 2 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: theme.colors.Gray[700],
                    lineHeight: 22,
                  }}
                >
                  Pagamento da Cerveja
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: theme.colors.Gray[700],
                    lineHeight: 22,
                  }}
                >
                  Churras do Bora
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: theme.colors.Gray[700],
                    lineHeight: 22,
                  }}
                >
                  Ontem, 21:35
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: theme.colors.Error[500],
                    lineHeight: 22,
                  }}
                >
                  -R$6,10
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 22,
  },
  headerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.sizes.fontSize24,
    lineHeight: 30,
    color: theme.colors.primaryColor,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
})
