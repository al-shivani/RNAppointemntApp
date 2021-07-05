//import RNFetchBlob from 'rn-fetch-blob';
import { SharedDatabaseAppoinment } from './types';
const SQLite = require('react-native-sqlite-storage');
SQLite.enablePromise(true);

const SharedDatabaseName = 'SharedDatabase.db';
let operations = 0;

// function getDBFilepath(name: string): string | undefined {
//   const documentDir =
//     RNFetchBlob &&
//     RNFetchBlob.fs &&
//     RNFetchBlob.fs.dirs &&
//     RNFetchBlob.fs.dirs.DocumentDir;
//   if (documentDir !== null && documentDir !== undefined) {
//     return documentDir + '/' + name;
//   }
// }

const AppointmentTableSQL = `
CREATE TABLE IF NOT EXISTS Appointment(
id INTEGER PRIMARY KEY AUTOINCREMENT,
slotId CHAR(40) NOT NULL,
slotName CHAR(40) NOT NULL,
timeStamp TEXT NOT NULL,
name TEXT,
email TEXT ,
phoneNumber CHAR(10),
isBooked BOOLEAN NOT NULL CHECK (isBooked IN (0, 1))
);
`;
const AppointmentInsertSQL = `INSERT INTO Appointment ( slotId, slotName, timeStamp, name, email, phoneNumber, isBooked)
VALUES (?, ?, ?, ?, ?, ?, ?)`;

export const SharedDatabase = {
  insertAppointment: async (appointment) => {
    console.log("insert"+appointment)

    try {
      operations++;
      const DB = await SQLite.openDatabase((SharedDatabaseName));
      await DB.executeSql(AppointmentTableSQL);
      await DB.executeSql(AppointmentInsertSQL, [
        appointment.slotId,
        appointment.slotName,
        appointment.timeStamp,
        appointment.name,
        appointment.email,
        appointment.phoneNo,
        appointment.isBooked,
      ]);
      console.log('SharedDatabase appointment created', appointment.slotId);
      operations--;

      if (operations === 0) {
        await DB.close();
      }
    } catch (err) {
      console.log('SharedDatabase error', err);
    }
  },

  getAppointments: async (timeStamp) => {
    try {
      operations++;
      const DB = await SQLite.openDatabase((SharedDatabaseName));
      const appointment = await DB.executeSql(`SELECT * FROM  Appointment where timeStamp = ${timeStamp}`);
      operations--;

      if (operations === 0) {
        await DB.close();
      }
      const result = appointment[0].rows.raw();
     
      console.log('AndroidSharedDatabase appointments fetched',
        result.map((i: any) => i.id)
      );
      return result;
    } catch (err) {
      console.error('AndroidSharedDatabase error', err);
      return [];
    }
  },


};
