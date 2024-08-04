import { StyleSheet, View, Pressable, Text } from 'react-native'
import { Link } from 'expo-router'

interface ButtonProps {
  readonly label: string
  readonly theme?: string
  readonly onPress?: () => void
}
export function Button({ label, theme = 'primary', onPress }: ButtonProps) {
  if (theme === 'primary') {
    return (
      <View style={[styles.buttonContainer, { borderRadius: 18 }]}>
        <Link href="/home" asChild>
          <Pressable style={styles.button}>
            <Text style={[styles.buttonLabel, { fontWeight: 'bold' }]}>
              {label}
            </Text>
          </Pressable>
        </Link>
      </View>
    )
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 'auto',
    height: 56,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#C67C4E',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
})
