import inquirer from "inquirer";


export const location = async() => {
    let {path} = await inquirer.prompt({
        message: 'There are 4 paths you can take, which one will you choose?',
        type: 'list',
        choices: ['A: THE POD','B: THE CAVE', 'C: THE STORAGE UNIT', 'D: THE SHIP'],
        name: "path"
 
    } )
    return path
}

//const start = async () => {
//    
//    let chosen = await location()
//    console.log(`You have chosen to go to ` + chosen.toLowerCase())
//   
//}
//start()