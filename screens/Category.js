import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

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

  constructor() {
    super();
    this.state = {
      category: [],
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    const category_id = navigation.getParam('id', 'no value');
    axios.get(`/products?category=${category_id}`)
      .then(res => {
        this.setState({
          category: res.data
        })
      })
      .catch(error => {
        console.error(error);
      })
  }

  render() {
    const { category } = this.state;

    return (
      <View style={styles.viewContainer}>

        <FlatList
          data={category}
          renderItem={ ({item}) => 
          <View style={styles.categoryView}>
            <Text style={styles.categoryTitle}>{item.title}</Text>
            <Text style={styles.categoryDescription}>{item.description}</Text>
            <Image source={{uri: item.images[0].url}} style={styles.categoryImage}></Image>
            <View style={styles.viewPrice}>
              <Text style={styles.categoryPrice}>Price: {item.price}</Text>
              <Text>Buy +</Text>
            </View>
          </View>
          }
          keyExtractor={ item => `${item.id}` }
        />

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
