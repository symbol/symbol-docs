###############
Vision: Symbol²
###############

.. rst-class:: h1centered

   Reflexões de Piratas Espaciais

.. figure:: ../../resources/images/handbook/ship\ cover\ blank.png
    :align: center
    :width: 600px

    Versão 1.0

Prefácio
********

Antes de começar, é importante definir uma âncora. Embora um propósito ou missão possa mudar com o capitão ou as marés, uma âncora é o que nos mantém no chão. Em tempos de turbulência, frustração ou incerteza, sempre se pode voltar à âncora para realinhá-los quanto ao motivo de estarem aqui.

Nossa âncora é, e sempre será, o **Symbol**. Muito parecido com os projetos antes de nós (e os muitos a seguir), acreditamos que a blockchain é a tecnologia mais adequada para impulsionar uma *nova economia* - e o **Symbol** é a nossa contribuição para essa busca. Como protocolo, é caracterizado por um algoritmo de consenso que busca recompensar os *usuários* de uma rede preferencialmente aos acumuladores de riquezas. Como um sistema, é caracterizado por uma arquitetura que estende a funcionalidade por meio de plug-ins no nível do sistema, em oposição aos opcodes em uma máquina virtual determinística [1]_.  Embora simples, essas duas características ajudam a definir nossa filosofia de design - ou seja, uma abordagem orientada para o serviço que prioriza o usuário. Acreditamos que a blockchain seja uma tecnologia centrada no humano, e tudo o que buscamos fazer com o **Symbol** deve enfatizar isso.

Este documento não pretende ser um white paper; uma folha de papel; um documento comercial ou mesmo um manifesto. A tecnologia centrada no ser humano é desenvolvida por seus *usuários*, afinal, e pretendemos definir, projetar e desenvolver o **Symbol** junto com a comunidade. Em vez disso, pense nisso como uma estrela do norte que podemos usar para navegar no caminho à frente - pois embora uma âncora possa nos manter no solo, são as constelações que nos ajudam a navegar para novas terras.

~GHJ

Sobre o futuro do Symbol e do NIS1
**********************************

No centro de qualquer protocolo de sucesso está a *disrupção*, seja ela fazendo a disrupção da infraestrutura de pagamento (Bitcoin); ou da computação em nuvem (Ethereum); ou do armazenamento em nuvem (Arweave); ou das redes sem fio (Helium). Com isso, a **Symbol** busca fazer uma disrupção nas *economias* - existentes e emergentes - fornecendo um mercado eficiente para sua operação que permite aos usuários definir e trocar *valor* como tokens digitais.

Esses mercados são representados por pequenas cadeias construídas com propósito (subChains) que são ancoradas à camada de liquidação (mainChain) por meio de uma interconexão centrada em baseada, em parte, em provas de conhecimento zero. Cada subChain é representada por seu próprio token de utilidade (um mosaico) que é recompensado aos nós que produzem novos blocos (colheitadeiras de bloco). Esses tokens de utilidade podem ser apostados (permitindo que o nó atue como um provedor de liquidez) ou negociados por bens e serviços (por meio de aplicativos descentralizados ou trocas descentralizadas).

Um provedor de liquidez é um novo tipo de serviço que um nó pode fornecer, em que aceita a troca de um mosaico por outro (par de tokens). Caso um nó opte por atuar como provedor de liquidez, será necessário manter a participação de *pelo menos* um outro token de subChain juntamente com seu XYM. Um provedor de liquidez eficiente manterá uma cesta diversificada de ativos e pares. Ao fazer isso, um nó é capaz de facilitar a *troca de solicitações* (um novo tipo de transação) que geram taxas adicionais.

Para que as transações sejam finalizadas na *camada de liquidação*, é necessário o token de utilitário mainChain (XYM). Todos os nós de uma determinada subChain são obrigados a manter um equilíbrio de XYM para participar do processo de acumulação (e, assim, compartilhar uma distribuição das recompensas do bloco). Os nós podem escolher se especializar em um conjunto específico de transações (como provas de validade ou stablecoins). Outros podem delegar, em vez disso, a um *sindicato* - um cluster orquestrado de nós que são alocados a um conjunto de subChains com base na demanda atual da rede.

