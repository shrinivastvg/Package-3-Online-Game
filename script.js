const phaseQuestions = {
    planning: [
    {
        question: "According to CPHEEO, what is the per capita water supply standard for urban areas?",
        options: ["150 liters per capita per day", "135 liters per capita per day (LPCD)", "120 liters per capita per day", "100 liters per capita per day"],
        answer: "135 liters per capita per day (LPCD)"
    },
    {
        question: "What is the primary purpose of a soil investigation before pipeline installation?",
        options: ["To identify water table level", "To estimate excavation costs", "To determine soil bearing capacity and corrosivity", "To monitor pipeline pressure"],
        answer: "To determine soil bearing capacity and corrosivity"
    },
    {
        question: "What is the recommended maximum distance between two sluice valves on a water pipeline network?",
        options: ["1000 meters", "200 meters", "150 meters", "500 meters"],
        answer: "500 meters"
    },
    {
        question: "In a feasibility study, what determines the best water source for the project?",
        options: ["Population density", "Cost of treatment", "Quality, quantity, and proximity of water source", "Availability of contractors"],
        answer: "Quality, quantity, and proximity of water source"
    },
    {
        question: "What is the importance of demand forecasting in water supply planning?",
        options: ["To ensure future water supply meets population needs", "To avoid pipeline corrosion", "To finalize project budgets", "To test pipeline durability"],
        answer: "To ensure future water supply meets population needs"
    }
],
    design: [
    {
        question: "What is the minimum depth for burying water supply pipelines in urban areas, as per CPHEEO guidelines?",
        options: ["0.5 to 1 meter", "1.0 to 1.2 meters", "2.0 to 2.5 meters", "1.5 to 1.7 meters"],
        answer: "1.0 to 1.2 meters"
    },
    {
        question: "What factor determines the diameter of distribution pipes in a water supply network?",
        options: ["Peak flow rate and velocity", "Ground slope", "Pipe material", "Reservoir capacity" ],
        answer: "Peak flow rate and velocity"
    },
    {
        question: "Which type of pipe joint is preferred for DI pipes in urban water supply?",
        options: ["Threaded joints", "Flanged joints", "Push-on joints", "Butt-welded joints"],
        answer: "Push-on joints"
    },
    {
        question: "What is the hydraulic gradient line (HGL) used for in water supply design?",
        options: ["To monitor flow velocity", "To indicate pipe material quality", "To measure soil settlement", "To represent water pressure variation in the system"],
        answer: "To represent water pressure variation in the system"
    },
    {
        question: "What is the maximum permissible water velocity in a water pipeline?",
        options: ["2.0 m/s", "3.0 m/s", "1.5 m/s", "4.5 m/s"],
        answer: "3.0 m/s"
    }
],
    procurement: [
    {
        question: "Which test ensures pipe quality before procurement?",
        options: ["Tensile strength test", "Visual inspection", "Hydrostatic pressure test", "Chemical analysis"],
        answer: "Hydrostatic pressure test"
    },
    {
        question: "What ensures contractor compliance during procurement?",
        options: ["Tender advertisements", "Material Test Certificates (MTC)", "Public inspections", "Vendor reviews"],
        answer: "Material Test Certificates (MTC)"
    },
    {
        question: "Which document defines quantities, materials, and costs for procurement?",
        options: ["Purchase Order", "Specification Sheet", "Tender Notice", "Bill of Quantities (BOQ)"],
        answer: "Bill of Quantities (BOQ)"
    },
    {
        question: "Which pipe material is preferred for high-pressure water transmission?",
        options: ["Ductile Iron (DI)", "Cast Iron", "PVC", "HDPE"],
        answer: "Ductile Iron (DI)"
    },
    {
        question: "What ensures timely delivery during procurement?",
        options: ["Single-source contracting", "Vendor selection based on availability", "A detailed supply schedule", "Cost minimization"],
        answer: "A detailed supply schedule"
    }
],
    construction: [
    {
        question: "What is the purpose of bedding in pipeline construction?",
        options: ["To anchor pipes firmly in place", "To protect pipes from external loads", "To prevent water pressure loss", "To provide uniform support for pipes"],
        answer: "To provide uniform support for pipes"
    },
    {
        question: "What test ensures pipeline integrity after installation?",
        options: ["Leakage test", "Corrosion test", "Pressure test", "Visual inspection"],
        answer: "Pressure test"
    },
    {
        question: "What is the recommended trench width for a pipeline installation?",
        options: ["Pipe diameter + 0.6 meters", "Pipe diameter + 1.5 meters", "Pipe diameter + 0.9 meters", "Pipe diameter + 0.3 meters"],
        answer: "Pipe diameter + 0.6 meters"
    },
    {
        question: "What material is recommended for backfilling trenches?",
        options: ["Clay soil", "Granular soil free of stones", "Loose sand", "Wet soil"],
        answer: "Granular soil free of stones"
    },
    {
        question: "Why is soil compaction necessary after pipe installation?",
        options: ["To increase pipe diameter", "To reduce trench width", "To increase water flow", "To avoid soil settlement and pipe misalignment"],
        answer: "To avoid soil settlement and pipe misalignment"
    }
],
    commissioning: [
    {
        question: "What is the final step in commissioning a water supply system?",
        options: ["Ensuring all tests meet design specifications", "Leakage detection", "Calibrating flow meters", "Inspecting reservoirs"],
        answer: "Ensuring all tests meet design specifications"
    },
    {
        question: "What ensures water quality during commissioning?",
        options: ["Chemical treatment", "Visual inspection", "Chlorination and bacteriological testing", "Pressure testing"],
        answer: "Chlorination and bacteriological testing"
    },
    {
        question: "What is the purpose of flow testing during commissioning?",
        options: ["To detect leaks", "To monitor soil behavior", "To adjust reservoir levels", "To verify uniform water distribution"],
        answer: "To verify uniform water distribution"
    },
    {
        question: "Why is the system flushed during commissioning?",
        options: ["To reduce pipeline pressure", "To remove debris and contaminants", "To test soil settlement", "To improve water velocity"],
        answer: "To remove debris and contaminants"
    },
    {
        question: "Which document marks the official handover of the system?",
        options: ["Quality Compliance Report", "Test Validation Report", "Material Certificate", "Commissioning Certificate"],
        answer: "Commissioning Certificate"
    }
],
    operation: [
    {
        question: "What is the purpose of regular leak detection in water pipelines?",
        options: ["To lower pipeline pressure", "To reduce water loss and improve efficiency", "To extend pipeline length", "To improve water taste"],
        answer: "To reduce water loss and improve efficiency"
    },
    {
        question: "Why is SCADA used during operation and maintenance?",
        options: ["To test water quality", "To replace faulty pipes", "To monitor and control system performance remotely", "To build new reservoirs"],
        answer: "To monitor and control system performance remotely"
    },
    {
        question: "What is the recommended interval for pipeline maintenance?",
        options: ["Monthly", "Annually", "Bi-annually", "Quarterly"],
        answer: "Quarterly"
    },
    {
        question: "What is a critical aspect of water supply sustainability?",
        options: ["Replacing pipelines every year", "Increasing system pressure", "Reducing water storage", "Regular maintenance and monitoring"],
        answer: "Regular maintenance and monitoring"
    },
    {
        question: "What equipment is used to measure water flow in pipelines?",
        options: ["Flow meters", "SCADA sensors", "Chlorinators", "Pressure gauges" ],
        answer: "Flow meters"
    }
],
    projectExecution: [
    {
        question: "After pipeline installations in urban areas the approval must be obtained from which department?",
        options: ["Public Works Department", "Urban Development Authority", "Revenue Department", "Tamil Nadu Highways Department"],
        answer: "Tamil Nadu Highways Department"
    },
    {
        question: "Approval authority for earth works in national highways?",
        options: ["Tamil Nadu Highways Department", "Public Works Department", "National Highways Authority of India (NHAI)", "Ministry of Road Transport and Highways"],
        answer: "National Highways Authority of India (NHAI)"
    },
    {
        question: "For tax exemption on construction materials for water supply projects, which department handles approvals?",
        options: ["Revenue Department", "Commercial Taxes Department", "Public Works Department", "Tamil Nadu Infrastructure Development Board"],
        answer: "Commercial Taxes Department"
    },
    {
        question: "Before starting excavation, which online portal is used in Tamil Nadu for applying for permissions from multiple departments?",
        options: ["Tamil Nadu e-Governance Portal", "Smart City Portal", "TNeGA Road Cutting Portal", "Public Works E-Approval System"],
        answer: "Tamil Nadu e-Governance Portal"
    },
    {
        question: "Which test is mandatory to ensure water quality compliance during pipeline commissioning?",
        options: ["Chlorination and bacteriological testing", "Turbidity testing", "PH adjustment test", "Hardness compliance test"],
        answer: "Chlorination and bacteriological testing"
    },
    {
        question: "What document is essential for initiating payment requests for completed milestones in Tamil Nadu-funded projects?",
        options: ["Tender Completion Report", "Work Completion Certificate", "Tax Exemption Form", "Utility Clearance Document"],
        answer: "Work Completion Certificate"
    },
    {
        question: "Which office to be contacted to obtain approval to cross railway tracks during pipleine laying?",
        options: ["Southern Railway Headquarters", "Indian Railways Urban Development Unit", "Divisional Railway Manager’s Office", "Public Works Railways Section"],
        answer: "Divisional Railway Manager’s Office"
    },
    {
        question: "Which agency ensures stakeholder consultations are conducted for urban water supply projects in Tamil Nadu?",
        options: ["Tamil Nadu Highways Department", "Tamil Nadu Revenue Department", "Tamil Nadu Pollution Control Board", "Tamil Nadu Municipal Administration and Water Supply Department"],
        answer: "Tamil Nadu Municipal Administration and Water Supply Department"
    },
    {
        question: "To ensure timely release of funds for the project, which document must be submitted to the Tamil Nadu Water Supply and Drainage Board?",
        options: ["Completion Certificate", "Tender Award Report", "Invoice Summary Document", "Monthly Progress Report (MPR)"],
        answer: "Monthly Progress Report (MPR)"
    },
    {
        question: "What is required from the Urban Local Body (ULB) before pipeline laying can begin in areas with existing infrastructure?",
        options: ["Environmental Clearance Certificate", "Road Width Survey Report", "No Objection Certificate (NOC)", "Utility Assessment Report"],
        answer: "No Objection Certificate (NOC)"
    }
]
};

