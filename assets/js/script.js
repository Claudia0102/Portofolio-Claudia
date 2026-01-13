const carousel = document.querySelector('.certificate-carousel');

setInterval(()=>{
  carousel.scrollBy({left:320, behavior:'smooth'});
  if(carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth){
    carousel.scrollTo({left:0, behavior:'smooth'});
  }
},3000);

function openExpModal(title,desc){
  expModal.style.display='flex';
  expTitle.innerText=title;
  expDesc.innerText=desc;
}

function closeExpModal(){
  expModal.style.display='none';
}

function openProject(title,desc,tools,img){
  projectModal.style.display='flex';
  projTitle.innerText=title;
  projDesc.innerText=desc;
  projTools.innerText=tools;
  projImg.src=img;
}

function closeProject(){
  projectModal.style.display='none';
}
