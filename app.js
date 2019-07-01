
function setDate(){
    const now=new Date;
    const seconds=now.getSeconds();
    const secondsDegree=((seconds/60)*360) +90;
    document.querySelector('.second-hand').style.transform=`rotate(${secondsDegree}deg)`;

    const minutes=now.getMinutes();
    const minutesDegree=((minutes/60)*360)+90;
    document.querySelector('.min-hand').style.transform=`rotate(${minutesDegree}deg)`;

    const hour=now.getHours();
    const hourdegree=((hour/12)*360)+90;
    document.querySelector('.hour-hand').style.transform=`rotate(${hourdegree}deg)`;
    console.log(seconds);
    
}

setInterval(setDate,1000);