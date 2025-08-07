'use client';

import { useState } from 'react';

export default function Home() {
  const [outputLog, setOutputLog] = useState<string[]>([
    '> システム初期化完了',
    '> 準備フェーズ開始...',
  ]);

  const addLog = (message: string) => {
    setOutputLog((prev) => [...prev, `> ${message}`]);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Claude SDK Assistant</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* 左側：フェーズセクション */}
          <div className="w-full lg:w-[70%] space-y-6">
            {/* 準備フェーズ */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="mr-3 text-blue-500">📋</span>
                準備フェーズ
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">プロジェクトの初期設定と環境構築を行います。</p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => addLog('環境チェック実行中...')}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    環境チェック
                  </button>
                  <button
                    type="button"
                    onClick={() => addLog('依存関係インストール中...')}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    依存関係インストール
                  </button>
                  <select
                    onChange={(e) => addLog(`設定: ${e.target.value}`)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">設定を選択</option>
                    <option value="開発環境">開発環境</option>
                    <option value="本番環境">本番環境</option>
                    <option value="テスト環境">テスト環境</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 実装フェーズ */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="mr-3 text-green-500">🚀</span>
                実装フェーズ
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">機能の実装とコードの生成を行います。</p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => addLog('コンポーネント生成中...')}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                  >
                    コンポーネント生成
                  </button>
                  <button
                    type="button"
                    onClick={() => addLog('API統合実行中...')}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                  >
                    API統合
                  </button>
                  <select
                    onChange={(e) => addLog(`テンプレート: ${e.target.value}`)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">テンプレート選択</option>
                    <option value="CRUD">CRUD操作</option>
                    <option value="認証">認証システム</option>
                    <option value="ダッシュボード">ダッシュボード</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="implementation-details"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    実装詳細:
                  </label>
                  <textarea
                    id="implementation-details"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows={3}
                    placeholder="実装する機能の詳細を入力..."
                    onChange={(e) =>
                      e.target.value && addLog(`入力: ${e.target.value.substring(0, 30)}...`)
                    }
                  />
                </div>
              </div>
            </div>

            {/* チェックフェーズ */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="mr-3 text-orange-500">✅</span>
                チェックフェーズ
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">コードの検証とテストを実行します。</p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => addLog('リント実行中...')}
                    className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                  >
                    リント実行
                  </button>
                  <button
                    type="button"
                    onClick={() => addLog('テスト実行中...')}
                    className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                  >
                    テスト実行
                  </button>
                  <button
                    type="button"
                    onClick={() => addLog('ビルド実行中...')}
                    className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                  >
                    ビルド
                  </button>
                  <select
                    onChange={(e) => addLog(`チェック項目: ${e.target.value}`)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">チェック項目</option>
                    <option value="型チェック">型チェック</option>
                    <option value="セキュリティ">セキュリティ</option>
                    <option value="パフォーマンス">パフォーマンス</option>
                  </select>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <p className="text-sm text-gray-700 font-medium mb-2">チェック結果:</p>
                  <div className="space-y-1">
                    <p className="text-sm text-green-600">✓ TypeScript: エラーなし</p>
                    <p className="text-sm text-green-600">✓ ESLint: 警告 0件</p>
                    <p className="text-sm text-orange-600">⚠ Bundle Size: 93KB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右側：出力ログ */}
          <div className="w-full lg:w-[30%]">
            <div className="bg-gray-900 rounded-lg shadow-md p-4 sticky top-8">
              <h3 className="text-white font-semibold mb-3">出力ログ</h3>
              <pre className="bg-black text-green-400 p-4 rounded font-mono text-sm overflow-x-auto max-h-[600px] overflow-y-auto">
                {outputLog.map((log, index) => (
                  <div key={index} className="mb-1">
                    {log}
                  </div>
                ))}
                <span className="animate-pulse">_</span>
              </pre>
              <button
                type="button"
                onClick={() => setOutputLog(['> ログをクリアしました'])}
                className="mt-3 w-full px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm hover:bg-gray-600 transition-colors"
              >
                ログクリア
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
