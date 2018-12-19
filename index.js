//Task 1, working with data from server

    fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party')
    .then(response => response.json())
    .then(result => {
        const meInVip = result.filter(person => person.name.includes("Evaldas") && person.vip)
        console.log(meInVip)
    })
    .catch(err => console.log(err))
/////////////////////////////////////

const task1 = async () =>  { 
    try{
        const response = await fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party');
        const json = await response.json();
        console.log(json.filter(person => person.name.includes("Evaldas") && person.vip));
    }catch(err){
        alert("ACHTUNG!");
   }
};

//Task 2
fetch('https://boiling-reaches-93648.herokuapp.com/week-3/wedding')
    .then(response => response.json())
    .then(result => {
        const plusOne = result.filter(come => come.attending).every(person => person.plusOne)
        if(plusOne === false){
            console.log("Not everyone is plus one")
        }
        else{
            console.log("All with plus one") 
        }
    })
    .catch(err => console.log(err))

//////////////////////////////////

const task2 = async () => {
    const response = await fetch('https://boiling-reaches-93648.herokuapp.com/week-3/wedding');
    const json = await response.json();
    const plusOne = json.filter(come => come.attending).every(person => person.plusOne)
    if(plusOne === false){
        console.log("Not everyone is plus one")
    }
    else{
        console.log("All with plus one") 
    }
}

//Task 3

fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party')
    .then(response => response.json())
    .then(result => {
        const attend = result.some(person => person.attending)
        if(attend === false){
            console.log("None comes to your party")
        }
        else{
            console.log("You have few friends") 
        }
        const whoWillCome = result.filter(trueFriend => trueFriend.attending)
        console.log(whoWillCome)
    })
    .catch(err => console.log(err))

///////////////////////////////////

const task3 = async () => {
    const response = await fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party');
    const json = await response.json();
    const attend = json.some(person => person.attending)
    if(attend === false){
        console.log("None comes to your party")
    }
    else{
        console.log("You have few friends") 
    }
    const whoWillCome = json.filter(trueFriend => trueFriend.attending)
    console.log(whoWillCome)
}