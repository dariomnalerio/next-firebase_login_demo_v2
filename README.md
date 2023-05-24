
# Next-firebase login demo v2

Simple web application made with Next, Express, Prisma, Postgre, Tailwind and Firebase authentication.

With the knowledge obtained in the [first version](https://github.com/dariomnalerio/next-firebase_login_demo) of the app, I wanted to create a better organized and efficient version.

The aim was to learn about how to set up user  authentication with these technologies to use in future  projects.

## Features

- Sign up
- Log in
- Log out
- Edit user info (name, age, email, password)

## Firebase setup and env variables

You must create a firebase project in order to run this program

`firebaseConfig.tsx` file must be placed in ./client/firebase/

```typescript
import  { initializeApp, getApps }  from  "firebase/app";
import  { getAuth }  from  "firebase/auth";
import  { getAnalytics }  from  "firebase/analytics";
import  { getPerformance }  from  "firebase/performance";

const  firebaseConfig  =  {
apiKey:  process.env.NEXT_PUBLIC_API_KEY,
authDomain:  process.env.NEXT_PUBLIC_AUTH_DOMAIN,
projectId:  process.env.NEXT_PUBLIC_PROJECT_ID,
storageBucket:  process.env.NEXT_PUBLIC_STORAGE_BUCKET,
messagingSenderId:  process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
appId:  process.env.NEXT_PUBLIC_APP_ID,
measurementId:  process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Use the firebaseConfig object as needed
const  initFirebase  =  ()  =>  {

if (!getApps().length) {
	// initialize firebase app with our configuration if it's not already initialized
	const  app  =  initializeApp(firebaseConfig);
	// create auth for authentication
	const  auth  =  getAuth(app);

	// create analytics and performance if configured on firebase project
	if (typeof  window  !==  "undefined") {
		if ("measurementId"  in  firebaseConfig) {
			const  analytics  =  getAnalytics(app);
			const  performance  =  getPerformance(app);
			}
		}
	}
};

  

export  default  initFirebase;
```

## Run locally

Clone the project

    https://github.com/dariomnalerio/next-firebase_login_demo_v2

Install dependencies for both the client and the server and start them

    cd client
    npm i
    npm run dev

    cd server
    npm i
    nodemon /server.ts


### Authors
- [@dariomnalerio](https://github.com/dariomnalerio)

 