###############
Vision: Symbol²
###############

.. rst-class:: h1centered

   Reflexiones de unos Piratas Espaciales

.. figure:: ../../resources/images/handbook/ship\ cover\ blank.png
    :align: center
    :width: 600px

    Versión 1.0

Traducción al español de Alexis Trujillo R. (NEM Show Host)

Prefacio
********

Antes de empezar, es importante hacerlo con la definición de lo que es *un Ancla*. Mientras el propósito de un viaje o la misión de una nave puedan cambiar con el capitán o las mareas, un ancla es lo que nos mantiene en un punto. En tiempos de confusión, frustración o incertidumbre, siempre podremos ver dónde tiramos el ancla para ver qué nos mantiene firmes en un lugar.

Nuestra ancla es, y siempre será, **Symbol**. Al igual que los proyectos que nos precedieron (y los muchos que nos acompañan en el ecosistema), creemos que blockchain es la tecnología más adecuada para impulsar una nueva economía, y **Symbol** es nuestra contribución a esa cruzada. Como protocolo, exhibe un distintivo algoritmo de consenso que busca compensar preferentemente a los usuarios de una cadena por sobre los acaparadores de riqueza. Como sistema, se caracteriza por una arquitectura que amplía la funcionalidad a nivel de sistema, a diferencia de los códigos de programación determinista en una máquina virtual [1]_. Por simples que parezcan, estas dos características ayudan a definir nuestra filosofía de diseño, es decir, un enfoque primordial orientado a servir al usuario. Creemos que la cadena de bloques es una tecnología centrada en el ser humano, y todo lo que intentamos hacer con **Symbol** debe subrayar esto.

Este documento no pretende ser un documento técnico o de negocios, un *litepaper* o incluso un manifiesto. Después de todo, la tecnología centrada en la gente es desarrollada por sus usuarios, y tenemos la intención de definir, diseñar y desarrollar **Symbol** junto con la comunidad. En su lugar, debería apreciarse como una estrella polar que usemos para navegar por el camino a seguir ya que, aunque el ancla determina el punto desde donde partiremos, son las constelaciones las que rigen zarpar hacia nuevas tierras.

~GHJ

Sobre el futuro de Symbol y NIS1
********************************

En el centro de cualquier protocolo exitoso está la *disrupción*, ya sea que su acción sea irrumpir en la infraestructura de pagos (Bitcoin); hacerlo en la forma en que se maneja la nube de datos (Ethereum) o en el almacenamiento en ella (Arweave); o pretenderlo en las redes inalámbricas (Helio). En cuanto a esto, **Symbol** busca *disrumpir las economías*, tanto existentes como emergentes, proporcionando un mercado eficiente para su operación que permita a los usuarios definir e intercambiar valor por medio de tokens digitales.

Estos mercados están representados por pequeñas cadenas especialmente construidas (subChains) que están ancladas a la capa de liquidación (mainChain) a través de una interconexión centrada en el *roll-up* basada, en parte, en pruebas de conocimiento cero (ZKP). Cada subChain está representada por su propio token de utilidad (un mosaic) como recompensa a los nodos que producen nuevos bloques (cosechadoras de bloques). Estos tokens de utilidad pueden ser apostados, o *estaqueados*, (dejando que el nodo actúe como un proveedor de liquidez) o intercambiados por bienes y servicios (a través de aplicaciones o intercambios descentralizados).

La provisión de liquidez es un nuevo tipo de servicio que un nodo puede proporcionar, el cual permite el intercambio de un mosaic por otro (par de tokens). Si un nodo decide actuar como proveedor de liquidez, se le pedirá que mantenga la participación de al menos otro token subChain junto con el suyo propio, basado en XYM. Un proveedor de liquidez eficiente mantendrá una canasta diversa de activos y pares. Al hacerlo, un nodo podrá facilitar las solicitudes de intercambio, o *swaps* (un nuevo tipo de transacción) por los que se cobran tarifas adicionales.

Para que las transacciones se finalicen en la capa de liquidación, se requiere el token de utilidad en la mainChain (XYM). Todos los nodos de una subChain dada están obligados a mantener un equilibrio de XYM para participar en el proceso de acumulación (y por lo tanto compartir en una distribución de las recompensas de bloque). Los nodos pueden optar por especializarse en un conjunto específico de transacciones (como pruebas de validez o stablecoins). Otros podrían delegar en su lugar a un sindicato o *gremio*: un cúmulo orquestado de nodos que se asignan a un conjunto de subChains en función de la actual demanda de red.

