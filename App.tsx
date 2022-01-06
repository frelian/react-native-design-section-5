import React from 'react'
import { SafeAreaView } from 'react-native'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
import { ContadorScreen } from './src/screens/ContadorScreen'
import { DimensionesScreen } from './src/screens/DimensionesScreen'
import { HolaMundoScreen } from './src/screens/HolaMundoScreen'
import { PositionScreen } from './src/screens/PositionScreen';

export const App = () => {
  return (
      
      // Para ios es necesario usar SafeAreaView para que omita el notch y se vea bien en este caso el texto
      <SafeAreaView style={{ flex: 1 }}>
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionesScreen /> */}
        <PositionScreen />
      </SafeAreaView>
  )
}

// export default App;
