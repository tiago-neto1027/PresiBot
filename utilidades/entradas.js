async function atribuirCargoAutomaticamente(bot, guildId, targetRoleId, memberId) {
  const guild = bot.guilds.get(guildId);

  if (guild) {
    const targetRole = guild.roles.get(targetRoleId);

    if (targetRole) {
      try {
        const member = guild.members.get(memberId);
        
        // Verifica se o membro existe e se já possui o cargo
        if (member && !member.roles.includes(targetRoleId)) {
          // Adiciona o cargo ao membro
          await member.addRole(targetRoleId);
          console.log(`Cargo atribuído a ${member.user.username}`);
        }
      } catch (error) {
        console.error(`Erro ao atribuir cargo a membro ${memberId}: ${error.message}`);
      }
    } else {
      console.error('Cargo alvo não encontrado no servidor.');
    }
  } else {
    console.error('Erro ao obter informações do servidor.');
  }
}

module.exports = { atribuirCargoAutomaticamente };
