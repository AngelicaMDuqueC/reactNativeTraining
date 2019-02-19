import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  section: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: '100%',
  },
  titleSection: {
    paddingVertical: 60,
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
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
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
  },
})
