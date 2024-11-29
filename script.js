const phaseQuestions = {
    basic: [
    { question: "1. Which of the following best summarizes the need for the project?", options: ["Modernizing the system to meet current and future water demand efficiently.", "Expanding the road network to access more areas.", "Improving sewage treatment facilities for flood resilience.", "Building a new reservoir for tourism purposes."], answer: "Modernizing the system to meet current and future water demand efficiently." },
    { question: "2. What is the first step in identifying the components for implementing the water supply project in Kancheepuram?", options: ["Conducting community meetings", "Assessing gaps in the existing water supply infrastructure", "Estimating project costs", "Preparing financial reports"], answer: "Assessing gaps in the existing water supply infrastructure" },
    { question: "3. What is the role of SCADA systems in the Kancheepuram water supply project?", options: ["Provide water storage solutions", "Automate monitoring and management of water distribution", "Ensure treatment of river water", "Increase the storage capacity of OHTs"], answer: "Automate monitoring and management of water distribution" },
    { question: "4. What is the purpose of constructing feeder mains in the Kancheepuram water supply project?", options: ["To connect individual households to the main water source", "To transport water from source to storage facilities", "To serve as emergency reservoirs", "To ensure groundwater recharge"], answer: "To transport water from source to storage facilities" },
    { question: "5. Why is it important to map the existing pipeline network in Kancheepuram before implementation?", options: ["To calculate construction costs", "To identify outdated and inefficient infrastructure", "To align with cultural heritage preservation laws", "To find optimal locations for OHTs"], answer: "To identify outdated and inefficient infrastructure" },
    { question: "6. What infrastructure supports consistent water pressure and flow across the Kancheepuram project area?", options: ["SCADA systems", "Advanced pumping stations", "Overhead Tanks (OHTs)", "Collector wells"], answer: "Overhead Tanks (OHTs)" },
    { question: "7. What criteria were considered for selecting the location of the collector and infiltration wells in Kancheepuram?", options: ["Proximity to urban areas", "Availability of land for large-scale construction", "Ensuring year-round water availability from the Palar River", "Minimizing environmental disruptions"], answer: "Ensuring year-round water availability from the Palar River" },
    { question: "8. Which of the following is NOT one of the methods used for population projection as specified by the CPHEEO manual?", options: ["Arithmetic Increase Method", "Geometric Increase Method", "Incremental Increase Method", "Logistic Growth Method"], answer: "Logistic Growth Method" },
    { question: "9. What is the primary purpose of population projections in water supply planning?", options: ["To estimate the total number of water treatment plants needed", "To predict the future water demand based on expected population growth", "To calculate the cost of building infrastructure", "To determine the land area required for the water supply network"], answer: "To predict the future water demand based on expected population growth" },
    { question: "10. How does the Arithmetic Increase Method calculate the projected population for Kancheepuram?", options: ["By multiplying the current population by a growth rate", "By adding a fixed number to the population at regular intervals", "By dividing the population by the area", "By using a growth factor based on historical trends"], answer: "By adding a fixed number to the population at regular intervals" },
    { question: "11. How is the floating population demand calculated in terms of water supply for Kanchipuram?", options: ["By multiplying the floating population with 135 lpcd", "By using 10% of the floating population's requirement at 45 lpcd", "By dividing the total floating population by 10%", "By using 45 lpcd for 10% of the permanent population"], answer: "By using 10% of the floating population's requirement at 45 lpcd" },
    { question: "12. If the total water requirement for the ultimate year is 60.36 MLD, and losses are considered to be 10% of the net water requirement, what is the net water requirement before considering losses?", options: ["55.36 MLD", "61.25 MLD", "65.36 MLD", "66.82 MLD"], answer: "61.25 MLD" },
    { question: "13. For how many hours per day is the pumping operation considered for both raw water pumps and clear water pumps?", options: ["12 hours", "18 hours", "20 hours", "23 hours"], answer: "23 hours" },
    { question: "14. How are the pipe sizes and materials for the distribution system selected in this Kancheepuram water supply project?", options: ["Based on the terrain and elevation", "Based on the population density", "Based on techno-economic analysis considering head loss, cost, and pump efficiency", "Based on the availability of materials"], answer: "Based on techno-economic analysis considering head loss, cost, and pump efficiency" },
    { question: "15. What is the purpose of including a standby pump requirement in the design of the pumping machinery?", options: ["To increase energy efficiency", "To ensure continuous operation during maintenance or failure", "To reduce construction costs", "To optimize the number of pumps used"], answer: "To ensure continuous operation during maintenance or failure" },
    { question: "16. What specific criteria are considered to ensure the water source meets the ultimate water supply demand for Kancheepuram?", options: ["Proximity to power supply sources", "Sustainability in seasonal conditions, water yield, and ease of extraction", "Aesthetic quality and cleanliness of the riverbed", "Availability of land for residential and commercial use"], answer: "Sustainability in seasonal conditions, water yield, and ease of extraction" },
    { question: "17. What is the primary function of the SCADA system in the Kancheepuram water supply project?", options: ["To manually control water flow", "To monitor and automate the operation of pumps and valves", "To filter the water supply", "To store water in reservoirs"], answer: "To monitor and automate the operation of pumps and valves" },
    { question: "18. How does SCADA contribute to the efficiency of the Kancheepuram water supply system?", options: ["By replacing the need for manual labor", "By enabling real-time monitoring and remote control of the water supply infrastructure", "By increasing the water pressure in the distribution system", "By reducing the need for water treatment"], answer: "By enabling real-time monitoring and remote control of the water supply infrastructure" },
    { question: "19. What regulatory framework ensures that the Kancheepuram water supply improvement project addresses environmental, social, and climate concerns?", options: ["Environmental and Social Impact Assessment (ESIA)", "Environmental, Climate Change, and Social Management Framework (ECSMF)", "Environmental Protection Plan (EPP)", "Tamil Nadu Urban Development Fund (TNUDF) Policy Framework"], answer: "Environmental, Climate Change, and Social Management Framework (ECSMF)" },
    { question: "20. Which legislation governs pollution control for water resources used in the project, such as the Palar River?", options: ["Forest (Conservation) Act, 1980", "Water (Prevention and Control of Pollution) Act, 1974", "Environment (Protection) Act, 1986", "Air (Prevention and Control of Pollution) Act, 1981"], answer: "Water (Prevention and Control of Pollution) Act, 1974" },
    { question: "21. What act mandates public consultation and the inclusion of mitigation strategies in projects like this water supply improvement?", options: ["The Right to Fair Compensation and Transparency in Land Acquisition Act, 2013", "Environmental Impact Assessment (EIA) Notification, 2006", "Ancient Monuments and Archaeological Sites Act, 2010", "Noise Pollution (Regulation and Control) Rules, 2000"], answer: "Environmental Impact Assessment (EIA) Notification, 2006" },
    { question: "22. What regulation ensures the fair compensation of landowners for land acquisition during the construction of new pipelines or OHTs?", options: ["Land Acquisition Act, 1894", "Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation, and Resettlement Act, 2013", "Forest (Conservation) Act, 1980", "Tamil Nadu Town and Country Planning Act, 1971"], answer: "Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation, and Resettlement Act, 2013" },
    { question: "23. What is the main objective of the Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014, in relation to urban infrastructure projects like the Kancheepuram Water Supply Scheme?", options: ["To regulate the pricing of water supplied to street vendors", "To ensure proper regulation of street vending and provide water supply to vendors in designated areas", "To stop water supply to informal vendors", "To build new water treatment plants for street vendors"], answer: "To ensure proper regulation of street vending and provide water supply to vendors in designated areas" },
    { question: "24. According to the Tamil Nadu Occupational Safety, Health, and Working Conditions Rules 2022, which of the following is essential to ensure worker safety at a water supply construction site?", options: ["Regularly updating water tariffs", "Providing safety training to all workers", "Limiting the number of workers on-site", "Reducing the duration of work shifts"], answer: "Providing safety training to all workers" },
    { question: "25. What international framework governs the climate resilience goals incorporated in the Kancheepuram water project?", options: ["Kyoto Protocol", "Paris Agreement", "World Bank Environmental and Social Framework (ESF)", "UN Sustainable Development Goals (SDGs)"], answer: "World Bank Environmental and Social Framework (ESF)" }
],
intermediate: [
    { question: "1. Which of the following is a major risk during the design stage of the Kancheepuram water supply project?", options: ["Inadequate water demand estimation", "Construction delays due to weather", "Lack of proper water treatment methods", "Environmental degradation"], answer: "Inadequate water demand estimation" },
    { question: "2. During the design phase, what risk might arise if the water demand estimation method is flawed?", options: ["Short-term supply sufficiency", "Excessive water distribution capacity", "Underestimation of future demand", "Over engineering the system"], answer: "Underestimation of future demand" },
    { question: "3. What risk may arise during the implementation phase regarding the SCADA system?", options: ["Lack of automation", "Failure to integrate with existing infrastructure", "Excessive control over the water system", "Increased manual monitoring requirements"], answer: "Failure to integrate with existing infrastructure" },
    { question: "4. What risk could arise during the implementation phase regarding balancing water distribution across all zones of Kancheepuram?", options: ["Uneven pressure in different zones", "Excessive water supply to some zones", "Adequate water pressure throughout", "Increased cost of distribution"], answer: "Uneven pressure in different zones" },
    { question: "5. What environmental risk is associated with the installation of large pipelines and infrastructure for the Kancheepuram Water Supply Project?", options: ["Soil erosion and habitat destruction due to excavation", "Improved biodiversity in the area", "Reduced use of water resources", "Increased vegetation growth"], answer: "Soil erosion and habitat destruction due to excavation" },
    { question: "6. What environmental impact could arise from the construction of overhead tanks (OHTs) in Kancheepuram?", options: ["Deforestation and loss of local flora and fauna", "Excessive rainfall leading to water scarcity", "Introduction of new water species", "Improved air quality in the area"], answer: "Deforestation and loss of local flora and fauna" },
    { question: "7. What is the environmental risk related to water extraction from the Palar River?", options: ["Over-extraction leading to ecosystem disruption", "Minimal water quality impact", "Increased water availability for all urban needs", "Overfilling of the river with sediment"], answer: "Over-extraction leading to ecosystem disruption" },
    { question: "8. In the context of the Kanchipuram Water Supply Project, which category of environmental and social risks would a sub-project involving the construction of 450 km of new HDPE distribution pipelines, 33 km of feeder mains, and 14 new OHTs fall under according to ECSMF's risk classification?", options: ["High Risk", "Substantial Risk", "Moderate Risk", "Low Risk"], answer: "Substantial Risk" },
    { question: "9. What environmental risk may emerge if the Environmental and Social Management Plan (ESMP) is not followed thoroughly?", options: ["Enhanced project profitability", "Violation of environmental laws and increased community unrest", "Quicker project implementation", "Reduced operational costs"], answer: "Violation of environmental laws and increased community unrest" },
    { question: "10. What is a key climate-related risk when designing water supply infrastructure, such as pipelines and storage tanks, in Kancheepuram?", options: ["Infrastructure degradation due to increasing rainfall intensity and flooding", "Decreased energy consumption for pumping water", "Reduced costs for pipeline installation", "No impact on infrastructure stability"], answer: "Infrastructure degradation due to increasing rainfall intensity and flooding" },
    { question: "11. How might the water quality in the Palar River change due to climate change, affecting the Kancheepuram Water Supply Project?", options: ["Decreased water salinity", "Increased contamination of water sources due to flooding and storm runoff", "No change in water quality", "Improved water quality"], answer: "Increased contamination of water sources due to flooding and storm runoff" },
    { question: "12. What risk might occur if public participation and stakeholder engagement are inadequate during the implementation phase?", options: ["Faster project approval", "Increased community resistance leading to delays", "Lower costs for the project", "Successful project completion without any issues"], answer: "Increased community resistance leading to delays" },
    { question: "13. What social risk could arise due to the construction activities in the Kancheepuram Water Supply Project?", options: ["Increased population growth in surrounding areas", "Displacement of street vendors and local businesses without proper compensation", "Reduced access to basic amenities", "Faster community development"], answer: "Displacement of street vendors and local businesses without proper compensation" },
    { question: "14. What social risk might arise if proper compensation and resettlement plans are not provided to communities affected by the Kancheepuram Water Supply Project?", options: ["Increased community support for the project", "Loss of livelihood for displaced individuals leading to social unrest", "Improved community relations", "Enhanced job opportunities for displaced families"], answer: "Loss of livelihood for displaced individuals leading to social unrest" },
    { question: "15. Which measure should be part of the Environmental and Social Management Plan (ESMP) to mitigate risks related to cultural heritage sites near the project area?", options: ["Demolition of cultural heritage sites for construction", "Strict preservation protocols and relocation of affected sites", "Exclusion of all local communities from the project area", "Minimizing project funding"], answer: "Strict preservation protocols and relocation of affected sites" },
],
   advanced: [
    { question: "1. What is an effective strategy to mitigate the risk of unexpected geological conditions during the construction phase?", options: ["Conducting thorough geotechnical investigations before construction begins", "Ignoring geological surveys to save costs", "Relying on only visual inspection of the site", "Starting construction without any preliminary studies"], answer: "Conducting thorough geotechnical investigations before construction begins" },
    { question: "2. How can noise and air pollution during construction be mitigated?", options: ["By using quieter equipment, setting noise limits, and applying dust control measures", "By ignoring noise and pollution regulations", "By increasing work hours to finish construction faster", "By constructing without regard to local environmental standards"], answer: "By using quieter equipment, setting noise limits, and applying dust control measures" },
    { question: "3. How can the risk of failure to integrate the SCADA system with existing infrastructure be mitigated?", options: ["By conducting a detailed system compatibility study and pilot testing before full implementation", "By implementing SCADA without prior compatibility checks", "By reducing the scope of SCADA integration", "By relying on manual control instead of automation"], answer: "By conducting a detailed system compatibility study and pilot testing before full implementation" },
    { question: "4. What is a key strategy to mitigate the risk of insufficient integration of new and old systems in the water supply network?", options: ["By conducting detailed system audits and compatibility checks before integrating systems", "By assuming all systems will be compatible without testing", "By ignoring integration requirements", "By reducing the scope of the integration"], answer: "By conducting detailed system audits and compatibility checks before integrating systems" },
    { question: "5. How can regulatory non-compliance and project delays due to a poorly conducted environmental and social impact assessment (ESIA) be mitigated?", options: ["By conducting a thorough ESIA and integrating stakeholder feedback into the planning process", "By skipping the ESIA process", "By limiting public consultations", "By delaying the ESIA until the construction phase"], answer: "By conducting a thorough ESIA and integrating stakeholder feedback into the planning process" },
    { question: "6. How can the violation of environmental laws and increased community unrest be mitigated through the Environmental and Social Management Plan (ESMP)?", options: ["By ensuring strict adherence to environmental regulations and incorporating community feedback into project planning", "By reducing the scope of environmental and social assessments", "By ignoring community concerns", "By postponing environmental assessments until after construction begins"], answer: "By ensuring strict adherence to environmental regulations and incorporating community feedback into project planning" },
    { question: "7. What mitigation strategy can be implemented to address the risk of increased contamination of water sources during construction?", options: ["Installing proper waste disposal and wastewater management systems at construction sites", "Allowing wastewater to flow into nearby rivers", "Ignoring proper waste management protocols", "Reducing the number of water sources used for the project"], answer: "Installing proper waste disposal and wastewater management systems at construction sites" },
    { question: "8. How can the risk of environmental degradation due to excavation during construction be mitigated?", options: ["By using sustainable construction practices and minimizing excavation", "By ignoring soil erosion risks", "By increasing excavation activities", "By avoiding the use of barriers or proper drainage systems"], answer: "By using sustainable construction practices and minimizing excavation" },
    { question: "9. How can the risk of community resistance due to inadequate public participation be mitigated during implementation?", options: ["By conducting regular public consultations and involving local stakeholders in the decision-making process", "By reducing communication with the public to avoid opposition", "By implementing the project without informing the public", "By assuming that all community members will support the project"], answer: "By conducting regular public consultations and involving local stakeholders in the decision-making process" },
    { question: "10. Which mitigation strategy can be applied to minimize the impact of land acquisition on local communities during the Kancheepuram Water Supply Project?", options: ["Adequate compensation and resettlement plans for displaced communities", "Displacement of communities without compensation", "Ignoring land acquisition concerns", "Relocating all vendors without consultation"], answer: "Adequate compensation and resettlement plans for displaced communities" }
],
};
let currentQuestionIndex = 0;
let score = 0;
let currentPhase = "basic"; // Default phase
let timeLeft = 30;
let timer;
let startTime; // To track the start time of the quiz
let endTime; // To track the end time of the quiz
const completedPhases = { basic: false, intermediate: false, advanced: false };

