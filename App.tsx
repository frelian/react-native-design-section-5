import React from 'react'
import { SafeAreaView } from 'react-native'
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
// import { ContadorScreen } from './src/screens/ContadorScreen'
// import { DimensionesScreen } from './src/screens/DimensionesScreen'
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen'
// import { PositionAbsoluteScreen } from './src/screens/PositionAbsoluteScreen'
// import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen'
import { FlexDirectionScreen } from './src/screens/FlexDirectionScreen';

export const App = () => {
  return (
      
      // Para ios es necesario usar SafeAreaView para que omita el notch y se vea bien en este caso el texto
      <SafeAreaView style={{ flex: 1 }}>
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionesScreen /> */}
        {/* <PositionScreen /> */}
        {/* <PositionAbsoluteScreen /> */}
        {/* <FlexScreen /> */}
        <FlexDirectionScreen />
      </SafeAreaView>
  )
}

// export default App;
