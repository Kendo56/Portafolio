
let imgBannerSecundario = document.querySelector('#banner-secundario');//Banners
let imgTitulos = document.querySelector('.titulo'); //Titulos
let imgMiniBannerUno = document.querySelector('#mini-banner-1'); //Mini banner 1
let imgMiniBannerDos = document.querySelector('#mini-banner-2'); //Mini banner 2
let imgProductos = document.querySelector('#productos'); //Mini banner 2

//Paginas alternativas del slider
//Pagina 1
paginaUnoAlternativa = document.querySelector('.pagina-1');
paginaUnoBlackAlternativa = document.querySelector('.pagina-1-black');
AddUnoAlternativo = document.querySelector('.add');
NumeroUnoAlternativo = document.querySelector('.numero-1');
verMasUnoAlternativo = document.querySelector('.ver-mas-1');

//Pagina 2
paginaDosAlternativa = document.querySelector('.pagina-2');
paginaDosBlackAlternativa = document.querySelector('.pagina-2-black');
AddDosAlternativo = document.querySelector('.add-2');
NumeroDosAlternativo = document.querySelector('.numero-2');
verMasDosAlternativo = document.querySelector('.ver-mas-2');

//Pagina 3
paginaTresAlternativa = document.querySelector('.pagina-3');
paginaTresBlackAlternativa = document.querySelector('.pagina-3-black');
AddTresAlternativo = document.querySelector('.add-3');
NumeroTresAlternativo = document.querySelector('.numero-3');
verMasTresAlternativo = document.querySelector('.ver-mas-3');

//Pagina 4
paginaCuatroAlternativa = document.querySelector('.pagina-4');
paginaCuatroBlackAlternativa = document.querySelector('.pagina-4-black');
AddCuatroAlternativo = document.querySelector('.add-4');
NumeroCuatroAlternativo = document.querySelector('.numero-4');
verMasCuatroAlternativo = document.querySelector('.ver-mas-4');

//Pagina 5
paginaCincoAlternativa = document.querySelector('.pagina-5');
paginaCincoBlackAlternativa = document.querySelector('.pagina-5-black');
AddCincoAlternativo = document.querySelector('.add-5');
NumeroCincoAlternativo = document.querySelector('.numero-5');
verMasCincoAlternativo = document.querySelector('.ver-mas-5');

//Pagina 6
paginaSeisAlternativa = document.querySelector('.pagina-6');
paginaSeisBlackAlternativa = document.querySelector('.pagina-6-black');
AddSeisAlternativo = document.querySelector('.add-6');
NumeroSeisAlternativo = document.querySelector('.numero-6');
verMasSeisAlternativo = document.querySelector('.ver-mas-6');


let textoGeneral = document.querySelector('#texto-general'); //Textos
let flechas = document.querySelectorAll('.flecha'); //Flechas
let BarraProgreso = document.querySelector('#progreso'); //Barra de progreso

//Url imagenes
let urlImagen = "img max/sabana-africana-banner-slider_";
let urlTitulos = "img max/Femenine banner_";
let urlMiniBannerUno = "img max/sabana-africana-banner-terciaros_";
let urlMiniBannerDos = "img max/sabana-africana-banner-cuartarios_";
let urlProductos = "img max/Producto_";

let button = document.querySelectorAll('.slides');
const totalSlides = button.length; //Total slides recibe el boton
let iActual = 0;


//textos
let textos = [
    "Captura la esencia <b>western</b><br>luciendo un <b>maxi print tropical</b><br>en colores terrosos que se<br>adaptan fácilmente.<br><br>El estilo lo creas tú.", //texto touch
    'Nunca fue tan inspirador el <br> estilo fall-country en donde <br> un sombrero estilo cowboy <br> será el complemento <br> perfecto', //texto countryside style
    "Un estilo de los años 70s que <br> rescatamos con detalles <br> femeninos en colores <br> orgánicos que recrean tu <br> mejor look.", //texto Folk Flair
    "Descubre cómo los colores terrosos, los <br> estampados salvajes y los tejidos naturales <br> se combinan para crear un look auténtico.", //texto Voyage Savage
    "En esta temporada de otoño, puedes <br> experimentar con dos tonos neutros: el <br> camel y el negro. La clave para lograr <br> un estilo personal son los pequeños <br> detalles, como los accesorios <br> esenciales para marcar la diferencia.", //texto Timeless duo
    "Una cápsula premium donde el <br> lino estampado y los detalles <br> son los protagonistas que <br> reflejen tu estilo personal y te <br> hagan sentir cómoda y elegante" //texto Esencia tropical
];

