import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#77A1D3", "#79CBCA", "#E684AE"],
    title: "Haze",
    subtitle: "Just don't go outside."
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#003973", "#E5E5BE"],
    title: "Rain",
    subtitle: "Time to go outside!!"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#EDE574"],
    title: "Sunny",
    subtitle: "Time to go outside!!"
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#4C669F", "#3B5998", "#192F6A"],
    title: "Thunderstorm",
    subtitle: "Don't go outside!!"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6ff"],
    title: "Drizzle",
    subtitle: "Time to go outside!!"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#2193b0", "#6dd5ed"],
    title: "Snow",
    subtitle: "Do you wanna build a snowman?"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#E55D87", "#5FC3E4"],
    title: "Clouds",
    subtitle: "Time to go outside!!"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist",
    subtitle: "Time to go outside!!"
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#603813", "#b29f94"],
    title: "Smoke",
    subtitle: "Thanks alot China."
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#ff6e7f", "#bfe9ff"],
    title: "Dust",
    subtitle: "Thanks alot China."
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#D7D2cc", "#304352"],
    title: "Fog",
    subtitle: "Don't go outside!!"
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#3CA55C", "#B5AC49"],
    title: "Sand",
    subtitle: "Don't go outside!!"
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#403B4A", "#E7E9BB"],
    title: "Ash",
    subtitle: "Don't go outside!!"
  },
  Squall: {
    iconName: "weather-pouring",
    gradient: ["#4C669F", "#3B5998", "#192F6A"],
    title: "Squall",
    subtitle: "Don't go outside!!"
  },
  Tornado: {
    iconName: "weather-hurricane",
    gradient: ["#2b5876", "#4e4376"],
    title: "Tornado",
    subtitle: "Don't go outside!!"
  }
};
export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600"
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
