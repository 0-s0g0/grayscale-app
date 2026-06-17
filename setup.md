---
title: "【Windows完全版】VSCodeインストールからPythonアプリを動かすまで全部やる"
emoji: "🛠️"
type: "tech"
topics: ["windows", "vscode", "git", "python", "初心者"]
published: false
---

# はじめに

この記事は「プログラミングやってみたいけど、何から始めればいいかわからない」というWindows初心者向けに書きました。

**この記事を読み終わると、こんなことができるようになります：**

- VS Code（コードエディタ）をインストールして使いこなせる
- ターミナル（黒い画面）でコマンドを打てる
- GitHubにリポジトリを作ってコードを管理できる
- Pythonのアプリを自分のPCで動かせる
- 画像をグレースケールに変換するWebアプリが完成する

順番通りにやれば必ずできます。詰まったらコメントで聞いてください！

---

# 目次

1. VS Code をインストールする
2. VS Code の初期設定と便利な拡張機能
3. Git for Windows をインストールする
4. Python をインストールする
5. GitHubアカウントを作る
6. Git の初期設定をする
7. GitHubにリポジトリを作る
8. プロジェクトのファイルを作る
9. requirements.txt を作る（OpenCV等のインストール）
10. GitHubにコードをpushする
11. リポジトリを clone して動かす
12. よくあるエラーと対処法

---

# 1. VS Code をインストールする

VS Code（Visual Studio Code）は、Microsoft が作った無料のコードエディタです。世界中のエンジニアが使っています。

## インストール手順

**① 公式サイトにアクセスする**

👉 https://code.visualstudio.com/

**② ダウンロードボタンをクリック**

青い「Download for Windows」ボタンをクリックします。

**③ ダウンロードしたファイルを実行する**

ダウンロードフォルダに `VSCodeSetup-x64-x.xx.x.exe` というファイルができるので、ダブルクリックして実行します。

**④ インストーラーの設定（重要！）**

インストール中に「追加タスクの選択」という画面が出ます。以下の項目に**必ずチェックを入れてください**：

```
✅ エクスプローラーのファイル コンテキスト メニューに[Codeで開く]アクションを追加する
✅ エクスプローラーのディレクトリ コンテキスト メニューに[Codeで開く]アクションを追加する
✅ サポートされているファイルの種類のエディターとして、Codeを登録する
✅ PATHへの追加（再起動後に使用可能）   ← これが特に重要！
```

**⑤ インストール完了**

「完了」をクリックしたら VS Code が起動します。

---

# 2. VS Code の初期設定と便利な拡張機能

## 日本語化する（オプション）

VS Code はデフォルトが英語ですが、日本語化できます。

1. `Ctrl + Shift + X` で拡張機能パネルを開く
2. 検索欄に `Japanese` と入力
3. `Japanese Language Pack for Visual Studio Code` をインストール
4. 右下に「Change Language and Restart」が出たらクリック

## 必須の拡張機能をインストールする

`Ctrl + Shift + X` で拡張機能パネルを開き、それぞれ検索してインストールします。

| 拡張機能名 | 説明 |
|-----------|------|
| **Python** | Pythonのコードを書くために必須 |
| **GitLens** | Gitの履歴や変更を見やすくする |
| **Prettier** | コードを自動で綺麗に整形する |
| **ESLint** | JavaScriptのエラーを事前に検出する |
| **indent-rainbow** | インデントを色分けして見やすくする |

## ターミナルの開き方

VS Code にはターミナル（黒い画面）が内蔵されています。

- メニューの「Terminal」→「New Terminal」をクリック
- または `Ctrl + `` （バッククォート）を押す

:::message
**バッククォート（`` ` ``）はどこにある？**
キーボードの左上、`Esc` キーの下にあります。`Shift` なしで押してください。
:::

ターミナルが画面下部に開いたら成功です！

---

# 3. Git for Windows をインストールする

Git とは、コードの変更履歴を管理するツールです。「いつ・誰が・何を変えたか」を記録できます。

## インストール手順

**① 公式サイトにアクセスする**

👉 https://gitforwindows.org/

**② ダウンロードしてインストール**

「Download」ボタンをクリックして、ダウンロードしたファイルを実行します。

**③ インストール中の設定（重要な箇所だけ説明）**

ほとんどの設定はデフォルトのままで OK です。以下の画面だけ注意してください：

