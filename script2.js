import {getName, selectType } from ".inq.js"



const start = async () => {
    console.log('Welcome, who are you?');
    let userName = await getName();
    console.log(userName);
}
const selector = async () => {
    console.log('choose wisely')
    let choice = await selectType()
    console.log(choice)
    num()
}

start()