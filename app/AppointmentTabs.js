import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookAppointment from './BookAppointment';
import { TODAY, TOMORROW, DAYAFTERTOMORROW } from './Utils'

const Tab = createMaterialTopTabNavigator();

export default function AppointmentTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Today" children={props => <BookAppointment day={TODAY} {...props} />} />
      <Tab.Screen name="Tomorrow" children={props => <BookAppointment day={TOMORROW} {...props} />} />
      <Tab.Screen name="Day AFter Tomorrow" children={props => <BookAppointment day={DAYAFTERTOMORROW} {...props} />} />
    </Tab.Navigator>
  );
}

