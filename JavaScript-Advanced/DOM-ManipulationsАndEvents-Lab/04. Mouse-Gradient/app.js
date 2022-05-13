function attachGradientEvents() {
    let hoverBarElement = document.getElementById('gradient');
    let result = document.getElementById('result');

    hoverBarElement.addEventListener('mousemove',gradientMove);
    hoverBarElement.addEventListener('mouseout',gradientOut);

    function gradientMove(event){
            let power = event.offsetX/(event.target.clientWidth-1);
            power = Math.trunc(power * 100);
            result.textContent = power + '%';
    }

    function gradientOut(event){
        result.textContent = "";
    }
//         hoverBarElement.addEventListener('mousemove',(e)=>{
//             let percent = Math.floor(e.offsetX/e.target.offsetWidth*100);
//             result.textContent=`${percent} %`;           
//         });  
}