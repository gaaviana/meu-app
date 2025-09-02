import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.text}>BÃO?</Text>
      <StatusBar style="light" />
    </View>

    <View>
      <Text style={styles.textPe}>Xo fala pro c, tudo vai, tudo é fase irmão. Logo mais tamo ai no mundão </Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'white',
    color: 'red',
    padding: 10,
    borderRadius: 10,
  },
  textPe: {
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    padding: 10,
  }
});
