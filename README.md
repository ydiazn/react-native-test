# React native app example

## Setup

### Install dependencies

`$ yarn install `

### Settings

Create an environment file with name .env in the project root and set required environment variables. Use .env-example file located in project root as reference.

```
# Environment
ENVIRONMENT=production

API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXX
AUTH_DOMAIN=XXXXXXXXXXXXXXXXXXXXXXXX
PROJECT_ID=XXXXXXXXXXXXXXXXXXXX
STORAGE_BUCKET=XXXXXXXXXXXXXXXXX
MESSAGING_SENDER_ID=XXXXXXXXXXXXXXXX
APP_ID=XXXXXXXXXXXXXXXXXXX

# Firebase emulator (optional)
FIREBASE_EMULATOR_FIRESTORE_HOST=XX.XX.XX.XX
FIREBASE_EMULATOR_FIRESTORE_PORT=XX

FIREBASE_EMULATOR_AUTH_HOST=XX.XX.XX.XX
FIREBASE_EMULATOR_AUTH_PORT=XX

# Google OAuth
GOOGLE_WEB_CLIENT_ID=XXXXXXXXXXX

```

Replace XXXX's with your own config keys.

#### Firebase emulator

For use firebase emulator, set environment to development as follow:

```
# Environment
ENVIRONMENT=development
```

Firebase emulator settings are optional; the default settings are the following:

```
# Environment
FIREBASE_EMULATOR_FIRESTORE_HOST=localhost
FIREBASE_EMULATOR_FIRESTORE_PORT=8080

FIREBASE_EMULATOR_AUTH_HOST=localhost
FIREBASE_EMULATOR_AUTH_PORT=9099
```

## Run app

` $ expo start --https`