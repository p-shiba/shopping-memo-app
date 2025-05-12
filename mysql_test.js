// mysql_test.js

// .env ファイルを読み込んで process.env に展開
require("dotenv").config();
console.log("▶ process.env.DB_HOST =", process.env.DB_HOST);

// 1. モジュール読み込み
const express = require("express");
const mysql = require("mysql2/promise");
const app = express();

// 2. ビューエンジンに EJS を設定
app.set("view engine", "ejs");

// 3. public フォルダを静的ファイル置き場に設定
app.use(express.static("public"));

// 4. プールを作成（環境変数から接続情報を取得）
const pool = mysql.createPool({
  host: "127.0.0.1", // ここを直接書いて TCP 接続を強制
  port: Number(process.env.DB_PORT || 3306), // DB_PORT を数値に変換
  user: process.env.DB_USER, // DB_USER
  password: process.env.DB_PASS, // DB_PASS
  database: process.env.DB_NAME, // DB_NAME
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// 5. 起動時に接続テストを実行
(async () => {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS result");
    console.log("DB テストクエリ結果:", rows[0].result); // 2 が出れば OK
  } catch (err) {
    console.error("DB テスト接続エラー:", err.message);
    process.exit(1); // 異常終了
  }
})();

// 6. ルートのルーティング（例: items テーブルの全件取得）
app.get("/", async (req, res) => {
  try {
    const [items] = await pool.query("SELECT * FROM items");
    res.render("hello", { items }); // hello.ejs に items を渡す
  } catch (err) {
    console.error("クエリエラー:", err.message);
    res.status(500).send("サーバーエラーが発生しました");
  }
});

// 7. サーバー起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`サーバーをポート ${PORT} で起動中…`);
});
