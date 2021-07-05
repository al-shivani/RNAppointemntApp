import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SharedDatabase } from './sharedDatabase';
import { getTimeStamp } from './Utils'
import styles from './Style'


const BookAppointment = (props) => {

  const [data, setData] = useState([]);

  useEffect(async () => {
    console.log("UseEffect call")
    const appointments = await SharedDatabase.getAppointments(getTimeStamp(props.day));
    var allSlots = []
    for (var i = 0; i < 12; i++) {
      var appoint = checkDBData(appointments, i)
      allSlots[i] = appoint;
    }
    setData(allSlots);
    console.log("setData call")
    return () => {
      appointments = [],
        allSlots = []
    };

  },
    []);


  function AvailableView({ item, navigation, day }) {
    return (
      <View style={styles.listItem}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold" }}>{item.slotName}</Text>
          <Text>{item.position}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Book', {
          resetData: (sharedNote) => {
            console.log("getting back" + sharedNote.name)
            for (var i = 0; i < data.length; i++) {
              if (data[i].slotId == sharedNote.slotId) {
                data[i] = sharedNote;
              }
            }

            setData([...data])
          },
          slotId: item.slotId,
          slotName: item.slotName,
          day: day
        })}
          style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "green", fontWeight: "bold" }}>Book</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function BookedView({ item }) {
    return (
      <View style={styles.bookedListItem}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold" }}>{item.slotName}</Text>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{ fontWeight: "bold" }}>{item.email}</Text>
          <Text style={{ fontWeight: "bold" }}>{item.phoneNumber}</Text>


        </View>

      </View>
    );
  }

  function Item({ item, navigation, day }) {
    if (item.isBooked) {
      return <BookedView item={item} navigation={navigation} day={day} />;
    } else {
      return <AvailableView item={item} navigation={navigation} day={day} />;
    }

  }

  const checkDBData = (appointments, slotId) => {
    var data;
    appointments.forEach((item) => {
      if (item.slotId == slotId) {
        data = item;
      }
    });
    if (data == undefined) {

      data = {
        timeStamp: '',
        slotName: getSlotName(slotId),
        slotId: slotId,
        isBooked: false,
        name: '',
        email: '',
        phoneNumber: '',
      }
    }

    return data;

  }

  const getSlotName = (slotId) => {
    var slotName = ''
    switch (slotId + 1) {
      case 1:
        slotName = "10 AM to 12 AM";
        break;
      case 2:
        slotName = "12 AM to 2 PM";
        break;
      case 3:
        slotName = "2 PM to 4 PM";
        break;
      case 4:
        slotName = "4 PM to 6 PM";
        break;
      case 5:
        slotName = "6 PM to 8 PM";
        break;
      case 6:
        slotName = "8 PM to 10 PM";
        break;
      case 7:
        slotName = "10 PM to 12 AM";
        break;
      case 8:
        slotName = "12 AM to  2 AM";
        break;
      case 9:
        slotName = "2 AM to 4 AM";
        break;
      case 10:
        slotName = "4 AM to 6 AM";
        break;
      case 11:
        slotName = "6 AM to 8 AM";
        break;
      case 12:
        slotName = "8 AM to 10 AM";
        break;
      default:
        slotName = slotName;
        break;
    }
    return slotName
  }




  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} navigation={props.navigation} day={props.day} />}
        keyExtractor={item => item.slotId}
      />
    </SafeAreaView>
  );
}



export default BookAppointment;