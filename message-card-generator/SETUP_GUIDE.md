# 📤 GitHubへのアップロード手順

このガイドでは、メッセージカード生成システムをGitHubにアップロードする方法を説明します。

## 前提条件

- Gitがインストールされていること
- GitHubアカウントを持っていること

## 手順

### 1. GitHubでリポジトリを作成

1. [GitHub](https://github.com) にログイン
2. 右上の「+」→「New repository」をクリック
3. 以下の情報を入力：
   - **Repository name**: `message-card-generator`
   - **Description**: `ブラウザで動作するメッセージカードPDF生成ツール`
   - **Public/Private**: お好みで選択
   - **Add a README file**: チェックを外す（既にREADME.mdがあるため）
4. 「Create repository」をクリック

### 2. ローカルでGitリポジトリを初期化

ターミナル/コマンドプロンプトで以下を実行：

```bash
# プロジェクトディレクトリに移動
cd message-card-generator

# Gitリポジトリを初期化
git init

# すべてのファイルをステージング
git add .

# 初回コミット
git commit -m "初回コミット: メッセージカード生成システム"
```

### 3. GitHubリポジトリと連携

GitHubで作成したリポジトリのURLを使用：

```bash
# リモートリポジトリを追加（URLは自分のものに置き換えてください）
git remote add origin https://github.com/yourusername/message-card-generator.git

# メインブランチ名を変更（必要に応じて）
git branch -M main

# GitHubにプッシュ
git push -u origin main
```

### 4. GitHub Pagesで公開（オプション）

ブラウザから直接使えるWebサイトとして公開できます：

1. GitHubのリポジトリページで「Settings」をクリック
2. 左サイドバーの「Pages」をクリック
3. **Source** セクションで：
   - Branch: `main`
   - Folder: `/ (root)`
4. 「Save」をクリック

数分後、以下のURLでアクセス可能になります：
```
https://yourusername.github.io/message-card-generator/
```

## 更新方法

ファイルを変更した後、以下のコマンドでGitHubに反映：

```bash
# 変更をステージング
git add .

# コミット
git commit -m "変更内容の説明"

# プッシュ
git push origin main
```

## README.mdの更新

`README.md` の以下の部分を自分の情報に更新してください：

1. **リポジトリURL**
```markdown
git clone https://github.com/yourusername/message-card-generator.git
```
↓
```markdown
git clone https://github.com/実際のユーザー名/message-card-generator.git
```

2. **バッジのURL**（LICENSEファイルへのリンク）

3. **Issues URL**（バグ報告やサポート用）

## トラブルシューティング

### 認証エラーが出る場合

GitHubへのプッシュ時に認証エラーが出る場合：

1. **Personal Access Token (PAT) を使用**
   - GitHub Settings → Developer settings → Personal access tokens
   - "Generate new token" でトークンを生成
   - トークンをパスワードとして使用

2. **SSH鍵を使用**
   ```bash
   # SSH URLに変更
   git remote set-url origin git@github.com:yourusername/message-card-generator.git
   ```

### .DS_Storeファイルが含まれてしまう場合（Mac）

```bash
# 既にコミットされている場合
git rm --cached .DS_Store
git commit -m ".DS_Storeを削除"

# 今後も無視
echo ".DS_Store" >> .gitignore
git add .gitignore
git commit -m ".gitignoreを更新"
```

## 参考リンク

- [GitHub公式ドキュメント](https://docs.github.com/ja)
- [GitHub Pages公式ガイド](https://docs.github.com/ja/pages)
- [Git基本コマンド](https://git-scm.com/docs)

---

質問がある場合は、リポジトリのIssuesで質問してください！
