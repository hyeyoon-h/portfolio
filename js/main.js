// main.js

// header
const navBtn = document.querySelector('.nav-btn')
const navIcon = document.querySelector('.nav-btn i')
const nav = document.querySelector('.nav-wrap nav')

let isOpen = false;

navBtn.addEventListener('click', function() {
   if(isOpen) {
      navIcon.className = 'ri-menu-line';
      nav.style.display = 'none';
      document.querySelector('html').style.overflow = 'visible'
   } else {
      navIcon.className = 'ri-close-line';
      nav.style.display = 'flex';
      document.querySelector('html').style.overflow = 'hidden'
   }
   isOpen = !isOpen;
})


// main-visual
const imgBox = [
   {src: "images/main_visual_1.jpg"},
   {src: "images/main_visual_2.jpg"},
   {src: "images/main_visual_3.jpg"},
   {src: "images/main_visual_4.jpg"},
   {src: "images/main_visual_5.jpg"},
];

let num = 0;

const visualImg = document.querySelector('.main-visual-img img')

function changeImg() {
   visualImg.setAttribute("src", imgBox[num].src);
   num++;
   if(num >= imgBox.length) {
      num = 0;
   }
}
setInterval(changeImg, 1500);


// publishing
const pubContents = [
   {
      title : 'OB맥주',
      viewport : '반응형',
      page : 'Main Page',
      contribution: '퍼블리싱 100%',
      Tools: 'HTML + CSS + JS',
      imgsrc : 'images/ob_design.png'
   },{
      title : 'DB그룹',
      viewport : '반응형',
      page : 'Main Page',
      contribution: '퍼블리싱 100%',
      Tools: 'HTML + CSS + JS',
      imgsrc : 'images/ob_design.png'
   },{
      title : '유한건강생활',
      viewport : '반응형',
      page : 'Main Page',
      contribution: 'Clone coding',
      Tools: 'HTML + CSS + JS',
      imgsrc : 'images/ob_design.png'
   },{
      title : '카이스트',
      viewport : '반응형',
      page : 'Main Page',
      contribution: 'Clone coding',
      Tools: 'HTML + CSS + JS',
      imgsrc : 'images/ob_design.png'
   },
]

const pubLinks = [
   {
      title: 'OB맥주',
      gitHub: 'https://github.com/hyeyoon-h/ob',
      website: 'https://hyeyoon-h.github.io/ob/',
      proposal: 'https://www.figma.com/proto/jyPkEPaxfM8p0SlEhSeimk?node-id=0-1&t=ZxaB9IejLshQHQDC-6'
   },{
      title: 'DB그룹',
      gitHub: 'https://github.com/hyeyoon-h/db',
      website: 'https://hyeyoon-h.github.io/db/',
      proposal: 'https://www.figma.com/login?is_not_gen_0=true'
   },{
      title: '유한건강생활',
      gitHub: 'https://github.com/hyeyoon-h/youhancare',
      website: 'https://hyeyoon-h.github.io/youhancare/',
      proposal: 'https://www.figma.com/login?is_not_gen_0=true'
   },{
      title: '카이스트',
      gitHub: 'https://github.com/hyeyoon-h/kaist',
      website: 'https://hyeyoon-h.github.io/kaist/',
      proposal: 'https://www.figma.com/login?is_not_gen_0=true'
   },
]

const pubImgs = [
   {
      src : 'images/ob_design.png',
      alt : 'ob맥주 디자인'
   },
   {
      src : 'images/db_design.png',
      alt : 'db그룹 디자인'
   },
   {
      src : 'images/youhancare.png',
      alt : '유한건강생활 디자인'
   },
   {
      src : 'images/kaist.png',
      alt : '카이스트 디자인'
   },
]

const pubBtnAll = document.querySelectorAll('.publishing-btns button');
const pubImgWrap = document.querySelector('.publishing-img')
const pubImg = document.querySelector('.publishing-img img');
const pubTextwrap = document.querySelector('.publishing-text');

pubBtnAll.forEach((button, index) => {
   button.addEventListener('click', function () {
      pubBtnAll.forEach(btn => btn.classList.remove('pubclick'));
      button.classList.add('pubclick');

      updateImg(index);
      updateContent(index);
   });
});

function updateImg(index) {
   const selectedImg = pubImgs[index];

   pubImgWrap.innerHTML = '';

   const imgTag = document.createElement('img')
   imgTag.src = selectedImg.src
   imgTag.alt = selectedImg.alt

   pubImgWrap.append(imgTag)
}
updateImg(0)

