import {
  StyleSheet,
  Keyboard,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {Form} from './src/components/Form';

const App = () => {
  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <View style={styles.app}>
        <View style={styles.content}>
          <Form />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71,149, 212)',
    justifyContent: 'center',
  },
  container: {
    marginHorizontal: '2.5%',
  },
});
