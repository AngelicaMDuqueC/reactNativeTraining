import React, { Component } from 'react'
import {
  Platform,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native'
import styles from './Styles/StarwarsScreenStyles'
import Screen from '../../Components/Screen'
import { ajax } from 'rxjs/ajax'
import { EMPTY, Subject, merge, Subscriber } from 'rxjs'
import {
  switchMap,
  catchError,
  pluck,
  startWith,
  scan,
  mapTo,
} from 'rxjs/operators'
import LinearGradient from 'react-native-linear-gradient'
import filterPrevious from '../../Lib/RxCustomOperators/filterPrevious'
import StarwarsImages from '../../Constants/StarwarsImages'

function createHandler() {
  const handler$ = new Subject()

  function handler(event) {
    handler$.next(event)
  }

  return [handler$, handler]
}

const API = 'https://swapi.co/api'

const ajaxCatchError = catchError(error => {
  console.warn(error)
  return EMPTY
})

function createStarwarsStream(id) {
  return ajax(`${API}/people/${id}`).pipe(
    pluck('response'),
    switchMap(
      person => {
        return ajax(person.homeworld).pipe(
          pluck('response'),
          startWith({ name: '...' }),
          ajaxCatchError
        )
      },
      (person, planet) => ({ person, planet })
    ),
    ajaxCatchError
  )
}

export default class StarwarsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Starwars',
  }

  constructor(props) {
    super(props)

    this.state = {
      person: { name: '...' },
      planet: { name: '...' },
      count: 0,
    }

    const [onPressUp$, onPressUp] = createHandler()
    const [onPressDown$, onPressDown] = createHandler()

    const oneUp$ = onPressUp$.pipe(mapTo(1))
    const oneDown$ = onPressDown$.pipe(mapTo(-1))

    this.count$ = merge(oneUp$, oneDown$).pipe(
      startWith(1),
      scan((acc, event) => acc + event || 1, 0),
      filterPrevious((prevCount, count) => prevCount !== count)
    )

    this.onPressUp = onPressUp
    this.onPressDown = onPressDown

    this.starwarsStream$ = this.count$.pipe(
      switchMap(count => createStarwarsStream(count))
    )
  }

  componentDidMount() {
    this.count$.subscribe(count => {
      this.setState({ count })
    })

    this.starwarsStream$.subscribe(data => {
      this.setState(data)
    })
  }

  fetchPeople(id) {
    return fetch(`${API}/people/${id}`)
      .then(res => res.json())
      .then(person => {
        this.setState({
          person,
        })

        return fetch(person.homeworld)
          .then(res => res.json())
          .then(planet => {
            this.setState({
              planet,
            })

            return { person, planet }
          })
      })
  }

  // onPress = event => {
  //   this.setState(
  //     {
  //       count: this.state.count + 1,
  //     },
  //     () => {
  //       this.fetchPeople(this.state.count)
  //     }
  //   )
  // }

  getImageFrom(images, name) {
    return images[name] ? { uri: images[name] } : images.default
  }

  render() {
    const { person, planet } = this.state

    return (
      <Screen backgroundColor="#222222" align="center">
        <View style={[styles.section, styles.titleSection]}>
          <View style={styles.logo}>
            <Image
              style={styles.textLogo}
              source={require('../../../assets/images/Star_Wars_Logo.png')}
            />
          </View>
        </View>
        <View style={[styles.section, styles.contentSection]}>
          <Image
            style={styles.imagePerson}
            source={this.getImageFrom(StarwarsImages.person, person.name)}
          />
          <Text style={styles.name}>{person.name}</Text>
          <Text style={styles.name}>{planet.name}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={this.onPressDown} style={styles.button}>
              <LinearGradient
                style={styles.linearGradient}
                colors={['#444444', '#444444', '#333333']}
                locations={[0, 0.5, 1]}
              >
                <Text style={styles.textButton}>Down</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressUp} style={styles.button}>
              <LinearGradient
                style={styles.linearGradient}
                colors={['#444444', '#444444', '#333333']}
                locations={[0, 0.5, 1]}
              >
                <Text style={styles.textButton}>Up</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <Text style={styles.textButton}>{this.state.count}</Text>
        </View>
      </Screen>
    )
  }
}
