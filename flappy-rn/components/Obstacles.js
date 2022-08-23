import React from 'react'
import { View } from 'react-native'
//import { getApplication } from 'react-native-web/dist/cjs/exports/AppRegistry/renderApplication'

const Obstacles = ({ obstaclesLeft, obstacleWdith, obstacleHeight, gap }) => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'green',
          width: obstacleWdith,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: 0 + obstacleHeight + gap,
        }}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'green',
          width: obstacleWdith,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: 0,
        }}
      />
    </>
  )
}

export default Obstacles
