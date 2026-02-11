/* 
//Scenario - 1

async function getWeather(city,){
    try{
        let apikey = `e99337cb27a296f558920d1523f5e332e709`;    
       let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
       
       if(!raw.ok){
        throw new Error("city not found");
       }
       let data = await raw.json();
       if(data.main.temp<-15){
        console.warn(`cold - ${data.main.temp}°C`)
       }
       else if(data.main.temp>35){
        console.warn(`hot - ${data.main.temp}°C`)
       }
       else{
        console.log(`normal - ${data.main.temp}°C`)
       }
    }
    catch(err){
        console.log(err.message)
    }
}

getWeather("chile");
 

//Scenario - 2


const emails = [
  "john@example.com",
  "sarah@example.com",
  "alex@example.com",
  "vishwaraj@example.com"
];

function sendEmail(email){
    return new Promise((res,rej)=>{
        let time = Math.floor(Math.random()*5);

        setTimeout(() => {
            let prob = Math.floor(Math.random()*10);
            if(prob<=5) res("Email successfully sent");
            else rej("Email not sent");
        }, time*1000);
    });
}

async function sendEmails(emails){
    let all = emails.map(function (email){
        return sendEmail(email)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    });
    let ans =await Promise.all(all);
    console.log(ans);
}

sendEmails(emails);
*/
