import React from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

// Make a component
const Setting = () => {
  return (
    <ScrollView>
      <List containerStyle={{ marginBottom: 30 }}>
        <ListItem
          title="星期"
        />
        <ListItem
          title="節次"
        />
        <ListItem
          title="每節課的上課時間"
        />
      </List>
      <List>
        <ListItem
          title="通知設定"
        />
        <ListItem
          title="查看使用說明"
        />
      </List>
    </ScrollView>
  );
};

export default Setting;
