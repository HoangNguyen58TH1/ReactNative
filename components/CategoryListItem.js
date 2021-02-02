import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import styles from './CategoryListItemStyle.js'

export default function CategoryListItem(props) {
  const { category, onPress } = props
  return (
  <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
    <View style={ styles.categoryView }>
      <Text style={ styles.categoryText }> {category.title} </Text>
      <Image source={{uri: category.image}} style={styles.categoryImage}></Image>
    </View>
  </TouchableOpacity>
  )
}
