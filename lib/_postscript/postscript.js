/* jshint esversion: 8 */

function setCarouselItemArray()
// 產生輪播時各carousel carouselItems資訊的array。
{

   let srcHead = './assets/images/postscript/'

   let carouselItemInfoArr = [{
      src: srcHead + '珍重再見-蘇蔡王唐1600-400-1.jpg',
      state: 'active'
   },
   {
      src: srcHead + '後會有期-顏文王趙1600-400-1.jpg',
      state: ''
   }
      // {
      //    src: srcHead + '千里搭長棚.png',
      //    state: ''
      // },
      // {
      //    src: srcHead + '天下無不散的筵席.jpg',
      //    state: ''
      // },
      // {
      //    src: srcHead + '珍重再見-蘇蔡王米.jpg',
      //    state: ''
      // }
   ]
   return carouselItemInfoArr
}


let carouselItemInfo = { // 要給pure.js用的資料object。
   carouselItems: setCarouselItemArray()
}

function renderCarouselItem(carouselItemInfo)
{
   let directive = {
      '.carousel-item': {
         'carouselItem<-carouselItems': {
            'img@src+': 'carouselItem.src',
            '.@class+': function ()
            {
               return ' ' + this.state
            }
         }
      }
   }
   $p('.carousel-inner').render(carouselItemInfo, directive)
}

// 渲染
renderCarouselItem(carouselItemInfo)