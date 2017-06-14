import React, { Component } from 'react';
import * as firebase from 'firebase';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon, Tile, List, ListItem, FormLabel, FormInput, Button, Card } from 'react-native-elements';

import courses from './json/Courses.json'

// Make a component
class Add extends Component {
  state = { 
    courses: [],
    name: null,
    description: null,
    teacher: null,
    day: null,
    startTime: null,
    endTime: null,
    class: null,
    key: null
   };

  componentWillMount() {
    this.setState({ courses });
  }
saveCourseInfo = async () => {
    // await dbUserid.child('course').set({ courseName, teacher });
    const { currentUser } = firebase.auth();
    const Name = this.state.name;
    const Description = this.state.description;
    const Teacher = this.state.teacher;
    const Day = this.state.day;
    const StartTime = this.state.startTime;
    const EndTime = this.state.endTime;
    const Class = this.state.class;
    const Key = this.state.key;
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    // await dbUserid.child('course').update({ Name });
    await dbUserid.child('course').child(this.state.key).set({ Name, Description, Teacher, Day, StartTime, EndTime, Class });

}

 onAddCourse = async (course) => {
    // const courseName = course.courseName;
    // const teacher = course.teacher;
    // this.setState({ saving: true });
    this.setState({ 
      name: course.courseName,
      description: course.description, 
      teacher: course.teacher,
      day: course.day,
      startTime: course.startTime,
      endTime: course.endTime,
      class: course.class,
      key: course.key,

     });
    try {

      // await firebase.auth().createUserWithEmailAndPassword(email, password);
      // const { courseName, teacher } = this.state;
      const { currentUser } = firebase.auth();
      let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
      await dbUserid.child('course').push(this.state.key);
      this.saveCourseInfo();
      this.props.navigation.navigate('Home');
    } catch (err) {
      dbUserid.update({ course: "fail" });
    }
  }

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
                      onPress={ () => this.onAddCourse(course) }
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
