const Eris = require('eris');
const { createCanvas, loadImage } = require('canvas');
const limparMensagens = require('./utilidades/limpar');
const { enviarAjuda } = require('./utilidades/ajuda.js');
const { atribuirCargoAutomaticamente } = require('./utilidades/entradas.js');

const bot = new Eris("MTIwMDIxNDE2NTk3MzkwOTYxNA.GjukYP.OtpStRGX8UfWPQ4p0vXkHlXsLb3pMLkgwRTl5c", {intents: ['guilds', 'guildMembers', 'guildMessages']});

bot.on('ready', () => {
  console.log('Bot está pronto!');
});

bot.on('guildMemberAdd', async (guild, member) => {
  atribuirCargoAutomaticamente(bot, guild.id, '1201260889190441061', member.id);

  // Gerar cartão de entrada
  const canvas = createCanvas(800, 400);
  const ctx = canvas.getContext('2d');
  const backgroundImage = await loadImage('https://t.ctcdn.com.br/TDokNSrlVcqUwBnobCdOXCpGTlU=/35x62:1247x744/1200x675/smart/i377352.jpeg');
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';
  ctx.fillText(`Bem vindo(a) à ${guild.name}, ${member.user.username}!`, 50, 100);
  ctx.strokeStyle = '#3498db';
  ctx.lineWidth = 5;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  // Enviar a mensagem de entrada com o cartão
  bot.createMessage('1201193488201556050', { file: attachment });
});

bot.on('guildMemberRemove', (guild, member) => {
  //Mensagem de saida
  console.log(`Membro saiu do servidor: ${member.user.username}`);
  bot.createMessage('1201193555805348040', `Até logo, ${member.user.username}!`);
});

bot.on('messageCreate', (msg) => {
  const lowerCase = msg.content.toLowerCase();
    
  handleCommands(lowerCase, msg);
});

function handleCommands(lowerCase, msg) {
  switch (lowerCase) {
    case 'ajuda':
      enviarAjuda(bot, msg.channel.id);
      break;

    case 'por1':
      bot.createMessage(msg.channel.id, 'Resultados de hoje: 🟢🟢🟢🟢🔴\nFds!! Foi por 1 caralho!');
      break;

    case 'handicap':
      bot.createMessage(msg.channel.id, 'Vou meter handicap.\nA odd hoje tá de sete e mê!');
      break;

    case 'como é que entro no teu grupo presi?':
    case 'como e que entro no teu grupo presi?':
      bot.createMessage(msg.channel.id, 'Esquema de pirâmide, hoje está em promoção pagas 30€ e é vitalício!\nMetes 3 pessoas por ti ganhas o dobro, a sexta pessoa, já não ganhas nada, só ganho eu!\n\nRespeita a banca e paga ao Presi pah!! 🤪🤪');
      break;

    case 'como é que tá o teu match history presi?':
    case 'como e que ta o teu match history presi?':
      let matchHistory = '';
      let derrotas = 0;
      for (let i = 0; i < 10; i++) {
        const randomNumber = Math.random();
        if (randomNumber < 0.9){
            matchHistory += '🔴';
            derrotas += 1;
        } else {
            matchHistory += '🟢';
        }
      }
      bot.createMessage(msg.channel.id, `**Agora está assim:** ${matchHistory}\n**Vitórias: **${10-derrotas}\n**Derrotas:** ${derrotas} `);
      break;

    case 'insta':
      bot.createMessage(msg.channel.id, 'Segue o insta em: **@Presi_Tips**\nSabias que eu já comi a Georgina? Ah posé, segue-me no insta!');
      break;

    case 'apostas para hoje presi?':
      bot.createMessage(msg.channel.id, 'Na vô dizêre!');
      break;
    
    case 'quem es tu presi?':
    case 'quem és tu presi?':
          bot.createMessage(msg.channel.id, "Eu sou conhecido de várias maneiras, posso te dar uma lista de algumas:\n- Cagado\n- Fraldas\n- Cesaltina\n- Bot\n- Feeder\n- Ovelha Castanha");
          break;

    case 'teste':
      bot.createMessage(msg.channel.id, 'Tô a funceminare!');
      break;

    case 'bom dia presi':
      let respostas = [
          'Desde pequenino eu era carochinho. 🎵🎵',
          'Desde pequenino o Tomás era desatinado.🎵🎵\nPassado 20 anos continua o mesmo drogado.',
          'Desde pequenino o Tomás era desatinado.🎵🎵\nPassou a ser cagado porque ninguém lhe ensinou a limpar o rabo.',
          'Bom dia o caralho, segue-me masé no insta pah!',
      ]
      const randomIndex = Math.floor(Math.random()* respostas.length);
      const mensagemEscolhida = respostas[randomIndex];
          
      bot.createMessage(msg.channel.id, mensagemEscolhida);
      break;          
          
    default:
      if (lowerCase.startsWith('limpar')) {
        limparMensagens(bot, msg);
      }
  }
}

bot.connect();