// Global Variables
let currentQuestionIndex = 0;
let score = 0;
let totalScore = 0; // Track total score for the entire game
let currentPhase = "planning";
let completedPhases = { basic: false, intermediate: false, advanced: false };
let startTime;
let endTime;
let initialCost = 100; // ₹100 crore
let initialTime = 12; // 12 months (1 year)
let totalQuestions = 40; // Adjust total number of questions
let costDecrement = initialCost / totalQuestions; // Reduce cost per question
let timeDecrement = initialTime / totalQuestions; // Reduce time per question
let wrongAnswersCount = 0;
let extraCost = 0;
let extraTime = 0;

// Set initial display of time as years
document.getElementById("project-time").innerText = "1 Year";

function updateProjectTime() {
    let remainingTimeInMonths = Math.max(initialTime, 0).toFixed(2); // Calculate remaining months
    if (remainingTimeInMonths >= 12) {
        document.getElementById("project-time").innerText = "1 Year"; // Display 1 Year
    } else {
        document.getElementById("project-time").innerText = `${remainingTimeInMonths} Months`; // Display as months
    }
}

// Audio Elements
const correctSound = new Audio("assets/audio and video/correct.mp3");
const wrongSound = new Audio("assets/audio and video/wrong.mp3");
const backgroundMusic = new Audio("assets/audio and video/music.mp3");

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

    // Automatically start the first phase only now
    startPhase("planning");
}

