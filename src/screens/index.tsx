import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StatusBar as RNStatusBar
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Icon from '@expo/vector-icons/FontAwesome'
import { WeatherDay } from '../components/WeatherDay'
import { WeatherItem } from '../components/WeatherItem'

const h = Dimensions.get('screen').height

export const WeatherHome: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style={'light'} />
      <View
        style={[
          styles.paddingHorizontal,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }
        ]}
      >
        <View>
          <Text style={styles.title}>Aracaju </Text>
          <Text style={styles.subTitle}>Céu Nublado </Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Batata')}>
          <Icon name="search" color={'#fff'} size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.weatherContainer}>
        <Text style={styles.weatherTemp}>26°</Text>
      </View>

      <View style={styles.weatherContent}>
        <WeatherItem
          icon={'temperature-half'}
          type="Sensação térmica"
          value="26°C"
          division
        />
        <WeatherItem
          icon={'cloud-showers-heavy'}
          type={'Probabilidade de chuva'}
          value={'40%'}
          division
        />
        <WeatherItem
          icon={'wind'}
          type={'Velocidade dos ventos'}
          value={'20 Km'}
          division
        />
        <WeatherItem icon={'droplet'} type={'Umidade do ar'} value={'80%'} />
      </View>

      <FlatList
        data={[{}, {}, {}, {}, {}, {}, {}]}
        renderItem={() => <WeatherDay />}
        horizontal
        contentContainerStyle={{
          gap: 10,
          maxHeight: h,
          alignSelf: 'flex-end'
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13131a',
    paddingTop: RNStatusBar.currentHeight! + 10,
    gap: 30
  },
  paddingHorizontal: {
    paddingHorizontal: 20
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '700'
  },
  subTitle: {
    fontSize: 24,
    color: '#BFBFD4',
    fontWeight: '500'
  },
  weatherContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  weatherTemp: {
    fontSize: 120,
    fontWeight: '900',
    color: '#fff'
  },
  weatherContent: {
    backgroundColor: '#1C1C27',
    marginHorizontal: 20
  }
})
