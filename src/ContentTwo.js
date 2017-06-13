import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem, CheckBox } from 'react-native-elements';

class Content extends Component {

  render() {
    // const { position, height, center } = styles;
    // const unchecked = true;
    
    return (
        <View>
          <List>
            <CheckBox 
              title='期中考'
              textStyle={{ fontSize: 16 }}
              uncheckedIcon='circle-o'
              checkedIcon='check-circle-o'
              uncheckedColor='#545454'
            />
            <CheckBox 
              title='期末考'
              textStyle={{ fontSize: 16 }}
              uncheckedIcon='circle-o'
              checkedIcon='check-circle-o'
              uncheckedColor='#545454'
            />
            <ListItem 
              hideChevron
              leftIcon={{ name: 'add', color: '#545454', style: { left: 10 } }}
            />
            <ListItem
              hideChevron
              title="顯示已完成的項目"
              titleStyle={{ textAlign: 'center', color: '#0084ff' }}

            />
          </List>
        </View>
      );
    }
}
const styles = StyleSheet.create({
  position: {
    top: 100,
    zIndex: 100
  },
  height: {
    height: 200,
  },
  center: {
        alignItems: 'center',
      }
});

export default Content;