function showScenarioPage() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("scenario-page").style.display = "flex";
    stopMusic();
}

function showCongratulationsPage() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("congratulations-page").style.display = "flex";
    stopMusic();

    endTime = Date.now();
    const totalTime = Math.round((endTime - startTime) / 1000);
    const name = document.getElementById("name").value;
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    const timeTaken = minutes > 0 ? `${minutes} minutes and ${seconds} seconds` : `${seconds} seconds`;

    let summaryMessage = "";

    if (wrongAnswersCount > 0) {
        summaryMessage = `You exceeded the project limits by <strong>₹${extraCost.toFixed(2)} crore</strong> and <strong>${extraTime.toFixed(2)} months</strong>.`;
    } else {
        summaryMessage = `Congratulations! You stayed within the project cost and time limits!`;
    }

    const message = `
        Thank you, <strong>${name}</strong>, for completing the game!
        <br>Your total score is <strong>${totalScore}</strong>, and you took <strong>${timeTaken}</strong> to complete the game.
        <br>${summaryMessage}
    `;

    document.getElementById("congratulations-message").innerHTML = message;

    const congratulationsGif = document.getElementById("congratulations-gif");
    if (congratulationsGif) {
        congratulationsGif.src = "celebration.gif";
        congratulationsGif.style.display = "block";
    }

    // Add a button to download the certificate
    let certificateButton = document.createElement("button");
    certificateButton.innerText = "Download Certificate";
    certificateButton.style.marginTop = "20px";
    certificateButton.onclick = generateCertificate;
    document.getElementById("congratulations-page").appendChild(certificateButton);
}

