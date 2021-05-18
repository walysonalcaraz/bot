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
    'Padrão assunto na abertura TIcket\n \nPadronização no momento da abordagem do assunto "Assunto:\n-Suporte Tecnico-Atendimento a Equipe\n-Suporte Tecnico-Atrelar IP  Fixo\n-Suporte Tecnico-Remover IP fixo\n-Suporte Tecnico-Configuracao de Equipamento\n-Suporte Tecnico-Atendimento Interno'
  )
);
bot.hears(/radio/i, (ctx) =>
  ctx.reply(
    "SENHA RADIO CLIENTE (ORN e região)\n \nLogin: admin\nSenha: R_.axT14 \n \n***********************\n \nRADIO DE BASE/PTP \nLogin: admin \n..oc..fx \n..oc..fx.. \n \n***********************\n \n Senha Rádio/Base SP \nLogin: admin \nSenha: r2d2c3po \n \nSenha: ..oc..fx.. \n \nSenha: r2d2c3"
  )
);
bot.hears(/radius/i, (ctx) =>
  ctx.replyWithPhoto(
    { source: `${__dirname}/r.jpeg` },
    {
    parse_mode: 'HTML',  caption:
        "\n<b>Obs: Quando saber se o Radius de SP  travou:</b>\n \n-Realizar testes fora da rede para verificar se há autenticação, caso não suba, observar se há mais casos semelhantes, abrir um TCB de SP (Recomendado de um cliente que já esteja em contato) ir na opção log no canto esquerdo das configurações e clicar no funil",
    }
  )
);

