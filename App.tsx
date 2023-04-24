import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import MainScreen from './src/screens/MainScreen';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      {/* main screen that holds, search bar, songs list and bottom player controller */}
      <MainScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default App;
