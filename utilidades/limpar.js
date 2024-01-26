const Eris = require('eris');

async function limparMensagens(bot, msg) {
  if (!msg.member || !msg.member.permission.has('manageMessages')) {
    return bot.createMessage(msg.channel.id, "Xô, drogado! Não podes usar este comando.");
  }

  const args = msg.content.split(' ');
  const quantidadeMensagens = parseInt(args[1], 10);

  if (isNaN(quantidadeMensagens) || quantidadeMensagens <= 0) {
    return bot.createMessage(msg.channel.id, "Epah, atão mas quantas mensagens queres apagar?");
  }

  try {
    const mensagens = await bot.getMessages(msg.channel.id, { limit: Math.min(quantidadeMensagens, 100) });
    await bot.deleteMessages(msg.channel.id, mensagens.map(m => m.id));
    return bot.createMessage(msg.channel.id, `Apaguei ${quantidadeMensagens} mensagens.`);
  } catch (error) {
    console.error(error);
    return bot.createMessage(msg.channel.id, "Não consegui apagar as mensagens, olha, foi por 1.");
  }
}

module.exports = limparMensagens;