// Add sound effects
const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");

// Get the audio element
const backgroundMusic = document.getElementById("background-music");

// Function to start the music
function startMusic() {
    backgroundMusic.play();
}

// Function to stop the music
function stopMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Reset to the beginning
}

// Function to display the quiz and start the music
function showQuiz() {
    document.getElementById("quiz-container").style.display = "flex";
    document.getElementById("scenario-page").style.display = "none";
    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("congratulations-page").style.display = "none";
    startMusic(); // Start the music when the quiz is displayed
}

// Function to hide the quiz and stop the music
function hideQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    stopMusic(); // Stop the music when the quiz is hidden
}

function toggleMute() {
    if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        document.getElementById("mute-button").innerText = "Mute";
    } else {
        backgroundMusic.muted = true;
        document.getElementById("mute-button").innerText = "Unmute";
    }
}

// Function to show the Scenario Page
function showScenarioPage() {
    hideQuiz(); // Stop music and hide the quiz container
    document.getElementById("scenario-page").style.display = "flex";
}

// Function to show the Congratulations Page
function showCongratulationsPage() {
    hideQuiz(); // Stop music and hide the quiz container
    document.getElementById("congratulations-page").style.display = "flex";

    endTime = Date.now(); // Record the end time
    const totalTime = Math.round((endTime - startTime) / 1000); // Calculate the total time in seconds
    const congratsPage = document.getElementById("congratulations-page");
    const timeDisplay = document.createElement("p");
    timeDisplay.innerText = `Time taken: ${totalTime} seconds`;
    congratsPage.appendChild(timeDisplay);
}

