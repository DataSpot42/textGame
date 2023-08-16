import inquirer from "inquirer";


export const storage = async() => {
    let {inventory} = await inquirer.prompt({
        message: 'You have just entered the storage unit and have found a packet of peanuts. What would you like to do with them?',
        type: 'list',
        choices: ['A: Eat them', 'B: Add to inventory'],
        name: "inventory"
 
    } )
    return inventory
}
//const start = async () => {
//    
//    let peanuts = await storage()
//    console.log(`You have chosen to  ` + peanuts )
//   console.log('Ok, now lets head back to the central hub')
//}
