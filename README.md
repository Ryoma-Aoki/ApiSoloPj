このリポジトリはCode Chrysalisの生徒であるときに作成しました（This was created during my time as a student at Code Chrysalis）

# ApiSoloPj
api solo project

# Purpose of use of API
bachelorette に参加するメンバの情報の参照・登録・削除・変更ができます。

# How to use API
- `GET /bachelorette`
  - 全てのメンバ情報を取得する
- `POST /bachelorette`
  - メンバの追加ができます。
  - firstName,lastName,age,jobs,salary,birthdayを指定してください。
- `DELETE /bachelorette/:id`
  - 指定した ID のメンバの情報を削除します。
  - 指定するメンバの IDは`GET /bachelorette`を使って参照して下さい。
- `PATCH /bachelorette/:id`
  - 指定した ID のメンバの情報を変更します。
  - 指定するメンバの IDは`GET /bachelorette`を使って参照して下さい。
  - age,jobs,salaryの中で変更したい項目に値を指定してください。