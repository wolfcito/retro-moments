import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Image } from 'expo-image'
import { Container, Row, Col } from 'react-native-flex-grid'
import { Link } from 'expo-router'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Container fluid style={{ backgroundColor: '#000', paddingTop: 30 }}>
        <Row>
          <Col>
            <Text style={styles.subtext}>user</Text>
            <Text style={styles.textHeader}>
              Wolfcito.mode <AntDesign name="down" size={14} />
            </Text>
          </Col>
          <Col style={{ alignItems: 'flex-end' }}>
            <Image
              style={styles.image}
              source={require('~/assets/images/fill.png')}
              placeholder={{ blurhash }}
              contentFit="contain"
              transition={100}
            />
            <Text style={[styles.textHeader, { marginRight: 10 }]}>
              Load Film
            </Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <ImageBackground
              source={require('~/assets/images/banner.png')}
              style={styles.backgroundImage}
            >
              <Container fluid>
                <Row
                  style={{
                    alignItems: 'center',
                    margin: 20,
                  }}
                >
                  <Col style={{ alignItems: 'flex-start' }}>
                    <Text
                      style={[
                        styles.textBanner,
                        { marginLeft: 50, backgroundColor: '#000' },
                      ]}
                    >
                      Reveal Film
                    </Text>
                  </Col>
                  <Col style={{ alignItems: 'flex-end' }}>
                    <Text
                      style={[
                        styles.textBanner,
                        {
                          backgroundColor: '#000',
                          fontSize: 20,
                          padding: 5,
                          marginTop: 10,
                        },
                      ]}
                    >
                      12/12
                    </Text>
                  </Col>
                </Row>
              </Container>

              <View
                style={[
                  styles.column,
                  {
                    alignItems: 'flex-end',
                    margin: 20,
                  },
                ]}
              ></View>
            </ImageBackground>
          </Col>
        </Row>
      </Container>

      <ScrollView style={{ marginTop: 60 }}>
        <Container fluid style={{ gap: 10 }}>
          <Row>
            <Col>
              <CardOption
                image={require('~/assets/images/claim.png')}
                label="Claim Rewards"
              />
            </Col>
            <Col>
              <CardOption
                image={require('~/assets/images/tournament.png')}
                label="Tournaments"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Link href="/camera" asChild>
                <Pressable>
                  <CardOption
                    image={require('~/assets/images/take-photo.png')}
                    label="Take Photo"
                  />
                </Pressable>
              </Link>
            </Col>
            <Col>
              <CardOption
                image={require('~/assets/images/gallery.png')}
                label="Gallery"
              />
            </Col>
          </Row>
        </Container>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export const CardOption = ({
  image,
  label,
}: {
  image: string
  label: string
}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 10,
      }}
    >
      <Image
        style={styles.imageOptions}
        source={image}
        placeholder={{ blurhash }}
        contentFit="contain"
        transition={100}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    height: 260,
    backgroundColor: '#000',
    padding: 20,
    paddingTop: 60,
    flexDirection: 'row',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  column: {
    flex: 1,
  },
  subtext: {
    color: '#A2A2A2',
    fontSize: 14,
    marginBottom: 10,
  },

  image: {
    height: 80,
    width: 90,
    backgroundColor: '#0553',
  },
  backgroundImage: {
    height: 140,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    top: 60,
    flexDirection: 'row',
  },

  textBanner: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageOptions: {
    height: 128,
    width: '100%',
  },
})
