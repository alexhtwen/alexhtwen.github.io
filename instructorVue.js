let cardId = 'One'
let name = {
   id: cardId,
   heading: 'heading' + cardId,
   dataTarget: '#collapse' + cardId,
   title: '姓名',
   content: '　　蔡勝雄(Amos Tsai)',
   ariaExpanded: 'true',
   collapse: 'collapse' + cardId
}

cardId = 'Two'
let title = {
   id: cardId,
   heading: 'heading' + cardId,
   dataTarget: '#collapse' + cardId,
   title: '現職',
   content: '　　學創科技有限公司負責人',
   ariaExpanded: 'false',
   collapse: 'collapse' + cardId
}

cardId = 'Three'
let experience = {
   id: cardId,
   heading: 'heading' + cardId,
   dataTarget: '#collapse' + cardId,
   title: '經歷',
   content: [
      "光寶科技訓練專員",
      "環茂科技人力資源管理師",
      "宏達創新系統分析師"
   ],
   ariaExpanded: 'false',
   collapse: 'collapse' + cardId
}

cardId = 'Four'
let teaching = {
   id: cardId,
   heading: 'heading' + cardId,
   dataTarget: '#collapse' + cardId,
   title: '任教',
   content: [
      "萬華社區大學講師",
      "新莊社區大學講師",
      "文山社區大學講師",
      "救國團講師",
      "以斯帖公司Python課講師",
      "2019Linux及網站建置班老師",
      "2019-2020網頁前端技術班老師"
   ],
   ariaExpanded: 'false',
   collapse: 'collapse' + cardId
}

cardId = 'Five'
let certificate = {
   id: cardId,
   heading: 'heading' + cardId,
   dataTarget: '#collapse' + cardId,
   title: '證照',
   content: [
      "國際專案管理師",
      "丙級程式設計"
   ],
   ariaExpanded: 'false',
   collapse: 'collapse' + cardId
}

cardId = 'Six'
let expertise = {
   id: cardId,
   heading: 'heading' + cardId,
   dataTarget: '#collapse' + cardId,
   title: '專長',
   content: [
      "網站開發",
      "手機APP開發",
      "資訊安全",
      "多媒體"
   ],
   ariaExpanded: 'false',
   collapse: 'collapse' + cardId
}

cardId = 'Seven'
let facebook = {
   id: cardId,
   heading: 'heading' + cardId,
   dataTarget: '#collapse' + cardId,
   title: '臉書(Facebook)',
   content: "　　https://www.facebook.com/LearningArea/",
   ariaExpanded: 'false',
   collapse: 'collapse' + cardId
}

cardId = 'Eight'
let blog = {
   id: cardId,
   heading: 'heading' + cardId,
   dataTarget: '#collapse' + cardId,
   title: '部落格(Blog)',
   content: "　　http://amos-tsai.blogspot.tw",
   ariaExpanded: 'false',
   collapse: 'collapse' + cardId
}




// define a Vue object.
let app = new Vue({
   el: '#accordionExample',
   data: {
      cardName: name,
      cardTitle: title,
      cardExperience: experience,
      cardTeaching: teaching,
      cardCertificate: certificate,
      cardExpertise: expertise,
      cardFacebook: facebook,
      cardBlog: blog,
   }
})

console.log(app)

// var vm = new Vue({
//    el: '#app',
//    delimiters: ['${', '}'],
//    data: {
//       text: '把滑鼠移過來看看！',
//       hint: '我是標題！'
//    }
// });

// let thisMovie = {
//    title: '導火線',
//    year: 2007,
//    lang: '粵語'
// }

// let app = new Vue({
//    el: '#movie-info',
//    data: {
//       movie: thisMovie
//    }
// })