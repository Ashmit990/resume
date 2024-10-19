



let fullName = document.querySelector("#inputName");
let profession = document.querySelector("#inputProf");
let eMail = document.querySelector("#inputEmail");
let phoneNo = document.querySelector("#inputPh");
let linkedIn = document.querySelector("#inputLink");
let gitHub = document.querySelector("#inputGit");
let introductionPara = document.querySelector("#inputProfile");
let postOne = document.querySelector("#inputExp1");
let postOneDuration = document.querySelector("#inputDur1");
let postOneworkOne = document.querySelector("#one-inputW1");
let postOneworkTwo = document.querySelector("#one-inputW2");
let postOneworkThree = document.querySelector("#one-inputW3");
let postTwo = document.querySelector("#inputExp2");
let postTwoDuration = document.querySelector("#inputDur2");
let postTwoworkOne = document.querySelector("#two-inputW1");
let postTwoworkTwo = document.querySelector("#two-inputW2");
let postTwoworkThree = document.querySelector("#two-inputW3");
let education = document.querySelector("#inputEdu");
let yearOfCompletion = document.querySelector("#inputTime");
let universityName = document.querySelector("#inputUni");
let skillsList = document.querySelector("#inputSkill");

// Get all resume display elements
let nameDisplay = document.querySelector("#title");
let professionDisplay = document.querySelector("#post");
let emailDisplay = document.querySelector("#email");
let phoneDisplay = document.querySelector("#phone");
let linkedinDisplay = document.querySelector("#linkedin");
let githubDisplay = document.querySelector("#github");
let introductionDisplay = document.querySelector("#whtWork");
let job1Display = document.querySelector(".job1");
let duration1Display = document.querySelector(".time-period1");
let work1Display1 = document.querySelector(".job1-work1");
let work1Display2 = document.querySelector(".job1-work2");
let work1Display3 = document.querySelector(".job1-work3");
let job2Display = document.querySelector(".job2");
let duration2Display = document.querySelector(".time-period2");
let work2Display1 = document.querySelector(".job2-work1");
let work2Display2 = document.querySelector(".job2-work2");
let work2Display3 = document.querySelector(".job3-work3");
let educationDisplay = document.querySelector("#graduation");
let universityDisplay = document.querySelector("#University");
let yearDisplay = document.querySelector("#Duration");
let skillsDisplay = document.querySelector(".skill");

let resumeContainer=document.querySelector(".resume-container")

// Event listeners for real-time update
fullName.addEventListener('input', () => {
    nameDisplay.textContent = fullName.value;
});

profession.addEventListener('input', () => {
    professionDisplay.textContent = profession.value;
});

eMail.addEventListener('input', () => {
    emailDisplay.textContent = eMail.value;
});

phoneNo.addEventListener('input', () => {
    phoneDisplay.textContent = phoneNo.value;
});

linkedIn.addEventListener('input', () => {
    linkedinDisplay.textContent = linkedIn.value;
    linkedinDisplay.href = linkedIn.value;
});

gitHub.addEventListener('input', () => {
    githubDisplay.textContent = gitHub.value;
    githubDisplay.href = gitHub.value;
});

introductionPara.addEventListener('input', () => {
    let formattedText = introductionPara.value.replace(/\n/g, "<br>");
    introductionDisplay.innerHTML = formattedText;
});

postOne.addEventListener('input', () => {
    job1Display.textContent = postOne.value;
});

postOneDuration.addEventListener('input', () => {
    duration1Display.textContent = postOneDuration.value;
});

postOneworkOne.addEventListener('input', () => {
    work1Display1.textContent = postOneworkOne.value;
});

postOneworkTwo.addEventListener('input', () => {
    work1Display2.textContent = postOneworkTwo.value;
});

postOneworkThree.addEventListener('input', () => {
    work1Display3.textContent = postOneworkThree.value;
});

postTwo.addEventListener('input', () => {
    job2Display.textContent = postTwo.value;
});

postTwoDuration.addEventListener('input', () => {
    duration2Display.textContent = postTwoDuration.value;
});

postTwoworkOne.addEventListener('input', () => {
    work2Display1.textContent = postTwoworkOne.value;
});

postTwoworkTwo.addEventListener('input', () => {
    work2Display2.textContent = postTwoworkTwo.value;
});

postTwoworkThree.addEventListener('input', () => {
    work2Display3.textContent = postTwoworkThree.value;
});

education.addEventListener('input', () => {
    educationDisplay.textContent = education.value;
});

yearOfCompletion.addEventListener('input', () => {
    yearDisplay.textContent = yearOfCompletion.value;
});

universityName.addEventListener('input', () => {
    universityDisplay.textContent = universityName.value;
});

skillsList.addEventListener('input', () => {
    skillsDisplay.textContent = skillsList.value;
});

console.log("Resume Container:", resumeContainer.innerHTML);


let generateAnother = document.createElement("button");
generateAnother.innerText = "Generate Another Resume";
generateAnother.classList.add("another");
generateAnother.style.display = "block";

resumeContainer.appendChild(generateAnother);

generateAnother.addEventListener("click", function () {
    
    
    // Clear all input fields
    fullName.value = "";
    profession.value = "";
    eMail.value = "";
    phoneNo.value = "";
    linkedIn.value = "";
    gitHub.value = "";
    introductionPara.value = "";
    postOne.value = "";
    postOneDuration.value = "";
    postOneworkOne.value = "";
    postOneworkTwo.value = "";
    postOneworkThree.value = "";
    postTwo.value = "";
    postTwoDuration.value = "";
    postTwoworkOne.value = "";
    postTwoworkTwo.value = "";
    postTwoworkThree.value = "";
    education.value = "";
    yearOfCompletion.value = "";
    universityName.value = "";
    skillsList.value = "";

    // Clear all displayed resume fields
    nameDisplay.textContent = "";
    professionDisplay.textContent = "";
    emailDisplay.textContent = "";
    phoneDisplay.textContent = "";
    linkedinDisplay.textContent = "";
    githubDisplay.textContent = "";
    introductionDisplay.textContent = "";
    job1Display.textContent = "";
    duration1Display.textContent = "";
    work1Display1.textContent = "";
    work1Display2.textContent = "";
    work1Display3.textContent = "";
    job2Display.textContent = "";
    duration2Display.textContent = "";
    work2Display1.textContent = "";
    work2Display2.textContent = "";
    work2Display3.textContent = "";
    educationDisplay.textContent = "";
    universityDisplay.textContent = "";
    yearDisplay.textContent = "";
    skillsDisplay.textContent = "";

});







