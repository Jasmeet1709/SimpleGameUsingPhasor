var game;

game = new Phaser.Game(800,600,Phaser.AUTO,'');

game.state.add('Menu',Menu);


game.state.start('Menu');