function generateCertificate() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [800, 600]
    });

    // Calculate the total possible score
    let totalPossibleScore = Object.values(phaseQuestions).reduce((sum, phase) => sum + phase.length * 10, 0);

    // Fancy Decorative Border
    doc.setDrawColor(150, 120, 60); // Gold-like color
    doc.setLineWidth(12);
    doc.rect(25, 25, 750, 550);

    // Certificate Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(40);
    doc.text("CERTIFICATE OF ACHIEVEMENT", 400, 120, { align: "center" });

    // Formal Certification Statement
    doc.setFont("times", "italic");
    doc.setFontSize(24);
    doc.text("This certificate is proudly presented to", 400, 180, { align: "center" });

    // Participant's Name (Elegant & Bold)
    let name = document.getElementById("name").value || "Participant";
    doc.setFont("times", "bold");
    doc.setFontSize(36);
    doc.text(name, 400, 230, { align: "center" });

    // Achievement Statement
    doc.setFont("times", "normal");
    doc.setFontSize(22);
    doc.text("for successfully completing the", 400, 280, { align: "center" });

    // Course/Game Name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.text("Project Finance for Non-Finance Executives", 400, 320, { align: "center" });

    // Score Display
    let scoreText = `Score: ${totalScore} / ${totalPossibleScore}`;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(22);
    doc.text(scoreText, 400, 360, { align: "center" });

    // Date Formatting (Day, Month, Year)
    let today = new Date();
    let options = { day: "numeric", month: "long", year: "numeric" };
    let formattedDate = today.toLocaleDateString("en-US", options);
    doc.setFontSize(20);
    doc.text(`Given on ${formattedDate}`, 400, 420, { align: "center" });

    // Footer (Centered Line for Style)
    doc.setLineWidth(1);
    doc.setDrawColor(100);
    doc.line(200, 450, 600, 450);

    // Save the PDF
    doc.save(`Certificate_${name}.pdf`);
}


// Quiz Functions
function loadQuestion() {
    const questions = phaseQuestions[currentPhase];

    // If all questions are answered, move to the next phase
    if (currentQuestionIndex >= questions.length) {
        updatePhase(); // Trigger phase transition
        return;
    }

    const question = questions[currentQuestionIndex];
    const optionsList = document.getElementById("options");
    const questionElement = document.getElementById("question");
    const nextBtn = document.getElementById("next-btn");

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

    // Create options and enable interactions
    question.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerText = option;
        li.style.opacity = 0; // Start hidden
        li.style.transition = "opacity 0.5s ease-in-out";
        li.classList.add("option-item"); // Styling class for options
        li.style.pointerEvents = "none"; // Disable pointer events initially

        // Append to options list
        optionsList.appendChild(li);

        // Fade in the option with a delay
        setTimeout(() => {
            li.style.opacity = 1; // Make the option visible
            li.style.pointerEvents = "auto"; // Enable interactions
            li.onclick = () => handleOptionSelect(option, question.answer, li); // Attach click handler
        }, index * 500); // Delay between options
    });

    // Handle Next button click for question transitions
    nextBtn.onclick = () => {
        nextBtn.disabled = true; // Disable the button immediately after clicking
        currentQuestionIndex++; // Move to the next question
        loadQuestion(); // Load the next question
    };
}

function handleOptionSelect(selectedOption, correctAnswer, element) {
    const options = document.querySelectorAll("#options li");

    // Disable further selections
    options.forEach((li) => (li.onclick = null));

    if (selectedOption === correctAnswer) {
        correctSound.play();
        element.classList.add("correct");
        score += 10;
        totalScore += 10;

        // Reduce cost and time for correct answers
        initialCost -= costDecrement;
        initialTime -= timeDecrement;
    } else {
        wrongSound.play();
        element.classList.add("incorrect");
        wrongAnswersCount++; // Track wrong answers

        // Highlight correct answer
        options.forEach((li) => {
            if (li.innerText === correctAnswer) li.classList.add("correct");
        });

        // Increase cost and time for wrong answers
        initialCost += costDecrement;
        initialTime += timeDecrement;
        extraCost += costDecrement; // Track excess cost
        extraTime += timeDecrement; // Track excess time
    }

    // **Ensure the UI updates properly**
    updateProjectStatus();

    // Enable the Next button
    const nextBtn = document.getElementById("next-btn");
    nextBtn.style.display = "block";
    nextBtn.disabled = false;
}

