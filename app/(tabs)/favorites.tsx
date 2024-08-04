import { StyleSheet, Text, View } from 'react-native'

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorites Under construction</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
