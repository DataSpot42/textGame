import inquirer from "inquirer";


export const interior = async() => {
    let {leader} = await inquirer.prompt({
        message: 'You have entered the ship and have met with the alien leader. Do you have any items to use or are you going to fight him?',
        type: 'list',
        choices: ['A: Reason or fight with him', 'B: Use inventory item'],
        name: "leader"
 
    } )
    return leader
}
export const invtest = async() => {
    let {inv} = await inquirer.prompt({
        message: `Do you want to use this item?`,
        type: 'list',
        choices: ['A: Yes use this item', 'B: No, lets fight!'],
        name: "leader"
 
    } )
    return inv
}    


//const start = async () => {
//    
//    let leader2 = await entrance()
//    console.log(`You have chosen to  ` + leader2 )
//   
//}
