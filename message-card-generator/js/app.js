/**
 * メッセージカード生成システム
 * ブラウザでメッセージカードを作成し、PDFとして出力
 */

// ========================================
// DOM要素の取得
// ========================================
const messageInput = document.getElementById('messageInput');
const cardMessage = document.getElementById('cardMessage');
const generateBtn = document.getElementById('generateBtn');
const clearBtn = document.getElementById('clearBtn');
const loading = document.getElementById('loading');

// ========================================
// リアルタイムプレビュー
// ========================================
/**
 * テキスト入力時にプレビューを更新
 */
messageInput.addEventListener('input', function() {
    cardMessage.textContent = this.value;
});

// ========================================
// メッセージクリア
// ========================================
/**
 * 入力内容とプレビューをクリア
 */
function clearMessage() {
    messageInput.value = '';
    cardMessage.textContent = '';
}

// ========================================
// PDF生成
// ========================================
/**
 * メッセージカードをPDFとして生成・ダウンロード
 */
async function generatePDF() {
    // ローディング表示
    loading.classList.add('active');

    try {
        const card = document.getElementById('messageCard');
        
        // html2canvasで高解像度キャプチャ
        // scale: 3 で高品質な画像を生成
        const canvas = await html2canvas(card, {
            scale: 3, // 高解像度化（300dpi相当）
            useCORS: true, // 外部画像の読み込みを許可
            backgroundColor: '#ffffff',
            logging: false // コンソールログを非表示
        });

        // jsPDFでPDF生成
        // ハガキサイズ: 148mm × 100mm
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'landscape', // 横向き
            unit: 'mm',
            format: [100, 148] // 高さ × 幅
        });

        // Canvasをデータ化してPDFに追加
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, 148, 100);

        // PDFをダウンロード
        // ファイル名: message_card_YYYYMMDD.pdf
        const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        pdf.save(`message_card_${timestamp}.pdf`);

        console.log('PDF生成完了');

    } catch (error) {
        console.error('PDF生成エラー:', error);
        alert('PDF生成中にエラーが発生しました。もう一度お試しください。');
    } finally {
        // ローディング非表示
        loading.classList.remove('active');
    }
}

// ========================================
// イベントリスナーの設定
// ========================================
generateBtn.addEventListener('click', generatePDF);
clearBtn.addEventListener('click', clearMessage);

// キーボードショートカット
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter でPDF生成
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        generatePDF();
    }
    
    // Ctrl/Cmd + Delete でクリア
    if ((e.ctrlKey || e.metaKey) && e.key === 'Delete') {
        e.preventDefault();
        clearMessage();
    }
});

// ========================================
// 初期化処理
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('メッセージカード生成システム - 起動完了');
    
    // 初期フォーカス
    messageInput.focus();
});
