# **ARCHIPELAGO HTML/CSS スタイルガイド**

# 文書構成

https://github.com/arcplg/html-css-style-guide

* **スタイルガイド概要（本ファイル）**
  * 前段と全体的サマリー
  * PM,デザイナーも確認しておくべき項目
* **[HTMLガイド: README_HTML.md](README_HTML.md)**
  * HTML側の記述、SEOの観点から見た構造
* **[STYLE(CSS)ガイド: README_STYLE.md](README_STYLE.md)**
  * CSS側の記述、構造設計
* **[開発環境ガイド: README_OPS.md](README_OPS.md)**
  * エディターの設定、開発環境のアーキテクチャ
  * sample_static にサンプルと[README.md](sample_static/README.md)があります
* **[コーディング設定シート](https://docs.google.com/spreadsheets/d/16MCcsQESgk16r9Nh8RwrPe3L3d1ahOWRtP2I8nQHuqw/edit#gid=1764403400)**
  * 依頼する、作業する前に確認するチェックシート(スプレッドシート)

# 前段

本ドキュメントは、HTML/CSSをコーディングする際の、準拠するガイドと、必ず指示をしてもらう箇所を定義します。
プロジェクトごとにコーディング設定書を作成し、PM/デザイナー/コーダー間で共有するようお願いします。

明瞭性、再利用性、保守性を意識したCSS設計を行ってください。

* 明瞭性
読みやすく、理解しやすい記述、構成を心がけます。
* 再利用性
既存のパーツから新しいコンポーネントを簡単に作成できるように心がけます。
* 保守性
新しいコンポーネントや機能の追加・更新が簡単に行える設計になっているように心がけます。

随時、みなさんで修正していきましよう！

**本ガイドはあくまでガイドラインであり、全てを準拠する必要はありません。
プロジェクトの規模やコストを見ながら最適な実装を選択してください。**


# おさえておきたいトピック
詳細はそれぞれの別途ファイルを参照

## [HTML](README_HTML.md) トピック
  * `セマンティック`に記述する
    * 見た目や振る舞いからではなく、目的や役割に基づいてclass名をつける
    * できる限りHTML5の構造化タグ( header, nav, footer, section, article, etc...)で記述する
  * `<h1>`要素はページ内で1つにし、原則トップページではロゴアイコン周りやサイト名に使い、他のページはヘッダータイトルに設定する
  * ヘッダーの順番 h1 h2 h3 ... を守る
  * metaセクションを設定する
    * title, description, viewport を適切に設定する
    * OGP（Open Graph Protocol）は必ず指定する。og:typeはTopと配下で切り替える
  * ベクトルにできる画像はなるべくSVGで保存する
  * 画像,CSS,JSなどの参照ファイルのセパレータは原則 `_`(under score)を使う（`-`はNG）
  * 画像にalt属性を入れる（背景画像のような意味のない画像は対象外）
  * アイコンはなるべくWebIconFontを利用する（デザイナと相談、わざわざデザインしなくてもいい場合）
  * CSS/JS キャッシュの対策
    * お客さま（ユーザー）に毎回ブラウザをスーパーリロードする必要がないように、できる限りインクルードするファイル名の後ろに一意のパラメータを付与する ex.`file.css?v=202010090954`
    * なにかしらHTMLテンプレートエンジンを組み込んでいる、もしくはphpの場合、自動化してください

## [CSS / STYLE](README_STYLE.md) 記述トピック
  * idは極力使わない（CSSセレクターで#idは禁止、jsで使う場合はOK）
  * CSSのセレクターは原則1階層にする。そのため、BEM（の改良）で記述する
    ```CSS
      .menu .button {} // NG
      .menu_button {} // OK
    ```
  * CSSの!importantは原則禁止
  * 要素セレクタ(HTML Tag)はCSSで直接使わず、必ずクラスを付与する

## [開発/環境トピック](README_OPS.md)
* エディターは`Visual Studio Code`(VSC)を使用する
  * オートフォーマット設定などVSC設定ファイルを共通でコミットしたい
  * 利用人口も多く、個人的にコーディングで一番良いエディターだと思います。
  * クラウド版もベータリリースされており、今後開発環境とのセットになると考えられる
* 作業開始時はできる限りテンプレート/開発環境から開始する
* フォーマット調整はできる限り手動ではなくVSCのオートフォーマットを利用する
  * インデントはスペース2つ
  * ブラウザ固有のベンダープレフィックスは手で書かず、自動で記述してくれる開発環境を利用する、など
* lintを必ず通し、エラーがない状態でコミットする（VSCで自動化、開発環境ガイド参照）
* スマホなどのデバイスの実機確認を必ず行う
  * 時間がない場合、クラウドの[Browser Stack](https://www.browserstack.com/)（契約済）を利用する。localIPでも利用する場合chromeに下記拡張機能を入れてください。
  https://chrome.google.com/webstore/detail/browserstack-local/mfiddfehmfdojjfdpfngagldgaaafcfo?hl=ja


# プロジェクトごとの仕様確認
下記これらをまとめたのがコーディング設定シートとなります。

## ターゲット環境・検証ブラウザ
コーディング前にWindows環境、Machintosh環境、スマートフォンなど対応が必要なブラウザ、端末を明確にします。
端末ごとのデフォルトフォントに気をつけてください（後述）

対応ブラウザが増えるほど、コストがかかります。
特に`Microsoft Internet Explorer 11` は特別なコストがかかるため、できる限り対応ブラウザは少なく、もしくは、対応しても最低限の検証ですむように、PM＆顧客と相談してください。

* 標準ターゲット（2020/10/08現在）
  * Windows環境
    * Microsoft Internet Explorer 11
    * Microsoft Edge 最新バージョン
    * Google Chrome 最新バージョン
    * Mozilla Firefox 最新バージョン
  * Macintosh環境
    * Safari 最新バージョン
    * Google Chrome 最新バージョン
    * Mozilla Firefox 最新バージョン
  * iOS環境
    * iOS 12以降の Safari 最新バージョン
    * iOS 12以降の Google Chrome最新版
  * Android環境
    * Andoroid ver.6.0以上の Google Chrome最新版
* 標準メイン検証ターゲット
  * Windows環境
    * Microsoft Internet Explorer 11
    * Google Chrome 最新バージョン
  * Macintosh環境
    * Google Chrome 最新バージョン
  * iOS環境
    * iOS 12以降の Safari 最新バージョン
  * Android環境
    * Andoroid ver.6.0以上の Google Chrome最新版


## レスポンシブル / ブレークポイント仕様
ブレークポイントとブレークポイント間の幅指定を定義します。
注意：レスポンシブルと幅が可変かどうかは別の話であり、別々に決めなくてはいけません。

### 画面サイズ参考
* XPERIA : `360` x 640
* Pixel3XL : `480` x 987
* GLAXYS10 : `480` x 1013
* iPhone 678 : 375 x 667
* iPhone XR/XS : 414 x 896
* iPhone 12/pro : 390 x 884
* iPhone pro max : 428 x 926
* iPad/mini : 768 x 1024
* iPad Air : 834 x 1112
* iPad Pro 11" : 834 x 1194
* iPad Pro 12.9" : 1024 x 1366
* iPad/mini/Air SplitView : 320 x 1024

### ブレークポイント標準設定(2020/10/08現在)
顧客から指定がない場合の推奨ですが、場合に応じて、下記の`この部分`の変更をしてください。
[sample site](https://arcplg.github.io/html-css-style-guide/layout1.html)

* ブレークポイント1つ2モードの場合(ほとんどの場合これ)
  * ブレークポイント
    * モバイル `768px` まで : PC `769px` から
  * 幅仕様
    * モバイル `可変幅100%`
    * PC以下の組合わせ
      a) `1100px` 完全固定幅（それ以下は横スクロールバー表示）
		  a+) `xxxpx` min-width 以下は固定、それ以上は可変幅
		  a+) `xxxpx` max-width まで可変幅、それ以上は固定
