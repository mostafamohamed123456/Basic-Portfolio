let sliderRightBtn = document.getElementById("right");
let sliderleftBtn = document.getElementById("left");

sliderleftBtn.onclick=()=>{
    sliderRightBtn.setAttribute("disabled",'false')
    document.querySelector(".intro").classList.add("go-left");
    document.querySelector(".brief-about").classList.add("go-center");
    sliderleftBtn.setAttribute("disabled",'true')
}
sliderRightBtn.onclick=()=>{
    sliderleftBtn.setAttribute("disabled",'false')
    document.querySelector(".brief-about").classList.remove("go-center");
    document.querySelector(".intro").classList.remove("go-left");
    sliderRightBtn.setAttribute("disabled",'true')
}

let aboutlistItems = document.querySelectorAll(".about-list-items li");
let rightContainerChildrens = document.querySelector(".right-container").children;

aboutlistItems.forEach((activeItem,index)=>{
    activeItem.addEventListener("click",function(){
        aboutlistItems.forEach((deleteActive,deleteIndex)=>{
            deleteActive.classList.remove("active");
        });
        activeItem.classList.add("active");
        for(let i = 0; i < rightContainerChildrens.length; i++){
            setTimeout(()=>{
                rightContainerChildrens[i].classList.remove("active");
            },100)
            rightContainerChildrens[i].style.display="none";
        }
        rightContainerChildrens[index].style.display="block";
        setTimeout(()=>{
            rightContainerChildrens[index].classList.add("active");
        },150)
        
    })
});

let emailsContainerIcons = document.querySelectorAll(".emails-container span");
emailsContainerIcons.forEach((socialIcon)=>{
    socialIcon.addEventListener("click",()=>{
        window.open(socialIcon.getAttribute("data-link"),"_blank")
    })
});

let projectsContainerChildren = document.querySelector(".projects-container");
for(let x = 0; 0 < projectsContainerChildren.children.length; x++){
    projectsContainerChildren.children[x].addEventListener("click",()=>{
        window.open(projectsContainerChildren.children[x].getAttribute("data-link"),"_blank")
    });
    projectsContainerChildren.children[x].children[2].addEventListener("click",()=>{
        window.open(projectsContainerChildren.children[x].getAttribute("data-link"),"_blank")
    });
}