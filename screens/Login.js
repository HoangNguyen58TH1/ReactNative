import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Cap from '../assets/icon.png';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  }

  render() {
    return(
      <View style={styles.viewContainer}>
        <View style={styles.viewLogo}>
          <Image source={Cap} style={styles.logo} ></Image>
          <Text style={styles.logoText}>COOL MUSIC</Text>
        </View>

        <View style={styles.viewButton}>
          <View>
            <TouchableOpacity>
              <Text style={styles.buttonTextIn}
                onPress={() => this.props.navigation.navigate('SignIn') }
              >Sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20}}>
            <TouchableOpacity>
              <Text style={styles.buttonTextUp}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#007aff',
    alignItems: 'center'
  },
  viewLogo: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 64,
    height: 64,
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20
  },

  viewButton: {
    flex: 1,
    width: '100%',
  },

  buttonTextIn: {
    color: '#007aff',
    backgroundColor:'#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 15,
    marginHorizontal: '15%',
    width: '70%',
    borderRadius: 6,
    overflow: 'hidden'
  },
  buttonTextUp: {
    color: '#fff',
    backgroundColor:'#007aff',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 15,
    marginHorizontal: '15%',
    width: '70%',
    borderRadius: 6,
    overflow: 'hidden'
  }
})