import inquirer from "inquirer";

export const storageA = async() => {
    let {inventory} = await inquirer.prompt({
        message: 'You have just entered the storage unit and have found a packet of peanuts and some kind of antidote. What would you like to do with them?',
        type: 'list',
        choices: ['Eat the peanuts', 'Replace anything you have in inventory with the peanuts',
                    `Pick-up the antidote and replace anything you may have in your inventory with it`,
                    'Leave the items and exit the unit'],
        name: "inventory" 
    } )
    return inventory
}

export const storageB = async() => {
    let {inventory} = await inquirer.prompt({
        message: 'You have just entered the storage unit and have found a packet of peanuts. What would you like to do with them?',
        type: 'list',
        choices: ['Eat the peanuts', 'Replace anything you have in inventory with the peanuts', 'Leave the item and exit the unit',
                    ],
        name: "inventory" 
    } )
    return inventory
}
export const storageC = async() => {
    let {inventory} = await inquirer.prompt({
        message: 'You have just entered the storage unit and have found an antidote. What would you like to do with it?',
        type: 'list',
        choices: ['Pick-up the antidote and replace anything you have in your inventory with it', 'Leave the item and exit the unit',
                    ],
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
