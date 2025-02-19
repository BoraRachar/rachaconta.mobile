import React, { useRef, useState } from 'react'
import { View, FlatList, Text } from 'react-native'
import { Link } from 'expo-router'
import { CarouselItem } from '../CarouselItem'
import { PaginationCarousel } from '../PaginationCarousel/index'

import ChevronArrowRight from '@/src/assets/images/chevron-arrow-right.svg'

import { styles } from './style'

const carouselJSON = [
  {
    id: 1,
    title: 'A receber',
    value: '1.111,11',
  },
  {
    id: 2,
    title: 'A pagar',
    value: '2.222,22',
  },
]

export const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const flatListRef = useRef<FlatList>(null)

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index)
    }
  }).current

  return (
    <View style={styles.flatListContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Meus Saldos</Text>
        <Link href="/home">
          <ChevronArrowRight width={12} height={12} />
        </Link>
      </View>

      <FlatList
        data={carouselJSON}
        ref={flatListRef}
        renderItem={({ item }) => <CarouselItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
      />

      <View style={styles.paginationContainer}>
        <PaginationCarousel data={carouselJSON} activeIndex={activeIndex} />
      </View>
    </View>
  )
}
