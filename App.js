import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Header from './component/Header';
import Login1 from './component/Login1';

export default function App() {
  return (
    <View style={{ backgroundColor: '#00CCF9', flex: 1 }}>
      <Login1 />
    </View>
  );
}

