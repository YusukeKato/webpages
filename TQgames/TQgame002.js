  /* ボタン取得 */
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  const button4 = document.getElementById('button4');
  const restart = document.getElementById('restart');

  var Wid = 0, Hei = 0;
  var Delta = 20;
  var player = [], getP = [];
  var result = 0;
  var timeD;  //時間間隔
  var positions; //座標( x, y )
  var positions2; //座標( x, y )

  var flag_onload = true;//最初
  var flag_button = 0;//ボタンフラグ

  if( flag_onload ) {//初期化
    init();
    flag_onload = false;
  }

  /* リスタート初期化 */
  restart.onclick = () => {
    document.getElementById("game_over").textContent = "";
    player.splice( 0, player.length );//配列中身削除
    getP.splice( 0, getP.length );
    flag_button = 0;
    result = 0;
    init();
  }
  /* 座標（クラスにしてもいい）*/
  function Position( x, y ) {
      this.x = x;
      this.y = y;
  }
  /* 初期化 */
  function init() {
    var canvas = document.getElementById( 'field' );
    Wid = canvas.width / Delta;
    Hei = canvas.height / Delta;
    positions = canvas.getContext( '2d' );
    positions.font = "20px sans-serif";

    player.push( new Position( Wid / 2, Hei / 2 ) );//配列に押し込む

    for( var i = 0; i < 30; i++ ) {
      plusGetP();
    }
    timeD = setInterval( "update()", 200 );
  }

  /* ゲーム中、繰り返す */
  function update() {
    console.log("update");
    var x = player[0].x;
    var y = player[0].y;
    /* ボタンで操作 */
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
      default: depiction(); return;
    }
    /* 当たり判定 */
    if( hit( player, x, y ) || x < 0 || x >= Wid || y < 0 || y >= Hei ) {
      console.log("player or wall HIT!!");
      document.getElementById("game_over").textContent = "!!GAME OVER!!";
      clearInterval( timeD );
      depiction();
      return;
    }
    player.unshift( new Position( x, y ) );

    if( hit( getP, x, y ) ) {
      console.log("getPHIT!!");
      result += 10;
      transGetP( x, y );
    } else {
      player.pop();
    }
    depiction();
  }
  /* ポイントを増やす */
  function plusGetP() {
    while( true ) {
      var x = Math.floor( Math.random() * Wid );
      var y = Math.floor( Math.random() * Hei );
      if( hit( getP, x, y ) || hit( player, x, y ) ) {
        continue;
      }
      getP.push( new Position( x, y ) );
      break;
    }
  }
  /* ぶつかる */
  function hit( name, x, y ) {
    for( var i = 0; i < name.length; i++ ) {
      if( name[i].x == x && name[i].y == y ) {
        return true;
      }
    }
    return false;
  }
  /* とったポイントを移動させる（消してもいい） */
  function transGetP( x, y ) {
    getP = getP.filter( function( p ) {
      return( p.x != x || p.y != y );
    });
    plusGetP();
  }

  /* 描写 */
  function depiction() {
    console.log("paint");
    document.getElementById("points").textContent = result;
    positions.clearRect( 0, 0, Wid * Delta, Hei * Delta );
    positions.fillStyle = "rgb( 0, 0, 255 )";
    player.forEach( function( p ) {
      positions.fillText( "*", p.x * Delta, ( p.y + 1 ) * Delta );
    });
    positions.fillStyle = "rgb( 255, 0, 0 )";
    getP.forEach( function( p ) {
      positions.fillText( "+", p.x * Delta, ( p.y + 1 ) * Delta );
    });
  }
