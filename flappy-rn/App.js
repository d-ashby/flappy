import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Bird from './components/Bird'
import Obstacles from './components/Obstacles'

export default function App() {
  const screenWidth = Dimensions.get('screen').width
  const screenHeight = Dimensions.get('screen').height
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
  const obstacleWdith = 60
  const obstacleHeight = 300
  const gap = 50
  const gravity = 3
  let gameTimerId
  let obstaclesLeftTimerId

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
  console.log(birdBottom)

  useEffect(() => {
    if (obstaclesLeft > 0) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft((obstaclesLeft) => obstaclesLeft - 5)
      }, 30)
    }
    return () => {
      clearInterval(obstaclesLeftTimerId)
    }
  }, [obstaclesLeft])

  return (
    <View style={styles.container}>
      <Bird birdBottom={birdBottom} birdLeft={birdLeft} />
      <Obstacles
        obstaclesLeft={obstaclesLeft}
        obstacleWdith={obstacleWdith}
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
