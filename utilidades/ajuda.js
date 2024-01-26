const enviarAjuda = (bot, channelID) => {
    bot.createMessage(channelID, '## Comandos:\n' +
      '**Utilidades:**\n' +
      '- `ajuda`\n' +
      '- `teste`\n' +
      '- `limpar (nº de mensagens)`\n' +
      '**Mensagens de Texto:**\n' +
      '- `por1`\n' +
      '- `handicap`\n' +
      '- `insta`\n' +
      '- `Apostas para hoje Presi?`\n' +
      '- `Como é que entro no teu grupo Presi?`\n' +
      '- `Como é que tá o teu match history Presi?`\n'
    );
  };
  
  module.exports = {
    enviarAjuda,
  };