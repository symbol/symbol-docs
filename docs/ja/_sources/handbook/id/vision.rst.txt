###############
Vision: Symbol²
###############

.. rst-class:: h1centered

   Refleksi Dari Bajak Laut Luar Angkasa

.. figure:: ../../resources/images/handbook/ship\ cover\ blank.png
    :align: center
    :width: 600px

    Versi 1.0

Kata pengantar
**************

Sebelum kita memulai, sangat penting untuk menentukan jangkar. Sementara tujuan atau misi dapat berubah dengan adanya kapten atau pasang surut, jangkar adalah apa yang membuat kita tetap membumi. Di saat-saat kekacauan, frustrasi, atau ketidakpastian, seseorang selalu dapat kembali ke jangkar mereka untuk meluruskan kembali mengapa mereka ada di sini.

Jangkar kami adalah, dan akan selalu, **Symbol**. Sama seperti proyek-proyek sebelum kami (dan banyak yang akan menyusul), kami percaya blockchain sebagai teknologi yang paling cocok untuk menggerakkan *ekonomi baru* - dan **Symbol** adalah kontribusi kami untuk pengejaran itu. Sebagai protokol, ini dicirikan oleh algoritme konsensus yang berupaya memberi penghargaan kepada *pengguna* rantai secara istimewa daripada penimbun kekayaan. Sebagai sebuah sistem, ia dicirikan oleh arsitektur yang memperluas fungsionalitas melalui plugin tingkat sistem, berbeda dengan opcode dalam mesin virtual deterministik [1]_. Meskipun sederhana, kedua karakteristik ini membantu menentukan filosofi desain kami - yaitu, pendekatan berorientasi layanan yang mengutamakan pengguna. Kami percaya blockchain sebagai teknologi yang berpusat pada manusia, dan semua yang kami coba lakukan dengan **Symbol** harus menggarisbawahi hal ini.

Dokumen ini tidak dimaksudkan sebagai whitepaper; sebuah litepaper (kertas kecil); dokumen bisnis atau bahkan manifesto. Teknologi yang berpusat pada manusia dikembangkan oleh *penggunanya*, dan kami bermaksud untuk mendefinisikan, merancang, dan mengembangkan **Symbol** tepat di samping komunitas. Alih-alih, anggap ini sebagai bintang utara yang dapat kita gunakan untuk menavigasi jalan ke depan - karena meskipun jangkar mungkin membuat kita tetap membumi, rasi bintang itulah yang membantu kita berlayar ke daratan baru.

~GHJ

Tentang Masa Depan Symbol dan NIS1
**********************************

Inti dari setiap protokol yang sukses adalah gangguan, baik itu mengganggu infrastruktur pembayaran (Bitcoin); mengganggu komputasi awan (Ethereum); mengganggu penyimpanan cloud (Arweave); atau mengganggu jaringan nirkabel (Helium). Dalam hal ini, **Symbol** berusaha untuk mengganggu *ekonomi* baik yang sudah ada maupun yang sedang berkembang - dengan menyediakan pasar yang efisien untuk operasi mereka yang memungkinkan pengguna untuk mendefinisikan dan menukar *nilai* sebagai token digital.

Pasar-pasar ini diwakili oleh rantai kecil yang dibuat khusus (subChain) yang ditambatkan ke lapisan penyelesaian (mainChain) melalui interkoneksi sentris roll-up yang sebagian didasarkan pada bukti tanpa pengetahuan. Setiap subRantai diwakili oleh token utilitasnya sendiri (mosaik) yang diberikan kepada node yang menghasilkan blok baru (pemanen blok). Token utilitas ini dapat dipertaruhkan (membiarkan node bertindak sebagai penyedia likuiditas) atau diperdagangkan untuk barang dan jasa (melalui aplikasi terdesentralisasi atau pertukaran terdesentralisasi).

Penyedia likuiditas adalah jenis layanan baru yang dapat disediakan oleh sebuah simpul, di mana ia menerima pertukaran satu mosaik dengan yang lain (pasangan token). Jika sebuah node memilih untuk bertindak sebagai penyedia likuiditas, ia akan diminta untuk mempertahankan kepemilikan setidaknya satu token subChain lain di samping XYM-nya. Penyedia likuiditas yang efisien akan mempertahankan beragam aset dan pasangan. Dengan demikian, sebuah node dapat memfasilitasi permintaan swap (jenis transaksi baru) yang menghasilkan biaya tambahan.

