import * as React from "react";
import { useEffect } from "react";
import * as Notifications from 'expo-notifications';
import { doc, setDoc } from "firebase/firestore";

import { registerForPushNotificationsAsync } from "../notification.js";
import { db } from "../config/firebase/";


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


const withPushNotifications = (Component) => (props) => {
 
  useEffect(() => {
    registerPushNotificationToken()
  }, []);

  return <Component {...props}/>
}


  async function registerPushNotificationToken() {
    const token = await registerForPushNotificationsAsync();
    if (token) {
      const ref = doc(db, "notification-tokens", token);
      try {
        await setDoc(ref, {token});
      } catch(e) {
        console.log(e.message);
      }
    }
  }


export default withPushNotifications;

