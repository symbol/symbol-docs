###############
Vision: Symbol²
###############

.. rst-class:: h1centered

   Riflessioni dei Pirati Spaziali

.. figure:: ../../resources/images/handbook/ship\ cover\ blank.png
    :align: center
    :width: 600px

    Versione 1.0

Prefazione
**********

Prima di iniziare definiamo quale sarà la nostra ancora. Gli scopi e le missioni possono cambiare al cambiare dei capitani e delle maree ma l’ancora è quella che ci tiene saldi. Nei momenti di difficoltà, di frustrazione, di incertezza puoi sempre tornare alla tua ancora per metterli nella giusta prospettiva o per ricordarti del perché siamo qui.

La nostra ancora è, e sempre sarà, **Symbol**. Così come i progetti ci hanno preceduto (ed i tanti che seguiranno), noi crediamo che la blockchain sia la tecnologia più adatta ad alimentare una *nuova economia* - e **Symbol** è il nostro contributo a questo scopo. Come protocollo, è caratterizzato da un algoritmo di consenso che cerca di premiare gli *utenti* della chain piuttosto che chi accumula ricchezza. Come sistema è caratterizzato da un’architettura che consente di estenderne le funzionalità tramite lo sviluppo di plugin, e non tramite lo sviluppo di codici operativi in una macchina virtuale deterministica [1]_. Per quanto semplici, queste due caratteristiche aiutano a definire la nostra filosofia di progetto - che è utente-centrica e orientata ai servizi. Noi crediamo che la blockchain sia una tecnologia che pone l’uomo al centro, e tutto quello che facciamo con **Symbol** deve seguire questo principio.

Questo documento non è concepito per essere un whitepaper; un lightpaper; un documento di business e nemmeno un manifesto. La tecnologia orientata all’uomo è definita dai suoi *utenti*, in fondo, e noi intendiamo definire, progettare e sviluppare **Symbol** proprio insieme alla sua comunità. Quindi, pensa a questo documento come ad una Stella Polare che useremo per navigare - perché mentre l’ancora ci può tenere saldi, sono le stelle che ci guideranno nel raggiungere nuove terre.

~GHJ

Il futuro di Symbol e NIS1
**************************

Alla base di ogni protocollo di successo c’è una rivoluzione, può essere una rivoluzione nell’infrastruttura dei pagamenti (Bitcoin); una rivoluzione nel cloud computing (Ethereum); una rivoluzione nello storage distribuito (Arweave); o una rivoluzione nelle reti wireless (Helium). **Symbol** cerca di rivoluzionare le *economie* - sia esistenti, che emergenti - fornendo un mercato efficiente per le operazioni che consenta agli utenti di definire e scambiare *valore* sotto forma di token digitali.

Questi mercati sono rappresentati da piccole, specifiche chain (subChain) che sono ancorate ad un livello di consenso (mainChain) attraverso la registrazione di roll-up, in parte, basati su zero-knowledge proof. Ogni subChain è caratterizzata dal proprio utility token (un mosaico) che viene dato come ricompensa ai nodi che producono nuovi blocchi (harvester di blocchi). Questi utility token possono essere messi in staking (il nodo può fungere da liquidity provider) o scambiati con beni e servizi (attraverso applicazioni decentralizzate o exchange decentralizzati).

Il liquidity provider è un nuovo tipo di servizio che un nodo può fornire, accettando lo scambio di un mosaico per un altro (coppia di token). Se un nodo sceglie di fungere da liquidity provider, deve mantenere un ammontare di *almeno* un token di una subChain oltre agli XYM. Un liquidity provider efficiente manterrà un assortimento di diversi token e coppie. Così facendo, un nodo può consentire le richieste di swap (un nuovo tipo di transazione) che definisce delle fee aggiuntive.

Affinché le transazioni possano essere finalizzate nel *settlement layer*, è richiesto l’utility token della mainChain (XYM). Tutti i nodi di ogni subChain devono possedere degli XYM per poter prendere parte al processo di roll-up (e quindi ricevere una parte delle ricompense per la creazione dei blocchi). I nodi possono scegliere di specializzarsi in un sottoinsieme specifico di transazioni (ad esempio le validity proof o le stablecoin). Altri potrebbero invece delegare ad un consorzio - un cluster gestito di nodi che vengono allocati ad un insieme di subChain sulla base dell’utilizzo corrente della rete.

