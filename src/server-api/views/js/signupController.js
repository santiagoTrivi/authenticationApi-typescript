$(document).ready(function(){
    $('#submit').click(function(){

        $('#loginError').empty();

        const userdata = {
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            birthdate: $('#birthdate').val()
        }

        fetch('http://localhost:3000/v1/auth/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
        .then(res => res.json())
        .then(response => {

            const api_response = response.response;
            console.log(api_response);

            if(api_response.success){

                return console.log(api_response)
            }else{

                let error_info  = api_response.message;

                if(api_response.status_code === 400){
                    error_info = 'something went wrong'
                }
                
                $('#loginError').append( `<div class="alert alert-danger mt-3" role="alert">${error_info}</div>` );
            }
            
        })

    })
})