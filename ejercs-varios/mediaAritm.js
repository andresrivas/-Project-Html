function mediaAritmetica(...media) {
    var suma;
    var mediaA = 0;
    for (let i = 0; i < media.length; i++) {
        suma = media[i];
        mediaA += suma;
    }
    mediaA = mediaA / media.length;
    return mediaA;
}

let mediaApto = mediaAritmetica(9, 9, 7);

function aprovado(nota) {
    if (mediaApto >= 5) {
        console.log("Apto con un : " + mediaApto);
    } else {
        console.log("No apto con un : " + mediaApto);
    }
}

aprovado(mediaApto);