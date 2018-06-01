function teste(){
	console.log("Hello there!");

}
function irparacadastro(){
	console.log("Indo para cadastro!");
	window.location.href = "cadastro.html";
}

function cadastrar(){
	var nome = document.getElementById("name").value;
	var cpf = document.getElementById("cpf").value;
	var email = document.getElementById("email").value;
	var idade = document.getElementById("idade").value;
	var sexo;
	

	var cluster = document.getElementById("cluster").value;

	window.alert(nome);
	window.alert(cpf);
	window.alert(email);
	window.alert(idade);
	window.alert(sexo);
	window.alert(cluster);

}