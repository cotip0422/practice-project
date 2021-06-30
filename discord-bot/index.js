const Discord = require('discord.js');
const weather = require('weather-js');

const client = new Discord.Client();

module.exports = {
  name: "날씨",
  description: "weather forecast",

  async run (client, message, args) {

      weather.find({search: args.join (" "), degreeType: 'C'}, function (error, result){

          if(error) return message.channel.send(error);
          if(!args[0]) return message.channel.send('날씨를 검색할 **올바른 지역**을 입력 해주세요!')

          if(result === undefined || result.length === 0) return message.channel.send('**해당 지역**을 검색할 수 없습니다');

          var current = result[0].current;
          var location = result[0].location;

          const weatherEmbed = new Discord.MessageEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`${current.observationpoint}의 날씨 정보 입니다`)
          .setThumbnail(current.imageUrl)
          .setColor(0x111111)
          .addField('시간 종류', `GMT-${location.timezone}`, true)
          .addField('온도 타입', '섭씨', true)
          .addField('온도', `${current.temperature}°`, true)
          .addField('풍향', current.winddisplay, true)
          .addField('체감 온도', `${current.feelslike}°`, true)
          .addField('습도', `${current.humidity}%`, true)

          message.channel.send(weatherEmbed)
      })
  }
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '<무') {
    msg.reply('야호');
  }
});

client.on('message', msg => {
  if (msg.content === '<도움말') {
    msg.reply('<무 - 무야호를 말합니답 \n\ <날씨 - 날씨를 알려줍니다');
  }
});


client.login('토 큰 유 출 방 지');