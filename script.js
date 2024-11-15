function gettime(){
   var data = new Date();
   var hr = data.getHours();
   var min = data.getMinutes();
   var sec = data.getSeconds();
   var session = "AM"
   if(hr => 12){
    hr = hr - 12;// //hr = hr - 12//
    session = "PM";
   }

//ternary opretore ? true : false
hr = hr >= 10 ? hr : "0" + hr;
min = min >= 10 ? min : "0" + min;
sec = sec >= 10 ? sec : "0" + sec;

// string concatination
const time = hr + ":" + min + ":" + sec + " " + session 

//string litreal

const time2 = `${hr}:${min}:${sec} ${session}`

   console.log(time2)
   document.getElementById("clock").innerText = time2;
}
setInterval(()=>{
    gettime()
},1000)
