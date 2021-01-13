const readline = require('readline')
const fs = require('fs')
const dns = require('dns')

const print = (...args) => console.log(...args)

if (process.argv.length <= 2) {
  print('Usage: npm run init <domain>')
  process.exit()
}

const domain = process.argv[2]

const createdInterface = readline.createInterface({
  input: fs.createReadStream('wordlist.txt')
})

const lookupDns = (host) => {
  const url = `${host}.${domain}`
  dns.lookup(url, (_err, address) => {
    if (address) {
      print(`${url} | ${address}`)
    }
  })
}

createdInterface.on('line', lookupDns)
