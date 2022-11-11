import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
  import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let emot = `${pickRandom(['⎔', '◈▻', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚝', '⚚', '♪'])}`
let ucpn = `${ucapan()}`

const defaultMenu = {
  before: `${global.readMore}
`.trimStart(),
header: `${htki} %category ${htka}`,
body: `│ ${emot}  %cmd %isPremium %islimit`,
footer: `⟣─═══┈┈┈═══─⟢\n`,
after: `${botdate}`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let tags
let rndom = `${pickRandom(['defaultMenu', 'defmenu1'])}`
let teks = `${args[0]}`.toLowerCase()
conn.reply(m.chat, `Sedang Memuat...`, m)
let arrayMenu = ['all', 'anime', 'update', 'logomaker', 'berita', 'edukasi', 'news', 'random', 'game', 'xp', 'menfess', 'islami', 'menbalas', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'virus', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database","quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
if (!arrayMenu.includes(teks)) teks = '404'
if (teks == 'all') tags = {
'main': ' 𝗠𝗔𝗜𝗡',
'game': ' 𝗚𝗔𝗠𝗘',
'rpg': ' 𝗥𝗣𝗚 𝗚𝗔𝗠𝗘𝗦',
'xp': ' 𝗘𝗫𝗣 & 𝗟𝗜𝗠𝗜𝗧',
'sticker': ' 𝗦𝗧𝗜𝗖𝗞𝗘𝗥',
'kerang': ' 𝗞𝗘𝗥𝗔𝗡𝗚 𝗔𝗝𝗔𝗜𝗕',
'quotes': ' 𝗤𝗨𝗢𝗧𝗘𝗦',
'fun': ' 𝗙𝗨𝗡',
'islami': ' 𝗠𝗨𝗦𝗟𝗜𝗠',
'anime': ' 𝗔𝗡𝗜𝗠𝗘',
'admin': ' 𝗔𝗗𝗠𝗜𝗡',
'group': ' 𝗚𝗥𝗢𝗨𝗣',
'menfess': ' 𝗠𝗘𝗡𝗙𝗘𝗦𝗦',
'vote': ' 𝗩𝗢𝗧𝗜𝗡𝗚',
'absen': ' 𝗔𝗕𝗦𝗘𝗡',
'virus': '𝗩𝗜𝗥𝗨𝗦',
'islami': '𝗜𝗦𝗟𝗔𝗠𝗜',
'premium': ' 𝗣𝗥𝗘𝗠𝗜𝗨𝗠',
'anonymous': ' 𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗖𝗛𝗔𝗧',
'internet': ' 𝗜𝗡𝗧𝗘𝗥𝗡𝗘𝗧',
'downloader': ' 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥',
'tools': ' 𝗧𝗢𝗢𝗟𝗦',
'nulis': ' 𝗠𝗔𝗚𝗘𝗥 𝗡𝗨𝗟𝗜𝗦',
'audio': ' 𝗔𝗨𝗗𝗜𝗢',
'logomaker': ' 𝗟𝗢𝗚𝗢 𝗠𝗔𝗞𝗘𝗥',
'berita': ' 𝗕𝗘𝗥𝗜𝗧𝗔',
'database': ' 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘',
'quran': ' 𝗔𝗟-𝗤𝗨𝗥\'𝗔𝗡',
'owner': ' 𝗢𝗪𝗡𝗘𝗥',
'info': ' 𝗜𝗡𝗙𝗢',
'': ' 𝗡𝗢 𝗖𝗔𝗧𝗔𝗚𝗢𝗥𝗬',
}
if (teks == 'game') tags = {
'game': 'Game'
}
if (teks == 'anime') tags = {
'anime': 'Anime'
}
if (teks == 'virus') tags = {
'virus': 'Virus'
}
if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'rpg') tags = {
'rpg': 'Rpg'
}
if (teks == 'edukasi') tags = {
'edukasi': 'Edukasi'
}
if (teks == 'news') tags = {
'news': 'News'
}
if (teks == 'random') tags = {
'random': 'Random'
}
if (teks == 'logomaker') tags = {
'logomaker': 'Logomaker'
}
if (teks == 'xp') tags = {
'xp': 'Exp & Limit'
}
if (teks == 'stiker') tags = {
'sticker': 'Stiker'
}
if (teks == 'kerangajaib') tags = {
'kerang': 'Kerang Ajaib'
  }
if (teks == 'menfess') tags = {
    'menfess': 'Menfess'
}
if (teks == 'islami') tags = {
'islami': 'Islami'
}
if (teks == 'quotes') tags = {
'quotes': 'Quotes'
}
if (teks == 'berita') tags = {
'berita': 'Berita'
}
if (teks == 'admin') tags = {
'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
'group': 'Grup'
}
if (teks == 'group') tags = {
'group': 'Group'
}
if (teks == 'premium') tags = {
'premium': 'Premium'
}
if (teks == 'internet') tags = {
'internet': 'Internet'
}
if (teks == 'anonymous') tags = {
'anonymous': 'Anonymous Chat'
}
if (teks == 'nulis') tags = {
'nulis': 'Nulis',
}
if (teks == 'downloader') tags = {
'downloader': 'Downloader'
}
if (teks == 'tools') tags = {
'tools': 'Tools'
}
if (teks == 'fun') tags = {
'fun': 'Fun'
}
if (teks == 'database') tags = {
'database': 'Database'
}
if (teks == 'vote') tags = {
'vote': 'Voting',
}
if (teks == 'absen') tags = {
'absen': 'Absen'
}
if (teks == 'quran') tags = {
'quran': 'Al-Qur\'an',
'islamic': 'Islamic'
}
if (teks == 'audio') tags = {
'audio': 'Audio'
}
if (teks == 'jadibot') tags = {
'jadibot': 'Jadi Bot'
}
if (teks == 'info') tags = {
'info': 'Info'
}
if (teks == 'owner') tags = {
'owner': 'Owner',
'host': 'Host',
'advanced': 'Advanced'
}
 if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'nocategory') tags = {
'': 'No Category'
}
try {
// DEFAULT MENU
let dash = global.dashmenu
let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenuf
let m4 = global.dmenub2

// COMMAND MENU
let cc = global.cmenut
let c1 = global.cmenuh
let c2 = global.cmenub
let c3 = global.cmenuf
let c4 = global.cmenua

// LOGO L P
let lprem = global.lopr
let llim = global.lolm
let tag = `@${m.sender.split('@')[0]}`

let _mpt
if (process.send) {
process.send('uptime')
_mpt = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let mpt = clockString(_mpt)
const sections = [{
title: `${htki} 𝐌𝐄𝐍𝐔 ${htka}`,
rows: [
{title: `${emot} Rpg`, rowId: ".? rpg", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀᴍ Mᴇɴᴜ Rᴘɢ"},
{title: `${emot} Exp`, rowId: ".? xp", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Exᴘ"},
{title: `${emot} Game`, rowId: ".? game", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Gᴇᴍᴇ"},
{title: `${emot} Fun`, rowId: ".? fun", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Fᴜɴ"},
{title: `${emot} Kerang`, rowId: ".? kerangajaib", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Kᴇʀᴀɴɢ"},
{title: `${emot} Quotes`, rowId: ".? quotes", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Qᴜᴏᴛᴇs"},
{title: `${emot} Anime`, rowId: ".? anime", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Aɴɪᴍᴇ"},
{title: `${emot} Nsfw`, rowId: ".? nsfw", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Nsғᴡ"},
{title: `${emot} Premium`, rowId: ".? premium", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Pʀᴇᴍɪᴜᴍ"},
{title: `${emot} Anonymous Chats`, rowId: ".? anonymous", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Aɴᴏɴʏᴍᴏᴜs Cʜᴀᴛs"},
{title: `${emot} Al-Quran`, rowId: ".? quran", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Aʟ-Qᴜʀᴀɴ"},
{title: `${emot} Internet`, rowId: ".? internet", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Iɴᴛᴇʀɴᴇᴛ"},
{title: `${emot} Berita`, rowId: ".? berita", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Bᴇʀɪᴛᴀ"},
{title: `${emot} Downloader`, rowId: ".? downloader", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Dᴏᴡɴʟᴏᴀᴅᴇʀ"},
{title: `${emot} Stikers`, rowId: ".? stiker", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Sᴛɪᴋᴇʀ"},
{title: `${emot} Nulis`, rowId: ".? nulis", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Nᴜʟɪs"},
{title: `${emot} Audio`, rowId: ".? audio", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Aᴜᴅɪᴏ"},
{title: `${emot} Sound Menu`, rowId: ".soundmenu", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Sᴏᴜɴᴅ"},
{title: `${emot} Group`, rowId: ".? group", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Gʀᴏᴜᴘ"},
{title: `${emot} Admin`, rowId: ".? admin", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Aᴅᴍɪɴ"},
{title: `${emot} Database`, rowId: ".? database", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Dᴀᴛᴀʙᴀsᴇ"},
{title: `${emot} Tools`, rowId: ".? tools", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Tᴏᴏʟs"},
{title: `${emot} Info`, rowId: ".? info", description: "Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Iɴғᴏ"},
]
},{
title: `${htki} 𝐈𝐍𝐅𝐎 ${htka}`,
rows: [
{title: `${emot} OWNER`, rowId: ".? owner", description: `ᴏᴡɴᴇʀ ${namebot} 🤗`},
{title: `${emot} SCRIPT`, rowId: ".sc", },
{title: `${emot} SEWA BOT `, rowId: ".sewa", description: "Mau Nyewa?"},
{title: `${emot} BUY PREMIUM`, rowId: ".premium", },
{title: `${emot} DONASI`, rowId: ".donasi", },
{title: `${emot} RULES`, rowId: ".rules", },
] },
]
let psan = 'bagaimana kabarmu?'
let ucpn2 = `${ucapan()}`
let usrs = db.data.users[m.sender]
let ftoko2 = {
       key: {
                   participant : '0@s.whatsapp.net'},
               message: {
                   "productMessage": {
                       "product": {
                           "productImage":{
                               "mimetype": "image/jpeg",
                               "jpegThumbnail": fs.readFileSync('./thumbnail.jpg') //Gambarnye
                           },
                           "title": '𝐕𝐚𝐦𝐬𝐞𝐬𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥', //Kasih namalu 
                           "description": bottime, 
                           "currencyCode": "IDR",
                           "priceAmount1000": fsizedoc,
                           "retailerId": "Ghost",
                           "productImageCount": 1
                       },
                           "businessOwnerJid": `0@s.whatsapp.net`
               }
           }
       }
let capp = `
${ucpn2} ${await conn.getName(m.sender)}

 ❍⃕   𝐈 𝐍 𝐅 𝐎 𝐔 𝐒 𝐄 𝐑
 
 ⬡ User :  ${await conn.getName(m.sender)}
 ⬡ Premium : ${usrs.premiumTime > 1 ? 'Yes': 'No'}
 ⬡ Name : ${await conn.getName(m.sender)}
 ⬡ Status : ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
 
 ❍⃕   𝐓 𝐎 𝐃 𝐀 𝐘 
 
 ⬡ Wib : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
 ⬡ Wita : ${moment.tz('Asia/Makassar').format('HH:mm:ss')}
 ⬡ Wit : ${moment.tz('Asia/Jayapura').format('HH:mm:ss')}
 ⬡ Date : ${new Date().toLocaleDateString()}
 
 ❍⃕   𝐃 𝐀 𝐓 𝐀 𝐁 𝐀 𝐒 𝐄  
 
 ⬡ Uptime : ${mpt}
 ⬡ Database :  ${Object.values(global.db.data.users).filter(user => user.registered == true).length}
 ⬡ User : ${Object.keys(global.db.data.users).length}
 ⬡ Os Platform : ${os.platform()}
`
const listMessage = {
text: capp,
footer: `${botdate}`,
mentions: await conn.parseMention(capp),
buttonText: `Click Here!`, 
sections
}
if (teks == '404') { 
return await conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(capp), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let premium = global.db.data.users[m.sender].premiumTime
let prems = `${premium > 0 ? 'Premium': 'Free'}`
let platform = os.platform()
      let vn = './media/yntkts'
//-----------TIME---------
let ucpn = `${ucapan()}`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let d = new Date(new Date + 3600000)
let locale = 'id'
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset0 is0.00
// Offset420 is7.00
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
//---------------------

let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
prefix: 'customPrefix' in plugin,
limit: plugin.limit,
premium: plugin.premium,
enabled: !plugin.disabled,
}
})
let groups = {}
for (let tag in tags) {
groups[tag] = []
for (let plugin of help)
if (plugin.tags && plugin.tags.includes(tag))
if (plugin.help) groups[tag].push(plugin)
}
conn.menu = conn.menu ? conn.menu : {}
let before = conn.menu.before || defaultMenu.before
let header = conn.menu.header || defaultMenu.header
let body = conn.menu.body || defaultMenu.body
let footer = conn.menu.footer || defaultMenu.footer
let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
let _text = [
before,
...Object.keys(tags).map(tag => {
return header.replace(/%category/g, tags[tag]) + '\n' + [
...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
return menu.help.map(help => {
return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
.replace(/%islimit/g, menu.limit ? llim : '')
.replace(/%isPremium/g, menu.premium ? lprem : '')
.trim()
}).join('\n')
}),
footer
].join('\n')
}),
after
].join('\n')
let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

//----------------- FAKE
let ftoko = {
key: {
fromMe: false,
participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
remoteJid: 'status@broadcast',
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
},
"title": `${ucapan()}`,
"description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
"currencyCode": "US",
"priceAmount1000": "100",
"retailerId": wm,
"productImageCount": 999
},
"businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
}
}
}
let fgif = {
key: {
remoteJid: 'status@broadcast',
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Nekohime`,
'duration': '99999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': thumb
 }
}
 }
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')

const ftrol = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: `Hai Kak ${name}!`, 
    
    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }
    
    const fload = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: '[❗] Memuat Menu ' + teks + '...\n Sabar Ya Kak ^ω^', 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Loading')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }

//------------------< MENU >----------------

//------------------ SIMPLE
/*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
externalAdReply: {
title: `${htjava} ${namebot}`,
body: titlebot,
description: titlebot,
mediaType: 2,
thumbnail: await(await fetch(thumb2)).buffer(),
 mediaUrl: sig
}
 }
}*/
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
    let cap1 = `${ucpn}

     「 ${name} 」

❍⃕  *I N F O C M D*

✗ *Ⓟ* = Premium
✗ *Ⓛ* = Limit`
    let fliveLoc22 = {
            key: {
            participant : '0@s.whatsapp.net'},
            message: { "liveLocationMessage": { "title": gcname,"h": bottime, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
    
//------------------ DOCUMENT
await conn.send3ButtonImg(m.chat, await (await fetch('https://telegra.ph/file/59240299fd00d5477fdc5.jpg')).buffer(), cap1, text.trim(), 'OWNER', '.owner', 'SEWA BOT', '.sewa', 'DONASI', '.donasi',  m, {
      quoted: fliveLoc,  
      contextInfo: { //forwardingScore: 99999, isForwarded: true,  
          externalAdReply: {  showAdAttribution: false,       mediaUrl: sig,
              title: gcname,
              body: bottime,
              description: sig,
              mediaType: 1,  
            thumbnail: await (await fetch('https://telegra.ph/file/59240299fd00d5477fdc5.jpg')).buffer(),
           sourceUrl: sig
          }  
       }  
      })
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}

    
//-------DOC TEMPLATE
    /*const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(),
            fileName: '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: tess,
            footer: titlebot + '\n⚡ Supported By Fangz TEAM',
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://s.id/Fangzganz'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Group Official',
                        url: sig
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Owner',
                        id: '.owner'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Speed',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: '.donasi'
                    }
                },
            ]
        }
        await conn.sendMessage(m.chat, message,)
//------------------- BUTTON VID
/*conn.sendButton(m.chat, text, wm, 'https://youtu.be/3ONnszQtwz0', [['Ping', '.speed'],['Owner', '.owner'],['Donasi', '.donasi']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})*/

handler.help = ['listmenu', '?'] 
handler.tags = ['main']
handler.command = /^(tesm|listmenu|\?)$/i

handler.register = false
handler.exp = 3
 
export default handler

//----------- FUNCTION -------

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [ye, ' *Years 🗓️*\n',mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
if (time >= 4) {
res = "Selamat Pagi"
}
if (time >= 10) {
res = "Selamat Siang️"
}
if (time >= 15) {
res = "Selamat Sore"
}
if (time >= 18) {
res = " Selamat Malam"
}
return res
}
