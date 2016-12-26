console.log('sanity check');


function personListener () {
  console.log(this.responseText);

  var person = JSON.parse(this.responseText);
  console.log(person);

  var getPersonName = document.getElementById('person4Name');
  getPersonName.innerHTML = person.name;

}


function homeListener () {
  console.log(this.responseText);

  var homeworld = JSON.parse(this.responseText);
  console.log(homeworld);

  var getHomeWorld = document.getElementById('person4HomeWorld');
  getHomeWorld.innerHTML = homeworld.name;
  
}

function personFourteen (){
  console.log(this.responseText);
  var person = JSON.parse(this.responseText);
  console.log(person);

  var getPersonFourteen = document.getElementById('person14Name');
  getPersonFourteen.innerHTML = person.name;

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


