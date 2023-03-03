var contacts = []; //main

document.getElementById("btn-modal").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
});
document.getElementById("btn-fechar").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});

//Obtem valores dos inputs
function add() {
  var name = document.getElementById("id_name").value;

  var lastname = document.getElementById("id_lastname").value;

  var mobile = document.getElementById("id_mobile").value;

  var email = document.getElementById("id_email").value;
  if (name.length == 0 || mobile.length == 0) {
    alert("Preencha os campos obrigatórios");
  } else {
    var con = {
      newName: name,
      newMobile: mobile,
      newEmail: email,
      newLastname: lastname,
    };
    contacts.push(con);
    alert("Contato salvo com sucesso");
    print();
  }
}

//Mostra os valores dos inputs
function print() {
  var temp = "";
  for (let i = 0; i < contacts.length; i++) {
    temp +=
      "<div class='content1'>"+
      "<div class='line'> " +
      "<p>Nome: </p>" +
      contacts[i].newName +
      "<p></p> " +
      contacts[i].newLastname +
      "<p> Número: </p>" +
      contacts[i].newMobile +
      "<p> E-mail: </p>" +
      contacts[i].newEmail +
      "</div>"+
      "<div class='editDel'><button class='line2' onclick='del(" +
      i +
      ")'><i class='fas fa-trash'></i></button><button class='line3'><i class='fas fa-pencil-alt'></i></button></div></div>";
  }
  document.getElementById("3").innerHTML = temp;
}

/* função editar

function editing(i){

} */

//função deletar
function del(i) {
  // alert(i);
  alert("O contato foi deletado");
  contacts.splice(i, 1);
  print();
}

/* A função de busca do contato eu rsolvi fazer apenas o front-end, 
como diz a orientação, levando em consideração o tempo e o método.
mas vou procurar aprimorar esse código futuramente, vou colocar 
todas as funcionalidades */
