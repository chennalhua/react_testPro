## REACT JS 專位上線測試功能效果
### ■ localStorage 問題
#### 2022/01/06 測試 Line web localStorage 是否能正常
- 結果顯示，LINE Web localStorage 可正常使用
### ■ html2canvas 問題
#### 2021/10/18 ios15 Line Web 渲染 div 不完整問題。hmlt2cnavas 版本號：^1.3.2
 - Apple ios15 系統字體 bug 導致 【已解決】 參考：https://blog.csdn.net/jiwei_1234____5/article/details/119003157
#### 2022/01/07 ios15.2 Line Web 渲染 div 完整，但會跳回原 HTML，導致無法下載圖片
#### 2022/01/08 解決 ios 15.2 無法使用 blob url 跳轉圖片問題!!。hmlt2cnavas 版本號：^1.3.2
 - 猜測 blob API & blob url 無法支援 ios 15.2 
 - 改用 canvas 轉成 img 的方式來呈現，不需做 blob url 跳轉直接呈現 <img>
#### 2022/01/13
 - 新增判斷使用者 mobile 系統終端 (IOS or Android) (commit f2c3c01b)
### ■ iSmart 約訪紀錄上線實測
 - https://chennalhua.github.io/react_testPro/#/viscus <br/>
原 console.log 會報錯為: has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
 - 原因為 POST request Method 前端會請求後台時會先發送 options 預檢請求，預檢請求失敗則會出現以上(報錯問題)
 - 解決：前端 POST 自帶 headers content-type (其為四種常見的 POST 數據)<br/>
 參考：
 - https://www.itread01.com/content/1536302734.html
 - https://blog.csdn.net/vevin/article/details/108757157

