import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export const WeatherDay: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>Seg</Text>
      <Text style={styles.temp}>26°C</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B3B54',
    width: width * 0.2,
    height: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  day: { color: '#BFBFD4', fontWeight: '900', fontSize: 20 },
  temp: { color: '#BFBFD4', fontWeight: '700', fontSize: 22 }
})
