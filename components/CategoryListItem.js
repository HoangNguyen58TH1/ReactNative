import React from 'react'
import { Image, Text, View, TouchableOpacity, Alert } from 'react-native'
import styles from './CategoryListItemStyle.js'

export default function CategoryListItem(props) {
  const { category } = props
  return (
  <TouchableOpacity activeOpacity={0.5} onPress={() => 
    Alert.alert(
      category.title,
      `Click OK to show ${category.title}`,
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
          style: 'destructive'
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        }
      ],
      { cancelable: true }
    )
  }>
    <View style={ styles.categoryView }>
      <Text style={ styles.categoryText }> {category.title} </Text>
      <Image source={category.image} style={styles.categoryImage}></Image>
    </View>
  </TouchableOpacity>
  )
}
