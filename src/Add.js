import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon, Tile, List, ListItem, FormLabel, FormInput, Button, Card } from 'react-native-elements';

import courses from './json/Courses.json'
// Make a component
class Add extends Component {
  // static navigationOptions = {
  //   title: '課表',
  //   right: (
  //         <Icon
  //           name='done'
  //           // onPress={}
  //         />
  //       ),
  //       left: (
  //         <Icon
  //           name='clear' 
  //           onPress={ () =>  goBack() }
  //         />
  //       ),
  // };

  //   static navigationOptions = ({ navigation, screenProps }) => ({
  //   title: navigation.state.params.name + "'s Profile!",
  //   headerRight: <Button title='right' />,
  // });
  state = { courses: [] };

  componentWillMount() {
    this.setState({ courses });
  }
  
  addCourse = function(course) {
      console.log("testtttt");
      this.props.navigation.navigate('Home');
  };

  render() {
    // const { navigate } = this.props.navigation;
    // const { goBack } = this.props.navigation;

    return (
      <ScrollView>
        <View>
          
            {
            this.state.courses.map((course) => {
                return (
                  <View key={course.courseName}>
                    <Card containerStyle={{padding: 0}} >
                    <Text>{course.courseName}-{course.description}</Text>
                    <Text>{course.teacher} 老師</Text>
                    <Text>星期{course.day} {course.startTime}～{course.endTime}</Text>
                    <Text>{course.class}</Text>
                    </Card>
                    <Button 
                      title='加入'
                      onPress={ () => this.addCourse(course) }
                    />
                  </View>
                  // <ListItem
                  //   key={course.courseName}
                  //   roundAvatar
                  //   title={course.courseName}
                  //   // avatar={{uri:u.avatar}} 
                  //   />
                  
                )
              })
            }
         
        </View>
      </ScrollView>
    );
  }
}


export default Add;
