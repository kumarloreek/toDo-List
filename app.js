let inputToDo = document.querySelector('#inputToDo');
let add = document.querySelector('#add');

let addCont = document.querySelector(".addCont");
add.addEventListener("click",()=>{

 
 if(inputToDo.value != ""){
  let addedDiv = document.createElement("div");
  addedDiv.classList.add("added");

  let leftDiv = document.createElement("div");
  leftDiv.classList.add("left");

  let inputTypeCheck = document.createElement("input");
  inputTypeCheck.type="checkbox";
  inputTypeCheck.checked="checked";
  let para = document.createElement("p");
  para.innerText = inputToDo.value;

  leftDiv.appendChild(inputTypeCheck);
  leftDiv.appendChild(para) ;

  let i = document.createElement("i");
  i.classList.add("fa-solid");
  i.classList.add("fa-trash");
 
 addedDiv.appendChild(leftDiv);
 addedDiv.appendChild(i);

 addCont.appendChild(addedDiv);

//  console.log(addedDiv);
//  console.log(addedDiv);
// console.dir(leftDiv);
// console.log(leftDiv.children);
  inputToDo.value="";
 }
});

let added = document.querySelector(".addCont");


added.addEventListener("click",(event)=>{
   
//    console.log(event.target.nodeName);
    if(event.target.nodeName == "I"){

       let parentEl = event.target.parentElement;
       
       parentEl.remove();
       

    } else if(event.target.nodeName == "INPUT"){
        let lef = event.target.parentElement;
       
        let ade = lef.parentElement;
       
        ade.remove();
    }

    //  || 
});

// For searching

let searchToDo = document.querySelector("#searchToDo");
searchToDo.addEventListener("input",()=>{
   let boxSear = document.querySelector(".searchBox");
   boxSear.style.visibility = "visible";
   if(searchToDo.value == ""){
    boxSear.style.visibility = "hidden";
   }
   
    let addC = document.querySelectorAll('.added');
    // console.log(addC);
     for(ad of addC){
        // console.log(ad.children[0].children[1]);
        let p = ad.children[0].children[1].innerText;
        if(p == searchToDo.value){
             let searchAdded = document.createElement("div");
             searchAdded.classList.add("searchAdded");

             let searchLeft = document.createElement("div");
             searchLeft.classList.add("searchLeft");

             let searchCheck = document.createElement("input");
             searchCheck.type= "checkbox";
             searchCheck.checked="checked";

             let paraS = document.createElement("p");
             paraS.innerText = ad.children[0].children[1].innerText;

             searchLeft.appendChild(searchCheck);
             searchLeft.appendChild(paraS);

             let i = document.createElement("i");
             i.classList.add("fa-solid");
             i.classList.add("fa-trash");


             searchAdded.appendChild(searchLeft);
             searchAdded.appendChild(i);
              
          let searchContaint = document.querySelector(".searchContaint");
          searchContaint.prepend(searchAdded);

          searchAdded.value="";
          p = "";
        } else if(searchToDo.value == ""){
            p="";
        } 
        
     }
   
   
     

});


//  slider menu

let menuClick = document.querySelector(".fa-bars");
menuClick.addEventListener("click",()=>{
  let slider = document.querySelector(".slider");
  slider.classList.toggle("hiddeMenu");
  
  menuClick.classList.toggle("fa-xmark");

});




let profile = document.querySelector("#profile");

profile.addEventListener("click",()=>{
  
  profile.children[1].classList.toggle("innerHidd");
  // profile.children[1].style.transition="5s linear";

  // console.log(  profile.children[1].style);




   // arrow.............
   let idown = profile.children[0].children[1];
   let iUp = profile.children[0].children[2];
     
  
   if(profile.children[1].classList.length == 2){
   
   idown.style.visibility="hidden";
   iUp.style.visibility="visible";
   } else{
     idown.style.visibility="visible";
     iUp.style.visibility="hidden";
 
   }
     // arrow end.............
});

// home

let home = document.querySelector("#home");

home.addEventListener("click",()=>{

  home.children[1].classList.toggle("innerHidd");



  // arrow.............
  let idown = home.children[0].children[1];
  let iUp = home.children[0].children[2];
    
 
  if(home.children[1].classList.length == 2){
  
  idown.style.visibility="hidden";
  iUp.style.visibility="visible";
  } else{
    idown.style.visibility="visible";
    iUp.style.visibility="hidden";

  }
    // arrow end.............



});

//  task

let task = document.querySelector("#task");
task.addEventListener("click",()=>{
  task.children[1].classList.toggle("innerHidd");
  

  // arrow 
  let idown = task.children[0].children[1];
  let iUp = task.children[0].children[2];
    
 
  if(task.children[1].classList.length == 2){
  
  idown.style.visibility="hidden";
  iUp.style.visibility="visible";
  } else{
    idown.style.visibility="visible";
    iUp.style.visibility="hidden";

  }
    // arrow end

});
//  project

let project = document.querySelector("#project");
project.addEventListener("click",()=>{
  project.children[1].classList.toggle("innerHidd");




    // arrow 
    let idown = project.children[0].children[1];
    let iUp = project.children[0].children[2];
      
   
    if(project.children[1].classList.length == 2){
    
    idown.style.visibility="hidden";
    iUp.style.visibility="visible";
    } else{
      idown.style.visibility="visible";
      iUp.style.visibility="hidden";
  
    }
      // arrow end

});

let calender = document.querySelector("#calender");
calender.addEventListener("click",()=>{
  calender.children[1].classList.toggle("innerHidd");


  // arrow.............
  let idown = calender.children[0].children[1];
  let iUp = calender.children[0].children[2];
    
 
  if(calender.children[1].classList.length == 2){
  
  idown.style.visibility="hidden";
  iUp.style.visibility="visible";
  } else{
    idown.style.visibility="visible";
    iUp.style.visibility="hidden";

  }
    // arrow end.............
});

let category = document.querySelector("#category");

category.addEventListener("click",()=>{
  category.children[1].classList.toggle("innerHidd");



   // arrow.............
   let idown = category.children[0].children[1];
   let iUp = category.children[0].children[2];
     
  
   if(category.children[1].classList.length == 2){
   
   idown.style.visibility="hidden";
   iUp.style.visibility="visible";
   } else{
     idown.style.visibility="visible";
     iUp.style.visibility="hidden";
 
   }
     // arrow end.............
  
  


});

let notes = document.querySelector("#notes");
notes.addEventListener("click",()=>{
  notes.children[1].classList.toggle("innerHidd");


  // arrow.............
  let idown = notes.children[0].children[1];
  let iUp = notes.children[0].children[2];
    
 
  if(notes.children[1].classList.length == 2){
  
  idown.style.visibility="hidden";
  iUp.style.visibility="visible";
  } else{
    idown.style.visibility="visible";
    iUp.style.visibility="hidden";

  }
    // arrow end.............
});

let setting = document.querySelector("#st");

setting.addEventListener("click",()=>{
  setting.children[1].classList.toggle("innerHidd");

  // console.log(setting);

  // arrow.............
  let idown = setting.children[0].children[1];
  let iUp = setting.children[0].children[2];
    
 
  if(setting.children[1].classList.length == 2){
  
  idown.style.visibility="hidden";
  iUp.style.visibility="visible";
  } else{
    idown.style.visibility="visible";
    iUp.style.visibility="hidden";

  }
    // arrow end.............
});

 




