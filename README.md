# グレースケール変換アプリ

画像ファイルをアップロードするとグレースケールに変換して表示するWebアプリです。バックエンドはFastAPI + OpenCV、フロントエンドは素のHTML/CSS/JavaScriptで構成されています。

---

## ディレクトリ構成

```
grayscale-app/
├── backend/
│   ├── main.py           # FastAPIサーバー（APIの受け口）
│   ├── convert.py        # グレースケール変換処理
│   └── requirements.txt  # Pythonパッケージの依存関係リスト
├── frontend/
│   ├── index.html        # ブラウザで開くUI（フレームワーク不使用）
│   ├── style.css          # スタイル定義
│   └── script.js          # 画面の動作・API呼び出し処理
└── README.md             # このファイル
```

---

## 起動手順

### 1. 仮想環境を作成する

```bash
cd grayscale-app/backend
python -m venv venv
```

### 2. 仮想環境を有効化する

**Windows（PowerShell）の場合:**
```powershell
.\venv\Scripts\Activate.ps1
```

**Mac / Linux の場合:**
```bash
source venv/bin/activate
```

### 3. 必要なパッケージをインストールする

```bash
pip install -r requirements.txt
```

### 4. サーバーを起動する

```bash
uvicorn main:app --reload
```

起動後、ターミナルに `http://127.0.0.1:8000` と表示されればOKです。

### 5. フロントエンドをブラウザで開く

`frontend/index.html` をブラウザで直接開いてください。

```
grayscale-app/frontend/index.html をダブルクリック、またはブラウザにドラッグ＆ドロップ
```

---

## 動作確認方法

1. ブラウザで `index.html` を開く
2. 「ファイルを選択」ボタンから画像ファイル（JPEG、PNGなど）を選ぶ
3. 元画像がプレビュー表示されることを確認する
4. 「グレースケールに変換」ボタンを押す
5. 右側（または下側）に白黒のグレースケール画像が表示されれば成功です

---

## トラブルシューティング

| 症状 | 原因と対処 |
|------|-----------|
| ボタンを押してもエラーになる | サーバーが起動しているか確認（`uvicorn main:app --reload` を実行中か） |
| `ModuleNotFoundError` が出る | `pip install -r requirements.txt` を再実行してください |
| 画像が表示されない | 対応形式（JPEG, PNG, BMP等）の画像か確認してください |
