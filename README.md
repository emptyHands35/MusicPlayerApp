# MusicPlayerApp

For building this app on your local machine, make sure you have environment setup with React Native ClI & MacOS
Follow: https://reactnative.dev/docs/environment-setup


--------------------------------------------------------------------------------BUILD--------------------------------------------------------------------------------

If you already have your computer setup please follow below steps to BUILD the app

--ANDROID--
1. Clone this project to PC using git clone command
2. Install packages / node-modules by running yarn install / npm install
3. Finally run, react-native run-android from your project directory using terminal to build the app in your local android simulator

--iOS--
1. Clone this project to PC using git clone command
2. Install packages / node-modules by running yarn install / npm install
3. Install pods using pod install command from ios folder
4. Finally run, react-native run-ios from your project directory using terminal to build the app in your local ios simulator






--------------------------------------------------------------------------------DEPLOY--------------------------------------------------------------------------------

--ANDROID--
1. Make sure you've setup Android development environment i.e., Android Studio, JDK and setting up environment variables
2. Clone this project to your local machine
3. Generating a signing key, you can use keytool utility that comes with the JDK to generate a signing key or use Android Studio's build-in tool
4. You will need to configure app to relaease mode, this can be done by updating the "android/app/build.gradle" file to set the release version code and version name, and updating the "android/app/src/main/res/values/strings.xml" file to set the app name.
5. Build the app, using assembleRelease to generate APK file which you can test on a real device and finally run bundleRelease from android directory which will generate an aab file
6. Test the app before deploying to google play store
7. Submit the signed aab file to google developers console and follow the instructions there for deployment.

--iOS--
1. Setup environment for ios developement i.e., XCode, IDE, Cocoapods
2. Clone this project to your local machine
3. Configure to release mode, this includes updating Info.plist file to set the app name, version and bundle identifier.
4. Once app is configured, you can build the app using Xcode, open the iOS folder in Xcode and build the app. It will generate an .ipa file
5. Test the app before deploying to app store
6. Subimt the .ipa file to app store using App Store Connect and follow the instructions to complete the deployment process. 
