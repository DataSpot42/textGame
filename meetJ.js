import inquirer from "inquirer";


export const meetJunior = async() => {
    let {meetJ} = await inquirer.prompt({
        message: 'Oh no you have come across your first alien, JUNIOR!!! You must make the decision to FIGHT or TALK.',
        type: 'list',
        choices: ['TALK','FIGHT'],
        name: "meetJ"
 
    } )
    return meetJ
}

//console.log(meetJunior)
const start = async () => {
    console.log('choose wisely')
    let J = await meetJunior()
    console.log(`You have chosen to ` + J.toLowerCase() + ' with JUNIOR')
    //if (character == "Doctor") { let chosen =  ['Doctor',5,10,4,10, 'Antidote']}
    
    
   // getCharStats()
    
    
}

start()