Uma das primeiras subcadeias planejadas para lançar na **Symbol** será NIS1 e seu token nativo XEM. Juntamente com o NIS1, dois novos conceitos - *royalties* e *impostos* - serão introduzidos. Adaptado da característica de cobrança , os royalties permitem que uma porcentagem de uma determinada venda de token seja direcionada para uma conta toda vez que for transferida; enquanto os impostos são uma taxa adicional adicionada à transferência. Ambos os tipos de transação serão denominados em XEM e podem ser trocados por XYM (ou outros tokens de subChain) em um provedor de liquidez.

A ascensão da economia criadora viu a tecnologia blockchain cada vez mais utilizada para negociar outros tipos de valor complexo além de simples identificadores criptográficos. Em particular, os NFTs e os colecionáveis ​​digitais capacitaram um conjunto de artistas a se envolver em modelos de monetização direto para o fã. No entanto, a permanência dos dados continua sendo um problema na maioria das cadeias hoje, pois o conteúdo raramente é armazenado *na cadeia*. O padrão mais comumente utilizado no Ethereum, “ERC-721”, não impõe restrições sobre onde os emissores armazenam os dados referenciados (ou seja, um arquivo de áudio, imagem ou vídeo). Embora a ascensão da *permaweb* [2]_ e os serviços de armazenamento descentralizado [3]_ forneceram uma solução apropriada para o problema de permanência dos dados, a separação do próprio token fornece garantias de propriedade mais fracas e apresenta o risco de que vários tokens possam reivindicar os mesmos dados ou os dados armazenados sejam alterados de forma inadmissível.

Uma solução para esse dilema poderia ser uma série de subChains dedicadas para armazenamento de conteúdo, onde os mosaicos são representações de um determinado arquivo de dados. Os possíveis compradores e dApps podem gerar provas de validade para um determinado conteúdo que comprove tanto a autenticidade quanto a procedência no ponto de venda. Após a compra, uma prova de validade e um token podem permitir a descriptografia dos próprios dados reais. Uma solução mais leve pode ver subChains dedicados que fazem a ponte para provedores de armazenamento descentralizados, permitindo que os nós atuem como provedores de armazenamento dedicados e sejam recompensados ​​de acordo com seus serviços. A persistência de dados está, portanto, associada ao sucesso da cadeia emissora, versus a dependência de vários serviços.

Enquanto o design híbrido inicial do **Symbol** via a interação de cadeias públicas e privadas por meio de trocas atômicas, a introdução de subChains permite uma solução mais elegante para o problema de permanência de dados e redes específicas de conteúdo. O potencial oculto dos blockchains públicos é um estado global compartilhado onde cada usuário é um usuário root [4]_, mas as limitações práticas tanto na física quanto na tecnologia tornam isso difícil de alcançar com uma única cadeia pública. Ao capacitar os operadores para fornecer conteúdo com base na demanda do mercado e *na simpatia da máquina*, a taxa de transferência da rede torna-se aditiva, em vez de dependente de uma única parte do sistema.

O futuro do **Symbol o** vê como o hub e a camada de intercâmbio no centro de um universo de cadeias personalizadas sem restrições de escalabilidade global. SubChains são nosso primeiro passo nesse sentido.

Sobre sindicatos e projeto de sistema
*************************************

Na teoria dos negócios, disrupção é definida como *inovação que cria um novo mercado e rede de valor e, eventualmente, desloca empresas, produtos e alianças líderes de mercado estabelecidos* [5]_. Essas inovações tendem a ser produzidas por pequenas equipes de indivíduos auto-organizados [6]_, em vez de grandes equipes ou corporações existentes. O processo de disrupção leva mais tempo do que a abordagem convencional e o risco de falha é maior. No entanto, se bem-sucedidas, uma vez implantadas, essas tecnologias tendem a se espalhar mais rapidamente e ter um impacto maior do que as outras.

É bem sabido que as estruturas centralizadas freqüentemente estão em conflito com o desenvolvimento de sistemas descentralizados. A introdução do Bitcoin foi uma resposta direta às falhas sistemáticas de uma autoridade centralizada e, desde então, a distribuição de energia tem permanecido um objetivo de design de todas as redes de blockchain até hoje.

.. sidebar:: O volante do ecossistema

    .. figure:: ../../resources/images/handbook/Symbol\ Venn\ Diagram\ 1.png
        :align: center
        :width: 600px

