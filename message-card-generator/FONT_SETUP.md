# 貂明朝テキストフォントの設定方法

## 📝 現在の設定

メッセージテキストのフォントは「貂明朝テキスト」に設定されています。

```css
font-family: "tsukushi-a-round-gothic", "貂明朝テキスト", "Yu Mincho", ...
```

## 🔧 Adobe Fontsを使用する方法（推奨）

貂明朝テキストはAdobe Fontsで提供されているフォントです。

### 手順

1. **Adobe Fonts にアクセス**
   - https://fonts.adobe.com/ にアクセス
   - Adobeアカウントでログイン（Creative Cloudサブスクリプションが必要）

2. **貂明朝テキストを検索**
   - 検索バーで「貂明朝」または「Tsukushi A Round Gothic」を検索
   - フォントをクリック

3. **Webプロジェクトに追加**
   - 右上の「Add to Web Project」をクリック
   - 新しいプロジェクトを作成（名前: message-card-generator など）
   - プロジェクトIDが生成されます（例: abc1def）

4. **index.htmlを更新**
   - `index.html` を開く
   - `<head>` 内の以下の行を探す：
   ```html
   <link rel="stylesheet" href="https://use.typekit.net/dkx1jfo.css">
   ```
   - `dkx1jfo` を自分のプロジェクトIDに変更：
   ```html
   <link rel="stylesheet" href="https://use.typekit.net/YOUR_PROJECT_ID.css">
   ```

5. **保存して確認**
   - ファイルを保存
   - ブラウザで開いて、フォントが適用されているか確認

---

## 💡 代替案：システムフォントを使用

Adobe Fontsが使えない場合は、システムにインストールされたフォントを使用できます。

### Macの場合

1. Font Bookアプリで「貂明朝テキスト」がインストールされているか確認
2. インストールされていれば、自動的に適用されます
3. インストールされていない場合は、Adobe Fontsまたは別のソースから入手

### Windowsの場合

1. フォント設定で「貂明朝テキスト」がインストールされているか確認
2. インストールされていれば、自動的に適用されます

### フォールバック

「貂明朝テキスト」が利用できない場合、以下のフォントが順番に使用されます：

1. 游明朝体 (Yu Mincho) - Windows/Mac標準
2. ヒラギノ明朝 (Hiragino Mincho) - Mac標準
3. MS P明朝 (MS PMincho) - Windows標準
4. serif - ブラウザのデフォルト明朝体

---

## 🌐 Google Fontsの代替フォント

Adobe Fontsが使えない場合、無料で使える類似フォントもあります。

### Noto Serif JP（推奨）

1. **index.htmlを更新**
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>メッセージカード生成システム</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
```

2. **css/style.cssを更新**
```css
#cardMessage {
    font-family: "Noto Serif JP", "Yu Mincho", "YuMincho", serif;
    /* 他のスタイルは同じ */
}
```

---

## ⚙️ フォントウェイトの調整

フォントの太さを調整したい場合：

**css/style.css** の `#cardMessage` 内で：
```css
font-weight: 400;  /* 細め（通常） */
font-weight: 500;  /* やや太め（現在の設定） */
font-weight: 600;  /* 太め */
```

---

## 🔍 確認方法

1. ブラウザで index.html を開く
2. 右クリック → 「検証」(Inspect)
3. メッセージテキスト部分を選択
4. 「Computed」タブで「font-family」を確認
5. 実際に適用されているフォント名が表示されます

---

## 📞 サポート

フォント設定でお困りの場合は、以下をお知らせください：
- 使用しているOS（Mac/Windows）
- Adobe Fontsアカウントの有無
- 希望するフォントの見た目（他の明朝体でも可か）
