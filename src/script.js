var contacts = []; //main

//Obtem valores dos inputs
function add(){
    var name = document.getElementById("id_name").value;

    var lastname = document.getElementById("id_lastname").value;

    var mobile = document.getElementById("id_mobile").value;

    var email = document.getElementById("id_email").value;
    if(name.length == 0 || mobile.length==0){
        alert("Preencha os campos obrigatórios");

    }else{
        var con = {
                newName : name,
                newMobile : mobile,
                newEmail : email,
                newLastname : lastname
            };
            contacts.push(con);
            alert("Contato salvo com sucesso");
            print();


    }
    
   
}

//Mostra os valores dos inputs
function print(){
    var temp="";
    for(let i=0;i<contacts.length;i++){
        temp += "<div class='line'><b> "+"Nome: "+contacts[i].newName+"<br>Sobrenome: "+contacts[i].newLastname+
        "<br>Número: "+contacts[i].newMobile+"<br>E-mail: "+contacts[i].newEmail+
        "</b><div class='line2' onclick='del("+i+")'><b>Apagar</b></div></div><div class='line3'><b>Editar</b></div></div>"; 
          

    }
    document.getElementById("3").innerHTML = temp;
}

/* função editar

function editing(i){

} */

//função deletar
function del(i){
    // alert(i);
    alert("O contato foi deletado");
    contacts.splice(i,1);
    print();
}

/* A função de busca do contato eu rsolvi fazer apenas o front-end, 
como diz a orientação, levando em consideração o tempo e o método.
mas vou procurar aprimorar esse código futuramente, vou colocar 
todas as funcionalidades */ 
