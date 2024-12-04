const phaseQuestions = {
    basic: [
  { "question": "1. Which of the following best summarizes the need for the project?", "options": ["Modernizing the system to meet current and future water demand efficiently.", "Expanding the road network to access more areas.", "Improving sewage treatment facilities for flood resilience.", "Building a new reservoir for tourism purposes."], "answer": "Modernizing the system to meet current and future water demand efficiently." },
  { "question": "2. What is the first step in identifying the components for implementing the water supply project in the case study given?", "options": ["Conducting community meetings", "Assessing gaps in the existing water supply infrastructure", "Estimating project costs", "Preparing financial reports"], "answer": "Assessing gaps in the existing water supply infrastructure" },
  { "question": "3. What is the role of SCADA systems in this water supply project?", "options": ["Provide water storage solutions", "Automate monitoring and management of water distribution", "Ensure treatment of river water", "Increase the storage capacity of OHTs"], "answer": "Automate monitoring and management of water distribution" },
  { "question": "4. What is the purpose of constructing feeder mains in this water supply project?", "options": ["To connect individual households to the main water source", "To transport water from source to storage facilities", "To serve as emergency reservoirs", "To ensure groundwater recharge"], "answer": "To transport water from source to storage facilities" },
  { "question": "5. Why is it important to map the existing pipeline network in this project before implementation?", "options": ["To calculate construction costs", "To identify outdated and inefficient infrastructure", "To align with cultural heritage preservation laws", "To find optimal locations for OHTs"], "answer": "To identify outdated and inefficient infrastructure" },
     ],
    intermediate: [
  { "question": "1. Which of the following is a major risk during the design stage of the project in the case study given?", "options": ["Inadequate water demand estimation", "Construction delays due to weather", "Lack of proper water treatment methods", "Environmental degradation"], "answer": "Inadequate water demand estimation" },
  { "question": "2. During the design phase, what risk might arise if the water demand estimation method is flawed?", "options": ["Short-term supply sufficiency", "Excessive water distribution capacity", "Underestimation of future demand", "Over engineering the system"], "answer": "Underestimation of future demand" },
  { "question": "3. What risk may arise during the implementation phase regarding the SCADA system?", "options": ["Lack of automation", "Failure to integrate with existing infrastructure", "Excessive control over the water system", "Increased manual monitoring requirements"], "answer": "Failure to integrate with existing infrastructure" },
  { "question": "4. What risk could arise during the implementation phase regarding balancing water distribution across all zones in the case study given?", "options": ["Uneven pressure in different zones", "Excessive water supply to some zones", "Adequate water pressure throughout", "Increased cost of distribution"], "answer": "Uneven pressure in different zones" },        
    ],
    advanced: [
  { "question": "1. What is an effective strategy to mitigate the risk of unexpected geological conditions during the construction phase?", "options": ["Conducting thorough geotechnical investigations before construction begins", "Ignoring geological surveys to save costs", "Relying on only visual inspection of the site", "Starting construction without any preliminary studies"], "answer": "Conducting thorough geotechnical investigations before construction begins" },
  { "question": "2. How can noise and air pollution during construction be mitigated?", "options": ["By using quieter equipment, setting noise limits, and applying dust control measures", "By ignoring noise and pollution regulations", "By increasing work hours to finish construction faster", "By constructing without regard to local environmental standards"], "answer": "By using quieter equipment, setting noise limits, and applying dust control measures" },
  { "question": "3. How can the risk of failure to integrate the SCADA system with existing infrastructure be mitigated?", "options": ["By conducting a detailed system compatibility study and pilot testing before full implementation", "By implementing SCADA without prior compatibility checks", "By reducing the scope of SCADA integration", "By relying on manual control instead of automation"], "answer": "By conducting a detailed system compatibility study and pilot testing before full implementation" },
    ]
};

// Global Variables
let currentQuestionIndex = 0;
let score = 0;
let totalScore = 0; // Track total score for the entire game
let currentPhase = "basic";
let timer;
let timeLeft = 30;
let completedPhases = { basic: false, intermediate: false, advanced: false };
let startTime;
let endTime;
let beepSound = new Audio("beep.mp3"); // Beep sound for the timer
beepSound.volume = 0.2; // Set initial volume for beep


// Audio Elements
const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");
const backgroundMusic = new Audio("music.mp3");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.1; // Set volume to 20% (range is 0.0 to 1.0)


// Navigation Functions
function navigateToScenario() {
    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const designation = document.getElementById("designation").value;

    if (!name || !department || !designation) {
        alert("Please enter your name, designation, and department.");
        return;
    }

    startTime = Date.now();
    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("scenario-page").style.display = "flex";
}

function showQuiz() {
    document.getElementById("quiz-container").style.display = "flex";
    document.getElementById("scenario-page").style.display = "none";
    startMusic();
}

function showScenarioPage() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("scenario-page").style.display = "flex";
    stopMusic();
}

