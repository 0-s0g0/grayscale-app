# グレースケール変換APIサーバー
# FastAPIを使って画像を受け取り、グレースケールに変換して返す

import io
import numpy as np
import cv2
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response

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
    gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # グレースケール画像をPNGのバイトデータにエンコード
    # cv2.imencode は (成功フラグ, バイト列) のタプルを返す
    success, encoded_image = cv2.imencode(".png", gray_img)

    if not success:
        raise HTTPException(status_code=500, detail="画像のエンコードに失敗しました。")

    # エンコードされた画像をbytesに変換
    png_bytes = encoded_image.tobytes()

    # PNG画像をレスポンスとして返す
    return Response(content=png_bytes, media_type="image/png")
