const lis = document.querySelectorAll("li");
const pages = document.querySelectorAll(".section");
const section = document.querySelectorAll(".page");

window.addEventListener("mousemove", (e) => {
  const frame = document.getElementById("frame");
  var x = frame.parentElement.offsetLeft + frame.parentElement.offsetWidth / 2;
  var y = frame.parentElement.offsetTop + frame.parentElement.offsetHeight / 2;
  var rad = Math.atan2(e.pageX - x, e.pageY - y);
  var rot = rad * (180 / Math.PI) * -1 + 180;
  var rot = Math.floor(rot);

  frame.style.transform = `rotate( ${rot}deg)`;
});

pages.forEach((single) => {
  single.addEventListener("click", (e) => {
    handlepage(e);
  });
});

section[0].style.display = "block";

function handlepage(e) {
  pages.forEach((single) => {
    single.classList.remove("btn-active");
  });
  const selected = e.target;
  selected.classList.add("btn-active");

  section.forEach((single) => {
    if (single.attributes[1].value == e.target.innerText) {
      single.style.display = "block";
    } else {
      single.style.display = "none";
    }
  });
}

lis.forEach((single) => {
  single.addEventListener("mouseover", (e) => {
    HandleMouseOver(e);
  });
  single.addEventListener("mouseout", (e) => {
    HandleMouseOut(e);
  });
});

function HandleMouseOver(e) {
  const lid = document.getElementById("lid");
  lid.classList.add("translate-up-lid");
}

function HandleMouseOut(e) {
  const lid = document.getElementById("lid");
  lid.classList.remove("translate-up-lid");
}














//              3 dot code












function closecard(e) {
  e.parentElement.parentElement.parentElement.parentElement.style.display =
    "none";
}

function minimisecard(e) {
  e.parentElement.parentElement.parentElement.parentElement.style.maxHeight =
    e.parentElement.parentElement.parentElement.clientHeight + "px";
}

function maximizecard(e) {
  e.parentElement.parentElement.parentElement.parentElement.style.maxHeight =
    "fit-content";
}














//    chat box



var hello=0;
var pos = 1000;



