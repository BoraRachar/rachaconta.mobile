import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { theme } from '@/src/theme'
import WarningCircleBadge from '../../assets/images/WarningCircleBadge.svg'
import WarningBadge from '../../assets/images/WarningBadge.svg'
import SuccessCircleBadge from '../../assets/images/SuccessCircleBadge.svg'

type Strength = 'Fraca' | 'Média' | 'Forte'

interface BadgeProps {
  strength: Strength
}

const Badge: React.FC<BadgeProps> = ({ strength }) => {
  let backgroundColor
  let textColor

  switch (strength) {
    case 'Fraca':
      backgroundColor = theme.colors.Error[50]
      textColor = theme.colors.Error[700]
      break
    case 'Média':
      backgroundColor = theme.colors.Warning[50]
      textColor = theme.colors.Warning[700]
      break
    case 'Forte':
      backgroundColor = theme.colors.Success[50]
      textColor = theme.colors.Success[700]
      break
    default:
      backgroundColor = 'grey'
  }

  return (
    <View style={[styles.badge, { backgroundColor }]}>
      {strength === 'Fraca' && <WarningCircleBadge />}
      {strength === 'Média' && <WarningBadge />}
      {strength === 'Forte' && <SuccessCircleBadge />}
      <Text style={[styles.text, { color: textColor }]}>{strength}</Text>
    </View>
  )
}

export default Badge
