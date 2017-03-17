(function () {
    'use strict';
    document.getElementById("text002").textContent ='\
      スコープは、グローバルと関数内だけらしい\n\
      use strict //最初に書いておくと厳密になるらしい\n\
      ========================================\n\
      ＜宣言＞\n\
      var a = 1;\n\
      var b = false;\n\
      var c = "name";\n\
      ========================================\n\
      ＜条件分岐＞\n\
      if( 条件式 ) {\n\
        /* 1 */\n\
      }\n\
      else if( 条件式 ) {\n\
        /* 2 */\n\
      }\n\
      else {\n\
        /* その他 */\n\
      }\n\
      ===================\n\
      switch( 変数 ) {\n\
        case 定数:\n\
          /* 1 */\n\
          break;\n\
        case 定数:\n\
          /* 2 */\n\
          break;\n\
        default:\n\
          /* その他 */\n\
          break;\n\
      }\n\
      ========================================\n\
      ＜ループ＞\n\
      while ( 条件式 ) {\n\
        /* 繰り返し */\n\
      }\n\
      ==========\n\
      for( 初期化式 ; 条件式 ; 変化式 ) {\n\
        /* 繰り返し */\n\
      }\n\
      ========================================\n\
      ＜即時関数＞\n\
      ( function (引数) {\n\
        /* 中身 */\n\
        return ;\n\
      } (渡す値));\n\
      最後のかっこの位置は２種類あるが、この書き方がいいらしい\n\
      ========================================\n\
      ＜関数＞\n\
      function NAME ( arg1, arg2 ) {\n\
        return ;\n\
      }\n\
      ========================================\n\
      document.getElementById("ID_NAME").textContent = "string";//テキスト代入\n\
      const Button = document.getElementById("ID_NAME");//ボタン取得\n\
      Button.onclick = () => {\n\
        /* ボタンが押されたときの処理内容 */\n\
      }\n\
       ';
})();
