// phina.js をグローバル領域に展開
phina.globalize();

// MainScene クラスを定義
phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit();
    this.backgroundColor = '#444';
    this.label = Label('Hello, phina.js!').addChildTo(this);
    this.label.x = this.gridX.center();
    this.label.y = this.gridY.center();
    this.label.fill = 'white';
  },
});

// メイン処理
phina.main(function() {
  // アプリケーション生成
  var app = GameApp({
    startLabel: 'main',
  });
  // アプリケーション実行
  app.run();
});
