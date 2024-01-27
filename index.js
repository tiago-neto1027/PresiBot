const Eris = require('eris');
const limparMensagens = require('./utilidades/limpar');
const { enviarAjuda } = require('./utilidades/ajuda.js');

const bot = new Eris(BOT.TOKEN);

bot.on('ready', () => {
  console.log('Bot está pronto!');
});

bot.on('messageCreate', (msg) => {
  const lowerCase = msg.content.toLowerCase();

  // Se quiser mover para um arquivo separado, crie uma função e a chame aqui
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
      for (let i = 0; i < 12; i++) {
        const randomNumber = Math.random();
        const ballColor = randomNumber < 0.8 ? '🔴' : '🟢';
        matchHistory += ballColor;
      }
      bot.createMessage(msg.channel.id, `Agora está assim: ${matchHistory}`);
      break;

    case 'insta':
      bot.createMessage(msg.channel.id, 'Segue o insta em: **@Presi_Tips**\nSabias que eu já comi a Georgina? Ah posé, segue-me no insta!');
      break;

    case 'apostas para hoje presi?':
      bot.createMessage(msg.channel.id, 'Na vô dizêre!');
      break;

    case 'teste':
      bot.createMessage(msg.channel.id, 'Tô a funceminare!');
      break;

    default:
      if (lowerCase.startsWith('limpar')) {
        limparMensagens(bot, msg);
      }
  }
}

bot.connect();