* ブレークポイント2つ3モードの場合
  * ブレークポイント
    * モバイル `480px` まで : タブレット `481px` から `896px` まで : PC `897px` から
  * 幅仕様
    * モバイル `可変幅100%` : タブレット `可変幅100%` : PC `固定幅1100px`(上記参照)

固定幅の1100pxはプロジェクトごとの指定。変動の場合もあり
スマホの最小サイズは原則360pxとします。


## フォント
* 全体で利用するフォントリスト(+文字の太さバリエーション)を頂いてください
* 外部Webフォントを指定する場合、なるべく `google font` を利用するようにお願いしてください（部分ロードができるため）
  利用例
  ```
  https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500,700&display=swap
  ```
* 指示ならばしょうがないのですが、外部の日本語Webフォントはサイズが大きいのでなるべく使わない、使っても一つぐらいがベターです


### フォント標準設定(2020/10/08現在)
特に指定がない場合、下記の設定が無難です。

```CSS
body {
  font-family:
    "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
}
```
游ゴシックを使いたい場合は、WindowsのChromeでフォントが細くなってしまう問題があり、対策をしなくてはなりません。一例として以下のような、Windows書体名に Medium を付ける方法がありますが、プロジェクトによって検討をしてください。
```CSS

body {
  font-family:
    "游ゴシック体",
    YuGothic,
    "游ゴシック Medium",
    "Yu Gothic Medium",
    "游ゴシック",
    "Yu Gothic",
    "メイリオ",
    sans-serif;
}
```

## ファビコン
素材を決める
* 16x16,32x32がセットになった`.ico`ファイル（必須）
* iPhoneやiPadのsafariや、Androidのホーム画面で使用されるアイコン(180x180,必須ではない)

## OGP
`og:image`の素材を決める
* 原則 600 x 315 以上 (横幅が 600以上)
* 高解像度端末に対応させたい場合は倍の 1200 x 630 以上

## Webアイコンフォント
* Webサイトで使うアイコンは、可能ならばなるべく、画像ではなくWebアイコンフォントを利用してください。
* Webアイコンフォントを使う場合は、なるべく一つのセットから選ぶようにしてください
* さらに可能ならば、使うアイコンのみを読み込むようにしてください

## AMPに対応するか決める


# デザインカンプ (Design Comprehensive Layout)
上記のプロジェクト仕様を共有した上でデザイン制作をお願いしてください。
またできるかぎり、AdobeXD での制作をお願いしてください。

## その他、PM、デザイナーさんへのお願い事項

### 画像コンバートに関して
* 画像化する部分は明確に指定してください。できれば、サイズx2倍対応やファイルサイズについて検討・指示してください。
* 幾何学的（写真ではない）画像でベクトル化できるものはベクトル画像にするか、指示してください
* 画像化を想定している文字も、フォントのままではなく、ベクトル化できるものはベクトル化してください。（デザインファイルを開いたり、なにか操作をしたときに、フォントが変更される場合があるので）
* WebPに対応するかどうか

### レスポンシブル・その他
* レスポンシブルのスマホ版があるかどうか。ない場合、どのようにするかの概要指示をお願いします
* レスポンシブルのテーブルデザインは、例えば、横スクロールか、縦並びかで大きく作りが変わるので、事前に確定してください。


