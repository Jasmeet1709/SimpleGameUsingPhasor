var Game_Over = {

  preload: function(){
    game.load.image('gameover','./assets/images/sky.png');
  },

  create: function(){
    this.add.button(0,0,'gameover',this.startGame,this);
    game.add.text(180, 250, "YOU WIN", { font: "bold 100px sans-serif", fill: "#000", align: "center"});
    game.add.text(250, 400, "Click to continue", { font: "bold 30px sans-serif", fill: "#000", align: "center"});

  },

  startGame: function(){
    this.state.start('Menu');
  }
}