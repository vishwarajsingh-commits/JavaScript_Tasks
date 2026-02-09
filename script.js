 //example-1

function delay(time,cb){
  setTimeout(function (){
    cb();
  },time);
}

delay(3000,function (){
  console.log("Callback executed");
});

//example-2

function getUser(username,cb){
  console.log("getting user details...")
  setTimeout(()=>{
    cb({id:1,username:"vishwa"});
  },4000);
}

function getUserPost(id,cb){
  console.log("getting user post...")
  setTimeout(()=>{
    cb(["p1","hello","bye"]);
  },6000);
}

getUser("vishwa",function (data){  
  getUserPost(data.id,function (allpost){
    console.log(data.username,allpost);
  });
}); 

//Example-3


function loginUser(username,cb){
  console.log("getting user details...");
  setTimeout(() => {
    cb({id:2004,username:"viswha"});
  }, 7000);
}

function fetchPermissions(id,cb){
  console.log("fetching permissions...");
  setTimeout(() => {
    cb(["read","write"]);
  }, 9000);
}

function loadDashboard(permissions,cb){
  console.log("loading dashboard...");
  setTimeout(() => {
    cb();
  }, 9000);
}

loginUser("vishwa",function (user){
  fetchPermissions(user.id,function (permissions){
    loadDashboard(permissions,function (){
      console.log("dashboard loaded✅")
    });
  });
});

