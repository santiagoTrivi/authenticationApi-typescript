$(document).ready(function(){
    $('#submit').click(function(){

        $('#loginError').empty();

        const userdata = {
            email: $('#email').val(),
            password: $('#userPassword').val()
        }

        fetch('http://localhost:3000/v1/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
        .then(res => res.json())
        .then(response => {

            const serverResponse = response.response;

            if(serverResponse.success){
                return console.log(serverResponse)
            }
            let error_info  = serverResponse.message;
            
            $('#loginError').append( `<div class="alert alert-danger mt-3" role="alert">${error_info}</div>` );
            
        })
    
    })
})