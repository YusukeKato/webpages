(function () {
    'use strict';
    document.getElementById("text002").textContent ='\
      ＜重要＞\n\
      main関数が必要、main関数から処理される\n\
      ====================\n\
      ＜型色々＞\n\
      char --- 1Byte、文字とか\n\
      short --- 2Byte\n\
      int --- 4Byte、整数とか\n\
      float --- 4Byte、浮動小数点数\n\
      double --- (4,8？)でかい\n\
      string --- 文字列\n\
      ====================\n\
      ＜宣言の方法＞\n\
      最初に宣言が必要\n\
      int val;    //これ宣言\n\
      int a = 1;  //これも宣言\n\
      int b = 2;  //これも宣言\n\
      int c = a + b;//これも宣言\n\
      a = 2;      //一回宣言したら、自由に使える\n\
      b = 3;\n\
      c = a + b;\n\
      ====================\n\
      ＜条件分岐分岐＞\n\
      条件を満たすと、その中の内容が処理される\n\
      if( 条件式 ) {\n\
        /* １ */\n\
      }\n\
      else if( 条件式 ) {\n\
        /* 2 */\n\
      }\n\
      else {\n\
        /* 3（その他） */\n\
      }\n\
      =====\n\
      switch( 変数 ) {\n\
        case 定数１:\n\
          /* 1 */\n\
          break;\n\
        case 定数２:\n\
          /* 2 */\n\
          break;\n\
        default:\n\
          /* 3（その他） */\n\
          break;\n\
      }\n\
      ====================\n\
      ＜ループ＞\n\
      条件を満たす限り、繰り返す\n\
      while( 条件式 ) {\n\
        /* ループ */\n\
      }\n\
      for( 変数 ; 条件式 ; 変数操作式 ) {\n\
        /* ループ */\n\
      }\n\
      ====================\n\
      ＜配列＞\n\
      int a[ROW];\n\
      int a[ROW][COL];\n\
      ====================\n\
      ＜ポインタ＞\n\
      int t;\n\
      int *pt;\n\
      pt = &a;\n\
      ====================\n\
      ＜関数＞\n\
      int func( arg1, arg2 )\n\
      {\n\
        int val = arg1 + arg2;\n\
        return val;\n\
      }\n\
      \n\
      a = func( 2, 3 );\n\
      printf( "%d", a );  //出力:5\n\
      \n\
      int型の関数\n\
      arg1,arg2は引数\n\
      returnは返り値（ここではint型）\n\
      ====================\n\
      ＜ヘッダファイル＞\n\
      #include <stdio.h>//標準入出力\n\
      ヘッダファイルをインクルードすると、\n\
      いろいろ使える\n\
      ====================\n\
       ';
})();