// Function to navigate from the Welcome Page to the Scenario Page
function navigateToScenario() {
    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const designation = document.getElementById("designation").value;

    if (!name || !department || !designation) {
        alert("Please enter your name, designation, and department.");
        return;
    }

    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("scenario-page").style.display = "flex";
}

// Function to start a quiz phase
function startPhase(phase) {
    if (!startTime) startTime = Date.now(); // Record start time
    currentPhase = phase; // Set the current phase
    currentQuestionIndex = 0; // Reset question index
    score = 0; // Reset score for the phase
    document.getElementById("score-value").innerText = score;

    // Display the quiz and start music
    showQuiz();
    loadQuestion(); // Load the first question for the phase
}

// Function to update the phase and handle transitions
function updatePhase() {
    const questions = phaseQuestions[currentPhase];

    // Check if the user meets the score requirements for each phase
    if (currentPhase === "basic" && score >= 20) {
        completedPhases.basic = true;
        document.getElementById("intermediate-btn").disabled = false; // Enable Intermediate button
        alert("Congratulations! You scored " + score + "/25 and unlocked the Intermediate Phase!");
        showScenarioPage(); // Show the scenario page and stop music
    } else if (currentPhase === "intermediate" && score >= 10) {
        completedPhases.intermediate = true;
        document.getElementById("advanced-btn").disabled = false; // Enable Advanced button
        alert("Great work! You scored " + score + "/15 and unlocked the Advanced Phase!");
        showScenarioPage(); // Show the scenario page and stop music
    } else if (currentPhase === "advanced" && score === questions.length) {
        completedPhases.advanced = true;
        alert("Game Completed! You scored " + score + "/" + questions.length);
        showCongratulationsPage(); // Show the congratulations page and stop music
    } else {
        alert(`You scored ${score}/${questions.length}. You need a higher score to unlock the next phase!`);
        showScenarioPage(); // Show the scenario page and stop music
    }
}

