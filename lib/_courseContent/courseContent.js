/* jshint esversion: 8 */

const audioFilePath = './assets/audios/courseContent/',
    fileType = '.mpeg'
// 設定初值，假如不設定，第1次按下圖片時會產生錯誤。
let audio = new Audio(audioFilePath + 'html' + fileType)

$(document).ready(function () {
    $(".card-img-top").click(function (e) {
        // audioFile.pause()
        // audioFile.currentTime = 0
        stopAudio(audio)
        audio = new Audio(audioFilePath + e.target.id + fileType)
        playAudio(audio)
    })
})


function playAudio(audioObj) {
    audioObj.play()
}

function stopAudio(audioObj) {
    audioObj.pause()
    audioObj.currentTime = 0
}