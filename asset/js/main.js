const leftBtn = document.getElementsByClassName('slider__leftbtn'),// 왼쪽 화살표 버튼
  rightBtn = document.getElementsByClassName('slider__rightbtn'),// 오른쪽 화살표 버튼
  container = document.getElementById('container'),// 메인페이지의 카드 슬라이드.
  slider__pause = document.getElementsByClassName('slider__pause'), // 슬라이드 on/off 버튼
  allImg = 4; // 모든 이미지의 수

let countImg = 0, // 현재 노출 이미지 번호
  timer = setInterval(auto_slide, 4000), // 슬라이드 자동.
  powerOnOff = 1;



  //재생 및 정지 버튼 조작
  for(let i=0;i<slider__pause.length;i++){
    slider__pause[i].addEventListener('click',function(){
      if(powerOnOff > 0){ // powerOnOff 가 1일때 재생 0일때 정지
        powerOnOff--;
        for(i=0;i<slider__pause.length;i++){
          slider__pause[i].src = "images/play.png";
        }
        clearInterval(timer); //정지
      }
      else{
        powerOnOff++
        for(i=0;i<slider__pause.length;i++){
          slider__pause[i].src = "images/pause.png";
        }
        timer = setInterval(auto_slide, 4000) // 재생
      }
    })
  }

//왼쪽 화살표 클릭
for(i=0;i<leftBtn.length;i++){
  leftBtn[i].addEventListener('click',function(){
    if(countImg > 0){
      countImg--;
      adjust_countImg();
    }
    else{
      countImg = 3;
      adjust_countImg();
    }
  });
}

//오른쪽 화살표 클릭
for(i=0;i<rightBtn.length;i++){
  rightBtn[i].addEventListener('click',function(){
    if(countImg < allImg -1){
      countImg++;
      adjust_countImg();
    }
    else{
      countImg = 0;
      adjust_countImg();
    }
  });
}


// 현재 노출 이미지 번호 조정 함수
function adjust_countImg() {
  container.style.transform = `translate(${countImg * (-100)}vw)`;
  clearInterval(timer);
  if(powerOnOff >0){
    timer = setInterval(auto_slide, 4000);
  }
}

function auto_slide() {
  if (countImg < allImg - 1) {
    countImg++;
    container.style.transform = `translate(${countImg * (-100)}vw)`;
  }
  else {
    countImg = 0;
    container.style.transform = `translate(${countImg * (-100)}vw)`;
  }
}

