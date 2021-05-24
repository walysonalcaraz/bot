const env = require("../.env");
const Telegraf = require("telegraf");
const { reply } = require("telegraf");
const bot = new Telegraf(env.token);

bot.start(async (ctx) => {
  const nome = ctx.update.message.from.first_name;
  ctx.reply(`Seja bem Vindo ${nome}!!`);
  await ctx.replyWithPhoto({ source: `${__dirname}/botsuporte.jpg` });
  ctx.reply(
    `Sou o Mascote do Suporte 😁😁\n \nPara acessar as informações por favor digite 👉 /info\n \nCaso queira ver o menu de informações novamente, apenas digitar 👉 /info`
  );
});

bot.command("info", (ctx) =>
  ctx.reply(
    "Escolha abaixo a opção para ver as Informações!!\n" +
      "\n/ticket: Abertura de Tickets 📝" +
      "\n/radio: Informações de acesso ao Rádio Cliente/Base 📻" +
      "\n/radius: Informações sobre o Radius 🖥" +
      "\n/sla: Informações sobre os SLA de cada POP 🧭" +
      "\n/servidores: Informações sobre os Servidores (TCB / BNG) 🖥" +
      "\n/tiposos: Informações sobre Abertura de O.S ⚙" +
      "\n/voip: Informações sobre VOIP 📞" +
      "\n/prob: Informações Problemas Internos ou Lógicos ⚠" +
      "\n/hosp: Informações Sobre Hospedagem 📧" +
      "\n/onu: Comandos para diagnostico da ONU 📟" +
      "\n/script: Mensagens Para Um Atendimento Humanizado! 💁" +
      "\n/infogerais: Explicações gerais ❓" +
      "\n/lentidao: Procedimento para Lentidão 📢" +
      "\n/smiley: Verificar o Backup do Cond. Smiley 😁" +
      "\n/onu2: Passo a Passo para atualização de ONU 📀" +
      "\n/zoiper: Passo a Passo para Configuração do Zoiper 📞" +
      "\n/rwscan: Como cadastrar rádio de clientes na WSCAN 📻" +
      "\n/dica: Dica para o Suporte ! 🤔" +
      "\n/osbnc: Informações sobre O.S de Bernardino 📄" +
      "\n/rg1200: Firmware Roteador RG 1200 💾" +
      "\n/totolink: Firmware Roteador TOTOLINK 💾" +
      "\n/gf1200: Firmware Roteador GF 1200 💾"
  )
);

bot.hears(/ticket/i, (ctx) =>
  ctx.reply(
    'Teste\nTeste'
  )
);
bot.hears(/radio/i, (ctx) =>
  ctx.reply(
    "Teste"
  )
);
bot.hears(/radius/i, (ctx) =>
  ctx.replyWithPhoto(
    { source: `${__dirname}/r.jpeg` },
    {
    parse_mode: 'HTML',  caption:
        "\n<b>Msg</b>",
    }
  )
);

bot.hears(/sla/i, (ctx) =>
  ctx.reply(
    " MSG' 
  )
);
bot.hears(/servidores/i, (ctx) =>
  ctx.replyWithHTML(
    `  Msg `
  )
);
bot.hears(/tiposos/i, (ctx) =>
  ctx.replyWithHTML(
    "<b>Msg</b>"
  )
);
bot.hears(/voip/i, (ctx) =>
  ctx.replyWithHTML(
    `msg`
  )
);
bot.hears(/prob/i, (ctx) =>
  ctx.replyWithHTML(
    'Msg'
  )
);
bot.hears(/hosp/i, (ctx) =>
  ctx.replyWithHTML(
    'MSG'
  )
);
bot.hears(/onu/i, (ctx) =>
  ctx.replyWithHTML(
    'Msg'
  )
);
bot.hears(/script/i, (ctx) =>
  ctx.replyWithHTML(
    'Msg'
  )
);
bot.hears(/infogerais/i, (ctx) =>
  ctx.replyWithHTML(
    '- Anormalide com Sky Gato;\n- Double NAT Console;\n- *Criar Subdomínios;\n- Aataque DDoS;\n- IP Fixo Informações;\n- Monitoramento pacotes Packet Sniffer;\n- Redes Fast, Giga e Tecnologia Mesh;\n- Rede 2.4 e 5ghz;\n- Padrão 802.11ac;\n- Conexão Wifi X Cabeado;\n- Suporte ao IPV6\n \nClique no Link abaixo para acessar o conteúdo:\n \n<a href ="https://tdkom.freshdesk.com/a/solutions/articles/42000085617">FreshDesk</a>'
  )
);
bot.hears(/lentidao/i, (ctx) =>
  ctx.replyWithPhoto({ source: `${__dirname}/img.jpg` })
);
bot.hears(/smiley/i, (ctx) =>
  ctx.replyWithMediaGroup([
    { type: "photo", media: { source: `${__dirname}/img1.JPG` } },
    { type: "photo", media: { source: `${__dirname}/img2.JPG` } },
    { type: "photo", media: { source: `${__dirname}/img3.JPG` } },
    { type: "photo", media: { source: `${__dirname}/img4.JPG` } },
    { type: "photo", media: { source: `${__dirname}/img5.JPG` } },
  ])
);
bot.hears(/onu2/i, (ctx) =>
  ctx.replyWithHTML(
    'Msg'
  )
);
bot.hears(/rwscan/i, (ctx) =>
  ctx.replyWithHTML(
    'Msg'
  )
);
bot.hears(/dica/i, (ctx) =>
  ctx.replyWithPhoto(
    { source: `${__dirname}/img.jpg` },
    {
      caption:
        "Msg",
    }
  )
);
bot.hears(/osbnc/i, (ctx) =>
  ctx.replyWithHTML(
    "<b>Msg</b>"
  )
);
bot.hears(/rg1200/i, (ctx) =>
  ctx.replyWithMediaGroup([
    { type: "document", media: { source: `${__dirname}/arquivo.bin` } },
    { type: "document", media: { source: `${__dirname}/arquivo.pdf` } },
  ])
);
bot.hears(/totolink/i, (ctx) =>
  ctx.replyWithMediaGroup([
    { type: "document", media: { source: `${__dirname}/arquivo.web` } },
    { type: "document", media: { source: `${__dirname}/arquivo.txt` } },
  ])
);
bot.hears(/gf1200/i, (ctx) =>
  ctx.replyWithMediaGroup([
    { type: "document", media: { source: `${__dirname}/arquivo.pdf` } },
    { type: "document", media: { source: `${__dirname}/arquivo.bin` } },
    {
      type: "document",
      media: { source: `${__dirname}/gf1200_v1.16.1.bin` },
      parse_mode: 'HTML', caption:
        " Msg",
    },
  ])
);

bot.startPolling();
