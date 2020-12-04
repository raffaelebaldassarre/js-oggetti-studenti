$(function() { 
  /* js-oggetti-studenti

    Istruzioni:
            Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. 
            Stampare a schermo attraverso il for in tutte le proprietà.        
            Creare un array di oggetti di studenti. 
            Cliccare su tutti gli studenti e stampare per ognuno nome e cognome
            Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/



    /* //Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
    var persona = {
        nome : "Raffaele",
        cognome : "Baldassarre",
        età : 32
    }

    //Stampare a schermo attraverso il for in tutte le proprietà.
    for (var key in persona) {
        console.log(key,persona[key]);
    }

    //Creare un array di oggetti di studenti.
    var studenti = [
        {
        nome : "Raffaele",
        cognome : "Baldassarre",
        età : 32
        }
    ]
    //Cliccare su tutti gli studenti e stampare per ognuno nome e cognome
    console.log(studenti);
    console.log(studenti.nome);
    console.log(studenti.cognome);
    console.log(studenti.età);

    //Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
    alert("Benvenuto alla classe #23");
    var nomeStudente = prompt("Inserisci il tuo nome");
    var cognomeStudente = prompt("Inserisci il tuo cognome");
    var etàStudente = Number(prompt("Inserisci la tua età"));

    studenti.persona1 = {
        nome : nomeStudente,
        cognome : cognomeStudente,
        età : etàStudente
    } */


    /* //BONUS//

    alert("Benvenuto alla classe #23");

    class studente {
        constructor(nome , cognome, età) {
            this.nome = nome,
            this.cognome = cognome,
            this.età = età
        }
    }

    var nomeStudente = prompt("Inserisci il tuo nome");
    var cognomeStudente = prompt("Inserisci il tuo cognome");
    var etàStudente = Number(prompt("Inserisci la tua età"));
    var infoStudente;

    function nuovoIscritto(infoStudente){
        var infoStudente = new studente(nomeStudente,cognomeStudente,etàStudente);
        return infoStudente
    }
    nuovoIscritto(infoStudente)

    var Raffaele = new studente("Raffaele","Baldassarre","32");
    var nuovoIscritto = nuovoIscritto(infoStudente);


    var classe = [
        Raffaele,
        nuovoIscritto
    ]
    console.log(classe); */


    //BONUS BONUS// //REGISTRO DI CLASSE

    class studente {
        constructor(nome , cognome, età) {
            this.nome = nome,
            this.cognome = cognome,
            this.età = età
        }
    }
    //alert("Registro della classe #23");
    var classe = [];
    var compilaRegistro=false;

    while(compilaRegistro != true){
        var nomeStudente = prompt("Inserire nome");
        var cognomeStudente = prompt("Inserire cognome");
        var etàStudente = Number(prompt("Inserire età"));
        var infoStudente = new studente(nomeStudente,cognomeStudente,etàStudente);
        
        classe.push(infoStudente);

        var scelta = prompt('Per inserire un altro studente digita "S" altrimenti premi annulla');
        
        if(scelta == "s" || scelta == "S" ){
            compilaRegistro=false;
            
        }else{
            compilaRegistro=true;
        }
        console.log(classe);
        for (var key in classe) {
            console.log(classe[key]);
        }
    }
    

    for (var key in classe) {
        var nomeStudente = classe[key].nome;
        var cognomeStudente = classe[key].cognome;
        var etàStudente = classe[key].età;
    var datiStudente = 
    `
        <div class="card">
            <p style="color:red">${"Nome " + nomeStudente}</p>
            <p style="color:blue">${"Cognome " + cognomeStudente}</p>
            <p >${"Età " + etàStudente}</p>
        </div>
        `
    document.getElementById('prompt').insertAdjacentHTML('beforeend', datiStudente )
    }

});