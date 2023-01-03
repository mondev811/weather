import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const Result = ({weather}) => {
  const {current, min, max} = weather;
  const degree_celsius = '\u2103';
  const degree_farenheit = '\u2109';

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={[styles.baseText, styles.actual]}>{current}</Text>
        <Text style={[styles.baseText, styles.temperature]}>
          {degree_farenheit}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.baseText]}>Min</Text>
        <Text style={[styles.baseText]}>{min} </Text>
        <Text style={[styles.baseText, styles.temperature]}>
          {degree_farenheit}
        </Text>
        <Text style={[styles.baseText]}>Max</Text>
        <Text style={[styles.baseText]}>{max} </Text>
        <Text style={[styles.baseText, styles.temperature]}>
          {degree_farenheit}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  baseText: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    marginRight: 10,
  },
  actual: {
    fontSize: 80,
    marginRight: 0,
    fontWeight: '800',
  },
  temperature: {
    fontSize: 18,
    fontWeight: 'normal',
  },
});