Entre las primeras subChains planificadas para lanzarse en **Symbol** estarán NIS1 y su token nativo, XEM. Aunado a esta novedad de NSN1 se introducirán dos nuevos conceptos: *regalías* e *impuestos*. Adaptadas de la función de gravamen, las *regalías* permiten que un porcentaje de una determinada venta de tokens se dirija a una cuenta cada vez que se transfiere; mientras que los *impuestos* son una tarifa adicional agregada además de una transferencia. Ambos tipos de transacción se ejecutarán en XEM y se pueden intercambiar por XYM (u otros tokens subChain) en un proveedor de liquidez.

El auge de la economía de creadores ha visto la tecnología blockchain cada vez más utilizada para comerciar con otros tipos de valor complejo más allá de los simples identificadores criptográficos. En particular, los NFT y coleccionables digitales han empoderado a un conjunto de artistas y motivado a los fanáticos a participar en modelos de monetización directa. No obstante, la permanencia de los datos sigue siendo un problema en la mayoría de las cadenas hoy en día, ya que el contenido rara vez se almacena en la cadena. El estándar más utilizado en Ethereum, ERC-721, no impone restricciones sobre dónde almacenan los emisores los datos referenciados (es decir, un archivo de audio, imagen o video). Aunque el aumento de la *permaweb* [2]_ y los servicios de almacenamiento descentralizado [3]_ han proporcionado una solución adecuada al problema del almacenamiento de datos, la separación del token en sí proporciona garantías de propiedad más débiles e introduce el riesgo de que varios tokens puedan reclamar los mismos datos o los datos almacenados cambien de manera inadmisible.

Mientras que el diseño híbrido inicial de **Symbol** vio la interacción de cadenas públicas y privadas a través de intercambios atómicos, la introducción de subChains permite una solución más elegante al problema de la permanencia de datos y las redes específicas de contenido. El potencial oculto de las cadenas de bloques públicas es un estado global compartido donde cada usuario es un usuario raíz [4]_, pero las limitaciones prácticas tanto en la física como en la tecnología dificultan que pueda lograrse con una sola cadena pública. Al facultar a los operadores para dar servicio al contenido en función de la demanda del mercado y la “simpatía de la máquina”, el rendimiento de la red se vuelve sumatorio y redundante en lugar de depender de una sola pieza del sistema.

En el futuro, **Symbol** será el motor y capa de intercambio en el centro de un universo de cadenas hechas a la medida, sin restricciones de escalabilidad global. Las subChains son nuestro primer paso hacia esa nueva realidad.

## Sobre los Gremios y diseño del sistema

La teoría en los negocios usualmente define a la *disrupción* como la *innovación* que crea una nueva oportunidad de mercado y valor, y eventualmente desplaza a las empresas, productos y alianzas que lideran la tradición [5]_. Estas innovaciones tienden a ser producidas por pequeños equipos de individuos auto-organizados [6]_, en lugar de grandes equipos o corporaciones existentes. El proceso disruptivo toma más tiempo que el enfoque convencional y el riesgo de falla es mayor. Sin embargo, si tienen éxito una vez implementadas, estas tecnologías tienden a propagarse más rápido y tienen mayor impacto que otras.

Es bien sabido que las estructuras centralizadas a menudo están en contradicción con el desarrollo de sistemas descentralizados. La introducción de Bitcoin fue una respuesta directa a los fallos sistemáticos de una autoridad centralizada, y desde entonces la distribución del poder de decisión sobre el proceso ha seguido siendo objetivo clave de diseño en todas las redes blockchain hasta la fecha.

.. sidebar:: La rueda del ecosistema

    .. figure:: ../../resources/images/handbook/Symbol\ Venn\ Diagram\ 1.png
        :align: center
        :width: 600px

En cualquier caso, la centralización se produce naturalmente después de cierto período [7]_, ya sea como un subproducto de la especialización o las economías de escala. Esto ha ocurrido tanto en la prueba de trabajo -PoW- (a través de *pools* mineros, concentración de *hashrate* y *hardware* especializado) como en la prueba de participación -PoS- (por medio de la concentración de la riqueza y la concentración de la infraestructura del validador). Por lo tanto, la resiliencia en blockchain proviene en gran medida de garantizar que las partes en el ecosistema estén incentivadas para colaborar entre ellas en lugar de coludir o competir. Esta es la base de la teoría de juego y dominar cabalmente este concepto es clave para el éxito del diseño de sistemas.

En **Symbol**, logramos la colaboración a través del concepto de *Gremios*. Tradicionalmente, un sindicato -o gremio- es un grupo autoorganizado de individuos, corporaciones o empresas que trabajan juntos que se federan bajo  una misión común. Los gremios no son un concepto nuevo en criptomonedas. Las organizaciones sin fines de lucro como la Fundación Ethereum y la Fundación Tezos casi se pueden clasificar, informalmente, como sindicatos o quizás federaciones. Lo mismo aplica a organismos autónomos descentralizados (DAOs) y grupos informales de trabajo o investigación. Flashbots [8]_ - la organización de investigación y desarrollo centrada en el valor minero extraíble (MEV) en DeFi- sigue al colectivo de *hackers* piratas, un sindicato informal basado en la concepción de la cooperativa pirata. Los gremios incluso se pueden observar fuera del mundo de las criptomonedas: Valve, una multimillonaria compañía de entretenimiento y hardware, sigue un diseño no jerárquico (*Flatland*) sin gerencia intermedia o liderazgo formal [9]_.

