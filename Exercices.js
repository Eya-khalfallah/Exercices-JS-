/***EX1***/
const persons = [

    { name : "MONCEF" , age: 13} ,
    { name : "BAHIJA" , age: 23} ,
    { name : "ALA" , age: 18} ,
    ];

function MineurMajeur(liste){
    liste.map(person => person.age >= 18 ? person .status = "majeur" : person .status ="mineur" );
    console.log(liste);
}
MineurMajeur(persons)



/***EX2***/
const str1 = 'ahmed&ferah-moez&saadi-fadhel&gadihi';

function FormatToArray( ch ) {
    const str2 = ch.split("-") ;
    const str3 = str2.map( person => ( 
        { firstname: person.split("&")[0], lastname: person.split("&")[1] }
        ) );
    console.log(str3);
}
FormatToArray( str1 );



/***EX4***/
const etudiants = [
    { name : "sarah" , note : undefined },
    { name : "monya" , note : 7 },
    { name : "carlos" , note : 13 },
    { name : "fadhel" , note : 18 },
    ];

function FailedStudent( liste ) {
    const list = liste.filter( etudiant => etudiant.note != undefined );
    list.sort((a,b) => b.note - a.note);
    const i = 0 ;
    list.map( etudiant => 
        etudiant.note > list.reduce((b , a) => b + a.note, i )/list.length 
        ? etudiant.mention = "bien" : etudiant.mention = "passable" );
    console.log(list);
}
FailedStudent( etudiants );


