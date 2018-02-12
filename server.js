const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const request = require('request');
const Eris = require("eris");
const fs = require('fs');
const http2 = require('http2');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const Canvas = require('canvas')
const jimp = require('jimp')
const moment = require('moment')
client.on('ready', () => {
  client.user.setGame(`b*help I b*invite BearBot™`,`http://www.twitch.tv/v5bz`);
    client.user.setStatus('online');
});














client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === 'b*help') {    
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
.addField("**:globe_with_meridians:[BearBot 🐻]**","** **")
	  .addField("**:globe_with_meridians: الأوامر العامه**","** **")
      .addField("**b*ping :stopwatch:**","**لـ سرعة إتصالك**")
         .addField("**b*bot :bar_chart:**","**معلومات عن بوت **")
      .addField("**b*id :chart_with_downwards_trend:**","**عرض معلومات الحساب**")
      .addField("**b*avatar :camping:**","**لـ صور الشخص المختار**")
         .addField("**b*serveravatar :camping:**","**لـ صور سيرفر المختار**")
      .addField("**b*roll :1234:**","**لـ القرعه من 1 - 100**")
      .addField("**b*server :recycle:**","**لـ معلومات السيرفر**")
      .addField("**b*roles :medal: **","**اظهار رتب السيرفر**")
      .addField("**b*say :arrows_counterclockwise:**","**لـ يكرر الكلام اللى تقوله**")
      .addField("**b*invite :arrows_counterclockwise:**","**لي اضافة البوت**")
      .addField("**b*support :arrows_counterclockwise:**","**سيرفر البوت**")
         .addField("**b*roominfo :speech_balloon:**","**معلومات عن الروم**")
         .addField("**b*rooms :speech_balloon:**","**يعرض الرومات**")
         .addField("**b*info :bar_chart:**","**يعرض لك صار للبوت كم شغال*")
         .addField("**b*dt :alarm_clock:**","** يعرض لك الوقت و تاريخ")
         .addField("**b*contant :wrench:**","**اذا لديك اقتراحات لي مبرمج البوت")
         .addField("**رابط :link:**","**يعطيك رابط سيرفر الي تكتب فيه الامر**")
         .addField("**b*اذكار **","**🕌اذكار**")
         .setColor('RANDOM')
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});





  

client.on('message' , message => {

  if (message.content === "b*support") {
      if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**'); return message.reply('**Check your DM | ✅**'); 
   const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL)     
.setDescription(" ***welcome To server support*** " + `
**
رابط السيرفر | https://discord.gg/Zt4wzsF
**
`);
message.author.sendEmbed(embed);
 }
});























client.on("message", message => {
    var prefix = "b*";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✅| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📝| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });
  







client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === 'b*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:crown: أوامر الأداره**","** **")
      .addField("**b*bc  :mega:**","**لـ البرودكاست**")
      .addField("**b*clear :octagonal_sign:**","**لـ مسح الشات**")
      .addField("**b*kick  :outbox_tray:**","**لـ طرد الأعضاء**")
      .addField("**b*ban  :no_entry:**","**لـ حظر الأعضاء**")
      .addField("**b*ct  :speech_balloon:**","**انشاء روم كتابي』**")
      .addField("**b*cv  :speech_balloon:**","**انشاء روم صوتي』**")
         .addField("**b*cvtime  :speech_balloon:**","** انشاء روم صوتي موقت』**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});












client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === 'b*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**Fun Commands:tada:**","**الالعاب**")
      .addField("**b*draw🖌️**","**رسم**")
         .addField("**b*خواطر  **","**:envelope_with_arrow:خواطر**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});



















client.on("message", (message) => {
  if (message.content.startsWith("b*cv")) {
              if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**ليس لديك صلاحيات** ");
          let args = message.content.split(" ").slice(1);
      message.guild.createChannel(args.join(' '), 'voice');
      message.channel.sendMessage('تـم إنـشاء روم صـوتي')
      
  }
  });












  client.on('message' , message => {
    if (message.content === "b*invite") {
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**');
     const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(client.user.avatarURL)     
  .setDescription("Add Bearbot 🐻" + `
  رابط البوت | https://goo.gl/1GNfwZ`);
  message.author.sendEmbed(embed);
   }
  });







client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === 'b*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** مبرمج البوت :wrench: **","**By Ømar_9897#5883**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});






client.on('message', message => {
    if (message.content === 'b*roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
if (message.content.startsWith('b*ping')) {
           if(!message.channel.guild) return;

if (message.author.bot) return;
    message.channel.sendMessage(`**Pong ! :** \`${Date.now() - message.createdTimestamp} ms\``);
    }

});







var prefix = "b*";
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
  }
});