**「Choosing the default editor used by Git」の画面：**
`Use Visual Studio Code as Git's default editor` を選択します。

**「Adjusting the name of the initial branch...」の画面：**
`Override the default branch name for new repositories` を選択し、`main` と入力します。

**「Adjusting your PATH environment」の画面：**
`Git from the command line and also from 3rd-party software` を選択します（デフォルト）。

**④ インストール完了を確認する**

VS Code のターミナルを開いて以下を入力してください：

```bash
git --version
```

以下のように表示されれば成功です！

```
git version 2.xx.x.windows.x
```

:::message alert
**「git は認識されていません」と出た場合**
VS Code を一度閉じて、もう一度開いてから試してみてください。それでもダメな場合はPCを再起動してください。
:::

---

# 4. Python をインストールする

Python は、このアプリのバックエンド（サーバー側）で使うプログラミング言語です。

## インストール手順

**① 公式サイトにアクセスする**

👉 https://www.python.org/downloads/

**② 最新版をダウンロード**

`Download Python 3.x.x` という黄色いボタンをクリックします。

**③ インストーラーを実行する（超重要！）**

インストーラーを起動すると最初の画面に **`Add python.exe to PATH`** というチェックボックスがあります。

```
✅ Add python.exe to PATH   ← 必ずチェック！！！
```

**これを忘れると後で必ずエラーになります。** チェックを入れたら「Install Now」をクリックします。

**④ インストール完了を確認する**

VS Code のターミナルで確認します：

```bash
python --version
```

```
Python 3.x.x
```

と表示されれば成功です！

:::message alert
**「python は認識されていません」と出た場合**
`Add python.exe to PATH` のチェックを忘れた可能性があります。
Python をアンインストールして、チェックを入れてもう一度インストールし直してください。
または `py --version` を試してみてください。
:::

---

# 5. GitHubアカウントを作る

GitHub は、コードをオンラインで保存・共有できるサービスです。

## アカウント作成手順

**① GitHub にアクセスする**

👉 https://github.com/

**② Sign up をクリック**

右上の「Sign up」ボタンをクリックします。

**③ 必要情報を入力する**

| 項目 | 内容 |
|------|------|
| Username | 英数字で好きな名前（後から変更可） |
| Email address | 使っているメールアドレス |
| Password | 安全なパスワード |

**④ メール認証を完了する**

登録したメールアドレスに認証コードが届くので、入力して認証を完了させます。

**⑤ プランの選択**

`Continue for free`（無料プラン）を選択します。

---

# 6. Git の初期設定をする

Git を使う前に、「誰がコミットしたか」を記録するために名前とメールアドレスを設定します。

VS Code のターミナルを開いて、以下のコマンドを入力してください。

```bash
git config --global user.name "山田 太郎"
git config --global user.email "yamada@example.com"
```

:::message
`"山田 太郎"` と `"yamada@example.com"` は自分の名前とGitHubに登録したメールアドレスに変えてください。
:::

設定できたか確認します：

```bash
git config --list
```

```
user.name=山田 太郎
user.email=yamada@example.com
```

と表示されれば OK です！

---

# 7. GitHubにリポジトリを作る

リポジトリとは、プロジェクトのコードをまとめて管理する「箱」のようなものです。

## 手順

**① GitHub にログインする**

👉 https://github.com/

**② 新しいリポジトリを作る**

右上の `+` ボタン → `New repository` をクリックします。

**③ リポジトリの設定をする**

| 項目 | 入力内容 |
|------|---------|
| Repository name | `grayscale-app` |
| Description | `画像をグレースケールに変換するWebアプリ`（任意） |
| Public / Private | `Public`（公開）または `Private`（非公開）好きな方 |
| Add a README file | ✅ チェックを入れる |

**④ `Create repository` をクリック**

リポジトリのページが開いたら作成完了です！

---

# 8. プロジェクトのファイルを作る

まずリポジトリを自分のPCにcloneして、そこにファイルを作っていきます。

## リポジトリをcloneする

**① VS Code のターミナルを開く**