Una delle prime subChain di cui è previsto il lancio su **Symbol** sarà NIS1 ed il suo token nativo XEM. Con NIS1 verranno introdotti due concetti - *royalty* e *tasse*. Derivati dalla *levy* di NIS1, le royalty prevedono che una data percentuale di un token sia pagata ad un account ogni volta che avviene uno scambio; le tasse sono un importo fisso che viene pagato ad ogni scambio. Entrambi i tipi di transazioni saranno definiti in XEM ma potranno essere scambiati per XYM (o per il token di un’altra subChain) grazie ad un liquidity provider.

L’affermazione della creator economy ha determinato l'aumento dell’uso della blockchain per lo scambio di altri tipi di beni oltre ai semplici identificativi crittografici. In particolare, gli NTF ed i collezionabili digitali hanno dato la possibilità agli artisti di utilizzare modelli di vendita diretta ai fan. Ciononostante, l’immagazzinamento dei dati resta oggi un problema in molte chain in quanto i contenuti vengono raramente salvati *on-chain*. Lo standard più comunemente utilizzato in Ethereum, “ERC-721”, non pone restrizioni riguardo dove il creatore debba immagazzinare i dati (cioè il file audio, l’immagine o il video). Nonostante l’affermazione del *permaweb* [2]_ e dei servizi di storage decentralizzati [3]_, abbiano fornito una soluzione appropriata al problema della permanenza dei dati, la separazione del dato dal token stesso causa una debole garanzia di proprietà introducendo il rischio che diversi token facciano riferimento allo stesso dato o che il dato immagazzinato venga modificato senza permesso.

Una soluzione a questo problema può essere una serie di subChain dedicate all’immagazzinamento dei contenuti, in cui i mosaici sono una rappresentazione di un dato file. I potenziali acquirenti e le dApp possono generare prove di validità per un determinato contenuto che ne dimostrino sia l’autenticità che la provenienza. Una volta effettuato l’acquisto, una prova di validità ed un token potranno consentire di decifrare l’effettivo dato. Una soluzione più semplice potrebbero essere subChains dedicate che facciano da ponte verso fornitori decentralizzati di storage, consentendo ai nodi di fungere a fornitori di storage dedicati e di essere remunerati per questo servizio. La persistenza del dato viene quindi a dipendere dal funzionamento della chain, piuttosto che da servizi eterogenei.

Mentre il progetto ibrido iniziale di **Symbol** vedeva l’interazione di chain pubbliche e private attraverso scambi atomici, l’introduzione delle subChain fornisce una soluzione più elegante al problema della persistenza dei dati e di reti dedicate a specifici contenuti. Il potenziale nascosto della blockchain pubblica è uno stato condiviso globale di cui ogni utente è amministratore [4]_, ma le limitazioni pratiche sia fisiche che tecnologiche rendono questo obiettivo difficile per una singola blockchain pubblica. Dando la possibilità agli operatori di fornire servizi diversi sulla base della richiesta del mercato e delle caratteristiche di ogni nodo, il throughput della rete diventa additivo invece che dipendere dal singolo componente del sistema.

Il futuro di **Symbol** lo vede come un crocevia di livelli intercambiabili al centro di un universo di chain su misura senza vincoli di scalabilità globale. Le subChain sono il primo passo in questa direzione.

La struttura del sistema e le corporazioni
******************************************

Nella teoria aziendale, l’innovazione dirompente è definita come un'innovazione che crea un nuovo mercato e una rete di valori e alla fine, sostituisce le aziende, i prodotti e le alleanze leader di mercato consolidati [5]_. Queste innovazioni tendono ad essere prodotte da piccoli gruppi di individui auto-organizzati [6]_, piuttosto che da grandi gruppi o corporazioni esistenti. Il processo di rottura con il passato richiede più tempo rispetto all'approccio convenzionale, ed il rischio di fallimento è maggiore. Tuttavia, in caso di successo, una volta implementate queste tecnologie tendono a diffondersi più velocemente e ad avere un impatto maggiore di altre.

