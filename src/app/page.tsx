'use client';

import { useState } from 'react';

export default function Home() {
  const [outputLog, setOutputLog] = useState<string>('');

  const addLog = (message: string) => {
    setOutputLog((prev) => prev + `${message}\n`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Next.js App Proposal</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* 左側：メインコンテンツ（2カラム分） */}
          <div className="lg:col-span-2 space-y-4">
            {/* 準備フェーズ */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-600">準備フェーズ</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">GitHubのIssue</label>
                  <div className="flex gap-2">
                    <select className="flex-1 p-2 border rounded">
                      <option>Issue #123: Feature request</option>
                      <option>Issue #124: Bug fix</option>
                      <option>Issue #125: Enhancement</option>
                    </select>
                    <button 
                      onClick={() => addLog('GitHub Issue を選択しました')}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      選択
                    </button>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => addLog('タスクを生成中...')}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    タスク生成
                  </button>
                  <button 
                    onClick={() => addLog('Issue を作成中...')}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Issue作成
                  </button>
                </div>
              </div>
            </div>

            {/* 実装フェーズ */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-600">実装フェーズ</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">プロンプトベースのリクエスト</label>
                  <textarea 
                    className="w-full p-2 border rounded"
                    rows={3}
                    placeholder="実装したい機能を詳しく記述してください..."
                    onChange={(e) => e.target.value && addLog(`入力: ${e.target.value.substring(0, 50)}...`)}
                  />
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => addLog('プロンプトを作成中...')}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    プロンプト作成
                  </button>
                  <button 
                    onClick={() => addLog('実装を開始中...')}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    実装開始
                  </button>
                  <button 
                    onClick={() => addLog('コード生成中...')}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    コード生成
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">テンプレート選択</label>
                  <select 
                    className="w-full p-2 border rounded"
                    onChange={(e) => e.target.value && addLog(`テンプレート: ${e.target.value}`)}
                  >
                    <option value="">選択してください</option>
                    <option value="基本構造">基本構造</option>
                    <option value="認証付き">認証付き</option>
                    <option value="ダッシュボード">ダッシュボード</option>
                    <option value="ECサイト">ECサイト</option>
                  </select>
                </div>
              </div>
            </div>

            {/* チェックフェーズ */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 text-orange-600">チェックフェーズ</h2>
              
              <div className="space-y-4">
                <div className="flex gap-2">
                  <button 
                    onClick={() => addLog('テストを実行中...\n✓ Unit tests passed\n✓ Integration tests passed')}
                    className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                  >
                    テスト実行
                  </button>
                  <button 
                    onClick={() => addLog('リントチェック中...\n✓ No ESLint errors\n✓ TypeScript check passed')}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    リントチェック
                  </button>
                  <button 
                    onClick={() => addLog('ビルド中...\n✓ Build completed successfully')}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    ビルド
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">PRレビュー項目</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2"
                        onChange={(e) => e.target.checked && addLog('✓ コード品質チェック完了')}
                      />
                      <span>コード品質</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2"
                        onChange={(e) => e.target.checked && addLog('✓ テストカバレッジ確認完了')}
                      />
                      <span>テストカバレッジ</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2"
                        onChange={(e) => e.target.checked && addLog('✓ ドキュメント更新確認完了')}
                      />
                      <span>ドキュメント</span>
                    </label>
                  </div>
                </div>

                <button 
                  onClick={() => addLog('PR を作成しました\n→ https://github.com/user/repo/pull/126')}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  PR作成
                </button>
              </div>
            </div>
          </div>

          {/* 右側：出力エリア（1カラム分） */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg shadow p-4 sticky top-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-semibold">出力</h3>
                <button 
                  onClick={() => setOutputLog('')}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  クリア
                </button>
              </div>
              <pre className="bg-black text-green-400 p-4 rounded font-mono text-xs overflow-auto h-[600px]">
                {outputLog || '> Ready...\n'}
                <span className="animate-pulse">_</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}