# 🎁 メッセージカード生成システム

ブラウザだけで動作する、メッセージカードPDF生成ツールです。Adobe Illustratorなどの専門ソフトウェア不要で、誰でも簡単にメッセージカードを作成できます。

## ✨ 特徴

- **簡単操作**: テキストを入力するだけでメッセージカード完成
- **リアルタイムプレビュー**: 入力内容が即座に反映
- **高品質PDF出力**: 印刷に適した高解像度PDF生成
- **完全無料**: オープンソースで誰でも利用可能
- **サーバー不要**: すべてブラウザ上で動作

## 🚀 使い方

### オンラインで使用

**デモページ**: https://yanagawatsubasa.github.io/tools/message-card-generator/

### ローカルで使用

1. このリポジトリをクローンまたはダウンロード
```bash
git clone https://github.com/yanagawatsubasa/tools.git
cd tools/message-card-generator
```

2. `index.html` をブラウザで開く
   - ダブルクリックするだけでOK
   - ローカルサーバーの起動も不要

### 基本的な操作

1. **メッセージ入力**
   - 左側のテキストエリアにメッセージを入力
   - 改行も自動的に反映されます

2. **プレビュー確認**
   - 右側でリアルタイムにプレビューを確認
   - デザインの調整は不要

3. **PDF生成**
   - 「📄 PDFを生成」ボタンをクリック
   - 自動的にPDFファイルがダウンロードされます

4. **印刷**
   - ダウンロードしたPDFを開いて印刷
   - ハガキサイズ（148mm × 100mm）で出力

## 📁 ファイル構成

```
message-card-generator/
├── index.html              # メインHTMLファイル
├── css/
│   └── style.css          # スタイルシート
├── js/
│   └── app.js             # アプリケーションロジック
├── images/
│   └── message_card_blank.png  # 背景画像（装飾付き）
└── README.md              # このファイル
```

## 🎨 カスタマイズ

### フォントサイズの変更

`css/style.css` の以下の部分を編集:

```css
#cardMessage {
    font-size: 32px; /* お好みのサイズに変更 */
}
```

### テキスト位置の調整

```css
#cardMessage {
    padding: 40px 20px 80px 20px; /* 上 右 下 左 */
}
```

### 背景画像の変更

`images/message_card_blank.png` を別の画像に差し替えるだけでOK

## 🔧 技術スタック

- **HTML5**: 構造
- **CSS3**: スタイリング
- **JavaScript (ES6+)**: アプリケーションロジック
- **jsPDF**: PDF生成
- **html2canvas**: HTML要素を画像化

## 📋 動作環境

### 推奨ブラウザ
- Google Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Microsoft Edge (最新版)

### システム要件
- インターネット接続（初回のみ、外部ライブラリ読み込みのため）
- JavaScript有効化

## 🤝 コントリビューション

プルリクエストを歓迎します！大きな変更の場合は、まずIssueを開いて変更内容を議論してください。

### 開発の手順

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📝 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 🐛 バグ報告

バグを発見した場合は、[Issues](https://github.com/yanagawatsubasa/tools/issues) でお知らせください。

## 💡 今後の予定

- [ ] 複数のデザインテンプレート対応
- [ ] フォント選択機能
- [ ] カラーカスタマイズ
- [ ] 画像アップロード機能
- [ ] SNS共有機能

## 📞 サポート

質問や提案がある場合は、[Issues](https://github.com/yanagawatsubasa/tools/issues) でお気軽にお問い合わせください。

## 🙏 謝辞

このプロジェクトは以下のオープンソースライブラリを使用しています：

- [jsPDF](https://github.com/parallax/jsPDF) - PDF生成
- [html2canvas](https://github.com/niklasvh/html2canvas) - HTML→Canvas変換

---

⭐ このプロジェクトが役に立った場合は、スターをつけていただけると嬉しいです！
