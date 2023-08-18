
import {getcharacter} from "./game.js"
import {alien, gameover} from "./alienimage.js"
import {hubpic} from "./alienhubimage.js"
import {cavepic} from "./caveimage.js"
import  * as allOfThem from "./classes.js"
import * as allMeets from "./meetJ.js"

import { location } from "./location.js"
import {pod} from "./pod.js"
import {storage} from "./storage.js"
import * as caveOptions from "./cave.js"
import {rightTunnel} from "./cave.js"
import {entrance, inventuse} from "./sEntrance.js"
import {interior, invtest, interior2, tryagain} from "./sInterior.js"
import randomItems from "planet-names";
import uniqueRandomArray from 'unique-random-array';
import {riddle} from "./newRid.js"

const randomP = uniqueRandomArray(randomItems.all);



let chosen = "";
let entrystoragecount=0;
let gunheat = 0;
var colors = import('colors');
let fall = 0;






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
    
    console.log(`You beam down to the planet`.trap)
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
                                                                {console.log(alien1.name + ' says: Well, the leader is allergic to peanuts!')} }
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
            round1.fight(alien1.name)
    
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
    console.log('You proceed towards the Central Hub of the planet so you do')
    setTimeout(hub,6000)
}

}

const hub = async () => {
    
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
        
        let caveimage = await cavepic();
        console.log('\x1b[90m', caveimage);
        console.log('You enter the cave');
    
        let cave1 = await caveOptions.cave();
        console.log('You have chosen ' + cave1);
    
        if (cave1.charAt(0) == 'A') {
            console.log('You encounter The Beast. He begins to chase you.');
            
            if (chosen.speed > 7) {
                console.log('You have managed to escape The Beast, because you were fast enough.');
                
                let chooseItem1 = await caveOptions.chooseItem();
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
                    console.log('You have used your skills to escape being captured, you head back the the hub')
                   setTimeout(mainShip, 1000)
                }
                else {console.log('You have lost your inventory item if you had any');chosen.inventory = 'Empty';chosen.stats();
                setTimeout(mainShip, 1000)
            } }  } 
            else if (cave1.charAt(0) == 'B') {
            let alien1 = new allOfThem.CaveAlien ("Mathesar")   
            console.log(`You encounter another Alien, he is called ${alien1.name}`);
            let rightTunnel1 = await rightTunnel();
            console.log('You have chosen ' + rightTunnel1);
            
            if (rightTunnel1.charAt(0) == 'A') {
                if (chosen.intellect>alien1.intellect){
                    console.log(`${alien1.name}: So you seem like a smart one, I will tell you this: our Alien Leader is allergic to peanuts.`);
                    console.log(`${alien1.name} let/'s you past and you will back the the hub`)
                    setTimeout(hub, 5000);
                }
                else {
                    console.log(`${alien1.name}: You do not impress me human.`);
                    console.log(`${alien1.name} walks away laughing, stupid human he mumbles....`)
                    console.log(`As you leave the cave you trip on a rock and land heavily on the hard rock surface (loose 2 health)`)
                    chosen.health -=2
                    console.log(`As you look back you see ${alien1.name} laughting hysterically, he's taken a video of you falling`.red)
                    console.log(`Oh that's brilliant, I'm sending this to the leader!`.green)
                    fall = 1;
                    setTimeout(hub, 8500);
                }

            }  if (rightTunnel1.charAt(0) == 'B') {
                if(chosen.strength<alien1.strength){
                    console.log(`${alien1.name}: I admire your wish to fight me, if it was not so stupid. You are no match for me. I will give you another chance`)
                    let chance = await caveOptions.secondChance();
                    if (chance.charAt((0))=='A' ){
                        console.log(`${alien1.name}: You have courage so I will tell you now that our Alien Leader is allergic to peanuts.`);
                        setTimeout(hub, 6000);
                    }
                    else {
                        console.log(`${alien1.name}: You are a coward. I will capture you and take you to your doom`);
                        console.log('You have lost your inventory item');chosen.inventory = 'Empty';chosen.stats();
                        console.log(`You manage to escape ${alien1.name} as you approach the alien ship, but you still have handcuffs on so move slowly`); chosen.speed -=3; chosen.stats();
                setTimeout(mainShip, 6000)
                        
                    }
                } else {console.log(`You fight ${alien1.name}, beating him, but he uses his electrofist to stun you`); chosen.health -=3; chosen.speed -=2
                        console.log(`You manage to make it back to the hub`); setTimeout(hub,4000)}
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
        console.log('You have chosen to put them in your inventory'); chosen.inventory = "Peanuts"; console.log('Your inventory now has ' + chosen.inventory + 'in it.')}    
    entrystoragecount=1
    setTimeout(hub, 2000)}
}




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
        if (fall = 1) {console.log(`${alien1.name} smiles as she looks up from her Pad.  It's the guy from the video! Got to be biggest idiot in the galaxy!`)}
        if (chosen.skill==`Knowladge about aliens`){ 
           console.log(`You discuss what life is like on ${randomP()} with ${alien1.name}, using your knowledge of the planet and she suggests you talk with the leader and lets you on the ship`)
       setTimeout(shipInt,1000)} else {}
       if(chosen.skill == "Changeling"){ 
           console.log('You use your changling powers to disguise as an alien and after a brief chat walk past her into the ship');
           setTimeout(shipInt,1000)}
        if (chosen.skill != "Knowladge about aliens" && chosen.skill != "Changeling") {console.log(`You try and talk with ${alien1.name} but she ignores you, eventually you give up and go back to the Hub`)
            setTimeout(hub,1500)}
       }    
       if (mainShip1.charAt(0)=='C') {
        console.log('You have chosen to fight with her')
       if (chosen.strength > alien1.strength && chosen.speed>alien1.speed) 
          { console.log(`Your strength and speed are better than ${alien1.name}, she can see this and steps asside, you go into the ship`)
       setTimeout(shipInt,1000) } 
       if (chosen.health <= alien1.health || chosen.strength <= alien1.health) {console.log(`${alien1.name} attacks you`);
        chosen.fight()
        console.log(`You run back to the Hub to reconsider your options`)
        setTimeout(hub,2000)}}
     
    
                                                                    

     
     }

     const shipInt = async () => {
       

        let alien1= new allOfThem.LeaderAlien ('Leon')
        console.log('You have reached the final stage')
        if (fall = 1) {console.log(`${alien1.name} starts laughing at you as you enter.  It's the guy from the video! Amazing!`)}
        let leader1 = await interior(alien1.name) 
        
        if (leader1.charAt(0)=='A'){
            finalBattle(alien1)

         }
         else if (leader1.charAt(0)=='B'){
            console.log('Check your inventory for items'); console.log(chosen.inventory)
            let shipinv = await invtest() 
            if (shipinv.charAt(0) =='A'){    
                
                if(chosen.inventory == 'Peanuts'){
                console.log(`${alien1.name} starts having an allergic reaction and falls the the ground`)
                console.log(`${alien1.name} says, put those away!  Please!`); alien1.health -=4
                console.log(`He get's this eppi pen out and takes a shot before getting back to his feet`)
                setTimeout(finalBattle(alien1), 5000)}
            if(chosen.inventory == 'Gun'){
            console.log('The Alien leader also has a gun.  Who will draw first?')
            let dicerollcrew = (Math.floor(Math.random()*6)+1);
            let dicerollalien = (Math.floor(Math.random()*6)+1);
            console.log(dicerollalien,dicerollcrew)
            if (alien1.speed + dicerollalien > chosen.speed + dicerollcrew) {(console.log(`${alien1.name} shoots first!`)); setInterval(endDie,2000)}
            if (alien1.speed + dicerollalien == chosen.speed + dicerollcrew) {(console.log(`${alien1.name} and ${chosen.name} shoot at the same time!`)); setInterval(endDie,2000)}
            if (alien1.speed + dicerollalien < chosen.speed + dicerollcrew) {(console.log(`You shoot ${alien1.name} and manage to get signal to your ship to beam you up.  The crew and the fedoration will not be pleased with you`)); setInterval(theEnd,2000)}
            }}}
            if (leader1.charAt(0)=='C'){
            reasoning(alien1)}
        }     

