window.addEventListener("mousemove", (e) => {
  const frame = document.getElementById("frame");
  var x = frame.parentElement.offsetLeft + frame.parentElement.offsetWidth / 2;
  var y = frame.parentElement.offsetTop + frame.parentElement.offsetHeight / 2;
  var rad = Math.atan2(e.pageX - x, e.pageY - y);
  var rot = rad * (180 / Math.PI) * -1 + 180;
  var rot = Math.floor(rot);

  frame.style.transform = `rotate( ${rot}deg)`;
});


const pages = document.querySelectorAll(".section");
const section = document.querySelectorAll('.page');

pages.forEach( (single)=>{
    single.addEventListener('click', (e)=>{ handlepage(e) });
})

function handlepage(e) {

  pages.forEach((single) => {
    single.classList.remove('btn-active');
  });
  const selected = e.target;
  selected.classList.add('btn-active');

  section.forEach( (single)=> {
    if(single.attributes[1].value==e.target.innerText){
        single.style.display = 'block';
    }else{
        single.style.display = 'none';
    }
  });

}

const lis = document.querySelectorAll('li');

lis.forEach((single)=>{
    single.addEventListener('mouseover', (e)=>{ HandleMouseOver(e)});
    single.addEventListener('mouseout', (e)=>{ HandleMouseOut(e)});
});

function HandleMouseOver(e){
    const lid = document.getElementById('lid');
    lid.classList.add('translate-up-lid');
}


function HandleMouseOut(e){
    const lid = document.getElementById('lid');
    lid.classList.remove('translate-up-lid');
}