Agar transaksi diselesaikan di lapisan penyelesaian, token utilitas mainChain (XYM) diperlukan. Semua node dari subRantai tertentu diharuskan untuk menjaga keseimbangan XYM untuk mengambil bagian dalam proses roll-up (dan dengan demikian berbagi dalam distribusi hadiah blok). Node dapat memilih untuk berspesialisasi dalam serangkaian transaksi tertentu (seperti bukti validitas atau stablecoin). Orang lain mungkin mendelegasikan sebagai gantinya ke sindikat - sekelompok node yang diatur yang dialokasikan ke satu set subRantai berdasarkan permintaan jaringan saat ini.

Salah satu subRantai pertama yang direncanakan untuk diluncurkan di **Symbol** adalah NIS1 dan token aslinya XEM. Di samping NIS1 dua konsep baru - royalti dan pajak - akan diperkenalkan. Diadaptasi dari fitur retribusi, royalti memungkinkan persentase penjualan token tertentu diarahkan ke akun setiap kali ditransfer; sedangkan pajak adalah biaya tambahan yang ditambahkan di atas transfer. Kedua jenis transaksi akan didenominasi dalam XEM dan dapat ditukar dengan XYM (atau token subRantai lainnya) di penyedia likuiditas.

Munculnya ekonomi pencipta telah melihat teknologi blockchain semakin digunakan untuk memperdagangkan jenis nilai kompleks lainnya di luar pengidentifikasi kriptografi sederhana. Secara khusus, NFT dan koleksi digital telah memberdayakan sekelompok artis untuk terlibat dalam model monetisasi langsung ke penggemar. Meskipun demikian, keabadian data tetap menjadi masalah di sebagian besar rantai saat ini karena konten jarang disimpan di rantai. Standar yang paling umum digunakan di Ethereum, “ERC-721”, tidak membatasi tempat penerbit menyimpan data yang direferensikan (yaitu file audio, gambar, atau video). Meskipun munculnya permaweb [2]_ dan layanan penyimpanan terdesentralisasi [3]_ telah memberikan solusi yang tepat untuk masalah permanensi data, pemisahan dari token itu sendiri memberikan jaminan kepemilikan yang lebih lemah dan menimbulkan risiko bahwa beberapa token dapat mengklaim data yang sama atau data yang disimpan berubah tanpa izin.

Salah satu solusi untuk dilema ini dapat berupa serangkaian subRantai khusus untuk penyimpanan konten, di mana mosaik adalah representasi dari file data tertentu. Calon pembeli dan dApps dapat menghasilkan bukti validitas untuk konten tertentu yang membuktikan keaslian dan asalnya di tempat penjualan. Setelah pembelian, bukti validitas dan token dapat memungkinkan dekripsi data aktual itu sendiri. Solusi yang lebih ringan mungkin melihat subChain khusus yang menjembatani ke penyedia penyimpanan terdesentralisasi sebagai gantinya, memungkinkan node untuk bertindak sebagai penyedia penyimpanan khusus dan diberi imbalan yang sesuai untuk layanan mereka. Oleh karena itu, ketekunan data digabungkan dengan keberhasilan rantai penerbitan, versus ketergantungan pada banyak layanan.

Sementara desain hybrid awal Symbol melihat interaksi rantai publik dan pribadi melalui pertukaran atom, pengenalan subChain memungkinkan solusi yang lebih elegan untuk masalah keabadian data dan jaringan khusus konten. Potensi tersembunyi dari blockchain publik adalah keadaan global bersama di mana setiap pengguna adalah pengguna root [4]_, tetapi keterbatasan praktis dalam fisika dan teknologi membuat hal ini sulit dicapai dengan satu rantai publik. Dengan memberdayakan operator untuk melayani konten berdasarkan permintaan pasar dan simpati mesin, keluaran jaringan menjadi tambahan daripada bergantung pada satu bagian dari sistem.

Masa depan **Symbol** membayangkannya sebagai hub dan lapisan pertukaran di pusat alam semesta rantai yang dipesan lebih dahulu tanpa kendala skalabilitas global. subChains adalah langkah pertama kami menuju ini.

Tentang Sindikat dan Desain Sistem
**********************************

