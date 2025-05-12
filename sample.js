/**
 * ■ 開発フローと実行コマンド
 *
 * 1. MacBook のターミナルで SSH トンネルを張る
 *    ssh -L 3307:localhost:3306 root@163.44.125.149
 *
 * 2. 別ターミナルで sample.js を起動
 *    node sample.js
 *
 * 3. （必要に応じて）
 *    ・ConoHa VPS ログイン
 *      ssh root@163.44.125.149
 *    ・MariaDB ログイン
 *      sudo mysql -u root -p
 */

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1", // SSHトンネルのローカル終点を指します
  port: 3307, // SSHトンネルでフォワードしているポート
  user: "8f2dj_tester_mysql",
  password: "QVZ3iLn*EzKwTVj!a*Nb",
  database: "myapp_db", // database:myapp_db　となっているため、注意すること（databaseの作成の有無は未確認）
});

connection.connect((err) => {
  if (err) {
    console.error("接続失敗:", err.message);
    return;
  }
  console.log("MySQL 接続成功！");
  connection.end();
});
