# ExTicket_ReactNative

Application booking ticket mobile App

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Server Setup](#server-setup)
  - [Client Setup](#client-setup)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Author](#author)
- [License](#license)

## Getting Started

Before starting to install the project, there're some things that need to be done first.

### Prerequisites

Make sure all of these are properly installed in your system.

| Application  | Download                                                                            |
| ------------ | ----------------------------------------------------------------------------------- |
| Git          | [Windows](https://gitforwindows.org/) / [Linux](https://git-scm.com/download/linux) |
| Node.js      | [Link](https://nodejs.org/en/download/)                                             |
| React Native | [Link](https://facebook.github.io/react-native/docs/getting-started)                |
| MySQL        | [Link](https://www.mysql.com/downloads/)                                            |

### Installation

First, clone this repository into your system.

```
git clone https://github.com/Zaviore/ExTicket.git
```

Then, install all the packages that described in `package.json` of both `client` and `server` directories.

```
npm install
```

### Client Setup

For the client setup, if you are using physical device to run the app, make sure your ADB drivers already installed or you can use Android Emulator from AVD (Android Virtual Device) Manager of Android Studio (_This part should be done while installing the React Native framework_)

Before running the application, we need to configure an environtment variable for the client, let's create `.env` file in client's root project, open and edit it, then input the code below.

```
BASE_URL=http://192.168.1.1:3000/api/v2
```

Note that the variable `BASE_URL` above is your server network Internet Protocol. If you are using physical device, make sure your physical device and server computer have a same network connection.

Then, install and run the application.


And for Android :

`npm run android`

Wait till the application is installed and run into your device. Now, you can explore coHyPe and its features. Enjoy!

## Screenshots

<img src="Capture2.JPG" />

## Built With

- [React Native](https://facebook.github.io/react-native/) - Front-end
- [Express JS](https://expressjs.com) - Back-end
- [MySQL](https://www.mysql.com) - Database

## Author

**Zamhadi** - [Zaviore](https://github.com/Zaviore)

## License

This project is licensed under the GNU General Public v3.0 License - see the [LICENSE](LICENSE) file for details
