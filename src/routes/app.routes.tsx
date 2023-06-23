import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const Tab = createMaterialBottomTabNavigator();

import Dashboard from "../pages/Dashboard";

function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#7261E1"
      inactiveColor="#7261E1"
      barStyle={{ backgroundColor: "#FFFFFF" }}
    >
      <Tab.Screen
        component={Dashboard}
        name="Home"
        options={{
          tabBarAccessibilityLabel: "#fff",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="tablet-dashboard"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Dieta"
        component={Dashboard}
        options={{
          tabBarLabel: "Dieta",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="food-drumstick"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;
