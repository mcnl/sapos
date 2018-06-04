  // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDWEnqHmZViFSXklOcdMS7srT5QS9M4ugU",
    authDomain: "saapoh-1456d.firebaseapp.com",
    databaseURL: "https://saapoh-1456d.firebaseio.com",
    projectId: "saapoh-1456d",
    storageBucket: "saapoh-1456d.appspot.com",
    messagingSenderId: "540575696249"
 };
 
 firebase.initializeApp(config);


function teste(){
	console.log("Hello there!");

}
function login(){
	var email = document.getElementById("email").value;
	var senha = document.getElementById("senha").value;
	window.alert(nome);
	window.alert(email);
    firebase.auth().signInWithEmailAndPassword(email, senha).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorMessage);

        return errorMessage;
    });

    return;
}
function irparacadastro(){
	console.log("Indo para cadastro!");
	window.location.href = "cadastro.html";
}
function criarUsuario(email,senha){
	firebase.auth().createUserWithEmailAndPassword(email, senha)
	    .then(function(){

	    })
	    .catch(function(error) {
	        var errorCode = error.code;
	        var errorMessage = error.message;

	        window.alert(errorMessage);

	        return error;
	    });
}
function cadastrar(){
	var nome = document.getElementById("name").value;
	var cpf = document.getElementById("cpf").value;
	var email = document.getElementById("email").value;
	var idade = document.getElementById("idade").value;
	var sexo;
	if(document.getElementById("gender1").checked){
		sexo = document.getElementById("gender1").value;
	}
	else if(document.getElementById("gender2").checked){
		sexo = document.getElementById("gender2").value;
	}
	else if(document.getElementById("gender3").checked){
		sexo = document.getElementById("gender3").value;
	}
	var senha = document.getElementById("senha").value;
	var senha1 = document.getElementById("senha1").value;
	var cluster = document.getElementById("cluster").value;

	window.alert(nome);
	window.alert(cpf);
	window.alert(email);
	window.alert(idade);
	window.alert(sexo);
	window.alert(cluster);
	if(senha != senha1){
		document.getElementById("senha").value = "";
		document.getElementById("senha1").value = "";
		window.alert("Senhas nao correspondem!");	
	}
	else{
	    criarUsuario(email,senha);
	}
}