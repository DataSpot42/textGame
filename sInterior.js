import inquirer from "inquirer";


export const interior = async(leader1) => {
    let {leader} = await inquirer.prompt({
        message: `You have entered the ship and have met with ${leader1}. Do you have any items to use or are you going to fight him?`,
        type: 'list',
        choices: ['A: Fight', 'B: Use inventory item', 'C:Reason with him'],
        name: "leader"
 
    } )
    return leader
}
export const invtest = async() => {
    let {inv} = await inquirer.prompt({
        message: `Do you want to use this item?`,
        type: 'list',
        choices: ['A: Yes use this item', 'B: No, lets fight!'],
        name: "inv"
 
    } )
    return inv
}   

export const interior2 = async(leader2,crew2) => {
    let {leader3} = await inquirer.prompt({
        message: `Should ${crew2} continue fighting ${leader2}. Or do you want to try and reason with him?`,
        type: 'list',
        choices: ['A: Fight', 'B: Reason with him'],
        name: "leader3"
 
    } )
    return leader3
}
export const tryagain = async() => {
    let {again} = await inquirer.prompt({
        message: `Would you like to play again or quit?`,
        type: 'list',
        choices: ['A: Play again', 'B: Quit'],
        name: "again"
 
    } )
    return again
}    




//const start = async () => {
//    
//    let leader2 = await entrance()
//    console.log(`You have chosen to  ` + leader2 )
//   
//}
