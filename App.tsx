import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,LogBox } from 'react-native';
import Form from './src/screens';
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding:20
  },
});


