# react-native-event-broadcast

Simply broadcast plain text messages from JS code to your native Android / iOS code.

This package uses `NotificationCenter` on iOS and `LocalBroadcastManager` on Android.

## Installation

```sh
npm install react-native-event-broadcast
```

## Usage

```js
import { broadcast } from 'react-native-event-broadcast';

// ...

broadcast('my_message')
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
