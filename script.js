
import {getcharacter} from "./game.js"
import {alien, gameover} from "./alienimage.js"
import {hubpic} from "./alienhubimage.js"
import {cavepic} from "./caveimage.js"
import  * as allOfThem from "./classes.js"
import * as allMeets from "./meetJ.js"

import { location } from "./location.js"
import {pod} from "./pod.js"
import {storage} from "./storage.js"
import * as caveoptions from "./cave.js"
import {rightTunnel} from "./cave.js"
import {entrance, inventuse} from "./sEntrance.js"
import {interior, invtest} from "./sInterior.js"
import randomItems from "planet-names";
import uniqueRandomArray from 'unique-random-array';

const randomP = uniqueRandomArray(randomItems.all);



let chosen = "";
let entrystoragecount=0;
let gunheat = 0;
var colors = import('colors');





const start = async () => {
    console.clear()
    console.log(`You arrive at planet ${randomP()} `.yellow)
    console.log('choose wisely')
    let character = await getcharacter()
    console.log(`You have chosen the ` + character + '.  His stats are:')
    if (character == "Doctor") { chosen = new allOfThem.Doctor ('Bones')}
    if (character == 'Security Officer') { chosen = new allOfThem.securityOfficer ('Worf')}
    if (character == "Science Officer") { chosen = new allOfThem.scienceOfficer ('Spock')}  
    if (character == "Captain") { chosen = new allOfThem.Captain ('Kirk')}   
    if (character == "Ensign") { chosen = new allOfThem.Ensign ('Crusher')}      
    console.log(chosen)
    chosen.stats()
    
    setTimeout(alienimage, 1000);
    setInterval(checkhealth, 500)
      
    
}

const checkhealth = async () => {
    if (chosen.health <=0) {endDie()}
    return
}

const alienimage = async () =>{
    console.clear()
    let alienimage1 = await alien();
    console.log('\x1b[32m',alienimage1)
    meet()

}

const meet = async () => {
    
    console.log(`You beam down to the planet`.blue)
    let alien1 = new allOfThem.Junior ("SlartyBartFast")
    
    let meeting1 = await allMeets.meetJunior(alien1.name)
    alien1.stats()
    
    console.log('You have chosen to ' + meeting1)
    if (meeting1 == 'TALK') {
        if (chosen.intellect > alien1.intellect) {
                        let meeting2 = await allMeets.talk1()
                        console.log('You chose ' + meeting2);if (meeting2.charAt(0) == "A")
                                                                {console.log(alien1.name + ' says: You should not eat the mushrooms')}
                                                            if(meeting2.charAt(0) == "B") 
                                                                {console.log(alien1.name + ' says: Well we are allergic to peanuts!')} }
                        else {let meeting2 = await allMeets.talk2()
                        console.log('You chose ' + meeting2); if (meeting2.charAt(0) == "A")
                                                                {console.log(alien1.name + ' says: Yes are weather is even worse than Manchester!')}
                                                                if(meeting2.charAt(0) == "B") 
                                                                {console.log(alien1.name + ' says: At least we dont wear shell suits like people from Liverpool!')} }
                                                                console.log('You proceed towards the Central Hub of the planet')
                            setTimeout(hub,6000)}
    if (meeting1 == 'FIGHT') {
           console.log('You are going to fight the alien')
           console.log(chosen)
            let round1 = chosen
            round1.fight()
    
    let meeting2= await allMeets.meetJunior2(alien1.name)
    if (meeting2 == 'FIGHT') {
        console.log(`You are going to continue fighting ${alien1.name}?`)
        console.log(chosen)
         console.log('You are distracted by when the aliens radio starts playing' + ' Never gonna give you up by Rick Astley'.blue + ' and the alien hits you'); chosen.health = chosen.health - Math.floor((Math.random()*4) + 1)
         if (chosen.health > alien1.health) 
         {console.log(`${alien1.name} is beat, he gives up and says: spare me and I'll give you tell you something important`)
         let meeting3= await allMeets.meetJunior3(alien.name)
         if (meeting3=='SPARE HIM'){console.log(`${alien1.name} tells you that the Alien Leader is allergic to peanuts.  You smile as you leave him to recover`)}
        else {console.log(`You kill ${alien.name} in cold blood, you will learn nothing from him now, what a waste`)}
        } 
         else {console.log(`You run away fron ${alien1.name} while you still can`)}
}   
    console.log('You proceed towards the Central Hub of the planet')
    setTimeout(hub,6000)
}
}