//banner Secundario
for (let i = 0; i < button.length; i++) { //Evento del botton
    button[i].addEventListener('click', function () {
        let newUrlBannerSecundario = `${urlImagen + i}.jpg`; //La variable newUrl toma las url + los los elementos de la variable i
        imgBannerSecundario.setAttribute('src', newUrlBannerSecundario);
    })
}
//Mini Banner 1
for (let i = 0; i < button.length; i++) {

    button[i].addEventListener('click', function () {
        let newUrlMiniBannerUno = `${urlMiniBannerUno + i}.jpg`;
        imgMiniBannerUno.setAttribute('src', newUrlMiniBannerUno);

    })
}
//Mini Banner 2
for (let i = 0; i < button.length; i++) {

    button[i].addEventListener('click', function () {
        let newUrlMiniBannerDos = `${urlMiniBannerDos + i}.jpg`;
        imgMiniBannerDos.setAttribute('src', newUrlMiniBannerDos);

    })
}
//Productos
for (let i = 0; i < button.length; i++) {

    button[i].addEventListener('click', function () {
        let newUrlProductos = `${urlProductos + i}.jpg`;
        imgProductos.setAttribute('src', newUrlProductos);

    })
}

//Agrandar imagen con el click al contenedor
for (let i = 0; i < button.length; i++) {

    button[i].addEventListener('click', function () {

        //Slide1
        paginaUnoAlternativa.classList.remove('pagina-alternativa');
        paginaUnoBlackAlternativa.classList.remove('pagina-black-alternativa');
        NumeroUnoAlternativo.classList.remove('numero-alternativo');
        AddUnoAlternativo.classList.remove('add-alternativo');
        verMasUnoAlternativo.classList.remove('ver-mas-alternativo');

        //Slide2
        paginaDosAlternativa.classList.remove('pagina-alternativa');
        paginaDosBlackAlternativa.classList.remove('pagina-black-alternativa');
        NumeroDosAlternativo.classList.remove('numero-alternativo');
        AddDosAlternativo.classList.remove('add-alternativo');
        verMasDosAlternativo.classList.remove('ver-mas-alternativo');

        //Slide3
        paginaTresAlternativa.classList.remove('pagina-alternativa');
        paginaTresBlackAlternativa.classList.remove('pagina-black-alternativa');
        NumeroTresAlternativo.classList.remove('numero-alternativo');
        AddTresAlternativo.classList.remove('add-alternativo');
        verMasTresAlternativo.classList.remove('ver-mas-alternativo');

        //Slide4
        paginaCuatroAlternativa.classList.remove('pagina-alternativa');
        paginaCuatroBlackAlternativa.classList.remove('pagina-black-alternativa');
        NumeroCuatroAlternativo.classList.remove('numero-alternativo');
        AddCuatroAlternativo.classList.remove('add-alternativo');
        verMasCuatroAlternativo.classList.remove('ver-mas-alternativo');

        //Slide5
        paginaCincoAlternativa.classList.remove('pagina-alternativa');
        paginaCincoBlackAlternativa.classList.remove('pagina-black-alternativa');
        NumeroCincoAlternativo.classList.remove('numero-alternativo');
        AddCincoAlternativo.classList.remove('add-alternativo');
        verMasCincoAlternativo.classList.remove('ver-mas-alternativo');
        
        //Slide6
        paginaSeisAlternativa.classList.remove('pagina-alternativa');
        paginaSeisBlackAlternativa.classList.remove('pagina-black-alternativa');
        NumeroSeisAlternativo.classList.remove('numero-alternativo');
        AddSeisAlternativo.classList.remove('add-alternativo');
        verMasSeisAlternativo.classList.remove('ver-mas-alternativo');

        if (i === 0) {
            paginaUnoAlternativa.classList.add('pagina-alternativa');
            paginaUnoBlackAlternativa.classList.add('pagina-black-alternativa');
            NumeroUnoAlternativo.classList.add('numero-alternativo');
            AddUnoAlternativo.classList.add('add-alternativo');
            verMasUnoAlternativo.classList.add('ver-mas-alternativo');
        }else if(i === 1){
            paginaDosAlternativa.classList.add('pagina-alternativa');
            paginaDosBlackAlternativa.classList.add('pagina-black-alternativa');
            NumeroDosAlternativo.classList.add('numero-alternativo');
            AddDosAlternativo.classList.add('add-alternativo');
            verMasDosAlternativo.classList.add('ver-mas-alternativo');
        }else if(i === 2){
            paginaTresAlternativa.classList.add('pagina-alternativa');
            paginaTresBlackAlternativa.classList.add('pagina-black-alternativa');
            NumeroTresAlternativo.classList.add('numero-alternativo');
            AddTresAlternativo.classList.add('add-alternativo');
            verMasTresAlternativo.classList.add('ver-mas-alternativo');
        }else if(i === 3){
            paginaCuatroAlternativa.classList.add('pagina-alternativa');
            paginaCuatroBlackAlternativa.classList.add('pagina-black-alternativa');
            NumeroCuatroAlternativo.classList.add('numero-alternativo');
            AddCuatroAlternativo.classList.add('add-alternativo');
            verMasCuatroAlternativo.classList.add('ver-mas-alternativo');
        }else if(i === 4){
            paginaCincoAlternativa.classList.add('pagina-alternativa');
            paginaCincoBlackAlternativa.classList.add('pagina-black-alternativa');
            NumeroCincoAlternativo.classList.add('numero-alternativo');
            AddCincoAlternativo.classList.add('add-alternativo');
            verMasCincoAlternativo.classList.add('ver-mas-alternativo');
        }else if(i === 5){
            paginaSeisAlternativa.classList.add('pagina-alternativa');
            paginaSeisBlackAlternativa.classList.add('pagina-black-alternativa');
            NumeroSeisAlternativo.classList.add('numero-alternativo');
            AddSeisAlternativo.classList.add('add-alternativo');
            verMasSeisAlternativo.classList.add('ver-mas-alternativo');
        }
    })
}

