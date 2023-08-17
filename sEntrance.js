import inquirer from "inquirer";


export const entrance = async() => {
    let {guard} = await inquirer.prompt({
        message: 'You have arrived at the ship and have met with the guard infront of the entrance. How will you react?',
        type: 'list',
        choices: ['A: Check your inventory', 'B: Talk', 'C: Fight'],
        name: "guard"
 
    } )
    return guard

}

//const start = async () => {
    
//    let guard2 = await entrance()
//    console.log(`You have chosen to  ` + guard2 )
   
// The options need to be the normal talk,  you then need to check the inventory, if chosen has either a poition
// or changing device they can choose to use them to get past the guard.  if they have a gun they can chose to shoot him
// else they can choose to fight and will loose health. 