client.on('message', message => {
    if (message.content === "b*server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','Type`f*roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });




















client.on('message', message => {
    if (message.content.startsWith("b*avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

















client.on("message", message => {
    var prefix = "b*"
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 808080,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Bear Bot™"
        }
      }}).then(msg => {msg.delete(3000)});
                          }



     
});


     

client.on('ready',  () => {
  console.log('By Ømar_9897#5883');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** يمنع نشر الروابط ! **`)
    }
});
client.on('message', message => {
     if (message.content === "servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
    if (message.content === "b*bot") {
    if(!message.channel.guild) return;
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed  = new Discord.RichEmbed()
    .setAuthor("[ Bearclient ]", " http://www.logoground.com/uploads/201792132017-02-144450652Polar%20Bear%20Logo.jpg")
    .addField("**[ Prefix ] :**","**[ b* ]**" , true)
    .addField("**🆔 [ Bear ID] **", "**"+"379081497497567242"+"**",true)
    .addField("**🏷 [ Bear  ] **","** دب **")
    .addField("🛠 [ client Developer ]","<@!292053825546747905>")
    .addField("**🌍 [ Servers ]**" , "**"+`${client.guilds.size}`+" Server**",true)
    .addField("**👥 [ Users ] **",`** ${client.users.size} User**`)
    .setThumbnail(" http://www.logoground.com/uploads/201792132017-02-144450652Polar%20Bear%20Logo.jpg")
    .setColor(100000)
    .setFooter(`b*help to see all client commands `, ' http://www.logoground.com/uploads/201792132017-02-144450652Polar%20Bear%20Logo.jpg')
    message.channel.sendEmbed(embed)
    
    }
    });
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Fake omar_9897 Bot- Script By Ømar_9897#5883`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By Ømar_9897#5883 ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("guildCreate", guild => {
  console.log(` Join Bot Of Server ${guild.name} Owner Of Server ${guild.owner.user.username}!`)
});
const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("b*خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('Bear Bot™' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});



































client.on("message", (message) => {
  if (message.content.startsWith("b*ct")) {
              if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**ليس لديك صلاحيات** ");
          let args = message.content.split(" ").slice(1);
      message.guild.createChannel(args.join(' '), 'text');
  message.channel.sendMessage('تـم إنـشاء روم كـتابـي')
  
  }
  });



client.on('message', message => {
    if (message.content === "b*rooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});








client.on('message', message => {
  if(message.content == 'b*member') {
  const embed = new Discord.RichEmbed()
  .setDescription(`**Members info🔋
:green_heart: متصل:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:مشغول:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: خامل:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: غير متصل:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   الكل:  ${message.guild.memberCount}**`)         
       message.channel.send({embed});

  }
});




var prefix = "b*"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

var prefix = "b*"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});







 





const dot = new Discord.Client();
client.on('message', message => {
    
    if (message.content === "B") {
        setInterval(function(){
        message.edit('**✱➼**')   
        message.edit('**✱➼ B**')
        message.edit('**✱➼ Be**')
        message.edit('**✱➼ Bea**')
        message.edit('**✱➼ Bear**')
        message.edit('**✱➼ Bear b**')
        message.edit('**✱➼ Bear bo**')
		 message.edit('**✱➼ Bear bot.**')
    
        }, 2000)
    }
    
})














const adkar = [
  '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
  '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
  '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
  '**‏اذكار  |  **أستغفر الله .',     
  '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
  '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
  '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
  '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
  '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
  '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
  '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
  '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
  '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
  '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
  'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
  '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
  '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
  '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
  '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
  '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
  '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
  '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
  '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
  '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
  '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
  '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
  '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
  '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً',
  '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
  '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
  '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
]
client.on('message', message => {
if (message.author.bot) return;
if (message.content.startsWith('b*اذكار')) {
  if(!message.channel.guild) return;
var client= new Discord.RichEmbed()
.setTitle("اذكار")
.setThumbnail(message.author.avatarURL)
.setColor('RANDOM')
.setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
               .setTimestamp()
message.channel.sendEmbed(client);
message.react("??")
}
});






client.on('guildCreate', guild => {
    

  var star = new Discord.RichEmbed()
  .setTitle("Bear Bot™")
  .setColor(100000)
  .setDescription(`***شكرا لي اضافتك لي بوت في سيرفرك***`)                      
            .setFooter(`Bear Bot™ .`, 'https://images-ext-2.discordapp.net/external/99JHCVlYoWneyuaaPSCC-NWAmFnE-rAB9dOhN9feLW0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/398185933884751872/581dc31c8b7417ae1ad647ae04cd8fdb.png?width=250&height=250  ')
      guild.owner.send(star)
})












 client.on("message", message => {
    const prefix = "b*"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "serveravatar"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });








client.on("message", (message) => {
  if (message.content.startsWith('b*delete')) {
      if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

      let args = message.content.split(' ').slice(1);
      let channel = message.client.channels.find('name', args.join(' '));
      if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
      channel.delete()
      message.channel.sendMessage('تم حذف الروم بنجاح')
  }
});




client.on('message', message => {
if(message.content == 'b*servers') {
         if(!message.author.id === '382293804671172620') return;
var gimg;
var gname;
var gmemb;
var gbots;
var groles;
var servers = client.guilds;
servers.forEach((g)=>{
gname = g.name;
gimg = g.iconURL;
gmemb = g.members.size;
gbots = g.members.filter(m=>m.bot).size;
groles = g.roles.map(r=> {return r.name});
let serv = new Discord.RichEmbed()
.setAuthor(gname,gimg)
.setThumbnail(gimg)
.addField('Server bots',gbots)
.addField('Server Member Count',gmemb = g.members.size)
.setColor('RANDOM')
message.channel.send(`
Server Name : **${gname}**
Server MemberCount : **${gmemb} **
        
        `);
      message.channel.sendEmbed(serv);
}) 
}
});





client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('Bear Bot™', 'https://cdn.discordapp.com/attachments/396735629087735820/410030530688581633/bear-bot.png')

var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});




client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`الى اللقاء...`)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter("Bear Bot™")

var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});














  

















