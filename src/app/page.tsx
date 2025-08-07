'use client';

import { useState } from 'react';

export default function Home() {
  const [output, setOutput] = useState<string>('');
  const [selectedIssue, setSelectedIssue] = useState<string>('');
  const [promptRequest, setPromptRequest] = useState<string>('');

  const addOutput = (message: string) => {
    setOutput((prev) => `${prev}\n${message}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">AI Workflow Assistant</h1>

        <div className="flex gap-6">
          {/* 左側：ワークフローフェーズ */}
          <div className="flex-1 space-y-6">
            {/* 準備フェーズ */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">準備フェーズ</h2>
              <p className="text-gray-600 mb-4">情報整理と生成</p>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => addOutput('タスク生成を開始しました')}
                >
                  タスク生成
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => addOutput('Issue作成を開始しました')}
                >
                  Issue作成
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => addOutput('プロンプト作成を開始しました')}
                >
                  プロンプト作成
                </button>
              </div>
            </div>

            {/* 実装フェーズ */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">実装フェーズ</h2>
              <p className="text-gray-600 mb-6">以下の2つの方法から選択してください</p>

              <div className="space-y-6">
                {/* GitHub Issue選択 */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-medium text-gray-800 mb-3">1. GitHub Issueを選択</h3>
                  <div className="flex gap-3">
                    <select
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={selectedIssue}
                      onChange={(e) => setSelectedIssue(e.target.value)}
                    >
                      <option value="">Issueを選択してください</option>
                      <option value="issue-123">Issue #123: 新しい機能の実装</option>
                      <option value="issue-124">Issue #124: バグ修正</option>
                      <option value="issue-125">Issue #125: UI改善</option>
                    </select>
                    <button
                      type="button"
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                      onClick={() =>
                        selectedIssue && addOutput(`選択されたIssue: ${selectedIssue}`)
                      }
                    >
                      選択
                    </button>
                  </div>
                </div>

                {/* プロンプトから依頼 */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-medium text-gray-800 mb-3">2. プロンプトから依頼</h3>
                  <div className="space-y-3">
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      placeholder="実装したい内容を具体的に記述してください..."
                      value={promptRequest}
                      onChange={(e) => setPromptRequest(e.target.value)}
                    />
                    <button
                      type="button"
                      className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                      onClick={() =>
                        promptRequest &&
                        addOutput(`プロンプト依頼: ${promptRequest.substring(0, 50)}...`)
                      }
                    >
                      依頼する
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* チェックフェーズ */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">チェックフェーズ</h2>
              <p className="text-gray-600 mb-4">品質確保と最終確認</p>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                  onClick={() => addOutput('テスト実行中...\n✅ すべてのテストが成功しました')}
                >
                  テスト実行
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                  onClick={() => addOutput('PRレビュー開始\n📝 コードレビューを実行中...')}
                >
                  PRレビュー
                </button>
              </div>
            </div>
          </div>

          {/* 右側：実行結果 */}
          <div className="w-96">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">実行結果</h3>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700 text-sm"
                  onClick={() => setOutput('')}
                >
                  クリア
                </button>
              </div>
              <div className="bg-gray-50 rounded-md p-4 min-h-96 max-h-96 overflow-y-auto">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                  {output || 'ここに実行結果が表示されます...'}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
