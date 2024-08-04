import { Image } from 'expo-image'
import { View } from 'react-native'

export const CustomIcon = ({
  images,
  width = 30,
  height = 30,
  style,
}: CustomIconProps) => {
  return (
    <View style={style}>
      <Image
        style={{ width: width, height: height }}
        source={images}
        contentFit="contain"
        transition={100}
      />
    </View>
  )
}

interface CustomIconProps {
  images: string
  width?: number
  height?: number
  style?: any
}
