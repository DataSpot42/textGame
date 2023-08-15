
import {getcharacter} from "./game.js"
import { getCharStats } from "./classes.js"






const start = async () => {
    console.log('choose wisely')
    let character = await getcharacter()
    console.log(`You have chosen the ` + character)
    
    
    export async function giveCharacter() {
        let given = character


        return given
    }
    getCharStats()
    
    
}

start()