`Ctrl + `` でターミナルを開きます。

**② デスクトップに移動する**

```bash
cd C:/Users/ユーザー名/Desktop
```

:::message
`ユーザー名` の部分は自分の Windows のユーザー名に変えてください。
わからない場合は `cd ~` でホームディレクトリに移動できます。
:::

**③ clone する**

GitHubのリポジトリページで緑の `Code` ボタンをクリックして、URLをコピーします。

```bash
git clone https://github.com/あなたのユーザー名/grayscale-app
```

**④ フォルダに入る**

```bash
cd grayscale-app
```

## ディレクトリ構成を作る

今回作るアプリのフォルダ構成はこうなります：

```
grayscale-app/
├── backend/
│   ├── main.py            ← FastAPIのサーバー（APIの受け口）
│   ├── convert.py         ← グレースケール変換処理
│   └── requirements.txt   ← 必要なパッケージ一覧
├── frontend/
│   ├── index.html         ← ブラウザで開く画面
│   ├── style.css          ← 見た目のスタイル
│   └── script.js          ← 画面の動作・API呼び出し処理
└── README.md              ← GitHubが自動で作ってくれた
```

フォルダを作ります：

```bash
mkdir backend
mkdir frontend
```

## backend/main.py を作る

VS Code でファイルを作ります。左のエクスプローラーから `backend` フォルダを右クリック→「新しいファイル」→ `main.py` と入力します。

以下のコードをコピー＆ペーストしてください：

```python
# グレースケール変換APIサーバー
# FastAPIを使って画像を受け取り、グレースケールに変換して返す

import io
import numpy as np
import cv2
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response

from convert import convert

# FastAPIアプリを作成
app = FastAPI()

# CORS設定（開発用に全オリジンからのアクセスを許可）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # すべてのオリジンを許可
    allow_methods=["*"],      # すべてのHTTPメソッドを許可
    allow_headers=["*"],      # すべてのヘッダーを許可
)


@app.post("/api/grayscale")
async def grayscale(file: UploadFile = File(...)):
    """
    画像ファイルを受け取り、グレースケールに変換して返すエンドポイント。
    """

    # アップロードされたファイルのバイトデータを読み込む
    image_bytes = await file.read()

    # バイトデータをnumpy配列に変換（OpenCVで扱えるようにするため）
    np_array = np.frombuffer(image_bytes, dtype=np.uint8)

    # numpy配列をOpenCVの画像形式（BGR）にデコード
    img = cv2.imdecode(np_array, cv2.IMREAD_COLOR)

    # 画像の読み込みに失敗した場合はエラーを返す
    if img is None:
        raise HTTPException(status_code=400, detail="画像の読み込みに失敗しました。対応形式（JPEG, PNG等）か確認してください。")

    # BGR形式の画像をグレースケールに変換
    gray_img = convert(img)

    # グレースケール画像をPNGのバイトデータにエンコード
    # cv2.imencode は (成功フラグ, バイト列) のタプルを返す
    success, encoded_image = cv2.imencode(".png", gray_img)

    if not success:
        raise HTTPException(status_code=500, detail="画像のエンコードに失敗しました。")

    # エンコードされた画像をbytesに変換
    png_bytes = encoded_image.tobytes()

    # PNG画像をレスポンスとして返す
    return Response(content=png_bytes, media_type="image/png")
```

`Ctrl + S` で保存します。

## backend/convert.py を作る

`backend` フォルダに `convert.py` を作ります。画像変換のロジックだけをここに切り出すことで、`main.py` は「APIの受け口」に専念できます。

```python
# 画像の変換処理だけをまとめたモジュール
# APIの受け口（main.py）から呼び出して使う

import numpy as np
import cv2


def convert(image: np.ndarray) -> np.ndarray:
    """
    入力画像（BGR形式のnumpy配列）を受け取り、
    グレースケールに変換したnumpy配列を返す。
    """
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
```

`Ctrl + S` で保存します。

## frontend/index.html を作る

同じように `frontend` フォルダに `index.html` を作り、以下をコピー＆ペーストします：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>グレースケール変換アプリ</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <h1>グレースケール変換アプリ</h1>

  <!-- ファイル選択と変換ボタン -->
  <div class="controls">
    <input type="file" id="file-input" accept="image/*" />
    <button id="convert-btn" disabled>グレースケールに変換</button>
  </div>

  <!-- エラーメッセージ表示エリア -->
  <p id="error-message"></p>

  <!-- 変換前・変換後の画像を横並びで表示するエリア -->
  <div class="images-container">

    <!-- 元画像カード -->
    <div class="image-card" id="original-card">
      <h2>元画像</h2>
      <img id="original-img" src="" alt="元画像" />
    </div>

    <!-- 変換後画像カード -->
    <div class="image-card" id="result-card">
      <h2>グレースケール変換後</h2>
      <img id="result-img" src="" alt="グレースケール画像" />
    </div>

  </div>

  <script src="script.js"></script>

</body>
</html>
```

