//Banners
let imgBannerPrincipal = document.querySelector('#banner-principal');
let imgMiniBanner = document.querySelector('.mini-banner')
let imgUp = document.querySelector('#img-Up')
let imgMiniBannerSecundario = document.querySelector('.mini-banner-secundario')
let imgMiniBannerTerciario = document.querySelector('.mini-banner-terciario')
let imgDescripcion = document.querySelector('#descripcion-general')



//Titulos
let imgTitulos = document.querySelector('.h1-principal');
let imgTituloSecundario = document.querySelector('#titulo-secundario')

//Textos
let descripcionSecundaria = document.querySelector('#descripcion-secundaria-general')

//Url  imagenes
let urlBannerPrincipal = "img/banner inicial_";
let urlTitulos = "img/basic h1_";
let urlminiBanner = "img/mini banner_";
let urlUp = "img/up_";
let urlDescripcion = "img/descripcion_";
let urlTituloSecundario = "img/h1 Secundario_";
let urlminiBannerSecundario = "img/mini banner secundario_";
let urlminiBannerTerciario = "img/mini banner terciario_";

let button = document.querySelectorAll('.links'); //Boton que toma las clases links

//Diseños especiales
let RoomTres = document.querySelector('.room3')
const izq = document.querySelector('.izq');
const der = document.querySelector('.der');
const contenidoOriginalIzq = izq.innerHTML;
const contenidoOriginalDer = der.innerHTML;


let descripciones = [
    "Perfecto para cualquier ocasión, el COLLINS te <br> permite estar a la vanguardia de las tendencias sin sacrificar la comodidad",
    "Con el MONROE, podrás disfrutar de la comodidad y <br> el estilo en una sola prenda, crea looks versátiles y llenos de personalidad",
    "El jean KENDALL personifica el estilo relajado y vanguardista con su corte boyfriend, una silueta holgándosela y cómoda que irradia actitud.",
    "Su diseño evoca la libertad y el movimiento, mientras que el tiro alto estiliza y alarga las piernas.",
    "Este modelo realza tus curvas de forma natural. Garantizando un look moderno y favorecedor en cualquier ocasión.",
    "Lupita, definición de elegancia y sofisticación. <br> Además, su clásico diseño de 5 bolsillos lo <br> convierten en una prenda versátil y atemporal.",
    "El TAYLOR es cómodo y ajustado desde el abdomen hasta la bota, estilizándotelas el cuerpo y realzando <br> la sensualidad de la figura."
]

//Titulos
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        let newUrlTitulos = `${urlTitulos + (i + 1)}.jpg`; //Con (i + 1 ) el collins no tomara la imagen _0 ya que empieza tomando la imagen _1 pero sigue siendo con la posicion 0
        let newUrlBannerPrincipal = `${urlBannerPrincipal + (i + 1)}.jpg`; //Con (i + 1 ) el collins no tomara la imagen _0 ya que empieza desde _1
        let newurlminiBanner = `${urlminiBanner + (i + 0)}.jpg`; //Mini banner
        let newUrlUp = `${urlUp + (i + 0)}.jpg`; //Up
        let newUrlDescripcion = `${urlDescripcion + (i + 0)}.jpg`; //Descripcion
        let newUrlTituloSecundario = `${urlTituloSecundario + (i + 0)}.jpg`;//Titulo Secundario
        let newurlminiBannerSecundario = `${urlminiBannerSecundario + (i + 0)}.jpg`; //Mini banner secundario
        let newurlminiBannerTerciario = `${urlminiBannerTerciario + (i + 0)}.jpg`; //Mini Banner terciario

        imgBannerPrincipal.setAttribute('src', newUrlBannerPrincipal);
        imgTitulos.setAttribute('src', newUrlTitulos);
        imgMiniBanner.setAttribute('src', newurlminiBanner);
        imgUp.setAttribute('src', newUrlUp);
        imgDescripcion.setAttribute('src', newUrlDescripcion);
        imgTituloSecundario.setAttribute('src', newUrlTituloSecundario);
        imgMiniBannerSecundario.setAttribute('src', newurlminiBannerSecundario);
        imgMiniBannerTerciario.setAttribute('src', newurlminiBannerTerciario);

        descripcionSecundaria.innerHTML = descripciones[i];

        RoomTres.style.display = '';
        imgUp.style.opacity = '';
        imgUp.style.width = '';
        imgUp.style.top = '';
        imgUp.style.bottom = '';
        imgUp.style.left = '';

        //Cambiar los roles de izq y der 
        if (i === 3 || i === 4 || i === 5) {
            izq.innerHTML = contenidoOriginalDer;
            der.innerHTML = contenidoOriginalIzq;
        } else {
            izq.innerHTML = contenidoOriginalIzq;
            der.innerHTML = contenidoOriginalDer;
        }

        //Se resetea las variables de las imagenes, debido a que el inner las daña, y por ello no se cambiarian
        imgMiniBanner = document.querySelector('.mini-banner');
        imgMiniBannerSecundario = document.querySelector('.mini-banner-secundario');
        imgMiniBannerTerciario = document.querySelector('.mini-banner-terciario');

        imgMiniBanner.setAttribute('src', newurlminiBanner);
        imgUp = document.querySelector('#img-Up')
        imgMiniBannerSecundario.setAttribute('src', newurlminiBannerSecundario);
        imgMiniBannerTerciario.setAttribute('src', newurlminiBannerTerciario);

        imgTitulos.classList.remove('h1-alternativo');
        imgTitulos.classList.remove('h1-alternativo-dos');
        imgTitulos.classList.remove('h1-alternativo-tres');



        //Nota: Javascript no maneja !important
        if (i === 0) {
            imgTitulos.classList.add('h1-alternativo');
            RoomTres.style.display = 'block';
            imgUp.style.opacity = '1';
            imgUp.style.top = '1%';
        } else if (i === 1) {
            imgTitulos.classList.add('h1-alternativo');
            RoomTres.style.display = 'block';
        } else if (i === 2) {
            imgTitulos.classList.add('h1-alternativo');
            RoomTres.style.display = 'block';
        } else if (i === 3) {
            imgTitulos.classList.add('h1-alternativo');
            RoomTres.style.display = 'block';
        } else if (i === 4) {
            imgTitulos.classList.add('h1-alternativo-dos');
            RoomTres.style.display = 'block';
            imgUp.style.opacity = '1';
            imgUp.style.width = '8%';
            imgUp.style.bottom = '25%';
            imgUp.style.left = '3%';

        } else if (i === 5) {
            imgTitulos.classList.add('h1-alternativo-dos');
            RoomTres.style.display = 'block';

        } else if (i === 6) {
            imgTitulos.classList.add('h1-alternativo-tres');
            RoomTres.style.display = 'block';
        }
    })
}