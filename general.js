
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      {
        pageLanguage: 'en',  // Replace 'en' with the source language of your web page.
        includedLanguages: 'ml',  // Malayalam language code
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      'translation'
    );
  }

  function shownavlinks(){
      let navlist2=document.getElementById("navlist2");
      if(navlist2.style.display === "block"){
          navlist2.style.display = "none";
          document.querySelector(".bar").innerHTML = '<i class="fa fa-bars" ></i>';
      }else{
          navlist2.style.display = "block";
          document.querySelector(".bar").innerHTML = '<i class="fa-solid fa-xmark fa"></i>';
      }
  }

  function profileDisplay(){
     let profile = document.querySelector(".profile-details");
     if(profile.style.display === "block"){
      profile.style.display = "none";
     }else{
      profile.style.display = "block";
     }
  }