const Discord = require('discord.js');
const bot = new Discord.Client();
const auth = require('./auth.json');
var prefix = '*/';

bot.on('ready', () => {
  console.log("Ohayoo. ");
  bot.user.setActivity('Being angry to Riku.')
});



bot.on('message', message => {

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.slice(prefix.length).split(/ +/);
    var cmd = args.shift().toLowerCase();
       
    args = args.splice(1);
    switch(cmd) {
        // !ping
        case 'ping':
            message.channel.send('Pong !')
            // bot.sendMessage({
            //     to: channelID,
            //     message: 'Pong!'
            // });
        break;

        case 'pong':
            message.channel.send('Ping-')
        break;

        case 'help':
            message.reply("besoin d'aide ? \nPour l'instant mes commandes sont : \nping : renvoi pong \npong : renvoi ping \ngao : gentil petit dinosaure");
        break;

        case 'gao':
            message.channel.send("", {
                file: "imgs/Gao.jpg"
            });

    }
});





// bot.on('message', function (user, userID, channelID, message, evt) {
//     // Our bot needs to know if it will execute a command
//     // It will listen for messages that will start with `!`
//     if (message.substring(0, 1) == '*/') {
//         var args = message.substring(1).split(' ');
//         var cmd = args[0];
       
//         args = args.splice(1);
//         switch(cmd) {
//             // !ping
//             case 'ping':
//                 bot.sendMessage({
//                     to: channelID,
//                     message: 'Pong!'
//                 });

//             case 'help':
//                 bot.sendMessage({
//                     to: channelID,
//                     message: '*/ping : renvoi pong'
//                 });

//             break;
//             // Just add any case commands if you want to..
//          }
//      }
// });


// //Pour la bienvenue
// bot.on('guildMemberAdd', member => {
//   member.createDM().then(channel => {
//     return channel.send('Bienvenue sur mon serveur ' + member.displayName)
//   }).catch(console.error)
//   // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
// })





// var Discord = require('discord.io');
// var logger = require('winston');
// var auth = require('./auth.json');
// // Configure logger settings
// logger.remove(logger.transports.Console);
// logger.add(new logger.transports.Console, {
//     colorize: true
// });
// logger.level = 'debug';
// // Initialize Discord Bot
// const bot = new Discord.Client();
// // ({
// //    token: auth.token,
// //    autorun: true
// // });
// bot.on('ready', function (evt) {
//     logger.info('Connected');
//     logger.info('Logged in as: ');
//     logger.info(bot.username + ' - (' + bot.id + ')');
// });
// bot.on('message', function (user, userID, channelID, message, evt) {
//     // Our bot needs to know if it will execute a command
//     // It will listen for messages that will start with `!`
//     if (message.substring(0, 1) == '*/') {
//         var args = message.substring(1).split(' ');
//         var cmd = args[0];
       
//         args = args.splice(1);
//         switch(cmd) {
//             // !ping
//             case 'ping':
//                 bot.sendMessage({
//                     to: channelID,
//                     message: 'Pong!'
//                 });

//             case 'help':
//                 bot.sendMessage({
//                     to: channelID,
//                     message: '*/ping : renvoi pong'
//                 });

//             break;
//             // Just add any case commands if you want to..
//          }
//      }
// });

// bot.login(auth.token);


// bot.login('NDkyMzk2Mzg2OTA2ODAwMTQ4.DoV6Lg.BTwe63wMr1p30sJC4wRlbrnmVJc');
bot.login(auth.token)
