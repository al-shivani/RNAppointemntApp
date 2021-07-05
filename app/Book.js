import React, { useState } from 'react';
import { Button, SafeAreaView, TextInput } from 'react-native';
import { SharedDatabase } from './sharedDatabase';
import { getTimeStamp } from './Utils'
import styles from './Style'

const Book = ({ route, navigation }) => {
  const { slotId, slotName, day } = route.params;

  const [nameV, setName] = useState('')
  const [emailV, setEmail] = useState('')
  const [phoneNoV, setPhoneNo] = useState('')

  const setData = async (sharedNote) => {
    await SharedDatabase.insertAppointment(sharedNote);
  }

  return (
    <SafeAreaView style={styles.bookContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name "
        onChangeText={(value) => setName(value)}

      />
      <TextInput
        style={styles.input}
        placeholder="email "
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
        onChangeText={(value) => setPhoneNo(value)}
      />

      <Button
        title="Book Appointment"
        onPress={() => {
          if (nameV.length > 0 && emailV.length > 0 && phoneNoV.length > 0) {
            var sharedNote = {
              timeStamp: getTimeStamp(day),
              slotId,
              slotName,
              isBooked: true,
              name: nameV,
              email: emailV,
              phoneNumber: phoneNoV,
            }
            setData(sharedNote),
              route.params.resetData(sharedNote);
            navigation.goBack()
            alert("Appointment Booked")
          } else {
            alert("Please fill Data")
          }

        }
        }
      />
    </SafeAreaView>
  );

}
export default Book;

