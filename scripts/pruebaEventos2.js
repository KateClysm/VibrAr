const artistasBaners = `{
    "artista" : [
      {
        "nombre" : "Taylor Swift",
        "baner" : "resources/taylorbaner.jpg",
        "link" : "taylor.html",
        "alt" : "Baner Taylor Swift",
        "identificacion" : "TaylorSwift"
      },
      {
        "nombre" : "The Weeknd",
        "baner" : "resources/theweekndbaner.jpg",
        "link" : "theweeknd.html",
        "alt" : "Baner The Weeknd",
        "identificacion" : "TheWeeknd"
      },
      {
        "nombre" : "Evanescence",
        "baner" : "resources/Evanescencebaner.jpg",
        "link" : "evanescence.html",
        "alt" : "Baner Evanescence",
        "identificacion" : "Evanescence"
      },
      {
        "nombre" : "Maneskin",
        "baner" : "resources/maneskinbaner.jpg",
        "link" : "maneskin.html",
        "alt" : "Baner Maneskin",
        "identificacion" : "Maneskin"
      },
      {
        "nombre" : "Red Hot Chili Peppers",
        "baner" : "resources/rhcpbaner.png",
        "link" : "redhot.html",
        "alt" : "Red Hot Chili Peppers",
        "identificacion" : "RedHotChiliPeppers"
      },
      {
        "nombre" : "Duki",
        "baner" : "resources/dukibaner.jpg",
        "link" : "duki.html",
        "alt" : "Red Duki",
        "identificacion" : "Duki"
      }
    ]
  }`;



const parseArtistas = (JSON.parse(artistasBaners)); //PARSEO DEL JSON = convierte a objeto


//TEMPLATE
let templateBaners = Handlebars.compile(`
<div class="container-padre centradoAbsoluto">
    <div class="container-blanco centradoAbsoluto">
        <div class="container-section">
            <div class="eventos">
                <h1 class = "titulo">Proximos Eventos</h1>
                </div>

                    {{#each artista}}
                        <div class="row-eventos">
                            <div class="colum-eventos">
                                <a class="baner-artista" href="" id="{{this.identificacion}}">
                                    <img src="{{this.baner}}" alt="{{this.alt}}">
                                    <div class="degradado">
                                        <h4>Ver más...</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    {{/each}}

               </div>     
            </div>
        </div>
    </div>
</div>`);


// document.getElementById("artistasContainer").innerHTML = templateBaners(parseArtistas);




const anchor = document.getElementsByClassName("baner-artista");

console.log(anchor);
console.log(anchor.id);
anchor.id = document.getElementsByClassName("baner-artista")[0].id;

if (anchor.id == "TaylorSwift"){
    console.log(anchor.id)
};


