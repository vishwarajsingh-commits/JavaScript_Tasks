let pr = new Promise(function(res,rej){
  setTimeout(()=>{
    let n = Math.floor(Math.random()*10);
    if(n>5) res("resolved with "+n);
    else rej("rejected with "+n);
  },3000);
});

async function abcd(){
  try{
    let val = await pr;
    console.log(val);
  }
  catch(err){
    console.log(err);
  }
}