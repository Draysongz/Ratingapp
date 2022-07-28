var buttons= document.querySelectorAll('#btn');
var display= document.getElementById("display")
buttons.forEach((e)=>{
  e.addEventListener('click', ()=>{
          if(e.id=='btn'){
                  e.setAttribute('id', 'active-btn')
          } 
          display.innerHTML= `You selected ${e.value} out of 5`
  })
  })


let submit= document.querySelector('#submit-btn')
submit.addEventListener('click', toggle)

function toggle() {
    var x = document.getElementById("firstDiv");
    var y = document.getElementById("secondDiv")
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display="none";
    } else {
      x.style.display = "none";
      y.style.display="block"

    }
  }
