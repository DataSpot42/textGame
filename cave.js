import inquirer from "inquirer";


export const cave = async() => {
    let {direction} = await inquirer.prompt({
        message: 'You have just entered the cave. Which direction would you like to go?',
        type: 'list',
        choices: ['A: LEFT TUNNEL', 'B: RIGHT TUNNEL'],
        name: "direction"
 
    } )
    return direction
}

export const rightTunnel  = async() => {
    let {option} = await inquirer.prompt({
        message: 'What do you do?',
        type: 'list',
        choices: ['A: TALK', 'B: FIGHT'],
        name: "option"
 
    } )
    return option
}

export const chooseItem  = async() => {
    let {option} = await inquirer.prompt({
        message: 'You find two different items. Which one do you choose?',
        type: 'list',
        choices: ['Gun', 'Potion'],
        name: "option"
 
    } )
    return option
}

export const secondChamce  = async() => {
    let {option} = await inquirer.prompt({
        message: 'You are given another chance. Do you still wish to fight?',
        type: 'list',
        choices: ['A: FIGHT', 'B:RUN'],
        name: "option"
 
    } )
    return option
}




//const start = async () => {
    
  //  let riLe = await cave()
    //if
    //console.log(`You have chosen to go to ` + chosen.toLowerCase())
   
//}


