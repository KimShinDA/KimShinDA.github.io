// Colors for each day
var dayColors = {
    "Monday": { bg: "#FFADAD", border: "#E07A7A" }, 
    "Tuesday": { bg: "#FFD6A5", border: "#E0A87A" },
    "Wednesday": { bg: "#FDFFB6", border: "#D4E07A" }, 
    "Thursday": { bg: "#CAFFBF", border: "#9FDBA5" }, 
    "Friday": { bg: "#9BF6FF", border: "#7ADCE0" }, 
    "Saturday": { bg: "#A0C4FF", border: "#7A9EE0" }, 
    "Sunday": { bg: "#BDB2FF", border: "#8F7AE0" }
};

// Add event listeners to buttons
var buttons = document.querySelectorAll(".day-btn");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        createAnimatedBox(button.getAttribute("data-day"));
    });
});

function createAnimatedBox(day) {
    var animationContainer = document.querySelector(".animation-container");

    // Remove existing boxes with animation
    document.querySelectorAll(".animated-box").forEach(box => {
        box.style.top = "-20px"; 
        setTimeout(() => box.remove(), 1000);
    });

    // Create new box
    var newBox = document.createElement("div");
    newBox.className = "animated-box";
    newBox.style.borderColor = dayColors[day].border;
    newBox.style.backgroundColor = "transparent"; 
    newBox.style.top = "-20px";
    newBox.dataset.bgColor = dayColors[day].bg;

    animationContainer.appendChild(newBox);

    setTimeout(() => {
        newBox.style.top = "60%";
    }, 300); 

    setTimeout(checkOverlaps, 200);
}

// Check for overlapping boxes
function checkOverlaps() {
    var boxes = document.querySelectorAll(".animated-box");

    boxes.forEach(box1 => {
        var isOverlapping = false;

        boxes.forEach(box2 => {
            if (box1 !== box2 && isOverlappingElements(box1, box2)) {
                isOverlapping = true;
            }
        });

        if (isOverlapping) {
            box1.style.backgroundColor = box1.dataset.bgColor;
            box1.style.opacity = "1";
        } else {
            box1.style.backgroundColor = "transparent";
            box1.style.opacity = "12";
        }
    });

    requestAnimationFrame(checkOverlaps);
}

// Check if two elements overlap
function isOverlappingElements(el1, el2) {
    var rect1 = el1.getBoundingClientRect();
    var rect2 = el2.getBoundingClientRect();

    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}
