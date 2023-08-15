import inquirer from "inquirer";

export const getcharacter = async() => {
    let {character} = await inquirer.prompt({
        message: 'Pick your character:',
        type: 'list',
        choices: ['Doctor', 'Security Officer', 'Science Officer', 'Captain', 'Ensign'],
        name: "character"
 
    } )
    return character
}