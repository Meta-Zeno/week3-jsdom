
// ACTIVITY 1
const toggleBtn = document.getElementById("toggleBtn");
const toggleImg = document.querySelector("#toggleImg");

// adding a click event listener to the button
toggleBtn.addEventListener("click", () => {
    // checking if the current image opacity property value is "0"
    // if it is then we need to make it visible and set it to "1", if not then set it to "0"
    if(toggleImg.style.opacity === "0"){
        toggleImg.style.opacity = "1"
    } else {
        toggleImg.style.opacity = "0"
    }

})


// ACTIVITY 2

// imageToChange uses getElementsByClassName which returns an array so we need to add the [0] to target the first element in the array
const imageToChange = document.getElementsByClassName("imageToChange")[0];
// querySelector finds the first match and only one element even if the class is used multiple times in HTML
// you also need to target the element like you would in CSS so for a class use the dot .inputImg
const inputImg = document.querySelector(".inputImg");
const submitImg = document.getElementById("submitImg");

// apply click event to the submitImg button
submitImg.addEventListener("click", () => {
    // set the image src attribute to the value that the input holds (what the user has typed in there)
    imageToChange.src = inputImg.value;
    // after the image has updated, reset the input to an empty string ready for the next image url
    inputImg.value = "";
})



  document.addEventListener('keypress', event => {
     // Displaying welcome message!
    document.getElementById('welcome-message').style.display = 'none';
  
    // Displaying all the keypress information from the user (input)
    const keypressInfo = document.getElementById('keypress-info');
    keypressInfo.innerHTML = `
      <p>Event Code: ${event.code}</p>
      <p>Key: ${event.key}</p>

      <p>CharCode: ${event.charCode || 'N/A'}</p>`;
  });
  
//   the charCode is deprecated so genereally avoid using this! this was a ref from "w3 schools"























