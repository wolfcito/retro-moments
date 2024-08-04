import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native'

import { Button } from '~/components/button'

export default function IndexScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('~/assets/images/onboarding.png')}
        style={styles.backgroundImage}
      >
        <Text style={styles.text}>
          Fall in Love with the old photos, in the old way of doing
        </Text>
        <Text style={styles.subtext}>
          take films and do wehathever you like to do
        </Text>

        <Button label="Get Started" />
        <View style={{ height: 50 }} />
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtext: {
    color: '#A2A2A2',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
})
