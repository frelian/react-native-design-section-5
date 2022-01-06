import React from 'react'
import { SafeAreaView } from 'react-native'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
import { ContadorScreen } from './src/screens/ContadorScreen'
import { HolaMundoScreen } from './src/screens/HolaMundoScreen'

export const App = () => {
  return (
      
      // Para ios es necesario usar SafeAreaView para que omita el notch y se vea bien en este caso el texto
      <SafeAreaView>
        <BoxObjectModelScreen />
      </SafeAreaView>
  )
}

// export default App;
