const phaseQuestions = {
    planning: [
    {
        question: "According to CPHEEO, what is the per capita water supply standard for urban areas?",
        options: [
            { text: "150 liters per capita per day", cost: 0.03, time: 0.5 }, // Slightly overestimates the requirement
            { text: "135 liters per capita per day (LPCD)", cost: 0, time: 0 }, // Correct answer
            { text: "120 liters per capita per day", cost: 0.02, time: 0.7 }, // Underestimates requirement, causing shortages
            { text: "100 liters per capita per day", cost: 0.04, time: 1.0 }  // Highly underestimated, major impact on supply planning
        ],
        answer: "135 liters per capita per day (LPCD)"
    },
    {
        question: "What is the primary purpose of a soil investigation before pipeline installation?",
        options: [
            { text: "To identify water table level", cost: 0.01, time: 0.3 }, // Water table matters but isn't the primary concern
            { text: "To estimate excavation costs", cost: 0.02, time: 0.5 }, // Excavation cost is important but secondary
            { text: "To determine soil bearing capacity and corrosivity", cost: 0, time: 0 }, // Correct answer
            { text: "To monitor pipeline pressure", cost: 0.03, time: 0.8 }  // Completely unrelated, high impact
        ],
        answer: "To determine soil bearing capacity and corrosivity"
    },
    {
        question: "What is the recommended maximum distance between two sluice valves on a water pipeline network?",
        options: [
            { text: "1000 meters", cost: 0.05, time: 1.2 }, // Too far apart, high impact
            { text: "200 meters", cost: 0.01, time: 0.4 },  // Slightly better than required
            { text: "150 meters", cost: 0.02, time: 0.5 },  // Closer than required, minor inefficiency
            { text: "500 meters", cost: 0, time: 0 }        // Correct answer
        ],
        answer: "500 meters"
    },
    {
        question: "In a feasibility study, what determines the best water source for the project?",
        options: [
            { text: "Population density", cost: 0.02, time: 0.5 }, // Important but not the main factor
            { text: "Cost of treatment", cost: 0.01, time: 0.3 }, // A factor but not primary
            { text: "Quality, quantity, and proximity of water source", cost: 0, time: 0 }, // Correct answer
            { text: "Availability of contractors", cost: 0.03, time: 0.7 } // Not relevant at this stage
        ],
        answer: "Quality, quantity, and proximity of water source"
    },
    {
        question: "What is the importance of demand forecasting in water supply planning?",
        options: [
            { text: "To ensure future water supply meets population needs", cost: 0, time: 0 }, // Correct answer
            { text: "To avoid pipeline corrosion", cost: 0.02, time: 0.5 }, // Corrosion is important but not a forecasting goal
            { text: "To finalize project budgets", cost: 0.01, time: 0.3 }, // Budgeting is important but secondary
            { text: "To test pipeline durability", cost: 0.03, time: 0.7 }  // Irrelevant, high impact
        ],
        answer: "To ensure future water supply meets population needs"
    }
],
    design: [
    {
        question: "What is the minimum depth for burying water supply pipelines in urban areas, as per CPHEEO guidelines?",
        options: [
            { text: "0.5 to 1 meter", cost: 0.03, time: 0.6 }, // Too shallow, high risk of damage
            { text: "1.0 to 1.2 meters", cost: 0, time: 0 }, // Correct answer
            { text: "2.0 to 2.5 meters", cost: 0.02, time: 0.5 }, // Unnecessarily deep, increasing excavation costs
            { text: "1.5 to 1.7 meters", cost: 0.01, time: 0.3 } // Slightly deeper than required, minor inefficiency
        ],
        answer: "1.0 to 1.2 meters"
    },
    {
        question: "What factor determines the diameter of distribution pipes in a water supply network?",
        options: [
            { text: "Peak flow rate and velocity", cost: 0, time: 0 }, // Correct answer
            { text: "Ground slope", cost: 0.02, time: 0.5 }, // Important, but not the primary determining factor
            { text: "Pipe material", cost: 0.01, time: 0.3 }, // Affects durability but not diameter
            { text: "Reservoir capacity", cost: 0.03, time: 0.6 } // Does not directly determine pipe diameter
        ],
        answer: "Peak flow rate and velocity"
    },
    {
        question: "Which type of pipe joint is preferred for DI pipes in urban water supply?",
        options: [
            { text: "Threaded joints", cost: 0.03, time: 0.7 }, // Weak joint for urban supply, high risk of failure
            { text: "Flanged joints", cost: 0.02, time: 0.5 }, // Used in certain cases but not preferred for DI pipes
            { text: "Push-on joints", cost: 0, time: 0 }, // Correct answer
            { text: "Butt-welded joints", cost: 0.01, time: 0.3 } // More common in other applications, minor inefficiency
        ],
        answer: "Push-on joints"
    },
    {
        question: "What is the hydraulic gradient line (HGL) used for in water supply design?",
        options: [
            { text: "To monitor flow velocity", cost: 0.02, time: 0.5 }, // Incorrect interpretation of HGL
            { text: "To indicate pipe material quality", cost: 0.03, time: 0.7 }, // Unrelated to HGL
            { text: "To measure soil settlement", cost: 0.01, time: 0.3 }, // Incorrect but less impactful
            { text: "To represent water pressure variation in the system", cost: 0, time: 0 } // Correct answer
        ],
        answer: "To represent water pressure variation in the system"
    },
    {
        question: "What is the maximum permissible water velocity in a water pipeline?",
        options: [
            { text: "2.0 m/s", cost: 0.02, time: 0.5 }, // Too low, inefficient design
            { text: "3.0 m/s", cost: 0, time: 0 }, // Correct answer
            { text: "1.5 m/s", cost: 0.03, time: 0.7 }, // Very low, increases pipe size unnecessarily
            { text: "4.5 m/s", cost: 0.01, time: 0.3 } // Too high, potential erosion issues but still within practical limits
        ],
        answer: "3.0 m/s"
    }
],
    procurement: [
    {
        question: "Which test ensures pipe quality before procurement?",
        options: [
            { text: "Tensile strength test", cost: 0.02, time: 0.5 }, // Important for metal pipes but not the primary test
            { text: "Visual inspection", cost: 0.03, time: 0.7 }, // Unreliable for ensuring full pipe quality
            { text: "Hydrostatic pressure test", cost: 0, time: 0 }, // Correct answer
            { text: "Chemical analysis", cost: 0.01, time: 0.3 } // Important for material selection but secondary
        ],
        answer: "Hydrostatic pressure test"
    },
    {
        question: "What ensures contractor compliance during procurement?",
        options: [
            { text: "Tender advertisements", cost: 0.02, time: 0.6 }, // Tender process only initiates procurement
            { text: "Material Test Certificates (MTC)", cost: 0, time: 0 }, // Correct answer
            { text: "Public inspections", cost: 0.01, time: 0.3 }, // Not a standard compliance measure
            { text: "Vendor reviews", cost: 0.03, time: 0.8 } // Reviews are useful but not official compliance documents
        ],
        answer: "Material Test Certificates (MTC)"
    },
    {
        question: "Which document defines quantities, materials, and costs for procurement?",
        options: [
            { text: "Purchase Order", cost: 0.03, time: 0.8 }, // A purchase order is based on BOQ, not a defining document
            { text: "Specification Sheet", cost: 0.02, time: 0.5 }, // Specifies materials but not quantities or cost
            { text: "Tender Notice", cost: 0.01, time: 0.3 }, // Used to invite bids, not define procurement
            { text: "Bill of Quantities (BOQ)", cost: 0, time: 0 } // Correct answer
        ],
        answer: "Bill of Quantities (BOQ)"
    },
    {
        question: "Which pipe material is preferred for high-pressure water transmission?",
        options: [
            { text: "Ductile Iron (DI)", cost: 0, time: 0 }, // Correct answer
            { text: "Cast Iron", cost: 0.02, time: 0.5 }, // Used in older systems, but DI is superior
            { text: "PVC", cost: 0.03, time: 0.7 }, // Not suitable for high pressure
            { text: "HDPE", cost: 0.01, time: 0.3 } // Good for distribution, but not for high pressure
        ],
        answer: "Ductile Iron (DI)"
    },
    {
        question: "What ensures timely delivery during procurement?",
        options: [
            { text: "Single-source contracting", cost: 0.03, time: 0.8 }, // High-risk procurement approach
            { text: "Vendor selection based on availability", cost: 0.02, time: 0.5 }, // Important, but not a structured schedule
            { text: "A detailed supply schedule", cost: 0, time: 0 }, // Correct answer
            { text: "Cost minimization", cost: 0.01, time: 0.3 } // Important for budget but does not ensure timely delivery
        ],
        answer: "A detailed supply schedule"
    }
],
    construction: [
    {
        question: "What is the purpose of bedding in pipeline construction?",
        options: [
            { text: "To anchor pipes firmly in place", cost: 0.02, time: 0.5 }, // Incorrect, anchoring is done differently
            { text: "To protect pipes from external loads", cost: 0.03, time: 0.7 }, // Partially correct but not the primary function
            { text: "To prevent water pressure loss", cost: 0.01, time: 0.3 }, // Incorrect, pressure loss is unrelated to bedding
            { text: "To provide uniform support for pipes", cost: 0, time: 0 } // Correct answer
        ],
        answer: "To provide uniform support for pipes"
    },
    {
        question: "What test ensures pipeline integrity after installation?",
        options: [
            { text: "Leakage test", cost: 0.01, time: 0.3 }, // Detects leaks but not full integrity
            { text: "Corrosion test", cost: 0.02, time: 0.5 }, // Corrosion affects longevity but not initial integrity
            { text: "Pressure test", cost: 0, time: 0 }, // Correct answer
            { text: "Visual inspection", cost: 0.03, time: 0.7 } // Not sufficient for integrity testing
        ],
        answer: "Pressure test"
    },
    {
        question: "What is the recommended trench width for a pipeline installation?",
        options: [
            { text: "Pipe diameter + 0.6 meters", cost: 0, time: 0 }, // Correct answer
            { text: "Pipe diameter + 1.5 meters", cost: 0.03, time: 0.8 }, // Excessive width, increasing cost and excavation time
            { text: "Pipe diameter + 0.9 meters", cost: 0.02, time: 0.5 }, // Slightly larger than necessary
            { text: "Pipe diameter + 0.3 meters", cost: 0.01, time: 0.3 } // Too narrow, may compromise installation
        ],
        answer: "Pipe diameter + 0.6 meters"
    },
    {
        question: "What material is recommended for backfilling trenches?",
        options: [
            { text: "Clay soil", cost: 0.03, time: 0.8 }, // Retains moisture, leading to instability
            { text: "Granular soil free of stones", cost: 0, time: 0 }, // Correct answer
            { text: "Loose sand", cost: 0.02, time: 0.5 }, // Provides weak support
            { text: "Wet soil", cost: 0.01, time: 0.3 } // Can cause excessive settling and shifting
        ],
        answer: "Granular soil free of stones"
    },
    {
        question: "Why is soil compaction necessary after pipe installation?",
        options: [
            { text: "To increase pipe diameter", cost: 0.02, time: 0.5 }, // Incorrect, pipe diameter is fixed
            { text: "To reduce trench width", cost: 0.01, time: 0.3 }, // Incorrect, trench width does not change
            { text: "To increase water flow", cost: 0.03, time: 0.7 }, // Incorrect, flow depends on pipe design
            { text: "To avoid soil settlement and pipe misalignment", cost: 0, time: 0 } // Correct answer
        ],
        answer: "To avoid soil settlement and pipe misalignment"
    }
],
    commissioning: [
    {
        question: "What is the final step in commissioning a water supply system?",
        options: [
            { text: "Ensuring all tests meet design specifications", cost: 0, time: 0 }, // Correct answer
            { text: "Leakage detection", cost: 0.02, time: 0.5 }, // Important but not the final step
            { text: "Calibrating flow meters", cost: 0.01, time: 0.3 }, // Necessary but occurs before final testing
            { text: "Inspecting reservoirs", cost: 0.03, time: 0.7 } // Part of routine checks, not final commissioning
        ],
        answer: "Ensuring all tests meet design specifications"
    },
    {
        question: "What ensures water quality during commissioning?",
        options: [
            { text: "Chemical treatment", cost: 0.01, time: 0.3 }, // Important but does not guarantee full quality assurance
            { text: "Visual inspection", cost: 0.03, time: 0.7 }, // Insufficient for ensuring water quality
            { text: "Chlorination and bacteriological testing", cost: 0, time: 0 }, // Correct answer
            { text: "Pressure testing", cost: 0.02, time: 0.5 } // Ensures pipeline integrity, not water quality
        ],
        answer: "Chlorination and bacteriological testing"
    },
    {
        question: "What is the purpose of flow testing during commissioning?",
        options: [
            { text: "To detect leaks", cost: 0.01, time: 0.3 }, // Leak detection is a separate step
            { text: "To monitor soil behavior", cost: 0.03, time: 0.7 }, // Unrelated to commissioning
            { text: "To adjust reservoir levels", cost: 0.02, time: 0.5 }, // Important but not the primary purpose
            { text: "To verify uniform water distribution", cost: 0, time: 0 } // Correct answer
        ],
        answer: "To verify uniform water distribution"
    },
    {
        question: "Why is the system flushed during commissioning?",
        options: [
            { text: "To reduce pipeline pressure", cost: 0.02, time: 0.5 }, // Incorrect, flushing does not control pressure
            { text: "To remove debris and contaminants", cost: 0, time: 0 }, // Correct answer
            { text: "To test soil settlement", cost: 0.03, time: 0.7 }, // Unrelated to commissioning
            { text: "To improve water velocity", cost: 0.01, time: 0.3 } // Incorrect, velocity is maintained by design
        ],
        answer: "To remove debris and contaminants"
    },
    {
        question: "Which document marks the official handover of the system?",
        options: [
            { text: "Quality Compliance Report", cost: 0.02, time: 0.5 }, // Important but not the final handover document
            { text: "Test Validation Report", cost: 0.01, time: 0.3 }, // Related but not the official handover document
            { text: "Material Certificate", cost: 0.03, time: 0.7 }, // Certifies materials, not system commissioning
            { text: "Commissioning Certificate", cost: 0, time: 0 } // Correct answer
        ],
        answer: "Commissioning Certificate"
    }
],
    operation: [
    {
        question: "What is the purpose of regular leak detection in water pipelines?",
        options: [
            { text: "To lower pipeline pressure", cost: 0.02, time: 0.5 }, // Incorrect, reducing pressure is not the goal
            { text: "To reduce water loss and improve efficiency", cost: 0, time: 0 }, // Correct answer
            { text: "To extend pipeline length", cost: 0.03, time: 0.7 }, // Completely incorrect
            { text: "To improve water taste", cost: 0.01, time: 0.3 } // Incorrect, unrelated to leaks
        ],
        answer: "To reduce water loss and improve efficiency"
    },
    {
        question: "Why is SCADA used during operation and maintenance?",
        options: [
            { text: "To test water quality", cost: 0.02, time: 0.5 }, // Water quality monitoring is separate
            { text: "To replace faulty pipes", cost: 0.03, time: 0.7 }, // SCADA does not replace pipes
            { text: "To monitor and control system performance remotely", cost: 0, time: 0 }, // Correct answer
            { text: "To build new reservoirs", cost: 0.01, time: 0.3 } // Incorrect, unrelated function
        ],
        answer: "To monitor and control system performance remotely"
    },
    {
        question: "What is the recommended interval for pipeline maintenance?",
        options: [
            { text: "Monthly", cost: 0.02, time: 0.5 }, // Too frequent, leading to inefficiency
            { text: "Annually", cost: 0.01, time: 0.3 }, // Too infrequent for effective maintenance
            { text: "Bi-annually", cost: 0.03, time: 0.7 }, // Not the recommended practice
            { text: "Quarterly", cost: 0, time: 0 } // Correct answer
        ],
        answer: "Quarterly"
    },
    {
        question: "What is a critical aspect of water supply sustainability?",
        options: [
            { text: "Replacing pipelines every year", cost: 0.03, time: 0.7 }, // Not feasible and highly expensive
            { text: "Increasing system pressure", cost: 0.02, time: 0.5 }, // Can cause pipe damage if done improperly
            { text: "Reducing water storage", cost: 0.01, time: 0.3 }, // Incorrect, reducing storage can cause supply issues
            { text: "Regular maintenance and monitoring", cost: 0, time: 0 } // Correct answer
        ],
        answer: "Regular maintenance and monitoring"
    },
    {
        question: "What equipment is used to measure water flow in pipelines?",
        options: [
            { text: "Flow meters", cost: 0, time: 0 }, // Correct answer
            { text: "SCADA sensors", cost: 0.02, time: 0.5 }, // SCADA monitors performance but does not measure flow
            { text: "Chlorinators", cost: 0.03, time: 0.7 }, // Incorrect, used for disinfection
            { text: "Pressure gauges", cost: 0.01, time: 0.3 } // Incorrect, measures pressure not flow
        ],
        answer: "Flow meters"
    }
],
    projectExecution: [
    {
        question: "After pipeline installations in urban areas, the approval must be obtained from which department?",
        options: [
            { text: "Public Works Department", cost: 0, time: 0.5 },
            { text: "Urban Development Authority", cost: 0, time: 0.7 },
            { text: "Revenue Department", cost: 0, time: 0.3 },
            { text: "Tamil Nadu Highways Department", cost: 0, time: 0 } // Correct answer
        ],
        answer: "Tamil Nadu Highways Department"
    },
    {
        question: "Approval authority for earthworks in national highways?",
        options: [
            { text: "Tamil Nadu Highways Department", cost: 0, time: 0.5 },
            { text: "Public Works Department", cost: 0, time: 0.7 },
            { text: "National Highways Authority of India (NHAI)", cost: 0, time: 0 }, // Correct answer
            { text: "Ministry of Road Transport and Highways", cost: 0, time: 0.3 }
        ],
        answer: "National Highways Authority of India (NHAI)"
    },
    {
        question: "For tax exemption on construction materials for water supply projects, which department handles approvals?",
        options: [
            { text: "Revenue Department", cost: 0, time: 0.5 },
            { text: "Commercial Taxes Department", cost: 0, time: 0 }, // Correct answer
            { text: "Public Works Department", cost: 0, time: 0.7 },
            { text: "Tamil Nadu Infrastructure Development Board", cost: 0, time: 0.3 }
        ],
        answer: "Commercial Taxes Department"
    },
    {
        question: "Before starting excavation, which online portal is used in Tamil Nadu for applying for permissions from multiple departments?",
        options: [
            { text: "Tamil Nadu e-Governance Portal", cost: 0, time: 0 }, // Correct answer
            { text: "Smart City Portal", cost: 0, time: 0.7 },
            { text: "TNeGA Road Cutting Portal", cost: 0, time: 0.3 },
            { text: "Public Works E-Approval System", cost: 0, time: 0.5 }
        ],
        answer: "Tamil Nadu e-Governance Portal"
    },
    {
        question: "Which test is mandatory to ensure water quality compliance during pipeline commissioning?",
        options: [
            { text: "Chlorination and bacteriological testing", cost: 0, time: 0 }, // Correct answer
            { text: "Turbidity testing", cost: 0, time: 0.5 },
            { text: "PH adjustment test", cost: 0, time: 0.7 },
            { text: "Hardness compliance test", cost: 0, time: 0.3 }
        ],
        answer: "Chlorination and bacteriological testing"
    },
    {
        question: "What document is essential for initiating payment requests for completed milestones in Tamil Nadu-funded projects?",
        options: [
            { text: "Tender Completion Report", cost: 0, time: 0.5 },
            { text: "Work Completion Certificate", cost: 0, time: 0 }, // Correct answer
            { text: "Tax Exemption Form", cost: 0, time: 0.7 },
            { text: "Utility Clearance Document", cost: 0, time: 0.3 }
        ],
        answer: "Work Completion Certificate"
    },
    {
        question: "Which office should be contacted to obtain approval to cross railway tracks during pipeline laying?",
        options: [
            { text: "Southern Railway Headquarters", cost: 0, time: 0.7 },
            { text: "Indian Railways Urban Development Unit", cost: 0, time: 0.5 },
            { text: "Divisional Railway Manager’s Office", cost: 0, time: 0 }, // Correct answer
            { text: "Public Works Railways Section", cost: 0, time: 0.3 }
        ],
        answer: "Divisional Railway Manager’s Office"
    },
    {
        question: "Which agency ensures stakeholder consultations are conducted for urban water supply projects in Tamil Nadu?",
        options: [
            { text: "Tamil Nadu Highways Department", cost: 0, time: 0.7 },
            { text: "Tamil Nadu Revenue Department", cost: 0, time: 0.5 },
            { text: "Tamil Nadu Pollution Control Board", cost: 0, time: 0.3 },
            { text: "Tamil Nadu Municipal Administration and Water Supply Department", cost: 0, time: 0 } // Correct answer
        ],
        answer: "Tamil Nadu Municipal Administration and Water Supply Department"
    },
    {
        question: "To ensure timely release of funds for the project, which document must be submitted to the Tamil Nadu Water Supply and Drainage Board?",
        options: [
            { text: "Completion Certificate", cost: 0, time: 0.3 },
            { text: "Tender Award Report", cost: 0, time: 0.5 },
            { text: "Invoice Summary Document", cost: 0, time: 0.7 },
            { text: "Monthly Progress Report (MPR)", cost: 0, time: 0 } // Correct answer
        ],
        answer: "Monthly Progress Report (MPR)"
    },
    {
        question: "What is required from the Urban Local Body (ULB) before pipeline laying can begin in areas with existing infrastructure?",
        options: [
            { text: "Environmental Clearance Certificate", cost: 0, time: 0.5 },
            { text: "Road Width Survey Report", cost: 0, time: 0.7 },
            { text: "No Objection Certificate (NOC)", cost: 0, time: 0 }, // Correct answer
            { text: "Utility Assessment Report", cost: 0, time: 0.3 }
        ],
        answer: "No Objection Certificate (NOC)"
    }
],
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

// Set initial display of time as months
document.getElementById("project-time").innerText = "0 Months";

function updateProjectStatus() {
    document.getElementById("project-cost").innerText = `${extraCost.toFixed(2)} crore`;

    // Fix the initial display issue
    let displayTime;
    if (extraTime === 0) {
        displayTime = "0 months"; 
    } else if (extraTime >= 12) {
        displayTime = `${(extraTime / 12).toFixed(1)} Years`;
    } else {
        displayTime = `${extraTime.toFixed(1)} Months`;
    }

    document.getElementById("project-time").innerText = displayTime;
    document.getElementById("score-value").innerText = totalScore; // Ensure live score updates
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

    let totalPossibleScore = Object.values(phaseQuestions).reduce((sum, phase) => sum + phase.length * 10, 0);
    let requiredScore = totalPossibleScore * 0.5; // 50% threshold (200 in this case)

    let summaryMessage = "";
    let titleMessage = "";
    let allowCertificate = totalScore >= requiredScore; // Check if the player qualifies for a certificate

    if (wrongAnswersCount > 0) {
        summaryMessage = `You exceeded the project limits by <strong>₹${extraCost.toFixed(2)} crore</strong> and <strong>${extraTime.toFixed(2)} months</strong>.`;
    } else {
        summaryMessage = `Congratulations! You stayed within the project cost and time limits!`;
    }

    // **Fix: Set title message correctly**
    if (allowCertificate) {
        titleMessage = "🎉 Congratulations! 🎉";
    } else {
        titleMessage = "Thanks for Playing!";
    }

    let message = `
        <p>Thank you, <strong>${name}</strong>, for playing the game!</p>
        <p>Your total score is <strong>${totalScore}</strong>, ${allowCertificate ? "" : `but you need at least <strong>${requiredScore}</strong> to unlock the certificate.`}</p>
        <p>${summaryMessage}</p>
    `;

    if (!allowCertificate) {
        message += `<p>Try again and score at least <strong>200 points</strong> to earn your certificate!</p>`;
    }

    document.getElementById("congratulations-message").innerHTML = `<h2>${titleMessage}</h2>` + message;

    const congratulationsContainer = document.querySelector(".congratulations-container");

    // **Remove existing buttons to prevent duplication**
    const existingButtons = congratulationsContainer.querySelectorAll("button");
    existingButtons.forEach((btn) => btn.remove());

    // Create a container for buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "center";
    buttonContainer.style.gap = "10px"; // Adds spacing between buttons

    // Play Again Button
    let playAgainButton = document.createElement("button");
    playAgainButton.innerText = "Play Again";
    playAgainButton.onclick = restartQuiz;

    buttonContainer.appendChild(playAgainButton);

    // Add the certificate button only if they qualify
    if (allowCertificate) {
        let certificateButton = document.createElement("button");
        certificateButton.innerText = "Download Certificate";
        certificateButton.onclick = generateCertificate;
        buttonContainer.appendChild(certificateButton);
    }

    // Append the button container inside the congratulations-container
    congratulationsContainer.appendChild(buttonContainer);
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
    doc.text("CERTIFICATE OF COMPLETION", 400, 120, { align: "center" });

    // Formal Certification Statement
    doc.setFont("times", "italic");
    doc.setFontSize(24);
    doc.text("This certificate is presented to", 400, 180, { align: "center" });

    // Participant's Name (Elegant & Bold)
    let name = document.getElementById("name").value || "Participant";
    doc.setFont("times", "bold");
    doc.setFontSize(36);
    doc.text(name, 400, 230, { align: "center" });

    // Achievement Statement
    doc.setFont("times", "normal");
    doc.setFontSize(22);
    doc.text("for successfully completing the online game on", 400, 280, { align: "center" });

    // Course Name Wrapping Issue
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    let courseName = "Project Finance for Non-Finance Executives - Water Supply Project Implementation";
    let courseText = doc.splitTextToSize(courseName, 600); // Ensures text stays within the certificate width
    doc.text(courseText, 400, 320, { align: "center" });

    // Score Display
    let scoreText = `Score: ${totalScore} / ${totalPossibleScore}`;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(22);
    doc.text(scoreText, 400, 370, { align: "center" });

    // Date Formatting (Day, Month, Year)
    let today = new Date();
    let options = { day: "numeric", month: "long", year: "numeric" };
    let formattedDate = today.toLocaleDateString("en-US", options);
    doc.setFontSize(20);
    doc.text(`Date of Completion: ${formattedDate}`, 400, 420, { align: "center" });

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
        li.innerText = option.text; // Extract the text property of the option object
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
            li.onclick = () => handleOptionSelect(option.text, question.answer, li); // Pass only the text for comparison
        }, index * 500); // Delay between options
    });

    // Handle Next button click for question transitions
    nextBtn.onclick = () => {
        nextBtn.disabled = true; // Disable the button immediately after clicking
        currentQuestionIndex++; // Move to the next question
        loadQuestion(); // Load the next question
    };
}

