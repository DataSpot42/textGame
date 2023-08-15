import inquirer from "inquirer";

export const getName =async () => {
    let {userName} = await inquirer.prompt({
        name: 'userName',
        type: 'input',
        message: 'What is your name?'
    })
    return userName
}

export const selectType = async () => {
    let { choice } = await inquirer.prompt({
        name: 'choice',
        type: 'list',
        message: 'choose your option',
        choices: ['red', 'green', 'blue']
    })
    return choice

}