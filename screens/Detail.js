import * as React from "react";
import { useState } from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";
import { Menu, Provider, IconButton, Colors } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Timeline from "react-native-timeline-flatlist";
// import call from "react-native-phone-call";

const DetailScreen = ({ navigation, route }) => {
  const data = [
    {
      time: "09:00",
      title: "Event 1",
      description: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      time: "10:45",
      title: "Event 2",
      description: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      time: "12:00",
      title: "Event 3",
      description: "Lorem Ipsum is simply dummy text of the printing.",
    },
  ];

  let item = route.params;

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // const args = {
  //   number: JSON.stringify({item: item.item.number}),
  //   prompt: true,
  //   skipCanOpen: false
  // }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 0.07, zIndex: 1 }}>
        <Appbar style={styles.bottom}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Provider>
            <View style={{ marginLeft: "85%", zIndex: 0 }}>
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                  <Appbar.Action icon="dots-vertical" onPress={openMenu} />
                }
              >
                <Menu.Item onPress={() => {}} title="Edit client" />
                <Menu.Item onPress={() => {}} title="Add to groups" />
                <Menu.Item onPress={() => {}} title="Remove New Lead label" />
                <Menu.Item onPress={() => {}} title="Add to phonebook" />
                <Menu.Item onPress={() => {}} title="Delete Client" />
              </Menu>
            </View>
          </Provider>
        </Appbar>
      </View>
      <View style={{ flex: 0.1, marginTop: "13%" }}>
        <Text
          style={{
            marginLeft: "5%",
            fontSize: 45,
            fontWeight: "bold",
          }}
        >
          {item.item.name}
        </Text>
      </View>
      <IconButton
        style={{ marginTop: "7%" }}
        icon="phone"
        color={Colors.blue500}
        size={50}
        onPress={() => console.log({ item: item.item.number })}
        // onPress={()=> call(args).catch(console.error)}
      />
      <IconButton
        icon="message"
        color={Colors.blue500}
        style={{ marginLeft: "25%", marginTop: "-20.5%" }}
        size={50}
        onPress={() => console.log({ item: item.item.number })}
      />

      <IconButton
        icon="email"
        color={Colors.blue500}
        style={{ marginLeft: "50%", marginTop: "-20.5%" }}
        size={50}
        onPress={() => console.log({ item: item.item.email })}
      />

      <IconButton
        icon="whatsapp"
        color={Colors.blue500}
        style={{ marginLeft: "75%", marginTop: "-20.5%" }}
        size={50}
        onPress={() => console.log({ item: item.item.number })}
      />
      <View style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
        <Button title="Follow Up" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={hideDatePicker}
          onCancel={hideDatePicker}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>TimeLine</Text>
        <Timeline data={data} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottom: {
    marginTop: "8.5%",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 0.85,
  },
  title: {
    padding: 16,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default DetailScreen;
