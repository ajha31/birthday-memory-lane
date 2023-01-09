
var maindiv=""
addEventListener('DOMContentLoaded', (event) => {
  const element = document.getElementById("img");
  maindiv = $('#img').clone(true); //Save the form
  $('#img').remove();
});

  
var a=[ {date:"to  ",place:"be",event:'continued...'},
        {date:"21/04/22",place:"Novotel",event:'first Client visit' },
        {date:"01/05/22",place:"Dada bouidi",event:'first lunch together'},
        {date:"29/07/22",place:"Bongs" ,event:'Chapter 1 begins :)'},
        {date:"29/09/22",place:"Candoor compound" ,event:'durga puja celebration'},
        {date:"04/10/22",place:"Sukanya House" ,event:'Nawmi'},
        {date:"14/10/22",place:"Bongs",event:'Meetup with Priyanka di' },
        {date:"18/10/22",place:"Office Canteen",event:"Oark's farewell" },
        {date:"21/10/22",place:"office ground",event:'diwali celebration' },
        {date:"08/11/22",place:"Pride Plaza" ,event:'2nd Client visit'},
        {date:"31/03/22",place:"ahritolla",event:"New year's Eve" },
        
    ]
    //dynamic text changes
    function dynamicText() {
      setTimeout(() => {
        var b=document.getElementById('label')
        var i=10;
        b.innerHTML=`<ul><li>${a[i].date}</li><li>${a[i].place}</li><li>${a[i].event}</li><ul>`;
        var id = setInterval(frame, 10000);
        function frame() {
          if (i == 0) {
            clearInterval(id);
          } else {
            i--; 
            b.innerHTML=`<ul><li>${a[i].date}</li><li>${a[i].place}</li><li>${a[i].event}</li><ul>`;
          } 
        }
      }, 4000);
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

 