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
