import Foundation

@objc(Broadcast)
class Broadcast: NSObject {

   @objc(broadcast:)
   func broadcast(_ message: String) {
       
       let customNotificationName = Notification.Name("CustomNotification")
       
       NotificationCenter.default.addObserver(self, selector: #selector(handleNotif(_:)), name: customNotificationName, object: nil)
       
       
       NotificationCenter.default.post(name: Notification.Name(message), object: nil)
  }
    
    @objc func handleNotif(_ notif: Notification){
        print("gotttemmmm...")
        print(notif.name)
    }
}
