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
          <Image source={image[0]} style={styles.categoryImage}></Image>
          <View style={styles.viewPrice}>
            <Text style={styles.categoryPrice}>Price: {price}</Text>
            <Text>Buy +</Text>
          </View>
        </View>

        <View style={styles.categoryView}>
          <Text style={styles.categoryTitle}>{title}</Text>
          <Text style={styles.categoryDescription}>{description}</Text>
          <Image source={image[1]} style={styles.categoryImage}></Image>
          <View style={styles.viewPrice}>
            <Text style={styles.categoryPrice}>Price: {price}</Text>
            <Text>Buy +</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
    padding: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  categoryView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#fff',
    margin: 5,
    padding: 5
  },
  categoryTitle: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: 'uppercase',
    marginBottom: 10
  },
  categoryDescription: {
    fontSize: 13,
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 15
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  categoryPrice: {
    fontSize: 14,
    textAlign: "center",
  },
  viewPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  }
})
