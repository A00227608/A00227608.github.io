async function veAlMuseo(){
    let respuesta = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/37283");
    
    
    let respuestaJSON =await respuesta.json();
    console.log(respuestaJSON)
    console.log(respuestaJSON.artistAlphaSort)

    a = document.createElement("h5");
    a.textContent = respuestaJSON.artistAlphaSort;
    const row = document.querySelector(".container h3");
    row.appendChild(a)
    imagenURL = respuestaJSON.primaryImage;
    img = (document.createElement("img"))
    row.appendChild(img);
    img.setAttribute("src","https://images.metmuseum.org/CRDImages/as/web-large/DP143120.jpg")
    
    
    //key riot api
    
}




