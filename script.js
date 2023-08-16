
import {getcharacter} from "./game.js"
import { Character} from "./classes.js"
import { meetJunior } from "./meetJ.js"
import { talk1 } from "./meetJ.js"
import { talk2 } from "./meetJ.js"
import { location } from "./location.js"
let chosen = ""





const start = async () => {
    console.log('choose wisely')
    let character = await getcharacter()
    console.log(`You have chosen the ` + character + '.  His stats are:')
    if (character == "Doctor") { chosen = new Character ('Doctor',5,10,4,10, 'Antidote')}
    if (character == 'Security Officer') { chosen = new Character ('Security Officer', 8, 3, 10, 10,'Gun')}
    if (character == "Science Officer") { chosen = new Character  ('Science Officer',4,9,5,8, 'Scanner')}  
    if (character == "Captain") { chosen = new Character ('Captain', 8, 8, 8, 8, 'Artifact')}   
    if (character == "Ensign") { chosen = new Character ('Ensign', 4,4, 4, 6, 'Disguise')}      
    chosen.stats()
    meet()
      
    
}

const meet = async () => {
    console.log('You beam down to the planet')
    let alien1 = new Character ('Junior',5,2,3,8)
    
    let meeting1 = await meetJunior()
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
console.log('You proceed towards the Central Hub of the planet')
hub()
}

const hub = async () => {
    console.log('You arrive at the Central Hub of the planet')
    let nextlocation = await location()
    console.log('You chose to go to ' + nextlocation)
    if (nextlocation.charAt(0) == "A") {pod()}
    if (nextlocation.charAt(0) == "B") {cave()}
    if (nextlocation.charAt(0) == "C") {storage()}
    if (nextlocation.charAt(0) == "D") {ship()}




}
const pod = async () => {
    console.log('You enter the pod')
}







start()