function showCongratulationsPage() {
    // Hide the quiz container and show the congratulations page
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("congratulations-page").style.display = "flex";

    // Stop music on the Congratulations Page
    stopMusic();

    // Record the end time and calculate the total time taken
    endTime = Date.now(); // Record the end time of the game
    const totalTime = Math.round((endTime - startTime) / 1000); // Time in seconds

    // Retrieve player name
    const name = document.getElementById("name").value;

    // Convert total time to minutes and seconds format
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;

    const timeTaken = minutes > 0 ? `${minutes} minutes and ${seconds} seconds` : `${seconds} seconds`;

    // Update the congratulatory message dynamically
    const message = `
        Thank you, <strong>${name}</strong>, you have successfully completed the game!
        <br>Your total score is <strong>${totalScore}</strong>, and you took <strong>${timeTaken}</strong> to complete the game.
    `;
    document.getElementById("congratulations-message").innerHTML = message;

    // Set and display the GIF above the congratulatory message
    const congratulationsGif = document.getElementById("congratulations-gif");
    if (congratulationsGif) {
        congratulationsGif.src = "celebration.gif"; // Path to your GIF file
        congratulationsGif.style.display = "block"; // Make the GIF visible
    }

    // Log details for debugging or analytics
    console.log(
        `Game completed by ${name} with a total score of ${totalScore} in ${timeTaken}.`
    );
}


// Timer Functions
function resetTimer() {
    clearInterval(timer);
    timeLeft = 30;
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById("time-left").innerText = timeLeft;
    const circleCircumference = 339.12;
    document.getElementById("timer-circle").style.strokeDashoffset =
        circleCircumference - (circleCircumference * timeLeft) / 30;
}

const optionSound = new Audio("option.mp3"); // Make sure this file exists in your project

function playOptionSound() {
    optionSound.currentTime = 0; // Reset sound playback
    optionSound.play();
}

// Quiz Functions
function loadQuestion() {
    const questions = phaseQuestions[currentPhase];

    // If all questions are answered, move to the next phase
    if (currentQuestionIndex >= questions.length) {
        updatePhase();
        return;
    }

    const question = questions[currentQuestionIndex];
    const optionsList = document.getElementById("options");
    const questionElement = document.getElementById("question");
    const nextBtn = document.getElementById("next-btn");
    const timerElement = document.getElementById("timer"); // Timer element

    // Hide the timer initially
    timerElement.style.display = "none";

    // Reset Next button
    nextBtn.disabled = true; // Disable Next button initially
    nextBtn.style.display = "none"; // Hide Next button initially

    // Clear previous options
    optionsList.innerHTML = "";

    // Reset the question and fade it in
    questionElement.innerText = question.question;
    questionElement.style.opacity = 0; // Start hidden
    questionElement.style.transition = "opacity 0.5s ease-in-out";
    setTimeout(() => {
        questionElement.style.opacity = 1; // Fade in
    }, 100);

    // Create options but disable interactions initially
    const optionElements = [];
    question.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerText = option;
        li.style.opacity = 0; // Start hidden
        li.style.transition = "opacity 0.5s ease-in-out";
        li.classList.add("disabled-option"); // Add a disabled class
        li.style.pointerEvents = "none"; // Disable pointer events initially

        // Append to options list
        optionsList.appendChild(li);
        optionElements.push(li);

        // Fade in each option with a delay
        setTimeout(() => {
            li.style.opacity = 1;
            playOptionSound(); // Play sound when option appears
        }, index * 500); // Delay between options
    });

    // Show "Your time starts now" popup after all options are displayed
    const totalOptionDelay = question.options.length * 500; // Total delay for all options
    setTimeout(() => {
        showTimeStartsNowPopup(() => {
            // Enable interactions for options after "Your time starts now" and timer appear
            optionElements.forEach((li) => {
                li.classList.remove("disabled-option"); // Remove the disabled class
                li.style.pointerEvents = "auto"; // Re-enable pointer events
                li.onclick = () => handleOptionSelect(li.innerText, question.answer, li); // Add click handler
            });

            // Reset and play the beep sound for the timer
            beepSound.pause();
            beepSound.currentTime = 0;
            beepSound.play();

            // Show the timer
            timerElement.style.display = "flex"; // Make the timer visible
            resetTimer(); // Start the timer

            // Show the Next button after the timer starts
            nextBtn.style.display = "block"; // Make Next button visible
        });
    }, totalOptionDelay + 500); // Wait for all options to appear
}

function handleOptionSelect(selectedOption, correctAnswer, element) {
    const options = document.querySelectorAll("#options li");

    // Stop the beep sound when an option is selected
    beepSound.pause();
    beepSound.currentTime = 0;

    // Disable further selections
    options.forEach((li) => (li.onclick = null));

    // Highlight the selected option and update the score
    if (selectedOption === correctAnswer) {
        correctSound.play(); // Play correct answer sound
        element.classList.add("correct"); // Add a correct answer style
        score += 10; // Increment score for the current phase
        totalScore += 10; // Increment total score for the entire game
    } else {
        wrongSound.play(); // Play wrong answer sound
        element.classList.add("incorrect"); // Add an incorrect answer style

        // Highlight the correct answer
        options.forEach((li) => {
            if (li.innerText === correctAnswer) li.classList.add("correct");
        });
    }

    // Update the score display
    const scoreDisplay = document.getElementById("score-value");
    if (scoreDisplay) scoreDisplay.innerText = totalScore;

    // Enable the Next button
    const nextBtn = document.getElementById("next-btn");
    nextBtn.disabled = false; // Enable the button after selection
}

