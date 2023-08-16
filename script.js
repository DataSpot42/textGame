
import {getcharacter} from "./game.js"
import { chosenstats } from "./classes.js"






const start = async () => {
    console.log('choose wisely')
    let character = await getcharacter()
    console.log(`You have chosen the ` + character)
    if (character == "Doctor") { let chosen =  ['Doctor',5,10,4,10, 'Antidote']}
    let crew = await chosenstats(chosen)
    
    console.log(crew)
    
    
}

start()