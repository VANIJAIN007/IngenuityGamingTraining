var ages=[12,11,32];
var result=ages.filter(filterAge);

function filterAge(age){
    return age>18;
}
console.log(result);


//example2

let cities=[{name:"vani",population:1234561234},{name:"fkn",population:1235}];
var bigCities=[];

for(var i=0;i<cities.length;i++){
    if(cities[i].population>300000){
        bigCities.push(cities[i]);
    }
}
console.log(bigCities);

bigCities=cities.filter((city)=>city.population>300000)
console.log(bigCities);

bigCities=cities.filter((city)=>city.population>300000).sort(function(n1,n2){return n2.name-n1.name});

