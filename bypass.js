//https://github.com/zokieer/Instagram-SSL-Pinning-Bypass
'use strict';

function log(msg) {
    console.log(msg);
    try {
        Java.perform(function () {
            Java.use("android.util.Log").v("IGSSL", msg);
        });
    } catch (e) {}
}

function tryHook() {
    try {
        let hooked = false;
        Java.perform(function () {
            try {
                const CertificateVerifier = Java.use(
                    "com.facebook.mobilenetwork.internal.certificateverifier.CertificateVerifier"
                );

                CertificateVerifier.verify.overload(
                    '[Ljava.security.cert.X509Certificate;',
                    'java.lang.String',
                    'boolean'
                ).implementation = function (certs, hostname, z) {
                    log("[Bypass] CertificateVerifier.verify.....");                
                };
                log("[*] CertificateVerifier.verify bypass success");
                hooked = true;
            } catch (e) {
            }
        });
        return hooked;
    } catch (e) {
        return false;
    }
}

log("[*] Script started, waiting for CertificateVerifier ...");

if (!tryHook()) {
    const timer = setInterval(function () {
        if (tryHook()) {
            clearInterval(timer);
        }
    }, 300);
}