bot.hears(/sla/i, (ctx) =>
  ctx.reply(
    " ⚠ SLA - Ordem de Serviços \n \n💢 POP INTERIOR\n \nHOME - 72 Horas\n \nSOHO/BUSINESS - 24 Horas\n \nCORP - 4 Horas\n \n*********************************\n \n💢 POP SCA / WSCAN\n \nRESIDENCIAL: 24 Horas\n \nCORP: 10 Horas\n \nDEDICADO: 6 Horas"
  )
);
bot.hears(/servidores/i, (ctx) =>
  ctx.replyWithHTML(
    `SG\n<b> TCB\n  * TERMINATOR (DHCP ; Legado)\n      -DM21 </b>\n \n**************************\n \nSCRP\n<b> TCB\n   *MOTARO(Legado)\n       -PKS17\n       -PKS14\n       -PKS08 (PON 1/1)\n \n BNG:\n  *BNG-1 (PPPoE)\n    -TODAS AS OLTs </b>\n \n*********************************\n \nCHV\n<b> TCB:\n   *JAREK(PPPoE ; Legado)\n        -PKS05</b>\n \n*********************************\n \nPLM\n<b> BNG:\n    *BNG-6(IPoE ; PPPoE)\n          -DM34</b>\n \n*********************************\n \nORN\n<b> TCB:\n   *KINTARO (Legado)\n       -PKS02, PKS03, PKS07, PKS10, PKS12, PKS15, DM31, PK33\n    *QUANCHI (DHCP ; PPPoE ; Legado)\n       -PKS11 (Somente Legado)\n       -PKS16\n       -PKS18\n \n BNG:   * BNG-2 (IPoE ; PPPoE)\n     -PKS03, PKS07, PKS33\n  * BNG-4 (PPPoE)\n      -PKS02, PKS12, PKS15\n  * BNG-5 (IPoE ; PPPoE)\n      -PKS10, PKS11, DM31</b>\n \n*********************************\n \nCAN\n<b> BNG:\n   * BNG-5 (IPoE ; PPPoE)\n        -DM35</b> `
  )
);
bot.hears(/tiposos/i, (ctx) =>
  ctx.replyWithHTML(
    "<b>Tipos de OS:</b>\n \nORN-Manutenção Fibra - Problemas internos\nORN-Manutenção Rádio - Problemas internos\nORN-Manutenção Fibra - Gpon Apagada\nORN-Manutenção Fibra - Sinal fora do padrão\nORN-Manutenção Rádio - Sinal fora do padrão\nORN-Manutenção Rede - Sem sinal\nORN-Manutenção Rede - Sinal fora do padrão\nORN-Manutenção Rádio-Rádio desconectado\nORN-Qualidade\n \n<b>Cidades Abrangidas: </b>Ourinhos, Chavantes, Palmital, Jacarezinho, Salto Grande, Canitar, Cambará\nOS para Palmital o tipo de OS ficará para ORN, e mandar para o técnico Pablo em casos de qualidade, ou Lucas em de manutenção!\n \n__________________________________________________________________\n \nCAE-Manutenção Fibra- Problemas Internos\nCAE-Manutenção Rádio - Problemas Internos\nCAE-Manutenção Fibra- Gpon Apagada\nCAE-Manutenção Fibra - Sinal fora do padrão\nCAE-Manutenção Rádio - Sinal fora do padrão\nCAE-Manutenção Rádio - Rádio desconectado\nCAE-Manutenção Rede - Sem sinal\nCAE-Manutenção Rede - Sinal fora do padrão\n<b>Cidades Abrangidas: </b>Caieiras e Mariporã\n \n__________________________________________________________________\n \nSP-Manutenção Fibra - Problemas internos\nSP-Manutenção Rádio - Problemas internos\nSP-Manutenção Fibra - Gpon Apagada\nSP-Manutenção Fibra - Sinal fora do padrão\nSP-Manutenção Rádio - Sinal fora do padrão\nSP-Manutenção Rede - Sem sinal\nSP-Manutenção Rede - Sinal fora do padrão\nSP-Manutenção Rádio - Rádio desconectado\n<b>Cidades Abrangidas: </b>São Paulo, Osasco, Barueri, Itapeva\n \n__________________________________________________________________\n \nSCRP-Manutenção Fibra - Problemas internos\nSCRP-Manutenção Rádio - Problemas internos\nSCRP-Manutenção Fibra - Gpon Apagada\nSCRP-Manutenção Fibra - Sinal fora do padrão\nSCRP-Manutenção Rádio - Sinal fora do padrão\nSCRP-Manutenção Rádio - Rádio desconectado\nSCRP-Manutenção Rede - Sem sinal\nSCRP-Manutenção Rede - Sinal fora do padrão\n<b>Cidades Abrangidas: </b>Santa Cruz do Rio Pardo, Bernardino de Campos, Campos Novos\n TODAS AS ORDENS DE SERVIÇOS TEM QUE FICAR COM O STATUS DE AGUARDANDO AGENDAMENTO, NÃO DIRECIONAR TÉCNICO A NÃO SER QUE PEÇAM (EXCESSÃO PARA PALMITAL E QUALIDADE SCA / WSCAN)"
  )
);
bot.hears(/voip/i, (ctx) =>
  ctx.replyWithHTML(
    `Clique no Link abaixo para acessar o conteúdo:\n \n<a href ="https://tdkom.freshdesk.com/a/solutions/articles/42000085598">FreshDesk</a>`
  )
);
bot.hears(/prob/i, (ctx) =>
  ctx.replyWithHTML(
    'Clique no Link abaixo para acessar o conteúdo:\n \n<a href ="https://tdkom.freshdesk.com/a/solutions/articles/42000085717">FreshDesk</a>'
  )
);
bot.hears(/hosp/i, (ctx) =>
  ctx.replyWithHTML(
    'Clique no Link abaixo para acessar o conteúdo:\n \n<a href ="https://tdkom.freshdesk.com/a/solutions/articles/42000085597">FreshDesk</a>'
  )
);
bot.hears(/onu/i, (ctx) =>
  ctx.replyWithHTML(
    'Clique no Link abaixo para acessar o conteúdo:\n \n<a href ="https://tdkom.freshdesk.com/a/solutions/articles/42000085596">FreshDesk</a>'
  )
);
bot.hears(/script/i, (ctx) =>
  ctx.replyWithHTML(
    'Clique no Link abaixo para acessar o conteúdo:\n \n<a href ="https://tdkom.freshdesk.com/a/solutions/articles/42000085617">FreshDesk</a>'
  )
);
bot.hears(/infogerais/i, (ctx) =>
  ctx.replyWithHTML(
    '- Anormalide com Sky Gato;\n- Double NAT Console;\n- *Criar Subdomínios;\n- Aataque DDoS;\n- IP Fixo Informações;\n- Monitoramento pacotes Packet Sniffer;\n- Redes Fast, Giga e Tecnologia Mesh;\n- Rede 2.4 e 5ghz;\n- Padrão 802.11ac;\n- Conexão Wifi X Cabeado;\n- Suporte ao IPV6\n \nClique no Link abaixo para acessar o conteúdo:\n \n<a href ="https://tdkom.freshdesk.com/a/solutions/articles/42000085617">FreshDesk</a>'
  )
);
bot.hears(/lentidao/i, (ctx) =>
  ctx.replyWithPhoto({ source: `${__dirname}/lent.jpg` })
);
bot.hears(/smiley/i, (ctx) =>
  ctx.replyWithMediaGroup([
    { type: "photo", media: { source: `${__dirname}/b1.JPG` } },
    { type: "photo", media: { source: `${__dirname}/b2.JPG` } },
    { type: "photo", media: { source: `${__dirname}/b3.JPG` } },
    { type: "photo", media: { source: `${__dirname}/b4.JPG` } },
    { type: "photo", media: { source: `${__dirname}/b5.JPG` } },
  ])
);
bot.hears(/onu2/i, (ctx) =>
  ctx.replyWithHTML(
    'Clique no Link abaixo para acessar o conteúdo:\n \n<a href="https://tdkom.freshdesk.com/a/solutions/articles/42000085684">FreshDesk</a>'
  )
);
bot.hears(/rwscan/i, (ctx) =>
  ctx.replyWithHTML(
    'Clique no Link abaixo para acessar o conteúdo:\n \n<a href="https://tdkom.freshdesk.com/a/solutions/articles/42000085706">FreshDesk</a>'
  )
);
bot.hears(/dica/i, (ctx) =>
  ctx.replyWithPhoto(
    { source: `${__dirname}/router.jpg` },
    {
      caption:
        "\nUma dica para o Suporte:\n \nCaso pegarem casos em que o totolink não segure autenticação DHCP ou PPPOE, alterar o Time Zone para Brasília e aplicar. Teste realizado em atendimento e resolveu. Pode não resolver para todos os casos, mas vale a pena tentar!\n \nBy: Altiere",
    }
  )
);
bot.hears(/osbnc/i, (ctx) =>
  ctx.replyWithHTML(
    "<b> Sobre OS - Bernardino </b>\n \n- OS será geradas para ORN, qdo: instalação estiver dentro do prazo de 15 dias, pois irá equipe Terceirizada realizar manutenção;\n- Após os 15 dias, será SCRP, então muita ATENÇÃO.\n  \nPor enquanto será dessa maneira, até segunda ordem."
  )
);
bot.hears(/rg1200/i, (ctx) =>
  ctx.replyWithMediaGroup([
    { type: "document", media: { source: `${__dirname}/rg1200_v2.0.2.bin` } },
    { type: "document", media: { source: `${__dirname}/manualrg1200.pdf` } },
  ])
);
bot.hears(/totolink/i, (ctx) =>
  ctx.replyWithMediaGroup([
    { type: "document", media: { source: `${__dirname}/totolink_v1.1.1.web` } },
    { type: "document", media: { source: `${__dirname}/Importante.txt` } },
  ])
);
bot.hears(/gf1200/i, (ctx) =>
  ctx.replyWithMediaGroup([
    { type: "document", media: { source: `${__dirname}/manualgf1200.pdf` } },
    { type: "document", media: { source: `${__dirname}/gf1200_v1.10.6.bin` } },
    {
      type: "document",
      media: { source: `${__dirname}/gf1200_v1.16.1.bin` },
      parse_mode: 'HTML', caption:
        " Antes de realizar a atualização em um GF por favor abra antes o pdf descrito como manual, pois é necessário seguir a ordem no qual eles informam!\n  \n<b>Novidades da Atualização V1.16.1:,</b>\n \n- Adicionado a função Assistente de Instalação;\n- Filtro de IP para endereços de IPV6 funcional.\n \n<b>Questões resolvidas</b>\n \n- Exibição de taxa de transferência dos dispositivos conectados via cabo;\n- Ajuste no Layout das páginas de filtro;\n- UPnP funcional quando a DMZ está habilitada;\n- Resolução de conflito de IP sem necessidade de atualizar a página da interface web.",
    },
  ])
);

bot.startPolling();
