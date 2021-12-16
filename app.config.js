import 'dotenv/config';


export default ({config}) => {

  return {
    ...config,
    extra: {
      environment: process.env.ENVIRONMENT,
      flickr: {
        apiUrl: process.env.FLICKR_API_URL,
        apiKey: process.env.FLICKR_API_KEY,
      },
      google: {
        webClientId: process.env.GOOGLE_WEB_CLIENT_ID,
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
