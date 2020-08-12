/* jshint esversion: 8 */

// 產生個人經歷array。
function setInstructorInfoArray()
{
   return [{
      id: 'One',
      title: '姓名',
      content: '　　蔡勝雄(Amos Tsai)',
      ariaExpanded: 'true',
      buttonState: '',
      collapseState: 'show'
   },
   {
      id: 'Two',
      title: '現職',
      content: '　　學創科技有限公司負責人',
      ariaExpanded: 'false',
      buttonState: 'collapsed',
      collapseState: ''
   },
   {
      id: 'Three',
      title: '經歷',
      content: "<ul class='instructor-ul'>" +
         "<li class='text-danger font-size-135'>光寶科技訓練專員</li>" +
         "<li class='text-danger font-size-135'>環茂科技人力資源管理師</li>" +
         "<li class='text-danger font-size-135'>宏達創新系統分析師</li>" +
         "</ul>",
      ariaExpanded: 'false',
      buttonState: 'collapsed',
      collapseState: ''
   },
   {
      id: 'Four',
      title: '任教',
      content: "<ul class='instructor-ul'>" +
         "<li class='text-danger font-size-135'>萬華社區大學講師</li>" +
         "<li class='text-danger font-size-135'>新莊社區大學講師</li>" +
         "<li class='text-danger font-size-135'>文山社區大學講師</li>" +
         "<li class='text-danger font-size-135'>救國團講師</li>" +
         "<li class='text-danger font-size-135'>以斯帖公司Python課講師</li>" +
         "<li class='text-danger font-size-135'>2019Linux及網站建置班老師</li>" +
         "<li class='text-danger font-size-135'>2019-2020網頁前端技術班老師</li>" +
         "</ul>",
      ariaExpanded: 'false',
      buttonState: 'collapsed',
      collapseState: ''
   },
   {
      id: 'Five',
      title: '證照',
      content: "<ul class='instructor-ul'>" +
         "<li class='text-danger font-size-135'>國際專案管理師(PMP)</li>" +
         "<li class='text-danger font-size-135'>丙級程式設計</li>" +
         "</ul>",
      ariaExpanded: 'false',
      buttonState: 'collapsed',
      collapseState: ''
   },
   {
      id: 'Six',
      title: '專長',
      content: "<ul class='instructor-ul'>" +
         "<li class='text-danger font-size-135'>網站開發</li>" +
         "<li class='text-danger font-size-135'>手機APP開發</li>" +
         "<li class='text-danger font-size-135'>資訊安全</li>" +
         "<li class='text-danger font-size-135'>多媒體</li>" +
         "</ul>",
      ariaExpanded: 'false',
      buttonState: 'collapsed',
      collapseState: ''
   },
   {
      id: 'Seven',
      title: '臉書(Facebook)',
      content: "　　<a class='text-danger font-size-110' href='https://www.facebook.com/LearningArea/' target=_blank>https://www.facebook.com/LearningArea/</a>",
      ariaExpanded: 'false',
      buttonState: 'collapsed',
      collapseState: ''
   },
   {
      id: 'Eight',
      title: '部落格(Blog)',
      content: "　　<a class='text-danger font-size-110' href='http://amos-tsai.blogspot.tw' target=_blank>http://amos-tsai.blogspot.tw</a>",
      ariaExpanded: 'false',
      buttonState: 'collapsed',
      collapseState: ''
   }
   ]
}


let instructorInfo = { // 要給pure.js用的資料object。
   infos: setInstructorInfoArray()
}

function renderInstructorInfo(instructorInfo)
{
   let directive = {
      'div.card': {
         'info<-infos': {
            'div.card-header@id+': 'info.id',
            'div.card-header > h2 > button@aria-controls+': 'info.id',
            'div.card-header > h2 > button': 'info.title',
            'div.card-header > h2 > button@aria-expanded': 'info.ariaExpanded',
            'h2 > button@data-target+': 'info.id',
            'button@class+': function getState()
            {
               return ' ' + this.buttonState
            },
            'div.collapse@id+': 'info.id',
            'div.collapse@aria-labelledby+': 'info.id',
            'div.collapse@class+': function getState()
            {
               return ' ' + this.collapseState
            },
            'div.card-body': 'info.content'
         }
      }
   }
   $p('.accordion').render(instructorInfo, directive)
}

// 渲染
renderInstructorInfo(instructorInfo)