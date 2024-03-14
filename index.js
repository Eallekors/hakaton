let hints = {
  level1: ["Martini jaoks ei ole oluline, et parool oleks keeruline, vaid just ülilihtne meeles pidada.",
           "Kui alustad klaviatuuril q-tähega ja lõpetad y-tähega, siis mis lõpuks kokku tuleb?"
          ],
  level2: ["Vanaema armastas öelda, et tema kalleim vara on Anette.",
           "Anette sündis 14 aastat tagasi."
          ],
  level3: ["Esimene osa paroolist – maailma kuulsaima spiooni nimi.",
           "Teine osa paroolist – selle spiooni number, mille järgi teda tuntakse."
          ]
};

let currentHintIndex = {
  level1: 0,
  level2: 0,
  level3: 0
};

function toggleHint(level) {
  let keyImage = document.getElementById(`keyImage${level.charAt(level.length - 1)}`); // Adjust for key image ID
  let currentLevelHints = hints[level];
  let currentIndex = currentHintIndex[level];

  keyImage.title = currentLevelHints[currentIndex];

  // Update current hint index for next hover
  currentHintIndex[level] = (currentIndex + 1) % currentLevelHints.length;
}
function getinPu(formId, ansId , outID, mob){
  var x = document.getElementById(formId);
  var text = "";
  var number = x.elements[0].id.slice(-1)
  text += x.elements[0].value;
  console.log( x.elements[0])
  input(text, ansId , outID, number , mob);
}

  
function input(x, ansId, outID ,number , mob){
  let text1 = document.getElementById(ansId).innerHTML; 
  let text2 = x;
  let result = text1.localeCompare(x);

  if (result == 0) {
    var current = document.getElementById('activeDrop').innerHTML; 
    if (current == 'EE'){
      document.getElementById(outID).innerHTML = "Murdsid parooli. Parool oli " + document.getElementById(ansId).innerHTML;
  } else if (current == 'ENG'){
    document.getElementById(outID).innerHTML = "You broke the password. The password was " + document.getElementById(ansId).innerHTML;
  }else if (current == 'UA'){
    document.getElementById(outID).innerHTML = "Так тримати! Ти взламав пароль " ;
  } else {
    document.getElementById(outID).innerHTML = "Murdsid parooli. Parool oli " + document.getElementById(ansId).innerHTML;
  }
    
    changePic("lukk"+number);
    if(mob == 'mob1'){
      changeCSSAfterDelay('mob1', 'mob2');
    }
    if(mob == 'mob2'){
      changeCSSAfterDelay('mob2', 'mob3')
    }
    if(mob == 'mob3'){
     //
    }

  } else {
    
    var current = document.getElementById('activeDrop').innerHTML; 
    if (current == 'EE'){
    document.getElementById(outID).innerHTML = "Ei sisestanud õiget parooli";
  } else if (current == 'ENG'){
    document.getElementById(outID).innerHTML = "You entered the wrong password";
  }else if (current == 'UA'){
    document.getElementById(outID).innerHTML = "Пароль непрвильний. Спробуй ще";
  } else {
    document.getElementById(outID).innerHTML = "Ei sisestanud õiget parooli";
  }
  }}

  var form = document.getElementById("frm1");
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);

  var form = document.getElementById("fm2");
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);
  var form = document.getElementById("frm3");
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);

  var form = document.getElementById("fm4");
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);

  var form = document.getElementById("frm5");
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);

  var form = document.getElementById("fm6");
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);

  
  function changePic(x){
    console.log(x)
    if (x == 'lukk1' || x == 'lukk2'){
      document.getElementById(x).src='./img/10yo_boy_2.png';
    }

    if (x == 'lukk3' || x == 'lukk4'){
      document.getElementById(x).src='./img/16yo_girl_2.png';
    }

    if (x == 'lukk5' || x == 'lukk6'){
      document.getElementById(x).src='./img/shady_dude_2.png';
    }
  }

  function changeCSSAfterDelay(vana, uus) {
    setTimeout(function() {
        var targetElement = document.getElementById(vana);
        var newElement = document.getElementById(uus);
        if (targetElement && newElement) {
            // Hide the initial element
            targetElement.style.display = 'none';
            // Display the new element
            newElement.style.display = 'block';
        }
    }, 3000); // 3000 milliseconds (3 seconds)
}

function language(cur) {
  var current = document.getElementById('activeDrop').innerHTML;
  if (cur != current) {
    document.getElementById('activeDrop').innerHTML = cur;
    
    if (cur == 'EE'){
      document.getElementById("navEE").style.display = 'block';
      document.getElementById("navENG").style.display = 'none';
      document.getElementById("navUA").style.display = 'none';
      console.log(document.getElementsByClassName("manEE")[1])
      var x = document.getElementsByClassName("manEE");
      var i;
      for (i = 0; i < x.length; i++) {
          x[i].style.display = 'block';
      }
      var y = document.getElementsByClassName("manENG");
      var i;
      for (i = 0; i < y.length; i++) {
          y[i].style.display = 'none';
      }
      var z = document.getElementsByClassName("manUA");
      var i;
      for (i = 0; i < z.length; i++) {
          z[i].style.display = 'none';
      }
    }
    else if(cur == 'ENG'){
      document.getElementById("navEE").style.display = 'none';
      document.getElementById("navENG").style.display = 'block';
      document.getElementById("navUA").style.display = 'none';


      var x = document.getElementsByClassName("manEE");
      var i;
      for (i = 0; i < x.length; i++) {
          x[i].style.display = 'none';
      }
      var y = document.getElementsByClassName("manENG");
      var i;
      for (i = 0; i < y.length; i++) {
          y[i].style.display = 'block';
      }
      var z = document.getElementsByClassName("manUA");
      var i;
      for (i = 0; i < z.length; i++) {
          z[i].style.display = 'none';
      }
    }else{
      document.getElementById("navEE").style.display = 'none';
      document.getElementById("navENG").style.display = 'none';
      document.getElementById("navUA").style.display = 'block';

      var x = document.getElementsByClassName("manEE");
      var i;
      for (i = 0; i < x.length; i++) {
          x[i].style.display = 'none';
      }
      var y = document.getElementsByClassName("manENG");
      var i;
      for (i = 0; i < y.length; i++) {
          y[i].style.display = 'none';
      }
      var z = document.getElementsByClassName("manUA");
      var i;
      for (i = 0; i < z.length; i++) {
          z[i].style.display = 'block';
      }
    }
  }else return
}

function changeActive(x){

  var element = document.querySelector(x);
  //console.log(element)
  element.classList.replace("dropdown-item active", "dropdown-item");
 /* var element = document.querySelector(y);
  element.classList.replace("dropdown-item active", "dropdown-item");*/
}

document.addEventListener('DOMContentLoaded', function() {
  var footer = document.getElementById('footer');
  var popup = document.getElementById('popup');

  footer.addEventListener('click', function() {
      // Toggle the visibility of the popup
      if (popup.style.display === 'block') {
          popup.style.display = 'none';
      } else {
          popup.style.display = 'block';
      }
  });
});
