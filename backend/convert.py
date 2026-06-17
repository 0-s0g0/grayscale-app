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
