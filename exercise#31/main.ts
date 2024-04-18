let userNames=["mahad","ali","zeeshan","admin","usman"];

userNames=[]

if(userNames.length===0){console.log("We need to find some users!");}

else{
userNames.forEach(oneUser=>{if(oneUser==="admin")
    {console.log(`Hello ${oneUser}, admin, would you like to see a status report?`);}
else{console.log(`Hello ${oneUser}, thank you for logging in again.`);}})}