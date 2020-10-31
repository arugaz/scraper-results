# Scraper Results

Results from API
<div>
using node-fetch
fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/file')
.then(res => res.text())
.then(body => {
let splitnix = body.split('\n')
let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
console.log(randomnix)
})
</div>