Hoy en día, podemos observar tres gremios naturalmente formados: Los de Infraestructura (nodos y sus operadores humanos); de Protocolos (desarrolladores y arquitectos de sistemas); y de Usuarios (dApps e individuos). Su incentivo reside en gran medida en poner el éxito colectivo de la cadena por encima de sus propios deseos individuales:

* Los nodos (Infraestructura) dependen de los desarrolladores y arquitectos de sistemas para diseñar, desarrollar e implementar nuevas funcionalidades en cadena, y de las dApps para innovar con el fin de atraer a nuevos usuarios (y así, generar tarifas de red);
* Los desarrolladores (Protocolo) dependen de los nodos para mantener activamente un consenso de red saludable a través de actualizaciones del sistema, y a su vez de las dApps para construir productos innovadores que moneticen la cadena pública y muestren el sistema;
* Las dApps (Usuario) dependen de los desarrolladores para crear nuevas funcionalidades que les permitan crear productos innovadores y atraer clientes; y de los nodos para proporcionar una infraestructura de misión crítica que mantenga la red estable.

Para diferenciarnos de los gremios laborales, dirigidos por un presidente, la vocería que proponemos reside en un Embajador - la voz de los agremiados.

Los embajadores se identifican rápidamente por sus habilidades de comunicación y relaciones públicas. Trabajan para lograr la coordinación del caos y defender las ideas de sus comunidades representadas. A menudo son traductores, escritores y educadores - en algunos protocolos, son "representantes del ecosistema"; en otros, "coordinadores de redes". En **Symbol**, los embajadores pueden ser elegidos y financiados a través de la recolección delegada. Si, en algún momento, las comunidades sienten que sus embajadores electos no están cumpliendo su función, pueden delegarla a un nuevo representante.

Paralelamente a la cosecha delegada hay otro concepto que se puede aplicar al sistema en general: la financiación cuadrática. Propuesto por primera vez en el *radicalismo liberal* por Buterin, Hitzing y Weyl [10]_, la financiación cuadrática busca aplicar el concepto de voto cuadrático a la financiación de bienes públicos. En economía, un bien público se define como un bien que *no es excluible ni excluyente*. No excluible significa que un individuo no puede ser privado del uso; y no excluyente significa que el uso por un individuo no reduce la disponibilidad del bien para otros. Algunos ejemplos comúnmente referenciados de bienes públicos son el software de código abierto (como los protocolos blockchain, Internet o los sistemas operativos); educación gratuita (como boletines informativos, *podcasts* o documentación técnica); y servicios gratuitos (como la televisión y la radio públicas).

.. sidebar:: Quadratic funding

    .. figure:: ../../resources/images/handbook/Syndicate\ Matching\ dark.png
        :align: center
        :width: 600px

En **Symbol**, la metodología cuadrática es capaz de resolver un desafío vital que tenemos en la financiación de proyectos: ¿cómo se determina qué proyecto beneficiaría más a las personas? Esto se logra al permitir que las personas "adquieran su derecho a voto" sobre qué proyectos deben financiarse a continuación y amplifica las donaciones de contrapartida con un gremio dedicado a la financiación de bienes públicos. Hay rendimientos decrecientes para los votos adicionales, lo que ayuda a descentralizar el poder lejos de las empresas de capital de riesgo, las grandes -cripto- ballenas y los cabilderos del poder central. En resumen, el número de contribuciones individuales importa más que la cantidad total financiada por una persona.

Creemos que los gremios son una poderosa forma de autoorganización, que son exitosos porque incentivan a los participantes a poner los éxitos colectivos por encima de los suyos propios, al tiempo que hacen cumplir un compromiso con los mismos principios que hicieron que blockchain fuera novedoso: irrupción, descentralización y transparencia. Junto con la financiación cuadrática, creemos que los gremios empoderan a una comunidad vibrante y autoorganizada de contribuyentes y colaboradores que están alineados en una misión común: **Symbol**.

El Código del Pirata Espacial
*****************************

Incluso en el más anárquico de los sistemas había un acuerdo común para el funcionamiento. Hay un honor entre los ladrones. Los piratas, a pesar de ser rufianes, pudieron hallar una manera de reducir el conflicto interno y maximizar las ganancias. Utilizaron un sistema democrático de elección y una carta -*un Código*- que establecía las reglas de operación antes de cualquier viaje: divisiones para las tareas de saqueo, mantenimiento  y demás responsabilidades. Esbozaron las actividades prohibidas y sus castigos, normas de seguridad del buque y tripulación. Además establecieron incentivos y bonificaciones para los miembros productivos.

