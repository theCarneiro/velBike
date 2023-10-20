const velocimetro = document.querySelector("#fundoVelocimetro");
const velocidade = document.querySelector("#velocidade")

let lat = document.querySelector("#lat");
let lon = document.querySelector("#lon");
let topSpeed = document.querySelector("#topSpeed");

let watchId = null;
const option= {enableHighAccuracy:true}

velocimetro.addEventListener("click",()=>{
    //cria o click no mostrador pra dar start/stop
    if (!watchId){
        watchId = navigator.geolocation.watchPosition(updatePosition,handleError,option);
    }else{
        navigator.geolocation.clearWatch(watchId);
        watchId=null;
        velocidade.textContent="--";
        topSpeed.textContent="--";
    }
})

function handleError(error){
    console.log(error.message);//caso dê erro, exibe no console 
}

function updatePosition(position){
    console.log(position.coords);//exibe as coordenadas no console
    if(position.coords.speed<0){//se a velocidade atual for<0 faz nada
        return;
    }else{
        //atualiza a velocidade atual
        velocidade.textContent=(position.coords.speed*3.6).toFixed(1);
        
        //atualiza a velocidade máxima
        //if((position.coords.speed*3.6).toFixed(1) > topSpeed.textContent){
        //    topSpeed.textContent=(position.coords.speed*3.6).toFixed(1);
        //}else{return;}
    }
}

// funcionando start/stop
// funcionando velAtual
// funcionando velMáxima, só tirar do comentário

// verificar ajuste da velMáxima para o formato 00