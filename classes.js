


export class Character{

    constructor (name, intellect, strength, speed, 
        health){

        this.name = name;

        this.intellect = intellect ;

        this.strength = strength;

        this.speed = speed;

        this.health = health;

       

 

        }
        stats(){
            
            return console.table({
                name : this.name,
                intellect: this.intellect,
                strength: this.strength,
                speed: this.speed,
                health: this.health,
                inventory: this.inventory

            });
    }

} 

class crew extends Character {
    constructor (name, intellect, strength, speed, 
        health, inventory) {
        super (name, intellect, strength, speed, 
            health, inventory);

            this.inventory = inventory;
    }
}   
class aliens extends Character {
    constructor (name, intellect, strength, speed, 
        health, aggression) {
        super (name, intellect, strength, speed, 
            health, aggression);
            this.aggression = aggression
        
}
}


export class Doctor extends crew {
    constructor (name, intellect, strength, speed, 
        health, inventory) {
        super (intellect, strength, speed, 
            health, inventory);

        this.name = name
        this.intellect = 10
        this.strength = 5
        this.speed = 4
        this.health = 10
        this.inventory = 'Antidote'
        
    }

    fight() {
        this.health -= 3;
        console.log(`${this.name} took a punch`);
        this.stats();
        return this;
    }
    badFood() {
        this.health -=4;
        console.log(`${this.name} didn't like the taste of that and starts seeing goblins running around him, getting trippy man..`);
    }

}

export class Junior extends aliens {
    constructor (name, intellect, strength, speed, 
        health, aggression) {
        super (intellect, strength, speed, 
            health, aggression);

        this.name = name
        this.intellect = 5
        this.strength = 2
        this.speed = 3
        this.health = 8
        this.aggression = 2

        
        
    }

    fight() {
        this.health -= 3;
        console.log(`${this.name} took a punch`);
        this.stats();
        return this;
    }
    badFood() {
        this.health -=4;
        console.log(`${this.name} didn't like the taste of that and starts seeing goblins running around him, getting trippy man..`);
    }

}
    


    

  //  constructor(name, friendliness)} 

 



 

export const securityOfficer = new Character ('Security Officer', 8, 3, 10, 10,'Gun')

 

export const scienceOfficer = new Character ('Science Officer',4,9,5,8, 'Scanner')

 

export const Captain = new Character ('Captain', 8, 8, 8, 8, 'Artifact')

 

export const Ensign = new Character ('Ensign', 4,4, 4, 6, '','Changeling')

 

export const alienLeader = new Character ('Alien Leader', 9, 8, 10, 9)

 



 

const Tuvok = new Character ('Tuvok', 3, 2, 5, 8)

 

const Worf = new Character ('Worf', 7, 2, 10, 10)

 

const Guard = new Character('Guard',7,6,9,7)

 



//console.log(chosenstats)

//export const getCharStats = async () => {
    
//    return dostats()
    
    
//}


 


//class friendliness extends Character {

  //  constructor(name, friendliness)}

   

 

//class aggression extends Character {

  //      constructor(name, aggression)

 //   }