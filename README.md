## ポートフォリオの概要・作成経緯

学生時代にビールフェスに出店しているビアバーでアルバイトをしていました。ある日、アルバイト先のホームページがどんなものなのか気になり調べてみたところ、かなり簡素であまり魅力的には見えませんでした。ビールフェス会場内では人気店だったが故にショック、勿体無い気持ちになりました。「こうした方が見栄えが良くなるんじゃないか」「サイトを通じで来てくれるお客さんも増えるんじゃないか」と感じたのがきっかけでリメイク版を作成しました。

[ポートフォリオサイト](https://nobeernolifetokyo.com/)

![PF](/public/image/readme/home.png)

## 使用技術

HTML

CSS-Sass(1.58.3)

JavaScript

TypeScript(4.9.5)

React(18.2.0)

Next.js(13.2.3)
#
microCMS

Day.js(1.11.7)

Nodemailer(6.9.2)

Vercel(deploy,hosting)

## 機能概要

Home・Menu・Blog・Contactの4部構成になっています。表示されているMenu・BlogはmicroCMSのAPIを叩いて取得しています。新規作成、削除、修正もmicroCMSで一括管理しています。また、Next.jsの特徴であるStatic Generation（静的生成）を活かして画像表示の遅延を防ぎ、ページ離脱に繋がらないように意識しました。

Home画面
###
![GIF](/public/image/readme/home.gif)

Menu画面
###
![GIF](/public/image/readme/menu.gif)

Blog画面
###
![GIF](/public/image/readme/blog.gif)
