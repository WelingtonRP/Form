function listarDados(){
	var nome = document.getElementById("nome").value;
	var email = document.getElementById("email").value;
	var pesFisJur = document.getElementById("pesFisJur").value;
	var telefone = document.getElementById("telefone").value;
	var cep = document.getElementById("cep").value;
	var logradouro = document.getElementById("logradouro").value;
	var numero = document.getElementById("numero").value;
	var bairro = document.getElementById("bairro").value;
	var cidade = document.getElementById("cidade").value;
	var estado = document.getElementById("estado").value;

	var table = document.getElementById("tabela");
	var novaLinha = table.insertRow(table.rows.length);

	var cell1 = novaLinha.insertCell(0);
	var cell2 = novaLinha.insertCell(1);
	var cell3 = novaLinha.insertCell(2);
	var cell4 = novaLinha.insertCell(3);
	var cell5 = novaLinha.insertCell(4);
	var cell6 = novaLinha.insertCell(5);
	var cell7 = novaLinha.insertCell(6);
	var cell8 = novaLinha.insertCell(7);
	var cell9 = novaLinha.insertCell(8);
	var cell10 = novaLinha.insertCell(9);

	cell1.innerHTML = nome;
	cell2.innerHTML = email;
	cell3.innerHTML = pesFisJur;
	cell4.innerHTML = telefone;
	cell5.innerHTML = cep;
	cell6.innerHTML = logradouro;
	cell7.innerHTML = numero;
	cell8.innerHTML = bairro;
	cell9.innerHTML = cidade;
	cell10.innerHTML = estado;

	document.getElementById("cadastro").reset();
}

function excluirUltima(){
	var table = document.getElementById("tabela");

	if (table.rows.length == 1){
		alert("Não há dados para excluir.");
	} else{
		table.deleteRow(table.rows.length - 1);
	}
}