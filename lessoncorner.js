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
    document.getElementById("requesting").style.display = "none";
    document.getElementById("nameOfStudent").innerHTML = name;
    document.getElementById("timeSpecified").innerHTML = time;
    document.getElementById("notification").style.display="inline-block";
  }
  function withdrawing(){
    document.getElementById("notification").style.display="none";
    document.getElementById("requesting").style.display = "block";
  }
  function cancel(){
    document.getElementById("mentor").style.display = "block";
    document.getElementById("question").style.display = "block";
    document.getElementById("mentor-compelete").style.display = "none";
    document.getElementById("chatWithMentor").style.display = "none";
    document.getElementById("contactMentor").style.display = "none";
  }
  
  
    function navLinks() {
      let element = document.getElementById("navDetails");
      let content = element.querySelectorAll(".pLink");
    
      content.forEach(item => {
        if (item.style.display === "block") {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
      });
      var x = window.matchMedia("(min-width: 600px)")
     
      content.forEach(item => {
        if (x.matches ) { 
            item.style.display = "block";
      } 
    });
    }
    

      
  
  function showDoubt(form){
    let doubtInput = document.getElementById("doubt-input");
    document.getElementById("doubt-input-taken").innerHTML = doubtInput.value;
    document.getElementById("user-now").style.display = 'flex';
    form.reset();
  }
  function feedbackSubmit(form){
    form.reset();
    document.getElementById("feedbackForm").style.display = "none";
    document.getElementById("feedbackResult").style.display = "block";
  }
    let teachersDetailsVar = document.getElementById("teachersDetailsId");

    let doubtSectionVar = document.getElementById("doubtSectionId");

    let feedbackSectionVar = document.getElementById("feedbackSectionId"); 
    
    let navName = document.getElementById("navName");

    document.getElementById("doubtSectionNav").classList.add("navactive");
    
  function teachersDetails(){
    teachersDetailsVar.style.display = 'block';
    doubtSectionVar.style.display = 'none';
    feedbackSectionVar.style.display = 'none';
    document.getElementById("teachersDetailsNav").classList.add("navactive");
    document.getElementById("doubtSectionNav").classList.remove("navactive");
    document.getElementById("feedbackSectionNav").classList.remove("navactive");
    document.getElementById("testSectionNav").classList.remove("navactive");
    navName.innerHTML = "Teacher's Details";
  }
  function doubtSection(){
    teachersDetailsVar.style.display = 'none';
    doubtSectionVar.style.display = 'block';
    feedbackSectionVar.style.display = 'none';
    document.getElementById("teachersDetailsNav").classList.remove("navactive");
    document.getElementById("doubtSectionNav").classList.add("navactive");
    document.getElementById("feedbackSectionNav").classList.remove("navactive");
    document.getElementById("testSectionNav").classList.remove("navactive");
    navName.innerHTML = "Doubts";
  }
  function feedbackSection(){
    teachersDetailsVar.style.display = 'none';
    doubtSectionVar.style.display = 'none';
    feedbackSectionVar.style.display = 'block';
    document.getElementById("teachersDetailsNav").classList.remove("navactive");
    document.getElementById("doubtSectionNav").classList.remove("navactive");
    document.getElementById("feedbackSectionNav").classList.add("navactive");
    document.getElementById("testSectionNav").classList.remove("navactive");
    navName.innerHTML = "Feedback";
  }
  function testSection(){
    teachersDetailsVar.style.display = 'none';
    doubtSectionVar.style.display = 'none';
    feedbackSectionVar.style.display = 'none';
    document.getElementById("teachersDetailsNav").classList.remove("navactive");
    document.getElementById("doubtSectionNav").classList.remove("navactive");
    document.getElementById("feedbackSectionNav").classList.remove("navactive");
    document.getElementById("testSectionNav").classList.add("navactive");
    navName.innerHTML = "Take Chapterwise Test";
  }