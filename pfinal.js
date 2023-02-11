
function $(nodo){
  return document.querySelector(nodo);
}
// variables
let page = 1;
var allcharacters =[]
let  nuevoarray= []

let divPersonajes = $('.personajes')

// botones

let female=$('#female')
let male =$('#male')
let all  =$('#all')
var primera =$('#primerapagina')
var siguiente =$('#siguiente')
var anterior =$('#anterior')
var ultimapagina =$('#ultimapagina')

// fetch


function buscar(page){ 
if (page===42) {
  siguiente.disabled = true;

  ultimapagina.disabled = true;

}
else {
  siguiente.disabled = false;

  ultimapagina.disabled = false;

}

 if (page===1) {
   anterior.disabled = true;

   primera.disabled = true
 }
 else {
  anterior.disabled = false;

  primera.disabled = false;

 }

 

  fetch ( ` https://rickandmortyapi.com/api/character/?page=`+page )

  .then((results) => {
   return results.json();
  })
  .then ( data=> {
  //  totalcharacters=data.info.count;
  //  let totalpage = totalcharacters / 42;
    
   allcharacters =data.results
   
// // $paginaActual.innerHTML=pagina Actual $ (page)
//  mostrarpersonajes(data.results)
 
traerInformacion(data.results)

  } )

} ;

// primer carga de la pagina

window.onload =async ()=>{
buscar(1)
};


  // function traerInformacion

  function traerInformacion( array){
    divPersonajes.innerHTML = ""
    array.forEach(personajes=> {
      divPersonajes.innerHTML+=`<div class="informacion">    
      <ul>
       
      <p> <img src="${personajes.image}" alt="${personajes.name}">   </p> 
       <p>   nombre:${personajes.name}  </p >
       <p>   genero:${personajes.gender}  </p>
       <p>   specie:${personajes.species} </p>
       <p>   estado:${personajes.status}   </p>  
       <p>   origen:${personajes.origin.name}   </p>       
        <p>  ubicacion:${personajes.location.name}  </p>


      </ul>

      </div>
      `
     
      
    });
}

  
  //  funciones para eventos de los botones men, women, todos
  
function fman () {
  let filtro =[]
  allcharacters.forEach(personajes =>{
    if (personajes.gender==="Male")
    filtro.push(personajes)
  }
  )
  traerInformacion(filtro)
}


// eventos para boton de male

male.addEventListener('click',fman) 




// funcion para el boton female


function mujer () {
  let filtro =[]
  allcharacters.forEach(personajes =>{
    if (personajes.gender==="Female")
    filtro.push(personajes)
  }
  )
  traerInformacion(filtro)
}


// eventos para botone de male

female.addEventListener('click',mujer)


function ftodos (){
  traerInformacion(allcharacters)
}

all.addEventListener('click',ftodos)






// funciones para eventos de los botones de abajo

function fsigiente ( ){
if (page !==42){
 page ++; 
 buscar(page)

}

};
// evento boton siguiente
siguiente.addEventListener( 'click',fsigiente);

// funcion boton atras
function atras ( ){
  if (page !==42){
   page --; 
   buscar(page)
  
  }
  
  };
  // evento boton anterior
  anterior.addEventListener( 'click',atras);
  
  
  // funcion boton primera pagina
  
  function adelante ( ){
    if (page !==1){
     page = 1 
     buscar(page)
    
    }
    
    };
    // evento boton primera pagina
    primera.addEventListener( 'click',adelante);

    // funcion boton primera pagina
  
  function ultima ( ){
    if (page !==42){
     page = 42 
     buscar(page)
    
    }
    
    };
    // evento boton primera pagina
    ultimapagina.addEventListener( 'click',ultima);


    