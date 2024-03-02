// let currentStep = 1;

// function nextStep() {
//   document.getElementById(`step${currentStep}`).classList.add('hidden');
//   currentStep++;
//   document.getElementById(`step${currentStep}`).classList.remove('hidden');
// }

// function submitForm() {
//   const dietaryRestrictions = document.getElementById('dietary-restrictions').value;
//   const eatingHabits = document.getElementById('eating-habits').value;
//   const additionalPreferences = document.getElementById('additional-preferences').value;

//   const userData = {
//     dietaryRestrictions,
//     eatingHabits,
//     additionalPreferences
//   };

//   // Store user data in localStorage (simulating local storage)
//   localStorage.setItem('userData', JSON.stringify(userData));

//   // For demonstration purposes, let's alert the user and redirect to a thank you page
//   alert('Thank you for providing your information!');
//   window.location.href = 'thankyou.html';
// }

// function skipGuide() {
//   document.getElementById('guide').classList.add('hidden');
// }


// I think this is better 

// let currentStep = 0;

// function nextStep() {
//   const currentStepElement = document.getElementById(`step${currentStep}`);
//   if (currentStepElement) {
//     currentStepElement.classList.add('hidden');
//   }
//   currentStep++;
//   const nextStepElement = document.getElementById(`step${currentStep}`);
//   if (nextStepElement) {
//     nextStepElement.classList.remove('hidden');
//   }
// }

// function submitForm() {
//   const dietaryRestrictions = document.getElementById('dietary-restrictions').value;
//   const eatingHabits = document.getElementById('eating-habits').value;
//   const additionalPreferences = document.getElementById('additional-preferences').value;

//   const userData = {
//     dietaryRestrictions,
//     eatingHabits,
//     additionalPreferences
//   };

//   // Store user data in local JSON file (simulating local storage)
//   localStorage.setItem('userData', JSON.stringify(userData));

//   // For demonstration purposes, let's alert the user and redirect to a thank you page
//   alert('Thank you for providing your information!');
//   window.location.href = 'thankyou.html';
// }

// function skipGuide() {
//   const guideElement = document.getElementById('guide');
//   if (guideElement) {
//     guideElement.classList.add('hidden');
//   }
//   nextStep(); // Show the first step of the onboarding process
// }






// lets try this


 let currentStep = 0;

function nextStep() {
  const currentStepElement = document.getElementById(`step${currentStep}`);
  if (currentStepElement) {
    currentStepElement.classList.add('hidden');
  }
  currentStep++;
  const nextStepElement = document.getElementById(`step${currentStep}`);
  if (nextStepElement) {
    nextStepElement.classList.remove('hidden');
  }
}

function submitForm() {
  const dietaryRestrictions = document.getElementById('dietary-restrictions').value;
  const eatingHabits = document.getElementById('eating-habits').value;
  const additionalPreferences = document.getElementById('additional-preferences').value;

  const userData = {
    dietaryRestrictions,
    eatingHabits,
    additionalPreferences
  };

  // Retrieve existing user data from local storage
  let userDataArray = [];
  const existingUserData = localStorage.getItem('userData');
  
  if (existingUserData) {
    // Parse existing user data into an array
    userDataArray = JSON.parse(existingUserData);
    
    // Check if userDataArray is not an array (e.g., if local storage was tampered with)
    if (!Array.isArray(userDataArray)) {
      // If userDataArray is not an array, initialize it as an empty array
      userDataArray = [];
    }
  }

  // Add the new user data to the array
  userDataArray.push(userData);

  // Store the updated user data back into local storage
  localStorage.setItem('userData', JSON.stringify(userDataArray));

  // Save data to a local JSON file (for demonstration purposes)
  saveDataToLocalFile(userDataArray);

  // For demonstration purposes, let's alert the user and stay on the same page
  alert('Thank you for providing your information!');
  window.location.href = 'home.html';

}

function saveDataToLocalFile(userDataArray) {
  // Serialize user data array into JSON format
  const jsonData = JSON.stringify(userDataArray, null, 2);

  // Create a Blob object with the JSON data
  const blob = new Blob([jsonData], { type: 'application/json' });

  // Create a temporary URL for the Blob object
  const url = URL.createObjectURL(blob);

  // Create an anchor element
  const a = document.createElement('a');
  a.href = url;
  a.download = 'userdata.json'; // Specify the filename

  // Programmatically click the anchor element to trigger download
  a.click();

  // Clean up resources
  URL.revokeObjectURL(url);
}




function skipGuide() {
  const guideElement = document.getElementById('guide');
  if (guideElement) {
    guideElement.classList.add('hidden');
  }
  nextStep(); // Show the first step of the onboarding process
}



// Function to show the full instructions
function showFullInstructions() {
  // Hide the "Skip Guide" button
  document.querySelector("#guide button:first-of-type").style.display = "none";
  // Show the full instructions
  document.getElementById("fullInstructions").style.display = "block";

  document.querySelector("#showFullInstructions-btn").style.display = "none";
}

