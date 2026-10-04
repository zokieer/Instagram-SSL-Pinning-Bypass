# Instagram SSL Pinning Bypass

## NO ROOT: Patched-APK Method
Coming soon!

## ROOT: Run using Frida

This method requires frida-tools and frida-server running in the device
```
frida -U -l bypass.js -p <PID>
```

## Capturing http traffic

I'm currently using [Requable](https://reqable.com/). Now you should be able to see the network traffic.

Inspired by Eltion!