# **Event Buddy**

## <ins>Summary</ins>

This project is part of my portfolio whilst enrolled on the NorthCoders Software Engineering bootcamp.
It was the final phase of the bootcamp. I was placed in a group with 3 other students and the goal was to build a full stack app using tech not taught on the bootcamp.

## <ins>Technologies Used</ins>

Our team decided to build this as a mobile app with [React Native](https://reactnative.dev/) using [AWS Lambda](https://aws.amazon.com/lambda/) & [AWS DynamoDB](https://aws.amazon.com/dynamodb/) for the back end. Styling was done with React Native.

## <ins>App Summary & User Journey</ins>

Event Buddy is an app for people who like to go to festivals/concerts/gigs and would like to find someone to go with.

You have your own custom profile that showcases your interests to other app users and connect with those users through similar interests.

You can search for events (this uses the [Ticketmaster Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)) by location or name. For each event, you can:

- mark yourself as going
- see the message board
- reply to any existing message threads
- submit new message threads
- see who has already marked themselves as going. From within there, you can view the profile of those users as well as connect with them where they will be added to the buddies section of the app.

## <ins>How to use</ins>

**Please note: The app is still a W.I.P and not hosted anywhere yet or completely optimized for iOS but you can follow this guide to view the app on your smartphone or an emulator. I would recommend using an Android smartphone or the Android emulator if possible so you can get the best possible experience of the app.**

- First, please fork and clone this repository.
- Open the repo in the code editor of your choice.
- Install the dependencies by running `npm i`

Smartphone Instructions:

- Install the [Expo Go](https://expo.dev/client) app from the app store / google play store. **Please make sure your mobile device and laptop are both connected to the same wifi network before proceeding to the next steps.**
- Once the repo has been forked, cloned and the dependencies have been installed, run `npm start` from the terminal and scan the QR code using the Expo Go app (Android) or the Camera app (iOS).
- You will now be able to see all the apps functionality via the Expo Go app.

Emulator Instructions:

Instead of using the Expo Go app & the QR code, you can install one or both of the following:

- The [Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- The [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)
- Once the repo has been forked, cloned and the dependencies have been installed, run `npm start` from the terminal and press a to open the app on the android emulator. You can also press shift+a to open the app on a specific android device providing it is setup in the Android Studio virtual device manager.
- Or press i to open the app on the i0S simulator. You can also press shift+i to open the app on a specific iOS device.
