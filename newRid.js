import inquirer from "inquirer";


export const riddle = async(solve1) => {
    let {solve} = await inquirer.prompt({
        message: `Mr. and Mrs. Cyborg have six daughters and each daughter has one brother. How many people are in the Cyborg family?`,
        type: 'list',
        choices: ['A: There are nine Cyborgs in the family', 'B: There are twelve Cyborgs in the family', 'C: There are fourteen Cyborgs in the family'],
        name: "solve"
 
    } )
    return solve
}