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
            $("#d6").html("Password must contain one alphanumeric and special character")
            $("#password").css("border", "2px solid red");
            event.preventDefault(); // Prevent form submission
        }
        else{
            $("#password").css("border", "2px solid green");
            $("#d6").html("")


        }

        var confirmPassword=$("#confirm-password").val();

        if(password!=confirmPassword)
        {
            $("#d7").html("Confirm password should match to password")
            $("#confirm-password").css("border", "2px solid red");
            event.preventDefault(); // Prevent form submission
        }
        else{
            $("#confirm-password").css("border", "2px solid green");
            $("#d7").html("")


        }

        // Apply regex validation to check if username is alphanumeric
        var input1 = $("#firstname").val();
        var input2 = $("#middlename").val();
        var input3 = $("#lastname").val();

        var regex=new RegExp("[a-zA-Z]{5,10}$").test(input1);
        if (!regex) {
            $("#firstname").css("border", "2px solid red");
            $("#d1").html("Name should be alphanumeric and in range (5,8)")
            // alert("Name must be alphanumeric.");
            event.preventDefault(); // Prevent form submission
        }
        else{
            $("#firstname").css("border", "2px solid green");
            $("#d1").html("")


        }

        var regex=new RegExp("[a-zA-Z]{5,10}$").test(input2);
        if (!regex) {
            $("#middlename").css("border", "2px solid red");
            $("#d2").html("Name should be alphanumeric and in range (5,8)")
            event.preventDefault(); // Prevent form submission
        }
        else{
            $("#middlename").css("border", "2px solid green");
            $("#d2").html("")

        }

        var regex=new RegExp("[a-zA-Z]{5,10}$").test(input3);
        if (!regex) {
            $("#lastname").css("border", "2px solid red");
            $("#d3").html("Name should be alphanumeric and in range (5,8)")
            event.preventDefault(); // Prevent form submission
        }
        else{
            $("#lastname").css("border", "2px solid green");
            $("#d3").html("")

        }


        var password = $("#password").val();
        var regex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z0-9])/.test(password);
        if (!regex) {
            $("#password").css("border", "2px solid red");
            $("#d6").html("Password must contain one alphanumeric and special character")
            event.preventDefault(); // Prevent form submission
        }
        else{
            if(password.length>=8)
            {
            $("#password").css("border", "2px solid green");
            $("#d6").html("")
            }

        }


        var email = $("#email").val();

        var regex = /^[\w-]+(\.[\w-]+)*@(gmail\.com)$/;
        if (!regex.test(email)) {
            $("#email").css("border", "2px solid red");
            $("#d4").html("Email format is not correct")
            event.preventDefault(); // Prevent form submission
        }
        else{
            $("#email").css("border", "2px solid green");
            $("#d4").html("")


        }




        var age = $("#age").val();

        // Check if the input is a valid number
        if (isNaN(age)) {
            $("#age").css("border", "2px solid red");
            $("#d5").html("Age should not be empty")
            event.preventDefault(); // Prevent form submission
            return; // Exit the function early if age is not a number
        }
        else{
            $("#age").css("border", "2px solid green");
            $("#d5").html("")


        }

        // Check if the age is within the specified range (5-25)
        if (age < 5 || age > 25) {
            $("#age").css("border", "2px solid red");
            $("#d5").html("Age should be in range 5 to 25")
            event.preventDefault(); // Prevent form submission
            return; // Exit the function early if age is out of range
        }
        else{
            $("#age").css("border", "2px solid green");
            $("#d5").html("")


        }
    });
});