Dalam teori bisnis, disrupsi didefinisikan sebagai inovasi yang menciptakan pasar baru dan jaringan nilai dan pada akhirnya menggantikan perusahaan, produk, dan aliansi pemimpin pasar yang sudah mapan [5]_. Inovasi-inovasi ini cenderung dihasilkan oleh tim kecil yang terdiri dari individu-individu yang terorganisir sendiri [6]_, daripada tim besar atau perusahaan yang sudah ada. Proses disrupsi memakan waktu lebih lama dibandingkan dengan pendekatan konvensional, dan risiko kegagalan lebih tinggi. Namun demikian, jika berhasil, begitu diterapkan, teknologi ini cenderung menyebar lebih cepat dan memiliki dampak yang lebih besar daripada yang lain.

Sudah diketahui bahwa struktur terpusat sering bertentangan dengan pengembangan sistem terdesentralisasi. Pengenalan Bitcoin sebagai tanggapan langsung terhadap kegagalan sistematis otoritas terpusat, dan sejak itu distribusi kekuasaan tetap menjadi tujuan desain semua jaringan blockchain hingga saat ini.

.. sidebar:: Roda gila ekosistem

    .. figure:: ../../resources/images/handbook/Symbol\ Venn\ Diagram\ 1.png
        :align: center
        :width: 600px

Terlepas dari itu, sentralisasi secara alami terjadi setelah periode [7]_ waktu tertentu, baik sebagai produk sampingan dari spesialisasi atau skala ekonomi. Ini telah terbukti benar baik dalam proof-of-work (melalui kumpulan penambangan, konsentrasi hashrate, dan perangkat keras khusus) dan proof-of-stake (melalui konsentrasi kekayaan dan konsentrasi infrastruktur validator). Dengan demikian, ketahanan dalam blockchain sebagian besar berasal dari memastikan pihak-pihak dalam ekosistem diberi insentif untuk berkolaborasi daripada berkolusi. Ini adalah dasar dari teori permainan dan penguasaan ini adalah kunci keberhasilan desain sistem.

Di **Symbol**, kami mencapai kolaborasi melalui konsep *Sindikat*. Secara tradisional, sindikat adalah kelompok individu, perusahaan atau perusahaan yang mengatur diri sendiri yang bekerja sama untuk mencapai misi bersama. Sindikat bukanlah konsep baru dalam cryptocurrency - organisasi nirlaba seperti Ethereum Foundation dan Tezos Foundation dapat secara informal diklasifikasikan sebagai sindikat; serta organisasi otonom terdesentralisasi (DAO) dan kelompok kerja atau penelitian informal. Flashbots [8]_ - organisasi penelitian dan pengembangan yang berfokus pada miner-extractable value (MEV) di DeFi - mengikuti kelompok peretas bajak laut, sebuah sindikat informal yang berbasis pada koperasi bajak laut. Sindikat bahkan dapat diamati di luar cryptocurrency: Valve, perusahaan hiburan dan perangkat keras multi-miliar dolar mengikuti desain non-hierarkis (“Flatland”) tanpa manajemen menengah atau kepemimpinan formal [9]_.

Hari ini, kita dapat mengamati tiga sindikat yang terbentuk secara alami: sindikat infrastruktur (node ​​dan operator manusianya); sindikat protokol (pengembang dan arsitek sistem); dan sindikat pengguna (dApps dan individu). Sindikat sebagian besar diberi insentif untuk menempatkan kesuksesan kolektif rantai di atas keinginan individu mereka sendiri:

* Node bergantung pada pengembang dan arsitek sistem untuk merancang, mengembangkan, dan menerapkan fungsionalitas baru secara on-chain; dan dApps untuk berinovasi untuk menarik pengguna baru (dan dengan demikian, menghasilkan biaya jaringan);
* Pengembang bergantung pada node untuk secara aktif memelihara konsensus jaringan yang sehat melalui peningkatan sistem; dan di dApps untuk membangun produk inovatif yang memonetisasi rantai publik dan memamerkan sistem;;
* dApps bergantung pada pengembang untuk menghadirkan fungsionalitas baru yang memungkinkan mereka membangun produk inovatif untuk menarik pelanggan; dan node untuk menyediakan infrastruktur penting misi yang menjaga jaringan tetap stabil.

Inti dari ini adalah duta besar - suara sindikat. Duta dengan cepat dikenali dari keterampilan komunikasi dan hubungan mereka. Mereka bekerja untuk mewujudkan koordinasi kekacauan dan memperjuangkan ide-ide komunitas perwakilan mereka.

