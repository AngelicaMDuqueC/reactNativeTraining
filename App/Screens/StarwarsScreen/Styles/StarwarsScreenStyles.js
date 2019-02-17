import { StyleSheet } from 'react-native'

const imageWidth = 100

export default StyleSheet.create({
  section: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    width: '100%',
  },
  titleSection: {
    paddingTop: 60,
  },
  title: {
    fontSize: 40,
    fontFamily: 'STARWARS',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  logo: {
    width: 300,
    height: 300,
  },
  textLogo: {
    flex: 1,
    width: 'auto',
    height: '100%',
    resizeMode: 'contain',
  },
  contentSection: {
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'transparent',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  name: {
    fontFamily: 'STARWARS',
    fontSize: 24,
    color: '#ffffff',
    paddingVertical: 5,
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  button: {
    width: '30%',
  },
  linearGradient: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  imageRound: {
    borderRadius: imageWidth,
    overflow: 'hidden',
  },
  imagePerson: {
    width: imageWidth,
    height: imageWidth,
  },
})
