import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Bird from './components/Bird'
import Obstacles from './components/Obstacles'

export default function App() {
  const screenWidth = Dimensions.get('screen').width
  const screenHeight = Dimensions.get('screen').height
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(
    screenWidth + screenWidth / 2 + 30
  )
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0)
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0)
  const obstacleWdith = 60
  const obstacleHeight = 400
  const gap = 200
  const gravity = 3
  let gameTimerId
  let obstaclesLeftTimerId
  let obstaclesLeftTimerIdTwo

  // bird gravity

  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom((birdBottom) => birdBottom - gravity)
      }, 30)

      return () => {
        clearInterval(gameTimerId)
      }
    }
    //return bird bottom as a dependency
  }, [birdBottom])
  //logs the position change every 30ms
  // console.log(birdBottom)

  //obstacles

  useEffect(() => {
    if (obstaclesLeft > -obstacleWdith) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft((obstaclesLeft) => obstaclesLeft - 5)
      }, 30)
      return () => {
        clearInterval(obstaclesLeftTimerId)
      }
    } else {
      setObstaclesLeft(screenWidth)
      setObstaclesNegHeight(-Math.random() * 100)
    }
  }, [obstaclesLeft])

  //2ndobstacles

  useEffect(() => {
    if (obstaclesLeftTwo > -obstacleWdith) {
      obstaclesLeftTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo((obstaclesLeftTwo) => obstaclesLeftTwo - 5)
      }, 30)
      return () => {
        clearInterval(obstaclesLeftTimerIdTwo)
      }
    } else {
      setObstaclesLeftTwo(screenWidth)
      setObstaclesNegHeightTwo(-Math.random() * 100)
    }
  }, [obstaclesLeftTwo])

  return (
    <View style={styles.container}>
      <Bird birdBottom={birdBottom} birdLeft={birdLeft} />
      <Obstacles
        obstaclesLeft={obstaclesLeft}
        obstacleWdith={obstacleWdith}
        randomBottom={obstaclesNegHeight}
        gap={gap}
        obstacleHeight={obstacleHeight}
      />
      <Obstacles
        obstaclesLeft={obstaclesLeftTwo}
        obstacleWdith={obstacleWdith}
        randomBottom={obstaclesNegHeightTwo}
        gap={gap}
        obstacleHeight={obstacleHeight}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
