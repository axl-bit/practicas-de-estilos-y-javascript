

function Registro() {
    event.preventDefault();

    var username = document.getElementById("Nombre").value;
    var email = document.getElementById("Correo").value;
    var pass = document.getElementById("password").value;
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var repertir = document.getElementById("Repetir").value;


    var user = {
        username: username,
        email: email,
        pass: pass,
        sexo: sexo,
    };

    if (username.length < 2) {
        alert("Nombre muy corto")
    }
    else if (pass.length < 6) {
        alert("la contraseña minima es de 6 caracteres")
    }
    else if (repertir != pass) {
        alert("La contraseña no es igual")
    }
    else {
        var json = JSON.stringify(user);
        localStorage.setItem(email, json);
        console.log('user added');
    };

    
}


function ingresar(e){

    event.preventDefault();

    var email = document.getElementById("email").value;
    console.log(email);
    var pass = document.getElementById("password").value;
    console.log(pass);

    var user = localStorage.getItem(email);
    console.log(user);
    var data = JSON.parse(user);
    console.log(data);

    if(user == null){
        alert("el correo ingresado no existe");
    }
    else if(email == data.email && pass == data.pass){
        window.location="/HTML/formularioBienvenida.html"
        alert("bienvenido: " + data.email);
        emailglobal = data.email;
        
    }
    else{
        alert("contraseña incorrecta!!!");
    }

}
