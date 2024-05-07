import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome6'

export const WeatherItem: React.FC<{
  value: string
  icon?: 'temperature-half' | 'cloud-showers-heavy' | 'wind' | 'droplet'
  type: string
  division?: boolean
}> = ({ type, value, icon = 'temperature-half', division }) => {
  return (
    <View
      style={[
        styles.weatherItem,
        division && { borderBottomWidth: 1.5, borderColor: '#BFBFD4' }
      ]}
    >
      <View style={styles.weatherItemContent}>
        <View style={styles.weatherItemInfo}>
          <Icon name={icon} size={24} color={'#3B3B54'} />
          <Text style={styles.weatherItemInfoText}>{type}</Text>
        </View>
        <Text style={styles.weatherItemDescription}>{value}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherItem: {
    width: '100%',
    padding: 20,
    justifyContent: 'center'
  },
  weatherItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  weatherItemInfo: {
    flexDirection: 'row',
    gap: 10
  },
  weatherItemInfoText: {
    fontSize: 18,
    color: '#BFBFD4'
  },
  weatherItemDescription: {
    fontSize: 20,
    color: '#BFBFD4'
  }
})
