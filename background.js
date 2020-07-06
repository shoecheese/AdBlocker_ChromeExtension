chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: ["*://*.zedo.com/*", "*://*.doubleclick.net/*", "*://*.partner.googleadservices.com/*", "*://*.seveningusha.club/*", "*://*.exponential.com/*", "*://*.taboola.com/*", "*://*.outbrain.com/*", "*://*.neobux.com/*"]},
    ["blocking"]
)