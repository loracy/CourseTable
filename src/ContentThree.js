import React, { Component } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { List, ListItem, Tile } from 'react-native-elements';

// Make a component
class Content extends Component {
  render() {
  return (

    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', padding: 30 }} >
        
        <Text style={{ position: 'absolute', top: 145, color: 'green', fontSize: 40 }}>
          良好
        </Text>
      </View>
      <List>
        <ListItem
          title="有到"
          containerStyle={{ paddingLeft: 10 }}
          rightTitle="9 次"
          rightTitleStyle={{ color: 'black' }}
          rightTitleContainerStyle={{ paddingRight: 10 }}
          hideChevron
        />
        <ListItem
          title="未到"
          containerStyle={{ paddingLeft: 10 }}
          rightTitle="3 次"
          rightTitleStyle={{ color: 'black' }}
          rightTitleContainerStyle={{ paddingRight: 10 }}
          hideChevron
        />
        <ListItem
          title="事假"
          containerStyle={{ paddingLeft: 10 }}
          rightTitle="1 次"
          rightTitleStyle={{ color: 'black' }}
          rightTitleContainerStyle={{ paddingRight: 10 }}
          hideChevron
        />
        <ListItem
          title="病假"
          containerStyle={{ paddingLeft: 10 }}
          rightTitle="2 次"
          rightTitleStyle={{ color: 'black' }}
          rightTitleContainerStyle={{ paddingRight: 10 }}
          hideChevron
        />
        <ListItem
          title="公假"
          containerStyle={{ paddingLeft: 10 }}
          rightTitle="0 次"
          rightTitleStyle={{ color: 'black' }}
          rightTitleContainerStyle={{ paddingRight: 10 }}
          hideChevron
        />
      </List>
    </ScrollView>
  );
  }
}

export default Content;

