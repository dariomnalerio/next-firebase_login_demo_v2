import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Use the firebaseConfig object as needed

const initFirebase = () => {
  if (!getApps().length) {
    // initialize firebase app with our configuration if it's not already initialized
    const app = initializeApp(firebaseConfig);
    // create auth for authentication
    const auth = getAuth(app);

    // create analytics and performance if configured on firebase project
    if (typeof window !== "undefined") {
      if ("measurementId" in firebaseConfig) {
        const analytics = getAnalytics(app);
        const performance = getPerformance(app);
      }
    }
  }
};

export default initFirebase;