Independentemente disso, a centralização ocorre naturalmente após um período de tempo  [7]_, seja como um subproduto da especialização ou como economias de escala. Isso provou ser verdadeiro tanto na prova de trabalho (por meio de pools de mineração, concentração de hashrate e hardware especializado) quanto na prova de aposta (por meio da concentração de riqueza e concentração da infraestrutura do validador). Assim, a resiliência no blockchain vem em grande parte de garantir que as partes no ecossistema sejam incentivadas a colaborar, em vez de conspirar. Esta é a base da teoria dos jogos e seu domínio é a chave para um design de sistema bem-sucedido

Na **Symbol**, alcançamos a colaboração por meio do conceito de *sindicatos.* Tradicionalmente, um sindicato é um grupo auto-organizado de indivíduos, corporações ou empresas que trabalham juntos para cumprir uma missão comum. Os sindicatos não são um conceito novo em criptomoeda - organizações sem fins lucrativos como a Ethereum Foundation e a Tezos Foundation podem ser classificadas informalmente como sindicatos; bem como organizações autônomas descentralizadas (DAOs) e grupos informais de trabalho ou pesquisa. Flashbots [8]_ - a organização de pesquisa e desenvolvimento que se concentra em miner-extractable value (MEV) em DeFi - segue o *coletivo pirata hacker*, um sindicato informal baseado na cooperativa pirata. Os sindicatos podem até mesmo ser observados fora da criptomoeda: Valve, uma empresa de entretenimento e hardware de vários bilhões de dólares segue um design não hierárquico (“Flatland”) sem gerenciamento intermediário ou liderança formal  [9]_.

Hoje, podemos observar três sindicatos formados naturalmente: sindicatos de infraestrutura (nós e seus operadores humanos); sindicatos de protocolo (desenvolvedores e arquitetos de sistema); e sindicatos de usuários (dApps e indivíduos). Os sindicatos são amplamente incentivados a colocar o sucesso coletivo da cadeia acima de seus próprios desejos individuais: os

* Nós dependem de desenvolvedores e arquitetos de sistema para projetar, desenvolver e implantar novas funcionalidades na cadeia; e dApps para inovar para atrair novos usuários (e, assim, gerar taxas de rede);
* Os desenvolvedores dependem de nós para manter ativamente um consenso de rede saudável por meio de atualizações de sistema; e na dApps para construir produtos inovadores que monetizem a rede pública e mostrem o sistema;
* Os dApps dependem de desenvolvedores para trazer novas funcionalidades que lhes permitam construir produtos inovadores para atrair clientes; e nós para fornecer infraestrutura de missão crítica que mantém a rede estável.

No centro disso está o *embaixador* - a *voz* dos sindicatos. Os embaixadores são rapidamente identificados por suas habilidades de comunicação e relacionamento. Eles trabalham para coordenar o caos e defender as idéias de suas comunidades representativas. Freqüentemente, são tradutores, escritores e educadores - em alguns protocolos, eles são 'representantes do ecossistema'; em outros, 'coordenadores de rede'. No **Symbol**, os embaixadores podem ser eleitos e financiados por meio da colheita delegada. Se, a qualquer momento, as comunidades sentirem que seus embaixadores eleitos não estão funcionando, elas podem delegar a um novo embaixador.

Paralelamente à colheita delegada, existe outro conceito que pode ser aplicado ao sistema em geral: o financiamento quadrático. Proposto pela primeira vez no *radicalismo liberal* por Buterin, Hitzing e Weyl, o [10]_ financiamento quadrático busca aplicar o conceito de voto quadrático ao financiamento de bens públicos. Em economia, um bem público é definido como um bem que *não pode ser excluído nem rival*. Não excluível significa que um indivíduo não pode ser excluído do uso; e a não rivalidade significa que o uso por um indivíduo não reduz a disponibilidade do bem para outros. Alguns exemplos comumente referenciados de bens públicos são software de código aberto (como protocolos de blockchain; a Internet; ou sistemas operacionais); educação gratuita (como boletins informativos; podcasts ou documentação técnica); e serviços gratuitos (como televisão e rádio públicas).

