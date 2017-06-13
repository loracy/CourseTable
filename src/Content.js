import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Content extends Component {

render() {
  const { position, height } = styles;
  return (
    
      <View style={position}>
        <List>
          <ListItem
            title="老師"
            rightTitle={'林老師'}
            rightTitleStyle={{ color: 'gray' }}
            rightTitleContainerStyle={{ alignItems: 'flex-start', marginLeft: -150 }}
            hideChevron
          />
          <ListItem
            title="教室"
            rightTitle={'C634'}
            rightTitleStyle={{ color: 'gray' }}
            rightTitleContainerStyle={{ alignItems: 'flex-start', marginLeft: -150 }}
            hideChevron
          />
          <ListItem
            title="學分"
            rightTitle={'2'}
            rightTitleStyle={{ color: 'gray' }}
            rightTitleContainerStyle={{ alignItems: 'flex-start', marginLeft: -150 }}
            hideChevron
          />
          <ListItem
            title="開始時間"
            rightTitle={'10:15'}
            rightTitleStyle={{ color: 'gray' }}
            rightTitleContainerStyle={{ alignItems: 'flex-start', marginLeft: -150 }}
            hideChevron
          />
          <ListItem
            title="結束時間"
            rightTitle={'11:05'}
            rightTitleStyle={{ color: 'gray' }}
            rightTitleContainerStyle={{ alignItems: 'flex-start', marginLeft: -150 }}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="備註"
            subtitle="明阿仔咩摳喜，I need to 咖紮悃"
            subtitleContainerStyle={{ marginTop: 5 }}
            hideChevron
            containerStyle={{ paddingBottom: 100, paddingTop: 15 }}
          />
        </List>
      </View>
      
  );
}
}
const styles = StyleSheet.create({
  position: {
      top: 0,
  },
  height: {
    
  },
});

export default Content;
