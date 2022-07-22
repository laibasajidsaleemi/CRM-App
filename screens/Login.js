import Client from "../screens/Client";
import Menu from "../screens/Menu";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Alert,StyleSheet, Text, View, Image, TextInput, TouchableOpacity,} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import privyr from "../images/privyr.png";

 const user = {
   email: "Admin",
   password: "admin"
 }

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("LOGIN");
 
  return (
      
    <View style={styles.container}>
    <KeyboardAwareScrollView style={styles.scrollview}>
      <Image style={styles.image} source={privyr} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}
        onPress={()=> {
          if(email === user.email && password === user.password){
            navigation.navigate(Menu);
          } else {
            Alert.alert("Wrong password. Try again.");
          }
        }}
      >
        <Text style={styles.loginText}>{buttonText}</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginLeft:45,
    marginTop:100,
    marginBottom: 40,
  },
 
  inputView: {
    marginLeft:60,
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    borderWidth: 1,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 5,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    textAlign:"center"
  },
 
  loginBtn: {
    marginLeft:60,
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#2196F3",
  },
  scrollview:{
    width:385,
  },
});

export default Login;