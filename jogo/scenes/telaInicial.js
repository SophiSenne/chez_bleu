//criação da cena do menu
class telaInicial extends Phaser.Scene {
    constructor() {
        super({ 
            key: 'menu',
       });
    }

    preload() {
        // fonte fundo: https://br.freepik.com/fotos-vetores-gratis/ceu-desenho
        this.load.image('fundo', 'assets/ceu.png');
        this.load.image('titulo', 'assets/titulo.png');
        //fonte controles: https://pt.vecteezy.com/arte-vetorial/10966483-controle-de-setas-do-teclado
        this.load.image('controles', 'assets/controles.png');
        this.load.image('botao', 'assets/botao_play.png');
    }

    create() {

        //adição da imagem de fundo
        this.add.image(larguraJogo/2, alturaJogo/2, 'fundo').setScale(1);

        //adição dos controles do jogo
        this.add.image(larguraJogo/2, alturaJogo - 125, 'controles').setScale(2);

        //adição do título do jogo na tela
        this.add.image(larguraJogo/2, 180, 'titulo').setScale(1.5);

        //criação do botão de play
        this.botaoInicar = this.add.image (larguraJogo/2, 300, 'botao').setScale(0.4);
        this.botaoInicar.setInteractive ();

        //quando clicar no botão, inicia a cena jogável
        this.botaoInicar.on ('pointerdown', () => {
            this.scene.stop('menu');
            this.scene.start('jogo');
        })
    }

    update(){
        
    }
}