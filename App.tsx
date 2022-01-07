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
// import { UnoScreen } from './src/screens/Actividad/UnoScreen';
// import { DosScreen } from './src/screens/Actividad/DosScreen';
// import { TresScreen } from './src/screens/Actividad/TresScreen';
// import { CuatroScreen } from './src/screens/Actividad/CuatroScreen';
// import { CincoScreen } from './src/screens/Actividad/CincoScreen';
// import { SeisScreen } from './src/screens/Actividad/SeisScreen';
// import { SieteScreen } from './src/screens/Actividad/SieteScreen';
// import { OchoScreen } from './src/screens/Actividad/OchoScreen';
// import { NueveScreen } from './src/screens/Actividad/NueveScreen';
import { DiezScreen } from './src/screens/Actividad/DiezScreen';


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
        {/* <ActividadScreen /> */}
        {/* <UnoScreen /> */}
        {/* <DosScreen /> */}
        {/* <TresScreen/> */}
        {/* <CuatroScreen /> */}
        {/* <CincoScreen /> */}
        {/* <SeisScreen /> */}
        {/* <SieteScreen /> */}
        {/* <OchoScreen /> */}
        {/* <NueveScreen /> */}
        <DiezScreen />
      </SafeAreaView>
  )
}

// export default App;
