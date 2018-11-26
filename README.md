# marked_customize
Example of marked.js customization

marked.js を使用して、Markdown から task の抽出が可能かどうかの検証を行った。

## About

marked.js : https://github.com/markedjs/marked

## 検証した結果

* `[ ]` が入ると自動的に checkbox に変換する処理はすでに組み込まれている
* 関数 `listitem` はすでに html に変換されたテキストが渡されてくる
    * こんなん `<input disabled="" type="checkbox"> 起床`
* レンダラーで処理中のもの（token）がtaskかどうかを判別することは難しい
    * marked 内のローカル変数 parser で所持する実装になっているから
* やろうとするなら関数 `listitem` 内で先頭が checkbox になっているかを確認して、
  タスクかどうかを判定する、という実装が必要
