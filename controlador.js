
    btnComparar.addEventListener('click',function(){
        const btnComparar=document.getElementById('btnComparar');
        let mostrarResultado=document.querySelector('#mostrarResultado');
          /* formulario 1*/
          const urlImagen=document.querySelector('#urlImagen').value;
          const tamañoPantalla=document.querySelector('#tamañoPantalla').value;
          const discoDuro=document.querySelector('#discoDuro').value;
          const memoriaRam=document.querySelector('#memoriaRam').value;
          const tarjetaVideo=document.querySelector('#tarjetaVideo').value;
          const precio=document.querySelector('#precio').value;
      
      
          /* formulario 2*/
          
          const urlImagen2=document.querySelector('#urlImagen2');
          const tamañoPantalla2=document.querySelector('#tamañoPantalla2').value;
          const discoDuro2=document.querySelector('#discoDuro2').value;
          const memoriaRam2=document.querySelector('#memoriaRam2').value;
          const tarjetaVideo2=document.querySelector('#tarjetaVideo2').value;
          const precio2=document.querySelector('#precio2').value;
          
          /* comparar*/

         
          let contadorEquipo1=0
          let contadorEquipo2=0
      
          if(tamañoPantalla>tamañoPantalla2){
            
              contadorEquipo1=contadorEquipo1+1;
          }
          else{
            contadorEquipo2=contadorEquipo2+1;
          }
        
       
          if(discoDuro>discoDuro2){
            
            contadorEquipo1=contadorEquipo1+1;
           }
          else{
            contadorEquipo2=contadorEquipo2+1;
              }
      
      
          if(precio<precio2){
            
            contadorEquipo1=contadorEquipo1+1;
           }
          else{
            contadorEquipo2=contadorEquipo2+1;
              }
            
      
          if(memoriaRam>memoriaRam2){
            
            contadorEquipo1=contadorEquipo1+1;
           }
          else{
            contadorEquipo2=contadorEquipo2+1;
              }
      
      
          if(tarjetaVideo>tarjetaVideo2){
            
            contadorEquipo1=contadorEquipo1+1;
           }
          else{
            contadorEquipo2=contadorEquipo2+1;
              }
      
         if(contadorEquipo1>contadorEquipo2){
                mostrarResultado.textContent="  El primer equipo es mejor  ";
            }
         else{
                 mostrarResultado.textContent=" El segundo equipo es el mejor  ";
              }
             
      


       /* Tablas para los datos del primer equipo*/
          const container=document.querySelector('#container');
          const cuadroimagen=document.createElement('div');
          const  img1=document.createElement('img');
          const cuadroTabla=document.createElement('div');
          const tabla=document.createElement('table');

          const  primeraFila=document.createElement('tr')
          const  campoCaracteristica =document.createElement('th');
          const campoDatos=document.createElement('th');

          const  segundaFila=document.createElement('tr')
          const  campoTamañopantalla=document.createElement('td');
          const datoTamañopantalla=document.createElement('td');

          const  terceraFila=document.createElement('tr')
          const  campodiscoDuro=document.createElement('td');
          const datodiscoDuro=document.createElement('td');

          const  cuartaFila=document.createElement('tr')
          const  campoMemoriaRam=document.createElement('td');
          const datoMemoriaRam=document.createElement('td');

          const  quintaFila=document.createElement('tr')
          const  campoTarjetaVideo=document.createElement('td');
          const datoTarjetaVideo=document.createElement('td');

          const  sextaFila=document.createElement('tr')
          const  campoPrecio=document.createElement('td');
          const datoPrecio=document.createElement('td');

          container.append(cuadroimagen);
          cuadroimagen.append(img1);
          container.append(cuadroTabla);
          cuadroTabla.append(tabla);
          tabla.append(primeraFila);
          primeraFila.append(campoCaracteristica);
          primeraFila.append(campoDatos);
          tabla.append(segundaFila);
          segundaFila.append(campoTamañopantalla);
          segundaFila.append(datoTamañopantalla);
          tabla.append(terceraFila);
          terceraFila.append(campodiscoDuro);
          terceraFila.append(datodiscoDuro);
          tabla.append(cuartaFila);
          cuartaFila .append(campoMemoriaRam);
          cuartaFila.append(datoMemoriaRam);
          tabla.append(quintaFila);
          quintaFila .append(campoTarjetaVideo);
          quintaFila.append(datoTarjetaVideo);
          
          tabla.append(sextaFila);
          sextaFila .append(campoPrecio);
          sextaFila.append(datoPrecio);

          campoCaracteristica.textContent="Caracteristicas del Primer equipo";
          campoDatos.textContent="Datos";
          campoTamañopantalla.textContent="Tamaño de pantalla :";
          datoTamañopantalla.textContent=tamañoPantalla +" in ";
          campodiscoDuro.textContent="Disco duro :";
          datodiscoDuro.textContent=discoDuro +" GB ";
          campoMemoriaRam.textContent= "Memoria RAM  ";
          datoMemoriaRam.textContent=memoriaRam + " GB ";
          campoTarjetaVideo.textContent=" Tarjeta de video ";
          datoTarjetaVideo.textContent=tarjetaVideo+ " MB"
          campoPrecio.textContent="Precio : " ;
          datoPrecio.textContent=precio +" $ ";
          img1.src=`${urlImagen}`;
        
          

          

 /* Tablas para los datos del segundo equipo*/

          const cuadroimagen2=document.createElement('div');
          const  img2=document.createElement('img');
          const cuadroTabla2=document.createElement('div');
          const tabla2=document.createElement('table');

          const  primeraFila2=document.createElement('tr');
          const  campoCaracteristica2 =document.createElement('th');
          const campoDatos2=document.createElement('th');

          const  segundaFila2=document.createElement('tr')
          const  campoTamañopantalla2=document.createElement('td');
          const datoTamañopantalla2=document.createElement('td');

          const  terceraFila2=document.createElement('tr')
          const  campodiscoDuro2=document.createElement('td');
          const datodiscoDuro2=document.createElement('td');

          const  cuartaFila2=document.createElement('tr')
          const  campoMemoriaRam2=document.createElement('td');
          const datoMemoriaRam2=document.createElement('td');

          const  quintaFila2=document.createElement('tr')
          const  campoTarjetaVideo2=document.createElement('td');
          const datoTarjetaVideo2=document.createElement('td');

          const  sextaFila2=document.createElement('tr')
          const  campoPrecio2=document.createElement('td');
          const datoPrecio2=document.createElement('td');

          container.append(cuadroimagen2);
          cuadroimagen2.append(img2);
         
          container.append(cuadroTabla2)
          cuadroTabla2.append(tabla2);
          tabla2.append(primeraFila2);
          primeraFila2.append(campoCaracteristica2);
          primeraFila2.append(campoDatos2);
          tabla2.append(segundaFila2);
          segundaFila2.append(campoTamañopantalla2);
          segundaFila2.append(datoTamañopantalla2);
          tabla2.append(terceraFila2);
          terceraFila2.append(campodiscoDuro2);
          terceraFila2.append(datodiscoDuro2);
          tabla2.append(cuartaFila2);
          cuartaFila2.append(campoMemoriaRam2);
          cuartaFila2.append(datoMemoriaRam2);
          tabla2.append(quintaFila2);
          quintaFila2 .append(campoTarjetaVideo2);
          quintaFila2.append(datoTarjetaVideo2);
          
          tabla2.append(sextaFila2);
          sextaFila2 .append(campoPrecio2);
          sextaFila2.append(datoPrecio2);
          
          campoCaracteristica2.textContent="Caracteristicas del Segundo equipo";
          campoDatos2.textContent="Datos";
          campoTamañopantalla2.textContent="Tamaño de pantalla :";
          datoTamañopantalla2.textContent=tamañoPantalla2 +" in ";
          campodiscoDuro2.textContent="Disco duro :";
          datodiscoDuro2.textContent=discoDuro2 +" GB ";
          campoMemoriaRam2.textContent= "Memoria RAM  ";
          datoMemoriaRam2.textContent=memoriaRam2 + " GB ";
          campoTarjetaVideo2.textContent=" Tarjeta de video ";
          datoTarjetaVideo2.textContent=tarjetaVideo2 +" MB"
          campoPrecio2.textContent="Precio : " ;
          datoPrecio2.textContent=precio2 +" $ ";
          img2.src=`${urlImagen2}`;
          
         

          /*Añadir las clases*/
          img1.classList.add("imagenes");
          img2.classList.add("imagenes");
          container.classList.add('contenedor')
          cuadroimagen.classList.add();
          cuadroimagen2.classList.add();




    })











    







 