Mereka sering menjadi penerjemah, penulis, dan pendidik - dalam beberapa protokol, mereka adalah 'perwakilan ekosistem'; di tempat lain, 'koordinator jaringan'. Di Symbol, duta besar dapat dipilih dan dibiayai melalui pendelegasian panen. Jika, pada suatu saat, komunitas merasa bahwa duta besar yang mereka pilih tidak tampil, mereka dapat mendelegasikan kepada duta besar yang baru.

Sejalan dengan pemanenan yang didelegasikan, ada konsep lain yang dapat diterapkan pada sistem secara luas: pendanaan kuadratik. Pertama kali diusulkan dalam Liberal Radicalism oleh Buterin, Hitzing dan Weyl [10]_, pendanaan kuadratik berusaha menerapkan konsep pemungutan suara kuadratik pada pendanaan barang publik. Dalam ilmu ekonomi, barang publik didefinisikan sebagai barang yang bersifat non-excludable dan non-rivalrous. Tidak dapat dikecualikan berarti bahwa seseorang tidak dapat dikecualikan dari penggunaan; dan non-rivalrous berarti bahwa penggunaan oleh satu individu tidak mengurangi ketersediaan barang untuk orang lain. Beberapa contoh barang publik yang sering dirujuk adalah open-source soware (seperti protokol blockchain; internet; atau sistem operasi); pendidikan gratis (seperti buletin; podcast; atau dokumentasi teknis); dan layanan gratis (seperti televisi dan radio publik).

.. sidebar:: Quadratic funding

    .. figure:: ../../resources/images/handbook/Syndicate\ Matching\ dark.png
        :align: center
        :width: 600px

Di **Symbol**, pendanaan kuadrat mampu memecahkan tantangan utama yang kami miliki dalam pembiayaan proyek: bagaimana Anda menentukan proyek mana yang akan menguntungkan sebagian besar individu? Ini mencapai ini dengan memungkinkan individu untuk 'membeli untuk suara mereka' pada proyek apa yang harus didanai selanjutnya dan memperkuat donasi dengan sindikat yang cocok yang didedikasikan untuk pendanaan barang publik. Ada pengembalian yang semakin berkurang untuk suara tambahan, yang membantu mendesentralisasikan kekuasaan dari perusahaan modal ventura, paus besar, dan pialang kekuasaan pusat. Singkatnya, jumlah kontribusi individu lebih penting daripada jumlah total yang didanai oleh individu.

Kami pikir sindikat adalah bentuk organisasi mandiri yang kuat yang berhasil karena mereka memberi insentif kepada peserta untuk menempatkan kesuksesan kolektif di atas kesuksesan mereka sendiri, sambil menegakkan komitmen pada prinsip yang sama yang membuat blockchain berhasil: gangguan, desentralisasi, dan transparansi. Dipasangkan dengan pendanaan kuadrat, kami pikir sindikat memberdayakan komunitas kontributor dan kolaborator yang dinamis dan mandiri yang semuanya selaras dalam misi bersama: **Symbol**.

Kode Bajak Laut Luar Angkasa
****************************

Bahkan dalam sistem yang paling tanpa hukum pun ada kesepakatan umum untuk pengoperasiannya. Ada kehormatan di antara pencuri. Bajak laut, meskipun bajingan, berhasil menemukan cara untuk mengurangi konflik di antara mereka sendiri sambil memaksimalkan keuntungan. Mereka menggunakan sistem pemilihan demokratis dan piagam yang menetapkan aturan operasi sebelum pelayaran apa pun: pembagian jarahan; pembagian kerja; dan pembagian tanggung jawab. Mereka menguraikan kegiatan yang dilarang dan hukumannya; aturan untuk keselamatan kapal dan awak; serta insentif dan bonus bagi anggota produktif.

Sebelum berlayar, bajak laut menulis artikel mereka bersamaan dengan pemilihan kapten dan quartermaster. Kapten bukan bos, dan melayani untuk kesenangan kru - kapan saja dia bisa digantikan oleh suara mayoritas atau pemberontakan. Kapten pada umumnya diharapkan menjadi pemimpin yang berani dan tegas yang memandu kru tentang siapa dan apa yang harus dijarah; bagaimana melarikan diri dari otoritas atau menghadapi serangan. Quartermasters mewakili kepentingan kru - mereka menjaga ketertiban; menyelesaikan konflik antara anggota kru; dan menentukan jumlah makanan dan minuman yang dibagikan kepada setiap awak kapal. Semua orang menyetujui pasal-pasal ini dan memilih pemimpin mereka. Jika seorang pria tidak setuju dengan kontrak atau kru, dia bebas untuk pergi atas kemauannya sendiri.

