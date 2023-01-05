import {
  StyleSheet,
  Keyboard,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Form, Result} from './src/components';

const App = () => {
  const [weather, setWeather] = useState();
  const [params, setParams] = useState();

  useEffect(() => {
    if (!params || params.city === '' || params.country === '') {
      return;
    }

    const fetchData = async () => {
      const APIKey = '';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${params.city},${params.country}&appid=${APIKey}&units=imperial`;
      try {
        const response = await fetch(url);
        const tempValues = await response.json();
        setWeather({
          current: tempValues.main?.temp,
          min: tempValues.main?.temp_min,
          max: tempValues.main?.temp_max,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [params]);

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <View style={styles.app}>
        {weather && <Result weather={weather} />}
        <View style={styles.content}>
          <Form onSubmit={setParams} />
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
  content: {
    marginHorizontal: '2.5%',
  },
});