// Function to check the answer
function checkAnswer(selectedOption, correctAnswer, element) {
    if (selectedOption === correctAnswer) {
        correctSound.play(); // Play correct sound
        score++;
        element.classList.add("correct");
        document.getElementById("score-value").innerText = score; // Update displayed score

        // Highlight score update
        const scoreDisplay = document.getElementById("score-display");
        scoreDisplay.classList.add("highlight");
        setTimeout(() => scoreDisplay.classList.remove("highlight"), 500); // Remove highlight
    } else {
        wrongSound.play(); // Play wrong sound
        element.classList.add("incorrect");
        document.querySelectorAll("#options li").forEach(li => {
            if (li.innerText === correctAnswer) {
                li.classList.add("correct");
            }
        });
    }

    document.getElementById("next-btn").disabled = false; // Enable Next button
}

function loadQuestion() {
    const questions = phaseQuestions[currentPhase];
    if (currentQuestionIndex >= questions.length) {
        updatePhase(); // Handle phase completion
        return;
    }

    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = ""; // Clear question
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = ""; // Clear previous options

    // Display question after a short delay
    setTimeout(() => {
        document.getElementById("question").innerText = question.question;

        // Display options one by one with animation
        question.options.forEach((option, index) => {
            setTimeout(() => {
                const li = document.createElement("li");
                li.innerText = option;
                li.onclick = () => checkAnswer(option, question.answer, li);
                optionsList.appendChild(li);

                // Check if it's the last option
                if (index === question.options.length - 1) {
                    setTimeout(() => {
                        document.getElementById("timer-score-container").style.display = "flex";
                        resetTimer(); // Start/reset the timer after displaying options
                    }, 500); // Small delay for smoothness
                }
            }, index * 500); // Staggered display of options
        });

        // Show "Next" button after all options appear
        setTimeout(() => {
            document.getElementById("next-btn").style.display = "block";
            document.getElementById("next-btn").disabled = true; // Ensure it's disabled initially
        }, question.options.length * 500);

    }, 500); // Delay before showing the question
}

// Add Next button navigation
function nextQuestion() {
    currentQuestionIndex++;
    document.getElementById("next-btn").style.display = "none"; // Hide "Next" button
    loadQuestion();
}

// Timer management
function resetTimer() {
    clearInterval(timer); // Clear any existing timer
    timeLeft = 30; // Reset time
    updateTimerDisplay();

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer); // Stop the timer
            document.getElementById("timer").classList.add("time-up");
            setTimeout(() => {
                currentQuestionIndex++;
                loadQuestion(); // Move to the next question
            }, 1000);
        }
    }, 1000); // Decrement timer every second
}

function updateTimerDisplay() {
    document.getElementById("time-left").innerText = timeLeft;
    const circleCircumference = 339.12; // Circumference of the timer circle
    document.getElementById("timer-circle").style.strokeDashoffset =
        circleCircumference - (circleCircumference * timeLeft) / 30;
    document.getElementById("timer").classList.remove("time-up");
}

// Function to restart the quiz
function restartQuiz() {
    location.reload(); // Refresh the page to restart
}

// Add Next button dynamically
document.getElementById("content-wrapper").insertAdjacentHTML(
    "beforeend",
    `<button id="next-btn" style="display: none;" onclick="nextQuestion()" disabled>Next</button>`
);