.. sidebar:: Quadratic funding

    .. figure:: ../../resources/images/handbook/Syndicate\ Matching\ dark.png
        :align: center
        :width: 600px

Na **Symbol**, o financiamento quadrático é capaz de resolver um desafio fundamental que temos no financiamento de projetos: como você determina qual projeto beneficiaria mais *pessoas*? Ele consegue isso permitindo que os indivíduos 'comprem para seu voto' em quais projetos devem ser financiados em seguida e amplia as doações com uma correspondência com o sindicato dedicado ao financiamento de bens públicos. Há retornos decrescentes para votos adicionais, o que ajuda a descentralizar o poder de empresas de capital de risco, grandes baleias e corretores de energia centrais. Em resumo, o número de contribuições individuais é mais importante do que o valor total financiado por um indivíduo.

Acreditamos que os sindicatos são uma forma poderosa de auto-organização que tem sucesso porque incentivam os participantes a colocar os sucessos coletivos acima dos seus, enquanto reforçam o compromisso com os mesmos princípios que tornaram o blockchain um sucesso: ruptura, descentralização e transparência. Junto com o financiamento quadrático, pensamos que os sindicatos capacitam uma comunidade vibrante e auto-organizada de contribuintes e colaboradores que estão todos alinhados em uma missão comum: o **Symbol**.

O Código do Pirata Espacial
***************************

Mesmo nos sistemas mais sem lei, havia um acordo comum de operação. Existe uma honra entre os ladrões. Os piratas, apesar de serem rufiões, conseguiram encontrar uma maneira de reduzir o conflito entre si e, ao mesmo tempo, maximizar os lucros. Eles usaram um sistema democrático de eleição e uma carta que estabelecia as regras de operação antes de qualquer viagem: a divisão do saque; divisão de trabalho; e divisão de responsabilidades. Eles delinearam atividades proibidas e suas punições; regras para a segurança do navio e da tripulação; e incentivos e bônus para membros produtivos.

Antes de zarpar, os piratas escreveram seus artigos juntamente com a eleição de um capitão e um contramestre. O capitão não era chefe e servia à vontade da tripulação - a qualquer momento ele poderia ser substituído por maioria de votos ou motim. Esperava-se que os capitães fossem, em geral, líderes ousados ​​e decisivos que orientassem a tripulação sobre quem e o que pilhar; como escapar das autoridades ou lidar com um ataque. Os Quartermasters representavam os interesses da tripulação - eles mantinham a ordem; conflitos resolvidos entre membros da tripulação; e determinavam a quantidade de comida e bebida distribuída a cada tripulante. Todos os homens deram consentimento a esses artigos e elegeram seus líderes. Se um homem discordasse do contrato ou da tripulação, ele estava livre para sair por sua própria vontade.

Apesar de não ter um governo para fazer cumprir ou apoiar acordos cooperativos entre eles, os piratas conseguiram manter uma harmonia que era tão comum quanto suas contrapartes legais. Em parte, isso se devia à transparência em todas as coisas, desde o saque que juntavam até a distribuição da riqueza; em parte devido à sua tripulação, que colocava o sucesso coletivo do navio acima de suas próprias necessidades; e em parte devido ao seu compromisso com a igualdade e camaradagem, pois um navio era tão bom quanto a soma de suas partes. Acreditamos que um sindicato dedicado à **Symbol** deve seguir uma estrutura vagamente inspirada na cultura pirata, mas definida por uma estrutura corporativa não hierárquica.

A seguir estão *algumas* das nossas propostas de artigos **do acordo** - o juramento que fazemos antes de partir para a próxima jornada do **Symbol**. Embora todos os artigos precisem de consenso e, principalmente, da aprovação da equipe, achamos que é útil definir algumas diretrizes gerais.