const finalBattle = async (alien1) => {
            console.log('fight!');
            chosen.finalFight(alien1.name)
            alien1.fight(alien1.name,chosen.name,3)
            chosen.stats()
            if (alien1.health <= 0 ) {
                console.log(`As ${alien1.name} falls the the floor and draws his last breath, he calls out /"Computer, self discruct....." `,red)
                setTimeout(console.log('5'), 1000)
                setTimeout(console.log('4'), 2000)
                setTimeout(console.log('3'), 3000)
                setTimeout(console.log('2'), 4000)
                setTimeout(console.log('1'), 5000)
                setTimeout(endDie, 6000)
            }
            let letleader2 = await interior2(alien1.name, chosen.name)
            if (letleader2.charAt(0)=='A') { 
                chosen.finalFight(alien1.name)
                alien1.fight(chosen.name,6)
                finalBattle(alien1)
            }
            if (letleader2.charAt(0)=='B') {
                reasoning(alien1)

            }
        }            
  
const reasoning = async (alien1) => {        

        console.log(`You have chosen to reason with ${alien1.name}`);
        console.log(`${alien1.name}: Solve this riddle and I may help you`) 
        let solve1 = await riddle()
        if (solve1.charAt(0)=='A'){
            console.log('Wow you got it correct, thats sick!')
            console.log|(`${alien1.name} helps you get back to your ship`)
            setTimeout(theEnd, 4000)
        }
        else if (solve1.charAt(0)=='B'|| solve1.charAt(0)=='C' ){
            console.log('All right folks, this is the end of the line for you.');
            setTimeout(endDie,2000)
        }
}

const endDie = async () => {
    
    let dead = await gameover()
    console.log('\x1b[31m',dead)

    console.error('You are dead, oh dear')
    
    console.log(`Press CTRL+C to quit back to prompt, or game will restart`.bgGreen)
}

const theEnd = async () => {
    
    console.log('You survived.  Well Done')

    
    console.log(`Press CTRL+C to quit back to prompt, or game may restart`.bgGreen)
}


    







console.log('For best experience maximise your terminal screen')
setTimeout(start, 4000)


