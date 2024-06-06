let sideNavBar=document.querySelector(".sideNavBar");
let openNavBarBttn=document.querySelector(".sideNavBarIcon").addEventListener("click",()=>{
    if(!sideNavBar.classList.contains('openSideNavBar')){
        sideNavBar.classList.add('openSideNavBar')
    }else{
        sideNavBar.classList.remove('openSideNavBar')
    }
})