package com.broadcast

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import android.content.Intent;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;

class BroadcastModule(val reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  fun broadcast(message: String) {
    val manager = LocalBroadcastManager.getInstance(reactContext)
    manager.sendBroadcast(Intent(message))
  }

  companion object {
    const val NAME = "Broadcast"
  }
}