È risaputo che le strutture centralizzate sono spesso in contrasto con lo sviluppo di sistemi decentralizzati. L'introduzione di Bitcoin è stata una risposta diretta ad i sistematici fallimenti di un'autorità centralizzata, e da allora la distribuzione del potere è rimasta un obiettivo di progettazione di tutte le reti blockchain fino ad oggi.

.. sidebar:: Il volano dell'ecosistema

    .. figure:: ../../resources/images/handbook/Symbol\ Venn\ Diagram\ 1.png
        :align: center
        :width: 600px

Indipendentemente da ciò, la centralizzazione si verifica naturalmente dopo un periodo di tempo [7]_, sia come conseguenza della specializzazione che come conseguenza dell’economia di scala.

Questo si è dimostrato vero sia per il proof-of-work (attraverso le mining pool, concentrazione di hashrate ed hardware specializzati) che per il proof-of-stake (attraverso la concentrazione di ricchezza e concentrazione dei validatori nell’infrastruttura).

Pertanto, la resilienza della blockchain deriva in gran parte dalla garanzia che le parti dell'ecosistema siano incentivate nella collaborazione, piuttosto che nello scontro.
Questa è la base della teoria dei giochi e la sua padronanza è la chiave per il successo della progettazione di sistemi.

In **Symbol**, collaboriamo creando di *corporazione*. Tradizionalmente, una corporazione è un gruppo auto-organizzato di individui, o di società che lavorano insieme per raggiungere un missione comune. Le corporazioni non sono un concetto nuovo nel mondo delle criptovalute: organizzazioni non profit come la Ethereum Foundation e la Tezos Foundation, possono essere informalmente classificate come corporazioni, o anche come organizzazioni autonome decentralizzate (DAO), o come gruppi di lavoro o ancora, come gruppi di ricerca informali.
Flashbots [8]_ - l'organizzazione di ricerca e sviluppo che si concentra sul valore estraibile dai minatori (MEV - miner-extractable value) nella DeFi - ricalca il gruppo di hacker pirati, una corporazione informale, basata sulla cooperazione tra pirati. Si possono anche osservare corporazioni esterne alle criptovalute: Valve, una società multimiliardaria di hardware ed intrattenimento, segue un modello non gerarchico ("Flatland") con nessun middle management o leadership formale. [9]_

Oggi, possiamo osservare tre tipi di corporazioni formatesi naturalmente: corporazione infrastrutturale (nodi e loro operatori umani); corporazione del protocollo (sviluppatori e architetti di sistema); ed utenti (dApp e individui). Le corporazioni, sono ampiamente incentivate a mettere il successo collettivo al di sopra dei propri desideri individuali:

* I nodi dipendono da sviluppatori e architetti di sistema per progettare, sviluppare e distribuire nuove funzionalità in-chain; e dApp per innovare ed attrarre nuovi utenti (e quindi, generare commissioni di rete);
* Gli sviluppatori, fanno affidamento sui nodi per mantenere attivo un sano consenso di rete attraverso aggiornamenti di sistema; e sulle dApp, per creare prodotti innovativi che monetizzano la chain pubblica e gli usi della tecnologia stessa.
* Le dApp dipendono dagli sviluppatori per realizzare nuove funzionalità che consentano loro di costruire prodotti innovativi per attirare i clienti; e dai nodi, per fornire l’importante scopo a livello infrastrutturale per mantenere stabile la rete.

Al centro di tutto ciò c'è l'ambasciatore, la voce della corporazione. Gli ambasciatori sono rapidamente identificati dalle loro capacità di comunicazione e relazione. Essi, lavorano per realizzare il coordinamento della community e difendono le idee delle stesse , le quali vengono rappresentate dagli ambasciatori stessi. Essi sono spesso traduttori, scrittori ed educatori - in alcuni protocolli, sono "rappresentanti dell'ecosistema"; in altri, "coordinatori di rete". In **Symbol**, gli ambasciatori possono essere sia eletti che finanziati attraverso il “delegated harvesting”. Se, in qualsiasi momento, le community sentono che i loro ambasciatori eletti non stanno funzionando,le community stesse, possono delegare ad un nuovo ambasciatore.

