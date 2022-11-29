function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function cambiarModo() {
    var x = document.getElementById("nav");
    var y = document.getElementById("nav3");
    var i = document.getElementById("nav4");
    var n = document.getElementById("nav5");
    var b = document.getElementById("body");
    var c = document.getElementById("btn-cart");
    var t = document.getElementById("body"); 
    if (x.style.backgroundColor === "white") { 
        x.style.backgroundColor = "black";
        b.style.backgroundColor = "black";
        x.style.color = "white";
        i.style.color = "white";
        n.style.color = "white";
        i.style.color = "white";
        y.style.color = "white";
        c.style.background= 'url("https://img.icons8.com/material-outlined/48/FFFFFF/shopping-cart--v1.png")';
        c.style.backgroundSize="100%";
      
    } else {
        x.style.backgroundColor = "white";
        b.style.backgroundColor = "white";
        x.style.color = "black";
        n.style.color = "black";
        i.style.color = "black";
        y.style.color = "black";
        y.style.color = "black";
        c.style.background= 'url("https://img.icons8.com/material-two-tone/48/FFFFFF/shopping-cart--v1.png")';
        c.style.backgroundSize="100%";

    }
}

function modo2() {
    var x = document.getElementById("nav");
    var t = document.getElementById("body");
    var q = document.getElementById("nav6");
    var h = document.getElementById("nav7");
    var z = document.getElementById("contact");
    if (x.style.backgroundColor === "white") { 
        x.style.backgroundColor = "black";
        t.style.backgroundColor = "black";
        z.style.background = "gray";
        h.style.color = "white";
        q.style.color = "white";
        x.style.color = "white";

    }else{
        z.style.background = "white";
        x.style.backgroundColor = "white";
        t.style.backgroundColor = "white";
        h.style.color = "black";
        q.style.color = "black";
        x.style.color = "black";
    }
}





