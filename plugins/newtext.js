/* Codded by Ameer Suhail
Github: https://github.com/ameer-kallumthodi/newtext
This code works with unlimited and completely free an API scraper.
Don't use it for illegal purposes.
*/

const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''
if (Config.LANG == 'TR') desc_msg = 'Sınırsız erişime sahip textmaker araçlarını gösterir.'
if (Config.LANG == 'EN') desc_msg = 'Shows text to image tools with unlimited access.'
if (Config.LANG == 'RU') desc_msg = 'Показывает инструменты для создания текстов с неограниченным доступом.'
if (Config.LANG == 'AZ') desc_msg = 'Sınırsız girişi olan textmaker alətləri göstərir.'
if (Config.LANG == 'PT') desc_msg = 'Mostra ferramentas textmaker com acesso ilimitado.'
if (Config.LANG == 'ID') desc_msg = 'Menampilkan alat pembuat teks dengan akses tak terbatas.'
if (Config.LANG == 'ML') desc_msg = 'പരിധിയില്ലാത്ത ആക്സസ് ഉള്ള ടെക്സ്റ്റ് മേക്കർ ഉപകരണങ്ങൾ കാണിക്കുന്നു.'
if (Config.LANG == 'HI') desc_msg = 'असीमित एक्सेस के साथ टेक्स्टमेकर टूल दिखाता है।'
if (Config.LANG == 'ES') desc_msg = 'Muestra herramientas de creación de textos con acceso ilimitado.'
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'txtit$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        t1 = 'Şed Temalı Logo Yapar.' // https://en.ephoto360.com/write-text-on-wet-glass-online-589.html
        t2 = 'wings İçeren Logo Yapar.' // https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html
        t3 = 'Broke İçeren Logo Yapar.' // https://en.ephoto360.com/rain-glass-door-gifs-photo-frames-431.html
        t4 = '2. Pentakill Efekti İçeren Logo Yapar.' // https://en.ephoto360.com/create-a-lol-pentakill-231.html
        t5 = 'Team Logo Yapar.' // https://en.ephoto360.com/make-team-logo-online-free-432.html  
    }
    else {
        t1 = 'Makes Sed Logo.' // https://en.ephoto360.com/write-text-on-wet-glass-online-589.html
        t2 = 'Makes Logo With Wings Icon.' // https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html
        t3 = 'Makes Broken Logo Effect.' // https://en.ephoto360.com/rain-glass-door-gifs-photo-frames-431.html
        t4 = 'Makes Pentakill Logo Effect.' // https://en.ephoto360.com/create-a-lol-pentakill-231.html
        t5 = 'Makes Team Logo.' // https://en.ephoto360.com/make-team-logo-online-free-432.html
        }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        usage_cmd = '⌨️ *Örnek:* _'
        command_cmd = '💻 *Komut:* '
        desc_cmd = 'ℹ️ *Açıklama:* _'
    } else { 
        usage_cmd = '*🔖 Example:* '
        command_cmd = '❣️ *Command:* '
        desc_cmd = '💝 *Description:* '
    }
    const msg = command_cmd + '```.sed``` \n' + t1 + '_\n' + usage_cmd + '.sed pikachu\n\n' +
        command_cmd + '```.wings``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '.wings pikachu\n\n' +
        command_cmd + '```.broken```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '.broken pikachu\n\n' +
        command_cmd + '```.pentakill``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '.pentakill pikachu\n\n' +
        command_cmd + '```.teamlogo``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '.teamlogo pikachu'
    await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));
Asena.addCommand({pattern: 'sed ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    en.ephoto360("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Pikachu/sed.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Pikachu/sed.jpg'), MessageType.image, { caption: Config.AFN })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'wings ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    en.ephoto360("https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Pikachu/wings.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Pikachu/wings.jpg'), MessageType.image, { caption: Config.AFN })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'broken ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    en.ephoto360("https://en.ephoto360.com/rain-glass-door-gifs-photo-frames-431.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Pikachu/broken.gif', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Pikachu/broken.gif'), MessageType.image, { caption: Config.AFN })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'pentakill ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    en.ephoto360("https://en.ephoto360.com/create-a-lol-pentakill-231.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Pikachu/pentakill.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Pikachu/pentakill.jpg'), MessageType.image, { caption: Config.AFN })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'teamlogo ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    en.ephoto360("https://en.ephoto360.com/make-team-logo-online-free-432.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Pikachu/teamlogo.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Pikachu/teamlogo.jpg'), MessageType.image, { caption: Config.AFN })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
