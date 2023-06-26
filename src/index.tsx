import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-broadcast' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Broadcast = NativeModules.Broadcast
  ? NativeModules.Broadcast
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function broadcast(msg: string) {
  return Broadcast.broadcast(msg);
}
