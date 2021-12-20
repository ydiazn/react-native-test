import 'dotenv/config';


export default () => {
  return {
    name: "react-native-test",
    slug: "react-native-test",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    scheme: "ypp",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.yenner.reactnativetest",
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      },
      package: "com.yenner.reactnativetest",
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        }
      }
    },
    web: {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      environment: process.env.ENVIRONMENT,
      flickr: {
        apiUrl: process.env.FLICKR_API_URL,
        apiKey: process.env.FLICKR_API_KEY,
      },
      google: {
        webClientId: process.env.GOOGLE_WEB_CLIENT_ID,
        mapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
      tomtom: {
        apiKey: process.env.TOMTOM_API_KEY,
      },
      firebase: {
        config: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
        },
        emulators: {
          firestore: {
            host: process.env.FIREBASE_EMULATOR_FIRESTORE_HOST,
            port: process.env.FIREBASE_EMULATOR_FIRESTORE_PORT,
          },
          authentication: {
            host: process.env.FIREBASE_EMULATOR_AUTH_HOST,
            port: process.env.FIREBASE_EMULATOR_AUTH_PORT
          }
        }
      }
    }
  }
}
