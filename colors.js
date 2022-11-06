// Body와 Links로 시작하는 함수들을 모아서 객체로 전환

var Links = {
    setColor:function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        //     alist[i].style.color = color;
        //     i=i+1;
        // }
        // html의 head에 있는 script의 jscript라이브러리를 이용한 a 태그 color 변경에 대해 1줄 코딩
        // javascript의 css함수가 처리 해주는 것임
        $('a').css('color', color);
    }        
}

var Body = {
    setColor:function(color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    }, // Property 구분을 위해 , 사용 
    setBackgroundColor:function(color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color); // backgroundColor 대소문자 주의
    }
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
 //       target.style.backgroundColor = "balck";
        Body.setBackgroundColor('black');
        //target.style.color = 'gray'; // style.color 변경이 안됨(??? why????)
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('powderblue');
        
    } else{
        //target.style.backgroundColor = "white";
        Body.setBackgroundColor('white');
        Body.setColor('black'); // style.color 변경이 안됨(??? why????)
        self.value = 'night';
        Links.setColor('blue');
    }
}