const hub = async () => {
    console.clear()
    let hubimage = await hubpic()
    console.log('\x1b[36m%s\x1b[0m',hubimage)
    console.log('\x1b[36m%s\x1b[0m','You arrive at the Central Hub of the planet')
    chosen.stats()
    let nextlocation = await location()
    console.log('You chose to go to ' + nextlocation)
    if (nextlocation.charAt(0) == "A") {mainPod()}
    if (nextlocation.charAt(0) == "B") {mainCave()}
    if (nextlocation.charAt(0) == "C") {mainStorage()}
    if (nextlocation.charAt(0) == "D") {mainShip()}




}
const mainPod = async () => {
    console.clear()
    console.log('You enter the pod')
    let pod1 = await pod()
    console.log('You have chosen to ' + pod1.toLowerCase())
    if(pod1.charAt(0) =='A'){
        chosen.badFood()}
        
        setTimeout(hub, 1000)
      if ( pod1.charAt(0) == 'B'){
        console.log('You are smart. Go back to the central hub!')
        hub()
    } else{}

    }

    const mainCave = async () => {
        console.clear();
        let caveimage = await cavepic();
        console.log('\x1b[90m', caveimage);
        console.log('You enter the cave');
    
        let cave1 = await caveoptions.cave();
        console.log('You have chosen ' + cave1);
    
        if (cave1.charAt(0) == 'A') {
            console.log('You encounter The Beast. He begins to chase you.');
            
            if (chosen.speed > 7) {
                console.log('You have managed to escape The Beast, because you were fast enough.');
                
                let chooseItem1 = await caveoptions.chooseItem();
                console.log(`You have chosen this item ${chooseItem1}`);
                
                chosen.inventory = chooseItem1;
                chosen.stats();
                
                setTimeout(hub, 1000);
            } else {
                console.log('You are too slow, you lose ' + 4 + ' health');
                chosen.health -= 4;
                chosen.stats();
                console.log('You have been captured by The Beast')
                
                if (chosen.skill == 'Escape Artist'){
                    console.log('You have used your skills to escape being captured')
                   setTimeout(mainShip, 1000)
                }
                else {console.log('You have lost your inventory item if you had any');chosen.inventory = 'Empty';chosen.stats();
                setTimeout(mainShip, 1000)
            } }  } 
            else if (cave1.charAt(0) == 'B') {
            let alien2 = new allOfThem.CaveAlien ("Mathesar")   
            console.log('You encounter another Alien');
            let rightTunnel1 = await rightTunnel();
            console.log('You have chosen ' + rightTunnel1);
            
            if (rightTunnel1.charAt(0) == 'A') {
                if (chosen.intellect>alien2.interlect){
                    console.log(`${alien2.name}: So you seem like a smart one, I will tell you this: our Alien Leader is allergic to peanuts.`);
                    setTimeout(hub, 5000);
                }
                else {
                    console.log(`${alien2.name}: You do not impress me human.`);
                    console.log(`${alien2.name} walks away laughing, stupid human he mumbles as you head out of the cave and back to the Hub`)
                    setTimeout(hub, 6500);
                }

            }  if (rightTunnel1.charAt(0) == 'B') {
                if(chosen.strength<alien2.strength){
                    console.log(`${alien1.name}: I admire your wish to fight me, if it was not so stupid. You are no match for me. I will give you another chance`)
                    let chance = await caveoptions.secondChamce();
                    if (chance.charAt((0))=='A' ){
                        console.log(`${alien2.name}: You have courage so I will tell you now that our Alien Leader is allergic to peanuts.`);
                        setTimeout(hub, 6000);
                    }
                    else {
                        console.log(`${alien2.name}: You are a coward. I will capture you and take you to your doom`);
                        console.log('You have lost your inventory item');chosen.inventory = 'Empty';chosen.stats();
                        console.log(`You manage to escape ${alien2.name} as you approach the alien ship, but you still have handcuffs on so move slowly`); chosen.speed -=3; chosen.stats();
                setTimeout(mainShip, 6000)
                        
                    }
                } else {console.log(`You fight ${alien2.name}, beating him, but he uses his electrofist to stun you`); chosen.health -=3; chosen.speed -=2
                        console.log(`You manage to make it back to the hub`); setTimeout(hub,6000)}
                    //
                }

            
              //  console.log('cave alien fight');
                // Handle fight logic
            }
        }
    
    



   
const mainStorage = async () => {
    console.log('You enter the storage unit')
    if (entrystoragecount==1) {console.log('There is nothing in here'); const myTimeoutsU= setTimeout(hub,2000)} else {
    let storage1 = await storage()
    console.log('You have chosen to ' + storage1 + '. Lets head back to the Central Hub')
    if(storage1.charAt(0)== 'A'){
        console.log('You have chosen to eat them, tasty!'); chosen.health += 2; console.log('Your health is now' + chosen.health)}
    if(storage1.charAt(0)== 'B'){
        console.log('You have chosen to put them in your inventory'); chosen.inventory = "Peanuts"; console.log('Your inventory now has' + chosen.inventory + 'in it.')}    
    entrystoragecount=1
    setTimeout(hub, 2000)}
}