function handleOptionSelect(selectedOptionText, correctAnswer, element) {
    const options = document.querySelectorAll("#options li");

    // Disable further selections
    options.forEach((li) => (li.onclick = null));

    let question = phaseQuestions[currentPhase].find(q => q.answer === correctAnswer);
    let selectedOption = question.options.find(opt => opt.text === selectedOptionText);

    if (selectedOption.text === correctAnswer) {
        correctSound.play();
        element.classList.add("correct");
        score += 10;
        totalScore += 10;
    } else {
        wrongSound.play();
        element.classList.add("incorrect");
        wrongAnswersCount++;

        // Highlight correct answer
        options.forEach((li) => {
            if (li.innerText === correctAnswer) li.classList.add("correct");
        });

        // Apply **different cost & time penalties** based on the selected wrong option
        extraCost += selectedOption.cost;
        extraTime += selectedOption.time;
    }

    // **Update UI**
    updateProjectStatus();

    // Enable the Next button
    const nextBtn = document.getElementById("next-btn");
    nextBtn.style.display = "block";
    nextBtn.disabled = false;
}

function updateProjectStatus() {
    document.getElementById("project-cost").innerText = `${extraCost.toFixed(2)} crore`;

    let displayTime = extraTime === 0 ? "0 months" : extraTime >= 12 ? `${(extraTime / 12).toFixed(1)} Years` : `${extraTime.toFixed(1)} Months`;

    document.getElementById("project-time").innerText = displayTime;
    document.getElementById("score-value").innerText = totalScore; // Live score updates
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

    console.log(`Current Phase: ${currentPhase}, Phase Score: ${score}, Total Score Before Update: ${totalScore}`);

    // Update Project Cost and Time Exceeded in the container
    updateProjectStatus(); // **Ensure cost, time, and score updates dynamically**

    // Check if the current phase is the last phase
    if (currentPhase === "projectExecution") {
        document.getElementById("right-image").style.display = "block";
        showCompletionPopup();
        return;
    }

    // Show phase completion pop-up
    showPhaseCompletionPopup(currentPhase, score, () => {
        // Define phase order and move to next
        const phaseOrder = ["planning", "design", "procurement", "construction", "commissioning", "operation", "projectExecution"];
        let nextPhase = phaseOrder[phaseOrder.indexOf(currentPhase) + 1];

        if (nextPhase) {
            startPhase(nextPhase);
        }

        score = 0; // **Reset phase score only**
        console.log(`Score Reset to: ${score}`);
        document.getElementById("score-value").innerText = totalScore; // **Display cumulative score**
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
        <p>Project Cost Exceeded: ₹${extraCost.toFixed(2)} crore</p>
        <p>Project Time Exceeded: ${extraTime.toFixed(1)} months</p>
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
    let isMuted = !backgroundMusic.muted;

    backgroundMusic.muted = isMuted;
    correctSound.muted = isMuted;
    wrongSound.muted = isMuted;

    document.getElementById("mute-button").innerText = isMuted ? "Unmute" : "Mute";
}
