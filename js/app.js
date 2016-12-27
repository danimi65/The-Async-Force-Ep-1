console.log('sanity check');


function personListener () {
  // console.log(this.responseText);

  var person = JSON.parse(this.responseText);
  // console.log(person);

  var getPersonName = document.getElementById('person4Name');
  getPersonName.innerHTML = person.name;

}


function homeListener () {
//   console.log(this.responseText);

  var homeworld = JSON.parse(this.responseText);
  // console.log(homeworld);

  var getHomeWorld = document.getElementById('person4HomeWorld');
  getHomeWorld.innerHTML = homeworld.name;
  
}

function personFourteen (){
  // console.log(this.responseText);
  var person = JSON.parse(this.responseText);
  // console.log(person);

  var getPersonFourteen = document.getElementById('person14Name');
  getPersonFourteen.innerHTML = person.name;

}

function personFourteenSpecies (){
 var person = JSON.parse(this.responseText);
 // console.log(person);

 var getPersonSpecies = document.getElementById('person14Species');
 getPersonSpecies.innerHTML = person.name;

}

function films (){
  var theFilms = JSON.parse(this.responseText).results;
  console.log(theFilms);

  for(var i = 0; i < theFilms.length; i++ ){
    var filmTitle = document.createElement('li');
    var getFilm = document.getElementById('filmList');
    var titleName = theFilms[i].title;
    filmTitle.innerHTML = titleName;
    getFilm.appendChild(filmTitle);


    console.log(titleName);
  }

}

function dataRequest(url, listener){
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", listener);
oReq.open("GET", url); 
oReq.send();

}

dataRequest("http://swapi.co/api/people/4", personListener);
dataRequest("http://swapi.co/api/planets/1/", homeListener);
dataRequest("http://swapi.co/api/people/14/", personFourteen);
dataRequest("http://swapi.co/api/species/1/", personFourteenSpecies);
dataRequest("http://swapi.co/api/films/", films);


