import React from "react";
import { Text, View, SafeAreaView} from "react-native";
import { Divider } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';

const Followup = ({navigation}) => {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <View style={{flex: 0.1, marginTop: '10%', backgroundColor: '#FFFFFF'}}>
                <Text style={{textAlign: 'center', paddingTop: '5%', fontSize: 24, fontWeight: 'bold'}}>Follow Ups</Text>
            </View>
            <View style={{flex: 0.2, marginTop: '2%', backgroundColor: '#FFFFFF'}}>
            <Divider />
                <View style={{flex: 0.328}}>
                    <Text
                        onPress={()=> console.log("Overdue is pressed.")}
                        style={{fontSize: 26, fontWeight: 'bold', paddingTop: '1.5%', marginLeft: '4%'}}
                    >
                        <Icon
                        name="calendar-times-o"
                        size={26}
                    ></Icon>
                        OVERDUE</Text>
                </View>
                <Divider />
                <View style={{flex: 0.328}}>
                    <Text
                        onPress={()=> console.log("Upcoming is pressed.")}
                        style={{fontSize: 26, fontWeight: 'bold', paddingTop: '1.5%', marginLeft: '4%'}}
                    >
                        <Icon
                        name="calendar"
                        size={26}
                    ></Icon>
                        UPCOMING</Text>
                </View>
                <Divider />
                <View style={{flex: 0.328}}>
                    <Text
                        onPress={()=> console.log("Someday is pressed.")}
                        style={{fontSize: 26, fontWeight: 'bold', paddingTop: '1.5%', marginLeft: '4%'}}
                    >
                        <Icon
                        name="calendar-check-o"
                        size={26}
                    ></Icon>
                        SOMEDAY</Text>
                </View>
                <Divider />
            </View>
            <View style={{flex: 0.4, backgroundColor: '#F5F5F5', marginTop: '2%'}}>
            <View style={{flex: 0.2}}>
                    <Text
                        onPress={()=> console.log("Someday is pressed.")}
                        style={{fontSize: 26, fontWeight: 'bold', paddingTop: '1.5%', marginLeft: '4%'}}
                    >
                        <Icon
                        name="calendar-o"
                        size={26}
                    ></Icon>
                        TODAY</Text>
                </View>
                <Divider />
                <View style={{flex: 0.8}}>
                    <Text style={{paddingTop: '15%',textAlign: 'center', marginTop: '2%', fontSize: 20, fontWeight: 'bold'}}>
                        No clients to follow up with today
                    </Text>
                    <Text style={{paddingTop: '8%',textAlign: 'center', marginTop: '2%', fontSize: 16}}>
                        'Follow up' is useful to plan out what's next for a particular client - have coffee, schedule a meeting, or anything else to keep things going
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Followup;