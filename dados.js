let dados = [
    {
        titulo: "Killua Zoldyck",
        img : "https://i.pinimg.com/originals/34/31/c5/3431c5e19a2a91578064208f9d611486.jpg",
        anime : "Anime: Hunter X Hunter",
        descricao: "Killua Zoldyck é um dos personagens mais queridos e complexos do anime e mangá Hunter x Hunter. Nascido em uma das famílias de assassinos mais temidas do mundo, os Zoldyck, Killua foi criado desde a infância para seguir os passos de seus familiares. Apesar de suas habilidades letais, Killua esconde um coração puro e uma lealdade inabalável aos seus amigos.",
        habilidades: ["Habilidades: Nen (Hatsu), Velocidade, Agilidade, Eletricidade"],
        citacao: "Citação: Eu não quero mais ser um assassino.",
        link: "https://hunter-x-hunter.fandom.com/pt/wiki/Killua_Zaoldyeck"
    },
    {
        titulo: "Naruto Uzumaki",
        img : "https://pm1.aminoapps.com/7698/916e6c2f685f1d540ce326ef23de84e6b84f40b7r1-400-400v2_hq.jpg",
        anime : "Anime: Naruto",
        descricao: "Naruto Uzumaki é o protagonista do anime e mangá Naruto. Órfão desde pequeno e rejeitado por sua vila, Naruto sonha em se tornar Hokage, o líder da Vila da Folha, para ser reconhecido por todos. Com determinação e um espírito indomável, Naruto enfrenta diversos desafios ao longo de sua jornada.",
        habilidades: ["Habilidades: Ninjutsu, Taijutsu, Genjutsu, Chakra Kurama"],
        citacao: "Citação: Eu nunca vou desistir!" ,
        link: "https://naruto.fandom.com/pt/wiki/Naruto_Uzumaki"
    },
    {
        titulo: "Asta",
        img : "https://i.pinimg.com/736x/b0/39/60/b03960076de4432dabb24d1dc146f6f7.jpg",
        anime : "Anime: Black Clover",
        descricao: "Asta é o protagonista do anime e mangá Black Clover. Nascido em um mundo onde a magia é tudo, Asta é um dos poucos indivíduos que não possui nenhum poder mágico. Apesar disso, com sua espada anti-magia e um espírito inabalável, ele luta para se tornar o Rei Mago.",
        habilidades: ["Habilidades: Espada Anti-Magia, Força Física, Magia de Anti-Magia"],
        citacao: "Citação: Eu vou me tornar o Rei Mago!",
        link: "https://blackclover.fandom.com/pt-br/wiki/Asta"
    },
    {
        titulo: "Yuuki Asuna",
        img : "https://i.pinimg.com/736x/41/42/b8/4142b8d8d2127a531af857334f923d29.jpg",
        anime: "Anime: Sword Art Online",
        descricao: "Uma espadachim virtuosa e destemida, presa no mortal jogo de realidade virtual Sword Art Online. Conhecida por sua habilidade com a espada e sua liderança natural, Asuna se torna um pilar de esperança para os jogadores presos. Sua lealdade e determinação a tornam uma personagem icônica e inspiradora.",
        habilidades: ["Habilidades: Espada, Habilidade de jogo, Liderança"],
        citacao: "Citação: Eu vou te proteger, Kirito.",
        link: "https://swordartonline.fandom.com/pt-br/wiki/Asuna_Yuuki"
    },
    {
        titulo: "Misaki Ayuzawa",
        img : "https://images-ng.pixai.art/images/orig/7ec78e8c-74fa-49b7-a037-d2d502940d53",
        anime: "Anime: Maid Sama!",
        descricao: "Uma estudante exemplar e trabalhadora que esconde um segredo: ela trabalha como empregada em um café para homens, conciliando sua vida escolar com o trabalho árduo. Misaki é uma jovem forte e independente, que luta contra os estereótipos de gênero e busca construir um futuro melhor para si mesma e para seus amigos.",
        habilidades: ["Habilidades: Maestria em artes marciais, Inteligência, Trabalho duro"],
        citacao: "Citação: Eu não preciso de um príncipe encantado!",
        link: "https://maidsama.fandom.com/pt-br/wiki/Misaki_Ayuzawa"
    },
    {
        titulo: "Izuku Midoriya",
        img : "https://pbs.twimg.com/media/C-rdXwKVwAEXBl8.jpg",
        anime: "Anime: My Hero Academia",
        descricao: "Um jovem determinado e otimista que, apesar de nascer em um mundo de super-heróis, não possui nenhum poder. No entanto, seu sonho de se tornar um herói o leva a superar seus limites e a treinar arduamente para dominar o poder do One For All, tornando-se um símbolo de esperança para aqueles que não possuem individualidades.",
        habilidades: ["Habilidades: One For All", "Super Força, Agilidade"],
        citacao: "Citação: Eu vou me tornar o maior herói!",
        link: "https://myheroacademia.fandom.com/pt-br/wiki/Izuku_Midoriya"
    },
    {
        titulo: "Anime: Shinobu Kocho",
        img : "https://i.pinimg.com/736x/cf/35/7c/cf357c54f63869509db03e76e5527f0d.jpg",
        anime: "Anime: Kimetsu no Yaiba",
        descricao: "Uma Pilar dos Insetos, conhecida por sua beleza delicada e habilidade letal com sua katana venenosa. Shinobu é uma jovem inteligente e compassiva, que dedica sua vida a proteger a humanidade dos demônios, apesar de sua natureza gentil. Sua força interior e sua determinação a tornam uma personagem complexa e fascinante.",
        habilidades: ["Habilidades: Manipulação de veneno", "Espada", "Velocidade"],
        citacao: "Citação: A dor é necessária para se tornar forte.",
        link: "https://kimetsu-no-yaiba.fandom.com/pt-br/wiki/Shinobu_Kocho"
    },
    {
        titulo: "Levi Ackerman",
        img : "https://pbs.twimg.com/media/DDHE7JrV0AAt8Ra.jpg",
        anime: "Anime: Attack on Titan",
        descricao: "Um soldado experiente e implacável, conhecido por sua força sobre-humana, agilidade e habilidades excepcionais com o equipamento de manobra tridimensional. Levi é um líder nato, que inspira respeito e lealdade em seus companheiros, e que não hesita em sacrificar tudo para proteger aqueles que ama. Sua frieza e pragmatismo contrastam com sua profunda lealdade e seu senso de justiça.",
        habilidades: ["Habilidades: Combate corpo a corpo", "3D Maneuver Gear", "Liderança"],
        citacao: "Citação: Se você quer viver, lute.",
        link: "https://attackontitan.fandom.com/pt-br/wiki/Levi_Ackerman"
    },
    {
        titulo: "Goku",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylaNXJZAKt-vnhh066y8hqkydebmqt-ZIdg&s",
        anime: "Anime: Dragon Ball Z",
        descricao: "Um guerreiro Saiyajin com um coração puro e um apetite insaciável. Goku possui uma força incrível e uma capacidade de se transformar em formas mais poderosas, como o Super Saiyajin. Sua busca incessante por desafios e sua amizade com os outros são suas maiores características.",
        habilidades: ["Ki", "Transformações", "Combate corpo a corpo"],
        citacao: "Citação: A força vem da comida!",
        link: "https://dragonball.fandom.com/pt-br/wiki/Goku"
    },
    {
        titulo: "Sailor Moon",
        img: "https://img.wattpad.com/1b808f8a5260db0b0a3b60e3581b3840e457b86c/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f74393268572d562d65716e5978513d3d2d3636343537363438322e313536656337656333653431656633373439353931313236353635342e6a7067?s=fit&w=720&h=720",
        anime: "Anime: Sailor Moon",
        descricao: "Uma adolescente comum que se transforma na líder das Sailor Senshi, guerreiras que protegem a Terra do mal. Usando seus poderes mágicos e a força do amor, Sailor Moon luta para proteger seus amigos e o universo.",
        habilidades: ["Poderes mágicos", "Transformações", "Liderança"],
        citacao: "Citação: Na luz da lua, eu me transformarei!",
        link: "https://sailormoon.fandom.com/pt-br/wiki/Sailor_Moon"
    },
    {
        titulo: "Light Yagami - Kira",
        img: "https://64.media.tumblr.com/7f98427e6fb0cbe659fa8c69d7a2b781/1cc0cd4f6dc9b555-46/s400x600/2345a69fd0da4ecdb752745626df4f3173137370.jpg",
        anime: "Anime: Death Note",
        descricao: "Um jovem brilhante e ambicioso que encontra o Death Note, um caderno sobrenatural com o poder de matar qualquer pessoa cujo nome seja escrito nele. Obcecado com a ideia de criar um mundo sem crimes, Light se transforma em Kira, um vigilante que elimina criminosos. Sua inteligência e manipulação são seus maiores trunfos, mas sua obsessão pelo poder o corrompe cada vez mais.",
        habilidades: ["Inteligência excepcional", "Manipulação", "Planejamento estratégico"],
        citacao: "Citação: O mundo é um lugar podre, e eu sou o deus que o purificará.",
        link: "https://deathnote.fandom.com/wiki/Light_Yagami"
    },
    {
        titulo: "L - Lawliet",
        img: "https://64.media.tumblr.com/10010a5c5f8b2ea9b3ae55f18aedd763/9c1fd2cb58c30c75-aa/s500x750/50611370b946d39d8d39ad9fe1ebcfb8be9a34d2.jpg",
        anime: "Anime: Death Note",
        descricao: "Um detetive genial e excêntrico, conhecido como o maior detetive do mundo. L é encarregado de investigar os casos de mortes misteriosas causadas por Kira. Sua mente aguda e sua capacidade de dedução o tornam um oponente formidável para Light. Apesar de sua inteligência, L possui uma personalidade peculiar e aparenta ter pouco interesse em qualquer coisa que não seja resolver casos.",
        habilidades: ["Dedução", "Observação", "Psicologia"],
        citacao: "Citação: Todo mundo mente.",
        link: "https://deathnote.fandom.com/wiki/L_Lawliet"
    },
    { 
        titulo: "Sasuke Uchiha", 
        img: "https://i.pinimg.com/736x/56/91/5c/56915c1be81770fdd7f8b7578f714ac6.jpg", 
        anime: "Anime: Naruto Shippuden", 
        descricao: "Um ninja prodígio do clã Uchiha, buscando poder para vingar seu clã. Sua busca por poder o leva por um caminho obscuro, mas ele eventualmente encontra redenção.", 
        habilidades: "Sharingan, Rinnegan, Chidori", 
        citacao: "Citação: Eu vou me tornar mais forte do que você, Naruto!", 
        link: "https://naruto.fandom.com/pt-br/wiki/Sasuke_Uchiha" 
    },
    { 
        titulo: "Kakashi Hatake", 
        img: "https://64.media.tumblr.com/2ca7371d3c33d1b3172e8c901ed4c57b/15f2fd70fac37d02-c5/s2048x3072/2fac377d02c1901669a80583de19d64e4c55163f.jpg", 
        anime: "Anime: Naruto Shippuden", 
        descricao: "Um ninja experiente e calmo, conhecido como o Copiador de Mil Jutsus. Seu Sharingan lhe permite copiar quase qualquer ninjutsu.", 
        habilidades: "Sharingan, Chidori, Mil Jutsus", 
        citacao: "Citação: Aqueles que quebram as regras são lixo, mas aqueles que abandonam seus companheiros são piores que lixo.", link: "https://naruto.fandom.com/pt-br/wiki/Kakashi_Hatake" 
    },
    { 
        titulo: "Minato Namikaze", 
        img: "https://64.media.tumblr.com/2c72c84c2b5e76c4a43f214adf69c269/7b00b9bc6604a203-c7/s640x960/fb32ff805dc08b979c9794c571d55340eebb8332.jpg", 
        anime: "Anime: Naruto Shippuden", 
        descricao: "O Quarto Hokage, conhecido como o Relâmpago Amarelo de Konoha. Sua velocidade e inteligência o tornam um dos ninjas mais poderosos de todos os tempos.", 
        habilidades: "Voador Relâmpago, Rasengan, Fuinjutsu", 
        citacao: "Citação: A esperança é como um farol em meio à escuridão.", 
        link: "https://naruto.fandom.com/pt-br/wiki/Minato_Namikaze" 
    },
    { 
        titulo: "Obito Uchiha", 
        img: "https://64.media.tumblr.com/a7a1fc40a604fefa900e6c58c836a9cc/395fd469f69ce4c0-b7/s400x600/945eb7c7626347f52a01479afd36a79321d55ccb.jpg", 
        anime: "Anime: Naruto Shippuden", 
        descricao: "Um ex-membro da Akatsuki que buscava criar um mundo onde ninguém mais sofresse. Suas ações foram motivadas por uma profunda tristeza.", 
        habilidades: "Sharingan, Mangekyo Sharingan, Kamui", 
        citacao: "Citação: Um mundo onde todos possam se entender... Esse é o mundo que eu quero construir.", 
        link: "https://naruto.fandom.com/pt-br/wiki/Obito_Uchiha" 
    },
    {
        titulo: "Ino Yamanaka", 
        img: "https://i.pinimg.com/736x/d0/97/cd/d097cd36f1b2f7cadbb2371b26534761.jpg", 
        anime: "Anime: Naruto Shippuden", 
        descricao: "Uma kunoichi especializada em ninjutsu médico e técnicas de mente. Ela é membro do Time 10 e uma grande amiga de Sakura e Tenten.", 
        habilidades: "Jutsu Mental, Cura, Vinculo com a Mente", 
        citacao: "Citação: Eu vou te proteger, Sakura!", 
        link: "https://naruto.fandom.com/pt-br/wiki/Ino_Yamanaka" 
    },
    { 
        titulo: "Sai", 
        img: "https://i.pinimg.com/736x/6c/8f/d9/6c8fd95b2bfc8755dd8e4bce94c03e33.jpg", 
        anime: "Anime: Naruto Shippuden",
        descricao: "Um ninja da Raiz que se junta ao Time 7. Ele tem dificuldades em expressar suas emoções, mas se torna mais humano ao longo da série.", 
        habilidades: "Ninjutsu de Invocação, Pintura Ninja, Jutsu de Selamento", 
        citacao: "Citação: As palavras podem ser uma arma poderosa.", 
        link: "https://naruto.fandom.com/pt-br/wiki/Sai" 
    },
    { 
        titulo: "Neji Hyuga", 
        img: "https://i.pinimg.com/736x/45/0f/2b/450f2b5283c824669b7b6b8fa0302f61.jpg", 
        anime: "Anime: Naruto Shippuden", 
        descricao: "Um gênio ninja do clã Hyuga, conhecido por sua precisão e Byakugan. Ele supera suas crenças limitantes e se torna um membro valioso do time.", 
        habilidades: "Byakugan, Juken, Rotação dos Seiscentos Quarenta Graus", 
        citacao: "Citação: O destino de um homem é determinado desde o nascimento.", 
        link: "https://naruto.fandom.com/pt-br/wiki/Neji_Hyuuga" 
    },
    { 
        titulo: "Rock Lee", 
        img: "https://pbs.twimg.com/media/DnuGJRGW0AADFGm.jpg", 
        anime: "Anime: Naruto Shippuden", 
        descricao: "Um ninja que se dedica exclusivamente ao treinamento físico. Ele não possui nenhum ninjutsu ou genjutsu notável, mas compensa com sua força e determinação.", 
        habilidades: "Taijutsu, Portas Internas, Loto", 
        citacao: "Citação: Eu vou te mostrar o poder da juventude!", 
        link: "https://naruto.fandom.com/pt-br/wiki/Rock_Lee" 
    },
    { 
        titulo: "Vegeta", 
        img: "https://i.pinimg.com/736x/36/a9/5b/36a95b0eb4df8681eaa1d66dcbbaad42.jpg", 
        anime: "Anime: Dragon Ball Z", 
        descricao: "O príncipe dos Saiyajins, conhecido por seu orgulho e desejo de ser o mais forte. Apesar de sua arrogância, ele se torna um protetor da Terra.", 
        habilidades: "Galick Gun, Final Flash, Super Saiyajin", 
        citacao: "Citação: Kakaroto...", 
        link: "https://dragonball.fandom.com/wiki/Vegeta"
    },
    {
        titulo: "Eren Yeager",
        img: "https://i.pinimg.com/736x/3f/4c/e9/3f4ce92510bf6161969dcdc9bda93ffb.jpg",
        anime: "Anime: Attack on Titan",
        descricao: "O protagonista de Attack on Titan, determinado a destruir todos os Titãs para proteger a humanidade. Sua jornada o leva a descobrir verdades chocantes sobre o mundo e sobre si mesmo.",
        habilidades: "Transformação em Titã, Regeneração, Força sobre-humana",
        citacao: "Eu vou exterminar todos eles... todos os Titãs!",
        link: "https://attackontitan.fandom.com/wiki/Eren_Jaeger"
    },
    {
        titulo: "Mikasa Ackerman",
        img: "https://i.pinimg.com/736x/92/78/24/92782448e630f55afcfa0a6168760abd.jpg",
        anime: "Anime: Attack on Titan",
        descricao: "Uma das personagens principais de Attack on Titan, Mikasa é conhecida por sua habilidade de combate e devoção a Eren. Ela é uma das últimas descendentes da família Ackerman.",
        habilidades: "Força sobre-humana, Habilidade com lâminas, Instintos de combate",
        citacao: "Eren, onde quer que você vá, eu irei com você.",
        link: "https://attackontitan.fandom.com/wiki/Mikasa_Ackerman"
    },
    {
        titulo: "Darui",
        img: "https://i.pinimg.com/736x/10/38/61/103861fa6cba02d6591d8aad1b208285.jpg",
        anime: "Anime: Naruto Shippuden",
        descricao: "O braço direito do Quarto Raikage e eventual sucessor, Darui é um ninja habilidoso conhecido por seu estilo de luta relâmpago negro.",
        habilidades: "Estilo Relâmpago, Relâmpago Negro, Lançamento de Tempestade",
        citacao: "Eu sou Darui, o cara que carrega a vontade do Raikage.",
        link: "https://naruto.fandom.com/wiki/Darui"
    },
    {
        titulo: "Boruto Uzumaki",
        img: "https://i.pinimg.com/736x/09/d9/01/09d9016f9ccc72e8be2fa22f066f5d26.jpg",
        anime: "Anime: Boruto - Naruto Next Generations",
        descricao: "Filho de Naruto Uzumaki, Boruto luta para sair da sombra de seu pai e criar seu próprio caminho como ninja. Ele herda habilidades excepcionais de sua linhagem.",
        habilidades: "Rasengan, Jutsu Clone das Sombras, Karma",
        citacao: "Eu sou o Boruto Uzumaki! O ninja que vai superar o Hokage!",
        link: "https://naruto.fandom.com/wiki/Boruto_Uzumaki"
    },
    {
        titulo: "Sarada Uchiha",
        img: "https://i.pinimg.com/736x/9d/f8/e6/9df8e63f788f92160870631d46c685fa.jpg",
        anime: "Anime: Boruto - Naruto Next Generations",
        descricao: "Filha de Sasuke Uchiha e Sakura Haruno, Sarada é uma ninja talentosa com o objetivo de se tornar Hokage, equilibrando as heranças de seu clã Uchiha e suas próprias aspirações.",
        habilidades: "Sharingan, Taijutsu, Jutsu de Fogo",
        citacao: "Eu vou ser a Hokage e proteger a Vila Oculta da Folha!",
        link: "https://naruto.fandom.com/wiki/Sarada_Uchiha"
    },
    {
        titulo: "Mitsuki",
        img: "https://i.pinimg.com/736x/b7/31/15/b731152ce391735f712c50945a62f56e.jpg",
        anime: "Anime: Boruto - Naruto Next Generations",
        descricao: "Mitsuki é um ninja criado artificialmente por Orochimaru, sendo uma cobra sábia. Ele é calmo e muito habilidoso, além de ter uma forte ligação com Boruto.",
        habilidades: "Modo Sábio, Estilo Vento, Jutsu Serpente",
        citacao: "O que eu devo fazer... seguir meu coração?",
        link: "https://naruto.fandom.com/wiki/Mitsuki"
    },
    {
        titulo: "Orochimaru",
        img: "https://i.pinimg.com/736x/ef/09/3f/ef093feed33b569f0cd0e36f50c9cd61.jpg",
        anime: "Anime: Naruto",
        descricao: "Um dos lendários Sannin de Konoha, Orochimaru é um cientista e ninja renegado obcecado por obter imortalidade e dominar todos os jutsus. Ele realiza experimentos sem escrúpulos para atingir seus objetivos.",
        habilidades: "Reencarnação de Corpos, Jutsu de Serpente, Regeneração",
        citacao: "Eu não desejo destruição... Eu desejo o conhecimento.",
        link: "https://naruto.fandom.com/wiki/Orochimaru"
    },
    {
        titulo: "Kabuto Yakushi",
        img: "https://i.pinimg.com/474x/d4/76/5c/d4765cb230623f6b0890da01617e86be.jpg",
        anime: "Anime: Naruto",
        descricao: "Kabuto é o braço direito de Orochimaru e um espião habilidoso. Ele se torna uma grande ameaça após integrar as habilidades de várias criaturas e pessoas, incluindo os poderes de Orochimaru.",
        habilidades: "Jutsu Médico, Modo Sábio, Reanimação Impura",
        citacao: "Eu sou a serpente que se tornará um dragão.",
        link: "https://naruto.fandom.com/wiki/Kabuto_Yakushi"
    },
    {
        titulo: "Tsunade Senju",
        img: "https://i.pinimg.com/474x/e4/db/9b/e4db9b759a747d86fffab99946757a2b.jpg",
        anime: "Anime: Naruto",
        descricao: "Uma das lendárias Sannin, Tsunade é uma ninja médica excepcional e a Quinta Hokage de Konoha. Conhecida por sua força física incrível e habilidades curativas, ela é uma líder respeitada.",
        habilidades: "Jutsu Médico, Superforça, Regeneração",
        citacao: "Eu sou Tsunade, a melhor ninja médica do mundo.",
        link: "https://naruto.fandom.com/wiki/Tsunade"
    },
    {
        titulo: "Jiraiya",
        img: "https://i.pinimg.com/originals/ef/af/39/efaf399a5405402f08adeb435340c795.jpg",
        anime: "Anime: Naruto",
        descricao: "Um dos lendários Sannin, Jiraiya é um ninja errante que treina Naruto e é famoso por suas habilidades em ninjutsu e senjutsu. Apesar de sua natureza descontraída, ele é um guerreiro poderoso.",
        habilidades: "Modo Sábio, Rasengan, Invocação de Sapos",
        citacao: "A verdadeira medida de um ninja não está em como ele vive, mas em como ele morre.",
        link: "https://naruto.fandom.com/wiki/Jiraiya"
    },
    {
        titulo: "Pain",
        img: "https://pm1.aminoapps.com/7741/58c9b37612b6d7e56e52da27b77e1cbaa6a74ef8r1-592-583v2_uhq.jpg",
        anime: "Anime: Naruto Shippuden",
        descricao: "Líder da Akatsuki e uma das encarnações de Nagato, Pain possui o Rinnegan e busca a paz através da dor. Ele é uma figura poderosa e enigmática, responsável por destruições em larga escala.",
        habilidades: "Rinnegan, Caminho de Deus, Controle de Gravitacional",
        citacao: "Aqueles que não entendem a dor nunca conhecerão a verdadeira paz.",
        link: "https://naruto.fandom.com/wiki/Pain_(Nagato)"
    },
    {
        titulo: "Konan",
        img: "https://i.pinimg.com/originals/d2/ab/52/d2ab522b5757ddccbf9cc9b740d15875.jpg",
        anime: "Anime: Naruto Shippuden",
        descricao: "Membro da Akatsuki e companheira de Nagato, Konan é uma ninja habilidosa que utiliza técnicas de papel. Ela compartilha a visão de paz de Nagato e desempenha um papel fundamental na organização.",
        habilidades: "Jutsu de Papel, Origami Explosivo, Técnica dos Anjos de Papel",
        citacao: "Nós somos Deus, e nós punimos os criminosos que ameaçam a paz.",
        link: "https://naruto.fandom.com/wiki/Konan"
    },
    {
        titulo: "Shikamaru Nara",
        img: "https://i.pinimg.com/736x/2a/f1/5c/2af15c27fd1e8e6ff3429df1296ef4b2.jpg",
        anime: "Anime: Naruto",
        descricao: "Um estrategista brilhante, Shikamaru é conhecido por sua inteligência excepcional e sua habilidade de manipular sombras em combate. Ele é um líder nato, embora muitas vezes prefira a vida tranquila.",
        habilidades: "Manipulação de Sombras, Estratégia, Taijutsu",
        citacao: "Que problemático... mas, como líder, eu tenho que assumir a responsabilidade.",
        link: "https://naruto.fandom.com/wiki/Shikamaru_Nara"
    },
    {
        titulo: "Chōji Akimichi",
        img: "https://i.pinimg.com/736x/49/45/db/4945dbf36138565f7b277e825b2d81c3.jpg",
        anime: "Anime: Naruto",
        descricao: "Membro do clã Akimichi, Chōji possui a habilidade de expandir seu corpo em combate. Ele é leal e sempre está disposto a proteger seus amigos, apesar de sua natureza gentil e amor por comida.",
        habilidades: "Expansão Corporal, Taijutsu, Manipulação de Calorias",
        citacao: "Eu sou um Akimichi! Nunca subestime o meu poder!",
        link: "https://naruto.fandom.com/wiki/Chōji_Akimichi"
    },
    {
        titulo: "Tenten",
        img: "https://i.pinimg.com/736x/6e/e1/4c/6ee14cf30b2f4c5406ac777c87535a42.jpg",
        anime: "Anime: Naruto",
        descricao: "Especialista em armas ninja, Tenten é uma kunoichi habilidosa que luta ao lado de Neji e Lee. Seu talento com o arsenal de ferramentas ninja a torna uma adversária perigosa em batalha.",
        habilidades: "Manipulação de Armas, Invocação de Pergaminhos, Taijutsu",
        citacao: "Eu vou mostrar a força de uma kunoichi de verdade!",
        link: "https://naruto.fandom.com/wiki/Tenten"
    },
    {
        titulo: "Kiba Inuzuka",
        img: "https://pm1.aminoapps.com/7701/b74523de831455a9a6176c437cc31b0cdbccb3e2r1-640-640v2_uhq.jpg",
        anime: "Anime: Naruto",
        descricao: "Membro do clã Inuzuka, Kiba é conhecido por sua lealdade e por lutar ao lado de seu parceiro canino, Akamaru. Juntos, eles formam uma dupla feroz, utilizando técnicas de ninjutsu e habilidades de rastreamento.",
        habilidades: "Habilidades Caninas, Jutsu de Cheiro, Taijutsu",
        citacao: "Com Akamaru ao meu lado, ninguém pode me parar!",
        link: "https://naruto.fandom.com/wiki/Kiba_Inuzuka"
    }, 
    {
        titulo: "Akamaru",
        img: "https://i.pinimg.com/736x/94/14/23/94142319c258beff35594632b5190c8b.jpg",
        anime: "Anime: Naruto",
        descricao: "Companheiro canino de Kiba, Akamaru é um cachorro treinado para lutar ao lado de seu mestre. Ele é leal, corajoso e parte essencial das técnicas combinadas que ele e Kiba utilizam.",
        habilidades: "Combate Canino, Transformação em Besta, Faro Aguçado",
        citacao: "Woof woof! (Eu estou com você, Kiba!)",
        link: "https://naruto.fandom.com/wiki/Akamaru"
    },
    {
        titulo: "Chōchō Akimichi",
        img: "https://i.pinimg.com/736x/b3/7b/ce/b37bce0fcc5a8205de3917fe1341d3ee.jpg",
        anime: "Anime: Boruto - Naruto Next Generations",
        descricao: "Filha de Chōji Akimichi, Chōchō herdou as habilidades de expansão de seu clã. Ela é confiante e orgulhosa, sempre disposta a proteger seus amigos e provar seu valor como ninja.",
        habilidades: "Expansão Corporal, Manipulação de Calorias, Taijutsu",
        citacao: "Eu sou Chōchō Akimichi, e ninguém vai me parar!",
        link: "https://naruto.fandom.com/wiki/Chōchō_Akimichi"
    },
    {
        titulo: "Kimimaro",
        img: "https://i.pinimg.com/736x/f5/c3/b6/f5c3b6c6b85f85daf0a5d8e85cb90ab3.jpg",
        anime: "Anime: Naruto",
        descricao: "O último sobrevivente do clã Kaguya, Kimimaro é um guerreiro poderoso com a habilidade de manipular seus ossos como armas. Ele é leal a Orochimaru e foi um dos ninjas mais fortes sob seu comando.",
        habilidades: "Manipulação Óssea, Taijutsu, Defesa Impecável",
        citacao: "Meu corpo é uma arma... e ninguém pode me derrotar.",
        link: "https://naruto.fandom.com/wiki/Kimimaro"
    },
    {
        titulo: "Killer Bee",
        img: "https://i.pinimg.com/550x/6e/fb/38/6efb38d6f62e6a20add8da009add0b26.jpg",
        anime: "Anime: Naruto Shippuden",
        descricao: "Jinchuuriki do Oito Caudas, Killer Bee é um ninja talentoso e rapper nato. Ele é conhecido por seu estilo único de luta e habilidade de controlar completamente sua besta, tornando-se um aliado crucial para Konoha.",
        habilidades: "Raiton, Luta com Espadas, Controle da Besta com Cauda",
        citacao: "Eu sou o Killer Bee, o ninja que rima e nunca perde o ritmo!",
        link: "https://naruto.fandom.com/wiki/Killer_Bee"
    },
    {
        titulo: "Quarto Raikage",
        img: "https://i.pinimg.com/474x/8d/04/d3/8d04d38dc435b8ebcab981abe3903f7a.jpg",
        anime: "Anime: Naruto Shippuden",
        descricao: "Líder da Vila Oculta da Nuvem, o Quarto Raikage é conhecido por sua força bruta e velocidade incomparável. Ele é um guerreiro implacável e respeitado, sempre lutando pela proteção de sua vila.",
        habilidades: "Raiton, Velocidade Sobrehumana, Força Descomunal",
        citacao: "Eu sou o Raikage, e ninguém se atreverá a desafiar a Nuvem!",
        link: "https://naruto.fandom.com/wiki/A_(Fourth_Raikage)"
    },
    {
        titulo: "Zabuza Momochi",
        img: "https://i.pinimg.com/1200x/53/c1/0a/53c10a425e1c7c994da456bcfe263831.jpg",
        anime: "Anime: Naruto",
        descricao: "Um dos Sete Espadachins da Névoa, Zabuza é um assassino cruel conhecido como o Demônio da Névoa Oculta. Sua habilidade com a espada e técnicas de assassinato o tornam um adversário temível.",
        habilidades: "Manipulação de Névoa, Taijutsu, Espadachin de Elite",
        citacao: "Neste mundo, apenas os fortes sobrevivem.",
        link: "https://naruto.fandom.com/wiki/Zabuza_Momochi"
    },
    {
        titulo: "Kaguya Ōtsutsuki",
        img: "https://i.pinimg.com/736x/53/30/e0/5330e0008d404324d6b720519c88b716.jpg",
        anime: "Anime: Naruto Shippuden",
        descricao: "A primeira usuária de chakra na Terra, Kaguya é uma deusa imortal que busca recuperar o chakra que foi espalhado pelo mundo. Sua presença é aterrorizante, e seu poder é incomensurável.",
        habilidades: "Manipulação de Chakra, Criação de Dimensões, Imortalidade",
        citacao: "O chakra pertence a mim e só a mim.",
        link: "https://naruto.fandom.com/wiki/Kaguya_Ōtsutsuki"
    },
    {
        titulo: "Rin Nohara",
        img: "https://i.pinimg.com/564x/71/07/bd/7107bd58794b784a5ac3d3ee29e519a0.jpg",
        anime: "Anime: Naruto",
        descricao: "Uma kunoichi do Time Minato, Rin é uma ninja médica gentil e carinhosa. Sua morte trágica teve um grande impacto em Kakashi e Obito, moldando os destinos dos dois.",
        habilidades: "Jutsu Médico, Habilidade de Cura, Trabalho em Equipe",
        citacao: "Eu sempre estarei com vocês... em seus corações.",
        link: "https://naruto.fandom.com/wiki/Rin_Nohara"
    },
    {
        titulo: "Sasori",
        img: "https://64.media.tumblr.com/e949316b1a97396546f32a06a6daf7d2/063a359a0a0bb5d0-22/s1280x1920/c6d632c682fe7982bb3e69cc0d0e7decc05a317a.jpg",
        anime: "Anime: Naruto Shippuden",
        descricao: "Membro da Akatsuki, Sasori é um mestre marionetista que transformou seu próprio corpo em uma marionete. Ele é temido por sua habilidade de manipular bonecos em combate, especialmente suas marionetes humanas.",
        habilidades: "Manipulação de Marionetes, Jutsu de Veneno, Imortalidade Mecânica",
        citacao: "A arte é uma explosão... mas a verdadeira arte é eterna.",
        link: "https://naruto.fandom.com/wiki/Sasori"
    },
    {
        titulo: "Sakura Haruno",
        img: "https://64.media.tumblr.com/58a949b1e6aa1a6cead45ab3bf0b29c8/f60cd083fc0b2abf-ac/s1280x1920/d6d580dbb589bf1e2c5bb24768d2cecc795aeaae.jpg",
        anime: "Anime: Naruto",
        descricao: "Uma kunoichi talentosa, Sakura é conhecida por sua força física impressionante e habilidades em ninjutsu médico. Como discípula de Tsunade, ela se torna uma das ninjas médicas mais fortes de Konoha.",
        habilidades: "Jutsu Médico, Superforça, Habilidade de Cura",
        citacao: "Eu vou proteger meus amigos, não importa o quê!",
        link: "https://naruto.fandom.com/wiki/Sakura_Haruno"
    },
    {
        titulo: "Maito Gai",
        img: "https://i.pinimg.com/474x/97/28/e8/9728e8c0f3f3ef2b3764c8d0581dbabb.jpg",
        anime: "Anime: Naruto",
        descricao: "Mestre do Taijutsu, Maito Gai é um ninja incrivelmente poderoso que treina Rock Lee. Conhecido por sua personalidade exuberante e sua habilidade de abrir os Oito Portões, Gai é um guerreiro formidável.",
        habilidades: "Taijutsu, Oito Portões, Velocidade e Força Sobrehumanas",
        citacao: "Com a força da juventude, não há nada que não possamos alcançar!",
        link: "https://naruto.fandom.com/wiki/Might_Guy"
    },
    {
        titulo: "Shino Aburame",
        img: "https://i.pinimg.com/736x/14/4f/e2/144fe26c8bbd3b5e07341026c7aa03ae.jpg",
        anime: "Anime: Naruto",
        descricao: "Membro do clã Aburame, Shino é um ninja que controla insetos para lutar. Ele é calmo, reservado e altamente inteligente, utilizando seus insetos de maneira estratégica em batalha.",
        habilidades: "Controle de Insetos, Jutsu de Camuflagem, Estratégia",
        citacao: "Meus insetos nunca falham em sua missão.",
        link: "https://naruto.fandom.com/wiki/Shino_Aburame"
    },
    {
        titulo: "Iruka Umino",
        img: "https://i.pinimg.com/474x/f4/fa/2e/f4fa2e6d03c978239f726f1b6cd45e2c.jpg",
        anime: "Anime: Naruto",
        descricao: "Um professor da Academia Ninja, Iruka é uma figura paternal para Naruto. Ele é gentil e compassivo, sempre disposto a ajudar seus alunos e proteger Konoha.",
        habilidades: "Jutsu de Barreira, Técnicas de Ensino, Combate Básico",
        citacao: "Você é especial, Naruto. E eu acredito em você.",
        link: "https://naruto.fandom.com/wiki/Iruka_Umino"
    },
    {
        titulo: "Asuma Sarutobi",
        img: "https://i.pinimg.com/736x/bc/8d/8b/bc8d8b90608485ed3113db0e61cc6c7f.jpg",
        anime: "Anime: Naruto",
        descricao: "Filho do Terceiro Hokage e sensei do Time 10, Asuma é um ninja habilidoso especializado em combate corpo a corpo e na manipulação do vento. Ele é um líder respeitado e pai de uma filha com Kurenai.",
        habilidades: "Manipulação do Vento, Taijutsu, Fumaças",
        citacao: "Proteger a próxima geração é o nosso dever.",
        link: "https://naruto.fandom.com/wiki/Asuma_Sarutobi"
    },
    {
        titulo: "Kurenai Yūhi",
        img: "https://i.pinimg.com/736x/f3/c4/f0/f3c4f03e23b0cefb024ab4e3a3d50982.jpg",
        anime: "Anime: Naruto",
        descricao: "Uma kunoichi especializada em genjutsu, Kurenai é a líder do Time 8. Ela é uma ninja talentosa e mãe dedicada, sempre disposta a proteger Konoha e sua filha.",
        habilidades: "Genjutsu, Taijutsu, Habilidade em Ilusões",
        citacao: "Eu vou proteger o que é mais precioso para mim.",
        link: "https://naruto.fandom.com/wiki/Kurenai_Yūhi"
    },
    {
        titulo: "Itachi Uchiha",
        img: "https://i.pinimg.com/736x/90/8c/7c/908c7cba9a1f2af8b8f3a0171c33771e.jpg",
        anime: "Anime: Naruto Shippuden",
        descricao: "Membro do clã Uchiha e da Akatsuki, Itachi é conhecido por sua habilidade com o Sharingan e seu sacrifício para proteger Konoha. Embora visto como um traidor, ele é um herói que carregou um pesado fardo.",
        habilidades: "Sharingan, Amaterasu, Tsukuyomi, Susanoo",
        citacao: "Mesmo que você odeie, continue vivendo.",
        link: "https://naruto.fandom.com/wiki/Itachi_Uchiha"
    },
    {
        titulo: "Naofumi Iwatani",
        img: "https://i.pinimg.com/736x/be/08/95/be089532d778c75e116913e6c1dd2693.jpg",
        anime: "Anime: Tate no Yuusha no Nariagari",
        descricao: "O Herói do Escudo, Naofumi foi traído e ridicularizado, mas se levantou para se tornar um defensor poderoso. Seu escudo é sua maior arma e ele luta para proteger aqueles que confiam nele.",
        habilidades: "Defesa Absoluta, Magia de Suporte, Habilidades de Escudo",
        citacao: "Eu nunca vou desistir. Nunca.",
        link: "https://shield-hero.fandom.com/wiki/Naofumi_Iwatani"
    },
    {
        titulo: "Raphtalia",
        img: "https://i.pinimg.com/736x/c6/91/8a/c6918aaa4b860c089c71f7eb9e9ec465.jpg",
        anime: "Anime: Tate no Yuusha no Nariagari",
        descricao: "Uma guerreira demi-humana e fiel companheira de Naofumi, Raphtalia luta com espadas e protege aqueles que ama. Sua força e coragem a tornam uma figura central na luta contra as ondas.",
        habilidades: "Espadachim, Magia de Luz, Habilidades de Curandeira",
        citacao: "Eu vou lutar ao seu lado, sempre.",
        link: "https://shield-hero.fandom.com/wiki/Raphtalia"
    },
    {
        titulo: "Kakuzu",
        img: "https://i.pinimg.com/550x/25/94/22/25942291d57edfea7f8fc67211d2a961.jpg",
        anime: "Anime: Naruto Shippuden",
        descricao: "Um membro imortal da Akatsuki, Kakuzu é um mercenário ganancioso que possui vários corações. Ele usa esses corações para prolongar sua vida e lançar jutsus poderosos de diferentes elementos.",
        habilidades: "Jiongu, Habilidades Elementais, Imortalidade",
        citacao: "Dinheiro é a única coisa em que se pode confiar.",
        link: "https://naruto.fandom.com/wiki/Kakuzu"
    },
    {
        titulo: "Deidara",
        img: "https://i.pinimg.com/736x/68/c8/60/68c860f08f28a550a758784a6758bcca.jpg",
        anime: "Anime: Naruto Shippuden",
        descricao: "Um artista explosivo e membro da Akatsuki, Deidara utiliza argila explosiva para criar obras de arte destrutivas. Ele vê suas explosões como a expressão máxima da arte efêmera.",
        habilidades: "Argila Explosiva, Kinjutsu, Estilo Explosivo",
        citacao: "A arte é uma explosão!",
        link: "https://naruto.fandom.com/wiki/Deidara"
    },
    {
        titulo: "Gaara",
        img: "https://i.pinimg.com/736x/7e/9c/0b/7e9c0bf925c688c9b6f6113c213e781e.jpg",
        anime: "Anime: Naruto",
        descricao: "Jinchuuriki do Shukaku e Kazekage da Vila Oculta da Areia, Gaara é um ninja poderoso com a habilidade de manipular areia. Ele superou seu passado sombrio para se tornar um líder forte e compassivo.",
        habilidades: "Manipulação de Areia, Defesa Absoluta, Jinchuuriki",
        citacao: "Eu protejo a Vila da Areia com minha vida.",
        link: "https://naruto.fandom.com/wiki/Gaara"
    },
    {
        titulo: "Kankurō",
        img: "https://i.pinimg.com/736x/f1/73/fd/f173fdd07de7846c60a10382c90e0925.jpg",
        anime: "Anime: Naruto",
        descricao: "Irmão de Gaara e mestre marionetista, Kankurō usa marionetes em combate para enganar e atacar seus inimigos. Ele é leal à Vila da Areia e atua como um dos principais defensores da mesma.",
        habilidades: "Manipulação de Marionetes, Jutsu de Veneno, Estratégia",
        citacao: "Eu nunca vou deixar ninguém machucar meus irmãos.",
        link: "https://naruto.fandom.com/wiki/Kankurō"
    },
    {
        titulo: "Temari",
        img: "https://i.pinimg.com/736x/9e/82/6a/9e826af4610da33f60b2a372ceea81ad.jpg",
        anime: "Anime: Naruto",
        descricao: "Irmã de Gaara e Kankurō, Temari é uma kunoichi talentosa que utiliza um leque gigante para manipular o vento em batalha. Ela é forte, determinada e uma estrategista nata.",
        habilidades: "Manipulação de Vento, Combate à Distância, Estratégia",
        citacao: "Eu vou fazer o vento trabalhar a meu favor.",
        link: "https://naruto.fandom.com/wiki/Temari"
    },
    {
        titulo: "Inojin Yamanaka",
        img: "https://statics.ruadoll.com/image/cache/2023/1229/0/71099cfc-8cb7-8c62-6337-883d513d422e-1000x1000.jpg",
        anime: "Anime: Boruto - Naruto Next Generations",
        descricao: "Filho de Ino e Sai, Inojin herdou o talento artístico de seu pai e as habilidades sensoriais de sua mãe. Ele utiliza jutsus de tinta e técnicas mentais para enfrentar seus inimigos.",
        habilidades: "Chōjū Giga, Controle Mental, Sensoriamento",
        citacao: "Eu vou encontrar meu próprio caminho como ninja.",
        link: "https://naruto.fandom.com/wiki/Inojin_Yamanaka"
    },
    {
        titulo: "Shikaku Nara",
        img: "https://i.pinimg.com/736x/6d/8e/71/6d8e71d1a3e64ee50512b027d5316ad6.jpg",
        anime: "Anime: Naruto",
        descricao: "Pai de Shikamaru e chefe do clã Nara, Shikaku é um estrategista brilhante e um dos principais conselheiros de Konoha. Ele é conhecido por sua inteligência e habilidades de manipulação de sombras.",
        habilidades: "Manipulação de Sombras, Estratégia, Táticas de Batalha",
        citacao: "Às vezes, é preciso sacrificar algo para proteger o todo.",
        link: "https://naruto.fandom.com/wiki/Shikaku_Nara"
    },
    {
        titulo: "Hinata Hyuga",
        img: "https://pm1.aminoapps.com/7691/1b8587e505179d73fe2f82860ed372501e3b5690r1-829-829v2_uhq.jpg",
        anime: "Anime: Naruto",
        descricao: "Membro do clã Hyuga, Hinata é uma kunoichi gentil e determinada. Embora inicialmente tímida, ela se torna uma guerreira confiante e protetora, especialmente quando se trata de Naruto.",
        habilidades: "Byakugan, Jūken, Técnica das Oito Trigramas",
        citacao: "Eu vou proteger aqueles que amo, com todas as minhas forças.",
        link: "https://naruto.fandom.com/wiki/Hinata_Hyuga"
    },
    {
        titulo: "Haku",
        img: "https://i.pinimg.com/736x/e3/55/05/e3550581cf1ef92be79f38db21237ded.jpg",
        anime: "Anime: Naruto",
        descricao: "Haku foi um ninja habilidoso e leal seguidor de Zabuza. Conhecido por suas habilidades com jutsus de gelo, Haku era gentil e compassivo, mas também implacável em batalha.",
        habilidades: "Manipulação de Gelo, Técnica Espelhos de Cristal de Gelo, Agilidade Sobrehumana",
        citacao: "Eu sou uma ferramenta para ajudar meu mestre a alcançar seus sonhos.",
        link: "https://naruto.fandom.com/wiki/Haku"
    },
    {
        titulo: "Gon Freecss",
        img: "https://i.pinimg.com/originals/98/35/b2/9835b286061ed652ac7780855c0ebd93.jpg",
        anime: "Anime: Hunter x Hunter",
        descricao: "Um jovem caçador em treinamento, Gon é determinado e tem uma personalidade cativante. Ele embarca em uma jornada para encontrar seu pai e se tornar um caçador lendário.",
        habilidades: "Nen, Agilidade Sobrehumana, Inteligência Tática",
        citacao: "Eu vou me tornar um grande caçador, assim como meu pai!",
        link: "https://hunterxhunter.fandom.com/wiki/Gon_Freecss"
    },
    {
        titulo: "Natsu Dragneel",
        img: "https://i.pinimg.com/236x/f6/da/a8/f6daa8d4a13fc203a95a8b8b711f86b0.jpg",
        anime: "Anime: Fairy Tail",
        descricao: "Membro da guilda Fairy Tail, Natsu é um mago do fogo e Dragon Slayer. Ele é impulsivo e ferozmente leal aos seus amigos, sempre disposto a lutar por aqueles que ama.",
        habilidades: "Fogo de Dragon Slayer, Combate Corpo a Corpo, Magia de Dragão",
        citacao: "Se é para proteger meus amigos, eu não vou perder para ninguém!",
        link: "https://fairytail.fandom.com/wiki/Natsu_Dragneel"
    },
    {
        titulo: "Lucy Heartfilia",
        img: "https://i.pinimg.com/736x/f1/a2/b7/f1a2b7e238671f04dedb50d891d0473b.jpg",
        anime: "Anime: Fairy Tail",
        descricao: "Uma Celestial Spirit Mage e membro da Fairy Tail, Lucy é inteligente e determinada. Ela forma laços fortes com seus espíritos e colegas de guilda, sempre lutando ao lado deles.",
        habilidades: "Magia de Espírito Celestial, Invocação, Inteligência Estratégica",
        citacao: "Eu sou uma maga da Fairy Tail. E nunca abandonarei meus amigos.",
        link: "https://fairytail.fandom.com/wiki/Lucy_Heartfilia"
    },
    {
        titulo: "Juvia Lockser",
        img: "https://64.media.tumblr.com/db024aab3cca8d859f5fdafaec022c08/5b218c6174bafdcd-a5/s640x960/02b6f92b01f736ee5ea3a8f3374b65cf7a5d81bc.jpg",
        anime: "Anime: Fairy Tail",
        descricao: "Uma ex-membro da Phantom Lord e agora uma fiel membro da Fairy Tail, Juvia controla a água em combate. Ela é apaixonada por Gray e luta com fervor por sua guilda.",
        habilidades: "Manipulação de Água, Magia de Água, Transformação",
        citacao: "Meu amor por Gray-sama é invencível!",
        link: "https://fairytail.fandom.com/wiki/Juvia_Lockser"
    },
    {
        titulo: "Gray Fullbuster",
        img: "https://i.pinimg.com/736x/87/f4/c8/87f4c8bf63801a2b4b0524a0cef0dcb6.jpg",
        anime: "Anime: Fairy Tail",
        descricao: "Um Ice Mage e membro da Fairy Tail, Gray é conhecido por sua frieza em batalha e sua rivalidade amigável com Natsu. Ele é um guerreiro confiável e leal aos seus amigos.",
        habilidades: "Magia de Gelo, Criomancia, Combate Corpo a Corpo",
        citacao: "Eu não vou desistir, não importa o quão difícil seja.",
        link: "https://fairytail.fandom.com/wiki/Gray_Fullbuster"
    },
    {
        titulo: "Gajeel Redfox",
        img: "https://i.pinimg.com/originals/cd/0a/be/cd0abe511e2d1c00a77784d7ea71c21e.jpg",
        anime: "Anime: Fairy Tail",
        descricao: "Um Dragon Slayer do ferro e ex-membro da Phantom Lord, Gajeel se juntou à Fairy Tail após lutar contra Natsu. Ele é durão, mas também leal e protetor com seus companheiros.",
        habilidades: "Ferro de Dragon Slayer, Manipulação de Ferro, Combate Corpo a Corpo",
        citacao: "Eu luto pelos meus nakama. Isso é tudo o que importa.",
        link: "https://fairytail.fandom.com/wiki/Gajeel_Redfox"
    },
    {
        titulo: "Erza Scarlet",
        img: "https://i.pinimg.com/736x/d9/45/ea/d945eaaf0c773a93b58534f2e0d306b8.jpg",
        anime: "Anime: Fairy Tail",
        descricao: "Uma das magas mais poderosas da Fairy Tail, Erza é uma mestre em reequipped magic e conhecida por sua disciplina e força. Ela é respeitada e temida tanto por seus amigos quanto por seus inimigos.",
        habilidades: "Reequip Magic, Espadachim, Combate Corpo a Corpo",
        citacao: "Eu sou Erza Scarlet, e não vou recuar diante de nada.",
        link: "https://fairytail.fandom.com/wiki/Erza_Scarlet"
    },
    {
        titulo: "Laxus Dreyar",
        img: "https://image.tensorartassets.com/cdn-cgi/image/w=600/model_showcase/645941709831861024/47e85647-7096-3e8c-3f4a-e2d8217c1b81.jpeg",
        anime: "Anime: Fairy Tail",
        descricao: "Neto do mestre da guilda, Laxus é um Dragon Slayer do trovão e um dos membros mais fortes da Fairy Tail. Ele é poderoso e tem um forte senso de orgulho, mas também se preocupa profundamente com seus companheiros.",
        habilidades: "Trovão de Dragon Slayer, Raijinshuu, Combate Corpo a Corpo",
        citacao: "Ninguém vai derrubar a Fairy Tail enquanto eu estiver aqui.",
        link: "https://fairytail.fandom.com/wiki/Laxus_Dreyar"
    },
    {
        titulo: "Acnologia",
        img: "https://pbs.twimg.com/media/FzRoUh1XsAEdLfB.png",
        anime: "Anime: Fairy Tail",
        descricao: "Conhecido como o Dragão Rei, Acnologia é uma das entidades mais poderosas do mundo. Ele é temido por todos devido ao seu poder devastador e sua habilidade de destruir até mesmo dragões.",
        habilidades: "Dragon Slayer, Transformação em Dragão, Destruição",
        citacao: "Eu sou o fim de tudo. Eu sou Acnologia.",
        link: "https://fairytail.fandom.com/wiki/Acnologia"
    },
    {
        titulo: "Rimuru Tempest",
        img: "https://i.pinimg.com/564x/7b/c7/c2/7bc7c2922512df5762bd9294e7bf26e0.jpg",
        anime: "TAnime: Tensei Shitara",
        descricao: "Uma vez humano, Rimuru foi reencarnado como um slime em um mundo de fantasia. Ele possui habilidades únicas que o tornam extremamente poderoso e lidera sua própria nação de monstros.",
        habilidades: "Predator, Grande Sábio, Manipulação de Magia",
        citacao: "Eu protegerei aqueles que me são queridos, não importa o que custe.",
        link: "https://tensura.fandom.com/wiki/Rimuru_Tempest"
    },
    {
        titulo: "Android 18",
        img: "https://i.pinimg.com/236x/f7/a6/46/f7a6466d870354b4b798c4177504fe41.jpg",
        anime: "Anime: Dragon Ball Z",
        descricao: "Originalmente uma vilã, Android 18 foi transformada em uma guerreira formidável e eventual aliada dos Z Fighters. Ela é forte, independente, e mãe dedicada.",
        habilidades: "Super Força, Vôo, Energia Ki",
        citacao: "Eu sou muito mais forte do que pareço.",
        link: "https://dragonball.fandom.com/wiki/Android_18"
    },
    {
        titulo: "Android 17",
        img: "https://i.pinimg.com/236x/f6/89/9d/f6899d283a96621b54025c4a5a3c3856.jpg",
        anime: "Anime: Dragon Ball Z",
        descricao: "Irmão de Android 18, ele compartilha habilidades semelhantes e é conhecido por sua calma em batalha. Ele eventualmente se torna um guardião da Terra e um dos Z Fighters.",
        habilidades: "Super Força, Vôo, Energia Ki",
        citacao: "Lutar pelo que é certo, isso é o que importa.",
        link: "https://dragonball.fandom.com/wiki/Android_17"
    },
    {
        titulo: "Kuririn",
        img: "https://i.pinimg.com/originals/d4/8c/2f/d48c2f431b141ef181dc238525a48fcd.jpg",
        anime: "Anime: Dragon Ball Z",
        descricao: "Um dos melhores amigos de Goku e membro dos Z Fighters, Kuririn é conhecido por sua coragem e espírito de luta, apesar de ser um humano normal em um mundo de deuses e guerreiros alienígenas.",
        habilidades: "Kamehameha, Vôo, Disco Destruidor",
        citacao: "Mesmo os menores podem fazer uma grande diferença.",
        link: "https://dragonball.fandom.com/wiki/Kuririn"
    },
    {
        titulo: "Piccolo",
        img: "https://i.pinimg.com/736x/82/46/ae/8246ae702e266818f7295520e57b9add.jpg",
        anime: "Anime: Dragon Ball Z",
        descricao: "Um guerreiro Namekuseijin e antigo inimigo de Goku, Piccolo eventualmente se torna um dos maiores aliados dos Z Fighters. Ele é um mentor sábio e poderoso para Gohan.",
        habilidades: "Regeneração, Explosão de Ki, Técnica do Canhão de Feixe Especial",
        citacao: "O verdadeiro poder não vem da força bruta, mas da sabedoria.",
        link: "https://dragonball.fandom.com/wiki/Piccolo"
    },
    {
        titulo: "Broly",
        img: "https://i.pinimg.com/originals/e4/d2/7f/e4d27f8318bbc315c1b0cc86454b1aa8.jpg",
        anime: "Anime: Dragon Ball Super",
        descricao: "Um dos Saiyajins mais poderosos, Broly é conhecido por seu poder incomensurável e sua raiva incontrolável. Ele é uma força da natureza, capaz de enfrentar até mesmo os guerreiros mais fortes.",
        habilidades: "Super Saiyajin Lendário, Vôo, Explosão de Ki",
        citacao: "Eu sou a lenda, o Saiyajin Lendário.",
        link: "https://dragonball.fandom.com/wiki/Broly"
    },
    {
        titulo: "Kawaki",
        img: "https://i.pinimg.com/736x/08/07/01/0807014a858464cc14cfdc435638a5a9.jpg",
        anime: "Anime: Boruto - Naruto Next Generations",
        descricao: "Um garoto marcado pelo Karma e criado como uma arma, Kawaki é ferozmente leal a Naruto e se vê dividido entre sua nova vida e seu passado sombrio.",
        habilidades: "Karma, Jutsus de Combate Corpo a Corpo, Tecnologia Ninja",
        citacao: "Eu farei qualquer coisa para proteger aqueles que amo.",
        link: "https://boruto.fandom.com/wiki/Kawaki"
    },
    {
        titulo: "Juugo",
        img: "https://i.pinimg.com/originals/8f/6a/1e/8f6a1e2186ffe4d1c8113a123428e987.jpg",
        anime: "Anime: Naruto Shippuden",
        descricao: "Um seguidor leal de Orochimaru, Juugo é conhecido por sua habilidade de absorver energia natural, o que lhe dá uma força imensa, mas também um temperamento instável.",
        habilidades: "Absorção de Energia Natural, Transformação, Super Força",
        citacao: "Eu luto para controlar o monstro dentro de mim.",
        link: "https://naruto.fandom.com/wiki/Juugo"
    },
    {
        titulo: "Karin",
        img: "https://i.pinimg.com/736x/66/f4/c8/66f4c872af0f70802e2c95a4606d9f7d.jpg",
        anime: "Anime: Naruto Shippuden",
        descricao: "Uma ninja sensorial e antiga membro da equipe Taka, Karin é leal a Sasuke e possui habilidades únicas de cura e rastreamento.",
        habilidades: "Rastreamento Sensorial, Cura, Chakra",
        citacao: "Meu coração sempre me guiará para onde ele está.",
        link: "https://naruto.fandom.com/wiki/Karin"
    },
    {
        titulo: "Suigetsu Hozuki",
        img: "https://i.pinimg.com/564x/07/57/08/075708e25bfcf85aa931f6676075c830.jpg",
        anime: "Anime: Naruto Shippuden",
        descricao: "Membro da equipe Taka e mestre da espada, Suigetsu tem a habilidade única de transformar seu corpo em água. Ele é sarcástico e imprevisível, mas também leal aos seus aliados.",
        habilidades: "Transformação em Água, Kenjutsu, Manipulação de Líquidos",
        citacao: "Água flui, e eu também.",
        link: "https://naruto.fandom.com/wiki/Suigetsu_Hozuki"
    },
    {
        titulo: "Kirito",
        img: "https://i.pinimg.com/originals/98/54/67/985467963ac17d90764385a8b37c5c1d.jpg",
        anime: "Anime: Sword Art Online",
        descricao: "Um jogador habilidoso e protagonista de Sword Art Online, Kirito é conhecido por sua bravura e habilidades excepcionais com a espada. Ele é determinado a proteger aqueles que ama no mundo virtual e real.",
        habilidades: "Espadachim Dual, Agilidade, Habilidades de Jogo",
        citacao: "Eu vou proteger todos, mesmo que isso signifique lutar sozinho.",
        link: "https://swordartonline.fandom.com/wiki/Kirito"
    },
    {
        titulo: "Monkey D. Luffy",
        img: "https://64.media.tumblr.com/af24fe79a16dc136ff2950e4e1ed47a5/dd9587a7dda0cc4b-26/s400x600/22a415060da5b34d5cadc553cf63e3062d3ebb3b.jpg",
        anime: "Anime: One Piece",
        descricao: "Capitão dos Piratas do Chapéu de Palha, Luffy é um pirata de coração puro e determinado a encontrar o One Piece e se tornar o Rei dos Piratas. Ele é impulsivo, mas também incrivelmente leal.",
        habilidades: "Gomu Gomu no Mi, Haki, Combate Corpo a Corpo",
        citacao: "Eu vou me tornar o Rei dos Piratas!",
        link: "https://onepiece.fandom.com/wiki/Monkey_D._Luffy"
    },
    {
        titulo: "Nami",
        img: "https://64.media.tumblr.com/376933fc82d1d32c63ded35f984404b2/tumblr_pj89juPeLA1w0po92_1280.jpg",
        anime: "Anime: One Piece",
        descricao: "A navegadora dos Piratas do Chapéu de Palha, Nami é inteligente e habilidosa em mapear o mar. Ela é esperta e determinada a proteger sua tripulação, usando sua astúcia e habilidades de navegação.",
        habilidades: "Navegação, Clima-Tact, Inteligência",
        citacao: "Eu protegerei meus amigos e farei o que for preciso.",
        link: "https://onepiece.fandom.com/wiki/Nami"
    },
    {
        titulo: "Roronoa Zoro",
        img: "https://i.pinimg.com/originals/90/a9/e0/90a9e0193c8b1eacec4f71255bec7d72.jpg",
        anime: "Anime: One Piece",
        descricao: "O espadachim dos Piratas do Chapéu de Palha, Zoro é um guerreiro formidável e usa um estilo único de três espadas. Ele é dedicado a se tornar o maior espadachim do mundo.",
        habilidades: "Santoryu, Haki, Super Força",
        citacao: "Eu nunca vou perder novamente. Nunca.",
        link: "https://onepiece.fandom.com/wiki/Roronoa_Zoro"
    },
    {
        titulo: "Sanji",
        img: "https://i.pinimg.com/736x/8a/d9/f8/8ad9f8400a8bf8221aee075cd38bffa1.jpg",
        anime: "Anime: One Piece",
        descricao: "O cozinheiro dos Piratas do Chapéu de Palha, Sanji é um mestre em artes marciais e culinária. Ele é cavalheiro e luta ferozmente para proteger seus amigos e seu sonho de encontrar o All Blue.",
        habilidades: "Black Leg Style, Haki, Combate Corpo a Corpo",
        citacao: "Eu sou o cozinheiro dos Chapéu de Palha. E eu protejo minha tripulação com cada prato que preparo.",
        link: "https://onepiece.fandom.com/wiki/Sanji"
    },
    {
        titulo: "Franky",
        img: "https://i.pinimg.com/736x/c3/d2/be/c3d2be815f08b4547d30ec9b866ab27f.jpg",
        anime: "Anime: One Piece",
        descricao: "O engenheiro dos Piratas do Chapéu de Palha, Franky é um ciborgue talentoso que construiu o Thousand Sunny. Ele é divertido e corajoso, sempre pronto para entrar em ação.",
        habilidades: "Engenharia, Ciborgue, Combate Corpo a Corpo",
        citacao: "Eu sou super! Vamos fazer isso acontecer!",
        link: "https://onepiece.fandom.com/wiki/Franky"
    },
    {
        titulo: "Usopp",
        img: "https://i.pinimg.com/736x/66/58/25/665825d2af6224853083e111f2c00fc6.jpg",
        anime: "Anime: One Piece",
        descricao: "O atirador dos Piratas do Chapéu de Palha, Usopp é conhecido por sua coragem e habilidades de precisão. Ele pode ser medroso, mas sempre encontra coragem para proteger seus amigos.",
        habilidades: "Atirador de Elite, Engenharia, Estratégia",
        citacao: "Eu posso ser um covarde, mas nunca vou abandonar meus amigos.",
        link: "https://onepiece.fandom.com/wiki/Usopp"
    },
    {
        titulo: "Chopper",
        img: "https://i.pinimg.com/474x/10/f6/fa/10f6fad38818bc8feee74ffad4d1f87c.jpg",
        anime: "Anime: One Piece",
        descricao: "O médico dos Piratas do Chapéu de Palha, Chopper é uma rena com habilidades de transformar-se em humano. Ele é corajoso e dedicado a cuidar de sua tripulação.",
        habilidades: "Transformação, Medicina, Combate Corpo a Corpo",
        citacao: "Eu sou o médico dos Piratas do Chapéu de Palha, e vou proteger a saúde de todos!",
        link: "https://onepiece.fandom.com/wiki/Tony_Tony_Chopper"
    },
    {
        titulo: "Nico Robin",
        img: "https://i.pinimg.com/originals/a7/4b/9c/a74b9c1a194f69d3c89a016bda1a32fa.jpg",
        anime: "Anime: One Piece",
        descricao: "A arqueóloga dos Piratas do Chapéu de Palha, Robin é uma mulher inteligente e habilidosa que busca descobrir a verdadeira história do mundo. Ela é calma e calculista em batalha.",
        habilidades: "Hana Hana no Mi, Arqueologia, Inteligência",
        citacao: "Eu só quero saber a verdade. E farei o que for preciso para encontrá-la.",
        link: "https://onepiece.fandom.com/wiki/Nico_Robin"
    },
    {
        titulo: "Brook",
        img: "https://i.pinimg.com/originals/01/c2/f2/01c2f248a884c34aabc2c12c3ed0a7ef.jpg",
        anime: "Anime: One Piece",
        descricao: "O músico dos Piratas do Chapéu de Palha, Brook é um esqueleto vivo que tem habilidades únicas e é um espadachim talentoso. Ele é leal à sua tripulação e sempre procura trazer alegria aos outros.",
        habilidades: "Revive-Revive Fruit, Música, Espadachim",
        citacao: "Mesmo na morte, eu vou lutar pelo meu sonho!",
        link: "https://onepiece.fandom.com/wiki/Brook"
    },
    {
        titulo: "Trafalgar D. Water Law",
        img: "https://i.pinimg.com/originals/6c/fd/3a/6cfd3abf72e064e0e931bab5d15efd21.jpg",
        anime: "Anime: One Piece",
        descricao: "Capitão dos Piratas Heart, Law é um cirurgião da morte e um estrategista brilhante. Ele possui a habilidade Ope Ope no Mi, permitindo-lhe manipular a estrutura das coisas ao seu redor.",
        habilidades: "Ope Ope no Mi, Cirurgia, Estratégia",
        citacao: "Eu farei o que for necessário para alcançar meus objetivos.",
        link: "https://onepiece.fandom.com/wiki/Trafalgar_D._Water_Law"
    },
    {
        titulo: "Guts",
        img: "https://i.pinimg.com/564x/7d/f4/b7/7df4b7ea099d8a248da553b4135c8c82.jpg",
        anime: "Berserk",
        descricao: "Guts é o protagonista de *Berserk*, uma série marcada por sua jornada brutal e repleta de tragédias. Conhecido por sua força sobre-humana e habilidade com a espada, Guts é um guerreiro implacável que busca vingança e propósito em um mundo sombrio e cruel.",
        habilidades: "Habilidade com Espada, Força Sobrehumana, Estratégia de Combate",
        citacao: "A vida é uma luta. Não há nada além disso.",
        link: "https://berserk.fandom.com/wiki/Guts"
    },
    {
        titulo: "Ichigo Kurosaki",
        img : "https://i.pinimg.com/564x/16/63/7a/16637a790e6fa26409996f13ef4a6a46.jpg",
        anime : "Anime: Bleach",
        descricao: "Ichigo Kurosaki é o protagonista do anime Bleach. Depois de ganhar os poderes de um Shinigami, Ichigo se torna o protetor dos vivos e dos mortos, enfrentando inimigos poderosos em sua jornada para proteger seus amigos e o mundo espiritual.",
        habilidades: ["Habilidades: Zangetsu, Bankai, Hollowfication"],
        citacao: "Citação: Eu vou proteger todos, não importa o que aconteça.",
        link: "https://bleach.fandom.com/pt/wiki/Ichigo_Kurosaki"
    },
    {
        titulo: "Jinbe",
        img : "https://i.pinimg.com/originals/d0/d5/91/d0d59102cf996bdd113c54019099fea1.jpg",
        anime : "Anime: One Piece",
        descricao: "Jinbe é o timoneiro dos Piratas do Chapéu de Palha e um ex-Shichibukai. Ele é um homem-peixe e um mestre do Karatê dos Homens-Peixe. Jinbe é leal e sábio, e seu sonho é alcançar a coexistência pacífica entre humanos e homens-peixe.",
        habilidades: ["Habilidades: Karatê dos Homens-Peixe, Haki, Timoneiro"],
        citacao: "Citação: Eu sou Jinbe, e eu vou proteger meus amigos!",
        link: "https://onepiece.fandom.com/pt/wiki/Jinbe"
    },
    {
        titulo: "Heat",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Heat é um dos membros dos Piratas do Kid, conhecido por sua habilidade de controlar o fogo. Ele é um lutador feroz e desempenha um papel importante na tripulação, usando suas habilidades para combater os inimigos e apoiar seu capitão.",
        habilidades: ["Habilidades: Controle de fogo, Força física"],
        citacao: "Citação: Vamos transformar o mundo em cinzas!",
        link: "https://onepiece.fandom.com/pt/wiki/Heat"
    },
    {
        titulo: "Roo",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Roo é outro membro dos Piratas do Kid. Ele é um combatente habilidoso, conhecido por sua força e resistência. Sua habilidade de lutar contra múltiplos inimigos ao mesmo tempo o torna um aliado valioso na tripulação.",
        habilidades: ["Habilidades: Força Física, Habilidade em combate"],
        citacao: "Citação: Vamos acabar com tudo!",
        link: "https://onepiece.fandom.com/pt/wiki/Roo"
    },
    {
        titulo: "Scratchmen Apoo",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Scratchmen Apoo é um dos membros dos Piratas do Kid e possui a habilidade da Apoo Apoo no Mi, que lhe permite transformar partes do seu corpo em instrumentos musicais e atacar com ondas sonoras. Ele é conhecido por sua criatividade e estilo de luta único.",
        habilidades: ["Habilidades: Apoo Apoo no Mi, Manipulação sonora"],
        citacao: "Citação: A música é a minha arma!",
        link: "https://onepiece.fandom.com/pt/wiki/Scratchmen_Apoo"
    },
    {
        titulo: "Eustass Kid",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Eustass Kid é o capitão dos Piratas do Kid e um dos Supernovas. Ele é conhecido por sua natureza violenta e seu desprezo pelos outros. Kid possui a habilidade da Jiki Jiki no Mi, que lhe permite controlar o magnetismo.",
        habilidades: ["Habilidades: Jiki Jiki no Mi, Magnetismo, Super força"],
        citacao: "Citação: Eu vou mostrar ao mundo o verdadeiro terror dos mares!",
        link: "https://onepiece.fandom.com/pt/wiki/Eustass_Kid"
    },
    {
        titulo: "Killer",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Killer é o braço direito de Eustass Kid e um dos membros mais fortes dos Piratas do Kid. Conhecido como 'Massacre Soldier', ele é um lutador habilidoso que usa lâminas giratórias em batalha.",
        habilidades: ["Habilidades: Combate corpo a corpo, Velocidade, Precisão"],
        citacao: "Citação: A única maneira de sobreviver é lutar.",
        link: "https://onepiece.fandom.com/pt/wiki/Killer"
    },
    {
        titulo: "Edward Newgate (Barba Branca)",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Edward Newgate, mais conhecido como Barba Branca, é o capitão dos Piratas do Barba Branca e um dos Quatro Imperadores do Mar. Ele é famoso por sua imensa força e pelo poder da Gura Gura no Mi, que lhe permite criar tremores e terremotos.",
        habilidades: ["Habilidades: Gura Gura no Mi, Super força, Haki"],
        citacao: "Citação: Eu sou o homem que vai se tornar o Rei dos Piratas!",
        link: "https://onepiece.fandom.com/pt/wiki/Edward_Newgate"
    },
    {
        titulo: "Marco",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Marco é o comandante da 1ª Divisão dos Piratas do Barba Branca e possui a habilidade da Tori Tori no Mi, Modelo: Fênix. Ele pode se transformar em uma fênix e curar-se rapidamente de ferimentos. Marco é conhecido por sua lealdade e força inabaláveis.",
        habilidades: ["Habilidades: Tori Tori no Mi, Modelo: Fênix, Cura rápida, Vôo"],
        citacao: "Citação: A era do Barba Branca nunca vai acabar.",
        link: "https://onepiece.fandom.com/pt/wiki/Marco"
    },
    {
        titulo: "Jozu",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Jozu é o comandante da 3ª Divisão dos Piratas do Barba Branca e possui a habilidade da Kira Kira no Mi, que lhe permite transformar seu corpo em cristal. Jozu é um lutador extremamente poderoso e resistente.",
        habilidades: ["Habilidades: Kira Kira no Mi, Transformação em cristal, Força física"],
        citacao: "Citação: Não há nada que eu não possa suportar!",
        link: "https://onepiece.fandom.com/pt/wiki/Jozu"
    },
    {
        titulo: "Vista",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Vista é o comandante da 5ª Divisão dos Piratas do Barba Branca. Ele é um espadachim extremamente habilidoso, conhecido por sua técnica de combate com espadas e por sua lealdade ao capitão.",
        habilidades: ["Habilidades: Espadachim mestre, Haki"],
        citacao: "Citação: A lealdade ao capitão vem antes de tudo.",
        link: "https://onepiece.fandom.com/pt/wiki/Vista"
    },
    {
        titulo: "Thatch",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Thatch foi o comandante da 4ª Divisão dos Piratas do Barba Branca. Ele é conhecido por sua habilidade de usar o Yami Yami no Mi, um poder que pode criar e manipular trevas. Thatch foi tragicamente morto por Blackbeard, que roubou seu fruto do demônio.",
        habilidades: ["Habilidades: Yami Yami no Mi (anteriormente), Combate físico"],
        citacao: "Citação: A justiça não tem nada a ver com a força.",
        link: "https://onepiece.fandom.com/pt/wiki/Thatch"
    },
    {
        titulo: "Izo",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Izo é o comandante da 16ª Divisão dos Piratas do Barba Branca e é conhecido por sua habilidade com pistolas e seu combate corpo a corpo. Ele é um guerreiro leal e confiável.",
        habilidades: ["Habilidades: Tiro com pistola, Combate corpo a corpo"],
        citacao: "Citação: A lealdade é o maior tesouro.",
        link: "https://onepiece.fandom.com/pt/wiki/Izo"
    },
    {
        titulo: "Portgas D. Ace",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Portgas D. Ace, também conhecido como Ace, é o irmão adotivo de Monkey D. Luffy e o ex-comandante da 2ª Divisão dos Piratas do Barba Branca. Ele possui a habilidade da Mera Mera no Mi, que lhe permite criar e controlar o fogo. Ace é conhecido por seu espírito indomável e lealdade aos seus amigos e à sua tripulação.",
        habilidades: ["Habilidades: Mera Mera no Mi, Controle de fogo, Força física"],
        citacao: "Citação: Eu sou o irmão de Luffy! E eu vou ser o homem que vai se tornar o Rei dos Piratas!",
        link: "https://onepiece.fandom.com/pt/wiki/Portgas_D._Ace"
    },
    {
        titulo: "Bepo",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Bepo é um dos membros dos Piratas Heart e o companheiro de Law. Ele é um urso polar antropomórfico e possui grande força e habilidades em combate. Bepo é leal a Law e desempenha um papel importante na tripulação como lutador e apoio.",
        habilidades: ["Habilidades: Força física, Habilidade em combate"],
        citacao: "Citação: Eu farei o que for preciso para proteger o capitão!",
        link: "https://onepiece.fandom.com/pt/wiki/Bepo"
    },
    {
        titulo: "Shachi",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Shachi é outro membro dos Piratas Heart e um dos principais combatentes da tripulação. Ele é conhecido por sua habilidade em combate e sua lealdade ao capitão Law. Shachi é um lutador confiável e uma parte essencial da equipe.",
        habilidades: ["Habilidades: Combate corpo a corpo, Lealdade"],
        citacao: "Citação: Estou pronto para lutar ao lado de Law até o fim.",
        link: "https://onepiece.fandom.com/pt/wiki/Shachi"
    },
    {
        titulo: "Penguin",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Penguin é um membro dos Piratas Heart e trabalha ao lado de Shachi. Ele é conhecido por sua habilidade de combate e por ser um membro leal da tripulação. Penguin é confiável e desempenha um papel importante nas batalhas.",
        habilidades: ["Habilidades: Combate corpo a corpo, Lealdade"],
        citacao: "Citação: Vamos mostrar a todos o poder dos Piratas Heart!",
        link: "https://onepiece.fandom.com/pt/wiki/Penguin"
    },
    {
        titulo: "Boa Hancock",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Boa Hancock é a capitã dos Piratas Kuja e uma das Sete Grandes Corsárias. Ela possui a habilidade da Mero Mero no Mi, que lhe permite transformar qualquer pessoa em pedra ao se apaixonar por ela. Hancock é conhecida por sua beleza estonteante e seu comportamento orgulhoso, além de ser uma das mulheres mais poderosas do mundo.",
        habilidades: ["Habilidades: Mero Mero no Mi, Haki"],
        citacao: "Citação: Eu sou a imperatriz do amor e da beleza.",
        link: "https://onepiece.fandom.com/pt/wiki/Boa_Hancock"
    },
    {
        titulo: "Marguerite",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Marguerite é uma das guerreiras dos Piratas Kuja e uma das principais subordinadas de Boa Hancock. Ela é conhecida por sua habilidade em combate e por sua lealdade à capitã. Marguerite é uma combatente experiente e desempenha um papel importante na tripulação.",
        habilidades: ["Habilidades: Combate corpo a corpo, Arco e flecha"],
        citacao: "Citação: Seguiremos a capitã até o fim.",
        link: "https://onepiece.fandom.com/pt/wiki/Marguerite"
    },
    {
        titulo: "Sweet Pea",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Sweet Pea é outra guerreira dos Piratas Kuja e serve diretamente a Boa Hancock. Ela é conhecida por sua habilidade em combate e por seu papel em proteger a capitã e a tripulação.",
        habilidades: ["Habilidades: Combate corpo a corpo, Defesa"],
        citacao: "Citação: Vamos proteger a capitã a todo custo.",
        link: "https://onepiece.fandom.com/pt/wiki/Sweet_Pea"
    },
    {
        titulo: "Sandersonia",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Sandersonia é a irmã mais velha de Boa Hancock e uma das Três Irmãs Guerreira dos Piratas Kuja. Ela possui a habilidade da Hebi Hebi no Mi, Modelo: Anaconda, que lhe permite transformar seu corpo em uma enorme anaconda. Sandersonia é uma combatente poderosa e tem um papel significativo na proteção da ilha de Amazon Lily.",
        habilidades: ["Habilidades: Hebi Hebi no Mi, Modelo: Anaconda, Força física"],
        citacao: "Citação: Eu lutarei até o fim para proteger nossa terra.",
        link: "https://onepiece.fandom.com/pt/wiki/Sandersonia"
    },
    {
        titulo: "Marigold",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Marigold é a irmã mais nova de Boa Hancock e também uma das Três Irmãs Guerreira dos Piratas Kuja. Ela possui a habilidade da Hebi Hebi no Mi, Modelo: Cobra, que lhe permite transformar seu corpo em uma enorme cobra. Marigold é uma combatente feroz e leal à sua irmã e à tripulação.",
        habilidades: ["Habilidades: Hebi Hebi no Mi, Modelo: Cobra, Agilidade"],
        citacao: "Citação: A lealdade à capitã é inabalável.",
        link: "https://onepiece.fandom.com/pt/wiki/Marigold"
    },
    {
        titulo: "Sabo",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Sabo é o chefe do Exército Revolucionário e um dos irmãos adotivos de Luffy e Ace. Ele foi o melhor amigo de infância de Luffy e Ace e possui a habilidade da Mera Mera no Mi, que lhe permite controlar e se transformar em fogo. Sabo luta para derrubar o Governo Mundial e trazer justiça ao mundo.",
        habilidades: ["Habilidades: Mera Mera no Mi, Haki do Armamento, Haki da Observação"],
        citacao: "Citação: Eu vou fazer o que for preciso para proteger meus amigos e minha família.",
        link: "https://onepiece.fandom.com/pt/wiki/Sabo"
    },
    {
        titulo: "Monkey D. Dragon",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Monkey D. Dragon é o líder do Exército Revolucionário e o pai de Monkey D. Luffy. Ele é conhecido por sua luta contra o Governo Mundial e por suas habilidades de combate extremamente poderosas. Dragon é uma figura misteriosa e enigmática, que opera nas sombras para promover a revolução.",
        habilidades: ["Habilidades: Haki (não detalhado), Estratégia, Combate"],
        citacao: "Citação: A liberdade é o que eu desejo para todos.",
        link: "https://onepiece.fandom.com/pt/wiki/Monkey_D._Dragon"
    },
    {
        titulo: "Emporio Ivankov",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Emporio Ivankov é um dos líderes do Exército Revolucionário e um dos mais poderosos lutadores de Okama. Ele possui a habilidade da Horm-Horm Fruit, que lhe permite manipular hormônios e alterar as características físicas das pessoas. Ivankov é conhecido por sua personalidade extravagante e seu papel crucial na batalha contra o Governo Mundial.",
        habilidades: ["Habilidades: Horm-Horm Fruit, Haki (não detalhado)"],
        citacao: "Citação: Todos têm o direito de escolher seu próprio caminho!",
        link: "https://onepiece.fandom.com/pt/wiki/Emporio_Ivankov"
    },
    {
        titulo: "Belo Betty",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Belo Betty é uma das líderes do Exército Revolucionário e é conhecida como a 'Queen of the Revolution'. Ela possui a habilidade da Kobu Kobu no Mi, que lhe permite inspirar e encorajar os outros a lutar. Betty é uma líder carismática que usa sua habilidade para fortalecer a moral das tropas revolucionárias.",
        habilidades: ["Habilidades: Kobu Kobu no Mi, Haki (não detalhado)"],
        citacao: "Citação: Com coragem e determinação, podemos mudar o mundo!",
        link: "https://onepiece.fandom.com/pt/wiki/Belo_Betty"
    },
    {
        titulo: "Karasu",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Karasu é um dos líderes do Exército Revolucionário e é conhecido por sua habilidade com a fruta do diabo que lhe permite controlar e transformar seu corpo em corvos. Karasu é um estrategista habilidoso e um combatente formidável, desempenhando um papel crucial nas operações do Exército Revolucionário.",
        habilidades: ["Habilidades: Corvo Corvo no Mi", "Manipulação de corvos"],
        citacao: "Citação: A liberdade vem com grandes sacrifícios.",
        link: "https://onepiece.fandom.com/pt/wiki/Karasu"
    },
    {
        titulo: "Lindbergh",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Lindbergh é um dos líderes do Exército Revolucionário e um inventor brilhante. Ele é conhecido por suas habilidades tecnológicas e por criar várias invenções úteis para o Exército Revolucionário. Lindbergh é uma mente criativa e um estrategista valioso.",
        habilidades: ["Habilidades: Engenharia, Invenção"],
        citacao: "Citação: A tecnologia pode mudar o mundo para melhor.",
        link: "https://onepiece.fandom.com/pt/wiki/Lindbergh"
    },
    {
        titulo: "Marshall D. Teach (Barba Negra)",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Marshall D. Teach, conhecido como Barba Negra, é o capitão dos Piratas do Barba Negra e um dos antagonistas principais da série. Ele possui a habilidade de duas Frutas do Diabo: Yami Yami no Mi (Fruta das Trevas) e Gura Gura no Mi (Fruta do Terremoto), tornando-o um dos piratas mais temidos do mundo.",
        habilidades: ["Habilidades: Yami Yami no Mi, Gura Gura no Mi, Combate"],
        citacao: "Citação: Eu sou o homem que vai se tornar o Rei dos Piratas!",
        link: "https://onepiece.fandom.com/pt/wiki/Marshall_D._Teach"
    },
    {
        titulo: "Shiryu de las Flores",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Shiryu de las Flores é o ex-chefe dos carcereiros da Prisão Impel Down e o atual capitão dos Piratas do Barba Negra. Ele possui a habilidade da Suke Suke no Mi (Fruta da Invisibilidade), que lhe permite se tornar invisível, tornando-o um adversário perigoso em combate.",
        habilidades: ["Habilidades: Suke Suke no Mi, Espada"],
        citacao: "Citação: Eu sou a sombra que se esconde na luz.",
        link: "https://onepiece.fandom.com/pt/wiki/Shiryu"
    },
    {
        titulo: "Van Augur",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Van Augur é o atirador de elite dos Piratas do Barba Negra e um dos principais membros da tripulação. Ele possui a habilidade da Tori Tori no Mi, Modelo: Falcão, que lhe permite voar e ter uma visão aguçada, tornando-o um excelente atirador.",
        habilidades: ["Habilidades: Tori Tori no Mi, Modelo: Falcão, Armas de longo alcance"],
        citacao: "Citação: Minha mira é infalível.",
        link: "https://onepiece.fandom.com/pt/wiki/Van_Augur"
    },
    {
        titulo: "Jesus Burgess",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Jesus Burgess é o membro de mais destaque dos Piratas do Barba Negra e atua como o lutador da tripulação. Ele possui a habilidade da Bari Bari no Mi (Fruta do Escudo), que lhe permite criar escudos impenetráveis, além de ser um combatente extremamente forte.",
        habilidades: ["Habilidades: Bari Bari no Mi, Força física"],
        citacao: "Citação: Meu poder é inigualável.",
        link: "https://onepiece.fandom.com/pt/wiki/Jesus_Burgess"
    },
    {
        titulo: "Lafitte",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Lafitte é o navegador dos Piratas do Barba Negra e possui a habilidade da Tori Tori no Mi, Modelo: Falcão, que lhe permite voar. Ele é conhecido por sua habilidade de navegar e seu papel estratégico na tripulação.",
        habilidades: ["Habilidades: Tori Tori no Mi, Modelo: Falcão, Navegação"],
        citacao: "Citação: A liberdade dos céus é a minha paixão.",
        link: "https://onepiece.fandom.com/pt/wiki/Lafitte"
    },
    {
        titulo: "Buggy",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Buggy, conhecido como Buggy, o Palhaço, é o capitão dos Piratas do Buggy. Ele possui a habilidade da Bara Bara no Mi (Fruta do Corte), que lhe permite separar e manipular seu corpo em pedaços. Buggy é um personagem carismático e muitas vezes cômico, mas também é um dos piratas mais astutos e perigosos.",
        habilidades: ["Habilidades: Bara Bara no Mi, Combate"],
        citacao: "Citação: Eu sou o rei dos piratas! Ou pelo menos vou ser um dia!",
        link: "https://onepiece.fandom.com/pt/wiki/Buggy"
    },
    {
        titulo: "Caber",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Caber é um dos membros da tripulação dos Piratas do Buggy e atua como o chefe de uma das divisões da tripulação. Ele é conhecido por sua lealdade ao capitão Buggy e por seu papel como um dos principais combatentes da tripulação.",
        habilidades: ["Habilidades: Combate corpo a corpo"],
        citacao: "Citação: Vamos mostrar o poder dos Piratas do Buggy!",
        link: "https://onepiece.fandom.com/pt/wiki/Caber"
    },
    {
        titulo: "Mohji",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Mohji é o comandante dos Piratas do Buggy e um dos principais combatentes da tripulação. Ele é conhecido por sua habilidade em combate corpo a corpo e por sua lealdade ao capitão Buggy.",
        habilidades: ["Habilidades: Combate corpo a corpo, Manipulação de animais"],
        citacao: "Citação: Não subestime o poder dos Piratas do Buggy!",
        link: "https://onepiece.fandom.com/pt/wiki/Mohji"
    },
    {
        titulo: "Alvida",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Alvida é uma pirata que se une aos Piratas do Buggy após a sua derrota. Ela possui a habilidade da Sube Sube no Mi (Fruta do Escorregamento), que a torna imune a ataques físicos e permite que sua pele fique extremamente escorregadia.",
        habilidades: ["Habilidades: Sube Sube no Mi, Combate corpo a corpo"],
        citacao: "Citação: A beleza e a força andam lado a lado!",
        link: "https://onepiece.fandom.com/pt/wiki/Alvida"
    },
    {
        titulo: "Mr. 3 (Galdino)",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Mr. 3, também conhecido como Galdino, é um ex-agente da Baroque Works que se une aos Piratas do Buggy. Ele possui a habilidade da Doru Doru no Mi (Fruta da Cera), que lhe permite criar e controlar cera, moldando-a em várias formas.",
        habilidades: ["Habilidades: Doru Doru no Mi, Criação de cera"],
        citacao: "Citação: A cera é uma das melhores armas!",
        link: "https://onepiece.fandom.com/pt/wiki/Galdino"
    },
    {
        titulo: "Shanks",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Shanks, conhecido como Shanks, o Ruivo, é o capitão dos Piratas do Ruivo e um dos Quatro Imperadores do Novo Mundo. Ele é conhecido por sua personalidade carismática e por ser um dos piratas mais poderosos e respeitados do mundo. Shanks possui uma habilidade formidável com a espada e um forte domínio do Haki.",
        habilidades: ["Habilidades: Espada, Haki do Rei, Haki do Armamento, Haki da Observação"],
        citacao: "Citação: A verdadeira liberdade é encontrada na busca de nossos sonhos.",
        link: "https://onepiece.fandom.com/pt/wiki/Shanks"
    },
    {
        titulo: "Dracule Mihawk",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Dracule Mihawk, conhecido como o Maior Espadachim do Mundo, é um dos Sete Guerreiros do Mar e um dos personagens mais temidos em combate. Ele é conhecido por sua habilidade excepcional com a espada, possuindo a espada negra Yoru, uma das 12 Espadas de Grandes Qualidades. Mihawk é um guerreiro formidável e um rival respeitado de Shanks.",
        habilidades: ["Habilidades: Espada (Yoru), Haki do Armamento, Haki da Observação"],
        citacao: "Citação: Eu não luto por diversão, mas sim por desafio.",
        link: "https://onepiece.fandom.com/pt/wiki/Dracule_Mihawk"
    },
    {
        titulo: "Donquixote Doflamingo",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Donquixote Doflamingo, conhecido como Doflamingo, é o capitão dos Piratas Donquixote e um ex-Cross Guild. Ele possui a habilidade da Ito Ito no Mi (Fruta do Fio), que lhe permite criar e manipular fios de cristal. Doflamingo é um antagonista carismático e perigoso, com uma personalidade cruel e manipuladora.",
        habilidades: ["Habilidades: Ito Ito no Mi, Manipulação de fios, Haki do Armamento, Haki da Observação"],
        citacao: "Citação: O mundo é um lugar cruel, e é por isso que é tão fascinante.",
        link: "https://onepiece.fandom.com/pt/wiki/Donquixote_Doflamingo"
    },
    {
        titulo: "Diamante",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Diamante é um dos principais comandantes dos Piratas Donquixote e o chefe da terceira divisão. Ele possui a habilidade da Buki Buki no Mi (Fruta da Arma), que lhe permite transformar partes do seu corpo em armas. Diamante é um lutador poderoso e leal ao capitão Doflamingo.",
        habilidades: ["Habilidades: Buki Buki no Mi, Transformação em armas"],
        citacao: "Citação: A força é o que define a nossa posição no mundo.",
        link: "https://onepiece.fandom.com/pt/wiki/Diamante"
    },
    {
        titulo: "Pica",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Pica é um dos principais comandantes dos Piratas Donquixote e o chefe da segunda divisão. Ele possui a habilidade da Ishi Ishi no Mi (Fruta da Pedra), que lhe permite transformar seu corpo em pedra e controlar rochas. Pica é um combatente formidável com uma habilidade única de manipulação de pedra.",
        habilidades: ["Habilidades: Ishi Ishi no Mi, Manipulação de pedra"],
        citacao: "Citação: A verdadeira força vem da imutabilidade.",
        link: "https://onepiece.fandom.com/pt/wiki/Pica"
    },
    {
        titulo: "Trebol",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Trebol é um dos principais comandantes dos Piratas Donquixote e o chefe da primeira divisão. Ele possui a habilidade da Beta Beta no Mi (Fruta da Mucosa), que lhe permite criar e controlar mucosas pegajosas. Trebol é conhecido por sua aparência grotesca e sua habilidade de combate única.",
        habilidades: ["Habilidades: Beta Beta no Mi, Manipulação de mucosa"],
        citacao: "Citação: A sujeira e a podridão têm seu lugar no mundo.",
        link: "https://onepiece.fandom.com/pt/wiki/Trebol"
    },
    {
        titulo: "Vergo",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Vergo é um ex-membro dos Piratas Donquixote e um dos principais subordinados de Doflamingo. Ele possui a habilidade da Buta Bota no Mi (Fruta do Porco), que lhe permite criar e controlar um corpo de fumaça. Vergo é um combatente poderoso com um estilo de luta brutal.",
        habilidades: ["Habilidades: Buta Buta no Mi, Transformação em fumaça"],
        citacao: "Citação: A força vem do medo e do respeito.",
        link: "https://onepiece.fandom.com/pt/wiki/Vergo"
    },
    {
        titulo: "Joker",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Joker é um dos apelidos de Donquixote Doflamingo e também é conhecido por sua presença enigmática e sua habilidade de manipular as pessoas ao seu redor. Ele é uma figura central nos eventos envolvendo os Piratas Donquixote e suas operações criminosas.",
        habilidades: ["Habilidades: Manipulação, Estratégia"],
        citacao: "Citação: O verdadeiro poder está na manipulação dos outros.",
        link: "https://onepiece.fandom.com/pt/wiki/Joker"
    },
    {
        titulo: "Rob Lucci",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Rob Lucci é um dos agentes mais poderosos da CP0 e um dos principais antagonistas da série. Ele possui a habilidade da Tori Tori no Mi, Modelo: Leopardo, que lhe dá características de um leopardo e aumenta suas habilidades de combate. Lucci é conhecido por sua frieza e eficiência em missões.",
        habilidades: ["Habilidades: Tori Tori no Mi, Modelo: Leopardo, Rokushiki"],
        citacao: "Citação: Eu sou um agente do Governo Mundial. Minha missão é a única coisa que importa.",
        link: "https://onepiece.fandom.com/pt/wiki/Rob_Lucci"
    },
    {
        titulo: "Kaku",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Kaku é um agente da CP0 e também possui a habilidade da Tori Tori no Mi, Modelo: Girafa, que lhe permite transformar partes do seu corpo em girafa. Ele é um lutador habilidoso com domínio das técnicas de Rokushiki e um membro respeitado da CP0.",
        habilidades: ["Habilidades: Tori Tori no Mi, Modelo: Girafa, Rokushiki"],
        citacao: "Citação: O poder de um agente da CP0 está em sua habilidade de cumprir ordens.",
        link: "https://onepiece.fandom.com/pt/wiki/Kaku"
    },
    {
        titulo: "Jabura",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Jabura é um ex-agente da CP9 e um dos membros da CP0. Ele possui a habilidade da Tori Tori no Mi, Modelo: Lobo, que lhe permite transformar partes de seu corpo em lobo. Jabura é conhecido por sua força e agilidade, além de suas habilidades em Rokushiki.",
        habilidades: ["Habilidades: Tori Tori no Mi, Modelo: Lobo, Rokushiki"],
        citacao: "Citação: A força é a chave para a lealdade.",
        link: "https://onepiece.fandom.com/pt/wiki/Jabura"
    },
    {
        titulo: "Spandam",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Spandam é um ex-agente da CP9 e um dos vilões da série. Ele é conhecido por sua posição de poder dentro da organização e por usar seu status para manipular outros. Embora não possua habilidades de combate excepcionais, sua influência na CP0 é significativa.",
        habilidades: ["Habilidades: Manipulação, Influência"],
        citacao: "Citação: O poder é algo que deve ser usado para controle.",
        link: "https://onepiece.fandom.com/pt/wiki/Spandam"
    },
    {
        titulo: "Gol D. Roger",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Gol D. Roger, também conhecido como o Rei dos Piratas, é o capitão dos Piratas do Roger. Ele foi o único a alcançar o fim do Grand Line e descobrir o One Piece. Roger é conhecido por sua força incomparável e por seu legado que inspirou a Grande Era dos Piratas.",
        habilidades: ["Habilidades: Haki do Rei, Haki do Armamento, Haki da Observação"],
        citacao: "Citação: Eu deixei o maior tesouro do mundo naquele lugar. Vocês devem procurá-lo!",
        link: "https://onepiece.fandom.com/pt/wiki/Gol_D._Roger"
    },
    {
        titulo: "Silvers Rayleigh",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Silvers Rayleigh, conhecido como o 'Rei dos Sombras', é o ex-primeiro oficial dos Piratas do Roger. Ele é um dos maiores espadachins do mundo e possui um domínio impressionante do Haki. Após a queda dos Piratas do Roger, Rayleigh tornou-se um mentor e guia para Luffy e seus companheiros.",
        habilidades: ["Habilidades: Espada, Haki do Rei, Haki do Armamento, Haki da Observação"],
        citacao: "Citação: O que importa é o que você deixa para trás.",
        link: "https://onepiece.fandom.com/pt/wiki/Silvers_Rayleigh"
    },
    {
        titulo: "Scopper Gaban",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Scopper Gaban é um dos membros dos Piratas do Roger e era um dos principais oficiais da tripulação. Embora não seja muito detalhado na série, ele é conhecido por sua força e habilidade no combate.",
        habilidades: ["Habilidades: Combate corpo a corpo, Estratégia"],
        citacao: "Citação: A verdadeira aventura começa quando você está disposto a arriscar tudo.",
        link: "https://onepiece.fandom.com/pt/wiki/Scopper_Gaban"
    },
    {
        titulo: "Kozuki Oden",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Kozuki Oden foi um importante membro dos Piratas do Roger e anteriormente o daimyo de Wano. Ele é conhecido por sua força impressionante e por seu papel crucial na descoberta do One Piece. Oden também é o pai de Momonosuke e Hiyori.",
        habilidades: ["Habilidades: Espada, Haki do Rei, Haki do Armamento"],
        citacao: "Citação: Se eu não puder lutar, então deixarei meu desejo em suas mãos.",
        link: "https://onepiece.fandom.com/pt/wiki/Kozuki_Oden"
    },
    {
        titulo: "Orochi",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Kurozumi Orochi é um antagonista que não fez parte dos Piratas do Roger, mas é um vilão central na história de Wano. Ele é o atual shogun de Wano e é conhecido por sua crueldade e manipulação.",
        habilidades: ["Habilidades: Manipulação política, Força"],
        citacao: "Citação: O poder é tudo o que importa.",
        link: "https://onepiece.fandom.com/pt/wiki/Kurozumi_Orochi"
    },
    {
        titulo: "Enel",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Enel é o autoproclamado Deus de Skypiea, conhecido por sua habilidade com a Goro Goro no Mi (Fruta do Trovão), que lhe concede o poder de controlar e transformar-se em eletricidade. Enel é um antagonista formidável com uma visão megalomaníaca e um desejo de conquistar o mundo com seu poder elétrico.",
        habilidades: ["Habilidades: Goro Goro no Mi (Fruta do Trovão), Manipulação de eletricidade, Voo"],
        citacao: "Citação: Eu sou um Deus, e este mundo é apenas uma etapa no meu caminho para a eternidade.",
        link: "https://onepiece.fandom.com/pt/wiki/Enel"
    },
    {
        titulo: "Sakazuki (Akainu)",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Sakazuki, conhecido como Akainu, é um almirante da Marinha e é um dos personagens mais temidos da série. Ele possui a habilidade da Magu Magu no Mi (Fruta do Magma), que lhe permite criar e controlar magma. Akainu é conhecido por sua natureza implacável e por sua visão rígida sobre justiça.",
        habilidades: ["Habilidades: Magu Magu no Mi, Manipulação de magma"],
        citacao: "Citação: A justiça absoluta deve ser impiedosa.",
        link: "https://onepiece.fandom.com/pt/wiki/Sakazuki"
    },
    {
        titulo: "Sengoku",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Sengoku é o ex-Almirante da Marinha e é conhecido como o 'Buda'. Ele possui a habilidade da Hito Hito no Mi, Modelo: Daibutsu, que lhe permite transformar-se em um gigante de bronze semelhante a um Buda. Sengoku é conhecido por seu comando eficaz e por sua sabedoria.",
        habilidades: ["Habilidades: Hito Hito no Mi, Modelo: Daibutsu, Estratégia"],
        citacao: "Citação: A justiça não pode ser moldada apenas pela força, mas pela sabedoria.",
        link: "https://onepiece.fandom.com/pt/wiki/Sengoku"
    },
    {
        titulo: "Aokiji (Kuzan)",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Aokiji, conhecido como Kuzan, é um ex-almirante da Marinha e possui a habilidade da Hie Hie no Mi (Fruta do Gelo), que lhe permite criar e controlar gelo. Ele é conhecido por seu comportamento tranquilo e suas visões mais equilibradas sobre justiça.",
        habilidades: ["Habilidades: Hie Hie no Mi, Manipulação de gelo"],
        citacao: "Citação: A verdadeira justiça é encontrada no equilíbrio.",
        link: "https://onepiece.fandom.com/pt/wiki/Aokiji"
    },
    {
        titulo: "Kizaru (Borsalino)",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Kizaru, conhecido como Borsalino, é um almirante da Marinha e possui a habilidade da Pika Pika no Mi (Fruta da Luz), que lhe permite criar e controlar luz. Kizaru é conhecido por seu estilo descontraído e sua velocidade impressionante em combate.",
        habilidades: ["Habilidades: Pika Pika no Mi, Manipulação de luz"],
        citacao: "Citação: A luz é rápida, mas também pode ser moldada pela mente.",
        link: "https://onepiece.fandom.com/pt/wiki/Kizaru"
    },
    {
        titulo: "Fujitora (Issho)",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Fujitora, conhecido como Issho, é um almirante cego da Marinha que possui a habilidade da Zushi Zushi no Mi (Fruta da Gravidade), que lhe permite controlar a gravidade. Ele é conhecido por sua visão equilibrada de justiça e por seu comportamento digno.",
        habilidades: ["Habilidades: Zushi Zushi no Mi, Manipulação de gravidade"],
        citacao: "Citação: A verdadeira justiça não é simplesmente imposta, mas equilibrada.",
        link: "https://onepiece.fandom.com/pt/wiki/Fujitora"
    },
    {
        titulo: "Smoker",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Smoker é um vice-almirante da Marinha conhecido por sua habilidade com a Moku Moku no Mi (Fruta da Fumaça), que lhe permite criar e controlar fumaça. Ele é um combatente tenaz e tem uma forte determinação em capturar Luffy e seus aliados.",
        habilidades: ["Habilidades: Moku Moku no Mi, Manipulação de fumaça"],
        citacao: "Citação: A justiça é alcançada através da perseverança.",
        link: "https://onepiece.fandom.com/pt/wiki/Smoker"
    },
    {
        titulo: "Tashigi",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Tashigi é uma tenente comandante da Marinha e é conhecida por sua habilidade com a espada e sua dedicação em coletar espadas poderosas. Ela é uma combatente habilidosa e possui uma forte moralidade em relação à justiça.",
        habilidades: ["Habilidades: Espada, Haki do Armamento"],
        citacao: "Citação: Espadas são mais do que armas; são símbolos de justiça.",
        link: "https://onepiece.fandom.com/pt/wiki/Tashigi"
    },
    {
        titulo: "Borsalino",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Borsalino é um almirante da Marinha, conhecido pelo codinome Kizaru. Ele possui a habilidade da Pika Pika no Mi (Fruta da Luz), que lhe permite se mover na velocidade da luz e atacar com feixes luminosos.",
        habilidades: ["Habilidades: Pika Pika no Mi, Manipulação de luz"],
        citacao: "Citação: A velocidade da luz é a chave para a verdadeira justiça.",
        link: "https://onepiece.fandom.com/pt/wiki/Borsalino"
    },
    {
        titulo: "Monkey D. Garp",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Monkey D. Garp é um vice-almirante da Marinha e é conhecido como o 'Herói da Marinha' devido às suas numerosas conquistas e sua resistência contra os piratas. Ele é o avô de Monkey D. Luffy e pai de Monkey D. Dragon, e é conhecido por sua força imensa e seu estilo de combate não convencional.",
        habilidades: ["Habilidades: Força sobre-humana, Haki do Armamento"],
        citacao: "Citação: Se você quer proteger alguém, você deve estar disposto a se tornar mais forte do que qualquer um.",
        link: "https://onepiece.fandom.com/pt/wiki/Monkey_D._Garp"
    },
    {
        titulo: "Coby",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Coby é um personagem que começa como um jovem marujo da Marinha com grandes sonhos de se tornar um almirante. Ele é conhecido por sua determinação e crescimento significativo ao longo da série, passando de um marinheiro inexperiente para um tenente comandante respeitado.",
        habilidades: ["Habilidades: Treinamento militar, Haki do Armamento (desenvolvido mais tarde)"],
        citacao: "Citação: Eu vou me tornar um almirante da Marinha e proteger a justiça!",
        link: "https://onepiece.fandom.com/pt/wiki/Coby"
    },
    {
        titulo: "Helmeppo",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Helmeppo é o parceiro de Coby e um dos personagens que inicia sua jornada como um jovem marinheiro. Ele é conhecido por sua evolução ao longo da série, passando de um jovem mimado para um oficial da Marinha que trabalha ao lado de Coby.",
        habilidades: ["Habilidades: Treinamento militar, Estratégia"],
        citacao: "Citação: A verdadeira força vem de acreditar em si mesmo e em seus amigos.",
        link: "https://onepiece.fandom.com/pt/wiki/Helmeppo"
    },
    {
        titulo: "Big Mom (Charlotte Linlin)",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Charlotte Linlin, conhecida como Big Mom, é uma das Quatro Imperadores do Novo Mundo e capitã dos Piratas da Big Mom. Ela possui a habilidade da Soru Soru no Mi (Fruta das Almas), que lhe permite manipular as almas das pessoas e criar homies, seres animados por almas roubadas. Big Mom é uma figura temida por sua imensa força e seu comportamento imprevisível.",
        habilidades: ["Habilidades: Soru Soru no Mi, Manipulação de almas, Super força"],
        citacao: "Citação: Eu quero criar um mundo onde todos possam comer o que quiserem!",
        link: "https://onepiece.fandom.com/pt/wiki/Big_Mom"
    },
    {
        titulo: "Katakuri (Charlotte Katakuri)",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Charlotte Katakuri é o comandante da Segunda Divisão dos Piratas da Big Mom e um dos filhos mais poderosos de Big Mom. Ele possui a habilidade da Mochi Mochi no Mi (Fruta do Mochi), que lhe permite criar e manipular mochi. Katakuri é conhecido por sua habilidade de prever os movimentos dos oponentes e por sua impressionante força e habilidades de combate.",
        habilidades: ["Habilidades: Mochi Mochi no Mi, Manipulação de mochi, Haki do Observação (avançado)"],
        citacao: "Citação: Eu sou o homem mais forte da Big Mom Pirates e não permitirei que ninguém me derrote.",
        link: "https://onepiece.fandom.com/pt/wiki/Charlotte_Katakuri"
    },
    {
        titulo: "Smoothie (Charlotte Smoothie)",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Charlotte Smoothie é a comandante da Terceira Divisão dos Piratas da Big Mom e uma das filhas de Big Mom. Ela possui a habilidade da Shibo Shibo no Mi (Fruta da Laranja), que lhe permite absorver líquidos dos corpos dos inimigos e usar esse líquido como uma arma. Smoothie é conhecida por sua aparência imponente e habilidades de combate impressionantes.",
        habilidades: ["Habilidades: Shibo Shibo no Mi, Manipulação de líquidos"],
        citacao: "Citação: A força de um guerreiro não está apenas na habilidade, mas na coragem de enfrentar qualquer desafio.",
        link: "https://onepiece.fandom.com/pt/wiki/Charlotte_Smoothie"
    },
    {
        titulo: "Cracker (Charlotte Cracker)",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Charlotte Cracker é o comandante da Décima Divisão dos Piratas da Big Mom e um dos filhos de Big Mom. Ele possui a habilidade da Bisu Bisu no Mi (Fruta do Biscoito), que lhe permite criar e controlar biscoitos, além de produzir soldados de biscoito para combater seus inimigos. Cracker é conhecido por sua habilidade de criar um exército de biscoitos e sua força formidável.",
        habilidades: ["Habilidades: Bisu Bisu no Mi, Criação e controle de biscoitos"],
        citacao: "Citação: A verdadeira força está em não subestimar seus oponentes.",
        link: "https://onepiece.fandom.com/pt/wiki/Charlotte_Cracker"
    },
    {
        titulo: "Perospero (Charlotte Perospero)",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Charlotte Perospero é o comandante da Primeira Divisão dos Piratas da Big Mom e um dos filhos mais velhos de Big Mom. Ele possui a habilidade da Pero Pero no Mi (Fruta do Caramelo), que lhe permite criar e manipular caramelos. Perospero é conhecido por suas habilidades criativas e seu comportamento astuto.",
        habilidades: ["Habilidades: Pero Pero no Mi, Manipulação de caramelos"],
        citacao: "Citação: A vida é doce para aqueles que sabem como aproveitar cada oportunidade.",
        link: "https://onepiece.fandom.com/pt/wiki/Charlotte_Perospero"
    },
    {
        titulo: "Pudding (Charlotte Pudding)",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Charlotte Pudding é uma das filhas de Big Mom e tem a habilidade da Soru Soru no Mi (Fruta dos Olhos), que lhe permite criar ilusões com seus olhos. Ela é conhecida por sua personalidade complexa e sua habilidade em enganar e manipular os outros.",
        habilidades: ["Habilidades: Soru Soru no Mi, Criação de ilusões"],
        citacao: "Citação: A verdade é muitas vezes mascarada pela ilusão.",
        link: "https://onepiece.fandom.com/pt/wiki/Charlotte_Pudding"
    },
    {
        titulo: "Kaido",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Kaido, conhecido como Kaido das Cem Bestas, é um dos Quatro Imperadores do Novo Mundo e capitão dos Piratas das Bestas. Ele possui a habilidade da Uo Uo no Mi, Modelo: Dragão (Fruta do Dragão), que lhe permite se transformar em um gigantesco dragão. Kaido é conhecido por sua imensa força, resistência e desejo de causar caos.",
        habilidades: ["Habilidades: Uo Uo no Mi, Modelo: Dragão, Super força, Imunidade a danos graves"],
        citacao: "Citação: Eu sou a besta mais forte do mundo e nada pode me deter.",
        link: "https://onepiece.fandom.com/pt/wiki/Kaido"
    },
    {
        titulo: "Jack",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Jack é um dos Tenentes dos Piratas das Bestas e conhecido como Jack o Dócil. Ele possui a habilidade da Zou Zou no Mi, Modelo: Mamute (Fruta do Mamute), que lhe permite se transformar em um gigantesco mamute. Jack é um combatente brutal com uma reputação de causar destruição.",
        habilidades: ["Habilidades: Zou Zou no Mi, Modelo: Mamute, Super força"],
        citacao: "Citação: A destruição é meu único objetivo, e eu vou alcançá-la.",
        link: "https://onepiece.fandom.com/pt/wiki/Jack"
    },
    {
        titulo: "Queen",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Queen é um dos Tenentes dos Piratas das Bestas e conhecido como Queen o Plague. Ele possui a habilidade da Ryu Ryu no Mi, Modelo: Brontossauro (Fruta do Brontossauro), que lhe permite se transformar em um gigantesco brontossauro. Queen é um cientista e estrategista cruel, que utiliza suas habilidades para causar caos.",
        habilidades: ["Habilidades: Ryu Ryu no Mi, Modelo: Brontossauro, Super força, Manipulação de doenças"],
        citacao: "Citação: A doença e o caos são meus brinquedos.",
        link: "https://onepiece.fandom.com/pt/wiki/Queen"
    },
    {
        titulo: "King",
        img : "",
        anime : "Anime: One Piece",
        descricao: "King é um dos Tenentes dos Piratas das Bestas e conhecido como King o Dragão. Ele possui a habilidade da Ryu Ryu no Mi, Modelo: Pteranodon (Fruta do Pteranodon), que lhe permite se transformar em um gigantesco pteranodon. King é um lutador formidável e possui habilidades de combate aéreo excepcionais.",
        habilidades: ["Habilidades: Ryu Ryu no Mi, Modelo: Pteranodon, Voo, Super força"],
        citacao: "Citação: O céu é meu domínio e ninguém pode desafiá-lo.",
        link: "https://onepiece.fandom.com/pt/wiki/King"
    },
    {
        titulo: "Page One",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Page One é um dos subordinados de Kaido e um dos executores dos Piratas das Bestas. Ele possui a habilidade da Ryu Ryu no Mi, Modelo: Triceratops (Fruta do Triceratops), que lhe permite se transformar em um triceratops. Page One é conhecido por sua força bruta e habilidades de combate.",
        habilidades: ["Habilidades: Ryu Ryu no Mi, Modelo: Triceratops, Super força"],
        citacao: "Citação: Eu sou um dos melhores subordinados de Kaido e ninguém vai me superar.",
        link: "https://onepiece.fandom.com/pt/wiki/Page_One"
    },
    {
        titulo: "X Drake",
        img : "",
        anime : "Anime: One Piece",
        descricao: "X Drake é um ex-membro da Marinha e agora um dos subordinados de Kaido, conhecido por seu codinome 'D'. Ele possui a habilidade da Ryu Ryu no Mi, Modelo: Allosaurus (Fruta do Allosaurus), que lhe permite se transformar em um allossauro. X Drake é um combatente habilidoso e um estrategista astuto.",
        habilidades: ["Habilidades: Ryu Ryu no Mi, Modelo: Allosaurus, Super força"],
        citacao: "Citação: Eu lutei com a Marinha e agora luto ao lado dos Piratas das Bestas. Meu objetivo é claro.",
        link: "https://onepiece.fandom.com/pt/wiki/X_Drake"
    },
    {
        titulo: "Bartholomew Kuma",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Bartholomew Kuma é um dos Shichibukai, um grupo de piratas poderosos que foram autorizados pelo Governo Mundial a atuar fora da lei. Ele possui a habilidade da Paw Paw no Mi (Fruta do Urso), que lhe permite repelir qualquer coisa com suas palmas. Kuma é um personagem enigmático e tem uma ligação profunda com os Revolucionários.",
        habilidades: ["Habilidades: Paw Paw no Mi, Repulsão de objetos e ataques, Super força"],
        citacao: "Citação: Meu destino é servir aos outros.",
        link: "https://onepiece.fandom.com/pt/wiki/Bartholomew_Kuma"
    },
    {
        titulo: "Gecko Moria",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Gecko Moria é o capitão dos Piratas do Thriller Bark e um dos ex-Shichibukai. Ele possui a habilidade da Kage Kage no Mi (Fruta das Sombras), que lhe permite manipular sombras e usar essas sombras para criar zumbis e absorver habilidades.",
        habilidades: ["Habilidades: Kage Kage no Mi, Manipulação de sombras, Criação de zumbis"],
        citacao: "Citação: As sombras são o meu domínio e eu as usarei para alcançar a vitória.",
        link: "https://onepiece.fandom.com/pt/wiki/Gecko_Moria"
    },
    {
        titulo: "Crocodile",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Crocodile é um dos subordinados de Gecko Moria e é conhecido por sua habilidade com a areia, adquirida através da Suna Suna no Mi (Fruta da Areia). Ele é um combatente formidável e é conhecido por sua crueldade e astúcia.",
        habilidades: ["Habilidades: Suna Suna no Mi, Manipulação de areia"],
        citacao: "Citação: Eu sou o mestre da areia e nada pode me deter.",
        link: "https://onepiece.fandom.com/pt/wiki/Crocodile"
    },
    {
        titulo: "Perona",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Perona é uma dos subordinados de Gecko Moria e possui a habilidade da Hora Hora no Mi (Fruta dos Fantasmas), que lhe permite criar fantasmas que podem causar tristeza e desânimo nas pessoas. Ela é conhecida por sua personalidade excêntrica e seu poder peculiar.",
        habilidades: ["Habilidades: Hora Hora no Mi, Criação de fantasmas"],
        citacao: "Citação: Eu sou a rainha dos fantasmas e ninguém pode me desafiar.",
        link: "https://onepiece.fandom.com/pt/wiki/Perona"
    },
    {
        titulo: "Absalom",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Absalom é outro subordinado de Gecko Moria e possui a habilidade da Suke Suke no Mi (Fruta da Invisibilidade), que lhe permite se tornar invisível. Ele é conhecido por seu comportamento traiçoeiro e sua habilidade de se esconder.",
        habilidades: ["Habilidades: Suke Suke no Mi, Invisibilidade"],
        citacao: "Citação: Ninguém pode me ver, e é isso que me dá a vantagem.",
        link: "https://onepiece.fandom.com/pt/wiki/Absalom"
    },
    {
        titulo: "Ben Beckman",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Ben Beckman é o vice-capitão dos Piratas do Ruivo e é conhecido por sua incrível inteligência e habilidades estratégicas. Ele é um dos membros mais confiáveis e respeitados da tripulação de Shanks.",
        habilidades: ["Habilidades: Estratégia, Haki"],
        citacao: "Citação: A estratégia é a chave para a vitória.",
        link: "https://onepiece.fandom.com/pt/wiki/Ben_Beckman"
    },
    {
        titulo: "Yasopp",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Yasopp é o atirador dos Piratas do Ruivo e é conhecido por sua precisão excepcional com armas de longo alcance. Ele é um dos membros mais importantes da tripulação e um atirador habilidoso.",
        habilidades: ["Habilidades: Atirador de elite, Haki"],
        citacao: "Citação: A precisão é tudo para um atirador.",
        link: "https://onepiece.fandom.com/pt/wiki/Yasopp"
    },
    {
        titulo: "Lucky Roo",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Lucky Roo é um dos membros dos Piratas do Ruivo e é conhecido por sua habilidade em combate e seu comportamento descontraído. Ele é um dos lutadores mais confiáveis da tripulação.",
        habilidades: ["Habilidades: Combate corpo a corpo, Haki"],
        citacao: "Citação: Sempre é bom ter um pouco de sorte ao seu lado.",
        link: "https://onepiece.fandom.com/pt/wiki/Lucky_Roo"
    },
    {
        titulo: "Hongou",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Hongou é outro membro dos Piratas do Ruivo, conhecido por sua força e habilidade em combate. Ele é leal a Shanks e contribui significativamente para a força da tripulação.",
        habilidades: ["Habilidades: Força física, Combate"],
        citacao: "Citação: A força é um dos pilares da nossa tripulação.",
        link: "https://onepiece.fandom.com/pt/wiki/Hongou"
    },
    {
        titulo: "Nefertari Vivi",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Nefertari Vivi é a princesa do Reino de Alabasta e um importante aliado dos Piratas do Chapéu de Palha. Ela se junta a Luffy e sua tripulação durante o arco de Alabasta para ajudar a salvar seu reino do caos causado por Crocodile e seus subordinados. Vivi é conhecida por sua bravura e seu forte senso de dever.",
        habilidades: ["Habilidades: Habilidade diplomática, Combate básico", "Conhecimento estratégico"],
        citacao: "Citação: 'Não importa se vou ter que lutar sozinha, eu vou proteger meu reino!'",
        link: "https://onepiece.fandom.com/pt/wiki/Nefertari_Vivi"
    },
    {
        titulo: "Mansherry",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Mansherry é uma princesa do Reino de Tontatta e membro da tribo Tontatta, conhecida por sua habilidade com a Dwarf-Doctor, uma habilidade de cura extraordinária. Ela desempenha um papel crucial durante o arco de Dressrosa, ajudando os Piratas do Chapéu de Palha e seus aliados com suas habilidades de cura.",
        habilidades: ["Habilidades: Cura através de suas lágrimas", "Manipulação de cura"],
        citacao: "Citação: 'Eu só quero ajudar!'",
        link: "https://onepiece.fandom.com/pt/wiki/Mansherry"
    },
    {
        titulo: "Yamato",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Yamato é a filha de Kaido e uma das principais figuras no arco de Onigashima. Ela possui a habilidade da Uo Uo no Mi (Fruta do Dragão), que lhe permite se transformar em um dragão. Yamato idolatra o Oden Kozuki e busca libertar Wano do domínio de seu pai, Kaido. É conhecida por sua força impressionante e determinação.",
        habilidades: ["Habilidades: Uo Uo no Mi (Fruta do Dragão)", "Transformação em dragão", "Combate corpo a corpo"],
        citacao: "Citação: 'Eu sou o Oden!'",
        link: "https://onepiece.fandom.com/pt/wiki/Yamato"
    },
    {
        titulo: "Kuina",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Kuina é uma personagem do passado de Roronoa Zoro e é conhecida por ser uma espadachim extremamente talentosa. Ela treinava junto com Zoro e tinha o sonho de se tornar a melhor espadachim do mundo, mas sua vida foi interrompida tragicamente. Kuina é lembrada por sua habilidade e determinação.",
        habilidades: ["Habilidades: Espada", "Técnicas de espada avançadas"],
        citacao: "Citação: 'Não há dúvida de que um espadachim precisa ser o melhor.'",
        link: "https://onepiece.fandom.com/pt/wiki/Kuina"
    },
    {
        titulo: "Dr. Vegapunk",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Dr. Vegapunk é um dos mais brilhantes cientistas do mundo de *One Piece*. Ele é conhecido por suas inovações tecnológicas e suas contribuições para a Marinha e o governo mundial. Vegapunk é responsável por muitos avanços tecnológicos, incluindo a criação dos Pacifistas e a pesquisa sobre as Frutas do Diabo.",
        habilidades: ["Habilidades: Avanços tecnológicos", "Criação de Pacifistas e clones"],
        citacao: "Citação: 'A ciência não é apenas uma ferramenta, mas uma chave para entender o mundo.'",
        link: "https://onepiece.fandom.com/pt/wiki/Dr_Vegapunk"
    },
    {
        titulo: "Jewelry Bonney",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Jewelry Bonney é uma pirata e capitã dos Piratas Bonney. Ela é uma das Yonkou e é conhecida por sua habilidade com a Boryo no Mi (Fruta da Idade), que lhe permite manipular a idade das pessoas e objetos. Bonney é uma figura enigmática e poderosa com uma grande influência no Novo Mundo.",
        habilidades: ["Habilidades: Boryo no Mi (Fruta da Idade)", "Manipulação da idade"],
        citacao: "Citação: 'Eu não tenho intenção de seguir regras ou obedecer a qualquer autoridade!'",
        link: "https://onepiece.fandom.com/pt/wiki/Jewelry_Bonney"
    },
    {
        titulo: "Charlotte Pudding",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Charlotte Pudding é uma personagem da série *One Piece*, membro dos Piratas Big Mom e uma das filhas de Big Mom. Ela possui a habilidade da Soru Soru no Mi (Fruta das Almas), que permite manipular e ler memórias das pessoas. Pudding tem uma personalidade complexa, alternando entre um comportamento doce e suas intenções secretas.",
        habilidades: ["Habilidades: Soru Soru no Mi (Fruta das Almas)", "Manipulação de memórias"],
        citacao: "Citação: 'Eu só quero que todos sejam felizes.'",
        link: "https://onepiece.fandom.com/pt/wiki/Charlotte_Pudding"
    },
    {
        titulo: "Vinsmoke Niji",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Vinsmoke Niji é o segundo irmão mais velho de Sanji e é conhecido por suas habilidades de combate e poderes especiais devido às modificações genéticas. Ele é uma figura imponente com uma grande ambição de poder.",
        habilidades: ["Habilidades: Combate físico aprimorado", "Poderes genéticos"],
        citacao: "Citação: 'A verdadeira força vem de se superar.'",
        link: "https://onepiece.fandom.com/pt/wiki/Vinsmoke_Niji"
    },
    {
        titulo: "Vinsmoke Ichiji",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Vinsmoke Ichiji é o irmão mais velho de Sanji e um dos principais membros da família Vinsmoke. Ele possui habilidades aprimoradas devido à modificação genética e é conhecido por seu combate físico poderoso e habilidades de liderança.",
        habilidades: ["Habilidades: Combate físico aprimorado", "Técnicas de luta avançadas"],
        citacao: "Citação: 'A força é o que garante o respeito.'",
        link: "https://onepiece.fandom.com/pt/wiki/Vinsmoke_Ichiji"
    },
    {
        titulo: "Vinsmoke Reiju",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Vinsmoke Reiju é a irmã mais velha de Sanji e um dos membros mais habilidosos da família Vinsmoke. Ela possui habilidades especiais devido à modificação genética feita por seu pai e é conhecida por suas habilidades em combate e seus talentos médicos.",
        habilidades: ["Habilidades: Venenos e habilidades de combate", "Técnicas médicas"],
        citacao: "Citação: 'Eu vou proteger minha família, não importa o que aconteça.'",
        link: "https://onepiece.fandom.com/pt/wiki/Vinsmoke_Reiju"
    },
    {
        titulo: "Vinsmoke Judge",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Vinsmoke Judge é o pai de Sanji e o líder do Reino Germa. Ele é um cientista militar renomado e o criador dos Vinsmoke, uma família com habilidades genéticas aprimoradas. Judge é uma figura autoritária e tem uma visão distorcida do que é necessário para alcançar o poder e o controle.",
        habilidades: ["Habilidades: Ciência e engenharia genética", "Liderança militar"],
        citacao: "Citação: 'A força e o poder são tudo o que importa.'",
        link: "https://onepiece.fandom.com/pt/wiki/Vinsmoke_Judge"
    },
    {
        titulo: "Basil Hawkins",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Basil Hawkins é um dos principais antagonistas do arco de Punk Hazard e um dos Supernovas do Novo Mundo. Ele é o capitão dos Piratas Hawkins e possui a habilidade da Wara Wara no Mi (Fruta da Palha), que lhe permite criar e manipular palha e usar cartas de baralho para prever o futuro e desviar ataques.",
        habilidades: ["Habilidades: Wara Wara no Mi (Fruta da Palha)", "Manipulação de palha", "Previsão através de cartas"],
        citacao: "Citação: 'Eu acredito que o futuro é moldado pelas escolhas que fazemos.'",
        link: "https://onepiece.fandom.com/pt/wiki/Basil_Hawkins"
    },
    {
        titulo: "Zeff",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Zeff, também conhecido como 'Zeff o Vermelho', é um renomado chef e proprietário do Baratie, um restaurante flutuante. Ele é conhecido por suas habilidades excepcionais na cozinha e por seu passado como um pirata temido. Zeff é o mentor e figura paternal de Sanji, e suas experiências passadas desempenham um papel importante na vida de Sanji.",
        habilidades: ["Habilidades: Culinária de alta qualidade", "Combate corpo a corpo"],
        citacao: "Citação: 'A cozinha é uma arte e uma paixão, não apenas uma profissão.'",
        link: "https://onepiece.fandom.com/pt/wiki/Zeff"
    },
    {
        titulo: "Nojiko",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Nojiko é a irmã adotiva de Nami e uma das figuras importantes da vila de Cocoyashi. Ela é conhecida por sua personalidade amigável e sua dedicação à família e aos amigos. Nojiko ajuda a cuidar da vila e é uma presença reconfortante para Nami, especialmente durante os momentos difíceis.",
        habilidades: ["Habilidades: Habilidades básicas de sobrevivência", "Conhecimento sobre a vila de Cocoyashi"],
        citacao: "Citação: 'O que importa é que estamos juntos, não importa o que aconteça.'",
        link: "https://onepiece.fandom.com/pt/wiki/Nojiko"
    },
    {
        titulo: "Shirahoshi",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Shirahoshi, também conhecida como a Princesa do País dos Tritões, é uma das Filhas do Rei dos Tritões e uma das Armas Antigas conhecidas como Poseidon. Ela possui a habilidade de controlar e comunicar-se com os Reis dos Mares, criaturas gigantes do fundo do mar. Shirahoshi é uma figura central no arco de Sabaody e desempenha um papel crucial na história dos Tritões e na luta contra o governo mundial.",
        habilidades: ["Habilidades: Controle dos Reis dos Mares", "Comunicação com criaturas marinhas"],
        citacao: "Citação: 'Eu quero que todos vivam felizes e em paz.'",
        link: "https://onepiece.fandom.com/pt/wiki/Shirahoshi"
    },
    {
        titulo: "Kuroobi",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Kuroobi é um tritão e membro dos Piratas Arlong. Ele é um lutador habilidoso que usa suas habilidades de tritão para lutar contra seus inimigos e é conhecido por seu caráter leal a Arlong.",
        habilidades: ["Habilidades: Técnicas de combate com tridente", "Natação e habilidades de tritão"],
        citacao: "Citação: 'Eu vou proteger o território de Arlong com minha vida!'",
        link: "https://onepiece.fandom.com/pt/wiki/Kuroobi"
    },
    {
        titulo: "Hatchan",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Hatchan, também conhecido como Hachi, é um tritão que foi membro dos Piratas Arlong. Ele é conhecido por suas habilidades com espadas e seu caráter amável, em contraste com a crueldade de Arlong. Hatchan eventualmente se torna um aliado dos Piratas do Chapéu de Palha.",
        habilidades: ["Habilidades: Habilidades com espadas", "Natação e habilidades de tritão"],
        citacao: "Citação: 'Eu não quero lutar mais. Prefiro fazer amigos e viver em paz.'",
        link: "https://onepiece.fandom.com/pt/wiki/Hatchan"
    },
    {
        titulo: "Chouchou",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Chouchou é um dos membros dos Piratas Arlong. Ele é um tritão com habilidades específicas e serve como um dos subordinados de Arlong durante a sua opressão na Vila Cocoyashi.",
        habilidades: ["Habilidades: Combatente tritão"],
        citacao: "Citação: 'Eu farei o que for necessário para servir Arlong!'",
        link: "https://onepiece.fandom.com/pt/wiki/Chouchou"
    },
    {
        titulo: "Arlong",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Arlong é um tritão e ex-membro dos Piratas do Sol. Ele é o capitão dos Piratas Arlong e é conhecido por sua crueldade e opressão sobre a Vila Cocoyashi. Arlong possui uma força imensa e habilidades de combate formidáveis, tornando-o um inimigo perigoso para os Piratas do Chapéu de Palha.",
        habilidades: ["Habilidades: Força sobre-humana", "Habilidades de combate com tridente", "Natação e habilidades de tritão"],
        citacao: "Citação: 'Os tritões são superiores aos humanos, e eu vou provar isso!'",
        link: "https://onepiece.fandom.com/pt/wiki/Arlong"
    },
    {
        titulo: "Uta",
        img : "",
        anime : "Anime: One Piece Film: Red",
        descricao: "Uta é a protagonista do filme *One Piece Film: Red*. Ela é uma cantora famosa e a filha de Shanks, o Ruivo. Uta possui habilidades musicais extraordinárias que afetam diretamente o ambiente ao seu redor e têm um impacto profundo sobre as pessoas que a ouvem. Ela desempenha um papel central na história do filme, lutando contra desafios e confrontando seu próprio passado.",
        habilidades: ["Habilidades: Canto poderoso", "Manipulação através da música"],
        citacao: "Citação: 'A música tem o poder de unir e transformar o mundo.'",
        link: "https://onepiece.fandom.com/pt/wiki/Uta"
    },
    {
        titulo: "Pekoms",
        img : "",
        anime : "Anime: One Piece",
        descricao: "Pekoms é um membro dos Piratas Big Mom e um dos habitantes da raça dos mamíferos da ilha dos tritões. Ele é conhecido por sua lealdade a Big Mom e por suas habilidades de combate, além de sua capacidade de se transformar em um leão. Pekoms também desempenha um papel importante como guarda-costas e aliado na história.",
        habilidades: ["Habilidades: Transformação em leão", "Combate físico"],
        citacao: "Citação: 'Vou proteger minha família e minha capitã a todo custo.'",
        link: "https://onepiece.fandom.com/pt/wiki/Pekoms"
    },
    {
        titulo: "Madara Uchiha",
        img : "",
        anime : "Anime: Naruto",
        descricao: "Madara Uchiha é um dos personagens mais poderosos e complexos de *Naruto*. Ele é um dos fundadores do Clã Uchiha e desempenha um papel central na história como um dos principais antagonistas. Madara é conhecido por suas habilidades de combate excepcionais, seu domínio do Sharingan e seu desejo de criar um mundo ideal sob seu controle.",
        habilidades: ["Habilidades: Sharingan", "Rinnegan", "Habilidades de combate avançadas"],
        citacao: "Citação: 'Eu sou o homem que criará um mundo onde não há mais dor.'",
        link: "https://naruto.fandom.com/pt/wiki/Madara_Uchiha"
    },
    {
        titulo: "Zetsu",
        img : "",
        anime : "Anime: Naruto",
        descricao: "Zetsu é um membro da organização Akatsuki, conhecido por sua habilidade de dividir-se em duas partes distintas: White Zetsu e Black Zetsu. White Zetsu é um especialista em espionagem e rastreamento, enquanto Black Zetsu é mais voltado para combate e possui uma conexão com o conceito de malícia. Zetsu desempenha um papel importante na coleta de informações e no desenvolvimento da trama envolvendo a Akatsuki.",
        habilidades: ["Habilidades: Divisão em duas partes", "Camuflagem", "Manipulação de plantas"],
        citacao: "Citação: 'Eu sou a raiz da Akatsuki, a sombra que não pode ser vista.'",
        link: "https://naruto.fandom.com/pt/wiki/Zetsu"
    },
    {
        titulo: "Hidan",
        img : "",
        anime : "Anime: Naruto",
        descricao: "Hidan é um membro da organização Akatsuki e é conhecido por sua habilidade de imortalidade e sua crença em uma religião extrema. Ele possui a habilidade de infligir danos a seus oponentes e transferir esses danos para si mesmo, o que o torna um adversário perigoso e imprevisível. Hidan é um personagem fanático e violento, com uma personalidade excêntrica.",
        habilidades: ["Habilidades: Imortalidade", "Transferência de dano", "Rituais de culto"],
        citacao: "Citação: 'Eu sou imortal, e minha fé me dá poder!'",
        link: "https://naruto.fandom.com/pt/wiki/Hidan"
    },
    {
        titulo: "Hashirama Senju",
        img : "",
        anime : "Anime: Naruto",
        descricao: "Hashirama Senju é o Primeiro Hokage da Vila da Folha e um dos fundadores da vila. Ele é conhecido como o 'Deus dos Shinobi' devido à sua incrível força e habilidades. Hashirama possui o poder do Mokuton, que lhe permite criar e manipular madeira, além de ter uma habilidade excepcional em combate e liderança. Seu sonho era criar um mundo onde shinobis pudessem viver em paz.",
        habilidades: ["Habilidades: Mokuton (Jutsu de madeira)", "Regeneração rápida", "Habilidades de combate avançadas"],
        citacao: "Citação: 'Eu sempre acreditei que o verdadeiro poder vem da amizade e da confiança entre as pessoas.'",
        link: "https://naruto.fandom.com/pt/wiki/Hashirama_Senju"
    },
    {
        titulo: "Hiruzen Sarutobi",
        img : "",
        anime : "Anime: Naruto",
        descricao: "Hiruzen Sarutobi, conhecido como o Terceiro Hokage, foi o líder da Vila da Folha antes de Minato Namikaze e um dos mais poderosos shinobis de sua época. Ele é famoso por suas habilidades excepcionais e seu vasto conhecimento em ninjutsu, além de ser um mentor para muitos dos personagens principais da série. Hiruzen é conhecido por sua sabedoria e liderança justa.",
        habilidades: ["Habilidades: Ninjutsu de todos os cinco elementos", "Técnicas de invocação", "Habilidade de combate avançada"],
        citacao: "Citação: 'A verdadeira força de um Hokage está em proteger e guiar seu povo.'",
        link: "https://naruto.fandom.com/pt/wiki/Hiruzen_Sarutobi"
    },
    {
        titulo: "Tobirama Senju",
        img : "",
        anime : "Anime: Naruto",
        descricao: "Tobirama Senju é o Segundo Hokage da Vila da Folha e um dos irmãos mais novos de Hashirama Senju. Conhecido por suas inovações no campo dos jutsus e técnicas, Tobirama é o criador de várias técnicas importantes, incluindo o Shunshin no Jutsu e o Kage Bunshin no Jutsu. Ele é também um estrategista habilidoso e um líder respeitado, conhecido por sua dedicação em proteger a vila.",
        habilidades: ["Habilidades: Técnicas de água", "Shunshin no Jutsu (Jutsu do Flash)", "Kage Bunshin no Jutsu (Clones das Sombras)"],
        citacao: "Citação: 'A verdadeira força de um shinobi é medida pela sua capacidade de proteger a vila.'",
        link: "https://naruto.fandom.com/pt/wiki/Tobirama_Senju"
    },
    {
        titulo: "Konohamaru Sarutobi",
        img : "",
        anime : "Anime: Naruto",
        descricao: "Konohamaru Sarutobi é o neto de Hiruzen Sarutobi e o atual líder do Clã Sarutobi. Ele é conhecido por sua determinação e por querer seguir os passos de Naruto Uzumaki, seu ídolo. Konohamaru é um shinobi talentoso que, ao longo da série, se torna um habilidoso líder de equipe e um defensor da Vila da Folha, sempre buscando melhorar suas habilidades e cumprir seu dever como ninja.",
        habilidades: ["Habilidades: Clone das Sombras", "Habilidades de ninjutsu", "Habilidades de combate"],
        citacao: "Citação: 'Eu não vou ficar para trás de Naruto! Vou me tornar um Hokage ainda melhor!'",
        link: "https://naruto.fandom.com/pt/wiki/Konohamaru_Sarutobi"
    },
    {
        titulo: "Momoshiki Otsutsuki",
        img : "",
        anime : "Anime: Naruto Shippuden",
        descricao: "Momoshiki Otsutsuki é um membro da família Otsutsuki, uma das mais poderosas e antigas do universo de *Naruto*. Ele é um dos antagonistas principais no arco do filme *Boruto: Naruto the Movie*. Momoshiki possui habilidades excepcionais e é um usuário avançado do Rinnegan, além de ser capaz de absorver e refletir técnicas ninjas. Sua busca por poder e imortalidade o coloca em conflito com os protagonistas.",
        habilidades: ["Habilidades: Rinnegan", "Absorção de chakra", "Manipulação de técnicas"],
        citacao: "Citação: 'O poder é a única verdade que importa.'",
        link: "https://naruto.fandom.com/pt/wiki/Momoshiki_Otsutsuki"
    },
    {
        titulo: "Tayuya",
        img : "",
        anime : "Anime: Naruto Shippuden",
        descricao: "Tayuya é uma das integrantes do Quarteto das Sombras da organização Akatsuki, conhecida por sua habilidade em técnicas de invocação e sua personalidade impetuosa. Ela usa um flautim para realizar jutsus que manipulam espíritos e controlar suas invocações, tornando-a uma adversária perigosa. Tayuya é uma ninja astuta e cruel, com uma lealdade feroz à sua equipe.",
        habilidades: ["Habilidades: Jutsu de flauta", "Invocação de demônios", "Controle de espíritos"],
        citacao: "Citação: 'Não subestime o poder de um ninja com uma flauta!'",
        link: "https://naruto.fandom.com/pt/wiki/Tayuya"
    },
    {
        titulo: "Jirobo",
        img : "",
        anime : "Anime: Naruto Shippuden",
        descricao: "Jirobo é um dos membros do Quarteto das Sombras da organização Akatsuki. Ele é conhecido por sua força física impressionante e sua habilidade de manipular a terra para criar técnicas de combate poderosas. Jirobo é uma figura imponente que utiliza seu tamanho e força para dominar seus adversários e proteger sua equipe.",
        habilidades: ["Habilidades: Manipulação da terra", "Força física avançada", "Técnicas de combate corpo a corpo"],
        citacao: "Citação: 'A força é a verdadeira medida do poder de um ninja.'",
        link: "https://naruto.fandom.com/pt/wiki/Jirōbō"
    },
    {
        titulo: "Hanabi Hyuga",
        img : "",
        anime : "Anime: Naruto",
        descricao: "Hanabi Hyuga é a irmã mais nova de Hinata Hyuga e membro do clã Hyuga, conhecido por seu domínio do Byakugan. Hanabi é uma ninja habilidosa e determinada, e é conhecida por seu potencial promissor e habilidades de combate. Ela assume um papel importante na defesa de sua vila e na proteção de seu clã.",
        habilidades: ["Habilidades: Byakugan", "Juken (Estilo do Punho Gentil)", "Técnicas de taijutsu"],
        citacao: "Citação: 'Eu vou seguir os passos da Hinata e proteger a Vila da Folha.'",
        link: "https://naruto.fandom.com/pt/wiki/Hanabi_Hyūga"
    },
    {
        titulo: "Ebisu",
        img : "",
        anime : "Anime: Naruto",
        descricao: "Ebisu é um ninja da Vila da Folha, conhecido por ser um instrutor de genin e um especialista em técnicas avançadas. Ele é famoso por sua dedicação ao treinamento e por seu estilo de ensino rigoroso. Apesar de sua aparência e atitude um pouco rígidas, Ebisu é um mentor respeitado e um ninja competente.",
        habilidades: ["Habilidades: Ninjutsu", "Técnicas de ensino", "Habilidades de combate"],
        citacao: "Citação: 'O treinamento é a chave para o sucesso de um ninja.'",
        link: "https://naruto.fandom.com/pt/wiki/Ebisu"
    },
    {
        titulo: "Gamabunta",
        img : "",
        anime : "Anime: Naruto",
        descricao: "Gamabunta é o líder dos sapos invocados do Monte Myoboku e um dos sapos mais poderosos. Ele é um aliado valioso de Naruto e desempenha um papel crucial em várias batalhas importantes. Gamabunta é conhecido por sua força impressionante e habilidades de combate, além de sua personalidade robusta e senso de honra.",
        habilidades: ["Habilidades: Invocação", "Força física", "Técnicas de fogo"],
        citacao: "Citação: 'Eu sou Gamabunta, o Grande Sapo! Não subestime meu poder!'",
        link: "https://naruto.fandom.com/pt/wiki/Gamabunta"
    },
    {
        titulo: "Tsuyu Asui",
        img : "",
        anime : "Anime: My Hero Academia",
        descricao: "Tsuyu Asui, também conhecida como Froppy, é uma estudante da U.A. High School com a habilidade de se transformar em uma rã. Suas habilidades incluem uma grande agilidade, habilidades de salto, e a capacidade de usar sua língua como uma ferramenta versátil. Tsuyu é conhecida por sua personalidade calma e sua atitude prática.",
        habilidades: ["Habilidades: Aumento de agilidade", "Salto elevado", "Língua longa e pegajosa"],
        citacao: "Citação: 'Se não tiver uma razão para ser um herói, não tem porque ser um.'",
        link: "https://myheroacademia.fandom.com/pt-br/wiki/Tsuyu_Asui"
    },
    {
        titulo: "Yamato",
        img : "",
        anime : "Anime: Naruto Shippuden",
        descricao: "Yamato, também conhecido como Tenzō, é um ninja da Vila da Folha e um membro da ANBU Black Ops. Ele é conhecido por sua habilidade com o Mokuton (Jutsu de Madeira), que ele herdou do Primeiro Hokage, Hashirama Senju. Yamato é um personagem calmo e altamente competente, que atua como mentor e protetor para Naruto e seus amigos.",
        habilidades: ["Habilidades: Mokuton (Jutsu de Madeira)", "Controle de chakra", "Técnicas de combate avançadas"],
        citacao: "Citação: 'Um ninja deve ter controle absoluto sobre suas habilidades e emoções.'",
        link: "https://naruto.fandom.com/pt/wiki/Yamato"
    },
    {
        titulo: "Kushina Uzumaki",
        img : "",
        anime : "Anime: Naruto",
        descricao: "Kushina Uzumaki é a mãe de Naruto Uzumaki e a esposa do Quarto Hokage, Minato Namikaze. Ela é conhecida por sua força e determinação, além de ser a portadora do Nove-Caudas, Kurama, antes de Naruto. Kushina era uma ninja talentosa e uma figura amorosa e protetora para sua família. Sua personalidade forte e seu amor incondicional a tornam uma personagem memorável na série.",
        habilidades: ["Habilidades: Jinchuriki do Nove-Caudas", "Habilidades de ninjutsu", "Força física"],
        citacao: "Citação: 'Eu vou lutar até o fim para proteger o que é mais precioso para mim.'",
        link: "https://naruto.fandom.com/pt/wiki/Kushina_Uzumaki"
    },
    {
        titulo: "Shinki",
        img : "",
        anime : "Anime: Boruto: Naruto Next Generations",
        descricao: "Shinki é um jovem ninja da Vila de Sunagakure e o filho de Kage, o Quinto Kazekage, Gaara. Ele é conhecido por seu talento excepcional no uso de jutsus relacionados ao controle de ferro e areia. Shinki é um shinobi sério e reservado, que demonstra habilidades impressionantes e um grande senso de responsabilidade como líder da sua equipe.",
        habilidades: ["Habilidades: Controle de ferro", "Jutsus de areia", "Força física"],
        citacao: "Citação: 'Não importa a força que você tem, o mais importante é como você usa ela para proteger aqueles ao seu redor.'",
        link: "https://boruto.fandom.com/pt-br/wiki/Shinki"
    },
    {
        titulo: "Kashin Koji",
        img : "",
        anime : "Anime: Boruto: Naruto Next Generations",
        descricao: "Kashin Koji é um personagem misterioso que faz parte da organização Kara, sendo um dos principais antagonistas da série *Boruto*. Ele é conhecido por suas habilidades excepcionais e seu estilo de combate baseado em técnicas semelhantes às de Jiraiya. Sua verdadeira identidade e intenções são reveladas ao longo da série, e ele desempenha um papel crucial no desenvolvimento da trama.",
        habilidades: ["Habilidades: Jutsu de fogo", "Técnicas de invocação", "Habilidades de combate avançadas"],
        citacao: "Citação: 'Para alcançar o que você deseja, você deve estar disposto a sacrificar tudo.'",
        link: "https://boruto.fandom.com/pt-br/wiki/Kashin_Koji"
    },
    {
        titulo: "Jigen",
        img : "",
        anime : "Anime: Boruto: Naruto Next Generations",
        descricao: "Jigen é o líder da organização Kara e a identidade principal de Isshiki Otsutsuki. Ele é um antagonista poderoso com habilidades extraordinárias e um plano ambicioso. Jigen possui um controle impressionante sobre o espaço-tempo e é uma figura central na trama de *Boruto*.",
        habilidades: ["Habilidades: Jutsu de espaço-tempo", "Técnicas de combate avançadas"],
        citacao: "Citação: 'A verdadeira força vem da capacidade de transcender limites.'",
        link: "https://boruto.fandom.com/pt-br/wiki/Jigen"
    },
    {
        titulo: "Delta",
        img : "",
        anime : "Anime: Boruto: Naruto Next Generations",
        descricao: "Delta é uma membro da organização Kara com habilidades cibernéticas avançadas. Ela possui técnicas de combate poderosas e capacidades de regeneração, tornando-a uma das principais executoras da organização.",
        habilidades: ["Habilidades: Modificações cibernéticas", "Habilidades de combate avançadas"],
        citacao: "Citação: 'Não subestime o poder da tecnologia.'",
        link: "https://boruto.fandom.com/pt-br/wiki/Delta"
    },
    {
        titulo: "Boru",
        img : "",
        anime : "Anime: Boruto: Naruto Next Generations",
        descricao: "Boru é um membro da organização Kara e atua como executor das ordens de Jigen. Ele é conhecido por suas habilidades em combate e pela sua lealdade à organização.",
        habilidades: ["Habilidades: Técnicas de combate", "Habilidades físicas aprimoradas"],
        citacao: "Citação: 'A lealdade é o maior ativo de um guerreiro.'",
        link: "https://boruto.fandom.com/pt-br/wiki/Boru"
    },
    {
        titulo: "Amado",
        img : "",
        anime : "Anime: Boruto: Naruto Next Generations",
        descricao: "Amado é um dos cientistas da organização Kara, desempenhando um papel importante no desenvolvimento de tecnologia e técnicas avançadas. Seu conhecimento em ciência e engenharia é fundamental para a organização.",
        habilidades: ["Habilidades: Conhecimento avançado em ciência e tecnologia", "Técnicas de manipulação e engenharia"],
        citacao: "Citação: 'O conhecimento é o verdadeiro poder.'",
        link: "https://boruto.fandom.com/pt-br/wiki/Amado"
    },
    {
        titulo: "Kido",
        img : "",
        anime : "Anime: Boruto: Naruto Next Generations",
        descricao: "Kido é um dos membros da organização Kara que atua como executor das ordens de Jigen. Ele é conhecido por suas habilidades em combate e pela eficiência em suas missões.",
        habilidades: ["Habilidades: Técnicas de combate", "Habilidades físicas"],
        citacao: "Citação: 'O sucesso é resultado de habilidades afiadas e determinação.'",
        link: "https://boruto.fandom.com/pt-br/wiki/Kido"
    },
    {
        titulo: "Victor",
        img : "",
        anime : "Anime: Boruto: Naruto Next Generations",
        descricao: "Victor é um membro da organização Kara que desempenha um papel importante em várias operações da organização. Sua lealdade e habilidades são notáveis.",
        habilidades: ["Habilidades: Técnicas de combate", "Habilidades físicas"],
        citacao: "Citação: 'A eficiência é a chave para o sucesso.'",
        link: "https://boruto.fandom.com/pt-br/wiki/Victor"
    },
    {
        titulo: "Shisui Uchiha",
        img : "",
        anime : "Anime: Naruto Shippuden",
        descricao: "Shisui Uchiha foi um membro destacado do clã Uchiha e um dos mais talentosos ninjas de sua geração. Conhecido por seu Sharingan e por suas habilidades excepcionais em genjutsu, Shisui era conhecido como 'Shisui dos Olhos Lendários'. Ele desempenhou um papel crucial durante a crise do clã Uchiha e é lembrado por seu forte senso de justiça e lealdade.",
        habilidades: ["Habilidades: Sharingan", "Genjutsu", "Técnicas de combate avançadas"],
        citacao: "Citação: 'A verdadeira força está na capacidade de proteger aqueles que amamos.'",
        link: "https://naruto.fandom.com/pt-br/wiki/Shisui_Uchiha"
    },
    {
        titulo: "Utakata",
        img : "",
        anime : "Anime: Naruto Shippuden",
        descricao: "Utakata é um dos jinchuriki do anime *Naruto Shippuden*, portador da Bijuu Rokubi, também conhecida como a Nove-Caudas. Ele é um shinobi do País das Névoas e é conhecido por seu estilo de combate baseado em bolhas e água. Utakata tem uma personalidade reservada e um passado doloroso, o que influencia suas ações e decisões ao longo da série.",
        habilidades: ["Habilidades: Controle de bolhas", "Jutsu de água", "Bijuu Rokubi"],
        citacao: "Citação: 'Cada um tem seu próprio caminho para seguir, e eu estou apenas seguindo o meu.'",
        link: "https://naruto.fandom.com/pt-br/wiki/Utakata"
    },
    {
        titulo: "Rukia Kuchiki",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Rukia Kuchiki é uma Shinigami que transfere seus poderes para Ichigo Kurosaki. Ela é conhecida por sua habilidade com a zanpakuto, Sode no Shirayuki, e por seu papel crucial no início da história.",
        habilidades: ["Habilidades: Sode no Shirayuki", "Kido", "Shunpo"],
        citacao: "Citação: 'Mesmo que eu me torne uma carga, eu sempre estarei ao seu lado.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Rukia_Kuchiki"
    },
    {
        titulo: "Renji Abarai",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Renji Abarai é um Shinigami e oficial da 6ª Divisão. Ele é um amigo próximo de Rukia Kuchiki e é conhecido por seu estilo de combate com a zanpakuto, Zabimaru.",
        habilidades: ["Habilidades: Zabimaru", "Kido", "Shunpo"],
        citacao: "Citação: 'Eu não posso perder para alguém como você.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Renji_Abarai"
    },
    {
        titulo: "Orihime Inoue",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Orihime Inoue é uma amiga de Ichigo Kurosaki com habilidades de cura. Ela possui uma zanpakuto chamada Shun Shun Rikka, que pode criar escudos e curar ferimentos.",
        habilidades: ["Habilidades: Shun Shun Rikka", "Habilidades de cura"],
        citacao: "Citação: 'Eu vou proteger todos os meus amigos com tudo que eu tenho.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Orihime_Inoue"
    },
    {
        titulo: "Uryū Ishida",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Uryū Ishida é um Quincy e rival de Ichigo Kurosaki. Ele possui habilidades de arquearia e é um dos principais aliados de Ichigo na luta contra os Hollows.",
        habilidades: ["Habilidades: Arquearia Quincy", "Reishi Manipulation"],
        citacao: "Citação: 'Os Quincy são a última linha de defesa contra os Hollows.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Uryū_Ishida"
    },
    {
        titulo: "Yasutora 'Chad' Sado",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Yasutora 'Chad' Sado é amigo de Ichigo Kurosaki com habilidades físicas sobre-humanas. Ele é conhecido por sua força e resistência excepcionais.",
        habilidades: ["Habilidades: Poder de braço direito", "Poder de braço esquerdo"],
        citacao: "Citação: 'Eu vou usar minha força para proteger meus amigos.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Yasutora_Sado"
    },
    {
        titulo: "Byakuya Kuchiki",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Byakuya Kuchiki é o Capitão da 6ª Divisão da Gotei 13 e o irmão mais velho de Rukia. Ele é conhecido por sua habilidade com a zanpakuto, Senbonzakura, e seu comportamento reservado.",
        habilidades: ["Habilidades: Senbonzakura", "Kido", "Shunpo"],
        citacao: "Citação: 'Aqueles que desafiam o meu orgulho serão eliminados.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Byakuya_Kuchiki"
    },
    {
        titulo: "Sousuke Aizen",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Sousuke Aizen é o principal antagonista do início da série, ex-capitão da 5ª Divisão. Ele possui habilidades poderosas e uma mente maquiavélica, buscando o poder absoluto.",
        habilidades: ["Habilidades: Kyoka Suigetsu", "Manipulação de ilusão", "Habilidades de combate avançadas"],
        citacao: "Citação: 'O verdadeiro poder é o que você pode manipular nas sombras.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Sosuke_Aizen"
    },
    {
        titulo: "Toshiro Hitsugaya",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Toshiro Hitsugaya é o Capitão da 10ª Divisão da Gotei 13. Ele é conhecido por sua aparência jovem e habilidades de gelo com sua zanpakuto, Hyorinmaru.",
        habilidades: ["Habilidades: Hyorinmaru", "Kido", "Shunpo"],
        citacao: "Citação: 'Eu não permitirei que alguém manche o nome da Gotei 13.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Tōshirō_Hitsugaya"
    },
    {
        titulo: "Kisuke Urahara",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Kisuke Urahara é um ex-capitão da 12ª Divisão e dono da loja de conveniência que ajuda Ichigo. Ele é um dos personagens mais enigmáticos e poderosos da série.",
        habilidades: ["Habilidades: Benihime", "Habilidades de ciência", "Técnicas de combate avançadas"],
        citacao: "Citação: 'O futuro é algo que devemos criar, não apenas esperar.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Kisuke_Urahara"
    },
    {
        titulo: "Yoruichi Shihouin",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Yoruichi Shihouin é uma ex-capitã da 2ª Divisão e especialista em artes marciais e transformação. Ela é uma aliada importante para Ichigo e seus amigos.",
        habilidades: ["Habilidades: Shunko", "Transformação em gato", "Habilidades de combate avançadas"],
        citacao: "Citação: 'Nunca subestime o poder do treinamento e da experiência.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Yoruichi_Shihōin"
    },
    {
        titulo: "Shinji Hirako",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Shinji Hirako é um ex-capitão da 5ª Divisão e um dos Visoreds, com habilidades de manipulação da realidade. Ele é um dos líderes dos Visoreds e atua como mentor para Ichigo.",
        habilidades: ["Habilidades: Sakanade", "Manipulação da realidade", "Habilidades de combate avançadas"],
        citacao: "Citação: 'A verdade não é tão simples quanto parece.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Shinji_Hirako"
    },
    {
        titulo: "Karin Kurosaki",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Karin Kurosaki é a irmã de Ichigo e possui habilidades espirituais. Ela é uma personagem de suporte importante e mostra uma forte conexão com o mundo espiritual.",
        habilidades: ["Habilidades: Percepção espiritual", "Habilidades de combate básico"],
        citacao: "Citação: 'Eu sempre estarei aqui para você, Ichigo.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Karin_Kurosaki"
    },
    {
        titulo: "Yuzu Kurosaki",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Yuzu Kurosaki é a irmã mais nova de Ichigo. Embora não tenha habilidades espirituais fortes, ela é uma figura importante na vida de Ichigo e na dinâmica familiar.",
        habilidades: ["Habilidades: Suporte familiar", "Habilidades básicas"],
        citacao: "Citação: 'Eu quero que todos fiquem seguros e felizes.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Yuzu_Kurosaki"
    },
    {
        titulo: "Genryūsai Shigekuni Yamamoto",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Genryūsai Shigekuni Yamamoto é o Capitão-Comandante dos Shinigami e líder da Soul Society. Ele é conhecido por suas habilidades de fogo e seu papel crucial na liderança.",
        habilidades: ["Habilidades: Ryujin Jakka", "Liderança", "Habilidades de combate avançadas"],
        citacao: "Citação: 'O dever dos capitães é proteger a Soul Society e manter a ordem.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Genryūsai_Yamamoto"
    },
    {
        titulo: "Shunsui Kyōraku",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Shunsui Kyōraku é o Capitão da 8ª Divisão e um dos Shinigami mais poderosos. Ele é conhecido por seu estilo descontraído e suas habilidades com a zanpakuto, Katen Kyōkotsu.",
        habilidades: ["Habilidades: Katen Kyōkotsu", "Estratégia", "Habilidades de combate avançadas"],
        citacao: "Citação: 'A diversão é a chave para vencer uma batalha.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Shunsui_Kyōraku"
    },
    {
        titulo: "Jushiro Ukitake",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Jushiro Ukitake é o Capitão da 13ª Divisão. Conhecido por sua condição de saúde frágil, ele é um líder respeitado e possui habilidades com a zanpakuto, Ryuujin Jakka.",
        habilidades: ["Habilidades: Ryuujin Jakka", "Kido", "Habilidades de combate avançadas"],
        citacao: "Citação: 'Mesmo fraco, um coração forte pode superar muitas coisas.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Jūshirō_Ukitake"
    },
    {
        titulo: "Retsu Unohana",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Retsu Unohana é a Capitã da 4ª Divisão e uma das curadoras mais poderosas. Ela é conhecida por suas habilidades de cura e seu passado misterioso.",
        habilidades: ["Habilidades: Minazuki", "Habilidades de cura", "Kido"],
        citacao: "Citação: 'A verdadeira força está em proteger os outros.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Retsu_Unohana"
    },
    {
        titulo: "Sajin Komamura",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Sajin Komamura é o Capitão da 7ª Divisão e é conhecido por sua aparência de lobo. Ele possui uma zanpakuto chamada Kamishini no Yari e é um combatente formidável.",
        habilidades: ["Habilidades: Kamishini no Yari", "Kido", "Shunpo"],
        citacao: "Citação: 'A verdadeira lealdade é lutar ao lado dos seus aliados.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Sajin_Komamura"
    },
    {
        titulo: "Mayuri Kurotsuchi",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Mayuri Kurotsuchi é o Capitão da 12ª Divisão e cientista-chefe da Soul Society. Ele é conhecido por suas habilidades científicas e sua zanpakuto, Ashisogi Jizo.",
        habilidades: ["Habilidades: Ashisogi Jizo", "Ciência", "Habilidades de combate avançadas"],
        citacao: "Citação: 'O conhecimento é o maior poder.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Mayuri_Kurotsuchi"
    },
    {
        titulo: "Ulquiorra Cifer",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Ulquiorra Cifer é o Espada nº 4 dos Espada e é conhecido por sua frieza e habilidades de ressurreição.",
        habilidades: ["Habilidades: Murciélago", "Hierro", "Cero"],
        citacao: "Citação: 'A verdadeira dor é algo que você nunca pode entender.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Ulquiorra_Cifer"
    },
    {
        titulo: "Grimmjow Jaegerjaquez",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Grimmjow Jaegerjaquez é o Espada nº 6 dos Espada e é conhecido por suas habilidades baseadas em predadores e sua personalidade agressiva.",
        habilidades: ["Habilidades: Pantera", "Garganta", "Cero"],
        citacao: "Citação: 'Eu sou o predador que vai acabar com todos vocês.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Grimmjow_Jaegerjaquez"
    },
    {
        titulo: "Nnoitra Gilga",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Nnoitra Gilga é o Espada nº 8 dos Espada, conhecido por sua agressividade e habilidades de combate.",
        habilidades: ["Habilidades: Santa Teresa", "Hierro", "Cero"],
        citacao: "Citação: 'Eu sou o número 8, e isso significa que vou derrotar todos vocês.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Nnoitra_Gilga"
    },
    {
        titulo: "Starrk",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Starrk é o Espada nº 1 dos Espada e é conhecido por suas habilidades de disparo e sua personalidade solitária.",
        habilidades: ["Habilidades: Los Lobos", "Cero", "Hierro"],
        citacao: "Citação: 'Eu sou o último dos Espada, e não tenho interesse em lutar.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Coyote_Starrk"
    },
    {
        titulo: "Barragan Luisenbarn",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Barragan Luisenbarn é o Espada nº 2 dos Espada, com habilidades de envelhecimento e decrepitude.",
        habilidades: ["Habilidades: Arrogante", "Habilidade de envelhecimento", "Cero"],
        citacao: "Citação: 'O tempo é um inimigo inevitável.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Barragan_Luisenbarn"
    },
    {
        titulo: "Hiyori Sarugaki",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Hiyori Sarugaki é um dos Visoreds, conhecidos por suas habilidades de combate e sua personalidade explosiva.",
        habilidades: ["Habilidades: Hachigyō", "Shunpo", "Habilidades de combate avançadas"],
        citacao: "Citação: 'Eu não vou perder para ninguém!'",
        link: "https://bleach.fandom.com/pt-br/wiki/Hiyori_Sarugaki"
    },
    {
        titulo: "Hachi",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Hachi é um dos Visoreds e ex-capitão da 8ª Divisão, conhecido por suas habilidades de defesa e barreiras.",
        habilidades: ["Habilidades: Kannonbiraki Benihime Atarame", "Habilidades de defesa", "Habilidades de combate avançadas"],
        citacao: "Citação: 'Eu irei proteger meus amigos a todo custo.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Hachi"
    },
    {
        titulo: "Zaraki Kenpachi",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Zaraki Kenpachi é o Capitão da 11ª Divisão e é conhecido por seu estilo de combate brutal e sua busca constante por batalhas emocionantes. Ele é um dos personagens mais poderosos da série e adota o nome da área de Zaraki em que nasceu.",
        habilidades: ["Habilidades: Kenpachi", "Zanpakuto: Nozarashi", "Força sobre-humana"],
        citacao: "Citação: 'Eu só estou interessado em lutar contra o mais forte.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Zaraki_Kenpachi"
    },
    {
        titulo: "Gin Ichimaru",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Gin Ichimaru é o ex-Capitão da 3ª Divisão e é conhecido por seu sorriso enigmático e sua habilidade mortal com seu Zanpakuto. Sua verdadeira natureza é revelada ao longo da série como uma das figuras centrais da trama.",
        habilidades: ["Habilidades: Zanpakuto: Shinso", "Velocidade", "Manipulação"],
        citacao: "Citação: 'Sabe, o sorriso de uma pessoa pode ser muito mais perigoso do que qualquer espada.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Gin_Ichimaru"
    },
    {
        titulo: "Nelliel Tu Odelschwanck",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Nelliel Tu Odelschwanck, conhecida como Nel, é uma ex-Hollow de alto nível e uma das Espadas de Hueco Mundo. Ela é conhecida por sua aparência infantil e sua verdadeira forma, que revela um grande poder.",
        habilidades: ["Habilidades: Zanpakuto: Gamuza", "Transformação", "Força sobre-humana"],
        citacao: "Citação: 'Eu vou lutar do meu jeito.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Nelliel_Tu_Odelschwanck"
    },
    {
        titulo: "Masaki Kurosaki",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Masaki Kurosaki é a mãe de Ichigo Kurosaki e esposa de Isshin Kurosaki. Ela era uma Shinigami substituta que morreu protegendo Ichigo dos Hollows, e sua morte teve um grande impacto na vida de seu filho.",
        habilidades: ["Habilidades: Shinigami"],
        citacao: "Citação: 'Eu sempre estarei com você, mesmo que não possa estar ao seu lado.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Masaki_Kurosaki"
    },
    {
        titulo: "Isshin Kurosaki",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Isshin Kurosaki é o pai de Ichigo Kurosaki e o ex-Capitão da 10ª Divisão da Gotei 13. Conhecido por sua personalidade descontraída e suas habilidades de combate, ele desempenha um papel crucial na proteção da Soul Society e na criação de seus filhos.",
        habilidades: ["Habilidades: Zanpakuto: Engetsu", "Força sobre-humana", "Habilidade de combate"],
        citacao: "Citação: 'Eu vou te proteger, mesmo que minha vida esteja em risco.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Isshin_Kurosaki"
    },
    {
        titulo: "Nanao Ise",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Nanao Ise é a Vice-Capitã da 8ª Divisão sob o comando de Shunsui Kyōraku. Ela é conhecida por sua personalidade séria e sua competência em combate, além de ser uma das Shinigami mais respeitadas.",
        habilidades: ["Habilidades: Zanpakuto: Katen Kyōkotsu (partially)", "Habilidade de combate", "Liderança"],
        citacao: "Citação: 'Eu seguirei as ordens do Capitão até o fim.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Nanao_Ise"
    },
    {
        titulo: "Kaname Tōsen",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Kaname Tōsen é um ex-Capitão da 9ª Divisão da Gotei 13 e um dos membros das Espadas de Hueco Mundo. Conhecido por sua forte crença na justiça e seu poder intimidante, Tōsen é um personagem complexo cuja lealdade e moralidade são desafiadas ao longo da série.",
        habilidades: ["Habilidades: Zanpakuto: Suzumushi", "Habilidade de combate", "Manipulação de percepção"],
        citacao: "Citação: 'A verdadeira justiça não é encontrada na luz, mas na escuridão.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Kaname_T%C5%8Dsen"
    },
    {
        titulo: "Yamada Hanatarō",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Yamada Hanatarō é o 7º Oficial da 4ª Divisão, conhecida por seu papel como médico e enfermeiro na Gotei 13. Apesar de sua aparência frágil e personalidade gentil, ele é um membro valioso da divisão com habilidades médicas excepcionais.",
        habilidades: ["Habilidades: Zanpakuto: Itegumo", "Habilidade de cura", "Conhecimento médico"],
        citacao: "Citação: 'Mesmo que eu não possa lutar, farei o meu melhor para ajudar os outros.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Yamada_Hanatar%C5%8D"
    },
    {
        titulo: "Ichibe Hyōsube",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Ichibe Hyōsube é o Capitão da 1ª Divisão e o líder dos Sete Capitães dos Shinigami, conhecido por sua habilidade de manipular a escuridão e a luz. Ele desempenha um papel importante na defesa da Soul Society contra ameaças poderosas.",
        habilidades: ["Habilidades: Zanpakuto: Ichimonji", "Manipulação de sombras e luz", "Força sobre-humana"],
        citacao: "Citação: 'O poder da luz e das sombras está em minhas mãos.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Ichibe_Hy%C5%8Dsube"
    },
    {
        titulo: "Yhwach",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Yhwach é o líder dos Quincy e o principal antagonista da série. Como o pai de todos os Quincy e o detentor do poder de absorver e redistribuir habilidades, ele representa uma ameaça formidável para a Soul Society e os Shinigami.",
        habilidades: ["Habilidades: Zanpakuto: Wahrnehmung", "Manipulação do poder Quincy", "Absorção de habilidades"],
        citacao: "Citação: 'Eu sou o começo e o fim de tudo.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Yhwach"
    },
    {
        titulo: "Ganju Shiba",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Ganju Shiba é um membro da família Shiba e um ex-prisioneiro de Rukongai. Ele é conhecido por seu comportamento impulsivo e sua habilidade em combate. Ganju é um aliado valioso de Ichigo Kurosaki e possui uma forte determinação.",
        habilidades: ["Habilidades: Zanpakuto: Kurogane", "Habilidade de combate", "Tática"],
        citacao: "Citação: 'Eu não vou perder para ninguém!'",
        link: "https://bleach.fandom.com/pt-br/wiki/Ganju_Shiba"
    },
    {
        titulo: "Momo Hinamori",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Momo Hinamori é a Vice-Capitã da 5ª Divisão sob o comando de Sosuke Aizen. Ela é conhecida por sua lealdade e amizade profunda com Aizen, embora suas crenças sejam desafiadas ao longo da série. Momo é uma Shinigami dedicada e uma combatente habilidosa.",
        habilidades: ["Habilidades: Zanpakuto: Tobiume", "Habilidade de combate", "Tática"],
        citacao: "Citação: 'Eu sempre vou confiar em você, Aizen.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Momo_Hinamori"
    },
    {
        titulo: "Bambietta Basterbine",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Bambietta Basterbine é uma das Sternritters, um grupo de elite de Quincy liderado por Yhwach. Ela é conhecida por sua habilidade de criar explosões com suas habilidades de Quincy e sua personalidade explosiva e agressiva.",
        habilidades: ["Habilidades: Zanpakuto: Bambietta", "Explosões", "Manipulação de energia"],
        citacao: "Citação: 'Eu não vou me conter!'",
        link: "https://bleach.fandom.com/pt-br/wiki/Bambietta_Basterbine"
    },
    {
        titulo: "Luppi",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Luppi é um dos Arrancars que foi introduzido como um membro das Espadas sob o comando de Sousuke Aizen. Ele é conhecido por sua personalidade volúvel e suas habilidades de combate, embora tenha sido substituído por outros Arrancars mais poderosos.",
        habilidades: ["Habilidades: Zanpakuto: Trepadora", "Manipulação de tentáculos", "Força e agilidade"],
        citacao: "Citação: 'Eu não vou ser ignorado por ninguém!'",
        link: "https://bleach.fandom.com/pt-br/wiki/Luppi"
    },
    {
        titulo: "Madarame Ikkaku",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Madarame Ikkaku é o 3º Oficial da 11ª Divisão, comandada por Zaraki Kenpachi. Conhecido por seu amor ao combate e sua personalidade feroz, Ikkaku é um lutador formidável que valoriza a batalha acima de tudo. Apesar de seu desejo de lutar, ele é leal a seus amigos e à sua divisão.",
        habilidades: ["Habilidades: Zanpakuto: Hōzukimaru", "Força bruta", "Habilidade de combate corpo a corpo"],
        citacao: "Citação: 'Eu só quero lutar contra o mais forte!'",
        link: "https://bleach.fandom.com/pt-br/wiki/Ikkaku_Madarame"
    },
    {
        titulo: "Yachiru Kusajishi",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Yachiru Kusajishi é a Vice-Capitã da 11ª Divisão, sob o comando de Zaraki Kenpachi. Conhecida por sua aparência infantil e personalidade travessa, Yachiru é um combatente extremamente habilidoso e tem uma relação muito próxima com seu capitão. Ela possui um poder considerável e uma grande inteligência estratégica.",
        habilidades: ["Habilidades: Zanpakuto: Kenpachi", "Habilidade de combate", "Estratégia"],
        citacao: "Citação: 'Eu gosto de coisas divertidas, e você parece ser uma!'",
        link: "https://bleach.fandom.com/pt-br/wiki/Yachiru_Kusajishi"
    },
    {
        titulo: "Nemu Kurotsuchi",
        img : "",
        anime : "Anime: Bleach",
        descricao: "Nemu Kurotsuchi é a vice-capitã da 12ª Divisão sob o comando de Mayuri Kurotsuchi. Ela é conhecida por sua habilidade em combate e por seu papel como assistente e servidora fiel de seu capitão. Nemu é uma Shinigami habilidosa e dedicada, muitas vezes demonstrando um comportamento calmo e composto.",
        habilidades: ["Habilidades: Zanpakuto: Ashisogi Jizō", "Habilidade de combate", "Conhecimento científico"],
        citacao: "Citação: 'Eu estou aqui para apoiar o Capitão Mayuri em tudo o que ele precisar.'",
        link: "https://bleach.fandom.com/pt-br/wiki/Nemu_Kurotsuchi"
    },
];