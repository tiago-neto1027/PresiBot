/* Variaveis */
const Eris = require('eris');
const limparMensagens = require('./utilidades/limpar');
const { enviarAjuda } = require('./utilidades/ajuda.js');

const bot = new Eris("MTIwMDIxNDE2NTk3MzkwOTYxNA.GZ3ZQl.Her_9iV1ICCSy0RsHuc9cTpUOFdzPBA56kKrSA");

/* Liga o bot */
bot.on('ready', () => {
  console.log('Bot está pronto!');
});

/* Ajuda */
bot.on('messageCreate', (msg) => {
  const lowerCase = msg.content.toLowerCase();

  if (lowerCase === 'ajuda') {
    enviarAjuda(bot, msg.channel.id);
  }
});

/* Por 1 */
bot.on('messageCreate', (msg) => {
  const lowerCase = msg.content.toLowerCase();
  if (lowerCase === 'por1') {
    bot.createMessage(msg.channel.id, 'Resultados de hoje: 🟢🟢🟢🟢🔴\nFds!! Foi por 1 caralho!');
  }
});

/* Handicap */
bot.on('messageCreate', (msg) => {
  const lowerCase = msg.content.toLowerCase();
  if (lowerCase === 'handicap') {
    bot.createMessage(msg.channel.id, 'Vou meter handicap.\nA odd hoje tá de sete e mê!');
  }
});

/* Prezi Tips */
bot.on('messageCreate', (msg) => {
  const lowerCase = msg.content.toLowerCase();
  if (lowerCase === 'como é que entro no teu grupo presi?'|| lowerCase === 'como e que entro no teu grupo presi?') {
    bot.createMessage(msg.channel.id, 'Esquema de piramide, hoje está em promoção pagas 30€ e é vitalício!\nEsquema de piramide metes 3 pessoas por ti ganhas o dobro, a sexta pessoa, já não ganhas nada, só ganho eu!\n\nRespeita a banca e paga ao Presi pah!! 🤪🤪');
  }
});

/* Match History */
bot.on('messageCreate', (msg) => {
  const lowerCase = msg.content.toLowerCase();
  if (lowerCase === 'como é que tá o teu match history presi?' || lowerCase === 'como e que ta o teu match history presi?') {
    bot.createMessage(msg.channel.id, 'Hoje está assim: 🟢🔴🔴🔴🔴🔴🔴🟢🔴🔴🔴🔴');
  }
});

/* Insta */
bot.on('messageCreate', (msg) => {
  const lowerCase = msg.content.toLowerCase();
  if (lowerCase === 'insta') {
    bot.createMessage(msg.channel.id, 'Segue o insta em: **@Presi_Tips**\nSabias que eu já comi a Georgina? Ah posé, segue-me no insta!');
  }
});

/* Apostas */
bot.on('messageCreate', (msg) => {
  const lowerCase = msg.content.toLowerCase();
  if (lowerCase === 'apostas para hoje presi?') {
    bot.createMessage(msg.channel.id, 'Na vô dizêre!');
  }
});

/* Apostas */
bot.on('messageCreate', (msg) => {
  const lowerCase = msg.content.toLowerCase();
  if (lowerCase === 'teste') {
    bot.createMessage(msg.channel.id, 'Tô a funceminare!');
  }
});

/* Utilidades */
bot.on('messageCreate', (msg) => {
  const lowerCase = msg.content.toLowerCase();
  if (lowerCase.startsWith('limpar')) {
    limparMensagens(bot, msg);
  }
});

/* Conecta o Bot */
bot.connect();

/* 
  É preciso passar tudo para um switch case() dentro de um novo ficheiro para funcoes de mensagem

  Match History tem de ser passado para o random
*/