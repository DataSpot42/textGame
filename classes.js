let hit = 0


export class Character{

    constructor (name, intellect, strength, speed, 
        health){
        this.name = name;
        this.intellect = intellect;
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
                skill: this.skill,
                inventory: this.inventory
            });
    }

} 


export class aliens extends Character {
        constructor (name, intellect, strength, speed, 
            health, aggression) {
            super (name, intellect, strength, speed, 
                health, aggression);
                this.aggression = aggression            
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
        this.health = 3
        this.aggression = 2    
        }
    fight() {
        this.health -= 3;
        console.log(`${this.name} took a punch`);
        this.stats();
        return this;
    }
}    
    export class CaveAlien extends aliens {
        constructor (name, intellect, strength, speed, 
            health, aggression) {
            super (intellect, strength, speed, 
                health, aggression);
    
            this.name = name
            this.intellect = 5
            this.strength = 6
            this.speed = 4
            this.health = 5
            this.aggression = 2       
            
        }   
        fight() {
            this.health -= 3;
            console.log(`${this.name} took a punch`);
            this.stats();
            return this;
        }  
    

}
    export class GuardAlien extends aliens {
        constructor (name, intellect, strength, speed, 
            health, aggression) {
            super (intellect, strength, speed, 
                health, aggression);
    
            this.name = name
            this.intellect = 7
            this.strength = 8
            this.speed = 6
            this.health = 3
            this.aggression = 10       
            
        }   
        fight() {
            this.health -= 3;
            console.log(`${this.name} took a punch`);
            this.stats();
            return this;
        }  
}

    export class LeaderAlien extends aliens {
        constructor (name, intellect, strength, speed, 
            health, aggression) {
            super (intellect, strength, speed, 
                health, aggression);
    
            this.name = name
            this.intellect = 9
            this.strength = 9
            this.speed = 9
            this.health = 9
            this.aggression = 9       
            
        }   
        fight(alienbeing,crewbeing,num) {
            hit = (Math.floor(Math.random()*num))
            if (hit < 1) {console.log(`${crewbeing} missed`)} else {
            this.health -= hit;
            console.log(`${alienbeing} took a punch from ${crewbeing}, taking a hit of ${hit} health`)};
            this.stats();
            return this;
        }  
}
   


export class crew extends Character {
    constructor (name, intellect, strength, speed, 
        health,skill, inventory) {
        super (name, intellect, strength, speed, 
            health, skill,inventory);
            this.inventory = inventory;
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
        this.skill = 'Cure'
        this.inventory = 'Empty'        
    }

    fight() {
        this.health -= 3;
        console.log(`${this.name} took a punch`);
        this.stats();
        return this;
    }
    badFood() {
        this.health +=2
        console.log(`Thankfully ${this.name} has an took a vaccine for this poison so is unaffeced, mmm tasty indeed`); 
        
     this.stats();

    }
    finalFight() {
        this.health -= 4;
        console.log(`${this.name} got hit hard `);
        this.stats();
        return this;
    }
}


  export class securityOfficer extends crew {
    constructor (name, intellect, strength, speed, 
        health, skill, inventory) {
        super (intellect, strength, speed, 
            health, skill, inventory);

        this.name = name
        this.intellect = 3
        this.strength = 10
        this.speed = 8
        this.health = 10
        this.skill = 'Body Armour'
        this.inventory = 'Empty'
    
    }

    fight(alienbeing) {
        ;
        console.log(`${alienbeing}s punch against ${this.name} has little affect due to his ${this.skill}`); this.health -=1;
        this.stats();
        return this;
    }
    badFood() {
        
        if (this.inventory == "Antidote") {this.inventory = "Empty"; console.log(`Thankfully ${this.name} has an antidote to the poison in his inventory`);}
        else { this.health -=4; console.log(`${this.name} didn't like the taste of that and starts seeing goblins running around him, getting trippy man, loose 2 health.`)};
     this.stats();} 

    finalFight() {
        this.health -= 2;
        console.log(`${this.name} managed to slightly dodge the oncoming hit, just grazed his face`)
    }
}     

