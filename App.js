/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      primary: 0,
      secondary: 0,
    };
    Alert.alert('teste', this.state.primary);
    
  }

  incrementAOne(){
    // this.setState({
    //   pointA: this.state.primary++
    // });
  }

  incrementBOne(){
    // Alert.alert('teste', this.state.secondary);
    // let b = this.state.secondary;
    this.setState({secondary: this.state.secondary + 1 });
  }



  render() {
    return(
      <View style={styles.container}>
        <View style={styles.logo}>
          <View style={styles.naipeBox}>
            <Image 
                source={require('./images/naipe-ouro.png')}
                style={{width: 40, height: 40}} />
          </View>
          <View style={styles.naipeBox}>
            <Image 
                source={require('./images/naipe-espada.png')}
                style={{width: 40, height: 40}} />
          </View><View style={styles.naipeBox}>
            <Image 
                source={require('./images/naipe-copas.png')}
                style={{width: 40, height: 40}} />
          </View><View style={styles.naipeBox}>
            <Image 
                source={require('./images/naipe-paus.png')}
                style={{width: 40, height: 40}} />
          </View>
        </View>
        <View style={styles.menu}>
          <Text style={styles.title}>MARCADOR DE TRUCO</Text>
          <Text style={styles.title}>3100</Text>
        </View>
        <View style={styles.teams}>
          <View style={styles.team}>
            <Text style={styles.teamTitle}>A</Text>
            <Text style={styles.teamPoint}>{this.state.primary}</Text>
          </View>
          <View style={styles.team}>
            <Text style={styles.teamTitle}>B</Text>
            <Text style={styles.teamPoint}>{this.state.secondary}</Text>
          </View>
        </View>
        <View style={styles.reset}>
          <Text style={styles.resetButton}>Zerar?</Text>
        </View>
        <View style={styles.enhancers}>
          <View style={styles.enhancer}>
            <Text style={styles.enhancerButton} onPress={() => this.incrementAOne}>+</Text>
          </View>
          <View style={styles.enhancer}>
            <TouchableOpacity onPress={this.incrementBOne}>
            <Text style={styles.enhancerButton} >+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E8B57'
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  naipeBox: {
    height: 50,
    width: 50,
    borderColor: '#999',
    borderWidth: 5,
    margin: 10
  },
  title: {
    color: '#000'
  },
  menu: {
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  teams: {
    flex: 1,
    flexDirection: 'row',
  },
  team: {
    flex: 1,
    alignItems: 'center'
  },
  teamTitle: {
    fontSize: 50,
    color: '#000'
  },
  teamPoint: {
    fontSize: 100,
    marginTop: 40,
    borderRadius: 5,
    color: '#FFF'
  },
  enhancers: {
    flex: 1,
    flexDirection: 'row',
  },
  reset:{
    flex: 1,
    alignItems: 'center',
    marginTop: 60
  },
  resetButton: {
    alignItems: 'center',
    fontSize: 30,
    color: '#B22222'
  },
  enhancer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enhancerButton: {
    fontSize: 150,
    color: '#000'
  }
});

// App.propTypes = {
//   primary: PropTypes.number,
//   secondary: PropTypes.number,
// };
