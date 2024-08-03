import { StyleSheet, View, Pressable, Text } from 'react-native'

export function Button({
  label,
  theme,
  onPress,
}: {
  label: string
  theme: string
  onPress: () => void
}) {
  if (theme === 'primary') {
    return (
      <View style={[styles.buttonContainer, { borderRadius: 18 }]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#C67C4E' }]}
          onPress={onPress}
        >
          <Text style={[styles.buttonLabel, { fontWeight: 'bold' }]}>
            {label}
          </Text>
        </Pressable>
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
    width: 320,
    height: 68,
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
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
})
