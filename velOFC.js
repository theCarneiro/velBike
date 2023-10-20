const velocimetro = document.querySelector("#fundoVelocimetro");
const velocidade = document.querySelector("#velocidade")

let lat = document.querySelector("#lat");
let lon = document.querySelector("#lon");

let topSpeed = document.querySelector("#topSpeed"); 
let varSpeed = null;

let watchId = null;
const option= {enableHighAccuracy:true}

velocimetro.addEventListener("click",()=>{
    if (!watchId){
        watchId = navigator.geolocation.watchPosition(updatePosition,handleError,option);
    }else{
        navigator.geolocation.clearWatch(watchId);
        watchId=null;
        velocidade.textContent="--";
        topSpeed.textContent="--"
    }
})

function handleError(error){
    console.log(error.message);
}

function updatePosition(position){
    console.log(position.coords)
    if(position.coords.speed<0){
        return;
    }else{
        velocidade.textContent=(position.coords.speed*3.6).toFixed(1);
        lat.textContent=position.coords.latitude;
        lon.textContent=position.coords.longitude;
        
        if (topSpeed.textContent<(position.coords.speed*3.6).toFixed(1)){
            topSpeed.textContent=(position.coords.speed*3.6).toFixed(1)
        }
        
        if(parseFloat(velocidade.textContent)>parseFloat(topSpeed)){
            topSpeed.textContent=velocidade.textContent;
        }else{
            return;
        }
    }
}