Antes de zarpar, los piratas escribían sus artículos junto a la elección de un capitán y un intendente. El capitán no era exactamente un jefe y estaba a la disposición de la tripulación. En cualquier momento podía ser reemplazado por un voto mayoritario o motín. En general, se esperaba que los capitanes fueran líderes audaces y decisivos que dirigieran a la tripulación en cuanto a qué o quién saquear, cómo escapar de las autoridades o lidiar con un ataque. Las intendencias representaban los intereses de la tripulación. Así mantuvieron el orden, resolvieron querellas entre los miembros del equipo y determinaron la cantidad de comida y bebida distribuida a cada miembro de la tripulación. Todos los hombres dieron su consentimiento a estos artículos y eligieron a sus líderes. Si un hombre no estaba de acuerdo con el contrato o con la tripulación, era libre de irse por su propia voluntad.

A pesar de no tener un gobierno central que pudiera aplicar, apoyar o regular de otra manera los acuerdos de cooperación entre ellos, los piratas lograron mantener una armonía tan común como la de sus contrapartes legales. Esto se debió en parte a la transparencia en todas las cosas, desde el botín que recogieron hasta la distribución de la riqueza; en parte debido a su tripulación, que puso los éxitos colectivos del barco por encima de sus propias necesidades; y en parte debido a su compromiso con la igualdad y la camaradería, porque un barco era tan bueno como la suma de sus partes. Creemos que un Gremio dedicado a **Symbol** debe seguir un esquema de funcionamiento inspirado libremente en la cultura pirata, pero que esté definido por una estructura corporativa no jerárquica.

Lo que sigue son algunos de nuestros artículos de acuerdo propuestos - el juramento que hacemos antes de botar la nave al próximo viaje de **Symbol**. Si bien cualquier artículo o acuerdo necesita consenso y, lo que es más importante, la aprobación de la tripulación, estimamos útil establecer algunas pautas generales.

* Valoramos la **transparencia**. La transparencia genera confianza; nos hace responsables y nos permite impulsar nuestro ecosistema hacia adelante. Operamos a plena vista, asegurando que nuestra comunidad tenga plena visibilidad de nuestro trabajo y que nuestro equipo pueda aprender de los errores propios. Compartimos abierta, deliberada y ampliamente información sobre cosas aprendidas, errores cometidos, ideas en las que hemos pensado y en las que estamos trabajando. Casi todos los documentos están completamente abiertos para que cualquiera pueda leer y comentar; cada decisión estratégica; cada análisis y prueba de producto o característica. Utilizamos herramientas alineadas con nuestros valores (Github, Discord) y empoderan al ecosistema para trabajar junto a nosotros.
* Creemos en la **libertad financiera**. Operamos con un enfoque basado en fórmulas para la compensación que es inmediatamente visible para todos. Ofrecemos salarios competitivos, equivalentes a los del mercado, con un generoso conjunto de ventajas. Creemos que cada miembro debe tener un interés personal en lo que estamos construyendo, por lo que incluimos un programa de inversión de tokens en todos los paquetes de compensación.
* Somos un **equipo campeón**. No somos una familia; elegimos a nuestros jugadores. Tenemos grandes expectativas de rendimiento y resultados. Si alguien no está trabajando para elevar el promedio, le entrenamos y desarrollamos activamente. Tenemos una cultura de trabajo intensa, a menudo caótica, y regularmente somos expulsados de nuestras zonas de confort, lo que nos permite crecer, tanto como individuos como en equipo. Esperamos que cada miembro de la tripulación se gane su puesto en el barco y lo mantenga.
* Buscamos **rockstars**. Tomamos medidas extraordinarias para asegurarnos de tener el mejor talento en cada posición de juego. Favorecemos a las personas que tienen "forma de T", generalistas (altamente calificados en un amplio conjunto de conocimiento valioso) pero también expertos (entre los mejores en su campo dentro de una comprometida disciplina). Solo trabajamos con gente más capaz que nosotros, no menos. Creemos que el talento es el factor más importante de nuestro éxito, y esperamos que todo el equipo asuma la creciente responsabilidad. El rendimiento ejemplar obtendrá una remuneración excepcional.
* Estamos **enfocados**. La misión de **Symbol** es disrumpir en los mercados y lograr la igualdad de oportunidades. Somos un equipo centrado en la ingeniería, en primer lugar -primordialmente- y si su experiencia no es en la programación de código, entonces cada unidad de energía que tiene debe ser puesta para comprender la tecnología detrás de nuestros sistemas.

En lo sucesivo y, ante todo, servimos a **Symbol**.

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
