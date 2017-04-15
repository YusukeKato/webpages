(function () {
    'use strict';
    document.getElementById("text002").textContent ='\
      ====================\n\
      ＜ヘッダファイル＞\n\
      ====================\n\
      ＜ファイル読み込み＞\n\
      FILE *fp; ファイル宣言\n\
      char *fileName = "FILENAME";\n\
      fp = fopen(fileName, "r"); rは、オプション(w,a)\n\
      if(fp == NULL) {\n\
        /* error */\n\
        return -1;\n\
      }\n\
      fclose(fp);\n\
      ====================\n\
      ＜標準ヘッダ＞\n\
      <stdio.h>\n\
      <stdlib.h>\n\
      <string.h>\n\
      <math.h>\n\
      <ctype.h>\n\
      <time.h>\n\
      ====================\n\
       ';
})();
