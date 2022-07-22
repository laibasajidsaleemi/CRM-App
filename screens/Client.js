import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { Divider, Searchbar, BottomNavigation } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import axios from "axios";
import TextAvatar from "react-native-text-avatar";
const Tab = createMaterialTopTabNavigator();

const TEAM = [
  {
    id: "1",
    title: "Team Haris",
  },
  {
    id: "2",
    title: "Team Yahya",
  },
  {
    id: "3",
    title: "Team Rohaan",
  },
  {
    id: "4",
    title: "Team Hussain",
  },
];

const GROUPS = [
  {
    id: "1",
    title: "Group-1",
  },
  {
    id: "2",
    title: "Group-2",
  },
  {
    id: "3",
    title: "Group-3",
  },
  {
    id: "4",
    title: "Group-4",
  },
];

AllClients = ({ navigation }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        axios
          .get("http://10.135.50.186:1337/api/customers")
          .then((res) => setCustomers(res.data.data));
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <View style={styles.childView}>
      <FlatList
        style={styles.list}
        data={customers}
        renderItem={({ item: customer }) => {
          return (
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
                {customer.attributes.name}
              </TextAvatar>
              <Text
                onPress={() => {
                  navigation.navigate("Detail", {
                    item: customer.attributes,
                  });
                }}
                style={styles.title}
              >
                {customer.attributes.name}
              </Text>

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

const Team = () => {
  // return (
  //   <View style={styles.childView}>
  //     <FlatList
  //       style={styles.list}
  //       data={TEAM}
  //       renderItem={(item) => {
  //         return (
  //           <View style={styles.itemView}>
  //             <Text>{item.item.title}</Text>
  //             <Divider style={{ borderWidth: 1, borderColor: "#808080" }} />
  //           </View>
  //         );
  //       }}
  //     />
  //   </View>
  // );
  return null;
};

const Groups = () => {
  // return (
  //   <View style={styles.childView}>
  //     <FlatList
  //       style={styles.list}
  //       data={GROUPS}
  //       renderItem={(item) => {
  //         return (
  //           <View style={styles.itemView}>
  //             <Text>{item.item.title}</Text>
  //             <Divider style={{ borderWidth: 1, borderColor: "#808080" }} />
  //           </View>
  //         );
  //       }}
  //     />
  //   </View>
  // );
  return null;
};

const Client = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.statusBar}>
        <Searchbar
          style={styles.searchBar}
          placeholder="Search clients & phonebook..."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Tab.Navigator
          initialRouteName="AllClients"
          style={styles.tabNavigator}
          screenOptions={{
            tabBarActiveTintColor: "#000000",
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: "#FFFFFF" },
          }}
        >
          <Tab.Screen
            name="All Clients"
            component={AllClients}
            options={{ tabBarLabel: "All Clients" }}
          ></Tab.Screen>
          <Tab.Screen
            name="Team"
            component={Team}
            options={{ tabBarLabel: "Team" }}
          ></Tab.Screen>
          <Tab.Screen
            name="Groups"
            component={Groups}
            options={{ tabBarLabel: "Groups" }}
          ></Tab.Screen>
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

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
    marginLeft: "20%",
    position: "absolute",
    top: 17.5,
    bottom: 0,
    fontSize: 30,
    fontWeight: "bold",
  },
  list: {
    width: "99%",
  },
});

export default Client;
