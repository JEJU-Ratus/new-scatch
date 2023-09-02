const header = document.getElementById('header'),
saleItem = document.getElementById('saleItem'),// header__menu-item index.html 31줄
saleLink = document.getElementById('saleLink'), // header__menu-link index.html 31줄
subMenu = document.getElementById("subMenu");// header__submenu index.html 32줄

let lastScrollTop = 0; //기준이되는 현재 스크롤의 위치

window.addEventListener('scroll',function(){
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){ // 스크롤 한 수치가 기존의 위치에 비교하면 어떤지
      header.style.top= "-54.4px"; // 스크롤 한 수치가 기존의 위치보다 수가 크다면 -> 헤더의 높이만큼 탑을 - 값을 줌
  }
  else{
    header.style.top = "0"; // 스크롤 수치가 기존의 위치보다 수가 작다면 -> 헤더를 다시 원래의 자리로
  }
  lastScrollTop = scrollTop; // 스크롤 수치를 다시 기준으로 삼는다.
});

// mouseenter/mouseleave는 자식요소까지 상속이 되어서 부모요소에 들어갔을 때 동작하며, 자식요소와 부모요소 모두에서 빠져 나왔을 때 동작한다.
saleItem.addEventListener('mouseenter',function(){ 
  saleLink.style.backgroundColor = "#ca5bec57";
  subMenu.style.display = "block";
});
saleItem.addEventListener('mouseleave',function(){
  saleLink.style.backgroundColor = "rgba( 255, 255, 255, 0)";
  subMenu.style.display = "none";
});