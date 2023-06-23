import React, { useContext } from "react";

import { View } from "react-native";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { ActivityIndicator } from "react-native";

import { AuthContext } from "../contexts/AuthContext";

function Routes() {
  const { isAuthenticated, loading, loadingAuth } = useContext(AuthContext);

  const isAuthenticanted = isAuthenticated;

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#1d1d2E",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={60} color="#f5f7fb" />
      </View>
    );
  }

  return isAuthenticanted ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
