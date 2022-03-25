function vocalOconsonante(a) {
    let vocal = ["a","e","i","o","u"];
    for(let i = 0; i < vocal.length; i++){
        if (a == vocal[i]){
            return console.log(`${"Es una vocal"}"->" ${a}`);
        }
    }
    console.log("Es una consonante-> " + a);
}

vocalOconsonante("p");