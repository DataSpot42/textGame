import inquirer from "inquirer";


export const pod = async() => {
    let {food} = await inquirer.prompt({
        message: 'You have just found some tasty looking mushrooms in the pod. Do you eat them?',
        type: 'list',
        choices: ['A: EAT', 'B: NOT EAT'],
        name: "food"
 
    } )
    return food
}

//const start = async () => {
    
  //  let eat = await pod()
    // console.log(`You have chosen to ` + eat.toLowerCase() + ' the mushrooms');
   /* let decision = await eat()
   if( pod == 'EAT'){
    console.log('The food was poisonous. You lose .. health')
   }
   else if (pod == 'NOT EAT'){
    console.log('You are smart. Go back to the central hub.')
   } */
// }


