import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class MyNavScreen extends Component {

    render() {
        const {navigation, comp, banner} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}}
                                      onPress={() => navigation.navigate('DrawerOpen')}>
                        <MaterialIcons name='menu' size={32} style={{color: '#fff'}}/>
                    </TouchableOpacity>
                    <View style={{flex: 2, alignItems: 'center'}}>
                        <Text style={{fontSize: 20, color: 'white'}}>{banner}</Text>
                    </View>
                    <View style={{flex: 1}}/>
                </View>
                {comp}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
    navBar: {
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 15,
        backgroundColor: '#0f00ff',
        paddingVertical: 8
    },
    sampleText: {
        margin: 14,
    },
});

export default MyNavScreen;