`Ctrl + S` で保存します。

## frontend/style.css を作る

`frontend` フォルダに `style.css` を作り、以下をコピー＆ペーストします：

```css
/* ページ全体のスタイル */
body {
  font-family: sans-serif;
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
  background-color: #f5f5f5;
  color: #333;
}

h1 {
  text-align: center;
  margin-bottom: 24px;
}

/* ファイル選択・ボタン周りのスタイル */
.controls {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

input[type="file"] {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
}

button {
  padding: 8px 24px;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #357abd;
}

/* エラーメッセージのスタイル */
#error-message {
  color: red;
  margin-bottom: 16px;
  display: none; /* 初期状態では非表示 */
}

/* 画像を横並びに表示するコンテナ */
.images-container {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

/* 各画像のカード */
.image-card {
  flex: 1;
  min-width: 280px;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: none; /* 初期状態では非表示 */
}

.image-card h2 {
  font-size: 16px;
  margin-bottom: 12px;
  color: #555;
}

/* 表示する画像のスタイル */
.image-card img {
  max-width: 100%;
  border-radius: 4px;
  border: 1px solid #ddd;
}
```

`Ctrl + S` で保存します。

## frontend/script.js を作る

`frontend` フォルダに `script.js` を作り、以下をコピー＆ペーストします：

```javascript
// -------------------------------------------------------
// 各HTML要素を取得して変数に保存する
// -------------------------------------------------------
const fileInput      = document.getElementById("file-input");
const convertBtn     = document.getElementById("convert-btn");
const errorMessage   = document.getElementById("error-message");
const originalCard   = document.getElementById("original-card");
const originalImg    = document.getElementById("original-img");
const resultCard     = document.getElementById("result-card");
const resultImg      = document.getElementById("result-img");

// -------------------------------------------------------
// ファイルが選択されたとき
// -------------------------------------------------------
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];

  if (file) {
    // ボタンを有効化する
    convertBtn.disabled = false;

    // エラーメッセージを非表示にする
    errorMessage.style.display = "none";

    // 元画像をプレビュー表示する
    // FileReader を使ってローカルファイルをDataURLとして読み込む
    const reader = new FileReader();
    reader.onload = (e) => {
      originalImg.src = e.target.result; // 読み込んだ画像をimgタグにセット
      originalCard.style.display = "block"; // カードを表示する
    };
    reader.readAsDataURL(file);

    // 変換後の画像カードを一旦隠す（前の変換結果をリセット）
    resultCard.style.display = "none";
  } else {
    // ファイルが選択されていないときはボタンを無効化
    convertBtn.disabled = true;
  }
});

// -------------------------------------------------------
// 「グレースケールに変換」ボタンが押されたとき
// -------------------------------------------------------
convertBtn.addEventListener("click", async () => {
  const file = fileInput.files[0];

  // ファイルが選択されていない場合は何もしない
  if (!file) return;

  // ボタンを一時的に無効化して、連打を防ぐ
  convertBtn.disabled = true;
  convertBtn.textContent = "変換中...";

  // エラーメッセージを非表示にする
  errorMessage.style.display = "none";

  try {
    // FormData を使ってファイルをマルチパート形式でまとめる
    const formData = new FormData();
    formData.append("file", file); // "file" はバックエンドの引数名と一致させる

    // バックエンドのAPIにPOSTリクエストを送る
    const response = await fetch("http://localhost:8000/api/grayscale", {
      method: "POST",
      body: formData,
    });

    // レスポンスがエラーの場合は例外を投げる
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "変換に失敗しました。");
    }

    // レスポンスのバイナリデータ（PNG画像）を Blob として受け取る
    const blob = await response.blob();

    // Blob を画像URLに変換して <img> タグに表示する
    const imageUrl = URL.createObjectURL(blob);
    resultImg.src = imageUrl;
    resultCard.style.display = "block"; // 結果カードを表示する

  } catch (error) {
    // エラーが発生した場合はメッセージを表示する
    errorMessage.textContent = "エラー: " + error.message;
    errorMessage.style.display = "block";
  } finally {
    // 処理が終わったらボタンを元に戻す
    convertBtn.disabled = false;
    convertBtn.textContent = "グレースケールに変換";
  }
});
```

