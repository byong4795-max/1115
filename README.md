# 珠子互動遊戲 (無需Node.js版本)

這個版本使用WebRTC實現P2P連接，不需要Node.js伺服器。

## 使用方式

1. 直接在瀏覽器中打開 `index.html`
2. 點擊"開始電腦顯示"按鈕，打開新視窗顯示珠子
3. 掃描電腦顯示的第一個QR碼（connect:XXXX），手機會訪問phone.html
4. 手機顯示輸入框，掃描電腦顯示的第二個QR碼（answer:XXXX:...），輸入內容，點擊設置
5. 手機顯示第三個QR碼（phone:XXXX:...），電腦掃描，輸入內容，點擊設置
6. 連接建立後，用手機鏡頭控制手來撥開珠子

## 注意事項

- 需要現代瀏覽器支援WebRTC
- 對於本地測試，使用localhost或HTTPS
- 如果在不同網路，需要將文件上傳到同一個網頁伺服器
- QR碼已大幅簡化，使用壓縮和短ID，掃描更容易

## 依賴

- p5.js (已包含)
- MediaPipe Hands (CDN)
- SimplePeer (CDN)
- QRCode.js (CDN)