//Titulos y textos
//countryside style
for (let i = 0; i < button.length; i++) {

    button[i].addEventListener('click', function () {
        let newUrlTitulos = `${urlTitulos + i}.png`;
        imgTitulos.setAttribute('src', newUrlTitulos);
        textoGeneral.innerHTML = textos[i];

        //Resetea el cambio
        imgTitulos.style.width = '';
        imgTitulos.style.top = '';
        imgTitulos.style.left = '';

        textoGeneral.classList.remove('texto-countryside');
        BarraProgreso.classList.remove('barra-progreso-style');


        //Titulos
        if (i === 1) {
            imgTitulos.style.width = '20%';
            imgTitulos.style.top = '55%';
            imgTitulos.style.left = '14.5%';
        }else if (i === 2){
            imgTitulos.style.width = '20%';
            imgTitulos.style.top = '46%';
            imgTitulos.style.left = '21%';
        }else if (i === 3){
            imgTitulos.style.width = '20%';
            imgTitulos.style.top = '42%';
            imgTitulos.style.left = '24%';
        }else if (i === 4){
            imgTitulos.style.width = '17%';
            imgTitulos.style.top = '44%';
            imgTitulos.style.left = '31%';
        }else if (i === 5){
            imgTitulos.style.width = '31%';
            imgTitulos.style.top = '42%';
            imgTitulos.style.left = '18%';
        }
        if (i === 1) {
            textoGeneral.classList.add('texto-countryside');
        }
        if (i === 1) {
            BarraProgreso.classList.add('barra-progreso-style');
        }
    })
}

