import discord
from discord.ext import commands

# Configuração do bot
bot = commands.Bot(command_prefix='!')

# Evento de inicialização do bot
@bot.event
async def on_ready():
    print('Bot está pronto!')

# Comando de Ajuda
@bot.command()
async def ajuda(ctx):
    await enviar_ajuda(ctx)

# Comandos de Mensagem de Texto
@bot.command()
async def por1(ctx):
    await ctx.send('Resultados de hoje: 🟢🟢🟢🟢🔴\nFds!! Foi por 1 caralho!')

@bot.command()
async def handicap(ctx):
    await ctx.send('Vou meter handicap.\nA odd hoje tá de sete e mê!')

@bot.command()
async def insta(ctx):
    await ctx.send('Segue o insta em: **@Presi_Tips**\nSabias que eu já comi a Georgina? Ah posé, segue-me no insta!')

@bot.command()
async def apostas(ctx):
    await ctx.send('Na vô dizêre!')

@bot.command()
async def teste(ctx):
    await ctx.send('Tô a funceminare!')

# Comando de Limpar Mensagens
@bot.command()
async def limpar(ctx, quantidade: int):
    if ctx.author.guild_permissions.manage_messages:
        await limpar_mensagens(ctx, quantidade)
    else:
        await ctx.send("Xô, drogado! Não podes usar este comando.")

# Função de Ajuda
async def enviar_ajuda(ctx):
    await ctx.send(
        '## Comandos:\n'
        '**Utilidades:**\n'
        '- `ajuda`\n'
        '- `teste`\n'
        '- `limpar (nº de mensagens)`\n'
        '**Mensagens de Texto:**\n'
        '- `por1`\n'
        '- `handicap`\n'
        '- `insta`\n'
        '- `apostas`\n'
    )

# Função de Limpar Mensagens
async def limpar_mensagens(ctx, quantidade: int):
    if quantidade <= 0:
        await ctx.send("Epah, atão mas quantas mensagens queres apagar?")
        return

    try:
        await ctx.channel.purge(limit=min(quantidade, 100))
        await ctx.send(f"Apaguei {quantidade} mensagens.")
    except Exception as e:
        print(e)
        await ctx.send("Não consegui apagar as mensagens, olha, foi por 1.")

# Token do bot
bot.run('MTIwMDIxNDE2NTk3MzkwOTYxNA.GZ3ZQl.Her_9iV1ICCSy0RsHuc9cTpUOFdzPBA56kKrSA')