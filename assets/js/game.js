var snake,apple,squareSize, score, speed,
    updateDelay, direction, new_direction,
    addNew, cursors, scoreTextValue, speedTextValue,
    textStyle_Key, textStyle_Value;

var Game = {

  preload: function(){
    game.load.image('snake','./assets/images/snake.png');
    game.load.image('apple','./assets/images/apple.png');
  }
}
