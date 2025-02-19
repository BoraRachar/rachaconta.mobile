import { theme } from '@/src/theme'
import React from 'react'
import { StyleSheet, View } from 'react-native'

interface CarouselItem {
  id: number
  title: string
  value: string
}

// Defina as props que o componente filho vai receber
interface ChildComponentProps {
  data: CarouselItem[] // O array com os dados
  activeIndex: number
}

export const PaginationCarousel: React.FC<ChildComponentProps> = ({
  data,
  activeIndex,
}) => {
  return (
    <>
      {data.map((data, index) => {
        return (
          <View
            key={data.id}
            style={[
              styles.dot,
              activeIndex === index ? styles.dotActive : styles.dotInactive,
            ]}
          />
        )
      })}
    </>
  )
}

const styles = StyleSheet.create({
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: theme.colors.primaryColor,
  },
  dotInactive: {
    backgroundColor: theme.colors.fourth,
  },
})
