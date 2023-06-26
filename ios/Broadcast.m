#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Broadcast, NSObject)

RCT_EXTERN_METHOD(broadcast: (NSString *)message)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