Parallelamente al delegated harvesting, c'è un altro concetto che può essere applicato al sistema a grande scala: il finanziamento quadratico.
Proposto per la prima volta in Liberal Radicalism da Buterin, Hitzing e Weyl [10]_, il finanziamento quadratico cerca di applicare il concetto di voto quadratico al finanziamento dei beni pubblici.

In economia, un bene pubblico è definito come un bene non escludibile e che non genera rivalità nel consumo.

Non escludibile significa che un individuo non può esserne escluso dall'uso; la mancanza di rivalità significa che l'uso da parte di un individuo non riduce la disponibilità del bene per gli altri.

Alcuni esempi comunemente citati di beni pubblici sono il software open source (come protocolli blockchain; Internet; o sistemi operativi); le informazioni gratuite (come newsletter; podcast; o documentazione tecnica); e servizi gratuiti (come la televisione pubblica e la radio).

.. sidebar:: Quadratic funding

    .. figure:: ../../resources/images/handbook/Syndicate\ Matching\ dark.png
        :align: center
        :width: 600px

In **Symbol**, il finanziamento quadratico è in grado di risolvere una sfida chiave che abbiamo nel finanziamento di progetti: come si fa determinare da quale progetto trarrebbe beneficio il maggior numero di individui? Il finanziamento quadratico, permette di raggiungere questo obiettivo, consentendo agli individui di comprare ‘tramite il loro voto' quale sia il prossimo progetto ad essere finanziato e permette di amplificare le donazioni tramite una corporazione dedicata al finanziamento dei beni pubblici. Il peso di ciascuno decresce all’aumentare del numero di voti, il che aiuta a decentralizzare il potere allontanandolo da società di capitali di rischio, da grandi balene e da intermediari del potere centrale. in sintesi, il numero dei contributi individuali conta più dell'importo finanziato da un individuo.

Pensiamo che le corporazioni siano una potente forma di auto-organizzazione che hanno successo perché incentivano i partecipanti a mettere i successi collettivi al di sopra dei propri, applicando al tempo stesso un impegno per gli stessi principi che hanno reso la blockchain di successo: rivoluzione, decentralizzazione e trasparenza. Insieme ai finanziamenti quadratici, pensiamo che le corporazioni possano dare vita ad una comunità vibrante e auto-organizzata di contributori e collaboratori tutti allineati in una missione comune: **Symbol**.

Il codice del pirata spaziale
*****************************

Anche nel sistema più illegale c'era un accordo di base per garantirne il funzionamento. C'è un onore tra i ladri. I pirati, nonostante fossero dei furfanti, sono riusciti a trovare un modo per ridurre i conflitti tra loro massimizzando i profitti. Usavano un sistema democratico di elezione ed un codice, che stabiliva le regole di funzionamento prima di ogni viaggio: la divisione del bottino; la divisione del lavoro; e la divisione delle responsabilità.
Loro stabilivano le attività proibite e le relative punizioni; le norme per la sicurezza della nave e le norme di sicurezza per l'equipaggio; includendo incentivi e bonus per i membri produttivi.

Prima di salpare, i pirati scrivevano i loro articoli mentre eleggevano un capitano ed un quartiermastro. Il capitano non era un capo ed era al servizio del piacere dell'equipaggio - in qualsiasi momento poteva essere sostituito da un voto di maggioranza o da un ammutinamento. Ci si aspettava che i capitani, nel complesso, fossero leader audaci e decisi che guidassero l'equipaggio su chi e cosa saccheggiare; come sfuggire alle autorità o affrontare un attacco. I quartiermastri rappresentavano gli interessi dell'equipaggio: mantenevano l'ordine; risolvevano i conflitti tra i membri dell'equipaggio; e determinavano la quantità di cibo e bevande distribuiti a ciascun membro dell'equipaggio. Tutti gli uomini prestavano il consenso a questi articoli e partecipavano all’elezione dei loro capi. Se un uomo non era d'accordo né con il contratto, né con l'equipaggio, era libero di andarsene di propria spontanea volontà.

