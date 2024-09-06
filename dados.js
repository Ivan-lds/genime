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
        anime: "Attack on Titan",
        descricao: "O protagonista de Attack on Titan, determinado a destruir todos os Titãs para proteger a humanidade. Sua jornada o leva a descobrir verdades chocantes sobre o mundo e sobre si mesmo.",
        habilidades: "Transformação em Titã, Regeneração, Força sobre-humana",
        citacao: "Eu vou exterminar todos eles... todos os Titãs!",
        link: "https://attackontitan.fandom.com/wiki/Eren_Jaeger"
    },
    {
        titulo: "Mikasa Ackerman",
        img: "https://i.pinimg.com/736x/92/78/24/92782448e630f55afcfa0a6168760abd.jpg",
        anime: "Attack on Titan",
        descricao: "Uma das personagens principais de Attack on Titan, Mikasa é conhecida por sua habilidade de combate e devoção a Eren. Ela é uma das últimas descendentes da família Ackerman.",
        habilidades: "Força sobre-humana, Habilidade com lâminas, Instintos de combate",
        citacao: "Eren, onde quer que você vá, eu irei com você.",
        link: "https://attackontitan.fandom.com/wiki/Mikasa_Ackerman"
    },
    {
        titulo: "Darui",
        img: "https://i.pinimg.com/736x/10/38/61/103861fa6cba02d6591d8aad1b208285.jpg",
        anime: "Naruto Shippuden",
        descricao: "O braço direito do Quarto Raikage e eventual sucessor, Darui é um ninja habilidoso conhecido por seu estilo de luta relâmpago negro.",
        habilidades: "Estilo Relâmpago, Relâmpago Negro, Lançamento de Tempestade",
        citacao: "Eu sou Darui, o cara que carrega a vontade do Raikage.",
        link: "https://naruto.fandom.com/wiki/Darui"
    },
    {
        titulo: "Boruto Uzumaki",
        img: "https://i.pinimg.com/736x/09/d9/01/09d9016f9ccc72e8be2fa22f066f5d26.jpg",
        anime: "Boruto: Naruto Next Generations",
        descricao: "Filho de Naruto Uzumaki, Boruto luta para sair da sombra de seu pai e criar seu próprio caminho como ninja. Ele herda habilidades excepcionais de sua linhagem.",
        habilidades: "Rasengan, Jutsu Clone das Sombras, Karma",
        citacao: "Eu sou o Boruto Uzumaki! O ninja que vai superar o Hokage!",
        link: "https://naruto.fandom.com/wiki/Boruto_Uzumaki"
    },
    {
        titulo: "Sarada Uchiha",
        img: "https://i.pinimg.com/736x/9d/f8/e6/9df8e63f788f92160870631d46c685fa.jpg",
        anime: "Boruto: Naruto Next Generations",
        descricao: "Filha de Sasuke Uchiha e Sakura Haruno, Sarada é uma ninja talentosa com o objetivo de se tornar Hokage, equilibrando as heranças de seu clã Uchiha e suas próprias aspirações.",
        habilidades: "Sharingan, Taijutsu, Jutsu de Fogo",
        citacao: "Eu vou ser a Hokage e proteger a Vila Oculta da Folha!",
        link: "https://naruto.fandom.com/wiki/Sarada_Uchiha"
    },
    {
        titulo: "Mitsuki",
        img: "https://i.pinimg.com/736x/b7/31/15/b731152ce391735f712c50945a62f56e.jpg",
        anime: "Boruto: Naruto Next Generations",
        descricao: "Mitsuki é um ninja criado artificialmente por Orochimaru, sendo uma cobra sábia. Ele é calmo e muito habilidoso, além de ter uma forte ligação com Boruto.",
        habilidades: "Modo Sábio, Estilo Vento, Jutsu Serpente",
        citacao: "O que eu devo fazer... seguir meu coração?",
        link: "https://naruto.fandom.com/wiki/Mitsuki"
    },
    {
        titulo: "Orochimaru",
        img: "https://i.pinimg.com/736x/ef/09/3f/ef093feed33b569f0cd0e36f50c9cd61.jpg",
        anime: "Naruto",
        descricao: "Um dos lendários Sannin de Konoha, Orochimaru é um cientista e ninja renegado obcecado por obter imortalidade e dominar todos os jutsus. Ele realiza experimentos sem escrúpulos para atingir seus objetivos.",
        habilidades: "Reencarnação de Corpos, Jutsu de Serpente, Regeneração",
        citacao: "Eu não desejo destruição... Eu desejo o conhecimento.",
        link: "https://naruto.fandom.com/wiki/Orochimaru"
    },
    {
        titulo: "Kabuto Yakushi",
        img: "https://i.pinimg.com/474x/d4/76/5c/d4765cb230623f6b0890da01617e86be.jpg",
        anime: "Naruto",
        descricao: "Kabuto é o braço direito de Orochimaru e um espião habilidoso. Ele se torna uma grande ameaça após integrar as habilidades de várias criaturas e pessoas, incluindo os poderes de Orochimaru.",
        habilidades: "Jutsu Médico, Modo Sábio, Reanimação Impura",
        citacao: "Eu sou a serpente que se tornará um dragão.",
        link: "https://naruto.fandom.com/wiki/Kabuto_Yakushi"
    },
    {
        titulo: "Tsunade Senju",
        img: "https://i.pinimg.com/474x/e4/db/9b/e4db9b759a747d86fffab99946757a2b.jpg",
        anime: "Naruto",
        descricao: "Uma das lendárias Sannin, Tsunade é uma ninja médica excepcional e a Quinta Hokage de Konoha. Conhecida por sua força física incrível e habilidades curativas, ela é uma líder respeitada.",
        habilidades: "Jutsu Médico, Superforça, Regeneração",
        citacao: "Eu sou Tsunade, a melhor ninja médica do mundo.",
        link: "https://naruto.fandom.com/wiki/Tsunade"
    },
    {
        titulo: "Jiraiya",
        img: "https://i.pinimg.com/originals/ef/af/39/efaf399a5405402f08adeb435340c795.jpg",
        anime: "Naruto",
        descricao: "Um dos lendários Sannin, Jiraiya é um ninja errante que treina Naruto e é famoso por suas habilidades em ninjutsu e senjutsu. Apesar de sua natureza descontraída, ele é um guerreiro poderoso.",
        habilidades: "Modo Sábio, Rasengan, Invocação de Sapos",
        citacao: "A verdadeira medida de um ninja não está em como ele vive, mas em como ele morre.",
        link: "https://naruto.fandom.com/wiki/Jiraiya"
    },
    {
        titulo: "Pain",
        img: "https://pm1.aminoapps.com/7741/58c9b37612b6d7e56e52da27b77e1cbaa6a74ef8r1-592-583v2_uhq.jpg",
        anime: "Naruto Shippuden",
        descricao: "Líder da Akatsuki e uma das encarnações de Nagato, Pain possui o Rinnegan e busca a paz através da dor. Ele é uma figura poderosa e enigmática, responsável por destruições em larga escala.",
        habilidades: "Rinnegan, Caminho de Deus, Controle de Gravitacional",
        citacao: "Aqueles que não entendem a dor nunca conhecerão a verdadeira paz.",
        link: "https://naruto.fandom.com/wiki/Pain_(Nagato)"
    },
    {
        titulo: "Konan",
        img: "https://i.pinimg.com/originals/d2/ab/52/d2ab522b5757ddccbf9cc9b740d15875.jpg",
        anime: "Naruto Shippuden",
        descricao: "Membro da Akatsuki e companheira de Nagato, Konan é uma ninja habilidosa que utiliza técnicas de papel. Ela compartilha a visão de paz de Nagato e desempenha um papel fundamental na organização.",
        habilidades: "Jutsu de Papel, Origami Explosivo, Técnica dos Anjos de Papel",
        citacao: "Nós somos Deus, e nós punimos os criminosos que ameaçam a paz.",
        link: "https://naruto.fandom.com/wiki/Konan"
    },
    {
        titulo: "Shikamaru Nara",
        img: "https://i.pinimg.com/736x/2a/f1/5c/2af15c27fd1e8e6ff3429df1296ef4b2.jpg",
        anime: "Naruto",
        descricao: "Um estrategista brilhante, Shikamaru é conhecido por sua inteligência excepcional e sua habilidade de manipular sombras em combate. Ele é um líder nato, embora muitas vezes prefira a vida tranquila.",
        habilidades: "Manipulação de Sombras, Estratégia, Taijutsu",
        citacao: "Que problemático... mas, como líder, eu tenho que assumir a responsabilidade.",
        link: "https://naruto.fandom.com/wiki/Shikamaru_Nara"
    },
    {
        titulo: "Chōji Akimichi",
        img: "https://i.pinimg.com/736x/49/45/db/4945dbf36138565f7b277e825b2d81c3.jpg",
        anime: "Naruto",
        descricao: "Membro do clã Akimichi, Chōji possui a habilidade de expandir seu corpo em combate. Ele é leal e sempre está disposto a proteger seus amigos, apesar de sua natureza gentil e amor por comida.",
        habilidades: "Expansão Corporal, Taijutsu, Manipulação de Calorias",
        citacao: "Eu sou um Akimichi! Nunca subestime o meu poder!",
        link: "https://naruto.fandom.com/wiki/Chōji_Akimichi"
    },
    {
        titulo: "Tenten",
        img: "https://i.pinimg.com/736x/6e/e1/4c/6ee14cf30b2f4c5406ac777c87535a42.jpg",
        anime: "Naruto",
        descricao: "Especialista em armas ninja, Tenten é uma kunoichi habilidosa que luta ao lado de Neji e Lee. Seu talento com o arsenal de ferramentas ninja a torna uma adversária perigosa em batalha.",
        habilidades: "Manipulação de Armas, Invocação de Pergaminhos, Taijutsu",
        citacao: "Eu vou mostrar a força de uma kunoichi de verdade!",
        link: "https://naruto.fandom.com/wiki/Tenten"
    },
    {
        titulo: "Kiba Inuzuka",
        img: "https://pm1.aminoapps.com/7701/b74523de831455a9a6176c437cc31b0cdbccb3e2r1-640-640v2_uhq.jpg",
        anime: "Naruto",
        descricao: "Membro do clã Inuzuka, Kiba é conhecido por sua lealdade e por lutar ao lado de seu parceiro canino, Akamaru. Juntos, eles formam uma dupla feroz, utilizando técnicas de ninjutsu e habilidades de rastreamento.",
        habilidades: "Habilidades Caninas, Jutsu de Cheiro, Taijutsu",
        citacao: "Com Akamaru ao meu lado, ninguém pode me parar!",
        link: "https://naruto.fandom.com/wiki/Kiba_Inuzuka"
    }, 
    {
        titulo: "Akamaru",
        img: "https://i.pinimg.com/736x/94/14/23/94142319c258beff35594632b5190c8b.jpg",
        anime: "Naruto",
        descricao: "Companheiro canino de Kiba, Akamaru é um cachorro treinado para lutar ao lado de seu mestre. Ele é leal, corajoso e parte essencial das técnicas combinadas que ele e Kiba utilizam.",
        habilidades: "Combate Canino, Transformação em Besta, Faro Aguçado",
        citacao: "Woof woof! (Eu estou com você, Kiba!)",
        link: "https://naruto.fandom.com/wiki/Akamaru"
    },
    {
        titulo: "Chōchō Akimichi",
        img: "https://i.pinimg.com/736x/b3/7b/ce/b37bce0fcc5a8205de3917fe1341d3ee.jpg",
        anime: "Boruto: Naruto Next Generations",
        descricao: "Filha de Chōji Akimichi, Chōchō herdou as habilidades de expansão de seu clã. Ela é confiante e orgulhosa, sempre disposta a proteger seus amigos e provar seu valor como ninja.",
        habilidades: "Expansão Corporal, Manipulação de Calorias, Taijutsu",
        citacao: "Eu sou Chōchō Akimichi, e ninguém vai me parar!",
        link: "https://naruto.fandom.com/wiki/Chōchō_Akimichi"
    },
    {
        titulo: "Kimimaro",
        img: "https://i.pinimg.com/736x/f5/c3/b6/f5c3b6c6b85f85daf0a5d8e85cb90ab3.jpg",
        anime: "Naruto",
        descricao: "O último sobrevivente do clã Kaguya, Kimimaro é um guerreiro poderoso com a habilidade de manipular seus ossos como armas. Ele é leal a Orochimaru e foi um dos ninjas mais fortes sob seu comando.",
        habilidades: "Manipulação Óssea, Taijutsu, Defesa Impecável",
        citacao: "Meu corpo é uma arma... e ninguém pode me derrotar.",
        link: "https://naruto.fandom.com/wiki/Kimimaro"
    },
    {
        titulo: "Killer Bee",
        img: "https://i.pinimg.com/550x/6e/fb/38/6efb38d6f62e6a20add8da009add0b26.jpg",
        anime: "Naruto Shippuden",
        descricao: "Jinchuuriki do Oito Caudas, Killer Bee é um ninja talentoso e rapper nato. Ele é conhecido por seu estilo único de luta e habilidade de controlar completamente sua besta, tornando-se um aliado crucial para Konoha.",
        habilidades: "Raiton, Luta com Espadas, Controle da Besta com Cauda",
        citacao: "Eu sou o Killer Bee, o ninja que rima e nunca perde o ritmo!",
        link: "https://naruto.fandom.com/wiki/Killer_Bee"
    },
    {
        titulo: "Quarto Raikage",
        img: "https://i.pinimg.com/474x/8d/04/d3/8d04d38dc435b8ebcab981abe3903f7a.jpg",
        anime: "Naruto Shippuden",
        descricao: "Líder da Vila Oculta da Nuvem, o Quarto Raikage é conhecido por sua força bruta e velocidade incomparável. Ele é um guerreiro implacável e respeitado, sempre lutando pela proteção de sua vila.",
        habilidades: "Raiton, Velocidade Sobrehumana, Força Descomunal",
        citacao: "Eu sou o Raikage, e ninguém se atreverá a desafiar a Nuvem!",
        link: "https://naruto.fandom.com/wiki/A_(Fourth_Raikage)"
    },
    {
        titulo: "Zabuza Momochi",
        img: "https://i.pinimg.com/1200x/53/c1/0a/53c10a425e1c7c994da456bcfe263831.jpg",
        anime: "Naruto",
        descricao: "Um dos Sete Espadachins da Névoa, Zabuza é um assassino cruel conhecido como o Demônio da Névoa Oculta. Sua habilidade com a espada e técnicas de assassinato o tornam um adversário temível.",
        habilidades: "Manipulação de Névoa, Taijutsu, Espadachin de Elite",
        citacao: "Neste mundo, apenas os fortes sobrevivem.",
        link: "https://naruto.fandom.com/wiki/Zabuza_Momochi"
    },
    {
        titulo: "Kaguya Ōtsutsuki",
        img: "https://i.pinimg.com/736x/53/30/e0/5330e0008d404324d6b720519c88b716.jpg",
        anime: "Naruto Shippuden",
        descricao: "A primeira usuária de chakra na Terra, Kaguya é uma deusa imortal que busca recuperar o chakra que foi espalhado pelo mundo. Sua presença é aterrorizante, e seu poder é incomensurável.",
        habilidades: "Manipulação de Chakra, Criação de Dimensões, Imortalidade",
        citacao: "O chakra pertence a mim e só a mim.",
        link: "https://naruto.fandom.com/wiki/Kaguya_Ōtsutsuki"
    },
    {
        titulo: "Rin Nohara",
        img: "https://pbs.twimg.com/profile_images/1190094809719037952/R9sMPiYi_400x400.jpg",
        anime: "Naruto",
        descricao: "Uma kunoichi do Time Minato, Rin é uma ninja médica gentil e carinhosa. Sua morte trágica teve um grande impacto em Kakashi e Obito, moldando os destinos dos dois.",
        habilidades: "Jutsu Médico, Habilidade de Cura, Trabalho em Equipe",
        citacao: "Eu sempre estarei com vocês... em seus corações.",
        link: "https://naruto.fandom.com/wiki/Rin_Nohara"
    },
    {
        titulo: "Sasori",
        img: "https://64.media.tumblr.com/e949316b1a97396546f32a06a6daf7d2/063a359a0a0bb5d0-22/s1280x1920/c6d632c682fe7982bb3e69cc0d0e7decc05a317a.jpg",
        anime: "Naruto Shippuden",
        descricao: "Membro da Akatsuki, Sasori é um mestre marionetista que transformou seu próprio corpo em uma marionete. Ele é temido por sua habilidade de manipular bonecos em combate, especialmente suas marionetes humanas.",
        habilidades: "Manipulação de Marionetes, Jutsu de Veneno, Imortalidade Mecânica",
        citacao: "A arte é uma explosão... mas a verdadeira arte é eterna.",
        link: "https://naruto.fandom.com/wiki/Sasori"
    },
    {
        titulo: "Sakura Haruno",
        img: "https://64.media.tumblr.com/58a949b1e6aa1a6cead45ab3bf0b29c8/f60cd083fc0b2abf-ac/s1280x1920/d6d580dbb589bf1e2c5bb24768d2cecc795aeaae.jpg",
        anime: "Naruto",
        descricao: "Uma kunoichi talentosa, Sakura é conhecida por sua força física impressionante e habilidades em ninjutsu médico. Como discípula de Tsunade, ela se torna uma das ninjas médicas mais fortes de Konoha.",
        habilidades: "Jutsu Médico, Superforça, Habilidade de Cura",
        citacao: "Eu vou proteger meus amigos, não importa o quê!",
        link: "https://naruto.fandom.com/wiki/Sakura_Haruno"
    },
    {
        titulo: "Maito Gai",
        img: "https://i.pinimg.com/474x/97/28/e8/9728e8c0f3f3ef2b3764c8d0581dbabb.jpg",
        anime: "Naruto",
        descricao: "Mestre do Taijutsu, Maito Gai é um ninja incrivelmente poderoso que treina Rock Lee. Conhecido por sua personalidade exuberante e sua habilidade de abrir os Oito Portões, Gai é um guerreiro formidável.",
        habilidades: "Taijutsu, Oito Portões, Velocidade e Força Sobrehumanas",
        citacao: "Com a força da juventude, não há nada que não possamos alcançar!",
        link: "https://naruto.fandom.com/wiki/Might_Guy"
    },
    {
        titulo: "Shino Aburame",
        img: "https://i.pinimg.com/736x/14/4f/e2/144fe26c8bbd3b5e07341026c7aa03ae.jpg",
        anime: "Naruto",
        descricao: "Membro do clã Aburame, Shino é um ninja que controla insetos para lutar. Ele é calmo, reservado e altamente inteligente, utilizando seus insetos de maneira estratégica em batalha.",
        habilidades: "Controle de Insetos, Jutsu de Camuflagem, Estratégia",
        citacao: "Meus insetos nunca falham em sua missão.",
        link: "https://naruto.fandom.com/wiki/Shino_Aburame"
    },
    {
        titulo: "Iruka Umino",
        img: "https://i.pinimg.com/474x/f4/fa/2e/f4fa2e6d03c978239f726f1b6cd45e2c.jpg",
        anime: "Naruto",
        descricao: "Um professor da Academia Ninja, Iruka é uma figura paternal para Naruto. Ele é gentil e compassivo, sempre disposto a ajudar seus alunos e proteger Konoha.",
        habilidades: "Jutsu de Barreira, Técnicas de Ensino, Combate Básico",
        citacao: "Você é especial, Naruto. E eu acredito em você.",
        link: "https://naruto.fandom.com/wiki/Iruka_Umino"
    },
    {
        titulo: "Asuma Sarutobi",
        img: "https://i.pinimg.com/736x/bc/8d/8b/bc8d8b90608485ed3113db0e61cc6c7f.jpg",
        anime: "Naruto",
        descricao: "Filho do Terceiro Hokage e sensei do Time 10, Asuma é um ninja habilidoso especializado em combate corpo a corpo e na manipulação do vento. Ele é um líder respeitado e pai de uma filha com Kurenai.",
        habilidades: "Manipulação do Vento, Taijutsu, Fumaças",
        citacao: "Proteger a próxima geração é o nosso dever.",
        link: "https://naruto.fandom.com/wiki/Asuma_Sarutobi"
    },
    {
        titulo: "Kurenai Yūhi",
        img: "https://i.pinimg.com/736x/f3/c4/f0/f3c4f03e23b0cefb024ab4e3a3d50982.jpg",
        anime: "Naruto",
        descricao: "Uma kunoichi especializada em genjutsu, Kurenai é a líder do Time 8. Ela é uma ninja talentosa e mãe dedicada, sempre disposta a proteger Konoha e sua filha.",
        habilidades: "Genjutsu, Taijutsu, Habilidade em Ilusões",
        citacao: "Eu vou proteger o que é mais precioso para mim.",
        link: "https://naruto.fandom.com/wiki/Kurenai_Yūhi"
    },
    {
        titulo: "Itachi Uchiha",
        img: "https://i.pinimg.com/736x/90/8c/7c/908c7cba9a1f2af8b8f3a0171c33771e.jpg",
        anime: "Naruto Shippuden",
        descricao: "Membro do clã Uchiha e da Akatsuki, Itachi é conhecido por sua habilidade com o Sharingan e seu sacrifício para proteger Konoha. Embora visto como um traidor, ele é um herói que carregou um pesado fardo.",
        habilidades: "Sharingan, Amaterasu, Tsukuyomi, Susanoo",
        citacao: "Mesmo que você odeie, continue vivendo.",
        link: "https://naruto.fandom.com/wiki/Itachi_Uchiha"
    },
    {
        titulo: "Naofumi Iwatani",
        img: "https://i.pinimg.com/736x/be/08/95/be089532d778c75e116913e6c1dd2693.jpg",
        anime: "Tate no Yuusha no Nariagari",
        descricao: "O Herói do Escudo, Naofumi foi traído e ridicularizado, mas se levantou para se tornar um defensor poderoso. Seu escudo é sua maior arma e ele luta para proteger aqueles que confiam nele.",
        habilidades: "Defesa Absoluta, Magia de Suporte, Habilidades de Escudo",
        citacao: "Eu nunca vou desistir. Nunca.",
        link: "https://shield-hero.fandom.com/wiki/Naofumi_Iwatani"
    },
    {
        titulo: "Raphtalia",
        img: "https://i.pinimg.com/736x/c6/91/8a/c6918aaa4b860c089c71f7eb9e9ec465.jpg",
        anime: "Tate no Yuusha no Nariagari",
        descricao: "Uma guerreira demi-humana e fiel companheira de Naofumi, Raphtalia luta com espadas e protege aqueles que ama. Sua força e coragem a tornam uma figura central na luta contra as ondas.",
        habilidades: "Espadachim, Magia de Luz, Habilidades de Curandeira",
        citacao: "Eu vou lutar ao seu lado, sempre.",
        link: "https://shield-hero.fandom.com/wiki/Raphtalia"
    },
    {
        titulo: "Kakuzu",
        img: "https://i.pinimg.com/550x/25/94/22/25942291d57edfea7f8fc67211d2a961.jpg",
        anime: "Naruto Shippuden",
        descricao: "Um membro imortal da Akatsuki, Kakuzu é um mercenário ganancioso que possui vários corações. Ele usa esses corações para prolongar sua vida e lançar jutsus poderosos de diferentes elementos.",
        habilidades: "Jiongu, Habilidades Elementais, Imortalidade",
        citacao: "Dinheiro é a única coisa em que se pode confiar.",
        link: "https://naruto.fandom.com/wiki/Kakuzu"
    },
    {
        titulo: "Deidara",
        img: "https://i.pinimg.com/736x/68/c8/60/68c860f08f28a550a758784a6758bcca.jpg",
        anime: "Naruto Shippuden",
        descricao: "Um artista explosivo e membro da Akatsuki, Deidara utiliza argila explosiva para criar obras de arte destrutivas. Ele vê suas explosões como a expressão máxima da arte efêmera.",
        habilidades: "Argila Explosiva, Kinjutsu, Estilo Explosivo",
        citacao: "A arte é uma explosão!",
        link: "https://naruto.fandom.com/wiki/Deidara"
    },
    {
        titulo: "Gaara",
        img: "https://i.pinimg.com/736x/7e/9c/0b/7e9c0bf925c688c9b6f6113c213e781e.jpg",
        anime: "Naruto",
        descricao: "Jinchuuriki do Shukaku e Kazekage da Vila Oculta da Areia, Gaara é um ninja poderoso com a habilidade de manipular areia. Ele superou seu passado sombrio para se tornar um líder forte e compassivo.",
        habilidades: "Manipulação de Areia, Defesa Absoluta, Jinchuuriki",
        citacao: "Eu protejo a Vila da Areia com minha vida.",
        link: "https://naruto.fandom.com/wiki/Gaara"
    },
    {
        titulo: "Kankurō",
        img: "https://i.pinimg.com/736x/f1/73/fd/f173fdd07de7846c60a10382c90e0925.jpg",
        anime: "Naruto",
        descricao: "Irmão de Gaara e mestre marionetista, Kankurō usa marionetes em combate para enganar e atacar seus inimigos. Ele é leal à Vila da Areia e atua como um dos principais defensores da mesma.",
        habilidades: "Manipulação de Marionetes, Jutsu de Veneno, Estratégia",
        citacao: "Eu nunca vou deixar ninguém machucar meus irmãos.",
        link: "https://naruto.fandom.com/wiki/Kankurō"
    },
    {
        titulo: "Temari",
        img: "https://i.pinimg.com/736x/9e/82/6a/9e826af4610da33f60b2a372ceea81ad.jpg",
        anime: "Naruto",
        descricao: "Irmã de Gaara e Kankurō, Temari é uma kunoichi talentosa que utiliza um leque gigante para manipular o vento em batalha. Ela é forte, determinada e uma estrategista nata.",
        habilidades: "Manipulação de Vento, Combate à Distância, Estratégia",
        citacao: "Eu vou fazer o vento trabalhar a meu favor.",
        link: "https://naruto.fandom.com/wiki/Temari"
    },
    {
        titulo: "Inojin Yamanaka",
        img: "https://statics.ruadoll.com/image/cache/2023/1229/0/71099cfc-8cb7-8c62-6337-883d513d422e-1000x1000.jpg",
        anime: "Boruto: Naruto Next Generations",
        descricao: "Filho de Ino e Sai, Inojin herdou o talento artístico de seu pai e as habilidades sensoriais de sua mãe. Ele utiliza jutsus de tinta e técnicas mentais para enfrentar seus inimigos.",
        habilidades: "Chōjū Giga, Controle Mental, Sensoriamento",
        citacao: "Eu vou encontrar meu próprio caminho como ninja.",
        link: "https://naruto.fandom.com/wiki/Inojin_Yamanaka"
    },
    {
        titulo: "Shikaku Nara",
        img: "https://i.pinimg.com/736x/6d/8e/71/6d8e71d1a3e64ee50512b027d5316ad6.jpg",
        anime: "Naruto",
        descricao: "Pai de Shikamaru e chefe do clã Nara, Shikaku é um estrategista brilhante e um dos principais conselheiros de Konoha. Ele é conhecido por sua inteligência e habilidades de manipulação de sombras.",
        habilidades: "Manipulação de Sombras, Estratégia, Táticas de Batalha",
        citacao: "Às vezes, é preciso sacrificar algo para proteger o todo.",
        link: "https://naruto.fandom.com/wiki/Shikaku_Nara"
    },
    {
        titulo: "Hinata Hyuga",
        img: "https://pm1.aminoapps.com/7691/1b8587e505179d73fe2f82860ed372501e3b5690r1-829-829v2_uhq.jpg",
        anime: "Naruto",
        descricao: "Membro do clã Hyuga, Hinata é uma kunoichi gentil e determinada. Embora inicialmente tímida, ela se torna uma guerreira confiante e protetora, especialmente quando se trata de Naruto.",
        habilidades: "Byakugan, Jūken, Técnica das Oito Trigramas",
        citacao: "Eu vou proteger aqueles que amo, com todas as minhas forças.",
        link: "https://naruto.fandom.com/wiki/Hinata_Hyuga"
    },
    {
        titulo: "Haku",
        img: "https://i.pinimg.com/736x/e3/55/05/e3550581cf1ef92be79f38db21237ded.jpg",
        anime: "Naruto",
        descricao: "Haku foi um ninja habilidoso e leal seguidor de Zabuza. Conhecido por suas habilidades com jutsus de gelo, Haku era gentil e compassivo, mas também implacável em batalha.",
        habilidades: "Manipulação de Gelo, Técnica Espelhos de Cristal de Gelo, Agilidade Sobrehumana",
        citacao: "Eu sou uma ferramenta para ajudar meu mestre a alcançar seus sonhos.",
        link: "https://naruto.fandom.com/wiki/Haku"
    },
    {
        titulo: "Gon Freecss",
        img: "https://i.pinimg.com/originals/98/35/b2/9835b286061ed652ac7780855c0ebd93.jpg",
        anime: "Hunter x Hunter",
        descricao: "Um jovem caçador em treinamento, Gon é determinado e tem uma personalidade cativante. Ele embarca em uma jornada para encontrar seu pai e se tornar um caçador lendário.",
        habilidades: "Nen, Agilidade Sobrehumana, Inteligência Tática",
        citacao: "Eu vou me tornar um grande caçador, assim como meu pai!",
        link: "https://hunterxhunter.fandom.com/wiki/Gon_Freecss"
    },
    {
        titulo: "Natsu Dragneel",
        img: "https://i.pinimg.com/236x/f6/da/a8/f6daa8d4a13fc203a95a8b8b711f86b0.jpg",
        anime: "Fairy Tail",
        descricao: "Membro da guilda Fairy Tail, Natsu é um mago do fogo e Dragon Slayer. Ele é impulsivo e ferozmente leal aos seus amigos, sempre disposto a lutar por aqueles que ama.",
        habilidades: "Fogo de Dragon Slayer, Combate Corpo a Corpo, Magia de Dragão",
        citacao: "Se é para proteger meus amigos, eu não vou perder para ninguém!",
        link: "https://fairytail.fandom.com/wiki/Natsu_Dragneel"
    },
    {
        titulo: "Lucy Heartfilia",
        img: "https://i.pinimg.com/736x/f1/a2/b7/f1a2b7e238671f04dedb50d891d0473b.jpg",
        anime: "Fairy Tail",
        descricao: "Uma Celestial Spirit Mage e membro da Fairy Tail, Lucy é inteligente e determinada. Ela forma laços fortes com seus espíritos e colegas de guilda, sempre lutando ao lado deles.",
        habilidades: "Magia de Espírito Celestial, Invocação, Inteligência Estratégica",
        citacao: "Eu sou uma maga da Fairy Tail. E nunca abandonarei meus amigos.",
        link: "https://fairytail.fandom.com/wiki/Lucy_Heartfilia"
    },
    {
        titulo: "Juvia Lockser",
        img: "https://64.media.tumblr.com/db024aab3cca8d859f5fdafaec022c08/5b218c6174bafdcd-a5/s640x960/02b6f92b01f736ee5ea3a8f3374b65cf7a5d81bc.jpg",
        anime: "Fairy Tail",
        descricao: "Uma ex-membro da Phantom Lord e agora uma fiel membro da Fairy Tail, Juvia controla a água em combate. Ela é apaixonada por Gray e luta com fervor por sua guilda.",
        habilidades: "Manipulação de Água, Magia de Água, Transformação",
        citacao: "Meu amor por Gray-sama é invencível!",
        link: "https://fairytail.fandom.com/wiki/Juvia_Lockser"
    },
    {
        titulo: "",
        img: "https://link-da-imagem-do-gray.jpg",
        anime: "Fairy Tail",
        descricao: "Um Ice Mage e membro da Fairy Tail, Gray é conhecido por sua frieza em batalha e sua rivalidade amigável com Natsu. Ele é um guerreiro confiável e leal aos seus amigos.",
        habilidades: "Magia de Gelo, Criomancia, Combate Corpo a Corpo",
        citacao: "Eu não vou desistir, não importa o quão difícil seja.",
        link: "https://fairytail.fandom.com/wiki/Gray_Fullbuster"
    },
    {
        titulo: "Gajeel Redfox",
        img: "https://link-da-imagem-do-gajeel.jpg",
        anime: "Fairy Tail",
        descricao: "Um Dragon Slayer do ferro e ex-membro da Phantom Lord, Gajeel se juntou à Fairy Tail após lutar contra Natsu. Ele é durão, mas também leal e protetor com seus companheiros.",
        habilidades: "Ferro de Dragon Slayer, Manipulação de Ferro, Combate Corpo a Corpo",
        citacao: "Eu luto pelos meus nakama. Isso é tudo o que importa.",
        link: "https://fairytail.fandom.com/wiki/Gajeel_Redfox"
    },
    {
        titulo: "Erza Scarlet",
        img: "https://link-da-imagem-da-erza.jpg",
        anime: "Fairy Tail",
        descricao: "Uma das magas mais poderosas da Fairy Tail, Erza é uma mestre em reequipped magic e conhecida por sua disciplina e força. Ela é respeitada e temida tanto por seus amigos quanto por seus inimigos.",
        habilidades: "Reequip Magic, Espadachim, Combate Corpo a Corpo",
        citacao: "Eu sou Erza Scarlet, e não vou recuar diante de nada.",
        link: "https://fairytail.fandom.com/wiki/Erza_Scarlet"
    },
    {
        titulo: "Laxus Dreyar",
        img: "https://link-da-imagem-do-laxus.jpg",
        anime: "Fairy Tail",
        descricao: "Neto do mestre da guilda, Laxus é um Dragon Slayer do trovão e um dos membros mais fortes da Fairy Tail. Ele é poderoso e tem um forte senso de orgulho, mas também se preocupa profundamente com seus companheiros.",
        habilidades: "Trovão de Dragon Slayer, Raijinshuu, Combate Corpo a Corpo",
        citacao: "Ninguém vai derrubar a Fairy Tail enquanto eu estiver aqui.",
        link: "https://fairytail.fandom.com/wiki/Laxus_Dreyar"
    },
    {
        titulo: "Acnologia",
        img: "https://link-da-imagem-do-acnologia.jpg",
        anime: "Fairy Tail",
        descricao: "Conhecido como o Dragão Rei, Acnologia é uma das entidades mais poderosas do mundo. Ele é temido por todos devido ao seu poder devastador e sua habilidade de destruir até mesmo dragões.",
        habilidades: "Dragon Slayer, Transformação em Dragão, Destruição",
        citacao: "Eu sou o fim de tudo. Eu sou Acnologia.",
        link: "https://fairytail.fandom.com/wiki/Acnologia"
    },
    {
        titulo: "Rimuru Tempest",
        img: "https://link-da-imagem-do-rimuru.jpg",
        anime: "That Time I Got Reincarnated as a Slime",
        descricao: "Uma vez humano, Rimuru foi reencarnado como um slime em um mundo de fantasia. Ele possui habilidades únicas que o tornam extremamente poderoso e lidera sua própria nação de monstros.",
        habilidades: "Predator, Grande Sábio, Manipulação de Magia",
        citacao: "Eu protegerei aqueles que me são queridos, não importa o que custe.",
        link: "https://tensura.fandom.com/wiki/Rimuru_Tempest"
    },
    {
        titulo: "Android 18",
        img: "https://link-da-imagem-da-android-18.jpg",
        anime: "Dragon Ball Z",
        descricao: "Originalmente uma vilã, Android 18 foi transformada em uma guerreira formidável e eventual aliada dos Z Fighters. Ela é forte, independente, e mãe dedicada.",
        habilidades: "Super Força, Vôo, Energia Ki",
        citacao: "Eu sou muito mais forte do que pareço.",
        link: "https://dragonball.fandom.com/wiki/Android_18"
    },
    {
        titulo: "Android 17",
        img: "https://link-da-imagem-do-android-17.jpg",
        anime: "Dragon Ball Z",
        descricao: "Irmão de Android 18, ele compartilha habilidades semelhantes e é conhecido por sua calma em batalha. Ele eventualmente se torna um guardião da Terra e um dos Z Fighters.",
        habilidades: "Super Força, Vôo, Energia Ki",
        citacao: "Lutar pelo que é certo, isso é o que importa.",
        link: "https://dragonball.fandom.com/wiki/Android_17"
    },
    {
        titulo: "Kuririn",
        img: "https://link-da-imagem-do-kuririn.jpg",
        anime: "Dragon Ball Z",
        descricao: "Um dos melhores amigos de Goku e membro dos Z Fighters, Kuririn é conhecido por sua coragem e espírito de luta, apesar de ser um humano normal em um mundo de deuses e guerreiros alienígenas.",
        habilidades: "Kamehameha, Vôo, Disco Destruidor",
        citacao: "Mesmo os menores podem fazer uma grande diferença.",
        link: "https://dragonball.fandom.com/wiki/Kuririn"
    },
    {
        titulo: "Piccolo",
        img: "https://link-da-imagem-do-piccolo.jpg",
        anime: "Dragon Ball Z",
        descricao: "Um guerreiro Namekuseijin e antigo inimigo de Goku, Piccolo eventualmente se torna um dos maiores aliados dos Z Fighters. Ele é um mentor sábio e poderoso para Gohan.",
        habilidades: "Regeneração, Explosão de Ki, Técnica do Canhão de Feixe Especial",
        citacao: "O verdadeiro poder não vem da força bruta, mas da sabedoria.",
        link: "https://dragonball.fandom.com/wiki/Piccolo"
    },
    {
        titulo: "Broly",
        img: "https://link-da-imagem-do-broly.jpg",
        anime: "Dragon Ball Super",
        descricao: "Um dos Saiyajins mais poderosos, Broly é conhecido por seu poder incomensurável e sua raiva incontrolável. Ele é uma força da natureza, capaz de enfrentar até mesmo os guerreiros mais fortes.",
        habilidades: "Super Saiyajin Lendário, Vôo, Explosão de Ki",
        citacao: "Eu sou a lenda, o Saiyajin Lendário.",
        link: "https://dragonball.fandom.com/wiki/Broly"
    },
    {
        titulo: "Kawaki",
        img: "https://link-da-imagem-do-kawaki.jpg",
        anime: "Boruto: Naruto Next Generations",
        descricao: "Um garoto marcado pelo Karma e criado como uma arma, Kawaki é ferozmente leal a Naruto e se vê dividido entre sua nova vida e seu passado sombrio.",
        habilidades: "Karma, Jutsus de Combate Corpo a Corpo, Tecnologia Ninja",
        citacao: "Eu farei qualquer coisa para proteger aqueles que amo.",
        link: "https://boruto.fandom.com/wiki/Kawaki"
    },
    {
        titulo: "Hijimaru",
        img: "https://link-da-imagem-do-hijimaru.jpg",
        anime: "Boruto: Naruto Next Generations",
        descricao: "Um dos ninjas de Konoha da nova geração, Hijimaru é corajoso e habilidoso, sempre disposto a enfrentar os desafios que surgem em seu caminho.",
        habilidades: "Jutsus Ninja, Ninjutsu, Taijutsu",
        citacao: "O futuro é nosso para proteger.",
        link: "https://boruto.fandom.com/wiki/Hijimaru"
    },
    {
        titulo: "Juugo",
        img: "https://link-da-imagem-do-juugo.jpg",
        anime: "Naruto Shippuden",
        descricao: "Um seguidor leal de Orochimaru, Juugo é conhecido por sua habilidade de absorver energia natural, o que lhe dá uma força imensa, mas também um temperamento instável.",
        habilidades: "Absorção de Energia Natural, Transformação, Super Força",
        citacao: "Eu luto para controlar o monstro dentro de mim.",
        link: "https://naruto.fandom.com/wiki/Juugo"
    },
    {
        titulo: "Karin",
        img: "https://link-da-imagem-da-karin.jpg",
        anime: "Naruto Shippuden",
        descricao: "Uma ninja sensorial e antiga membro da equipe Taka, Karin é leal a Sasuke e possui habilidades únicas de cura e rastreamento.",
        habilidades: "Rastreamento Sensorial, Cura, Chakra",
        citacao: "Meu coração sempre me guiará para onde ele está.",
        link: "https://naruto.fandom.com/wiki/Karin"
    },
    {
        titulo: "Suigetsu Hozuki",
        img: "https://link-da-imagem-do-suigetsu.jpg",
        anime: "Naruto Shippuden",
        descricao: "Membro da equipe Taka e mestre da espada, Suigetsu tem a habilidade única de transformar seu corpo em água. Ele é sarcástico e imprevisível, mas também leal aos seus aliados.",
        habilidades: "Transformação em Água, Kenjutsu, Manipulação de Líquidos",
        citacao: "Água flui, e eu também.",
        link: "https://naruto.fandom.com/wiki/Suigetsu_Hozuki"
    },
    {
        titulo: "Kirito",
        img: "https://link-da-imagem-do-kirito.jpg",
        anime: "Sword Art Online",
        descricao: "Um jogador habilidoso e protagonista de Sword Art Online, Kirito é conhecido por sua bravura e habilidades excepcionais com a espada. Ele é determinado a proteger aqueles que ama no mundo virtual e real.",
        habilidades: "Espadachim Dual, Agilidade, Habilidades de Jogo",
        citacao: "Eu vou proteger todos, mesmo que isso signifique lutar sozinho.",
        link: "https://swordartonline.fandom.com/wiki/Kirito"
    },
    {
        titulo: "Monkey D. Luffy",
        img: "https://link-da-imagem-do-luffy.jpg",
        anime: "One Piece",
        descricao: "Capitão dos Piratas do Chapéu de Palha, Luffy é um pirata de coração puro e determinado a encontrar o One Piece e se tornar o Rei dos Piratas. Ele é impulsivo, mas também incrivelmente leal.",
        habilidades: "Gomu Gomu no Mi, Haki, Combate Corpo a Corpo",
        citacao: "Eu vou me tornar o Rei dos Piratas!",
        link: "https://onepiece.fandom.com/wiki/Monkey_D._Luffy"
    },
    {
        titulo: "Nami",
        img: "https://link-da-imagem-da-nami.jpg",
        anime: "One Piece",
        descricao: "A navegadora dos Piratas do Chapéu de Palha, Nami é inteligente e habilidosa em mapear o mar. Ela é esperta e determinada a proteger sua tripulação, usando sua astúcia e habilidades de navegação.",
        habilidades: "Navegação, Clima-Tact, Inteligência",
        citacao: "Eu protegerei meus amigos e farei o que for preciso.",
        link: "https://onepiece.fandom.com/wiki/Nami"
    },
    {
        titulo: "Roronoa Zoro",
        img: "https://link-da-imagem-do-zoro.jpg",
        anime: "One Piece",
        descricao: "O espadachim dos Piratas do Chapéu de Palha, Zoro é um guerreiro formidável e usa um estilo único de três espadas. Ele é dedicado a se tornar o maior espadachim do mundo.",
        habilidades: "Santoryu, Haki, Super Força",
        citacao: "Eu nunca vou perder novamente. Nunca.",
        link: "https://onepiece.fandom.com/wiki/Roronoa_Zoro"
    },
    {
        titulo: "Sanji",
        img: "https://link-da-imagem-do-sanji.jpg",
        anime: "One Piece",
        descricao: "O cozinheiro dos Piratas do Chapéu de Palha, Sanji é um mestre em artes marciais e culinária. Ele é cavalheiro e luta ferozmente para proteger seus amigos e seu sonho de encontrar o All Blue.",
        habilidades: "Black Leg Style, Haki, Combate Corpo a Corpo",
        citacao: "Eu sou o cozinheiro dos Chapéu de Palha. E eu protejo minha tripulação com cada prato que preparo.",
        link: "https://onepiece.fandom.com/wiki/Sanji"
    },
    {
        titulo: "Franky",
        img: "https://link-da-imagem-do-franky.jpg",
        anime: "One Piece",
        descricao: "O engenheiro dos Piratas do Chapéu de Palha, Franky é um ciborgue talentoso que construiu o Thousand Sunny. Ele é divertido e corajoso, sempre pronto para entrar em ação.",
        habilidades: "Engenharia, Ciborgue, Combate Corpo a Corpo",
        citacao: "Eu sou super! Vamos fazer isso acontecer!",
        link: "https://onepiece.fandom.com/wiki/Franky"
    },
    {
        titulo: "Usopp",
        img: "https://link-da-imagem-do-usopp.jpg",
        anime: "One Piece",
        descricao: "O atirador dos Piratas do Chapéu de Palha, Usopp é conhecido por sua coragem e habilidades de precisão. Ele pode ser medroso, mas sempre encontra coragem para proteger seus amigos.",
        habilidades: "Atirador de Elite, Engenharia, Estratégia",
        citacao: "Eu posso ser um covarde, mas nunca vou abandonar meus amigos.",
        link: "https://onepiece.fandom.com/wiki/Usopp"
    },
    {
        titulo: "Tony Tony Chopper",
        img: "https://link-da-imagem-do-chopper.jpg",
        anime: "One Piece",
        descricao: "O médico dos Piratas do Chapéu de Palha, Chopper é uma rena com habilidades de transformar-se em humano. Ele é corajoso e dedicado a cuidar de sua tripulação.",
        habilidades: "Transformação, Medicina, Combate Corpo a Corpo",
        citacao: "Eu sou o médico dos Piratas do Chapéu de Palha, e vou proteger a saúde de todos!",
        link: "https://onepiece.fandom.com/wiki/Tony_Tony_Chopper"
    },
    {
        titulo: "Nico Robin",
        img: "https://link-da-imagem-da-nico-robin.jpg",
        anime: "One Piece",
        descricao: "A arqueóloga dos Piratas do Chapéu de Palha, Robin é uma mulher inteligente e habilidosa que busca descobrir a verdadeira história do mundo. Ela é calma e calculista em batalha.",
        habilidades: "Hana Hana no Mi, Arqueologia, Inteligência",
        citacao: "Eu só quero saber a verdade. E farei o que for preciso para encontrá-la.",
        link: "https://onepiece.fandom.com/wiki/Nico_Robin"
    },
    {
        titulo: "Brook",
        img: "https://link-da-imagem-do-brook.jpg",
        anime: "One Piece",
        descricao: "O músico dos Piratas do Chapéu de Palha, Brook é um esqueleto vivo que tem habilidades únicas e é um espadachim talentoso. Ele é leal à sua tripulação e sempre procura trazer alegria aos outros.",
        habilidades: "Revive-Revive Fruit, Música, Espadachim",
        citacao: "Mesmo na morte, eu vou lutar pelo meu sonho!",
        link: "https://onepiece.fandom.com/wiki/Brook"
    },
    {
        titulo: "Trafalgar D. Water Law",
        img: "https://link-da-imagem-do-trafalgar-law.jpg",
        anime: "One Piece",
        descricao: "Capitão dos Piratas Heart, Law é um cirurgião da morte e um estrategista brilhante. Ele possui a habilidade Ope Ope no Mi, permitindo-lhe manipular a estrutura das coisas ao seu redor.",
        habilidades: "Ope Ope no Mi, Cirurgia, Estratégia",
        citacao: "Eu farei o que for necessário para alcançar meus objetivos.",
        link: "https://onepiece.fandom.com/wiki/Trafalgar_D._Water_Law"
    }
];