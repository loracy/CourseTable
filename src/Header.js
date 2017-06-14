import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import * as firebase from 'firebase';
// import { StackNavigator } from 'react-navigation';
import { DrawerNavigator, TabNavigator, StackNavigator, DrawerView } from 'react-navigation';

import CourseScreen from './Course';
import EditInfoScreen from './EditInfo';
import SettingScreen from './Setting';
import AddScreen from './Add';


class HomeSreen extends React.Component {
  state = { 
    courses: [],
    name: null,
    description: null,
    teacher: null,
    day: null,
    startTime: null,
    endTime: null,
    class: null,
    
   };
  
  componentDidMount() {
    this.setUserInfo();
  }

  setUserInfo = async () => {
    const { currentUser } = firebase.auth();
    let dbUseridCourse = firebase.database().ref(`/users/${currentUser.uid}`)
    try {
      let snapshot = await dbUserid.once('value');
      // let class = snapshot.val().child('網際網路概論').class;
      // let Femail = snapshot.val().email;
      let Fclass = snapshot.val().email;
      // let Fdepartment = snapshot.val().department;
      console.log('trying to get the info from firebase........')
      this.setState({ class: Fclass });
      console.log('setting the new state...............')
    } catch (err) { 
      console.log('cant see the info...........')
    }

  }

  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    const { firstRowBox, boxWeek, blank, box1, boxTime, boxTimeNo, boxTimes, btnCourse } = styles;
    return (
      <View style={{ position: 'relative' }}>
      <View style={{ flexDirection: 'row' }}>
            
            <View style={{ flexDirection: 'column' }}>
                <Text style={blank} />
                <View style={boxTime}><Text style={boxTimes}>08:10</Text><Text style={boxTimeNo}>1</Text><Text style={boxTimes}>09:00</Text></View>
                <View style={boxTime}><Text style={boxTimes}>09:05</Text><Text style={boxTimeNo}>2</Text><Text style={boxTimes}>09:55</Text></View>
                <View style={boxTime}><Text style={boxTimes}>10:15</Text><Text style={boxTimeNo}>3</Text><Text style={boxTimes}>11:05</Text></View>
                <View style={boxTime}><Text style={boxTimes}>11:10</Text><Text style={boxTimeNo}>4</Text><Text style={boxTimes}>12:00</Text></View>
                <View style={boxTime}><Text style={boxTimes}>13:30</Text><Text style={boxTimeNo}>5</Text><Text style={boxTimes}>14:20</Text></View>
                <View style={boxTime}><Text style={boxTimes}>14:25</Text><Text style={boxTimeNo}>6</Text><Text style={boxTimes}>15:15</Text></View>
                <View style={boxTime}><Text style={boxTimes}>15:35</Text><Text style={boxTimeNo}>7</Text><Text style={boxTimes}>16:25</Text></View>
                <View style={boxTime}><Text style={boxTimes}>16:30</Text><Text style={boxTimeNo}>8</Text><Text style={boxTimes}>17:20</Text></View>
            </View>
            
            <View style={{ flexDirection: 'column' }}>
              <View style={firstRowBox}><Text style={boxWeek}>週一</Text></View>
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
            </View>
            
            <View style={{ flexDirection: 'column' }}>
              <View style={firstRowBox}><Text style={boxWeek}>週二</Text></View>
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
            </View>

            <View style={{ flexDirection: 'column' }}>
              <View style={firstRowBox}><Text style={boxWeek}>週三</Text></View>
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
            </View>
            
            <View style={{ flexDirection: 'column' }}>
              <View style={firstRowBox}><Text style={boxWeek}>週四</Text></View>
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
            </View>

            <View style={{ flexDirection: 'column' }}>
              <View style={firstRowBox}><Text style={boxWeek}>週五</Text></View>
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
            </View>
        </View>
        <View style={btnCourse}>
          <Button
             title='運動按摩'
             onPress={() => navigate('Course')}
             backgroundColor='#6fa8dc'
             buttonStyle={{ position: 'relative', width: 65, height: 210, marginLeft: 0, padding: 3 }}
             color='#ffffff'
             fontSize={14}
            />
            <Button 
              title='class'
              backgroundColor='#0a8ac4'
              buttonStyle={{ position: 'absolute', bottom: 0, width: 65, height: 25, marginLeft: 0, padding: 3 }}
              fontSize={14}
            />
        </View>
        </View>
    );     
  }
}


