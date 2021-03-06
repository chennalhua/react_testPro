import html2canvas from "html2canvas";

export default function downloadEcard() {
    window.onload = function () {
        let IMAGE_URL;
        function screen() {
            let shareContent = document.getElementById('downloadCard');//截圖範圍
            let width = shareContent.offsetWidth; //寬度 shareContent.offsetWidth
            let height = shareContent.offsetHeight; // 高度 shareContent.offsetHeight

            let canvas = document.createElement("canvas");
            let scale = 4;
            canvas.width = width * scale; //寬度 * 縮放
            canvas.height = height * scale; //高度 * 縮放
            canvas.getContext("2d")
            let ctx = canvas.getContext("2d");
            ctx.webkitImageSmoothingEnabled = false;
            ctx.mozImageSmoothingEnabled = false;
            ctx.imageSmoothingEnabled = false;

            let opts = {
                dpi: 144,
                scale: scale,
                canvas: canvas,
                logging: true,
                width: width, //dom 原始寬度
                height: height, //dom 原始高度
                backgroundColor: 'transparent',
                useCORS: true, //解決圖片跨域問題
                allowTaint: true,
                removeContainer: true,
            };
            html2canvas(shareContent, opts).then(function (canvas) {
                IMAGE_URL = canvas.toDataURL("image/png");
                downloadBase64(IMAGE_URL, '我的名片.png');
            })
        }

        function dataURLtoBlob(dataurl) {
            let arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n)
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n)
            }
            return new Blob([u8arr], { type: mime })
        }

        function downloadBase64(dataUrl, filename) {
            let href
            const downloadLink = document.createElement('a');
            try {
                let blob = dataURLtoBlob(dataUrl);
                let href = window.URL.createObjectURL(blob);
                downloadLink.download = filename
                downloadLink.href = href
                downloadLink.click()
            } catch (err) {
            } finally {
                if (href) {
                    window.URL.revokeObjectURL(href);
                }
                // downloadLink.remove()
            }
        }
        document.querySelector('#save-btn').addEventListener('click', function (e) {
            screen();
        })
    }
}