const shipInt = async () => {
    let leader1 = interior()
    console.log('You have reached the final stage')
    console.log('It \'s now time to face the alien leader. Do you have any items to use? ')
    if (leader1.charAt(0)=='A'){
      
        console.log('reason or fight with him')
     }
     else if (leader1.charAt(0)=='B'){
        console.log('Check your inventory for items'); console.log(chosen.inventory)
        let shipinv = invtest() 
        if (invtest.charAt(0) =='A'){    
            if(chosen.inventory == 'peanuts'){
            console.log('The alien leader starts having an allergic reactionand dies')
    }}
    else if(chosen.inventory == 'Gun'){
        console.log('The Alien leader also has a gun.  Who will draw first?')
        let dicerollcrew = [] 
        let dicerollalien = []
        
        
        dicerollcrew = (Math.floor(Math.random()*6)+1);
        dicerollalien = (Math.floor(Math.random()*6)+1);
        console.log(dicerollalien,dicerollcrew)
          
}
     }}


const mainShip = async () => {
    let alien1= new allOfThem.GuardAlien ('Gamora')
    
    console.log(`You are at the ship entrance and are met with ${alien1.name} the alien guard.`)
    let mainShip1 = await entrance()
    if (mainShip1.charAt(0)=='A'){      
        console.log('You consider using your inventory item'); console.log(chosen.inventory)
        if (chosen.inventory == "Empty") {console.log('Your inventory is empty!  As you look for items the guard thinks you are reaching for a gun so he takes out his gun and shoots you'); chosen.health -=10;
            console.log(`As she reloads you run away back to the hub to reconsider your options`); setTimeout(hub, 1500)}
            else{ let mainShip2 = await inventuse(alien1.name)
            if (mainShip2.charAt(0)=='A'){ 
           if(chosen.inventory == 'Gun'){
              console.log('You shoot the guard, but as she falls she also gets a shot in that grazes your arm and you lose ' + 3 + ' health');
              console.log(`You drop your gun as you attend to your arm, it falls out of reach, you head into the ship`);
              chosen.inventory = "Empty"
              setTimeout(shipInt,5000)}
           if (chosen.inventory == 'Potion') {
              console.log('You drink the potion, it gives you changling powers to disguise as an alien and after a brief chat walk past her into the ship');
              setTimeout(shipInt,6000)} ;
           if (chosen.inventory == 'Peanuts') {
              console.log(`${alien1.name} laughs at you, I'm not the one allergic to peanuts you idiot! She then punches you hard`); chosen.fight()
              console.log(`She is laughing so much you manage to sneak past her into the ship`)
              setTimeout(shipInt, 5000)
           }}
            
           if (mainShip2.charAt(0)=='B'){
              mainShip()
           }
           }   
    
    }

       if (mainShip1.charAt(0)=='B'){
        console.log('You have chosen to talk with her')
        if (chosen.skill==`Knowladge about aliens on planet`){ 
           console.log(`You disucss what life is like on ${randomP()} with ${alien1.name}, using your knowlandge of the planet and she suggests you talk with the leader and lets you on the ship`)
       setTimeout(shipInt,6000)}
       if(chosen.skill == "Changeling"){ 
           console.log('You use your changling powers to disguise as an alien and after a brief chat walk past her into the ship');
           setTimeout(shipInt,6000)}
           else {console.log(`You try and talk with ${alien1.name} but she ignores you, eventually you give up and go back to the Hub`)
            setTimeout(hub,3000)}
           
       if (mainShip1.charAt(0)=='C') {
        console.log('You have chosen to fight with her')
       if (chosen.health > alien1.health && chosen.strength>alien1.strength) 
           console.log(`You beat her and go into the ship`)
       setTimeout(shipInt,6000) } 
       else {console.log(`${alien1.name} attacks you`);
        chosen.fight()
        console.log(`You run back to the Hub to reconsider your options`)
        setTimeout(hub,3000)}}
     
    
                                                                    

     
     }
         


const endDie = async () => {
    console.clear
    let dead = await gameover()
    console.log('\x1b[31m',dead)

    console.error('You are dead, oh dear')

    throw new Error('This is not an error. This is just to abort javascript');


}




console.log('For best experience maximise your terminal screen')
setTimeout(start, 4000)


