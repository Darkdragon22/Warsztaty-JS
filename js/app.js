// Zadania z JS tablice //

function distFromAvarage() {
    var avarage = 0;
    var newArray = [];
    var sum = 0;
    var result = 0;
    console.log(arguments.length);
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
        avarage = sum / arguments.length;
    }
    console.log(newArray);
    console.log("Suma =",sum,"Średnia z tablicy wyjściowej  = ",avarage);
    for (i = 0; i < arguments.length; i++){
        newArray.push(avarage - arguments[i]);
    }
    console.log("Suma",sum,"średnia elementów",avarage);
    console.log(arguments);
    console.log(newArray);
}
distFromAvarage(1,2,3,4,5);