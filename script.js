// Declare variables of different data types
var stringVar = "Hello, World!";
var numberVar = 42;
var booleanVar = true;

console.log("String Variable:", stringVar);
console.log("Number Variable:", numberVar);
console.log("Boolean Variable:", booleanVar);

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract the second number from the first
function subtract(a, b) {
    return a - b;
}

// Function to divide the first number by the second
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Event listeners for buttons
document.getElementById("addBtn").addEventListener("click", function() {
    performOperation("add");
});

document.getElementById("subtractBtn").addEventListener("click", function() {
    performOperation("subtract");
});

document.getElementById("multiplyBtn").addEventListener("click", function() {
    performOperation("multiply");
});

document.getElementById("divideBtn").addEventListener("click", function() {
    performOperation("divide");
});

// Function to perform the selected operation and update the DOM
function performOperation(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else {
        switch (operation) {
            case "add":
                result = add(num1, num2);
                break;
            case "subtract":
                result = subtract(num1, num2);
                break;
            case "multiply":
                result = multiply(num1, num2);
                break;
            case "divide":
                result = divide(num1, num2);
                break;
            default:
                result = "Unknown operation.";
        }
    }

    document.getElementById("result").textContent = "Result: " + result;
}

// Chart.js Example
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar', // You can change this to 'line', 'pie', etc.
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
