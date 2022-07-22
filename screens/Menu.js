import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import Client from "../screens/Client";
import Content from "../screens/Content";
import Followup from "../screens/Followup";
import Account from "../screens/Account";

const Menu = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View>
        <TouchableOpacity
          style={{
            marginLeft: 60,
            width: "70%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30%",
            backgroundColor: "#2196F3",
          }}
          onPress={() => navigation.navigate(Client)}
        >
          <Text>Clients</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{
            marginLeft: 60,
            width: "70%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20%",
            backgroundColor: "#2196F3",
          }}
          onPress={() => navigation.navigate(Content)}
        >
          <Text>Content</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{
            marginLeft: 60,
            width: "70%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20%",
            backgroundColor: "#2196F3",
          }}
          onPress={() => navigation.navigate(Followup)}
        >
          <Text>Follow Ups</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{
            marginLeft: 60,
            width: "70%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20%",
            backgroundColor: "#2196F3",
          }}
          onPress={() => navigation.navigate(Account)}
        >
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
