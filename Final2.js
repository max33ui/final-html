function Buscar (){
  const select = document.getElementById("opciónGenero");
  const opcion = select.value; 
  const contenedor = document.getElementById('imagenes');
  const contenedor2 = document.getElementById('imagenes2');
  let nombreImagen = 'ImagenEjemplo'; 
  let nombreImagen2 = 'ImagenEjemplo2'; 

  if (opcion == 'Metroidvania') {

    nombreImagen = 'HollowKnight.jpg';
    nombreImagen2 = 'castlevania.jpg';

  } else if (opcion == 'Deportes') {

    nombreImagen = 'fifa.jpg';
    nombreImagen2 = 'nba.jpg';

  } else if (opcion == 'Terror') {

    nombreImagen = 'outlast.jpg';
    nombreImagen2 = 're2.jpg';

  } else if (opcion == 'FPS'){
  
    nombreImagen  = 'cod.jpg';
    nombreImagen2 =  'battlefield.jpg';

  } else if (opcion == 'Carrera'){

    nombreImagen = 'f1_24.jpg';
    nombreImagen2 = 'forza_horizon.jpg';

  } else if (opcion == 'Plataformero 2D'){

    nombreImagen = 'Blasphemous.jpg';
    nombreImagen2 = 'mario.jpg';
    
  } else if (opcion == 'Plataformero 3D'){

    nombreImagen = 'roblox.jpg';
    nombreImagen2 = 'crash.jpg';
    
  } else if (opcion == 'Peleas'){

    nombreImagen = 'mk.jpg';
    nombreImagen2 = 'street_fighter.jpg';
    
  }  else if (opcion == 'Aventura'){

    nombreImagen = 'uncharted.jpg';
    nombreImagen2 = 'red2.jpg';
    
  } else if (opcion == 'SandBox'){

    nombreImagen = 'minecraft.jpg';
    nombreImagen2 = 'garrys_mod.jpg';
    
  }

  
    

contenedor.innerHTML = '<img src="imagenes/' + nombreImagen + '" alt="' + nombreImagen + '">';  
contenedor2.innerHTML = '<img src="imagenes/' + nombreImagen2 + '" alt="' + nombreImagen2 + '">';  





}
