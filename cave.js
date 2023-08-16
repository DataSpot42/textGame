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

//const start = async () => {
    
  //  let riLe = await cave()
    //if
    //console.log(`You have chosen to go to ` + chosen.toLowerCase())
   
//}


