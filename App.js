import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Text } from 'react-native/types_generated/index';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> Hello World 👋 🌍! </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default App;
