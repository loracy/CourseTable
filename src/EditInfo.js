import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, PixelRatio } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';

class EditInfo extends Component {
      
render() {
  const { goBack } = this.props.navigation;
  return (
      <ScrollView>
        <List>
          <ListItem
            title='標題'
            rightTitle='運動按摩'
            rightTitleStyle={{ color: 'gray' }}
            rightTitleContainerStyle={{ alignItems: 'flex-start', marginLeft: -150 }}
            hideChevron
          />
          <ListItem
            title='老師'
            rightTitle='林老師'
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
            title="顏色"
            rightTitle={'●'}
            rightTitleStyle={{ color: '#6fa8dc' }}
            rightTitleContainerStyle={{ alignItems: 'flex-start', marginLeft: -150 }}
            hideChevron
          />
        </List>
        <List>
          <ListItem
            title="通知"
            rightTitle={'15分鐘前'}
          />
          <ListItem
            title="重複"
            rightTitle={'每週'}
          />
          <ListItem
            title="重複結束"
            rightTitle={'2017年6月30日 週五'}
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
        <Button 
          title='刪除此課程'
          icon={{ name: 'delete', color: 'red' }}
          backgroundColor='#ffffff'
          color='red'
          raised
          buttonStyle={{ marginTop: 15, width: 200 * PixelRatio.get(), marginLeft: -20 }}
        />
      </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
  btn: {
    marginTop: 50,
    width: 400,
  }
});
export default EditInfo;

