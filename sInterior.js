import inquirer from "inquirer";


export const interior = async() => {
    let {leader} = await inquirer.prompt({
        message: 'You have entered the ship and have met with the alien leader. Do you have any items to use?',
        type: 'list',
        choices: ['A: Reason or fight with him', 'B: Choose gun', 'C: Use peanuts'],
        name: "leader"
 
    } )
    return leader
}
//const start = async () => {
//    
//    let leader2 = await entrance()
//    console.log(`You have chosen to  ` + leader2 )
//   
//}
