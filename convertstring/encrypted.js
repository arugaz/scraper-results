const enc = (key, text) => Buffer.from(text.split('').map((x) => x.split('').map((y) => y.charCodeAt(0))).map((o) => key.split('').map((e) => e.charCodeAt(0)).reduce((a, b) => a ^ b, o)).map((n) => ("0" + Number(n).toString(16)).substr(-2)).join('')).toString('base64')

// const a = enc('yourPrivatekey', 'This is string')
// console.log(a)