`Ctrl + S` で保存します。

:::message
**なぜファイルを分けるの？**
1ファイルに全部書いても動きますが、「HTML（構造）」「CSS（見た目）」「JavaScript（動き）」を分けることで、後から見た目だけ変えたい・動きだけ直したいときに該当ファイルだけ触ればよくなり、見通しが良くなります。
:::

---

# 9. requirements.txt を作る（OpenCV等のインストール）

`backend` フォルダに `requirements.txt` を作り、以下を記入します：

```
fastapi
uvicorn
opencv-python
python-multipart
numpy
```

## 各パッケージの説明

| パッケージ | 役割 |
|-----------|------|
| **fastapi** | PythonのWebフレームワーク。APIを簡単に作れる |
| **uvicorn** | FastAPIを動かすWebサーバー |
| **opencv-python** | 画像処理ライブラリ。グレースケール変換に使う |
| **python-multipart** | ファイルアップロードを受け取るために必要 |
| **numpy** | 数値計算ライブラリ。OpenCVが内部で使う |

## 仮想環境を作ってインストールする

```bash
# backendフォルダに移動
cd backend

# 仮想環境を作成する
python -m venv venv

# 仮想環境を有効化する（Windowsの場合）
venv\Scripts\activate
```

成功すると先頭に `(venv)` が付きます：

```
(venv) C:\Users\yamada\Desktop\grayscale-app\backend>
```

:::message alert
**「このスクリプトの実行はシステムで無効になっています」と出た場合**

PowerShell のセキュリティ設定が原因です。以下のコマンドで解除できます：

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

`Y` を入力して Enter を押してから、もう一度 `venv\Scripts\activate` を試してください。
:::

パッケージをインストールします：

```bash
pip install -r requirements.txt
```

:::message
**OpenCV のインストールには少し時間がかかります（1〜3分）**
「Successfully installed ...」と表示されれば完了です。
:::

インストールできたか確認します：

```bash
pip list
```

`opencv-python`、`fastapi`、`uvicorn` などが一覧に出ていれば OK です！

---

# 10. GitHubにコードをpushする

作ったファイルをGitHubに上げます。

## .gitignore を作る

まず `venv/` フォルダや Python のキャッシュをGitに含めないよう `.gitignore` を作ります。
`grayscale-app/` の直下（一番上の階層）に `.gitignore` を作り、以下を記入します：

```
# Python 仮想環境（重いのでGitには入れない）
venv/
.venv/

# Python キャッシュ
__pycache__/
*.pyc
*.pyo

# OS固有ファイル
.DS_Store
Thumbs.db
```

## add → commit → push する

ターミナルで `grayscale-app/` の直下に戻ります：

```bash
cd ..
```

現在地を確認：

```bash
pwd
```

`grayscale-app` にいることを確認したら、以下を順番に実行します：

```bash
# ① 変更されたファイルを確認する
git status
```

```
Untracked files:
  backend/main.py
  backend/requirements.txt
  frontend/index.html
  .gitignore
```

```bash
# ② 全ファイルをステージングに追加する
git add .

# ③ コミットする（変更を記録する）
git commit -m "グレースケール変換アプリを追加"

# ④ GitHubにプッシュする
git push origin main
```

```
To https://github.com/yourname/grayscale-app.git
   abc1234..def5678  main -> main
```

このように表示されればプッシュ成功です！

GitHubのリポジトリページをブラウザで開いて、ファイルが追加されているか確認してみましょう。

---

# 11. リポジトリを clone して動かす

ここからは「他の人がこのリポジトリをcloneして動かす」手順です。自分でも別のフォルダで試してみましょう。

## clone する

```bash
# デスクトップなど好きな場所に移動
cd C:/Users/ユーザー名/Desktop

# clone する
git clone https://github.com/あなたのユーザー名/grayscale-app

# フォルダに入る
cd grayscale-app

# 中身を確認する
ls
```

```
backend/  frontend/  .gitignore  README.md
```

## バックエンドを起動する

```bash
# backendフォルダに移動
cd backend

# 仮想環境を作成
python -m venv venv

# 仮想環境を有効化（Windows）
venv\Scripts\activate

# パッケージをインストール（OpenCVなど）
pip install -r requirements.txt

# サーバーを起動する
uvicorn main:app --reload
```

以下のように表示されれば起動成功です！

```
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process using StatReload
```

