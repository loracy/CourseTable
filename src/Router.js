import React, {Component} from 'react';
import { Linking, Button, ScrollView } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator, DrawerView, 
         NavigationActions } from 'react-navigation';
import { Icon, Tile, List } from 'react-native-elements';

import HomeScreen from './Header';
import AddScreen from './Add';
import SettingScreen from './Setting';
import CourseScreen from './Course';
import AccountScreen from './Account';
import LoginScreen from './Login';
import SignupScreen from './Signup';

// export const LoginStack = StackNavigator(
//   {
//     LoginScreen: {
//         screen: LoginScreen,
//     },
//     HomeStack: {
//         screen: HomeStack,
//     },
//     SignupStack: {
//         screen: SignupScreen,
//     }
// },
// {
//   headerMode: 'none' ,
// }
// );

export const HomeStack = StackNavigator(
{
  LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        header: () => ({
          style: ({ display: 'none' }),
        })
    },
  },
  SignupScreen: {
      screen: SignupScreen,
      navigationOptions: {
        header: () => ({
          style: ({ display: 'none' }),
        })
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '課表',
        left: (
          <Icon
            name='menu'
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />
        ),
        right:(
          <Icon
            name='add'
            iconStyle={{ marginRight : 10 }}
            onPress={ () => navigate('Add') }
          />
        ),
        style: ({ backgroundColor: '#a6e0d7' }),
      })
    },
  },
  Add: {
    screen: AddScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '新增課程',
        right:(
          <Icon
            name='done'
            iconStyle={{ marginRight : 10 }}
            onPress={ () => navigate('Home') }
          />
        ),
        style: ({ backgroundColor: '#a6e0d7' }),
      })
    },
  },

},
{
  // headerMode: 'screen',
    // headerStyle: (backgroundColor='#a6e0d7' )
}
);

export const SettingStack = StackNavigator({
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '設定',
        left: (
          <Icon
            name='menu'
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />
        ),
        style: ({ backgroundColor: '#a6e0d7' }),
      })
    },
  },
},
{
  // headerMode: 'none',
}
);

export const AccountStack = StackNavigator({
  Account: {
    screen: AccountScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '會員資料',
        left: (
          <Icon
            name='menu'
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />
        ),
        right: (
          <Icon
            name='mode-edit' 
            iconStyle={{ marginRight: 10 }}
          />
        ),
        style: ({ backgroundColor: '#a6e0d7' }),
      })
    },
  },
  HomeStack: {
    screen: HomeStack,
  }
},
{
  // headerMode: 'none',
}
);



export const DrawerRouter = DrawerNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        drawer: {
          label: '你的課表',
          icon: ({ tintColor }) => <Icon name="view-list" size={25} color={tintColor} />
        },
      },
    },

    SettingStack: {
      screen: SettingStack,
      navigationOptions: {
        drawer: {
          label: '設定',
          icon: ({ tintColor }) => <Icon name="settings" size={25} color={tintColor} />
        },
      },
    },

    AccountStack: {
      screen: AccountStack,
      navigationOptions: {
        drawer: {
          label: '會員',
          icon: ({ tintColor }) => <Icon name="settings" size={25} color={tintColor} />
        },
      },  
    },
     
  // LoginStack: {
  //   screen: LoginStack,
  //   navigationOptions: {
  //       drawer: {
  //         label: '登出',
  //         icon: ({ tintColor }) => <Icon name="settings" size={25} color={tintColor} />
  //       },
  //     },  
    
  // }
  },

  {
    initialRouteName: 'HomeStack',
    contentOptions: {
      activeTintColor: '#37bc9b',
    },
    // drawerWidth: 200,
    // drawerPosition: 'right',

    contentComponent: 
      props => (
        <ScrollView>
          <Tile
            imageSrc={require('./assets/drawerBG.jpeg')}
            featured
          />
          <DrawerView.Items {...props} />
        </ScrollView>
      )
  }
);


