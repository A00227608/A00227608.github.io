//Escribe un comentario explicando para qué sirve http
//Se utiliza para crear servidores y manejar peticiones http
import http from 'http';
//Escribe un comentario explicando para qué sirve fs
//fs sirve para manejar archivos(escribir,leer,eliminar,etc)
import fs from 'fs';


    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html
       //Agrega un enlace en bienvenida a la página de escuelas 
       //Agrega un enlace en bienvenida a la página de donantes 
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //Escribe qué significa el 500 : "internal server error" significa que hubo un error pero no se sabe cual.
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //Escribe qué significa el 200
        //200 significa que hubo exito en la solicitud
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }


    //Esta función deberá enviar un json con los datos de las escuelas
    function getEscuelas(req, res) {
        //Esto representa un objeto JSON de una escuela
        //Agrega otra escuela
        const escuelas = [{
            "nombre": "Escuela Benito Juárez",
            "direccion": "Av. Principal 123, Ciudad de México",
          },
          {
            "nombre":"Escuela Superman",
            "direccion":"Krypton 323",
          }
        ]; 
      res.writeHead(200, { 'Content-Type': 'application/json' });
      //Escribe qué hace la función stringify y por qué la tenemos que usar
      //Convierte el json en una cadena de texto JSON, se usa para que la informacion que mandemos por http sea manejable y tenga este formato JSON.
      res.end(JSON.stringify(escuelas));
    }

     //Agrega un enlace a bienvenida y a donantes en escuelas.html 
    function mostrarEscuelas(req, res) {
        fs.readFile('escuelas.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

      //Agrega un enlace a bienvenida y a escuelas en donantes.html
      function mostrarDonantes(req, res) {
        //Construye una página básica donantes.html
        fs.readFile('donantes.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

      function mostrarEquipo(req, res) {
        fs.readFile('equipo.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }
      
      function mostrarOpinion(req, res) {
        fs.readFile('opinion.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }


    //Esta función deberá enviar un json con los datos de las donantes
    function getDonantes(req, res) {
    //Tienes que corregir varias cosas en esta sección
    const donantes = [{
      "nombre": "Jose Luis Gamez",
      "donacion": "bicicletas",
    },
    {
      "nombre":"clark kent",
      "donacion":"libros",
    }
  ]; 
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(donantes));
    }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('Aqui no esta el tesoro, busca la x en el mapa');
    }

    //incluye el enlace a la documentación de createServer
    //https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/api/bienvenida') {
        darBienvenida(req, res);
      } else if (url === '/api/escuelas') {
        getEscuelas(req, res);
      } else if (url === '/api/donantes') {
        getDonantes(req, res);
      } 
      else if (url === '/escuelas') {
        mostrarEscuelas(req, res);
      } 
      else if (url === '/donantes') {
        mostrarDonantes(req, res);
      } 
      else if(url === '/equipo'){
        mostrarEquipo(req,res);
      }
      else if(url === '/opinion'){
        mostrarOpinion(req,res);
      }
      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a opinion.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en supertarea un enlace a servidor.js y al resto de los html