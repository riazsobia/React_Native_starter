import React, {Component} from 'react';
import {Button, ScrollView, Text, TouchableOpacity, View, StyleSheet, ProgressBarAndroid, Image} from "react-native";
import AnimatedCircularProgress from "react-native-circular-progress/src/AnimatedCircularProgress";
import Chart from "../component/Chart";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class Dashboard extends Component {

    constructor(){
        super();
        this.state={
            checkInIcon : 'arrow-forward',
            checkInText : 'Clock In'
        }

        this.checkIn = this.checkIn.bind(this);
    }

    checkIn(){
        if(this.state.checkInIcon === 'arrow-forward'){
            this.setState ({
                checkInIcon : 'arrow-back',
                checkInText : 'Clock Out'
            });
        }else {
            this.setState ({
                checkInIcon : 'arrow-forward',
                checkInText : 'Clock In'
            });
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.name}>
                    <Text style={{padding: 5, fontSize: 20}}>Hi Thomas</Text>
                    <TouchableOpacity style={styles.button} onPress={this.checkIn}>
                        <MaterialIcons style={{color: 'steelblue'}} name={this.state.checkInIcon} size={20}/>
                        <Text style={{color: 'steelblue'}}> {this.state.checkInText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 4}}>
                    <View style={styles.stats}>
                        <View style={styles.statsFirst}>
                            <Text>Today</Text>
                            <Text style={{fontSize: 35}}>10</Text>
                        </View>
                        <View style={styles.statsInside}>
                            <Text style={{color: 'steelblue'}}>Completed</Text>
                            <Text style={{fontSize: 30, color: 'steelblue'}}>0</Text>
                        </View>
                        <View style={styles.statsInside}>
                            <AnimatedCircularProgress
                                size={52}
                                width={2}
                                fill={0}
                                tintColor="#0f00ff"
                                backgroundColor='#dae8e3'>
                                {(fill) => (<Text style={{fontSize: 10}}>0%</Text>)}
                            </AnimatedCircularProgress>
                        </View>
                    </View>
                    <View style={styles.stats}>
                        <View style={styles.statsFirst}>
                            <Text>This Week</Text>
                            <Text style={{fontSize: 35}}>70</Text>
                        </View>
                        <View style={styles.statsInside}>
                            <Text style={{color: 'steelblue'}}>Completed</Text>
                            <Text style={{fontSize: 30, color: 'steelblue'}}>65</Text>
                        </View>
                        <View style={styles.statsInside}>
                            <AnimatedCircularProgress
                                size={52}
                                width={2}
                                fill={95}
                                tintColor="#0f00ff"
                                backgroundColor='#dae8e3'>
                                {(fill) => (<Text style={{fontSize: 10}}>90%</Text>)}
                            </AnimatedCircularProgress>
                        </View>
                    </View>
                    <View style={styles.stats}>
                        <View style={styles.statsFirst}>
                            <Text>This Month</Text>
                            <Text style={{fontSize: 35}}>72</Text>
                        </View>
                        <View style={styles.statsInside}>
                            <Text style={{color: 'steelblue'}}>Completed</Text>
                            <Text style={{fontSize: 30, color: 'steelblue'}}>72</Text>
                        </View>
                        <View style={styles.statsInside}>
                            <AnimatedCircularProgress
                                size={52}
                                width={2}
                                fill={100}
                                tintColor="#0f00ff"
                                backgroundColor='#dae8e3'>
                                {(fill) => (<Text style={{fontSize: 10}}>100%</Text>)}
                            </AnimatedCircularProgress>
                        </View>
                    </View>
                </View>
                <View style={{flex: 4, marginTop: 30, marginHorizontal: 5}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue', padding: 5}}>
                        <Text>Last 6 Months</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image style={{flex:1}} resizeMode="stretch"
                            source={require('../img/chart.png')}/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d4dde8'
    },
    name: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e3dbe8',
        margin: 5
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#0f00ff',
        flexDirection: 'row',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10
    },
    stats: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: 'white',
        margin: 5
    },
    statsFirst: {
        flex: 1.5,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: 'powderblue',
    },
    statsInside: {
        flex: 2,
        padding: 15,
        marginVertical: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: 'powderblue',
    }
});

export default Dashboard;