function updateProjectStatus() {
    document.getElementById("project-cost").innerText = `${Math.max(initialCost, 0).toFixed(2)} crore`;
    updateProjectTime(); // Ensure time is displayed correctly
}

function updateProjectTime() {
    let displayTime;
    if (initialTime >= 12) {
        displayTime = "1 Year";
    } else {
        displayTime = `${Math.max(initialTime, 0).toFixed(1)} Months`;
    }
    document.getElementById("project-time").innerText = displayTime;
}


function updatePhase() {
    completedPhases[currentPhase] = true;
    
    // Calculate Phase Performance
    let totalQuestionsInPhase = phaseQuestions[currentPhase].length;
    let percentageScore = (score / (totalQuestionsInPhase * 10)) * 100;
    
    let phaseElement = document.getElementById(`${currentPhase}-phase`);
    
    // Change Phase Color Based on Performance
    if (percentageScore === 100) {
        phaseElement.style.backgroundColor = "#28a745"; // Green for all correct
    } else if (percentageScore >= 50) {
        phaseElement.style.backgroundColor = "#007bff"; // Blue for ≥ 50% correct
    } else {
        phaseElement.style.backgroundColor = "#dc3545"; // Red for < 50% correct
    }
    
    // Capture the current phase score before resetting
    const phaseScore = score;
    console.log(
        `Current Phase: ${currentPhase}, Phase Score: ${phaseScore}, Total Score Before Update: ${totalScore}`
    );

    // Check if the current phase is the last phase
    if (currentPhase === "projectExecution") {
        document.getElementById("right-image").style.display = "block"; // Show the right image
        showCompletionPopup(); // Show the final message pop-up
        return; // Exit function to prevent further transitions
    }

    // Show the phase completion pop-up for other phases
    showPhaseCompletionPopup(currentPhase, phaseScore, () => {
        if (currentPhase === "planning") {
            startPhase("design");
        } else if (currentPhase === "design") {
            startPhase("procurement");
        } else if (currentPhase === "procurement") {
            startPhase("construction");
        } else if (currentPhase === "construction") {
            startPhase("commissioning");
        } else if (currentPhase === "commissioning") {
            startPhase("operation");
        } else if (currentPhase === "operation") {
            startPhase("projectExecution");
        }

        score = 0; // Reset for the next phase
        console.log(`Score Reset to: ${score}`);
        document.getElementById("score-value").innerText = totalScore; // Display the cumulative total score
    });

    console.log(`Total Score After Update: ${totalScore}`);
}

function showPhaseCompletionPopup(phase, phaseScore, callback) {
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
    popup.style.opacity = 0;
    popup.style.transition = "opacity 0.5s ease-in-out";

    popup.innerHTML = `
        <h2>Phase Complete!</h2>
        <p>You completed the <strong>${phase}</strong> phase.</p>
        <p>Your score for this phase: <strong>${phaseScore}</strong></p>
        <p>Total score so far: <strong>${totalScore}</strong></p>
        <button id="popup-close-btn">Continue</button>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.opacity = 1;
    }, 100);

    const closeButton = document.getElementById("popup-close-btn");
    closeButton.onclick = () => {
        popup.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(popup);
            if (callback) callback();
        }, 500);
    };
}

function showCompletionPopup() {
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
    popup.style.opacity = 0;
    popup.style.transition = "opacity 0.5s ease-in-out";

    popup.innerHTML = `
        <h2>Congratulations!</h2>
        <p>You have successfully completed all the phases!</p>
        <p>Thank you for participating in this game.</p>
        <button id="popup-close-btn">Finish</button>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.opacity = 1;
    }, 100);

    const closeButton = document.getElementById("popup-close-btn");
    closeButton.onclick = () => {
        popup.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(popup);
            showCongratulationsPage();
        }, 500);
    };
}

function startPhase(phase) {
    currentPhase = phase; // Set the current phase
    currentQuestionIndex = 0; // Start from the first question
    score = 0; // Reset phase score
    document.getElementById("score-value").innerText = totalScore;

    // Ensure the left image is visible
    document.getElementById("left-image").style.display = "block";

    // Hide the right image until the last phase
    if (phase !== "projectExecution") {
        document.getElementById("right-image").style.display = "none";
    }

    loadQuestion(); // Load the first question of the phase
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

function toggleMute() {
    backgroundMusic.muted = !backgroundMusic.muted;
    document.getElementById("mute-button").innerText = backgroundMusic.muted ? "Unmute" : "Mute";
}
