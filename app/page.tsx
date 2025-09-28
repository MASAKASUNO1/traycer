import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            プログラミング学習ゲーム
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            インタラクティブなチャレンジと進捗追跡で、楽しくプログラミングを学びましょう。
            初心者から上級者まで、あなたのレベルに合わせた課題でスキルアップできます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/problems" className="game-button-primary">
              チャレンジを始める
            </Link>
            <Link href="/leaderboard" className="game-button-secondary">
              リーダーボードを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="インタラクティブな学習"
              content="実践的なコーディング課題で、理論だけでなく実践的なスキルを身につけられます。"
            />
            <Card
              title="進捗追跡"
              content="学習の進捗を詳細に追跡し、達成度を可視化。モチベーションを維持できます。"
            />
            <Card
              title="ゲーミフィケーション"
              content="ポイント、バッジ、ランキングシステムで学習をゲームのように楽しめます。"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-50 dark:bg-primary-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            コミュニティの統計
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                1,000+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                アクティブユーザー
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                500+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                プログラミング課題
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                プログラミング言語
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-300">サポート</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            今すぐ始めましょう
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            アカウントを作成して、プログラミング学習の旅を始めましょう。
          </p>
          <Link href="/auth/signup" className="game-button-primary">
            アカウントを作成
          </Link>
        </div>
      </section>
    </div>
  );
}
