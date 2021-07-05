import React from 'react';
import { Button, View, SafeAreaView, Text, ImageBackground } from 'react-native';
import styles from './Style'

const Separator = () => (
  <View style={styles.separator} />
);
const image = { uri: "https://reactjs.org/logo-og.png" };
const Home = ({ navigation }) => (

  <ImageBackground
    resizeMode={'stretch'}
    style={{ flex: 1 }}
    source={require('./resources/bg.jpeg')}
  >
    <SafeAreaView style={styles.homeContainer}>
      <View>
        <Text style={styles.title}>
          Click here to book new Appointments</Text>
        <Button
          title="Book Appointment"
          onPress={() => navigation.navigate('BookAppointment')}
        />
      </View>
      <Separator />
    </SafeAreaView>
  </ImageBackground >

);

export default Home;