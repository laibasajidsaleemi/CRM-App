import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Divider } from "react-native-paper";
import TextAvatar from "react-native-text-avatar";

const Account = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 0.1, marginTop: "10%", backgroundColor: "#FFFFFF" }}>
        <Text
          style={{
            textAlign: "center",
            paddingTop: "5%",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Account
        </Text>
      </View>
      <View style={{ flex: 0.11 }}>
        <View style={{ flex: 1 }}>
          <Divider
            style={{
              borderWidth: 0.2,
              borderColor: "#808080",
              marginBottom: "2.5%",
            }}
          />
          <TextAvatar
            backgroundColor={"#D3D3D3"}
            textColor={"#000000"}
            size={60}
            type={"circle"}
          >
            Rana Ajmal
          </TextAvatar>
          <Divider
            style={{
              borderWidth: 0.2,
              borderColor: "#808080",
              marginTop: "2.5%",
            }}
          />
        </View>
        <Text
          style={{
            marginLeft: "20%",
            paddingBottom: "8%",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Rana Ajmal
        </Text>
      </View>
          <Text style={{fontSize: 15, marginTop: '5%', marginLeft: '5%'}}>Account Preferences</Text>
      <View style={{flex: 0.1, marginTop: '5%'}}>
                <View style={{flex: 0.4}}>
                    <Text
                        onPress={()=> console.log("Settings is pressed.")}
                        style={{fontSize: 15, paddingTop: '1.5%', marginLeft: '5%'}}
                    >
                        Settings</Text>
                </View>
                <View style={{flex: 0.4}}>
                    <Text
                        onPress={()=> console.log("Integrations is pressed.")}
                        style={{fontSize: 15, paddingTop: '1.5%', marginLeft: '5%'}}
                    >
                        Integrations</Text>
                </View>
            
      </View>

      <Text style={{fontSize: 15, marginTop: '5%', marginLeft: '5%'}}>Customer Support</Text>
      <View style={{flex: 0.1, marginTop: '5%'}}>
                <View style={{flex: 0.4}}>
                    <Text
                        onPress={()=> console.log("userguide is pressed.")}
                        style={{fontSize: 15, paddingTop: '1.5%', marginLeft: '5%'}}
                    >
                        User Guide</Text>
                </View>
                <View style={{flex: 0.4}}>
                    <Text
                        onPress={()=> console.log("chatwithus is pressed.")}
                        style={{fontSize: 15, paddingTop: '1.5%', marginLeft: '5%'}}
                    >
                        Chat With Us</Text>
                </View>
            
      </View>
    </SafeAreaView>
  );
};

export default Account;
