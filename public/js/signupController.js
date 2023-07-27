$(document).ready(function(){
    $('#submit').click(function(){

        $('#loginError').empty();

        const userdata = {
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            passwordConfirmation: $('#passwordConfirmation').val(),
            birthdate: $('#birthdate').val()
        }

        console.log(userdata);

        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
        .then(res => res.json())
        .then(response => {

            console.log(response);
            if(response.success){
                return console.log(response)
            }
            let error_info  = response.error;

            if(response.status === 400){
                error_info = 'something went wrong'
            }
            
            $('#loginError').append( `<div class="alert alert-danger mt-3" role="alert">${error_info}</div>` );
            
        })

    
/** 
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/user",
            data: JSON.stringify(userdata),
            contentType: "application/json; charset=utf-8",
            traditional: true,
            success: function (data) {
            
                console.log(data);
                
            },
            error: function (error) {
                const res = error.responseJSON;

                $('#loginError').append( `<div class="alert alert-danger mt-3" role="alert">${res.error}</div>` );
                
            }
        });


*/


    })
})