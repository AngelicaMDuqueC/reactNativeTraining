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
import { EMPTY, Subject } from 'rxjs'
import { switchMap, catchError, pluck, startWith, scan } from 'rxjs/operators'

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
          startWith({ name: 'loading...' }),
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
      person: { name: 'Loading' },
      planet: {},
      count: 0,
    }

    const [onPress$, onPress] = createHandler()
    this.count$ = onPress$.pipe(
      startWith(null),
      scan((acc, event) => acc + 1, 0)
    )
    this.onPress = onPress

    this.starwarsStream$ = this.count$.pipe(
      switchMap(count => createStarwarsStream(count))
    )
  }

  componentDidMount() {
    // this.fetchPeople(1).catch(err => {
    //   console.warn(err)
    // })

    this.count$.subscribe(count => {
      console.log(count)
      this.setState({ count })
    })

    this.starwarsStream$.subscribe(data => {
      console.log(data)
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

  render() {
    const { person, planet } = this.state

    return (
      <Screen backgroundColor="#333333" align="center">
        <Text style={styles.welcome}>Starwars Screen</Text>
        <Text style={styles.instructions}>{person.name}</Text>
        <Text style={styles.instructions}>{planet.name}</Text>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.button}>Touch Here</Text>
        </TouchableOpacity>
        <Text style={styles.button}>{this.state.count}</Text>
      </Screen>
    )
  }
}
