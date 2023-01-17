
var maindiv=""
function rem(params) {
  maindiv = $('#img').clone(true); //Save the form
  $('#img').remove();
}
addEventListener('DOMContentLoaded', (event) => {
 rem();
});

  
var a=[ {date:"To  ",place:"Be",event:'Continued...'},
        {date:"21/04/22",place:"Novotel",event:'first Client visit' },
        {date:"01/05/22",place:"Dada bouidi",event:'first lunch together'},
        {date:"29/07/22",place:"Bongs" ,event:'Chapter 1 Begins :)'},
        {date:"29/09/22",place:"Candor Compound" ,event:'Durga Puja Celebration'},
        {date:"04/10/22",place:"Sukanya House" ,event:'Nawmi'},
        {date:"14/10/22",place:"Bongs",event:'Meetup With Priyanka di' },
        {date:"21/10/22",place:"Office Ground",event:'Diwali Celebration' },
        {date:"08/11/22",place:"Pride Plaza" ,event:'2nd Client Visit'},
        {date:"31/03/22",place:"Ahritolla",event:"New year's Eve" },
        {date:"14/01/23",place:"Victoria Memorial",event:"Date" },
        
    ]
    //dynamic text changes
    function dynamicText() {
      setTimeout(() => {
        var b=document.getElementById('label')
        var i=10;
        b.innerHTML=`<ul><li>${a[i].date}</li><li>${a[i].place}</li><li>${a[i].event}</li><ul>`;
        var id = setInterval(frame, 20000);
        function frame() {
          if (i == 0) {
            clearInterval(id);
          } else {
            i--; 
            b.innerHTML=`<ul><li>${a[i].date}</li><li>${a[i].place}</li><li>${a[i].event}</li><ul>`;
          } 
        }
      }, 3000);
    }


    //play button
    var c=document.getElementById('button');
    c.addEventListener('click',click);
    function click(e){
      
      c.remove()
      $('body').prepend(maindiv);
      document.querySelector("#player").play()
      dynamicText()
      
    }
     var audio1 = document.getElementById("player");
     audio1.onended = function() {
       window.location.href="../index.html"
    };
 