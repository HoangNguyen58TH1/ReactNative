import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './CategoryListItemStyle.js'

export default function CategoryListItem(props) {
  const { category } = props
  return (
  <View style={ styles.categoryView }>
    <Text style={ styles.categoryText }> {category.title} </Text>
    <Image source={category.image} style={styles.categoryImage}></Image>
  </View>
  )
}