const styles = StyleSheet.create({
     firstRowBox: {
        backgroundColor: '#37bc9b',
        justifyContent: 'center',
        width: 65,
        height: 42,
        borderWidth: 0.5,
        borderColor: 'gray',
    },
    blank: {
        backgroundColor: '#37bc9b',
        width: 50,
        height: 42,
    },
    boxWeek: {
      color: '#ffffff',
      textAlign: 'center',
    },
    box1: {
        backgroundColor: '#f3f3f3',
        borderWidth: 0.5,
        borderColor: 'gray',
        width: 65,
        height: 70,
        textAlign: 'center',
        color: '#545454',
    },
    boxTime: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 70,
        borderWidth: 0.5,
        borderColor: 'gray',
        backgroundColor: '#f3f3f3',
    },
    boxTimeNo: {
      color: '#37bc9b',
      fontSize: 19,
      fontWeight: '500',
    },
    boxTimes: {
      color: '#37bc9b',
      fontSize: 12,
      fontWeight: '200',
    },
    btnCourse: {
      position: 'absolute',
      left: 115,
      top: 112,
    }
});

export default HomeSreen;

// export const Header = StackNavigator({
//   Home: { 
//     screen: HomeSreen, 
//     navigationOptions: {
//       header: ({ navigate }) => ({
//         right: (
//           <Icon
//             name='add'
//             iconStyle={{ marginRight: 15 }}
//             onPress={() => navigate('Add')}
//           />
//         ),
//         left: (
//           // <Icon
//           // name='settings'
//           // iconStyle={{ marginLeft: 15 }}
//           // onPress={() => navigate('Setting')}
//           // />
//           <Icon
//             name='menu'
//             iconStyle={{ marginLeft: 10 }}
//             onPress={() => navigate('DrawerOpen')}
//           />
//         ),
//       })
//     },
//   },
//   Course: { 
//     screen: CourseScreen,
//     navigationOptions: {
//       header: ({ navigate }) => ({
//         tintColor: '#ffffff',
//         style: { backgroundColor: '#6fa8dc' },
//         title: '運動按摩',
//         right: (
//           <Icon
//             name='edit'
//             iconStyle={{ 
//               marginRight: 10,
//               color: '#ffffff',
//             }}
//             onPress={() => navigate('EditInfo')}
//           />
//         ),
//       }),
//     },
//   },
//   EditInfo: {
//     screen: EditInfoScreen,
//     navigationOptions: {
//       header: ({ goBack }) => ({
//         title: '編輯課程',
//         tintColor: '#ffffff',
//         style: { backgroundColor: '#6fa8dc' },
//         left: (
//           <Button
//             onPress={() => goBack(null)} 
//             title='取消'
//             backgroundColor='#6fa8dc'
//             buttonStyle={{ paddingLeft: 0 }}
//             />
//          ),
//          right: (
//             <Button
//             onPress={() => goBack(null)} 
//             title='確定'
//             backgroundColor='#6fa8dc'
//             buttonStyle={{ paddingRight: 0 }}
//             />
//          ),
//       })
//     }
//   },
//   Setting: {
//     screen: SettingScreen,
//     navigationOptions: {
//       header: () => ({
//         title: '設定',
//       })
//     }
//   },
//   Add: {
//     screen: AddScreen,
//     navigationOptions: {
//       header: ({ goBack }) => ({
//         title: '新增課程',
//         left: (
//             <Icon
//               name='clear'
//               iconStyle={{ marginLeft: 10 }}
//               color='red'
//               onPress={() => { goBack(); }}
//             />
//         ),
//         right: (
//             <Icon 
//               name='done'
//               iconStyle={{ marginRight: 10 }}
//               color='green'
//               onPress={() => { goBack(); }}
//             />
//         ),
//       })
//     }
//   },
//   },
// );


// export const DrawerRouter = DrawerNavigator(
//   {
//     AlbumStack: {
//       screen: HomeSreen,
//       navigationOptions: {
//         drawer: {
//           label: 'home',
//           icon: ({ tintColor }) => <Icon name="list" size={25} color={tintColor} />
//         },
//       },
//     },

//     MeStack: {
//       screen: SettingScreen,
//       navigationOptions: {
//         drawer: {
//           label: 'Me',
//           icon: ({ tintColor }) => <Icon name="account-circle" size={25} color={tintColor} />
//         },
//       },
//     },
//     SettingStack: {
//       screen: CourseScreen,
//       navigationOptions: {
//         drawer: {
//           label: 'Setting',
//           icon: ({ tintColor }) => <Icon name="build" size={25} color={tintColor} />
//         },
//       },
//     },
//   }, 
//   {
//     initialRouteName: 'AlbumStack',
//     contentOptions: {
//       activeTintColor: '#e91e63',
//     },
//     // drawerWidth: 200,
//     // drawerPosition: 'right',
//     contentComponent: 
//       props => (
//         <ScrollView>
//           <Tile
//             // imageSrc={require('./assets/ntue.jpg')}
//             featured
//           />
//           <DrawerView.Items {...props} />
//         </ScrollView>
//       )
//   }
// );





