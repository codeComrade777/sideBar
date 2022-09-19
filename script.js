const showMenu=document.querySelector('#show-menu');
const sideMenu=document.querySelector('#side-menu');
const closeBtn=document.querySelector('#close-btn')

    showMenu.addEventListener('click',()=>{
        sideMenu.classList.add('active');
        sideMenu.classList.add('active');
    })

    closeBtn.addEventListener('click',()=>{
        sideMenu.classList.remove('active');
    })
