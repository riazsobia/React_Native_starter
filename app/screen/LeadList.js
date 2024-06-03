import React from 'react';
import TabNavigator from "react-navigation/src/navigators/TabNavigator";
import Upcoming from "../component/Upcoming";
import Today from "../component/Today";
import Past from "../component/Past";

export default LeadList = TabNavigator(
    {
        Today: {
            screen: Today
        },
        Upcoming: {
            screen: Upcoming
        },
        Past: {
            screen: Past
        }
    }, {
        tabBarOptions: {
            style: {
                backgroundColor: '#0f00ff',
            }
        }
    }
);