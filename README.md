# Scraper Results

Results from API\n
using node-fetch\n
fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/file')\n
.then(res => res.text())\n
.then(body => {\n
let splitnix = body.split('\n')\n
let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]\n
console.log(randomnix)\n
})\n
