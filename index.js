let isDivHidden = true;
let revealButton = document.querySelector('.btn');
let toggleDiv = document.querySelector('.invisible');
let toggleDiv1 = document.querySelector('.visible');

revealButton.addEventListener('click',function(){
    if (isDivHidden === true) {
        toggleDiv.classList.remove('invisible');
        isDivHidden = false;
        toggleDiv1.classList.add('invisible');
    }  
}); 

let revealBall1 = document.querySelector('#ball1');
let revealBall2 = document.querySelector('#ball2');
let revealBall3 = document.querySelector('#ball3');

let openBall1 = document.querySelector('#openBall1');
let openBall2 = document.querySelector('#openBall2');
let openBall3 = document.querySelector('#openBall3');

let myPokemon1 = document.querySelector('#lugia');
let myPokemon2 = document.querySelector('#blastoise');
let myPokemon3 = document.querySelector('#jigglypuff');


let pokemonHidden1 = true;
revealBall1.addEventListener('click',function(){
    if(pokemonHidden1 === true){
        myPokemon1.classList.remove('invisible-pokemon');
        openBall1.classList.remove('reveal-pokemon');
        pokemonHidden1 = false;
        revealBall1.classList.add('invisible-pokemon');         
    }
});

let pokemonHidden2 = true;
revealBall2.addEventListener('click',function(){
    if(pokemonHidden2 === true){
        myPokemon2.classList.remove('invisible-pokemon');
        openBall2.classList.remove('reveal-pokemon');
        pokemonHidden2 = false;
        revealBall2.classList.add('invisible-pokemon');         
    }
});

let pokemonHidden3 = true;
revealBall3.addEventListener('click',function(){
    if(pokemonHidden3 === true){
        myPokemon3.classList.remove('invisible-pokemon');
        openBall3.classList.remove('reveal-pokemon');
        pokemonHidden3 = false;
        revealBall3.classList.add('invisible-pokemon');         
    }
});

openBall1.addEventListener('click',function(){
    if(pokemonHidden1 === false){
        myPokemon1.classList.add('invisible-pokemon');
        openBall1.classList.add('reveal-pokemon');
        pokemonHidden1 = true;
        revealBall1.classList.remove('invisible-pokemon'); 
    }
    stats.classList.add('stats');
    messageElement.style.display = 'none';
});
  

openBall2.addEventListener('click',function(){
    if(pokemonHidden2 === false){
        myPokemon2.classList.add('invisible-pokemon');
        openBall2.classList.add('reveal-pokemon');
        pokemonHidden2 = true;
        revealBall2.classList.remove('invisible-pokemon'); 
    }
    stats.classList.add('stats');
    messageElement.style.display = 'none';
});

openBall3.addEventListener('click',function(){
    if(pokemonHidden3 === false){
        myPokemon3.classList.add('invisible-pokemon');
        openBall3.classList.add('reveal-pokemon');
        pokemonHidden3 = true;
        revealBall3.classList.remove('invisible-pokemon'); 
    }
    stats.classList.add('stats');
    messageElement.style.display = 'none';
});




class Trainer{
    constructor(name, pokemon){
        this.name = name;
        this.pokemon = pokemon;
    }

    all(){
        return this.pokemon;
    }
    
    get(name){
        for(let i = 0; i < this.pokemon.length;i++){
            let pokemonName=this.pokemon[i].name;
            if(pokemonName === name){
                return this.pokemon[i];
            }
        }
        return false;
    }
}


class Pokemon{
    constructor(name, id, hp, attack, defense, abilities){
        this.name = name;
        this.id = id;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }
}
let lugia = new Pokemon('lugia',249);
let blastoise = new Pokemon('blastoise',9);
let jigglypuff = new Pokemon('jigglypuff',39);
let jynx = new Pokemon('jynx',124);
let buzzwole = new Pokemon('buzzwole', 794);
let pheromosa = new Pokemon('pheromosa',795);
let nidoking = new Pokemon('nidoking', 34);
let zapdos = new Pokemon('zapdos',145);
let umbreon = new Pokemon('umbreon', 197);
let irakem = new Trainer('Irakem', [lugia, blastoise, jigglypuff]);
let vernancio = new Trainer('Vernancio',[jynx, buzzwole, pheromosa]);
let wes = new Trainer('Wes',[nidoking, zapdos, umbreon]);




function getPokemonStats(trainer,name,id){
  axios.get('https://raw.githubusercontent.com/irisha126/pokedexProject/master/api/'+id+'.json')
   .then(function(myResponse){
      let abilitiesArr = [];
      let abilitiesApi = myResponse.data.abilities;
      for (let i = 0; i < abilitiesApi.length; i++) {
         abilitiesArr.push(abilitiesApi[i].ability.name);
       }
      let myPokemon = trainer.get(name);
      myPokemon.name = myResponse.data.name;
      myPokemon.hp = myResponse.data.stats[5].base_stat;
      myPokemon.id = myResponse.data.id;
      myPokemon.attack = myResponse.data.stats[4].base_stat;
      myPokemon.defense = myResponse.data.stats[3].base_stat;
      myPokemon.abilities = abilitiesArr;
      
  });
      

  }
         
        

getPokemonStats('lugia',249);
getPokemonStats('blastoise',9);
getPokemonStats('jigglypuff',39);


let name = document.querySelector('.name');
let id = document.querySelector('.id');
let hp = document.querySelector('.hp');
let attack = document.querySelector('.attack');
let defense = document.querySelector('.defense');
let abilities = document.querySelector('.abilities');
let stats = document.querySelector('.stats');
//let trainerName = document.querySelector('.trainer-name');
//
//trainerName.innerHTML = irakem.name;

let messageElement;
function showStats(myPokemon){
  
  name.innerText = myPokemon.name;
  id.innerText = myPokemon.id;
  hp.innerText = myPokemon.hp;
  attack.innerText = myPokemon.attack;
  defense.innerText = myPokemon.defense;
  abilities.innerText = myPokemon.abilities;
  stats.classList.remove('stats');
  let messageAll = document.querySelectorAll('.message');
  for(let i = 0; i < messageAll.length; i++){
    messageAll[i].style.display = 'none';
  }
  messageElement = document.querySelector(`.message.${myPokemon.name}-info`);
  messageElement.style.display = 'block';
}

myPokemon1.addEventListener('mouseover',function(){
    let pokemon = irakem.get('lugia');
    showStats(pokemon);  
});

myPokemon2.addEventListener('mouseover',function(){
   let pokemon = irakem.get('blastoise')
    showStats(pokemon);
});

myPokemon3.addEventListener('mouseover',function(){
    let pokemon = irakem.get('jigglypuff')
    showStats(pokemon);
});


let alexButton = document.querySelector('#alex');
let irynaButton = document.querySelector('#iryna');
let joseButton = document.querySelector('#jose');

irynaButton.addEventListener('click', function(){
    let irynasPokemons = irakem.all();
    console.log(irynasPokemons);
    
});
