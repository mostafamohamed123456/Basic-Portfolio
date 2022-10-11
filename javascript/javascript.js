let responsiveBtn = document.getElementById("responsive-btn");

let newNavBarListItem = document.createElement("ul");
newNavBarListItem.classList.add("new-nav-bar-list");
responsiveBtn.onclick = function(){
    //Append New Nav Bar List Item To Body
    document.body.appendChild(newNavBarListItem);
    //Toggle New Activate Class
    document.querySelector(".new-nav-bar-list").classList.toggle("activate");
    //Check If The Element Contains Activate Class to remove It While not needed
    if(document.querySelector(".new-nav-bar-list").classList.contains("activate")){
        document.querySelector(".new-nav-bar-list").style.display = 'block';
        setTimeout(function(){
            document.querySelector(".new-nav-bar-list").style.transform = 'scale(1,1)';
        },200);

        //Create New List Items and Links
        for(let y = 0; y < document.querySelectorAll(".navBar-list li a").length; y++){
            let newListItems = document.createElement("li");
            newListItems.classList.add("newListItems")
            let newAnchors = document.createElement("a");
            newListItems.appendChild(newAnchors);
            newAnchors.innerHTML = document.querySelectorAll(".navBar-list li a")[y].innerHTML;
            newAnchors.addEventListener("click",function(){
                document.querySelectorAll(".navBar-list li a")[y].click();
                setTimeout(function(){
                    document.querySelector(".new-nav-bar-list").innerHTML = "";
                    document.querySelector(".new-nav-bar-list").remove();
                },350)
            })
            newNavBarListItem.appendChild(newListItems);
        }
    }else{
        document.querySelector(".new-nav-bar-list").style.transform = 'scale(.002,0.002)';
        setTimeout(function(){
            document.querySelector(".new-nav-bar-list").style.display = 'none';
        },300)
        setTimeout(function(){
            document.querySelector(".new-nav-bar-list").innerHTML = "";
            document.querySelector(".new-nav-bar-list").remove();
        },350)
    }
    //Removing The Responsive NavBar While resizing
    window.onresize = ()=>{
        document.querySelector(".new-nav-bar-list").remove();
    } 
}
let sliderRightBtn = document.getElementById("right");
let sliderleftBtn = document.getElementById("left");

sliderRightBtn.style.color = "#777";

sliderleftBtn.onclick=()=>{
    sliderRightBtn.setAttribute("disabled",'false');
    sliderRightBtn.style.color = "#EEE";
    document.querySelector(".intro").classList.add("go-left");
    document.querySelector(".brief-about").classList.add("go-center");
    sliderleftBtn.setAttribute("disabled",'true');
    sliderleftBtn.style.color = "#777";
}
sliderRightBtn.onclick=()=>{
    sliderleftBtn.setAttribute("disabled",'false');
    sliderleftBtn.style.color = "#EEE";
    document.querySelector(".brief-about").classList.remove("go-center");
    document.querySelector(".intro").classList.remove("go-left");
    sliderRightBtn.setAttribute("disabled",'true');
    sliderRightBtn.style.color = "#777";
}

let aboutlistItems = document.querySelectorAll(".about-list-items li");
let rightContainerChildrens = document.querySelector(".right-container").children;

aboutlistItems.forEach((activeItem,index)=>{
    activeItem.addEventListener("click",function(){
        aboutlistItems.forEach((deleteActive)=>{
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
            let skillsBarsFull = document.querySelectorAll(".value");
            if(rightContainerChildrens[1].classList.contains("active")){
                setTimeout(()=>{
                    skillsBarsFull.forEach((skillBarValue)=>{
                        skillBarValue.style.width = skillBarValue.previousElementSibling.getAttribute("data-value");
                        skillBarValue.style.opacity = 1
                    })
                },200)
            }else{
                skillsBarsFull.forEach((skillBarValue)=>{
                    skillBarValue.style.width = 0;
                    skillBarValue.style.opacity = 0
                })
            }
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
for(let x = 0; x < projectsContainerChildren.children.length; x++){
    projectsContainerChildren.children[x].addEventListener("click",()=>{
        window.open(projectsContainerChildren.children[x].getAttribute("data-link"),"_blank")
    });
    projectsContainerChildren.children[x].children[2].addEventListener("click",()=>{
        window.open(projectsContainerChildren.children[x].getAttribute("data-link"),"_blank")
    });
}
let returnTop = document.createElement("button");
returnTop.classList.add("glyphicon")
returnTop.classList.add("glyphicon-chevron-up")
returnTop.setAttribute("id","scroll-to-top");
returnTop.addEventListener("click",function(){
    document.documentElement.scrollTop = 0
})
window.onscroll = ()=>{
    if(window.scrollY > 0){
            document.body.appendChild(returnTop)
    }else{
        returnTop.remove();
    }
    

    let clientHeight = document.documentElement.clientHeight;

    let aboutTOP = document.querySelector("#about").getBoundingClientRect().top;
    let aboutHeight = document.querySelector("#about").getBoundingClientRect().height;

    let servicesTOP = document.querySelector("#services").getBoundingClientRect().top;
    let servicesHeight = document.querySelector("#services").getBoundingClientRect().height;

    let contactTOP = document.querySelector("#contact").getBoundingClientRect().top;
    let contactHeight = document.querySelector("#contact").getBoundingClientRect().height;

    if(clientHeight > aboutTOP + aboutHeight * 1/4){
        document.querySelector("#about .about-header").style.opacity = 1
        document.querySelector("#about .about-list-items").style.left = "0"
        document.querySelector("#about .right-container").style.right = "0"
    }else{
        document.querySelector("#about .about-header").style.opacity = 0;
        document.querySelector("#about .about-list-items").style.left = "-108%"
        document.querySelector("#about .right-container").style.right = "-200%"
    }

    if(clientHeight > servicesTOP + servicesHeight * 1/4){
        document.querySelector("#services .services-header").style.opacity = 1;
        document.querySelector("#services .services-container").style.left = '0';
        setTimeout(function(){
            document.querySelector("#services .services-container").style.transform = 'scale(1,1)';
        },500)
    }else{
        document.querySelector("#services .services-header").style.opacity = 0;
        document.querySelector("#services .services-container").style.left = '-100%';
        document.querySelector("#services .services-container").style.transform = 'scale(.002,.002)';
    }

    if(clientHeight > contactTOP + contactHeight * 1/4){
        document.querySelector("#contact .contact-header").style.opacity = 1;
        document.querySelector("#contact .emails-container").classList.add("startAnimation");
        document.querySelector("#contact .message").style.transform="scale(1,1)"
    }else{
        document.querySelector("#contact .contact-header").style.opacity = 0;
        document.querySelector("#contact .emails-container").classList.remove("startAnimation");
        document.querySelector("#contact .message").style.transform="scale(.002,.002)"
    }

}