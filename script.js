const phaseQuestions = {
    basic: [
    { question: "1. What is the primary objective of ECSMF in urban infrastructure projects?", options: ["Reduce public participation", "Ensure environmentally, socially, and climate-resilient projects", "Simplify construction processes", "Increase financial returns"], answer: "Ensure environmentally, socially, and climate-resilient projects" },
    { question: "2. Which national legislation governs the prevention and control of water pollution?", options: ["Air (Prevention and Control of Pollution) Act, 1981", "Environment Protection Act, 1986", "Water (Prevention and Control of Pollution) Act, 1974", "Forest Conservation Act, 1980"], answer: "Water (Prevention and Control of Pollution) Act, 1974" },
    { question: "3. What is the significance of the EIA Notification, 2006, in project planning?", options: ["Prevents stakeholder engagement", "Simplifies the project planning process", "Regulates financial transactions in infrastructure projects", "Ensures environmental clearance is obtained before starting projects"], answer: "Ensures environmental clearance is obtained before starting projects" },
    { question: "4. What does a Stakeholder Engagement Plan (SEP) achieve?", options: ["Assesses climate change risks", "Guides stakeholder involvement throughout the project lifecycle", "Develops a financial model for the project", "Reduces the number of consultations required"], answer: "Guides stakeholder involvement throughout the project lifecycle" },
    { question: "5. What is the purpose of an Initial Screening Report (ISR)?", options: ["To classify environmental and social risks", "To identify project benefits only", "To finalize project timelines", "To prepare financial budgets"], answer: "To classify environmental and social risks" },
    { question: "6. What is the environmental risk category for a river intake structure under ECSMF?", options: ["Moderate Risk", "Substantial Risk", "High Risk", "Low Risk"], answer: "Substantial Risk" },
    { question: "7. Which Tamil Nadu law mandates rainwater harvesting for groundwater recharge?", options: ["Tamil Nadu Town and Country Planning Act, 1971", "Tamil Nadu Preservation of Private Forest Act, 1949", "Chennai Metropolitan Area Groundwater (Regulation) Act, 2002", "Tamil Nadu Municipalities Act, 1920"], answer: "Chennai Metropolitan Area Groundwater (Regulation) Act, 2002" },
    { question: "8. Which agency is responsible for obtaining consent for discharge of effluents in Tamil Nadu?", options: ["Ministry of Environment, Forests, and Climate Change", "Tamil Nadu Pollution Control Board (TNPCB)", "TNUIFSL", "Urban Local Bodies (ULBs)"], answer: "Tamil Nadu Pollution Control Board (TNPCB)" },
    { question: "9. What is the purpose of the Environmental Impact Assessment (EIA)?", options: ["Prepare technical designs for the project", "Identify and mitigate environmental impacts of a project", "Reduce social engagement requirements", "Evaluate financial risks of a project"], answer: "Identify and mitigate environmental impacts of a project" },
    { question: "10. Which document ensures project compliance with ECSMF guidelines?", options: ["Risk Mitigation Plan", "Project Budget Report", "Technical Feasibility Report", "Environmental and Social Impact Assessment (ESIA)"], answer: "Environmental and Social Impact Assessment (ESIA)" },
    { question: "11. Which act prohibits activities in Coastal Regulation Zones (CRZs)?", options: ["Wildlife Protection Act, 1972", "CRZ Notification, 2019", "Environment (Protection) Act, 1986", "Air (Prevention and Control of Pollution) Act, 1981"], answer: "CRZ Notification, 2019" },
    { question: "12. What is the purpose of the Resettlement Policy Framework (RPF) in ECSMF?", options: ["To manage land acquisition and resettlement impacts", "To increase the speed of project approval", "To avoid consultations with affected families", "To ensure financial gains for stakeholders"], answer: "To manage land acquisition and resettlement impacts" },
    { question: "13. Which component of ECSMF addresses climate-related risks in a project?", options: ["Climate Resilience Report", "Environmental Monitoring Plan", "Stakeholder Engagement Plan", "Resettlement Action Plan"], answer: "Climate Resilience Report" },
    { question: "14. What is the role of the Grievance Redress Mechanism (GRM)?", options: ["To resolve complaints and concerns of affected stakeholders", "To finalize technical designs", "To reduce environmental monitoring requirements", "To increase project costs"], answer: "To resolve complaints and concerns of affected stakeholders" },
    { question: "15. Which entity prepares the ESIA for ECSMF projects?", options: ["Ministry of Urban Development", "TNPCB", "TNUIFSL", "Project Management Consultants (PMC)"], answer: "Project Management Consultants (PMC)" },
    { question: "16. What is the primary focus of climate mainstreaming in ECSMF?", options: ["Increasing resilience to climate-related risks", "Avoiding mitigation measures", "Simplifying project design", "Reducing financial risks"], answer: "Increasing resilience to climate-related risks" },
    { question: "17. Which of the following is an example of a minimal-risk project under ECSMF?", options: ["River intake structures", "Water distribution lines", "New road construction", "Construction of water tankers"], answer: "Construction of water tankers" },
    { question: "18. In the context of ECSMF, what is the main environmental concern for a water supply project using river intake structures?", options: ["Delays in construction", "Challenges in stakeholder consultations", "Impact on aquatic ecosystems and sedimentation", "Increase in project cost"], answer: "Impact on aquatic ecosystems and sedimentation" },
    { question: "19. Which component of a water supply project requires careful climate resilience planning under ECSMF?", options: ["River intake structures", "Distribution pipeline routes", "Water Treatment Plant (WTP) infrastructure", "All of the above"], answer: "All of the above" },
    { question: "20. How does ECSMF ensure minimal social disruption in a water supply project?", options: ["By focusing solely on technical designs", "By preparing a Resettlement Action Plan (RAP) for affected persons", "By avoiding land acquisition entirely", "By increasing project costs to accommodate all stakeholders"], answer: "By preparing a Resettlement Action Plan (RAP) for affected persons" },
    { question: "21. What is the primary focus of the Climate Resilience Report under ECSMF?", options: ["To address potential flood and drought risks and ensure project sustainability", "To simplify the environmental assessment process", "To document stakeholder grievances", "To increase financial returns of the project"], answer: "To address potential flood and drought risks and ensure project sustainability" },
    { question: "22. Which of the following is a key element of a Stakeholder Engagement Plan (SEP)?", options: ["Transparent communication and inclusion of diverse community groups throughout the project lifecycle", "Limiting engagement to high-level stakeholders", "Avoiding consultations to reduce project delays", "Focusing only on technical team consultations"], answer: "Transparent communication and inclusion of diverse community groups throughout the project lifecycle" },
    { question: "23. What role does the Environmental and Social Management Plan (ESMP) play in ECSMF implementation?", options: ["Allocates the budget for project execution", "Specifies the mitigation measures for identified environmental and social risks", "Identifies funding sources for the project", "Focuses solely on the technical aspects of the project"], answer: "Specifies the mitigation measures for identified environmental and social risks" },
    { question: "24. In which situation would an ESIA (Environmental and Social Impact Assessment) be mandatory under ECSMF?", options: ["When the project involves private sector investment", "When a project is classified as having substantial or high environmental and social risks", "When the project cost exceeds a specific threshold", "When the project is located in urban areas only"], answer: "When a project is classified as having substantial or high environmental and social risks" },
    { question: "25. How does the Grievance Redress Mechanism (GRM) help in ECSMF implementation?", options: ["By providing a platform for resolving stakeholder complaints and ensuring accountability", "By simplifying the environmental assessment process", "By finalizing the technical designs of the project", "By increasing financial transparency during project implementation"], answer: "By providing a platform for resolving stakeholder complaints and ensuring accountability" },
],
    intermediate: [
    { question: "1. What is the minimum requirement for stakeholder consultations under the ECSMF for water supply projects?", options: ["Conducting public hearings after project approval", "Only engaging directly impacted households", "Conducting focus group discussions at least twice during project preparation", "Releasing project plans without public feedback"], answer: "Conducting focus group discussions at least twice during project preparation" },
    { question: "2. Which aspect is evaluated first during risk categorization of a water supply project?", options: ["Social sensitivity of the project area", "Availability of technical staff for the project", "Climate resilience measures in the design", "Budget allocation for environmental mitigation"], answer: "Social sensitivity of the project area" },
    { question: "3. What is a key characteristic of 'Substantial Risk' projects under ECSMF?", options: ["Minimal impacts with no requirement for mitigation", "Significant impacts that are irreversible and affect a large area", "Moderate impacts that require detailed mitigation measures", "Moderate impacts that are site-specific and reversible"], answer: "Moderate impacts that require detailed mitigation measures" },
    { question: "4. Which of the following is a mandatory component of the ECSMF adoption mechanism?", options: ["Integration of ESMP provisions in bidding documents", "Hiring of only local contractors", "Approval of project budgets by stakeholders", "Reducing public consultations for high-risk projects"], answer: "Integration of ESMP provisions in bidding documents" },
    { question: "5. What is the most effective mitigation measure for addressing stakeholder concerns about water availability?", options: ["Preparing a technical report without public input", "Conducting continuous public consultations and incorporating their feedback in the ESIA", "Increasing water treatment capacity without considering demand", "Limiting the scope of stakeholder engagement"], answer: "Conducting continuous public consultations and incorporating their feedback in the ESIA" },
    { question: "6. Which of the following risks would typically classify a project as 'Moderate Risk'?", options: ["Impacts that require complex, long-term mitigation", "Localized and reversible impacts that can be mitigated easily", "No adverse impacts requiring mitigation", "Significant adverse impacts affecting a large area"], answer: "Localized and reversible impacts that can be mitigated easily" },
    { question: "7. How does the ECSMF ensure accountability in managing social impacts of a project?", options: ["By excluding minor impacts from assessments", "By preparing a Livelihood Restoration Plan (LRP) for displaced or impacted communities", "By relying on project contractors to manage social issues", "By focusing only on environmental risks"], answer: "By preparing a Livelihood Restoration Plan (LRP) for displaced or impacted communities" },
    { question: "8. What distinguishes 'High Risk' projects from 'Substantial Risk' projects under ECSMF?", options: ["Substantial Risk projects require no mitigation measures", "High Risk projects have irreversible, large-scale impacts; Substantial Risk projects have significant but reversible impacts", "Substantial Risk projects always fall under Low Risk classification", "High Risk projects involve no stakeholder consultations"], answer: "High Risk projects have irreversible, large-scale impacts; Substantial Risk projects have significant but reversible impacts" },
    { question: "9. What is a key challenge in categorizing risks for urban water supply projects?", options: ["High financial costs of categorization", "Limited access to project financing", "Lack of technical expertise among contractors", "Balancing environmental and social impacts in densely populated areas"], answer: "Balancing environmental and social impacts in densely populated areas" },
    { question: "10. What should be prioritized when addressing environmental impacts of a river intake structure?", options: ["Reducing stakeholder engagement", "Ignoring aquatic biodiversity considerations", "Implementing sedimentation controls and ecological monitoring programs", "Increasing the scale of water extraction"], answer: "Implementing sedimentation controls and ecological monitoring programs" },
    { question: "11. Why is climate resilience critical for water supply projects in riverine areas?", options: ["To address risks of seasonal flooding, droughts, and water scarcity", "To simplify the project planning process", "To reduce operational costs of the water treatment plant", "To avoid environmental regulations"], answer: "To address risks of seasonal flooding, droughts, and water scarcity" },
    { question: "12. What is the primary goal of mitigation measures in Substantial Risk projects?", options: ["To minimize significant but reversible impacts through detailed action plans", "To bypass regulatory requirements", "To delay the project implementation timeline", "To increase financial returns from the project"], answer: "To minimize significant but reversible impacts through detailed action plans" },
    { question: "13. In a water supply project, how should ecological sensitivity near the river intake point be managed under ECSMF?", options: ["Relocate the project without stakeholder consultation", "Conduct regular biodiversity assessments and implement protective measures", "Increase water extraction to justify ecological impact", "Limit community involvement in ecological discussions"], answer: "Conduct regular biodiversity assessments and implement protective measures" },
    { question: "14. What is the most effective way to ensure equitable access to water supply services for marginalized communities?", options: ["Include provisions for marginalized groups in the Stakeholder Engagement Plan (SEP)", "Reduce consultations with smaller communities to save time", "Ensure technical designs prioritize water quantity over equity", "Focus only on urban areas with high population density"], answer: "Include provisions for marginalized groups in the Stakeholder Engagement Plan (SEP)" },
    { question: "15. When implementing ECSMF for a Substantial Risk project, which monitoring mechanism is most crucial?", options: ["Conducting technical reviews without stakeholder engagement", "Regular environmental and social compliance audits to track mitigation effectiveness", "Focusing only on climate-related risks, excluding social risks", "Reviewing financial performance every quarter"], answer: "Regular environmental and social compliance audits to track mitigation effectiveness" },
],

    advanced: [
    { question: "1. As an engineer preparing the ESIA for a water supply project, what mitigation measure will you implement to control air pollution during the construction of the water treatment plant?", options: ["Avoiding the use of modern machinery to reduce costs", "Regular water sprinkling and dust suppression on construction sites", "Relocating the plant to a different region without consultation", "Increasing construction hours to complete the project quickly"], answer: "Regular water sprinkling and dust suppression on construction sites" },
    { question: "2. You are designing a river intake structure near an ecologically sensitive zone. What mitigation measure will you propose to minimize harm to aquatic ecosystems?", options: ["Construction of intake structures without environmental monitoring", "Extraction of water during breeding seasons to maximize efficiency", "Use of fish screens and sediment traps to prevent entry of aquatic organisms into the system", "Ignoring sedimentation as it doesn’t impact water quality significantly"], answer: "Use of fish screens and sediment traps to prevent entry of aquatic organisms into the system" },
    { question: "3. During the construction of distribution pipelines, local residents raise concerns about noise pollution. Which mitigation measure would you include in the ESIA?", options: ["Ignoring complaints and completing construction as scheduled", "Limiting construction activities to daytime hours and using noise barriers around sensitive locations", "Using outdated equipment to save costs", "Conducting nighttime construction to reduce public visibility"], answer: "Limiting construction activities to daytime hours and using noise barriers around sensitive locations" },
    { question: "4. While preparing the ESIA, you identify the risk of surface water pollution from construction runoff near the river. What action will you propose to mitigate this impact?", options: ["Delay construction until the monsoon season is over", "Construct sedimentation ponds and install silt fences around construction sites", "Avoid monitoring water quality during the construction phase", "Increase water extraction to dilute the pollution"], answer: "Construct sedimentation ponds and install silt fences around construction sites" },
    { question: "5. The water treatment plant site is located in an area prone to floods. What structural mitigation measure will you include in the Climate Resilience Report?", options: ["Installing permanent barriers around the plant without considering long-term impacts", "Ignoring flood risks since the plant is insured", "Elevating critical infrastructure above the highest flood level", "Relocating the plant without consulting stakeholders"], answer: "Elevating critical infrastructure above the highest flood level" },
    { question: "6. While assessing the impacts of construction on nearby agricultural fields, you find that dust and debris could reduce crop yields. What mitigation measure would you propose?", options: ["Negotiate compensation for affected farmers after project completion", "Allow construction to proceed without intervention", "Install temporary barriers around the construction site and conduct regular cleaning of access roads", "Delay the construction phase indefinitely"], answer: "Install temporary barriers around the construction site and conduct regular cleaning of access roads" },
    { question: "7. A Resettlement Action Plan (RAP) is required for families living near the intake structure site. What key mitigation measure should you propose for livelihood restoration?", options: ["Delay compensation until the project generates revenue", "Relocate families without prior consultation", "Focus only on monetary compensation without livelihood planning", "Provide skill training and alternative employment opportunities for displaced families"], answer: "Provide skill training and alternative employment opportunities for displaced families" },
    { question: "8. You are tasked with mitigating the impacts of GHG emissions from the water treatment plant's energy use. Which of the following measures will you include in the Climate Resilience Report?", options: ["Rely on diesel generators for energy needs", "Increase operational hours without modifying energy usage", "Avoid considering energy sources in the ESIA", "Install solar panels and energy-efficient equipment at the plant"], answer: "Install solar panels and energy-efficient equipment at the plant" },
    { question: "9. During construction, soil erosion is identified as a risk near the pipeline installation sites. What mitigation measure would you propose?", options: ["Delay the project to let natural vegetation regrow", "Implement soil stabilization techniques such as mulching and planting vegetation", "Proceed with construction without considering erosion impacts", "Use only temporary erosion control measures without monitoring"], answer: "Implement soil stabilization techniques such as mulching and planting vegetation" },
    { question: "10. While analyzing potential social impacts, you find that construction activities may disrupt access to schools and hospitals. What mitigation measure will you include in the ESIA?", options: ["Avoid addressing disruptions and proceed as planned", "Create alternative access routes and ensure timely completion of critical construction phases", "Notify stakeholders only after disruptions have occurred", "Compensate stakeholders post-project without addressing immediate concerns"], answer: "Create alternative access routes and ensure timely completion of critical construction phases" },
],
};

