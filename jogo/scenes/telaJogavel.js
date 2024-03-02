//criação da cena em que ocorre o jogo
class telaJogavel extends Phaser.Scene {
    constructor() {
        super({ 
            key: 'jogo',
       });
    }

    
    preload() {
        // fonte fundo: https://br.freepik.com/fotos-vetores-gratis/ceu-desenho
        this.load.image('fundo', 'assets/ceu.png');

        for(let i = 0; i < 3; i++){
            // fonte plataformas: https://br.vexels.com/merch/png/pedra-de-rocha/
            this.load.image(nomesPlataformas[i], 'assets/plataforma.png');
        }

        //fonte maçã: https://pt.vecteezy.com/png/14386901-maca-de-frutas-de-estilo-desenhado-a-mao
        this.load.image('maca', 'assets/fruta.png');

        // fonte do personagem: https://arpitbansal8167.artstation.com/projects/xzQxZY
        this.load.spritesheet ('blue', 'assets/blue.png', { frameWidth: 48, frameHeight: 50 });
    }


    create() {

        //adição do fundo na tela
        this.add.image( larguraJogo/2, alturaJogo/2, 'fundo').setScale(1);

        //adição do passarinho na tela
        passarinho = this.physics.add.sprite(100, 450, 'blue').setScale(2);

        //Impede que o personagem saia dos limites da tela
        passarinho.setCollideWorldBounds(true);

        //adição da maçã na tela
        maca = this.physics.add.sprite(larguraJogo/2, 0, 'maca');
        maca.setCollideWorldBounds(true); // "borda no mundo"
        maca.setBounce(0.5); // fazer a maçã quicar

        //adição das plataformas na tela
        for(let j = 0; j < 3; j++){
            var larguraImagem = (j + 1) * 200;
            var alturaImagem = alturaJogo - 100 - ((j + 1) * 100); 
            plataformas[j] = this.physics.add.staticImage(larguraImagem, alturaImagem, nomesPlataformas[j]);
            this.physics.add.collider(plataformas[j], maca);
            this.physics.add.collider(passarinho, plataformas[j]);
        }

        //permite o uso das teclas do teclado
        teclado = this.input.keyboard.createCursorKeys();

        // adicionando placar 
        pontuacao = 0;
        placar = this.add.text(50, 50, 'Score:' + pontuacao, {fontSize:'45px', fill:'#495613'});

        // quando o passarinho encostar na maca
        this.physics.add.overlap(passarinho, maca, function(){ 
            maca.setVisible(false); //a maçã fica invisível

            //número sorteado entre 50 e 650
            var posicaoMaca_Y = Phaser.Math.RND.between(50, 650);
            //ajustar a posição da maçã de acordo com o número sorteado
            maca.setPosition(posicaoMaca_Y, 100); 

            pontuacao += 1; //soma pontuação
            placar.setText('Score: ' + pontuacao); //atualiza o placar

            maca.setVisible(true); // torna a maçã visível
        });

        //criação da animação do passarinho
        this.anims.create({
            key: 'voar',
            frames: this.anims.generateFrameNumbers('blue', { start: 0, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        //faz a animação funcionar
        passarinho.play("voar");

    }

    update() {
        
        movimentacao();
        
    }
    }

    
