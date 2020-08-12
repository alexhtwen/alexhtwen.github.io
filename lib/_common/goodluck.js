/* jshint esversion: 8 */


let imgSrcPrefix = './assets/images/common/goodluck-'

let imageInfo = { // 要給pure.js用的資料object。
   images: [
      {
         src: ''
      }
   ]
}

// 有空時可改為抓目前時間(秒數小數點後第3或4位)作為random值。
let imageId = Math.floor(Math.random() * 32)
// bingoPage = 0
console.log('imageId：', imageId)
thisImage = imgSrcPrefix + imageId.toString().padStart(2, '0') + '.jpg'
console.log('thisImage:', thisImage)

function renderImages(imageInfo)
{
   let directive = {
      'div.card': {
         'image<-images': {
            'img@src': function () { return thisImage }
         }
      }
   }
   $p('.card-col').render(imageInfo, directive)
}

// 渲染
renderImages(imageInfo)


let rands = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)]
// console.log(rands)

document.getElementById('goodluck-0' + rands[0].toString()).classList.add('mirror-v')
document.getElementById('goodluck-1' + rands[1].toString()).classList.add('mirror-h')

// for (let i = 0; i < 2; i++)
// {
//    let element = document.getElementById('goodluck-' + i.toString() + rands[i].toString())
//    element.classList.add('mirror-v')
//    console.log(element)
//    console.log('goodluck-' + i.toString() + rands[i].toString())
// }