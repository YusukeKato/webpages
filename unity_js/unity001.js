(function () {
    'use strict';
    document.getElementById("text001").textContent ='\
      ========================================\n\
      一番最初、プロジェクト作成時\n\
      スマホ向けなのか、パソコンなのか\n\
      それによって、ゲームビューの大きさを変更したり\n\
      キャンバスの大きさの整えたほうが良い\n\
      ========================================\n\
      公式のチュートリアルやドキュメントをみたほうが良い\n\
      また、Unityをやっている人はたくさんいるから、\n\
      情報はインターネットにたくさんあふれている。\n\
      ========================================\n\
      version : 5.5(4.6.2017)\n\
      5.6が出た。また、これからは[Unity2017]みたいになるらしい\n\
      言語は、C#(javascriptもある、どっちでも良い)\n\
      エディタは、mono(visual studio もある)\n\
      何かをやろうとするとき、方法はいくつかあるから\n\
      自分にとって、一番良い方法を探そう。\n\
      あと、マウスはあった方がいい\n\
      ========================================\n\
      Unity(game engine、物理計算とか)には、UI 、efect 、Asset など\n\
      いろいろあるから、一から全部作るよりも何倍も楽だし、\n\
      完成度が高くなる可能性もある。\n\
      Assetには無料、有料がある。自分で全部作るのは大変だから、\n\
      他人の力を借りよう。\n\
      ========================================\n\
      スクリプトでUIを操作するなら使う\n\
      using UnityEngine.UI;\n\
      using System; Array.Sort(引数);\n\
      ========================================\n\
      public class CLASS_NAME : MonoBehaviour\n\
      [MonoBehaviour]クラスを継承してクラスを作るということ\n\
      ========================================\n\
      void Start () {\n\
        /* 一番最初に一度だけ呼ばれる */\n\
      }\n\
      void Update () {\n\
        /* ゲーム中、ずっとループ */\n\
      }\n\
      ========================================\n\
      ＜型＞\n\
      bool    真偽値\n\
      byte    符号なし8bit\n\
      sbyte   符号付き8bit\n\
      char    文字16bit\n\
      string  文字列\n\
      decimal 10進数\n\
      double  64bit浮動小数点数\n\
      float   32bit浮動小数点数、リテラル代入時は"f"を付ける\n\
      int     符号付き32bit整数\n\
      uint    符号なし32bit整数\n\
      long    符号付き64bit整数\n\
      ulong   符号なし64bit整数\n\
      object  すべての型の元\n\
      short   符号付き16bit整数\n\
      ushort  符号なし16bit整数\n\
      配列　int[] arr = new int[10];\n\
      ========================================\n\
      ＜アクセス修飾子＞\n\
      public    どこからでも\n\
      internal  同じアセンブリ内から\n\
      protected 派生クラスから\n\
      private   そのクラス内のみ\n\
      何もつけない場合、internal（規定値）\n\
      ========================================\n\
      ＜デバック＞\n\
      Debug.Log(引数);\n\
      ========================================\n\
      ＜条件演算子＞\n\
      val = ( x > y ) ? 1 : 0;\n\
      ========================================\n\
      オブジェクトを操作するとき、\n\
      そのオブジェクトにscriptをくっつける方法と、\n\
      外部にscriptを置いて、そこから操作する方法がある。\n\
      （方法１）テキストオブジェクトにこのスクリプトをつける\n\
      this.GetComponent<Text>().text = "STRING";テキスト操作\n\
      （方法２）空のオブジェクトを作成、そこにスクリプトをつける\n\
      public GameObject OBJECT_NAME;これをかく\n\
      操作するオブジェクトを空のオブジェクトのスクリプトに指定\n\
      ========================================\n\
      ＜シーン遷移＞\n\
      using UnityEngine.SceneManagement;\n\
      SceneManager.LoadScene ("scene_name");\n\
      よくあるミスとして、シーンを登録し忘れることがある\n\
      Build Setting で、シーンを設定する\n\
      ゲームの終了 -> Application.Quit();\n\
      ========================================\n\
      ＜オブジェクトの生成と削除＞\n\
      生成 -> Instantiate (object)\n\
      削除 -> Destroy (gameObject)\n\
      生成するとき、as GameObjectとつけると、\n\
      GameObjectとして、生成できる。\n\
      (GameObject)でもよい。\n\
      自分自身の削除なら、GameObject.Destroy(gameObject);\n\
      ========================================\n\
      ＜オブジェクトの座標＞\n\
      transform.position = new Vector3 (x, y, z);\n\
      Vector3 は、x,y,zの三つ\n\
      Vector2 は、x,yの二つ\n\
      他にもあったはず\n\
      public Transform target;\n\
      target.position = vector; みたいな座標だけ操作することもできる\n\
      ========================================\n\
      ＜セーブ＞\n\
      PlayerPrefs.SetInt ( "Key-string", 値 );\n\
      値 = PlayerPrefs.GetInt ("Key-string");\n\
      SetInt、GetInt のIntは、値の型\n\
      ========================================\n\
      ＜他のファイルの変数を使う＞\n\
      ClassName.Hensuu = 1;\n\
      public で宣言する必要がある\n\
      ========================================\n\
      ＜ランダム値＞\n\
      randomVal = Random.Range( 0, 10 );\n\
      ========================================\n\
      ＜リスト＞\n\
      Add     末尾に追加\n\
      Clear   すべての要素を削除\n\
      Count　 要素数取得\n\
      Contains  リスト内にあるかどうか\n\
      Sort    ソート\n\
      Insert  要素を挿入\n\
      Remove  指定した要素削除\n\
      ----------\n\
      using System.Collections.Generic;\n\
      List<int> list = new List<int> ();\n\
      list.add(引数);\n\
      ========================================\n\
      ＜構造体＞\n\
      struct name {\n\
        /*  */\n\
      }\n\
      ========================================\n\
      ＜コンポーネント取得＞\n\
      GetComponent<名前>()\n\
      かなり使う\n\
      例）ある空のオブジェクトのコンポーネントのスクリプトの変数flagにアクセス\n\
      GameObject gameManager = GameObject.Fine("GameManager");\n\
      gameObject.GetComponent<GameManager> ().flag = true;\n\
      ========================================\n\
      ＜音＞\n\
      AudioSource 音を出力\n\
      AudioListener 音を受け取る（だいたいカメラ）\n\
      例）\n\
      AudioSource audioSource;\n\
      AudioClip music1\n\
      \n\
      audioSource = gameObject.GetComponent<AudioSource>();自分自身に付けたAudioSourceを取得\n\
      audioSource.clip = music1;\n\
      audioSource.Play();\n\
      //audioSource.Stop();\n\
      ========================================\n\
       ';
}());