Nonostante non avessero un ente governativo per imporre o sostenere in altro modo accordi di cooperazione tra loro, i pirati sono riusciti a mantenere un'armonia comune quanto le loro controparti legali. Ciò era in parte dovuto alla loro trasparenza in tutte le cose, dal bottino che raccoglievano alla distribuzione della ricchezza; in parte a causa del loro equipaggio, che ha messo i successi collettivi della nave al di sopra delle proprie esigenze; e in parte a causa del loro impegno per l'uguaglianza e il cameratismo, perché una nave valeva solo quanto la somma delle sue parti. Riteniamo che un membro della corporazione dedicato a **Symbol** dovrebbe seguire una struttura vagamente ispirata alla cultura dei pirati, ma definita da una struttura aziendale non gerarchica.

Questi che seguono, sono alcuni dei punti dell’accordo che proponiamo: il giuramento che prestiamo prima di intraprendere il prossimo viaggio di **Symbol**. Sebbene qualsiasi articolo richieda il consenso e, soprattutto, l'approvazione dell'equipaggio, riteniamo che sia utile stabilire alcune linee guida generali.

* Crediamo nella **trasparenza**. La trasparenza crea fiducia; ci ritiene responsabili; e ci consente di portare avanti il ​​nostro ecosistema. Operiamo in piena vista, assicurando che la nostra comunità abbia piena visibilità del nostro lavoro e che il nostro team possa imparare dai propri errori. Condividiamo le informazioni in modo aperto, ampio e deliberato sulle cose che abbiamo appreso; errori che abbiamo commesso; idee a cui abbiamo pensato e su cui stiamo lavorando. Quasi ogni documento è completamente aperto a chiunque possa leggerlo e commentarlo; ogni decisione strategica; ogni analisi; ogni test di prodotto o funzionalità. Utilizziamo strumenti che si allineano con i nostri valori (Git, Discord) e consentono all'ecosistema di lavorare al nostro fianco.

* Crediamo nella **libertà finanziaria**. Operiamo con un approccio alla compensazione basato su formule immediatamente visibili a tutti. Abbiniamo stipendi competitivi e equivalenti al mercato con un generoso pacchetto di benefit. Riteniamo che ogni membro dovrebbe avere un proprio tornaconto in ciò che stiamo costruendo, motivo per cui includiamo un programma di maturazione di token in tutti i pacchetti retributivi.

* Siamo una **squadra di campioni**. Non siamo una famiglia, scegliamo i nostri giocatori. Abbiamo grandi aspettative per prestazioni e risultati. Se qualcuno non sta alzando la media, lo aiutiamo affiancandolo e facendolo crescere. Abbiamo una cultura del lavoro intensa, e spesso caotica, ci troviamo regolarmente al di fuori delle nostre zone di comfort, il che ci consente di crescere, sia come individui che come team. Ci aspettiamo che il nostro team si guadagni il posto sulla nave e che lo mantenga.

* Cerchiamo **rockstar**. Adottiamo misure straordinarie per assicurarci di avere i migliori talenti in ogni posizione. Preferiamo le persone che sono "a forma di T": generalisti (altamente qualificati in un'ampia gamma di argomenti) ma anche esperti (tra i migliori nel loro campo all'interno di una disciplina ristretta). Lavoriamo solo al fianco di persone più capaci di noi, non di meno. Crediamo che il talento sia il fattore più importante del nostro successo e ci aspettiamo che l'intero equipaggio si assuma la responsabilità di aumentare la media del team. Prestazioni insignificanti vengono concluse con un generoso trattamento di fine rapporto.

* Siamo **concentrati**. La missione di **Symbol** è rivoluzionare i mercati e creare pari opportunità. Siamo una squadra incentrata sullo sviluppo e sull’ingegneria, prima di tutto: se la tua esperienza non è nella scrittura di codice, allora ogni briciola di energia che hai, deve essere impiegata nella comprensione della tecnologia alla base dei nostri sistemi.

In ogni occasione, serviamo **Symbol**, prima di tutto.

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