* Valorizamos a **transparência.** Transparência gera confiança; nos responsabiliza; e nos permite impulsionar nosso ecossistema. Atuamos à *vista de todos,* garantindo que nossa comunidade tenha total visibilidade de nosso trabalho e que nossa equipe possa aprender com nossos próprios erros. Compartilhamos informações de forma aberta, ampla e deliberada - sobre coisas que aprendemos; erros que cometemos; ideias em que pensamos e no que estamos trabalhando. Quase todos os documentos estão totalmente abertos para qualquer pessoa ler e comentar; cada decisão estratégica; cada análise; cada produto ou teste de recurso. Usamos ferramentas que se alinham com nossos valores (Git, Discord) e capacitam o ecossistema para trabalhar ao nosso lado.
* Acreditamos na **liberdade financeira**. Operamos com uma abordagem de compensação baseada em fórmulas que é imediatamente visível para todos. Combinamos salários competitivos e equivalentes ao mercado com um generoso pacote de benefícios. Acreditamos que cada membro deve ter interesse no que estamos construindo, e é por isso que incluímos um cronograma de aquisição simbólico em todos os pacotes de remuneração.
* Somos uma **equipe campeã**. Não somos uma família - escolhemos os nossos jogadores. Temos grandes expectativas de desempenho e resultados. Se alguém não está aumentando a média, treinamos e desenvolvemos ativamente. Temos uma cultura de trabalho intensa, muitas vezes caótica, e somos regularmente empurrados para fora de nossa zona de conforto - o que nos permite crescer, tanto como indivíduos quanto como equipe. Esperamos que nossa equipe conquiste seu assento no navio e o mantenha.
* Procuramos **rockstars**. Tomamos medidas extraordinárias para garantir que temos os melhores talentos em todas as cadeiras. Preferimos pessoas que são “em forma de T” - generalistas (altamente qualificados em um amplo conjunto de coisas valiosas), mas também especialistas (entre os melhores em seu campo dentro de uma disciplina restrita). Trabalhamos apenas com pessoas que são mais capazes do que nós, não menos. Acreditamos que o talento é o fator mais importante para o nosso sucesso e esperamos que toda a equipe assuma a responsabilidade pelo aumento da média da equipe. Desempenho insignificante é atendido com um pacote de indenização generoso.
* Estamos **focados.** A missão do  **Symbol** é fazer uma disrupção nos mercados e gerar igualdade de oportunidades. Em primeiro lugar, somos uma equipe centrada na engenharia - se sua especialidade não é escrever código, então, toda energia de que você dispõe deve ser colocada no entendimento da tecnologia por trás de nossos sistemas.

Em todas as coisas, servimos ao **Symbol**, em primeiro lugar.

.. rubric:: Footnotes

.. [1] Griffin Ichiba Hotchkiss, Andrei Maiboroda, and Paul Wackerow, “ETHEREUM VIRTUAL MACHINE (EVM)”, accessed June 7, 2021, https://ethereum.org/en/developers/docs/evm/

.. [2] "Store Data, Permanently", Arweave home page, 2020, https://www.arweave.org/

.. [3] David Vorick et al., "Decentralized Internet for a Free Future", Home page, Skynet, 2021, https://siasky.net/

.. [4] Balaji S. Srinivasan, "Yes, You May Need a Blockchain", Blog post, Balaji S. Srinivasan, May 14, 2019, https://balajis.com/yes-you-may-need-a-blockchain/

.. [5] Clayton M. Christensen, Michael E. Raynor, and Rory McDonald, "What Is Disruptive Innovation?", *Harvard Business Review*, December 2015, https://hbr.org/2015/12/what-is-disruptive-innovation

.. [6] Lingfei Wu, Wang Dashun, and James A. Evans, "Large Teams Develop and Small Teams Disrupt Science and Technology", *Nature* 566 (2019): 378–2, https://par.nsf.gov/servlets/purl/10109889

.. [7] Aaron Shaw and Benjamin Mako Hill, "Laboratories of Oligarchy? How the Iron Law Extends to Peer Production", *Arxiv*, 2014, https://arxiv.org/ftp/arxiv/papers/1407/1407.0323.pdf

.. [8] Flashbots, software repository, github.com/flashbots, 2021, https://github.com/flashbots/pm

.. [9] Phanish Puranam and Dorthe Døjbak Håkonsson, "Valve’s Way", *Journal of Organization Design* 4, no. 2 (June 2015): 2–, https://www.researchgate.net/publication/282395703_Valve%27s_Way

.. [10] Vitalik Buterin, Zoë Hitzig, and E. Glen Weyl, "Liberal Radicalism: A Flexible Design for Philanthropic Matching Funds", *Available at SSRN 3243656*, 2018, https://www.gwern.net/docs/economics/2018-buterin.pdf
