import React from "react";
import { render } from "react-dom";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";

const App = () => {
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("./índice.jpeg")}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            suco com agua da torneira e bolacha maria
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("./índice.jpeg")}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            suco com agua da torneira e bolacha maria
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("./índice.jpeg")}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            suco com agua da torneira e bolacha maria
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("./índice.jpeg")}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            suco com agua da torneira e bolacha maria
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 200,
    padding: 30
  },
  buttonFacebookStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#63BF6A",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 70,
    borderRadius: 5,
    margin: 5
  },
  buttonImageIconStyle: {
    padding: 30,
    margin: 10,
    height: 25,
    width: 25,
    resizeMode: "stretch"
  },
  buttonTextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginLeft: 10
  },
  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 1,
    height: 40
  }
});

export default App;
