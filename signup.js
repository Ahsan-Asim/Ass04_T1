$(document).ready(function() {
    $("#sign-up").submit(function(event) {

        var firstname = $("#firstname").val();
        var middlename = $("#middlename").val();
        var lastname = $("#lastname").val();


        

        // // Check if username is at least 8 characters long
        // if (firstname.length < 8) {
        //     alert("Username must be at least 8 characters long.");
        //     event.preventDefault(); // Prevent form submission
        // }

        // if (middlename.length < 8) {
        //     alert("Username must be at least 8 characters long.");
        //     event.preventDefault(); // Prevent form submission
        // }

        // if (lastname.length < 8) {
        //     alert("Username must be at least 8 characters long.");
        //     event.preventDefault(); // Prevent form submission
        // }

        


        var password = $("#password").val();

        // Check if password is at least 8 characters long
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault(); // Prevent form submission
        }

        // Apply regex validation to check if username is alphanumeric
        var input1 = $("#firstname").val();
        var input2 = $("#middlename").val();
        var input3 = $("#lastname").val();

        var regex=new RegExp("[a-zA-Z]{5,10}$").test(input1);
        if (!regex) {
            $("#firstname").css("border", "2px solid red");
            alert("Name must be alphanumeric.");
            event.preventDefault(); // Prevent form submission
        }
        else{
            $("#firstname").css("border", "2px solid green");

        }

        var regex=new RegExp("[a-zA-Z]{5,10}$").test(input2);
        if (!regex) {
            $("#middlename").css("border", "2px solid red");
            alert("Name must be alphanumeric.");
            event.preventDefault(); // Prevent form submission
        }
        else{
            $("#middlename").css("border", "2px solid green");
        }

        var regex=new RegExp("[a-zA-Z]{5,10}$").test(input3);
        if (!regex) {
            $("#lastname").css("border", "2px solid red");
            alert("Name must be alphanumeric.");
            event.preventDefault(); // Prevent form submission
        }
        else{
            $("#lastname").css("border", "2px solid green");
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


        var email = $("#email").val();

        var regex = /^[\w-]+(\.[\w-]+)*@(gmail\.com)$/;
        if (!regex.test(email)) {
            $("#email").css("border", "2px solid red");
            alert("Email address must be in a valid format.");
            event.preventDefault(); // Prevent form submission
        }
        else{
            $("#email").css("border", "2px solid green");

        }




        var age = $("#age").val();

        // Check if the input is a valid number
        if (isNaN(age)) {
            $("#age").css("border", "2px solid red");
            alert("Age must be a valid number.");
            event.preventDefault(); // Prevent form submission
            return; // Exit the function early if age is not a number
        }
        else{
            $("#age").css("border", "2px solid green");

        }

        // Check if the age is within the specified range (5-25)
        if (age < 5 || age > 25) {
            $("#age").css("border", "2px solid red");
            alert("Age must be within the range of 5 to 25.");
            event.preventDefault(); // Prevent form submission
            return; // Exit the function early if age is out of range
        }
        else{
            $("#age").css("border", "2px solid green");

        }
    });
});
