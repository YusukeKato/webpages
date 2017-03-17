
(function () {
    'use strict';
    /* ボタン取得 */
    const flag1Button = document.getElementById('flag1');
    const flag2Button = document.getElementById('flag2');
    const flag3Button = document.getElementById('flag3');
    const flag4Button = document.getElementById('flag4');
    const flag5Button = document.getElementById('flag5');
    const GoButton = document.getElementById('Go');
    var flag = 0;//選択肢
    var onflag = false;//GOボタンを押したかどうか
    var stage = 1;//ステージ番号
    var exe_point = 1;
    var flag_mode = 0;//モード切り替え
    var flag_mao = false;//魔王
    var cost = 300 * stage;
    var flag_chara_init = true;//無駄なフラグだが必要
    var sumT = 0;//カジノで使う、本当はこんなところで宣言しない
    var black1 = 0;
    var black2 = 0;

    class Chara {
      constructor(name,level,hp,attack,defence,money,exe) {
        this.na = name;
        this.le = level;
        this.hp = hp;
        this.at = attack;
        this.de = defence;
        this.mo = money;
        this.ex = exe;
      }
      print_para() {
        document.getElementById("text003").textContent = "名前:"+tink.na+"\nレベル:"+tink.le+"\n体力:"+tink.hp+"\n攻撃:"+tink.at+"\n防御"+this.de+"\nお金:"+tink.mo+"\n経験"+tink.ex;
      }
    }
    /* キャラクタ作成 */
    var tink = new Chara("ティンク",1,0,0,0,0,0);

    function chara_init() {
      /* 乱数取得 */
      tink.le = 1;
      tink.hp = Math.floor( Math.random() * 200 ) + 50;
      tink.at = Math.floor( Math.random() * 30 ) + 10;
      tink.de = Math.floor( Math.random() * 10 ) + 3;
      tink.mo = Math.floor( Math.random() * 1200 ) + 300;
      tink.ex = 0;
      if( tink.hp % 100 == 0 ) {
        tink.na = "破壊神";
        tink.hp *= 10;
        tink.at *= 10;
      }
      else if( tink.hp % 50 == 0 ) {
        tink.na = "大富豪";
        tink.mo *= 100;
      }
      else if( tink.hp % 10 == 0 ) {
        tink.na = "勇者";
        tink.hp *= 5;
        tink.at *= 5;
        tink.de *= 5;
        tink.mo *= 5;
      }
      else if( tink.hp % 5 == 0 ) {
        tink.na = "冒険者ティンク";
        tink.hp *= 3;
      }
      else if( tink.hp % 8 == 0 ) {
        tink.na = "魔法使いティンク";
        tink.at *= 4;
      }
      else if( tink.hp % 7 == 0 ) {
        tink.na = "棋士見習いティンク";
        tink.hp *= 2;
        tink.de *= 3;
      }
      else if( tink.hp % 9 == 0 ) {
        tink.na = "素早いティンク";
        tink.de *= 4;
        tink.mo *= 5;
      }
      stage = 1;
    }

    flag1Button.onclick = () => {//ボタン１が押された
        flag = 1;
        document.getElementById("sflag").textContent = "select：1";
        init();
    }
    flag2Button.onclick = () => {//ボタン２が押された
        flag = 2;
        document.getElementById("sflag").textContent = "select：2";
        init();
    }
    flag3Button.onclick = () => {//ボタン３が押された
        flag = 3;
        document.getElementById("sflag").textContent = "select：3";
        init();
    }
    flag4Button.onclick = () => {//ボタン４が押された
        flag = 4;
        document.getElementById("sflag").textContent = "select：4";
        init();
    }
    flag5Button.onclick = () => {//ボタン５が押された
        flag = 5;
        document.getElementById("sflag").textContent = "select：5";
        init();
    }
    GoButton.onclick = () => {//GOボタンが押された
        onflag = true;
        Eventfunc();
    }

    function init() {
      cost = 300 * stage;
      if( flag_chara_init ) {
        chara_init();
        flag_chara_init = false;
      }
      if( flag_mode == 0 ) {
        if( stage >= 10 ) {
          document.getElementById("text003").textContent ="\
        1 : 魔物と戦う 2 : お店で買い物\n\
        \n\
        3 : 宿屋で休憩 4 : パラメータ\n\
        \n\
        5 : 魔王との決戦へ";
        }
        else if( stage == 7 ) {
          document.getElementById("text003").textContent ="\
        1 : 魔物と戦う 2 : カジノで荒稼ぎ\n\
        \n\
        3 : 宿屋で休憩 4 : パラメータ\n\
        \n\
        5 : 次の場所へ";
        }
        else {
          document.getElementById("text003").textContent ="\
        1 : 魔物と戦う 2 : お店で買い物\n\
        \n\
        3 : 宿屋で休憩 4 : パラメータ\n\
        \n\
        5 : 次の場所へ";
        }
        document.getElementById("text004").textContent = "１～５を選択して、GOボタンを押してね\nとりあえず、困ったらGOボタン！！";
      }
      else if( flag_mode == 1 ) {
        document.getElementById("text003").textContent ="\
      1 : 剣"+cost+"円"+"  2 : 剣５本\n\
      \n\
      3 : 盾"+cost+"円"+"  4 : 盾５個\n\
      \n\
      5 : 店を出る";
        document.getElementById("text004").textContent = "１～５を選択して、GOボタンを押してね\nとりあえず、困ったらGOボタン！！";
      }
      else if( flag_mode == 2 ) {
        document.getElementById("text003").textContent = "ブラックジャック！！\n合計２１を目指せ！！";
        document.getElementById("text004").textContent ="\
      1 : まだひく 2 : これで勝負\n\
      \n\
      3 : なし 4 : なし 5 : なし\n\
      \n\
      現在の自分の合計:"+sumT;
      }
      document.getElementById("text005").textContent = "";
    }

    function Eventfunc() {
      init();
      if(onflag) {
        if( flag_mode == 0 ) {
          switch(flag) {
            case 1:
              battle();
              break;
            case 2:
              if( stage == 7 ) {
                if( tink.mo >= 300 ) {
                  black1 = Math.floor( Math.random() * 10 ) + 1;
                  black2 = Math.floor( Math.random() * 10 ) + 1;
                  sumT = black1 + black2;
                  flag_mode = 2;
                } else {
                  document.getElementById("text003").textContent = "お金が足りない。。。\n３００円必要";
                }
              }
              else flag_mode = 1;//お店へ
              break;
            case 3:
              inn();
              break;
            case 4:
              tink.print_para();
              break;
            case 5:
              if( stage >= 10 ) {
                flag_mao = true;
                battle();
              } else {
                  document.getElementById("text003").textContent = tink.na+"は次の場所へ";
                  stage += 1;
              }
              break;
            default:
              break;
          }
        }
        else if( flag_mode == 1 ) {
          switch( flag ) {
            case 1:
              shop( flag );
              break;
            case 2:
              shop( flag );
              break;
            case 3:
              shop( flag );
              break;
            case 4:
              shop( flag );
              break;
            case 5:
              flag_mode = 0;
              break;
            default:
              break;
          }
        }
        else if( flag_mode == 2 ) {
          switch( flag ) {
            case 1:
              casino( flag );
              break;
            case 2:
              casino( flag );
              break;
            case 3:
              break;
            case 4:
              break;
            case 5:
              break;
            default:
              break;
          }
        }
        level_up();
        stage_director();
      }
      onflag = false
      flag = 0
      document.getElementById("sflag").textContent = "select：0";
    }

    function battle() {
      /* 敵キャラ作成 */
      var rand = Math.floor( Math.random() * 100 );
      if( flag_mao ) {
        document.getElementById("text003").textContent = "魔王";
        var ele = Math.floor( Math.random() * tink.le * 1318 ) + tink.le*521;
        var ehp = Math.floor( Math.random() * ele * 3 ) + ele * 1;
        var eat = Math.floor( Math.random() * ele * 2 ) + ele * 1;
        var ede = Math.floor( Math.random() * ele * 1 ) + ele / 2;
        var emo = Math.floor( Math.random() * ele * 100 ) + ele * 50;
        var eex = Math.floor( Math.random() * ele * 1000 ) + stage * 100;
        var enemy = new Chara("魔王",ele,ehp,eat,ede,emo,eex);
        flag_mao = false;
      }
      else if( rand == 0 || rand == 1 ) {
        document.getElementById("text003").textContent = "勇者タナカ";
        var ele = Math.floor( Math.random() * tink.le * 10 ) + 1;
        var ehp = Math.floor( Math.random() * stage * 100 ) + stage * 60;
        var eat = Math.floor( Math.random() * stage * 60 ) + stage * 30;
        var ede = Math.floor( Math.random() * stage * 40 ) + stage * 10;
        var emo = Math.floor( Math.random() * stage * 5000 ) + stage * 1500;
        var eex = Math.floor( Math.random() * stage * 1000 ) + stage * 500;
        var enemy = new Chara("勇者",ele,ehp,eat,ede,emo,eex);
      }
      else if( rand <= 10 ) {
        document.getElementById("text003").textContent = "DJ.コマツナ";
        var ele = Math.floor( Math.random() * tink.le * 2 ) + 1;
        var ehp = Math.floor( Math.random() * stage * 30 ) + stage * 10;
        var eat = Math.floor( Math.random() * stage * 2 * 8 ) + stage * 2;
        var ede = Math.floor( Math.random() * stage * 3 ) + stage * 1;
        var emo = Math.floor( Math.random() * stage * 500 ) + stage * 50;
        var eex = Math.floor( Math.random() * stage * 50 ) + stage * 10;
        var enemy = new Chara("DJ.コマツナ",ele,ehp,eat,ede,emo,eex);
      }
      else if( rand <= 18 ) {
        document.getElementById("text003").textContent = "空飛ぶシイタケ";
        var ele = Math.floor( Math.random() * tink.le * 2 ) + 1;
        var ehp = Math.floor( Math.random() * stage * 120 ) + stage * 10;
        var eat = Math.floor( Math.random() * stage * 4 ) + stage * 2;
        var ede = Math.floor( Math.random() * stage * 2 * 2 ) + stage * 1;
        var emo = Math.floor( Math.random() * stage * 500 ) + stage * 50;
        var eex = Math.floor( Math.random() * stage * 50 ) + stage * 10;
        var enemy = new Chara("DJ.コマツナ",ele,ehp,eat,ede,emo,eex);
      }
      else if( rand <= 28 ) {
        document.getElementById("text003").textContent = "歩く田中";
        var ele = Math.floor( Math.random() * tink.le * 2 ) + 1;
        var ehp = Math.floor( Math.random() * stage * 50 ) + stage * 10;
        var eat = Math.floor( Math.random() * stage * 10 ) + stage * 2;
        var ede = Math.floor( Math.random() * stage * 3 ) + stage * 1;
        var emo = Math.floor( Math.random() * stage * 500 ) + stage * 50;
        var eex = Math.floor( Math.random() * stage * 50 ) + stage * 10;
        var enemy = new Chara("歩く田中",ele,ehp,eat,ede,emo,eex);
      }
      else if( rand <= 35 ) {
        document.getElementById("text003").textContent = "昨日までの友達";
        var ele = Math.floor( Math.random() * tink.le * 2 ) + 1;
        var ehp = Math.floor( Math.random() * stage * 50 ) + stage * 20;
        var eat = Math.floor( Math.random() * stage * 10 ) + stage * 5;
        var ede = Math.floor( Math.random() * stage * 8 ) + stage * 3;
        var emo = Math.floor( Math.random() * stage * 1000 ) + stage * 200;
        var eex = Math.floor( Math.random() * stage * 30 ) + stage * 20;
        var enemy = new Chara("昨日までの友達",ele,ehp,eat,ede,emo,eex);
      }
      else if( rand <= 45 ) {
        document.getElementById("text003").textContent = "明日への光";
        var ele = Math.floor( Math.random() * tink.le * 2 ) + 1;
        var ehp = Math.floor( Math.random() * stage * 50 ) + stage * 20;
        var eat = Math.floor( Math.random() * stage * 30 ) + stage * 15;
        var ede = Math.floor( Math.random() * stage * 8 ) + stage * 3;
        var emo = Math.floor( Math.random() * stage * 500 ) + stage * 200;
        var eex = Math.floor( Math.random() * stage * 150 ) + stage * 60;
        var enemy = new Chara("明日への光",ele,ehp,eat,ede,emo,eex);
      }
      else if( rand <= 50 ) {
        document.getElementById("text003").textContent = "５本脚のトナカイ";
        var ele = Math.floor( Math.random() * tink.le * 20 ) + 10;
        var ehp = Math.floor( Math.random() * stage * 50 ) + stage * 20;
        var eat = Math.floor( Math.random() * stage * 30 ) + stage * 15;
        var ede = Math.floor( Math.random() * stage * 8 ) + stage * 3;
        var emo = Math.floor( Math.random() * stage * 500 ) + stage * 200;
        var eex = Math.floor( Math.random() * stage * 200 ) + stage * 100;
        var enemy = new Chara("５本脚のトナカイ",ele,ehp,eat,ede,emo,eex);
      }
      else if( rand <= 60 ) {
        document.getElementById("text003").textContent = "雪でできた男";
        var ele = Math.floor( Math.random() * tink.le * 10 ) + tink.le*3;
        var ehp = Math.floor( Math.random() * stage * 100 ) + stage * 50;
        var eat = Math.floor( Math.random() * stage * 10 ) + stage * 1;
        var ede = Math.floor( Math.random() * stage * 6 ) + stage * 1;
        var emo = Math.floor( Math.random() * stage * 1200 ) + stage * 100;
        var eex = Math.floor( Math.random() * stage * 200 ) + stage * 100;
        var enemy = new Chara("雪でできた男",ele,ehp,eat,ede,emo,eex);
      }
      else if( rand <= 65 ) {
        document.getElementById("text003").textContent = "夏場のサンタ";
        var ele = Math.floor( Math.random() * tink.le * 3 ) + tink.le*1;
        var ehp = Math.floor( Math.random() * stage * 100 ) + stage * 30;
        var eat = Math.floor( Math.random() * stage * 10 ) + stage * 1;
        var ede = Math.floor( Math.random() * stage * 5 ) + stage * 1;
        var emo = Math.floor( Math.random() * stage * 2000 ) + stage * 1000;
        var eex = Math.floor( Math.random() * stage * 100 ) + stage * 10;
        var enemy = new Chara("夏場のサンタ",ele,ehp,eat,ede,emo,eex);
      }
      else if( rand <= 77 ) {
        document.getElementById("text003").textContent = "欲張りガール";
        var ele = Math.floor( Math.random() * tink.le * 3 ) + tink.le*1;
        var ehp = Math.floor( Math.random() * stage * 40 ) + stage * 20;
        var eat = Math.floor( Math.random() * stage * 20 ) + stage * 5;
        var ede = Math.floor( Math.random() * stage * 5 ) + stage * 1;
        var emo = Math.floor( Math.random() * stage * 800 ) + stage * 10;
        var eex = Math.floor( Math.random() * stage * 80 ) + stage * 10;
        var enemy = new Chara("欲張りガール",ele,ehp,eat,ede,emo,eex);
      }
      else if( rand <= 85 ) {
        document.getElementById("text003").textContent = "何でも屋";
        var ele = Math.floor( Math.random() * tink.le * 3 ) + tink.le*1;
        var ehp = Math.floor( Math.random() * stage * 60 ) + stage * 10;
        var eat = Math.floor( Math.random() * stage * 30 ) + stage * 10;
        var ede = Math.floor( Math.random() * stage * 8 ) + stage * 1;
        var emo = Math.floor( Math.random() * stage * 1500 ) + stage * 800;
        var eex = Math.floor( Math.random() * stage * 100 ) + stage * 80;
        var enemy = new Chara("何でも屋",ele,ehp,eat,ede,emo,eex);
      }
      else if( rand <= 90 ) {
        document.getElementById("text003").textContent = "夢見る悪魔";
        var ele = Math.floor( Math.random() * tink.le * 20 ) + 3;
        var ehp = Math.floor( Math.random() * stage * 50 ) + stage * 5;
        var eat = Math.floor( Math.random() * stage * 30 ) + stage * 20;
        var ede = Math.floor( Math.random() * stage * 6 ) + stage * 2;
        var emo = Math.floor( Math.random() * stage * 1200 ) + stage * 100;
        var eex = Math.floor( Math.random() * stage * 400 ) + stage * 80;
        var enemy = new Chara("夢見る悪魔",ele,ehp,eat,ede,emo,eex);
      }
      else if( rand <= 92 ) {
        document.getElementById("text003").textContent = "今世紀最強の騎士";
        var ele = Math.floor( Math.random() * tink.le * 120 ) + tink.le*80;
        var ehp = Math.floor( Math.random() * stage * 1000 ) + stage * 1;
        var eat = Math.floor( Math.random() * stage * 100 ) + stage * 1;
        var ede = Math.floor( Math.random() * stage * 50 ) + stage * 1;
        var emo = Math.floor( Math.random() * stage * 3000 ) + stage * 1;
        var eex = Math.floor( Math.random() * stage * 1000 ) + stage * 1;
        var enemy = new Chara("夢見る悪魔",ele,ehp,eat,ede,emo,eex);
      }
      else if( rand <= 96 ) {
        document.getElementById("text003").textContent = "眠る魔女";
        var ele = Math.floor( Math.random() * tink.le * 50 ) + 10;
        var ehp = Math.floor( Math.random() * stage * 200 ) + stage * 100;
        var eat = Math.floor( Math.random() * stage * 5 ) + stage * 1;
        var ede = Math.floor( Math.random() * stage * 5 ) + stage * 1;
        var emo = Math.floor( Math.random() * stage * 1000 ) + stage * 1;
        var eex = Math.floor( Math.random() * stage * 80 ) + stage * 1;
        var enemy = new Chara("夢見る悪魔",ele,ehp,eat,ede,emo,eex);
      }
      else {
        document.getElementById("text003").textContent = "ワカメマン";
        var ele = Math.floor( Math.random() * tink.le * 2 ) + 1;
        var ehp = Math.floor( Math.random() * stage * 100 ) + stage * 10;
        var eat = Math.floor( Math.random() * stage * 8 ) + stage * 2;
        var ede = Math.floor( Math.random() * stage * 5 ) + stage * 2;
        var emo = Math.floor( Math.random() * stage * 500 ) + stage * 50;
        var eex = Math.floor( Math.random() * stage * 50 ) + stage * 1;
        var enemy = new Chara("ワカメマン",ele,ehp,eat,ede,emo,eex);
      }
      /* 戦闘 */
      document.getElementById("text003").textContent = enemy.na+" Lv."+enemy.le+"が現れた！！";
      var flag_ba = 0;
      var dame1 = 0;
      var dame2 = 0;
      var dameT = 0;
      var dameE = 0;
      var count = 0;
      while( count <= 10000 ) {
        if( flag_ba == 0 ) {
          dame1 = tink.at - Math.floor(enemy.de/2);
          if( dame1 <= 0 ) dame1 = 1;
          dameT += dame1;
          enemy.hp -= dame1;
          flag_ba = 1;
        }
        else if( flag_ba == 1 ) {
          dame2 = enemy.at - Math.floor(tink.de/2);
          if( dame2 <= 0 ) dame2 = 1;
          dameE += dame2;
          tink.hp -= dame2;
          flag_ba = 1;
        }
        if( tink.hp <= 0 ) {
          document.getElementById("text004").textContent = "合計"+dameT+"のダメージを与えた\n"+"合計"+dameE+"のダメージを受けた\n"+tink.na+"は負けました。。。\nまた、はじめから。。。";
          chara_init();
          flag = 0;
          break;
        }
        else if( enemy.hp <= 0 ) {
          document.getElementById("text004").textContent = "合計"+dameT+"のダメージを与えた\n"+"合計"+dameE+"のダメージを受けた\n"+tink.na+"は勝ちました！！\n"+enemy.mo+"円を手に入れました！！";
          tink.mo += enemy.mo;
          tink.ex += enemy.ex;
          break;
        }
        count += 1;
      }
    }//battle

    function shop(flag_s) {
      if( flag_s == 1 || flag_s == 3 ) {
        if( tink.mo >= cost ) {
          var up = stage * 20;
          if( flag_s == 1 ) {
            document.getElementById("text003").textContent = "剣を手に入れた！！";
            document.getElementById("text004").textContent = up+"攻撃力が上がった！！";
            tink.at += up;
          } else if( flag_s == 3 ) {
            document.getElementById("text003").textContent = "盾を手に入れた！！";
            document.getElementById("text004").textContent = up+"防御力が上がった！！";
            tink.de += up;
          }
          tink.mo -= cost;
        }
        else {
          document.getElementById("text003").textContent = "お金が足りない！！";
          document.getElementById("text004").textContent = cost+"円が必要だよ";
        }
      }
      else if( flag_s == 2 || flag_s == 4 ) {
        var cost5 = cost * 5;
        if( tink.mo >= cost5 ) {
          var up = stage * 30 * 5;
          if( flag_s == 1 ) {
            document.getElementById("text003").textContent = "剣を５本手に入れた！！";
            document.getElementById("text004").textContent = up+"攻撃力が上がった！！";
            tink.at += up;
          } else if( flag_s == 3 ) {
            document.getElementById("text003").textContent = "盾を５個手に入れた！！";
            document.getElementById("text004").textContent = up+"防御力が上がった！！";
            tink.de += up;
          }
          tink.mo -= cost5;
        }
        else {
          document.getElementById("text003").textContent = "お金が足りない！！";
          document.getElementById("text004").textContent = cost5+"円が必要だよ";
        }
      }
    }//shop

    function inn() {
      if( tink.mo >= cost ) {
        var hpup = stage * 100;
        document.getElementById("text003").textContent = "宿屋で体を休めた";
        document.getElementById("text004").textContent = hpup+"体力が回復した！！";
        tink.hp += hpup;
        tink.mo -= cost;
      }
      else {
        var inn_money = cost;
        document.getElementById("text003").textContent = "お金が足りない！！";
        document.getElementById("text004").textContent = inn_money+"円が必要だよ";
      }
    }//inn

    function stage_director() {
      switch(stage) {
        case 1:
          document.getElementById("text002").textContent = "最初の街"+"---stage:"+stage;
          break;
        case 2:
          document.getElementById("text002").textContent = "湖上の村"+"---stage:"+stage;
          break;
        case 3:
          document.getElementById("text002").textContent = "活気溢れる街"+"---stage:"+stage;
          break;
        case 4:
          document.getElementById("text002").textContent = "豪雪の国"+"---stage:"+stage;
          break;
        case 5:
          document.getElementById("text002").textContent = "地下深くの露店街"+"---stage:"+stage;
          break;
        case 6:
          document.getElementById("text002").textContent = "岩石王国"+"---stage:"+stage;
          break;
        case 7:
          document.getElementById("text002").textContent = "カジノ街"+"---stage:"+stage;
          break;
        case 8:
          document.getElementById("text002").textContent = "山の上の集落"+"---stage:"+stage;
          break;
        case 9:
          document.getElementById("text002").textContent = "空の上の城"+"---stage:"+stage;
          break;
        case 10:
          document.getElementById("text002").textContent = "魔王城"+"---stage:"+stage;
          break;
        default:
          break;
      }
    }//stage

    function level_up() {
      while( true ) {
        if( tink.ex >= exe_point + 30 ) {
          tink.le += 1;
          exe_point += tink.le * 30;
          tink.hp += tink.le * 10;
          tink.ap += tink.le * 5;
          tink.de += tink.le;
          document.getElementById("text005").textContent = "レベルが上がった！！ "+tink.le+"レベルになった！！";
        }
        else {
          break;
        }
      }
    }

    function casino( flag ) {
      if( flag == 1 ) {
        sumT += Math.floor( Math.random() * 10 ) + 1;
      }
      else if( flag == 2 ) {
        var sumE = 0;
        while ( true ) {
          sumE += Math.floor( Math.random() * 10 ) + 1;
          if( sumE >= 16 ) break;
        }
        if( sumT > 21 ) {
          document.getElementById("text004").textContent = "自分合計:"+sumT+"相手合計:"+sumE+"\n負けました。。。　お金が減った。。。";
          if( tink.mo <=  300 ) tink.mo = 2;
          tink.mo /= 2;
          flag_mode = 0;
        }
        else if( sumE > 21 ) {
          document.getElementById("text004").textContent = "自分合計:"+sumT+"相手合計:"+sumE+"\n勝ちました！！　お金が２倍！！";
          tink.mo *= 2;
          flag_mode = 0;
        }
        else if( sumE >= sumT ) {
          document.getElementById("text004").textContent = "自分合計:"+sumT+"相手合計:"+sumE+"\n負けました。。。　お金が減った。。。";
          if( tink.mo <= 300 ) tink.mo = 2;
          tink.mo /= 2;
          flag_mode = 0;
        } else {
          document.getElementById("text004").textContent = "自分合計:"+sumT+"相手合計:"+sumE+"\n勝ちました！！　お金が２倍！！";
          tink.mo *= 2;
          flag_mode = 0;
        }
      }
    }//casino
}());
