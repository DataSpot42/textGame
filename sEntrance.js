import inquirer from "inquirer";


export const entrance = async() => {
    let {guard} = await inquirer.prompt({
        message: 'You have arrived at the ship and have met with the guard infront of the entrance. How will you react?',
        type: 'list',
        choices: ['A: Fight', 'B: Drink the potion and disguise as an alien'],
        name: "guard"
 
    } )
    return guard
}
//const start = async () => {
    
//    let guard2 = await entrance()
//    console.log(`You have chosen to  ` + guard2 )
   
//}
