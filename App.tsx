import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { createContext, useState } from "react";
import SignIn from "./src/Screens/SignIn/SignIn";
import Page1 from "./src/Screens/SignIn/page1";
import Page2 from "./src/Screens/SignIn/page2";
import Page3 from "./src/Screens/SignIn/page3";
import Page4 from "./src/Screens/SignIn/page4";
import Page5 from "./src/Screens/SignIn/page5";
import { Data } from "./src/utils/context";
import { SignUpData } from "./src/utils/util";
// const data = useRef({})
const Stack = createNativeStackNavigator();
export default function App(){
  const [name,setName] = useState('');
  const [age,setAge] = useState(0);

  return (
    <NavigationContainer>
      <Data.Provider value={[[name,setName],[age,setAge]]}>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name={SignUpData.Page1} component={Page1}/>
        <Stack.Screen name={SignUpData.Page2} component={Page2}/>
        <Stack.Screen name={SignUpData.Page3} component={Page3}/>
        <Stack.Screen name={SignUpData.Page4} component={Page4}/>
        <Stack.Screen name={SignUpData.Page5} component={Page5}/>
      </Stack.Navigator>
      </Data.Provider>
    </NavigationContainer>
  )
}