:::message
**ターミナルはこのまま開いておく！**
サーバーが動いている間はターミナルを閉じないでください。`Ctrl + C` で止まります。
:::

## フロントエンドを開く

ターミナルはそのままにして、エクスプローラーで `frontend/index.html` を右クリック → 「プログラムから開く」→ 好きなブラウザで開きます。

## 動作確認

1. 「ファイルを選択」ボタンをクリックして画像を選ぶ
2. 「グレースケールに変換する」ボタンをクリック
3. 元の画像と変換後の画像が横並びで表示される

🎉 完成です！

---

# 12. よくあるエラーと対処法

## `git` は認識されていません

**原因：** Git for Windows のインストール後にVS Codeを再起動していない

**対処：** VS Code を完全に閉じて、もう一度開く。それでもダメならPCを再起動。

---

## `fatal: detected dubious ownership in repository` と出る

**原因：** Windowsの一部のドライブ・ファイルシステムでは、フォルダの「所有者情報」が正しく記録されません。Gitはこれを「誰のものか分からない＝怪しい(dubious)」と判断し、安全のため操作を拒否します（第三者が用意したリポジトリを誤って実行してしまう攻撃を防ぐための仕組みです）。`git init` や `git clone` の直後、`git add`・`git commit`・`git push` などを実行したときにこのエラーが出ることがあります。

**対処：** エラーメッセージにそのまま表示されているコマンドを実行して、そのフォルダを「安全」だと登録します（パスは自分の環境のものに置き換えてください）。

```bash
git config --global --add safe.directory D:/dev/CrinApp/grayscale-app
```

:::message
このコマンドは「このフォルダだけは信頼する」という設定をPC全体に1回追加するだけなので、毎回実行する必要はありません。実行後にもう一度 `git add` などのコマンドをやり直せば進みます。
:::

---

## `python` は認識されていません

**原因：** インストール時に「Add python.exe to PATH」のチェックを忘れた

**対処：** まず `py --version` を試す。それでもダメならPythonをアンインストールして、チェックを入れて再インストール。

---

## `ModuleNotFoundError: No module named 'fastapi'`

**原因：** 仮想環境が有効化されていない状態でpip installした、または有効化し忘れ

**対処：** `venv\Scripts\activate` を実行して `(venv)` が付いているか確認してから `pip install -r requirements.txt` を再実行。

---

## `このスクリプトの実行はシステムで無効になっています`

**原因：** PowerShellのセキュリティポリシー

**対処：** 以下を実行：

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## 画像を送ったら `Failed to fetch` が出る

**原因：** バックエンドサーバーが起動していない

**対処：** ターミナルで `uvicorn main:app --reload` が動いているか確認する。`http://127.0.0.1:8000/docs` をブラウザで開いてみる（Swagger UIが開けば起動している）。

---

## `(venv)` が消えた・ターミナルを閉じてしまった

**原因：** ターミナルを閉じると仮想環境も無効化される

**対処：** ターミナルを開き直して `cd backend` → `venv\Scripts\activate` を再実行する。

---

## OpenCV のインストールが失敗する

**原因：** pip のバージョンが古い

**対処：** まず pip を更新してから再挑戦：

```bash
python -m pip install --upgrade pip
pip install -r requirements.txt
```

---

# おわりに

お疲れ様でした！これで環境構築からアプリ公開まで完了です。

今回やったことをまとめると：

| やったこと | 確認コマンド |
|-----------|------------|
| VS Code インストール | — |
| Git for Windows インストール | `git --version` |
| Python インストール | `python --version` |
| GitHubアカウント作成 | — |
| git config 設定 | `git config --list` |
| リポジトリ作成 & push | GitHubで確認 |
| clone して動かす | ブラウザで動作確認 |

次のステップとして、`backend/convert.py` の処理をグレースケール以外に変えてみましょう！変換ロジックがこのファイルに切り出されているので、`main.py` を触らずに画像処理の内容だけ差し替えられます。

```python
import numpy as np
import cv2


def convert(image: np.ndarray) -> np.ndarray:
    # ぼかし処理
    return cv2.GaussianBlur(image, (15, 15), 0)

    # エッジ検出にする場合はこちら
    # return cv2.Canny(image, 100, 200)

    # 二値化にする場合はこちら
    # gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    # _, binary = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)
    # return binary
```

わからないことがあればコメントで気軽に質問してください 🙌