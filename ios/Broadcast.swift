import Foundation

@objc(Broadcast)
class Broadcast: NSObject {

   @objc(broadcast:)
   func broadcast(_ message: String) {
      NotificationCenter.default.post(name: Notification.Name(message), object: nil)
  }
}
