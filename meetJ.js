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

export const talk1 = async ()=>{
    let {convo}=  await inquirer.prompt({
        message: 'What do you say:',
        type: 'list',
        choices: ['A: Wow am I hungry, is there anything to eat over here?', 'B: Do you have any weaknesses?' ],
        name: "convo"
 
    } )
    return convo
}

export const talk2 = async ()=>{
    let {convo}=  await inquirer.prompt({
        message: 'What do you say:',
        type: 'list',
        choices: ['A: The weather looks gloomy here', 'B: Aliens have a drab sense of style' ],
        name: "convo"
 
    } )
    return convo
}


//const start = async () => {
//    console.log('choose wisely')
//    let J = await meetJunior()
//    console.log(`You have chosen to ` + J.toLowerCase() + ' with JUNIOR')
//     if (J==='TALK'/*&& character intellect>alien intellect*/){
//      await talk1 ()
//      console.log('JUNIOR: Do not eat the food here it is poisonous.')
//     }
//     else if (J == 'talk'/*&& character intellect<alien intellect*/){
//      await talk2()
//      console.log('JUNIOR: You humans ')


//     }
//     else if (J == 'fight'/*&& character strength>alien strength*/){
//  
//     }
//      else (J == 'fight' /* && character strength < alien strength*/ )     
    
//  }

//  start()
