/* # Exclusively from Fasil-vkn
# script original owner gos to  
# Copyright 2021 All rights reserved 
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command enthelum perupara nenba "

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'brand ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=apivinz&text=ZEKS%20API&type=1=${encodeURIComponent(match[1])}&text2=Paathu`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by Paathu ' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'brand ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=apivinz&text=ZEKS%20API&type=1=${encodeURIComponent(match[1])}&text2=Paathu`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by Paathu bot' })

    }));
    
}
