
import {giveCharacter} from "./script.js"

export class Character{

    constructor (name, speed, intellect, strength, health, inventory){

        this.name = name;

        this.intellect = intellect ;

        this.strength = strength;

        this.speed = speed;

        this.health = health;

        this.inventory = inventory;

 

        }
        stats(){
            
            return console.table({
                name : this.name,
                health: this.interlect,
                strength: this.strength,
                speed: this.speed,
                health: this.health,
                inventory: this.inventory

            });
    }

} 

 

 

export const Doctor =  new Character ('Doctor',5,10,4,10, 'Antidote')

 

export const securityOfficer = new Character ('Security Officer', 8, 3, 10, 10,'Gun')

 

export const scienceOfficer = new Character ('Science Officer',4,9,5,8, 'Scanner')

 

export const Captain = new Character ('Captain', 8, 8, 8, 8, 'Artifact')

 

export const Ensign = new Character ('Ensign', 4,4, 4, 6, '','Changeling')

 

export const alienLeader = new Character ('Alien Leader', 9, 8, 10, 9)

 

const Junior = new Character ('Junior',3,2,3,8)

 

const Tuvok = new Character ('Tuvok', 3, 2, 5, 8)

 

const Worf = new Character ('Worf', 7, 2, 10, 10)

 

const Guard = new Character('Guard',7,6,9,7)

 


//export const chosenstats = character.stats()
//console.log(chosenstats)

export const getCharStats = async () => {
    let character = giveCharacter()
    character.stats()
    
    
}


 


//class friendliness extends Character {

  //  constructor(name, friendliness)}

   

 

//class aggression extends Character {

  //      constructor(name, aggression)

 //   }