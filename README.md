# プログラミング学習ゲーム

[![Next.js 14](https://img.shields.io/badge/Next.js-14.0.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-10.7.0-orange)](https://firebase.google.com/)

インタラクティブなプログラミング学習プラットフォーム。ゲーミフィケーション要素を取り入れた楽しい学習体験を提供します。

## ✨ 特徴

- **インタラクティブなコーディング課題** - 実践的なプログラミング問題でスキルアップ
- **進捗追跡** - 学習の進捗を詳細に記録し、モチベーション維持
- **ゲーミフィケーション** - ポイント、バッジ、ランキングシステム
- **多言語対応** - 50以上のプログラミング言語をサポート
- **レスポンシブデザイン** - モバイルからデスクトップまで対応
- **リアルタイム共同作業** - ディスカッション機能で学習者同士の交流

## 🛠 技術スタック

### Frontend

- **Next.js 14** - React フレームワーク (App Router)
- **TypeScript** - 型安全な JavaScript
- **Tailwind CSS** - ユーティリティファーストのCSSフレームワーク
- **React** - UI ライブラリ

### Backend & Database

- **Firebase v9 SDK** - 認証、データベース、ホスティング
  - Firebase Authentication (ユーザー認証)
  - Firestore (NoSQL データベース)
  - Firebase Hosting (静的ホスティング)

### Development Tools

- **ESLint** - コード品質チェック
- **PostCSS** - CSS 処理
- **TypeScript** - 型チェック

## 🚀 セットアップ

### 前提条件

- Node.js 18.0.0 以上
- npm または yarn
- Firebase プロジェクト

### インストール

1. **リポジトリをクローン**

```bash
git clone https://github.com/your-username/programming-learning-game.git
cd programming-learning-game
```

2. **依存関係をインストール**

```bash
npm install
```

3. **環境変数を設定**

`.env.local.example` をコピーして `.env.local` を作成し、Firebase 設定を入力してください。

```bash
cp .env.local.example .env.local
```

Firebase コンソールから以下の値を設定：

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

4. **開発サーバーを起動**

```bash
npm run dev
```

アプリケーションが http://localhost:3000 で起動します。

## 📁 プロジェクト構造

```
├── app/                    # Next.js 14 App Router
│   ├── components/         # React コンポーネント
│   │   ├── ui/            # 基本UIコンポーネント
│   │   ├── AuthProvider.tsx    # 認証プロバイダー
│   │   └── Navigation.tsx      # ナビゲーション
│   ├── lib/               # ユーティリティと設定
│   │   ├── firebase.ts    # Firebase 設定
│   │   └── types.ts       # TypeScript 型定義
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # ホームページ
├── firebase.json          # Firebase ホスティング設定
├── next.config.js         # Next.js 設定
├── tailwind.config.ts     # Tailwind CSS 設定
├── tsconfig.json          # TypeScript 設定
└── package.json           # 依存関係とスクリプト
```

## 🔧 使用可能なコマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm run start

# コードの型チェック
npm run type-check

# リンター実行
npm run lint
```

## 🔥 Firebase セットアップ

### Firebase プロジェクト作成

1. [Firebase Console](https://console.firebase.google.com/) にアクセス
2. 新しいプロジェクトを作成
3. Authentication と Firestore を有効化
4. ウェブアプリを追加して設定値を取得

### Firebase Authentication

- Email/Password 認証を有効化
- カスタム認証ドメインを設定（任意）

### Firestore Database

- テストモードで開始（本番環境ではセキュリティルールを設定）
- 以下のコレクションが使用されます：
  - `users` - ユーザー情報
  - `problems` - プログラミング課題
  - `submissions` - ユーザーの解答
  - `progress` - 学習進捗
  - `achievements` - 達成バッジ

### デプロイ

```bash
# Firebase CLI をインストール
npm install -g firebase-tools

# ログイン
firebase login

# プロジェクトを初期化（初回のみ）
firebase init hosting

# デプロイ
firebase deploy
```

## 🎯 開発ガイドライン

### コーディング標準

- **TypeScript** - 型安全性のために常に使用
- **ESLint** - コード品質を維持
- **Tailwind CSS** - ユーティリティクラスを活用
- **コンポーネント設計** - 再利用可能なコンポーネントを作成

### ブランチ戦略

- `main` - 安定版
- `develop` - 開発版
- `feature/*` - 新機能開発
- `bugfix/*` - バグ修正

### コミットメッセージ

```
feat: 新機能追加
fix: バグ修正
docs: ドキュメント更新
style: コードスタイル変更
refactor: リファクタリング
test: テスト追加・修正
```

## 🤝 コントリビューション

1. Fork する
2. 機能ブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチをプッシュ (`git push origin feature/AmazingFeature`)
5. Pull Request を作成

## 📝 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## 📞 連絡先

プロジェクトに関する質問や提案は、Issues または以下の連絡先まで：

- **Email**: contact@programming-learning-game.com
- **Twitter**: [@programminggame](https://twitter.com/programminggame)

---

**Happy Coding! 🎉**