//Folk Flair
for (let i = 0; i < button.length; i++) { //Evento del botton

    button[i].addEventListener('click', function () {
        let newUrlTitulos = `${urlTitulos + i}.png`;
        imgTitulos.setAttribute('src', newUrlTitulos);
        textoGeneral.innerHTML = textos[i];

        textoGeneral.classList.remove('texto-folk-flair');
        BarraProgreso.classList.remove('barra-progreso-folk');




        if (i === 2) {
            textoGeneral.classList.add('texto-folk-flair');
        }
        if (i === 2) {
            BarraProgreso.classList.add('barra-progreso-folk');
        }
    })
}
//Voyage Savage 
for (let i = 0; i < button.length; i++) {

    button[i].addEventListener('click', function () {
        let newUrlTitulos = `${urlTitulos + i}.png`;
        imgTitulos.setAttribute('src', newUrlTitulos);
        textoGeneral.innerHTML = textos[i];


        textoGeneral.classList.remove('texto-voyage');
        BarraProgreso.classList.remove('barra-progreso-voyage');




        if (i === 3) {
            textoGeneral.classList.add('texto-voyage');
        }
        if (i === 3) {
            BarraProgreso.classList.add('barra-progreso-voyage');
        }
    })
}
//Timeless Duo
for (let i = 0; i < button.length; i++) {

    button[i].addEventListener('click', function () {
        let newUrlTitulos = `${urlTitulos + i}.png`;
        imgTitulos.setAttribute('src', newUrlTitulos);
        textoGeneral.innerHTML = textos[i];


        textoGeneral.classList.remove('texto-timeless');
        BarraProgreso.classList.remove('barra-progreso-timeless');



        if (i === 4) {
            textoGeneral.classList.add('texto-timeless');
        }
        if (i === 4) {
            BarraProgreso.classList.add('barra-progreso-timeless');
        }
    })
}
//Esencia tropical
for (let i = 0; i < button.length; i++) {

    button[i].addEventListener('click', function () {
        let newUrlTitulos = `${urlTitulos + i}.png`;
        imgTitulos.setAttribute('src', newUrlTitulos);
        textoGeneral.innerHTML = textos[i];


        textoGeneral.classList.remove('texto-esencia');
        BarraProgreso.classList.remove('barra-progreso-esencia');




        if (i === 5) {
            textoGeneral.classList.add('texto-esencia');
        }
        if (i === 5) {
            BarraProgreso.classList.add('barra-progreso-esencia');
        }

    })
}
//Este se utilizara si se quiere hacer scroll a mas secciones
/*const botonVerMas = document.querySelector('.ver-mas');
const seccionRoom2 = document.querySelector('#seccion-room-2');

botonVerMas.addEventListener('click', () => {
    seccionRoom2.scrollIntoView({
        behavior: 'smooth'
    });
});*/


// Evento flechas y barra de progreso
//  Recorremos las flechas para agregarles el evento de clic
for (let f = 0; f < flechas.length; f++) {
    flechas[f].addEventListener('click', function () {



        // ✅ Si la flecha es la DERECHA, avanzamos
        if (flechas[f].classList.contains('derecha')) {
            iActual++; // Avanzamos al siguiente slide

            // Si pasamos el último slide, volvemos al primero
            if (iActual >= totalSlides) {
                iActual = 0;
            }
        }

        // ✅ Si la flecha es la IZQUIERDA, retrocedemos
        if (flechas[f].classList.contains('izquierda')) {
            iActual--; // Retrocedemos al slide anterior

            // Si pasamos antes del primer slide, vamos al último
            if (iActual < 0) {
                iActual = totalSlides - 1;
            }


        }
        //  Disparamos un clic simulado sobre el slide actual,
        // para que se actualicen todos los elementos como ya lo tenías programado
        button[iActual].click();
    });
}