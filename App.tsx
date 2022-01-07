import React from 'react'
import { SafeAreaView } from 'react-native'
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
// import { ContadorScreen } from './src/screens/ContadorScreen'
// import { DimensionesScreen } from './src/screens/DimensionesScreen'
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen'
// import { PositionAbsoluteScreen } from './src/screens/PositionAbsoluteScreen'
// import { PositionScreen } from './src/screens/PositionScreen';
// import { FlexScreen } from './src/screens/FlexScreen'
// import { FlexDirectionScreen } from './src/screens/FlexDirectionScreen';
// import { JustifyContentScreen } from './src/screens/JustifyContentScreen';
// import { AlignItemsScreen } from './src/screens/AlignItemsScreen';
// import { AlignSelfScreen } from './src/screens/AlignSelfScreen'
// import { FlexWrapScreen } from './src/screens/FlexWrapScreen'
import { ActividadScreen } from './src/screens/Actividad/GuiaScreen';


export const App = () => {
  return (
      
      // Para ios es necesario usar SafeAreaView para que omita el notch y se vea bien en este caso el texto
      <SafeAreaView 
        style={{ 
          flex: 1,
          backgroundColor: '#28425B' // Fix para "quitar" el notch de IOs
        }}>  
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionesScreen /> */}
        {/* <PositionScreen /> */}
        {/* <PositionAbsoluteScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        {/* <JustifyContentScreen /> */}
        {/* <AlignItemsScreen /> */}
        {/* <AlignSelfScreen /> */}
        {/* <FlexWrapScreen /> */}
        <ActividadScreen />
      </SafeAreaView>
  )
}

// export default App;
