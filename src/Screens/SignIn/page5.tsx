import React, { useContext } from "react";
import TextButton from "../../customButtons/textButton";
import { StyleSheet, TouchableOpacity, View,Text } from "react-native";
import { Data } from "../../utils/context";
import Page3 from "./page3";
// import Page3 from "./page3";


export default function Page5({navigation}){
    const name = useContext(Data);
    console.log(name);
    
    return (
        <>
        <View>
            <Text>{name[0][0]}</Text>
            <Text>{name[1][0]}</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.goBack()}>
        <TextButton text="Go Back"></TextButton>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(Page3)}>
        <TextButton text="Navigate Page3"></TextButton>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.push('Page5')}>
        <TextButton text="Push 5"></TextButton>
        </TouchableOpacity>
        </View>
        
        </>
    )
}
const styles = StyleSheet.create({
    button:{

    }
})