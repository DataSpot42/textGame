
import {getcharacter} from "./game.js"
import {alien} from "./alienimage.js"
import {hubpic} from "./alienhubimage.js"
import {cavepic} from "./caveimage.js"
import  * as allofthem from "./classes.js"
import { meetJunior } from "./meetJ.js"
import { talk1 } from "./meetJ.js"
import { talk2 } from "./meetJ.js"
import { location } from "./location.js"
import {pod} from "./pod.js"
import {storage} from "./storage.js"
import {cave} from "./cave.js"
import {rightTunnel} from "./cave.js"
let chosen = ""





const start = async () => {
    console.clear()
    console.log('choose wisely')
    let character = await getcharacter()
    console.log(`You have chosen the ` + character + '.  His stats are:')
    if (character == "Doctor") { chosen = new allofthem.Doctor ('Fred')}
    if (character == 'Security Officer') { chosen = new Character ('Security Officer', 8, 3, 10, 10,'Gun')}
    if (character == "Science Officer") { chosen = new Character  ('Science Officer',4,9,5,8, 'Scanner')}  
    if (character == "Captain") { chosen = new Character ('Captain', 8, 8, 8, 8, 'Artifact')}   
    if (character == "Ensign") { chosen = new Character ('Ensign', 4,4, 4, 6, 'Disguise')}      
    chosen.stats()
    
    const myTimeout = setTimeout(alienimage, 1000);
    
      
    
}

const alienimage = async () =>{
    console.clear()
    let alienimage1 = await alien();
    console.log('\x1b[32m',alienimage1)
    meet()

}

const meet = async () => {
    
    console.log('You beam down to the planet')
    let alien1 = new allofthem.Junior ("SlartyBartFast")
    
    let meeting1 = await meetJunior(alien1.name)
    alien1.stats()
    
    console.log('You have chosen to ' + meeting1)
    if (meeting1 == 'TALK') {
        if (chosen.intellect > alien1.intellect) {
                        let meeting2 = await talk1()
                        console.log('You chose ' + meeting2);if (meeting2.charAt(0) == "A")
                                                                {console.log(alien1.name + ' says: You should not eat the mushrooms')}
                                                            if(meeting2.charAt(0) == "B") 
                                                                {console.log(alien1.name + ' says: Well we are allergic to peanuts!')} }
                        else {let meeting2 = await talk2()
                        console.log('You chose ' + meeting2); if (meeting2.charAt(0) == "A")
                                                                {console.log(alien1.name + ' says: Yes are weather is even worse than Manchester!')}
                                                                if(meeting2.charAt(0) == "B") 
                                                                {console.log(alien1.name + ' says: At least we dont wear shell suits like people from Liverpool!')} }}
    if (meeting1 == 'FIGHT') {
           console.log('You are going to fight the alien')
           console.log(chosen)
            let round1 = new actions(chosen)
            round1.fight()
    }



                                                                console.log('You proceed towards the Central Hub of the planet')
hub()
}

const hub = async () => {
    console.clear()
    let hubimage = await hubpic()
    console.log('\x1b[36m%s\x1b[0m',hubimage)
    console.log('\x1b[36m%s\x1b[0m','You arrive at the Central Hub of the planet')
    let nextlocation = await location()
    console.log('You chose to go to ' + nextlocation)
    if (nextlocation.charAt(0) == "A") {mainPod()}
    if (nextlocation.charAt(0) == "B") {mainCave()}
    if (nextlocation.charAt(0) == "C") {mainStorage()}
    if (nextlocation.charAt(0) == "D") {ship()}




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
    console.clear()
    let caveimage = await cavepic()
    console.log('\x1b[90m',caveimage)
    console.log('You enter the cave') 
    let cave1 = await cave()
    let rightTunnel1 = await rightTunnel()
    console.log('You have chosen  '+ cave1)
   if(cave1.charAt(0)== 'A'){
    console.log('You encounter The Beast. He begins to chase you.')
    if (chosen.speed>7){
        console.log ('You have managed to escape The Beast, because you were fast enough.')
    }
     else {console.log('You are too slow, you lose '+ 4+ ' health'); chosen.health-=4;chosen.stats() }
   }
   else (cave1.charAt(0)== 'B')
    console.log('You encounter The Alien.')
     console.log('You have chosen  '+ rightTunnel1)
     if (rightTunnel.charAt(0)=='A'){
        
     }
   
   }
   
   
   
    


    
    


const mainStorage = async () => {
    console.log('You enter the storage unit')
    let storage1 = await storage()
    console.log('You have chosen to ' + storage1 + '. Lets head back to the Central Hub')
    
    hub()
}





start()