function showTimeStartsNowPopup(callback) {
    // Create the popup container
    const popupMessage = document.createElement("div");
    popupMessage.innerText = "Your time starts now!";
    popupMessage.style.position = "fixed";
    popupMessage.style.top = "50%";
    popupMessage.style.left = "50%";
    popupMessage.style.transform = "translate(-50%, -50%)";
    popupMessage.style.fontSize = "3em"; // Make the text big
    popupMessage.style.color = "rgba(255, 255, 255, 0.8)"; // Transparent white text
    popupMessage.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Semi-transparent background
    popupMessage.style.padding = "20px 40px";
    popupMessage.style.borderRadius = "10px";
    popupMessage.style.textAlign = "center";
    popupMessage.style.zIndex = "1000";
    popupMessage.style.opacity = 0; // Start hidden
    popupMessage.style.transition = "opacity 0.5s ease-in-out";

    // Add the popup to the body
    document.body.appendChild(popupMessage);

    // Fade in the popup
    setTimeout(() => {
        popupMessage.style.opacity = 1; // Make visible
    }, 100);

    // Fade out the popup and remove it after 2 seconds
    setTimeout(() => {
        popupMessage.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(popupMessage);
            if (callback) callback(); // Trigger the callback to continue the game
        }, 500); // Wait for fade-out transition
    }, 2000); // Display the popup for 2 seconds
}

function nextQuestion() {
    // Stop the beep sound if it is still playing
    beepSound.pause();
    beepSound.currentTime = 0;

    currentQuestionIndex++;

    if (currentQuestionIndex < phaseQuestions[currentPhase].length) {
        loadQuestion();
    } else {
        updatePhase();
    }

    document.getElementById("next-btn").disabled = true;
}

function updatePhase() {
    completedPhases[currentPhase] = true;

    // Capture the current phase score before resetting
    const phaseScore = score; // Store the phase's current score
    console.log(`Current Phase: ${currentPhase}, Phase Score: ${phaseScore}, Total Score Before Update: ${totalScore}`);

    // Display the phase completion popup with the correct phase score
    showPhaseCompletionPopup(currentPhase, phaseScore, () => {
        if (currentPhase === "basic") {
            document.getElementById("intermediate-btn").disabled = false;
            showScenarioPage(); // Navigate back to the scenario page
        } else if (currentPhase === "intermediate") {
            document.getElementById("advanced-btn").disabled = false;
            showScenarioPage();
        } else {
            showCongratulationsPage(); // Navigate to the Congratulations page
        }

        // Reset the phase-specific score AFTER the popup is closed
        score = 0; // Reset for the next phase
        console.log(`Score Reset to: ${score}`);
        document.getElementById("score-value").innerText = totalScore; // Display the cumulative total score
    });

    console.log(`Total Score After Update: ${totalScore}`);
}

function showPhaseCompletionPopup(phase, phaseScore, callback) {
    // Create the popup container
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "20px 40px";
    popup.style.borderRadius = "10px";
    popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    popup.style.color = "#fff";
    popup.style.textAlign = "center";
    popup.style.fontSize = "1.5em";
    popup.style.zIndex = "1000";
    popup.style.opacity = 0; // Start hidden
    popup.style.transition = "opacity 0.5s ease-in-out";

    // Add the phase completion details
    popup.innerHTML = `
        <h2>Phase Complete!</h2>
        <p>You completed the <strong>${phase}</strong> phase.</p>
        <p>Your score for this phase: <strong>${score}</strong></p>
        <p>Total score so far: <strong>${totalScore}</strong></p>
        <button id="popup-close-btn">Continue</button>
    `;

    // Add the popup to the body
    document.body.appendChild(popup);

    // Fade in the popup
    setTimeout(() => {
        popup.style.opacity = 1;
    }, 100);

    // Close button functionality
    const closeButton = document.getElementById("popup-close-btn");
    closeButton.onclick = () => {
        popup.style.opacity = 0; // Fade out
        setTimeout(() => {
            document.body.removeChild(popup);
            if (callback) callback(); // Trigger the callback after popup removal
        }, 500); // Wait for fade-out transition
    };
}

function startPhase(phase) {
    currentPhase = phase;
    currentQuestionIndex = 0;
    score = 0; // Reset the phase-specific score
    document.getElementById("score-value").innerText = totalScore; // Display cumulative total score
    showQuiz();
    loadQuestion();
}

// Restart Function
function restartQuiz() {
    location.reload();
}

// Music Control Functions
function startMusic() {
    backgroundMusic.play();
}

function stopMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}

// Mute Button Functionality
function toggleMute() {
    backgroundMusic.muted = !backgroundMusic.muted;
    document.getElementById("mute-button").innerText = backgroundMusic.muted ? "Unmute" : "Mute";
}
