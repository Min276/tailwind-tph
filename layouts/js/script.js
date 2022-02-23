function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? 
    (e.name = "close",list.classList.add('top-[80px]') ,
    list.classList.add('opacity-100')) :
    ( e.name = "menu" ,list.classList.remove('top-[80px]'),
    list.classList.remove('opacity-100'))
  }

 
  let dropdownButton = document.querySelector("#dropdownButton");
  let dropdownMenu = document.querySelector("#dropdown");
  dropdownButton.addEventListener("click", () => {
      dropdownMenu.classList.toggle("hidden")
  });
