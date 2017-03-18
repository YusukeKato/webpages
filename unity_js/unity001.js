(function () {
    'use strict';
    document.getElementById("text001").textContent ='\
      ========================================\n\
      公式のチュートリアルやドキュメントをみたほうが良い\n\
      また、Unityをやっている人はたくさんいるから、\n\
      情報はインターネットにたくさんあふれている。\n\
      ========================================\n\
      version : 5.5\n\
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
      ========================================\n\
      void Start () {\n\
        /* 一番最初に一度だけ呼ばれる */\n\
      }\n\
      void Update () {\n\
        /* ゲーム中、ずっとループ */\n\
      }\n\
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
       ';
}());