function updateContent(index) {
   const selectedContent = pubContents[index];
   const selectedLink = pubLinks[index];

   pubTextwrap.innerHTML = '';

   const strongTag = document.createElement('strong');
   strongTag.innerHTML = selectedContent.title;

   const tableTag = document.createElement('table');
   tableTag.innerHTML = `
      <tr>
         <th>Viewport</th>
         <td>${selectedContent.viewport}</td>
      </tr>
      <tr>
         <th>제작페이지</th>
         <td>${selectedContent.page}</td>
      </tr>
      <tr>
         <th>참여도</th>
         <td>${selectedContent.contribution}</td>
      </tr>
      <tr>
         <th>Tools</th>
         <td>${selectedContent.Tools}</td>
      </tr>
   `;

   const pubLinkWrap = document.createElement('div');
   pubLinkWrap.className = 'publishing-link';
   pubLinkWrap.innerHTML = `
      <a href="${selectedLink.gitHub}" target="_blank">GitHub</a>
      <a href="${selectedLink.website}" target="_blank">웹 사이트</a>
      <a href="${selectedLink.proposal}" target="_blank">기획서</a>
   `;

   pubTextwrap.append(strongTag, tableTag, pubLinkWrap);
}
updateContent(0);



// learning-log
const learningItems = [
   {
      link : 'https://hyeyoon-h.github.io/todo-list/',
      group : '# JavaScript',
      title : 'To-do List',
      url : 'images/todo.png'
   },{
      link : 'https://hyeyoon-h.github.io/login-form/',
      group : '# Library',
      title : 'Sass_login form',
      url : 'images/login_form.png'
   },{
      link : 'https://hyeyoon-h.github.io/memo-react/',
      group : '# React',
      title : '메모장',
      url : 'images/memo_design.png'
   },{
      link : 'https://hyeyoon-h.github.io/rock-scissors-paper/',
      group : '# JavaScript',
      title : '가위바위보 게임',
      url : 'images/rock_scissors_paper.png'
   },{
      link : 'https://hyeyoon-h.github.io/quiz/',
      group : '# JavaScript',
      title : 'Quiz game',
      url : 'images/quiz.png'
   },{
      link : 'https://hyeyoon-h.github.io/gsap-portfolio/',
      group : '# Library',
      title : 'GSAP ScrollTrigger',
      url : 'images/port_design.png'
   }
]

const learnList = document.querySelector('.learning-list')
const hashtags = document.querySelectorAll('.learning-hashtag span')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

let firstShow = 0;
let totalList = 0;
let filter = null;

function listFilter(filter) {
   learnList.innerHTML = "";

   learningItems.forEach(itmes => {
      if(!filter || itmes.group === filter) {
         const liTag = document.createElement('li')
         liTag.className = 'learning-item';
         liTag.style.backgroundImage = `url(${itmes.url})`
         liTag.setAttribute('draggable', 'false')

         liTag.innerHTML = `
            <a href=${itmes.link} target = "_blank">
               <span>${itmes.group}</span>
               <strong>${itmes.title}</strong>
            </a>
         `

         learnList.append(liTag)
         totalList++;
      }
   });
};




hashtags.forEach(hashtag => {
   hashtag.addEventListener('click', function(e) {
      const selectedTag = hashtag.innerHTML.trim();

      hashtags.forEach(tag => tag.style.backgroundColor = "");
      e.currentTarget.style.backgroundColor = "var(--point-color-2)";

      //toggle
      // if(learnList.dataset.filter === selectedTag) {
      //    listFilter();
      //    delete learnList.dataset.filter;
      // } else {
      //    listFilter(selectedTag);
      //    learnList.dataset.filter = selectedTag;
      // }

      listFilter(selectedTag);
      firstShow = 0;
      totalList =  document.querySelectorAll('.learning-item').length;
      learnList.style.transform = 'translateX(0px)'
   });
});


// totalLearning =  document.querySelectorAll('.learning-item').length;

prevBtn.addEventListener('click', function() {
   if(firstShow > 0) {
      firstShow--;
      learnList.style.transform = `translateX(-${firstShow * 370}px)`
   } else {
      prevBtn.disabled
   }
});

nextBtn.addEventListener('click', function() {
   if(firstShow < totalList - 1) {
      firstShow++;
      learnList.style.transform = `translateX(-${firstShow * 370}px)`
   } else {
      nextBtn.disabled
   }
});


listFilter();


// ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
gsap.to('.learning', {
   scrollTrigger: {
      trigger: '.publishing',
      start: 'top -10%',
      end: 'bottom -10%',
      pin: true,
      pinSpacing: false,
      scrub: 1
   }
});
