import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Category extends React.Component {
  static navigationOptions = ( {navigation} ) => {
    return {
     title: navigation.getParam('title'),
     headerStyle: {
      backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  }

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'no value');
    const image = navigation.getParam('image', 'no value');
    const description = navigation.getParam('description', 'no value');
    const price = navigation.getParam('price', 'no value');

    return (
      <View style={styles.viewContainer}>
        <View style={styles.categoryView}>
          <Text style={styles.categoryTitle}>{title}</Text>
          <Text style={styles.categoryDescription}>{description}</Text>
          <Image source={image} style={styles.categoryImage}></Image>
          <Text style={styles.categoryPrice}>Price: {price}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  categoryView: {
    alignItems: "center",
  },
  categoryTitle: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: 'uppercase',
    marginBottom: 15
  },
  categoryDescription: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
    paddingHorizontal: 15
  },
  categoryImage: {
    width: 140,
    height: 140,
    marginBottom: 15,
  },
  categoryPrice: {
    fontSize: 20,
    textAlign: "center"
  },
})
