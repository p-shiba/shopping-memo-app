# Changelog

2025-05-08
-progate の買い物メモアプリを再現
-conoha vps の MariaDB に接続する

2025-05-09
-top メニューの画像を変更
-conoha vps 　のタイムアウトが早いので修正が必要

2025-05-12
-GitHub に.gitgnore を commit した。

-他のファイルが commit されていないと思う

2025-05-14
-conoha vps 　に bot 攻撃を確認 -セキュリティの見直し -公開鍵の認証
Your identification has been saved in /Users/toshiharu/.ssh/id_ed25519
Your public key has been saved in /Users/toshiharu/.ssh/id_ed25519.pub

2025-05-19 -ターミナルで SSH トンネルを作る
-ssh -i ~/.ssh/id_ed25519 -L 3307:localhost:3306 root@163.44.125.149 -別のターミナルで次のコマンドを実行する
-npm run dev とターミナルに入力すると package.json に記述されたコードが起動する

## [v0.1.0] – 2025-05-10

### Added

- アプリの初版リリース

## [v0.2.0] – 2025-05-15

### Changed

- コメントを外部ファイルに移行
