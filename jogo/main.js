const larguraJogo = 800; //Altura da página
const alturaJogo = 600; //Largura da página

window.onload = function()
{
    let gameConfig = 
    {
        type: Phaser.AUTO,
        scale:{
            width:larguraJogo,
            height:alturaJogo,
            autoCenter:Phaser.Scale.CENTER,
        },

        physics: {
            default: 'arcade',
            arcade: {
                //colocar gravidade no jogo
                gravity: { y: 300},
                debug: true
              }
          },
          
          backgroudColor: '#FFFFFF',
          scene:[telaInicial, telaJogavel],
          parent: 'game',
          dom:{
              createContainer: true
          },
      };
      game = new Phaser.Game(gameConfig);
  
      window.focus();
  }

//declaração das variáveis
var passarinho;
var nomesPlataformas = ['plataformaUm', 'plataformaDois', 'plataformaTres'];
var plataformas = [];
var placar = 0;
var pulando = false;
var teclado;
var pontuacao = 0;
var maca;

//definição da função com  os movimentos do passarinho
function movimentacao (){
    //o passarinho move-se para a esquerda
    if (teclado.left.isDown){
        passarinho.setVelocityX(-200);
        passarinho.setFlip(true,false);
    }

    //o passarinho move-se para direita
    else if (teclado.right.isDown){
        passarinho.setVelocityX(200);
        passarinho.setFlip(false,false);
    }

    //o passarinho mantém a posição X
    else {
        passarinho.setVelocityX(0);
    }

    //o passarinho sobe
    if (teclado.up.isDown){
        passarinho.setVelocityY(-200);
    }
}
  
  