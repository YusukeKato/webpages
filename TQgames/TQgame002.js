
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  const button4 = document.getElementById('button4');
  const restart = document.getElementById('restart');

  var W, H, S = 20;
  var snake = [], foods = [];
  var point = 0;
  var timer = NaN;
  var ctx;

  var flag_onload = true;

  var flag_button = 0;//ボタンフラグ

  if( flag_onload ) {
    init();
    flag_onload = false;
  }

  restart.onclick = () => {
    document.getElementById("game_over").textContent = "";
    for( var i = 0; i <= snake.length+1; i++ ) {
      snake.shift();
    }
    for( var j = 0; j <= foods.length+1; j++ ) {
      foods.shift();
    }
    flag_button = 0;
    init();
  }

  function Point( x, y ) {
    this.x = x;
    this.y = y;
  }

  function init() {
    var canvas = document.getElementById( 'field' );
    W = canvas.width / S;
    H = canvas.height / S;
    ctx = canvas.getContext( '2d' );
    ctx.font = "20px sans-serif";

    snake.push( new Point( W / 2, H / 2 ) );

    for( var i = 0; i < 20; i++ ) {
      addFood();
    }

    timer = setInterval( "tick()", 200 );
  }

  function addFood() {
    while( true ) {
      var x = Math.floor( Math.random() * W );
      var y = Math.floor( Math.random() * H );
      if( isHit( foods, x, y ) || isHit( snake, x, y ) ) {
        continue;
      }
      foods.push( new Point( x, y ) );
      break;
    }
  }

  function isHit( data, x, y ) {
    for( var i = 0; i < data.length; i++ ) {
      if( data[i].x == x && data[i].y == y ) {
        return true;
      }
    }
    return false;
  }

  function moveFood( x, y ) {
    foods = foods.filter( function( p ) {
      return( p.x != x || p.y != y );
    });
    addFood();
  }

  function tick() {
    console.log("tick");
    var x = snake[0].x;
    var y = snake[0].y;

    button1.onclick = () => {
        flag_button = 1;
    }
    button2.onclick = () => {
        flag_button = 2;
    }
    button3.onclick = () => {
        flag_button = 3;
    }
    button4.onclick = () => {
        flag_button = 4;
    }

    switch( flag_button ) {
      case 1: x--; break;
      case 2: y--; break;
      case 3: x++; break;
      case 4: y++; break;
      default: paint(); return;
    }

    if( isHit( snake, x, y ) || x < 0 || x >= W || y < 0 || y >= H ) {
      console.log("snake or wall HIT!!");
      document.getElementById("game_over").textContent = "!!GAME OVER!!";
      clearInterval( timer );
      paint();
      return;
    }

    snake.unshift( new Point( x, y ) );

    if( isHit( foods, x, y ) ) {
      console.log("foodsHIT!!");
      point += 10;
      moveFood( x, y );
    } else {
      snake.pop();
    }
    paint();
  }

  function paint() {
    console.log("paint");
    ctx.clearRect( 0, 0, W * S, H * S );
    ctx.fillStyle = "rgb( 256, 0, 0 )";
    ctx.fillText( point, S, S * 2 );
    ctx.fillStyle = "rgb( 0, 0, 255 )";
    foods.forEach( function( p ) {
      ctx.fillText( "+", p.x * S, ( p.y + 1 ) * S );
    });
    snake.forEach( function( p ) {
      ctx.fillText( "*", p.x * S, ( p.y + 1 ) * S );
    });
  }
