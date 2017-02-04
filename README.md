# React Native Orientation Loading Overlay

> **tldr;** Orientation supported loading overlay for [React Native][react-native].

Default View

![Original Demo][original-demo]

Custom View

![Custom Demo][custom-demo]

## Install

```bash
npm install --save react-native-orientation-loading-overlay@latest
```

## Usage

* visible: true or false
* color: color string
* indicatorSize: large, normal, or small
* messageFontSize: number
* message: string content

For example ([Runnable Example][runnable-example-1]):

```js
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

export default class original extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <OrientationLoadingOverlay
          visible={true}
          color="white"
          indicatorSize="large"
          messageFontSize={24}
          message="Loading... 😀😀😀"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('original', () => original);
```

Or use your custom indicator ([Runnable Example][runnable-example-2]):

```js
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

export default class custom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <OrientationLoadingOverlay
          visible={true}
          >
          <View>
            <Image
              source={require('./assets/img/loading-cat.gif')}
              />
          </View>
        </OrientationLoadingOverlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('custom', () => custom);
```

## Contributors

Fukuball <fukuball@gmail.com>

## License

The MIT License (MIT)

Copyright (c) 2017 fukuball

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[react-native]: https://facebook.github.io/react-native
[original-demo]: https://cdn.rawgit.com/fukuball/react-native-orientation-loading-overlay/master/screenshot/original-iphone.gif
[custom-demo]: https://cdn.rawgit.com/fukuball/react-native-orientation-loading-overlay/master/screenshot/custom-iphone.gif
[runnable-example-1]: https://github.com/fukuball/react-native-orientation-loading-overlay/tree/master/example/original
[runnable-example-2]: https://github.com/fukuball/react-native-orientation-loading-overlay/tree/master/example/custom