$(document).ready(function(){
    $('#submit').click(function(){

        $('#loginError').empty();

        const userdata = {
            username: $('#username').val(),
            userPassword: $('#userPassword').val()
        }

        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
        .then(res => res.json())
        .then(response => {

            if(response.success){
                return console.log(response)
            }
            let error_info  = response.error;

            if(response.status === 400){
                error_info = 'something went wrong'
            }
            
            $('#loginError').append( `<div class="alert alert-danger mt-3" role="alert">${error_info}</div>` );
            
        })
    
    })
})