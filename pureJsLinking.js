/* jshint esversion: 8 */

// window.addEventListener("DOMContentLoaded", (event) =>
window.addEventListener("load", (event) =>
{
   let delay1Sec

   function delayFunc()
   {
      delay1Sec = setTimeout(doPureJs, 1500);
   }


   function doPureJs()
   {
      // alert('jknjiknjknjiknjk')

      function setPageInfoArray()
      // 產生網站各版面資訊的array。
      {
         let pageInfoArr = [{
            title: '極簡首頁',
            filename: 'index.html',
            state: ''
         },
         {
            title: '關於老師',
            filename: 'instructor.html',
            state: ''
         },
         {
            title: '課程內容',
            filename: 'courseContent.html',
            state: ''
         },
         {
            title: '活動花絮',
            filename: 'highlights.html',
            state: ''
         },
         {
            title: '上課照片',
            filename: 'photos.html',
            state: ''
         },
         {
            title: '同學謝詞',
            filename: 'gratitude.html',
            state: ''
         },
         {
            title: '團隊成員',
            filename: 'team.html',
            state: ''
         },
         {
            title: '相關連結',
            filename: 'links.html',
            state: ''
         },
         {
            title: '跋',
            filename: 'postscript.html',
            state: ''
         }
         ]

         let path = window.location.pathname
         let page = path.split("/").pop()
         // console.log(page)
         // console.log('/' + page + '/')
         if (page == 'goodluck.html' || page == 'bingo.html')
         {
            page = 'photos.html'
         }

         let itemValue = pageInfoArr.find(({
            filename
         }) => filename === page)
         // console.log('itemValue:', itemValue)
         // console.log('filename:', itemValue.filename)

         // console.log(pageInfoArr.indexOf(itemValue))
         pageInfoArr[pageInfoArr.indexOf(itemValue)].state = 'disabled'
         return pageInfoArr
      }


      let pageInfo = { // 要給pure.js用的資料object。
         pages: setPageInfoArray()
      }

      function renderPageInfo(pageInfo)
      {
         let directive = {
            'li': {
               'page<-pages': {
                  'a@href+': 'page.filename',
                  'a': 'page.title',
                  'a@class+': function ()
                  {
                     return ' ' + this.state
                  }
               }
            }
         }
         $p('.navbar-nav').render(pageInfo, directive)
      }

      // 渲染
      renderPageInfo(pageInfo)
   }
   delayFunc()
})