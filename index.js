const fs = require('fs')
const { lookup } = require('dns')
const { promisify } = require('util')

const print = (...args) => console.log(...args)

const checkArgs = (args) => args.length > 2

const asyncLookup = promisify(lookup)

const readWords = async (customWordlist = null) => {
  return fs
    .readFileSync(customWordlist || 'wordlist.txt')
    .toString('utf-8')
    .replace(/\r\n/g, '\n').split('\n')
}

const lookupDns = async (url) => {
  const result = await asyncLookup(url)
  return result.address ? result.address : null
}

(async () => {
  const [...args] = process.argv

  if (!checkArgs(args)) {
    print('Usage: npm run init <domain>')
    process.exit()
  }

  const domain = args[2]
  const customWordlist = args[3]

  const words = await readWords(customWordlist)

  const getHostsDns = () => words.map(async host => {
    const url = `${host}.${domain}`

    try {
      const dns = await lookupDns(url)

      if (dns) {
        print(`${url} | ${dns}`)
      }
    } catch (error) {}
  })

  await Promise.all(getHostsDns())
})()
