import React, {useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const countries = [
  {id: 1, name: 'United States', code: 'US'},
  {id: 2, name: 'Mexico', code: 'MX'},
  {id: 3, name: 'Argentina', code: 'AR'},
  {id: 4, name: 'Colombia', code: 'CO'},
  {id: 5, name: 'Costa Rica', code: 'CR'},
  {id: 6, name: 'Spain', code: 'ES'},
  {id: 7, name: 'Peru', code: 'PE'},
];
export const Form = () => {
  const [animationButton] = useState(new Animated.Value(1));
  const animationIn = () => {
    console.log('in');
  };
  const animationOut = () => {
    console.log('out');
  };

  return (
    <>
      <View style={styles.form}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="City"
            placeholderTextColor={'#666'}
          />
          <Picker itemStyle={{height: 120, backgroundColor: '#FFF'}}>
            <Picker.Item label={'---Select a country---'} value="" />
            {countries.map(c => (
              <Picker.Item label={c.name} value={c.code} key={c.id} />
            ))}
          </Picker>
        </View>
        <TouchableWithoutFeedback
          onPressIn={() => animationIn()}
          onPressOut={() => animationOut()}>
          <View style={styles.btn_search}>
            <Text style={styles.text_search}>Search weather</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#FFF',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  btn_search: {
    marginTop: 50,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center',
  },
  text_search: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontsize: 18,
  },
});
