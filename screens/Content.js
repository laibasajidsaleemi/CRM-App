import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, FlatList, Text } from "react-native";
import { Searchbar, Divider } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import axios from "axios";

const Tab = createMaterialTopTabNavigator();

const Messages = ( {navigation} ) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        axios
          .get("http://10.135.50.186:1337/api/messages")
          .then((res) => setMessages(res.data.data));
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <View style={styles.childView}>
      <FlatList
        style={styles.list}
        data={messages}
        renderItem={({ item: message }) => {
          return (
            <View style={{ flex: 1 }}>
              <Divider
                style={{
                  borderWidth: 0.2,
                  borderColor: "#808080",
                  marginBottom: "2.5%",
                }}
              />
              <Text style={styles.title}>{message.attributes.message}</Text>

              <Divider
                style={{
                  borderWidth: 0.2,
                  borderColor: "#808080",
                  marginTop: "2.5%",
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const Files = () => {
  return null;
};

const Pages = () => {
  return null;
};

const Content = ( {navigation} ) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View
        style={{
          flex: 1.1,
          backgroundColor: "#FFFFFF",
          marginTop: "10%",
          paddingTop: "5%",
          paddingLeft: "3%",
          paddingRight: "3%",
        }}
      >
        <Searchbar
          style={{ backgroundColor: "#FFFFFF" }}
          placeholder="Search messages..."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Tab.Navigator
          style={styles.tabNavigator}
          screenOptions={{
            tabBarActiveTintColor: "#000000",
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: "#FFFFFF" },
          }}
        >
          <Tab.Screen
            name="Messages"
            component={Messages}
            options={{ tabBarLabel: "Messages" }}
          ></Tab.Screen>
          <Tab.Screen
            name="Files"
            component={Files}
            options={{ tabBarLabel: "Files" }}
          ></Tab.Screen>
          <Tab.Screen
            name="Pages"
            component={Pages}
            options={{ tabBarLabel: "Pages" }}
          ></Tab.Screen>
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default Content;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  statusBar: {
    flex: 1.1,
    backgroundColor: "#FFFFFF",
    marginTop: "10%",
    paddingTop: "5%",
    paddingLeft: "3%",
    paddingRight: "3%",
  },
  searchBar: {
    backgroundColor: "#FFFFFF",
  },
  tabNavigator: {
    marginTop: "5%",
  },
  childView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  list: {
    width: "99%",
  },
  bottomTab: {
    flex: 0.1,
    marginLeft: "3%",
    marginRight: "3%",
    flexDirection: "row",
  },
});