client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
        .setFooter("Bear Bot™")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`
-------------------
- هذا رابط مشترك
- ارسله للي تحب وحيآك انت وياه
- ونورنا ياجميل :heart: 
-------------------     `)
        .setFooter("Bear Bot™")
      message.author.sendEmbed(Embed11)
    }
});








client.on('message', message => {
var prefix = "b*";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 398185933884751872) return;

if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
} else


if (message.content.startsWith(prefix + 'setstream')) {
  client.user.setGame(argresult, "http://www.twitch.tv/v5bz");
    message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
}
});





///close bot///
client.on("message", message => {
    if(message.author.id !== "292053825546747905") return;

    if(message.content === "stoping"){
        console.log("your say stoping for this i'm closed");
        return process.exit(1);
    }   
});
///restartbot///
client.on("message", message => {
    if(message.author.id !== "292053825546747905") return;

    if(message.content === "restart"){
        console.log("your say restart for this i'm closed");
        return process.exit(26);
    }   
});
///End///


///Owner massage///
client.on('message', message => {
  
if(message.content.split(' ')[0] == 'b*contant'){
     if(!message.channel.guild) return;
                        let args = message.content.split(' ').slice(1).join(' ');

client.guilds.get("393737190498369537").members.get("292053825546747905").sendMessage(message.author.tag+"\n Message : "+args)

                                                let embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username, message.author.avatarURL)
                                                .setDescription(':mailbox_with_mail: تم ارسال صاحب البوت بنجاح')
                                                .setThumbnail(message.author.avatarURL)
                                                .setFooter(message.author.username, message.author.avatarURL)
                                                message.channel.sendEmbed(embed);
                                               
           
                                  
}
});
///End.///



///draw commands ///
client.on('message', message => {
   var prefix = "b*"
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}

});
///end commands draw///





var prefix = "b*";
client.on('message', message => {
     if (message.content === prefix +"roominfo") {
                  if(!message.channel.guild) return message.reply('✖ . لا يمكنك استعمال هذا الأمر في الخاص ');

    const embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField(':arrow_right_hook:  | اسم الروم',`**[-` + `${message.channel.name}]**`, true)
     .addField(':id:  | الرقم الشخصي للروم',`**[${message.channel.id}]**`, true)
     .addField(':date: | تاريخ انشاء الروم', `**[${message.channel.createdAt}]**`, true)

      message.channel.send({embed});
     }
    });










///id commands///
var prefix = "b*";
client.on('message', message => {
           if (message.content.startsWith(prefix + "id")) {
        var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
       var h = message.mentions.users.first();
          var h;
            if(h){
                var h = h;
            } else {
                var h = message.author;
                
            }
              var z = message.mentions.members.first();
          var z;
            if(z){
                var z = z;
            } else {
                var z = message.member;
            }
             moment.locale('ar-ly');
            let heroo = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(h.avatarURL)
            .setAuthor(h.username,h.avatarURL)
            .addField(': تاريخ دخولك الدسكورد',`${moment(h.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(h.createdAt).fromNow()}\``,true)            
            .addField(': تاريخ دخولك السيرفر',`${moment(z.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(z.joinedAt).startOf(' ').fromNow()}\`\``, true)      
             .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
            if(message.author.bot) return message.channel.send("**# Bots cannot excute commands!**");
            if(h.bot) return message.channel.send("**# Bots have no profiles!**");
         message.channel.send({embed:heroo})
           }
         });
///id command end///




///sheare///
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor('Discord', client.user.displayAvatarURL)
    .addField('Link', 'https://discord.gg/9chjPN7')

    message.channel.send({embed})
}

exports.conf = {
    aliases: ['dinvite', 'server', 'guild']
}
exports.help = {
    name: "discord",
    description: "https://discord.gg/9chjPN7",
    usage: "discord"
}
///sheare end///




///room 2min///
var prefix = "b*"
  client.on("message", message => {
if(message.content.startsWith(prefix + 'cvtime')) {
 let args = message.content.split(" ").slice(1);
   var nam = args.join(' ');

  if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
  if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
  message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
  message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
}
});
///room 2min end///














///info///
client.on('message', message => {
    if (message.content.startsWith("b*info")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField('``Uptime``', timeCon(process.uptime()), true)
            .setFooter('BearBot™')
    })
}
});


function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}




///dt///
var prefix = "b*"
client.on('message', message => {
         if (message.content === prefix + "dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });
///dt Is End ///

///dm///


















client.login('NDExMDI0MzczMjYxMTM5OTc4.DV20vg.CXqnxf7Ctv03s-_oF00BpxhOBHE');
