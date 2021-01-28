import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './CategoryListItemStyle.js'

export default function CategoryListItem(props) {
  return (
  <View>
    <View style={ styles.categoryView }>
      <Text style={ styles.categoryText }> {props.category.title} </Text>
      <Image source={props.category.image} style={styles.categoryImage}></Image>
    </View>
  </View>
  )
}