export class scienceOfficer extends crew {
    constructor (name, intellect, strength, speed, 
        health, skill, inventory) {
        super (intellect, strength, speed, 
            health, skill, inventory);

        this.name = name
        this.intellect = 9
        this.strength = 5
        this.speed = 6
        this.health = 8
        this.skill = 'Escape Artist'
        this.inventory = 'Empty'
    
    }

    fight() {
        this.health -=4;
        console.log(`${this.name} takes a punch`);
        this.stats();
        return this;
    }
    badFood() {
        
        if (this.inventory == "Antidote") {this.inventory = "Empty"; console.log(`Thankfully ${this.name} has an antidote to the poison in his inventory`);}
        else { this.health -=2; console.log(`${this.name} didn't like the taste of that and starts seeing goblins running around him, getting trippy man, loose 2 health.`)};
     this.stats();} 
     
    finalFight(){
        this.health -= 3;
        console.log(`${this.name} didn't see that punch coming, straight to the gut owwww.`);
        this.stats();
        return this;
    }
} 
export class Captain extends crew {
    constructor (name, intellect, strength, speed, 
        health, inventory) {
        super (intellect, strength, speed, 
            health, inventory);

        this.name = name
        this.intellect = 7
        this.strength = 7
        this.speed = 7
        this.health = 7
        this.skill = 'Knowladge about aliens'
        this.inventory = 'Empty'
    
    }

    fight() {
        this.health -=2;
        console.log(`${this.name} takes a punch but as he knows how these aliens fight he manages to partially block it`);
        this.stats();
        return this;
    }
    badFood() {
        
        if (this.inventory == "Antidote") {this.inventory = "Empty"; console.log(`Thankfully ${this.name} has an antidote to the poison in his inventory`);}
        else { this.health -=2; console.log(`${this.name} didn't like the taste of that and starts seeing goblins running around him, getting trippy man, loose 2 health.`)};
     this.stats();} 
    
     finalFight(){
        this.health -= 3
        console.log(`${this.name} that was a tough one, but I still have more to give.`);
        this.stats();
        return this;
     }
} 

export class Ensign extends crew {
    constructor (name, intellect, strength, speed, 
        health, inventory) {
        super (intellect, strength, speed, 
            health, inventory);

        this.name = name
        this.intellect = 4
        this.strength = 4
        this.speed = 4
        this.health = 4
        this.skill = 'Changeling'
        this.inventory = 'Empty'
    
    }

    fight() {
        this.health -=5;
        console.log(`${this.name} takes a punch and falls the the ground`);
        this.stats();
        return this;
    }
    badFood() {
        
        if (this.inventory == "Antidote") {this.inventory = "Empty"; console.log(`Thankfully ${this.name} has an antidote to the poison in his inventory`);}
        else { this.health -=4; console.log(`${this.name} didn't like the taste of that and starts seeing goblins running around him, getting trippy man, loose 2 health.`)};
     this.stats();
    } 
    
    finalFight(){
    this.health -= 5;
    console.log(`This match is too tough for ${this.name} `)
    }
} 
 



 



 


 

//export const alienLeader = new Character ('Alien Leader', 9, 8, 10, 9)

 



 

//const CaveAlien = new Character ('Tuvok', 3, 2, 5, 8)

 

//const Leader = new Character ('Worf', 7, 2, 10, 10)

 

//const Guard = new Character('Guard',7,6,9,7)

 



//console.log(chosenstats)

//export const getCharStats = async () => {
    
//    return dostats()
    
    
//}


 


//class friendliness extends Character {

  //  constructor(name, friendliness)}

   

 

//class aggression extends Character {

  //      constructor(name, aggression)

 //   }