document.addEventListener('DOMContentLoaded', () => {
  // Se genera JSON para manejar los datos de la tienda 
  const baseDeDatos = [
      {
          id: 1,
          nombre: 'imagen#1',
          precio: 10000,
          imagen: 'https://bn02pap001files.storage.live.com/y4mMxMrRXF0pImJ4S0xhO8PX7RSoR9wHs6rdoH2zch7Gg1WyP2mneafpxkNl9uiiwNc8Tys0d0kmp9rOMDbhpiFk3c7JEa-vURoK5hXPzteMhQgSA15AND1m9lZq2PNdDT57wRS5ttV9n47gl1i7SifA5-k19DAocYP1m8LeIx6BZTZNPvUMYxNrWFJSUwBR-ID?encodeFailures=1&width=210&height=210'
      },
      {
          id: 2,
          nombre: 'imagen#2',
          precio: 1.2,
          imagen: 'https://bn02pap001files.storage.live.com/y4msmevE3sCUdw6L7Gh4MHR4o-U5G-jrfIVV72debjPOSse98YBzWqilH4vVxhYwp287yr6WjxLAETNlbw-MKFPIEG9256ffKE2lAm3lSvcLNPiQUwFE2OQLPGcoyboDYLUFNyrB0L1Fiuk_Dl4hZ66ZiM-mIpfpEucLJEkgOLyO2ra6vLzIGNNAIO_sPTugGyA?encodeFailures=1&width=842&height=842'
      },
      {
          id: 3,
          nombre: 'imagen#3',
          precio: 2.1,
          imagen: 'https://bn02pap001files.storage.live.com/y4mJjoHRFSLMidoACyZrBLtMliAkDsbI2IZkYAdNACrHuZv724fQ6fYm4Mv1P5M23wOBd5-naAq-3zKHRJ2qGOkOKbfZmxLM45emcoKZGjBoJsksNn-6szkhBxJbReBWPEMa223R9MmubiGv9EVIQtZ82U6j7pyVMwwn6RjdKHQLp6kLJNo6u9ylj9itxJ44zo6?encodeFailures=1&width=842&height=842'
      },
      {
          id: 4,
          nombre: 'imagen#4',
          precio: 0.6,
          imagen: 'https://bn02pap001files.storage.live.com/y4mWmiU5ffZ6Y-SHTyXZNnkjDYLgeKJ1ciI33w5IBqKh5cW3RnVCE80VT9j-HHhwH6QR7co2UGQmqu778MHOwzqkdxCCFkw8b9Db5rbtmjAtc1NmpWz18opb2J3cabjF9PtQZE2wEjx1yCGAhkIirEerAJC2MFiniz-hGnOgNT0I7xUyS3Ar-_YRJVcBYi1hl9t?encodeFailures=1&width=842&height=842'
      },
      {
          id: 5,
          nombre: 'imagen#5',
          precio: 10000,
          imagen: 'https://bn02pap001files.storage.live.com/y4mjZFlbhJmbAeFdSsia39okcN8E1VsfxLx8dKDpMgpPnsiqAKugXYyyQ8BxH2-rzc-Xai1DmKtmrWyrlde8gLD17zVAqevXBbZrUhcnX-bbTAmEQUiiG9eU0BjdfX2AtB1D57OO5EWmR96uklGh5UnHLe-Zx9Y23uUT0UPOb5T1AVywOcWQqeDzyVR02LNUt99?encodeFailures=1&width=842&height=842'
      },
      {
          id: 6,
          nombre: 'imagen#6',
          precio: 1.2,
          imagen: 'https://bn02pap001files.storage.live.com/y4m5qPDuUATuDD9bhprRHsKnqkxg0ZQJxrghaA8BIuEuy2kP0DoKJb85JshRPezH5GMYT4gI6c6f-tggakwvQ25NApgqEcdL-E960Vh_ImVKdoclcW6m87Ow_l0pdzS5bGsLuRiiapSeaGSSfXlJf33PaDWNegGyuZB5y1xwOthUtc00ryLbCQRdhKoiSa-NwwS?encodeFailures=1&width=842&height=842'
      },
      {
          id: 7,
          nombre: 'imagen#7',
          precio: 2.1,
          imagen: 'https://bn02pap001files.storage.live.com/y4mIHwxIqsErtn3HfFXhWm9NLrcbtME3zxjruUNOUy-OtjZd2UcuDIOb2h67m3rOai1wApU_9rYJHipnTpSgg0vnd3DTSEUFF2LC7BVUs72-l-CKL2-ldn1t3B-xNajf35XRoqeo1Euh9y8XogXHGHLgxmMF-ttaUzK3HAokqRfX1Y8phqVmk9-4rzjNHMPB_4Q?encodeFailures=1&width=842&height=842'
      },
      {
          id: 8,
          nombre: 'imagen#8',
          precio: 0.6,
          imagen: 'https://bn02pap001files.storage.live.com/y4mohk-fJxzoiyPSZM6K_B1nfkqgeOe9R3XblTQopxvysDL3pmwU9NxQlkZzj3F-8ebDoelFfmxON89e6j1g1M0MkZ9K8BEJ8j8cR0WdQkSz7Vi-9x7b1OEG7xw1cv2e5QGSvHC3iaF2Q4TA5LLdLAjl6zwyPx6ZmmchFF29mCh81A1iTxpEI5epmTADr18jkXf?encodeFailures=1&width=842&height=842'
      },
      {
          id: 9,
          nombre: 'imagen#9',
          precio: 10000,
          imagen: 'https://bn02pap001files.storage.live.com/y4mOwYFbFEGnS4bSAzfJGAqP-CKaNS1Uw8ob1tIX0dwdXr-kqjueAzJJonuzilYi4gFkSSNkXkgsVvVRx8OJN058og5Bk8I3u5VdVklB_cnUao6VdTp-xaRbhMbz_xYOantGssIYIquR_aCNQudFMn3_dgQN_fVZq7RKpjf5VCLrJMuF-Yrlp5q2f6hE2mFFJpY?encodeFailures=1&width=842&height=842'
      },
      {
          id: 10,
          nombre: 'imagen#10',
          precio: 1.2,
          imagen: 'https://bn02pap001files.storage.live.com/y4m3Av2WjXFxwYw3WcMOJ0COgkzAj0exLfiea_TBRQDo8cs6dWnTX5Tj4VOQWP534WZAJpWrJS9ZZsfgoM-hIImiiXwgv7yZmducYxm7Q5FMxkMfl897trNdDFuXs9zxkG5S1lWhr3Vg6htNCbFM2KCpp_pUiQhDJbzcfkxdWm9FPf0ZMnTzaNmp95WFC65ArJR?encodeFailures=1&width=842&height=842'
      },
      {
          id: 11,
          nombre: 'imagen#11',
          precio: 2.1,
          imagen: 'https://bn02pap001files.storage.live.com/y4m9VJDKBxNdmgnr3pWO3KcjyxYcz1wI3gWU7qpZIv41zNv9TZpY9xJylrteg7nY79t1jesO9GX7DHidu-iVbry7talTwpOE5qpmXuqbydf0CfMUoRl3BUEoeuvPVYd5gtduQcV2RzJUDI0oGRexlR1ZIHyVUwsMM_b3XnceWvzOfH-Wa5X35fTUuk5SJ_8z1Py?encodeFailures=1&width=842&height=842'
      },
      {
          id: 12,
          nombre: 'imagen#12',
          precio: 0.6,
          imagen: 'https://bn02pap001files.storage.live.com/y4mRRQl9XA3K-9UPWttl067qUhrfIIMIoPBVb52UL7M0-DGDKl4-VLJQH__g4qEDci9Xy4DI1pjDeTPpO4qQqzkke4nv5jFZCfS0iebWEM_QB1MOvfTvGU_KwpiLKUhHQMG8K9NYhP197heilJnUerUyxYHfgOZdo_4BrxyekkwP3-VgXgD_U2RB6f3tAaLzA-5?encodeFailures=1&width=842&height=842'
      },
      {
          id: 13,
          nombre: 'imagen#13',
          precio: 10000,
          imagen: 'https://bn02pap001files.storage.live.com/y4mKB8BxarNSJbi-WGsKLzoKfC9gWgoJF0NB5W6zJbgB7-S5BlZurYURZV-diQiZt7JgibUdpweIACp7beq1jxKv_Rqd0aEP1cMhKCvVJcQV4_nRHd3zdaddzYKSdYRSUj14RYotNnXtr6aJRRaCubTU4q_caLKQVrQOGOJiQkwi9qI5k8XOyV87_fwstR9Gqlj?encodeFailures=1&width=842&height=842'
      },
      {
          id: 14,
          nombre: 'imagen#14',
          precio: 1.2,
          imagen: 'https://bn02pap001files.storage.live.com/y4mE_k0WGSAI4fdpj-J-_S18PHu318MPiusb3YNWTHFGmsWv3QwHwGiRGhLq7mwqo2_3d4Nev8UacpFgFjgDA-z5ZXxudJJ-hZFSWroHpuQEzKzgP2pclx2sdmAJL-JOnsPZN6y2v9q-WTWbZMABSYsV6xlrk5zFBQCON7Ki5Y81sR6jueDoEdgeMUERQMRgmc_?encodeFailures=1&width=842&height=842'
      },
      {
          id: 15,
          nombre: 'imagen#15',
          precio: 2.1,
          imagen: 'https://bn02pap001files.storage.live.com/y4mCPVR-Hd7EYBT7IwFTrB0Qtxmsw-G9ko3FxAv8yglJFjW3vrfM3KbPzGNEia4o57TUUcTfhU48twRHG9ukzfnnOoxoSvXhsX9F7IArV4oCy0DOeCmqy0u3Yv42tjC2txZr1pbHa31AB1lEaX6Nj78eBa79khx2TJOzhshNJOGk_12oyJ1mogX-yU6A--Att6j?encodeFailures=1&width=842&height=842'
      },
      {
          id: 16,
          nombre: 'imagen#16',
          precio: 0.6,
          imagen: 'https://bn02pap001files.storage.live.com/y4mCPVR-Hd7EYBT7IwFTrB0Qtxmsw-G9ko3FxAv8yglJFjW3vrfM3KbPzGNEia4o57TUUcTfhU48twRHG9ukzfnnOoxoSvXhsX9F7IArV4oCy0DOeCmqy0u3Yv42tjC2txZr1pbHa31AB1lEaX6Nj78eBa79khx2TJOzhshNJOGk_12oyJ1mogX-yU6A--Att6j?encodeFailures=1&width=842&height=842'
      },
      {
          id: 17,
          nombre: 'imagen#17',
          precio: 0.6,
          imagen: 'https://bn02pap001files.storage.live.com/y4mCAHi9eUytYmy5U2gnPD6CKIEXHxmd20BKlQCnAD81BUlaKDLlyeGAmldzjHNl5v0fswg0z-wI4E2lu0SLsivlQ-AJqyG5XMZdfuAGBLTQc5kHWkvyAo1kiPyTsAQ4giUCtA_DVWONj__Yef0yHpuIg7q_czZFwq5kfCj5fECF2WhSdIbdE1mQ-VAEMu_dmV3?encodeFailures=1&width=842&height=842'
      },
      {
          id: 18,
          nombre: 'imagen#18',
          precio: 10000,
          imagen: 'https://bn02pap001files.storage.live.com/y4moyMtfNf_VbQhcjAB6eFlNzC8taLNtCMwd2hs1jxsugUHXaKJEHfrM8a9JBIk4eaeN55mO94NR1wjEWcn2_U0fo3OON8uDzXRDyG-ooj1awBFCz-4TurTWIfWRSoWjGye9GeUjUbaIouzKSQHUQwORPr1drokSr1Es2AYxG9k-qMoUhzEJoblOmxAw4swHD4a?encodeFailures=1&width=842&height=842'
      },
      {
          id: 19,
          nombre: 'imagen#19',
          precio: 1.2,
          imagen: 'https://bn02pap001files.storage.live.com/y4ml9PX4sgk0f-DunygEgFCUqNypfqXoZn-bMOB1Gvkdg4VTcp109F0RVR-GeVz08Hyim5AyPcnNESczXcmemNo840E_gVLmMnSwxL1vhJprvn1STePO9P5EZbGKmVQMvGZSKF-fBh7z9lJsZo_Y0sZjgZnIV0gm7TWAGOduMKhtMx98LQnXlFJrYZShoSFWgKf?encodeFailures=1&width=842&height=842'
      },
      {
          id: 20,
          nombre: 'imagen#20',
          precio: 2.1,
          imagen: 'https://bn02pap001files.storage.live.com/y4mwo3zTvnLDr3rKBnpG8AnbllJyws-VM-opUnZIFrqxpTjcAffdzUIb6YrPP8lELkIjUfNc_2jFZdwMXCht1NTA4dEiAzDVKXSGCD6D04XgxGJaDScufAMCm1cEx_CQ7rNgl5sxyV0zhPYBcsZN8IR6HVbGo0naMQ6LFn0Be9Ogy-vXcULZ2ybJtrwEOxfn7V1?encodeFailures=1&width=842&height=842'
      },

      {
          id: 22,
          nombre: 'imagen#21',
          precio: 10000,
          imagen: 'https://bn02pap001files.storage.live.com/y4mwo3zTvnLDr3rKBnpG8AnbllJyws-VM-opUnZIFrqxpTjcAffdzUIb6YrPP8lELkIjUfNc_2jFZdwMXCht1NTA4dEiAzDVKXSGCD6D04XgxGJaDScufAMCm1cEx_CQ7rNgl5sxyV0zhPYBcsZN8IR6HVbGo0naMQ6LFn0Be9Ogy-vXcULZ2ybJtrwEOxfn7V1?encodeFailures=1&width=842&height=842'
      },
      {
          id: 23,
          nombre: 'imagen#22',
          precio: 1.2,
          imagen: 'https://bn02pap001files.storage.live.com/y4mt4_bBIlxI1BT-NPqxUnAx9vQCuFZRDED8Q_0bAtlWM1hii5wFkZ0ZubtcGPn3pLT0Hok6vvySuFUNpu4YSiq-lHNNOLa3-LA6VaL9D-HurUmcbv49bB4c39-sQNkw71gdr5hYAU1ANT22QNZ7Nvt3t4qVB3zwDIZz2v2q4P_J7Bg2BG3xT9k__Ru-9QJQIt5?encodeFailures=1&width=842&height=842'
      },
      {
          id: 24,
          nombre: 'imagen#23',
          precio: 2.1,
          imagen: 'https://bn02pap001files.storage.live.com/y4m8UWSnOG_PCGMKWXV_IP4_7c4szq3J6ZEP2PJZ0jUqwJ0ed0wfllUOWFFk-qrpnZ5NLBCVvkL_TdZ0fJYq6XJr_RTRr2Elggnv9zX0f_TbcXTMf5MOpDWA4g63Mik_1EV5zci8GaAkEoCrVjZVTaYXFvqQwg40qC51GBqnQY1MKhof6uXxSFk6nYGeCdhVeOU?encodeFailures=1&width=842&height=842'
      }
      
  ];

  let carrito = [];
  const divisa = '$';
  const DOMitems = document.querySelector('#items');
  const DOMcarrito = document.querySelector('#carrito');
  const DOMtotal = document.querySelector('#total');
  const DOMbotonVaciar = document.querySelector('#boton-vaciar');

  // Funciones

  
  //Dibuja  los productos a partir de la base de datos por medio de elementos creados 
  
  function renderizarProductos() {
      baseDeDatos.forEach((info) => {
          // Estructura
          const miNodo = document.createElement('div');
          miNodo.classList.add('cart1');
          // Body
          const miNodoCardBody = document.createElement('div');
          miNodoCardBody.classList.add('cart', 'fadeInDown');
          miNodoCardBody.setAttribute('data-aos','fade-up')
          // Titulo
          const miNodoTitle = document.createElement('h5');
          miNodoTitle.classList.add('card-title');
          miNodoTitle.textContent = info.nombre;
          // Imagen
          const miNodoImagen = document.createElement('img');
          miNodoImagen.classList.add('img-fluid');
          miNodoImagen.setAttribute('src', info.imagen);
          // Precio
          const miNodoPrecio = document.createElement('p');
          miNodoPrecio.classList.add('card-text');
          miNodoPrecio.textContent = `${info.precio}${divisa}`;
          // Boton 
          const miNodoBoton = document.createElement('button');
          miNodoBoton.classList.add('btn', 'btn-primary');
          miNodoBoton.textContent = 'Agregar';
          miNodoBoton.setAttribute('marcador', info.id);
          miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
          // Insertamos
          miNodoCardBody.appendChild(miNodoImagen);
          miNodoCardBody.appendChild(miNodoTitle);
          miNodoCardBody.appendChild(miNodoPrecio);
          miNodoCardBody.appendChild(miNodoBoton);
          miNodo.appendChild(miNodoCardBody);
          DOMitems.appendChild(miNodo);
      });
  }

  /**
  * Evento para añadir un producto al carrito de la compra
  */
  function anyadirProductoAlCarrito(evento) {
      // Anyadimos el Nodo a nuestro carrito
      carrito.push(evento.target.getAttribute('marcador'))
      // Actualizamos el carrito 
      renderizarCarrito();

  }

  
  // Dibuja los productos guardados en el carrito
  
  function renderizarCarrito() {
      // Vaciamos todo el html
      DOMcarrito.textContent = '';
      // Quitamos los duplicados
      const carritoSinDuplicados = [...new Set(carrito)];
      // Generamos los Nodos a partir de carrito
      carritoSinDuplicados.forEach((item) => {
          // Obtenemos el item que necesitamos de la variable base de datos
          const miItem = baseDeDatos.filter((itemBaseDatos) => {
              // ¿Coincide las id? Solo puede existir un caso
              return itemBaseDatos.id === parseInt(item);
          });
          // Cuenta el número de veces que se repite el producto
          const numeroUnidadesItem = carrito.reduce((total, itemId) => {
              // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
              return itemId === item ? total += 1 : total;
          }, 0);
          // Creamos el nodo del item del carrito
          const miNodo = document.createElement('li');
          miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
          miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
          // Boton de borrar
          const miBoton = document.createElement('button');
          miBoton.classList.add('btn', 'btn-danger', 'mx-5');
          miBoton.textContent = 'X';
          miBoton.style.marginLeft = '1rem';
          miBoton.dataset.item = item;
          miBoton.addEventListener('click', borrarItemCarrito);
          // Mezclamos nodos
          miNodo.appendChild(miBoton);
          DOMcarrito.appendChild(miNodo);
      });
     // Renderizamos el precio total en el HTML
     DOMtotal.textContent = calcularTotal();
  }

  
   // Evento para borrar un elemento del carrito
  
  function borrarItemCarrito(evento) {
      // Obtenemos el producto ID que hay en el boton pulsado
      const id = evento.target.dataset.item;
      // Borramos todos los productos
      carrito = carrito.filter((carritoId) => {
          return carritoId !== id;
      });
      // volvemos a renderizar
      renderizarCarrito();
  }

   // Calcula el precio total teniendo en cuenta los productos repetidos
  function calcularTotal() {
      // Recorremos el array del carrito 
      return carrito.reduce((total, item) => {
          // De cada elemento obtenemos su precio
          const miItem = baseDeDatos.filter((itemBaseDatos) => {
              return itemBaseDatos.id === parseInt(item);
          });
          // Los sumamos al total
          return total + miItem[0].precio;
      }, 0).toFixed(2);
  }

  // Varia el carrito y vuelve a dibujarlo
  function vaciarCarrito() {
      // Limpiamos los productos guardados
      carrito = [];
      // Renderizamos los cambios
      renderizarCarrito();
  }

  // Eventos
  DOMbotonVaciar.addEventListener('click', vaciarCarrito);

  // Inicio
  renderizarProductos();
  renderizarCarrito();
});


