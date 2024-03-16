// Function to redirect to another page
function redirectToAnotherPage1() {
    window.location.href = "sign_up.html";
}

// Function to redirect to another page
function redirectToAnotherPage2() {
    window.location.href = "sign_in.html";
}

// Add event listener to the "yes" button
document.getElementById("YesButton").addEventListener("click", function() {
    redirectToAnotherPage1();
});


// Add event listener to the "yes" button
document.getElementById("NoButton").addEventListener("click", function() {
    redirectToAnotherPage2();
});