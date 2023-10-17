// import React, {useState} from 'react';

// import {
//   SafeAreaView,
//   Text,
//   View,
//   Linking,
//   TouchableHighlight,
//   PermissionsAndroid,
//   Platform,
//   StyleSheet,
// } from 'react-native';

// import {CameraScreen} from 'react-native-camera-kit';

// const App = () => {
//   const [qrvalue, setQrvalue] = useState('');
//   const [opneScanner, setOpneScanner] = useState(false);

//   const onOpenlink = () => {
//     Linking.openURL(qrvalue);
//   };

//   const onBarcodeScan = qrvalue => {
//     setQrvalue(qrvalue);
//     setOpneScanner(false);
//   };

//   const onOpneScanner = () => {
//     if (Platform.OS === 'android') {
//       async function requestCameraPermission() {
//         try {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.CAMERA,
//             {
//               title: 'Camera Permission',
//               message: 'App needs permission for camera access',
//             },
//           );
//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             setQrvalue('');
//             setOpneScanner(true);
//           } else {
//             alert('CAMERA permission denied');
//           }
//         } catch (err) {
//           alert('Camera permission err', err);
//           console.warn(err);
//         }
//       }
//       requestCameraPermission();
//     } else {
//       setQrvalue('');
//       setOpneScanner(true);
//     }
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       {opneScanner ? (
//         <View style={{flex: 1}}>
//           <CameraScreen
//             showFrame={false}
//             scanBarcode={true}
//             laserColor={'blue'}
//             frameColor={'yellow'}
//             colorForScannerFrame={'black'}
//             onReadCode={event =>
//               onBarcodeScan(event.nativeEvent.codeStringValue)
//             }
//           />
//         </View>
//       ) : (
//         <View style={styles.container}>
//           <Text style={styles.titleText}>
//             Barcode and QR Code Scanner using Camera in React Native
//           </Text>
//           <Text style={styles.textStyle}>
//             {qrvalue ? 'Scanned Result: ' + qrvalue : ''}
//           </Text>
//           {qrvalue.includes('https://') ||
//           qrvalue.includes('http://') ||
//           qrvalue.includes('geo:') ? (
//             <TouchableHighlight onPress={onOpenlink}>
//               <Text style={styles.textLinkStyle}>
//                 {qrvalue.includes('geo:') ? 'Open in Map' : 'Open Link'}
//               </Text>
//             </TouchableHighlight>
//           ) : null}
//           <TouchableHighlight
//             onPress={onOpneScanner}
//             style={styles.buttonStyle}>
//             <Text style={styles.buttonTextStyle}>Open QR Scanner</Text>
//           </TouchableHighlight>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     alignItems: 'center',
//   },
//   titleText: {
//     fontSize: 22,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   textStyle: {
//     color: 'black',
//     fontSize: 16,
//     textAlign: 'center',
//     padding: 10,
//     marginTop: 16,
//   },
//   buttonStyle: {
//     fontSize: 16,
//     color: 'white',
//     backgroundColor: 'green',
//     padding: 5,
//     minWidth: 250,
//   },
//   buttonTextStyle: {
//     padding: 5,
//     color: 'white',
//     textAlign: 'center',
//   },
//   textLinkStyle: {
//     color: 'blue',
//     paddingVertical: 20,
//   },
// });


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScanScreen() {
  return (
    <View>
      <Text>ScanScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})