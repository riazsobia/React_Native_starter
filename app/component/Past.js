import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


class Past extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.lead}>
                    <View style={styles.leadFace}>
                        <MaterialIcons style={{color: 'steelblue'}} name='face' size={70}/>
                    </View>
                    <View style={styles.leadName}>
                        <Text style={{fontWeight: 'bold'}}>Samna Bank</Text>
                        <Text>P Kaushik</Text>
                        <Text>Branch Manager</Text>
                    </View>
                    <View style={styles.leadDetail}>
                        <TouchableOpacity style={styles.redbutton} onPress={null}>
                            <Text style={{color: 'white'}}>Reschedule</Text>
                        </TouchableOpacity>
                        <Text style={{color: 'steelblue'}}>9843256029</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d4dde8'
    },
    redbutton: {
        alignItems: 'center',
        backgroundColor: '#ff2b23',
        paddingHorizontal: 4,
        borderRadius: 4
    },
    yellowbutton: {
        alignItems: 'center',
        backgroundColor: '#e8dd69',
        paddingHorizontal: 4,
        borderRadius: 4
    },
    greenbutton: {
        alignItems: 'center',
        backgroundColor: 'green',
        paddingHorizontal: 4,
        borderRadius: 4
    },
    lead: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: 'white',
        margin: 5
    },
    leadFace: {
        flex: 1.5,
        alignItems: 'center',
        paddingVertical: 5,
    },
    leadName: {
        flex: 2,
        paddingVertical: 10,
        alignItems: 'flex-start',
    },
    leadDetail: {
        flex: 2,
        padding: 10,
        backgroundColor: 'white',
        alignItems: 'flex-end'
    }
});

export default Past;