const data = {
  'Hi':[
    { classname: 'admin-msg'  , trigger: false , msg: 'hello'},
    { classname: 'admin-msg'  , trigger: true , msg: 'Hi'}
  ],
  'I just wanted to say hello':[
    { classname: 'admin-msg' , trigger: false , msg: 'Hi.'},
    { classname: 'admin-msg' , trigger: false , msg: 'How are you.'},
    { classname: 'option-chat' , trigger: true , msg: 'I am fine.'},
    { classname: 'option-chat' , trigger: true , msg: 'None of your concern.'},
  ],
  'hi':[
    { classname: 'admin-msg'  , trigger: false , msg: 'hello'}
  ],
  'I am fine.':[
    { classname: 'admin-msg'  , trigger: false , msg: 'Nice to hear that.'},
    { classname: 'admin-msg'  , trigger: false , msg: 'Is there something I can help you with.'},
    { classname: 'admin-msg'  , trigger: true , msg: 'Yes'},
    { classname: 'admin-msg'  , trigger: true , msg: 'No'}
  ],
  'None of your concern.':[
    { classname: 'admin-msg'  , trigger: false , msg: 'Ok , never mind.'}
  ],
  'No':[
    { classname: 'admin-msg'  , trigger: false , msg: 'Ok , have a good day.'}
  ],
  'Sure':[
    { classname: 'admin-msg'  , trigger: false , msg: 'Good to hear.'}
  ],
  'Nope':[
    { classname: 'admin-msg'  , trigger: false , msg: 'Your choice.'}
  ],
  'Yes':[
    { classname: 'admin-msg'  , trigger: false , msg: 'What help would you like.'},
    { classname: 'admin-msg'  , trigger: true , msg: 'Related to Career.'},
    { classname: 'admin-msg'  , trigger: true , msg: 'Related to Mentorship.'},
    { classname: 'admin-msg'  , trigger: true , msg: 'Related to Other.'},
  ],
  'Hire Me':[
    { classname: 'admin-msg'  , trigger: false , msg: 'Thanks for showing interest.'},
    { classname: 'admin-msg'  , trigger: false , msg: 'I will leave my Email below.'},
    { classname: 'admin-msg'  , trigger: false , msg: 'satvikshukla453@gmail.com'},
    { classname: 'admin-msg'  , trigger: false , msg: 'Is there something I can help you with.'},
    { classname: 'admin-msg'  , trigger: true , msg: 'Yes'},
    { classname: 'admin-msg'  , trigger: true , msg: 'No'}
  ],
  'Related to Career.':[
    { classname: 'admin-msg'  , trigger: false , msg: 'Thanks for showing interest.'},
    { classname: 'admin-msg'  , trigger: false , msg: "I've enjoyed web development since I was 12 years old."},
    { classname: 'admin-msg'  , trigger: false , msg: 'You should follow the profession in which you feel the most comfortable.'},
    { classname: 'admin-msg'  , trigger: false , msg: 'Is there something else you wanted to know.'},
    { classname: 'admin-msg'  , trigger: false , msg: 'Feel free to contact me.'},
    { classname: 'admin-msg'  , trigger: true , msg: 'Sure'},
    { classname: 'admin-msg'  , trigger: true , msg: 'Nope'}
  ],
  'Related to Mentorship.':[
    { classname: 'admin-msg'  , trigger: false , msg: 'Thanks for asking.'},
    { classname: 'admin-msg'  , trigger: false , msg: "I completed the MEaRN Stack course from the appbrewery and would suggest it."},
    { classname: 'admin-msg'  , trigger: false , msg: 'From Coursera, I also completed some more courses on web and app development.'},
    { classname: 'admin-msg'  , trigger: false , msg: 'Do not be afraid to put the things you learn into practise since web development is all about practise.'},
    { classname: 'admin-msg'  , trigger: false , msg: 'Feel free to contact me.'},
    { classname: 'admin-msg'  , trigger: true , msg: 'Sure'},
    { classname: 'admin-msg'  , trigger: true , msg: 'Nope'}
  ],
  'Related to Other.':[
    { classname: 'admin-msg'  , trigger: false , msg: 'Ok , I got you.'},
    { classname: 'admin-msg'  , trigger: false , msg: "But I am not sure how to help you"},
    { classname: 'admin-msg'  , trigger: false , msg: 'Cause I am running blind here , 😄'},
    { classname: 'admin-msg'  , trigger: false , msg: 'Sorry , never mind.'},
    { classname: 'admin-msg'  , trigger: false , msg: 'Feel free to contact me.'},
    { classname: 'admin-msg'  , trigger: false , msg: 'I will drop my email below'},
    { classname: 'admin-msg'  , trigger: false , msg: 'satvikshukla453@gmail.com'}
  ]
}








function ChatClose() {
  const chatbox = document.getElementById("chatbox");
  chatbox.style.display = "none";
}

function ChatOpen() {
  const chatbox = document.getElementById("chatbox");
  chatbox.style.display = "flex";
}



// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }





async function addhtml(id,classname,trigger,msg,sec=1.5){
  const element = document.getElementById(id);
  
  var fun;
  
  if(msg.length >=20){
    sec = Math.floor(msg.length / 10);
  }
  
  
  if(trigger){
    fun = `onclick="handlechat('${msg}')"`;
    sec = 0;
    classname = 'option-chat';
  }
  
  await sleep(sec);

  element.innerHTML += `
  <div class="${classname}" ${fun} >
    <div>${msg}</div>
  </div>
  `;

  document.getElementById('holder-chat').scrollTo(0,pos);
  pos+=1000;

}



function sleep(sec){
  return new Promise(resolve => setTimeout(resolve, sec*900));
}






async function handlechat(msg) {
  
  const chatbox = document.getElementById("msg_main");
  const writing = document.getElementById("writing");

  writing.style.display = "block";

  await addhtml("msg_main","user-msg","",msg,sec);

  if(msg=="Hi")
    hello++;

  if(hello>=5){

    addhtml("msg_main","admin-msg","","I think we have done enough greetings for the day",1)
    
    writing.style.display = "none";
    
    return;
  }

  if(data[msg]){
      for (var i=0 ; i < data[msg].length ; i++ ){
          
        var response = data[msg][i];

        await addhtml('msg_main',response.classname,response.trigger,response.msg);
      }
  }else{
    console.log(msg)
  }

  writing.style.display = "none";

}

