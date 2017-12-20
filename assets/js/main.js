var game;

game = new Phaser.Game(800,600,Phaser.AUTO,'');

game.state.add('Menu',Menu);


game.state.start('Menu');
game.state.add('Game_Over',Game_Over);

