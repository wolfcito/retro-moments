import { CameraView, CameraType, useCameraPermissions } from 'expo-camera'
import { useEffect, useRef, useState } from 'react'
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import * as MediaLibrary from 'expo-media-library'
import * as ScreenOrientation from 'expo-screen-orientation'
import { router } from 'expo-router'
import { CustomIcon } from '~/components/custom-icon'

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions()

  const [image, setImage] = useState(null)

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync()
      if (status !== 'granted') {
        console.warn('Permission to access media library is not granted.')
      }
    }

    requestPermissions()
  }, [])

  useEffect(() => {
    const LockOrientation = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      )
    }

    LockOrientation()

    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
    }
  }, [])

  if (!permission) {
    return <View />
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  const saveImage = async () => {
    if (image) {
      try {
        console.log(image)
        await MediaLibrary.createAssetAsync(image)
        setImage(null)
        goHome()
      } catch (error) {
        console.log(error)
      }
    }
  }
  const goHome = () => {
    router.replace('/home')
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <TakePhoto setImage={setImage} />
      ) : (
        <ImageBackground
          source={{ uri: image }}
          style={[styles.backgroundImage, { backgroundColor: '#fff' }]}
        >
          <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={goHome}>
            <CustomIcon
              images={require('~/assets/icons/home-o.png')}
              style={styles.buttonCustom}
            />
            <Text style={{ color: '#000' }}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignItems: 'flex-end' }}
            onPress={saveImage}
          >
            <CustomIcon
              images={require('~/assets/icons/download.png')}
              style={styles.buttonCustom}
            />
            <Text style={{ color: '#000' }}>Save</Text>
          </TouchableOpacity>
        </ImageBackground>
      )}
    </View>
  )
}

export const TakePhoto = ({ setImage }: { setImage: any }) => {
  const [facing, setFacing] = useState<CameraType>('back')
  const cameraRef = useRef<any | null>(null)

  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'))
  }

  useEffect(() => {
    const LockOrientation = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      )
    }

    LockOrientation()

    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
    }
  }, [])

  const takePicture = async () => {
    if (cameraRef?.current) {
      try {
        const options = { quality: 1, base64: true }
        const data = await cameraRef.current.takePictureAsync(options)
        // console.log(data)
        setImage(data.uri)
      } catch (e) {
        console.log(e)
      }
    }
  }

  const goHome = () => {
    router.replace('/home')
  }
  return (
    <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        <TouchableOpacity style={styles.button} onPress={goHome}>
          <CustomIcon
            images={require('~/assets/icons/home-o.png')}
            style={styles.buttonCustom}
          />
          <Text style={{ color: '#000' }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <CustomIcon
            images={require('~/assets/icons/camera.png')}
            style={styles.buttonCustom}
          />
          <Text style={{ color: '#000' }}>Take photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <CustomIcon
            images={require('~/assets/icons/flip.png')}
            style={styles.buttonCustom}
          />
          <Text style={{ color: '#000' }}>Flip</Text>
        </TouchableOpacity>
      </View>
    </CameraView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    margin: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    margin: 10,
    padding: 10,
    gap: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  buttonCustom: {
    backgroundColor: '#fff',
    color: '#000',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
})
