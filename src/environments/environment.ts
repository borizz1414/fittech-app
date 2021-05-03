// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //url:'http://localhost:8000/api'
  //url:'http://192.168.0.103:8000/api'
  // url:'http://valdusoft.com/fittech/api'
  url:'https://smartbunnypruebas.com'

};

export const firebaseConfig = {
  apiKey: "AIzaSyBa-dl3epdWx8V5TWTKHABchWdLVDKxht4",
  authDomain: "fittech-92682.firebaseapp.com",
  projectId: "fittech-92682",
  storageBucket: "fittech-92682.appspot.com",
  messagingSenderId: "1049023810628",
  appId: "1:1049023810628:web:33d23e3207714668400011"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
