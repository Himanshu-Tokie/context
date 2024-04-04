import React, { useState,useContext, createContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ButtonTemplate from "../../customButtons/buttonTemplate";
import TextButton from "../../customButtons/textButton";
import { SignUpData } from "../../utils/util";
import Page1 from "./page1";
import Page2 from "./page2";

const Data = createContext({})

export default function UserSignIn({navigation}){
    const [name,setName] = useState('');
    const [pass,setPass] = useState('');
    return (
        <>
        <View style={styles.container}>
        <View >
        <ButtonTemplate text={SignUpData.UserName} ></ButtonTemplate>
        <ButtonTemplate text={SignUpData.UserPassword} ></ButtonTemplate>
        </View>
        <View>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(Page1)}>
        <TextButton text="Sign1"></TextButton>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(Page2)}>
        <TextButton text="Sign2"></TextButton>
        </TouchableOpacity>
        </View>
        </View>
        
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#323139',
        flex:1,
        justifyContent:"center",
        alignContent:"center"
    },
    button:{
        backgroundColor:"green",
        borderWidth: 0,
        borderColor: 'grey',
        borderRadius: 50,
        marginBottom: 10,
        marginHorizontal:60
      }
})