let currentQuestionIndex = 0;
let score = 0;
let currentPhase = "basic"; // Default phase
let timeLeft = 20;
let timer;
const completedPhases = { basic: false, intermediate: false, advanced: false };

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

// Function to update the phase and handle transitions
function updatePhase() {
    const questions = phaseQuestions[currentPhase];

// Function to update the phase and handle transitions
function updatePhase() {
    const questions = phaseQuestions[currentPhase];

    // Check if all answers in the current phase are correct
    if (score === questions.length) {
        if (currentPhase === "basic") {
            completedPhases.basic = true;
            document.getElementById("intermediate-btn").disabled = false; // Enable Intermediate button
            alert("Congratulations! You unlocked the Intermediate Phase!");
            showScenarioPage(); // Show the scenario page and stop music
        } else if (currentPhase === "intermediate") {
            completedPhases.intermediate = true;
            document.getElementById("advanced-btn").disabled = false; // Enable Advanced button
            alert("Great work! You unlocked the Advanced Phase!");
            showScenarioPage(); // Show the scenario page and stop music
        } else if (currentPhase === "advanced") {
            completedPhases.advanced = true;
            alert("Quiz Completed!");
            showCongratulationsPage(); // Show the congratulations page and stop music
        }
    } else {
        alert(`You scored ${score}/${questions.length}. Try again to unlock the next phase!`);
        showScenarioPage(); // Show the scenario page and stop music
    }
}
// Function to check the answer
function checkAnswer(selectedOption, correctAnswer, element) {
    if (selectedOption === correctAnswer) {
        score++;
        element.classList.add("correct");
        document.getElementById("score-value").innerText = score; // Update displayed score
    } else {
        element.classList.add("incorrect");
        document.querySelectorAll("#options li").forEach(li => {
            if (li.innerText === correctAnswer) {
                li.classList.add("correct");
            }
        });
    }

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1000); // Delay before loading the next question
}

// Function to load a question
function loadQuestion() {
    const questions = phaseQuestions[currentPhase];
    if (currentQuestionIndex >= questions.length) {
        updatePhase(); // Handle phase completion
        return;
    }

    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";

    question.options.forEach(option => {
        const li = document.createElement("li");
        li.innerText = option;
        li.onclick = () => checkAnswer(option, question.answer, li);
        optionsList.appendChild(li);
    });

    resetTimer(); // Start/reset the timer for the current question

}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer); // Clear any existing timer
    timeLeft = 20; // Reset time to 20 seconds
    updateTimerDisplay(); // Update the visual display of the timer

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
    const circleCircumference = 339.12; // Circumference of the circle (2πr where r=54)
    document.getElementById("timer-circle").style.strokeDashoffset =
        circleCircumference - (circleCircumference * timeLeft) / 20;
    document.getElementById("timer").classList.remove("time-up");
}

// Function to restart the quiz
function restartQuiz() {
    location.reload(); // Refresh the page to restart
}
