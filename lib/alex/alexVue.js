/* jshint esversion: 8 */

let cardId = 'One'
let name = {
   id: cardId,
   heading: 'heading' + cardId,
   dataTarget: '#collapse' + cardId,
   title: '姓名',
   content: '　　溫華添(Alex Van)',
   ariaExpanded: 'true',
   collapse: 'collapse' + cardId
}

cardId = 'Two'
let edu = {
   id: cardId,
   heading: 'heading' + cardId,
   dataTarget: '#collapse' + cardId,
   title: '學歷',
   // content: '　　國立政治大學新聞研究所碩士',
   content: [
      "國立台灣師範大學社教系新聞組學士(1979)",
      "國立政治大學新聞研究所碩士(1986)",
      "M.S., UMass Dartmouth, USA(2000)"
   ],
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
      "宜蘭縣興中國中英語老師(1979-1981)",
      "中華民國民意測驗協會調查部主任(1985-1986)",
      "聯合報資深記者(1986-2015)",
      "聯合行銷公司資深研究員(2002-2015)"
   ],
   ariaExpanded: 'false',
   collapse: 'collapse' + cardId
}

cardId = 'Four'
let works = {
   id: cardId,
   heading: 'heading' + cardId,
   dataTarget: '#collapse' + cardId,
   title: '作品',
   content: [
      "全球第一套中文CATI系統",
      "聯合報選舉結果圖表資料供應系統(內部使用)",
      "溫氏電影檔案管理系統(建置中...)",
      "默默購物網",
      "網路前端班謝師網站",
      "..."
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
      "Microsoft MCSE",
      "(努力中...)"
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
      "CATI(電腦輔助電話訪問系統)",
      "Python",
      "資料庫",
      "SPSS"
   ],
   ariaExpanded: 'false',
   collapse: 'collapse' + cardId
}

cardId = 'Seven'
let email = {
   id: cardId,
   heading: 'heading' + cardId,
   dataTarget: '#collapse' + cardId,
   title: 'email',
   content: "　　alexhtwen@gmail.com",
   ariaExpanded: 'false',
   collapse: 'collapse' + cardId
}

cardId = 'Eight'
let github = {
   id: cardId,
   heading: 'heading' + cardId,
   dataTarget: '#collapse' + cardId,
   title: 'github',
   content: "　　https://github.com/alexhtwen",
   ariaExpanded: 'false',
   collapse: 'collapse' + cardId
}




// define a Vue object.
let app = new Vue({
   el: '#accordionExample',
   data: {
      cardName: name,
      cardEdu: edu,
      cardExperience: experience,
      cardWorks: works,
      cardCertificate: certificate,
      cardExpertise: expertise,
      cardEmail: email,
      cardGithub: github,
   }
})

console.log(app)