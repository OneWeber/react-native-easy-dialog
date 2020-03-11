/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RNEasyDialog from 'react-native-easy-dialog';
export default class App extends Component{
  state={
    layVal: 0
  }
  layout(e) {
    this.setState({
      layVal: parseInt(e.layout.y)
    })
  }
  getContent() {
    return <View style={styles.dialog_con}>
        <Text>哈哈哈</Text>
    </View>
  }
  render() {
    return (
        <View style={styles.conatiner}>
          <View onLayout={({nativeEvent:e})=> this.layout(e)} >
            <RNEasyDialog
              layoutVal={this.state.layVal}
              content={this.getContent()}
              backdropColor={'rgba(0,0,0,.2)'}
            >
              <Text>点击</Text>
            </RNEasyDialog>
          </View>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dialog_con: {
    width:40,
    height:60,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
