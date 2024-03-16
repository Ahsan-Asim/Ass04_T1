$(document).ready(function() {
    $("#Sign-In").submit(function(event) {
        var username = $("#username").val();
        var password = $("#password").val();

        // // Check if username is at least 8 characters long
        // if (username.length < 8) {
        //     alert("Username must be at least 8 characters long.");
        //     event.preventDefault(); // Prevent form submission
        // }

        // Check if password is at least 8 characters long
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault(); // Prevent form submission
        }

        // Apply regex validation to check if username is alphanumeric
        var input = $("#username").val();
        var regex=new RegExp("[a-zA-Z]{5,10}$").test(input);
        if (!regex) {
            $("#username").css("border", "2px solid red");
            alert("Username must be alphanumeric.");
            event.preventDefault(); // Prevent form submission
        }
        else{
            $("#username").css("border", "2px solid green");

        }


        var password = $("#password").val();
        var regex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z0-9])/.test(password);
        if (!regex) {
            $("#password").css("border", "2px solid red");
            alert("Password must contain at least one special character and one numeric character.");
            event.preventDefault(); // Prevent form submission
        }
        else{
            $("#password").css("border", "2px solid green");

        }
    });
});
