import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "b253f9687181ddf3ca2645a0ab65fcdf";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (lat, lon) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: data.weather[0].main,
      temp: data.main.temp
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.");
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, condition, temp } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