Meskipun tidak memiliki pemerintah untuk menegakkan atau mendukung pengaturan kerja sama di antara mereka, bajak laut berhasil mempertahankan harmoni yang biasa seperti rekan-rekan mereka yang sah. Ini sebagian karena transparansi mereka dalam segala hal, mulai dari jarahan yang mereka kumpulkan hingga distribusi kekayaan; sebagian karena awak mereka, yang menempatkan keberhasilan kolektif kapal di atas kebutuhan mereka sendiri; dan sebagian karena komitmen mereka terhadap kesetaraan dan persahabatan, karena sebuah kapal hanya sebaik jumlah bagian-bagiannya. Kami percaya bahwa sindikat yang didedikasikan untuk **Symbol** harus mengikuti kerangka kerja yang secara longgar terinspirasi oleh budaya bajak laut, namun ditentukan oleh struktur perusahaan yang tidak hierarkis.

Berikut ini adalah beberapa pasal kesepakatan yang kami usulkan - sumpah yang kami ambil sebelum melanjutkan perjalanan Symbol selanjutnya. Meskipun setiap artikel memerlukan konsensus, dan yang terpenting persetujuan kru, kami pikir akan sangat membantu untuk menetapkan beberapa pedoman umum.

* Kami menghargai transparansi. Transparansi membangun kepercayaan; membuat kami bertanggung jawab; dan memungkinkan kami untuk mendorong ekosistem kami ke depan. Kami beroperasi di depan mata, memastikan komunitas kami memiliki visibilitas penuh dari pekerjaan kami dan tim kami dapat belajar dari kesalahan kami sendiri. Kami berbagi informasi secara terbuka, luas, dan sengaja - tentang hal-hal yang telah kami pelajari; kesalahan yang kami buat; ide yang kami pikirkan dan yang sedang kami kerjakan. Hampir setiap dokumen sepenuhnya terbuka untuk dibaca dan dikomentari siapa saja; setiap keputusan strategi; setiap analisis; setiap produk atau uji fitur. Kami menggunakan alat yang selaras dengan nilai-nilai kami (Git, Discord) dan memberdayakan ekosistem untuk bekerja bersama kami.
* Kami percaya pada kebebasan finansial. Kami beroperasi dengan pendekatan berbasis formula untuk kompensasi yang langsung terlihat oleh semua orang. Kami memasangkan gaji yang kompetitif dan setara pasar dengan paket manfaat yang berlimpah. Kami percaya setiap anggota harus memiliki kepentingan dalam apa yang kami bangun, itulah sebabnya kami menyertakan jadwal token vesting di semua paket kompensasi.
* Kami adalah tim juara. Kami bukan keluarga - kami memilih pemain kami. Kami memiliki harapan yang tinggi untuk kinerja dan hasil. Jika seseorang tidak menaikkan rata-rata, kami secara aktif melatih dan mengembangkan. Kami memiliki budaya kerja yang intens, terkadang kacau dan secara teratur didorong keluar dari zona nyaman kami - yang memungkinkan kami untuk tumbuh, baik sebagai individu maupun tim. Kami berharap tim kami mendapatkan tempat duduk mereka di kapal dan mempertahankannya.
* Kami mencari bintang rock. Kami mengambil langkah-langkah luar biasa untuk memastikan kami memiliki talenta terbaik di setiap kursi. Kami menyukai orang-orang yang "Berbentuk T" - generalis (sangat terampil dalam berbagai hal berharga) tetapi juga ahli (di antara yang terbaik di bidangnya dalam disiplin yang sempit). Kami hanya bekerja bersama orang-orang yang lebih mampu dari diri kami sendiri, tidak kurang. Kami percaya bakat adalah faktor terpenting dalam kesuksesan kami, dan kami berharap seluruh kru bertanggung jawab dalam meningkatkan rata-rata tim. Kinerja yang luar biasa dipenuhi dengan paket pesangon yang murah hati.
* Kami fokus. Misi Symbol adalah untuk mengganggu pasar dan mewujudkan kesetaraan peluang. Kami adalah kru yang berfokus pada teknik, pertama dan terutama - jika keahlian Anda bukan dalam menulis kode, maka setiap energi yang Anda miliki harus digunakan untuk memahami teknologi di balik sistem kami.

Dalam segala hal, kami melayani **Symbol**, pertama dan terutama.

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
