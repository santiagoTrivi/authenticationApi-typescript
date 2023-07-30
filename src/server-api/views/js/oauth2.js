

function handleCredentialResponse(response) {

    const data = {
        g_csrf_token: response.credential
    }

    fetch('http://localhost:3000/v1/auth/oauth2/google', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
        console.log(response);
    })
 }