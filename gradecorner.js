
function showCaption(){
    document.getElementById("mentor-caption").style.display="inline-block";
  }
  function hideCaption(){
    document.getElementById("mentor-caption").style.display="none";
  }
  const d = new Date();
document.getElementById("date").innerHTML = d.toDateString();
  
function mentor(){
document.getElementById("mentor").style.display = "none";
document.getElementById("mentor-compelete").style.display = "block";
}

function displayMessage(form){
    let msg=document.getElementById("message");
    let display=document.getElementById("text")
    display.innerHTML = msg.value;
    form.reset();
  }
  function chatWithMentor(){
    document.getElementById("question").style.display = "none";
    document.getElementById("chatWithMentor").style.display = "block";      }
  function contactMentor(){
    document.getElementById("question").style.display = "none";
      document.getElementById("contactMentor").style.display = "block";      }

  function notifying(form){
    let name = document.getElementById("name").value;
    let time = document.getElementById("time").value;
    document.getElementById("requesting").classList.add("remove");
    document.getElementById("nameOfStudent").innerHTML = name;
    document.getElementById("timeSpecified").innerHTML = time;
    document.getElementById("notification").style.display="inline-block";
  }

  function cancel(){
    document.getElementById("mentor").style.display = "block";
    document.getElementById("question").style.display = "block";
    document.getElementById("mentor-compelete").style.display = "none";
    document.getElementById("chatWithMentor").style.display = "none";
    document.getElementById("contactMentor").style.display = "none";
  }
  
   function moveToNewWeb() {
      window.location.href = "lessoncorner.html"; 
  };
