import React from 'react'
import { View } from 'react-native'
//import { getApplication } from 'react-native-web/dist/cjs/exports/AppRegistry/renderApplication'

const Obstacles = ({
  obstaclesLeft,
  obstacleWdith,
  obstacleHeight,
  gap,
  randomBottom,
}) => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'orange',
          width: obstacleWdith,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: randomBottom + obstacleHeight + gap,
        }}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'orange',
          width: obstacleWdith,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: randomBottom,
        }}
      />
    </>
  )
}

export default Obstacles
