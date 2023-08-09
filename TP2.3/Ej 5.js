Math.ceil

function suma_primos(num){
    let acumulador=0;
    for (let i=1;i <= num;i++){
        let cant_divisor=0
        for (let j=1; j<=i;j++ ){
            if(i%j==0){
                cant_divisor+=1
            }   
        }
        if (cant_divisor===2){
            acumulador+=i
        }
    }
    return acumulador;
}

console.log(suma_primos(100))
