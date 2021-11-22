const dec = (key, text) => Buffer.from(text, 'base64').toString('ascii').match(/.{1,2}/g).map((h) => parseInt(h, 16)).map((cok) => key.split('').map((c) => c.charCodeAt(0)).reduce((a, b) => a ^ b, cok)).map((q) => String.fromCharCode(q)).join('')

// const a = dec('yourPrivatekey', 'encryptedString')
// console.log(a)
