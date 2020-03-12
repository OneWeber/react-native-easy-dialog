/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
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
        <Text>😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄</Text>
    </View>
  }
  render() {
    return (
        <View style={styles.conatiner}>
          <View onLayout={({nativeEvent:e})=> this.layout(e)} style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center',width: '100%'}}>
            <View>
              <RNEasyDialog
                  layoutVal={this.state.layVal}
                  content={this.getContent()}
                  positionStyle={'left'}
                  paddingInterval={5}
                  maxWidth={250}
                  backdropColor={'rgba(0,0,0,.2)'}
              >
                <Text>点击左边内容区域</Text>
              </RNEasyDialog>
            </View>
            <View>
              <RNEasyDialog
                  layoutVal={this.state.layVal}
                  content={this.getContent()}
                  positionStyle={'center'}
                  paddingInterval={5}
                  maxWidth={250}
                  backdropColor={'rgba(0,0,0,.2)'}
              >
                <Text>点击内容区域</Text>
              </RNEasyDialog>
            </View>
            <View>
              <RNEasyDialog
                  layoutVal={this.state.layVal}
                  content={this.getContent()}
                  positionStyle={'right'}
                  paddingInterval={5}
                  maxWidth={250}
                  backdropColor={'rgba(0,0,0,.2)'}
              >
                <Text>点击内容区域</Text>
              </RNEasyDialog>
            </View>
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
    height:60,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
