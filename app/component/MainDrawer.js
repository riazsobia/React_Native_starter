/**
 * @flow
 */
import React from 'react';
import {DrawerNavigator} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dashboard from "../screen/Dashboard";
import LeadList from "../screen/LeadList";
import LeadDetail from "../screen/LeadDetail";
import MyNavScreen from "../screen/MyNavScreen";

const CreateScreen = ({ navigation }) => (
    <MyNavScreen banner={'Create'} comp={'Create Screen'} navigation={navigation} />
);
CreateScreen.navigationOptions = {
    drawerLabel: 'Create',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="open-in-new" size={24} style={{ color: tintColor }}/>
    ),
};

const ListScreen = ({ navigation }) => (
    <MyNavScreen banner={'Leads'} comp={<LeadList/>} navigation={navigation} />
);

ListScreen.navigationOptions = {
    drawerLabel: 'Leads',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="list" size={24} style={{ color: tintColor }} />
    ),
};


const DashboardScreen = ({ navigation}) => (
    <MyNavScreen banner={'Overnite Express'} comp={<Dashboard/>} navigation={navigation}/>
);

DashboardScreen.navigationOptions = {
    drawerLabel: 'DashBoard',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="dashboard" size={24} style={{ color: tintColor }} />
    ),
};


const LeadDetailScreen = ({ navigation}) => (
    <MyNavScreen banner={'Lead Detail'} comp={<LeadDetail/>} navigation={navigation}/>
);

const MainDrawer = DrawerNavigator(
    {
        DashBoard: {
            path: '/board',
            screen: DashboardScreen,
        },
        Create: {
            path: '/create',
            screen: CreateScreen,
        },
        Leads: {
            path: '/list',
            screen: ListScreen,
        }
    },
    {
        initialRouteName: 'Leads',
        contentOptions: {
            activeTintColor: '#491fe9',
        },
    }
);

const DrawerExample = DrawerNavigator({
    Drafts: {
        screen: MainDrawer,
    },
});

export default MainDrawer;