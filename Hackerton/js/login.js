const loginBtn = document.querySelector('#Login');

const regiBtn = document.querySelector('#Register');

const logoutBtn = document.querySelector('#Logout');

loginBtn.addEventListener('click', login);

regiBtn.addEventListener('click', register);

logoutBtn.addEventListener('click', logout);


function register() {

    let ID = document.querySelector('#ID').value;

    let PW = document.querySelector('#PW').value;

    const data = {

        id: ID,

        password: PW,

    };

    const httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function() {

        if (httpRequest.readyState === XMLHttpRequest.DONE) {

            console.log(httpRequest.responseText);

        }

    };


    httpRequest.open('POST', 'http://49.247.131.57:30704/auth/register', true);

    httpRequest.setRequestHeader('content-type', 'application/json');

    httpRequest.send(JSON.stringify(data));



    document.querySelector('#ID').value = '';

    document.querySelector('#PW').value = '';

}

function login() {

    let ID = document.querySelector('#ID').value;

    let PW = document.querySelector('#PW').value;

    var data = {
        id: ID,
        pw: PW,

    };

    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function() {

        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            alert('end');
            alert(httpRequest.responseText);
        }
    };

    httpRequest.open('POST', 'http://49.247.131.57:30704/auth/login', true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(data));

    //      document.querySelector('#ID').value = '';

    //    document.querySelector('#PW').value = '';
}

function logout() {
    const httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function() {

        if (httpRequest.readyState === XMLHttpRequest.DONE) {

            document.location.reload();
        }
    };

    httpRequest.open('get', 'https://49.247.131.57:30704/auth/login', true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send();

}