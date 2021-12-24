import { Dimensions } from "react-native";


const window = Dimensions.get("window");
const { width, height } = window;
const LATITUD_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUD_DELTA * (width / height)


function getRegion(latlon) {
  return {
    latitudeDelta: LATITUD_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
    ...latlon,
  }
}


export { getRegion }

