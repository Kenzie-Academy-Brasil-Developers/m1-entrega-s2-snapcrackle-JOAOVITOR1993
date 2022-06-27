
function snapCrackle(maxValue){
let contagem = ""
for(let i = 1; i <= maxValue; i++){
if(~ i % 2 == 0 && i % 5 == 0){
    contagem = contagem + `SnapCrackle, `
}else if(i % 5 == 0){
        contagem = contagem + `Crackle, `
}else if(i % 2 == 0){
    contagem = contagem + `${i}, `   
}else{
    contagem = contagem + `Snap, ` 
}
}
return `"${contagem}"`
}

console.log(snapCrackle(12))




function snapCracklePrime(maxValue){
    let contagem = ""
    let divisor = 0 

    for(let i = 1; i <= maxValue; i++){
    if(~ i % 2 == 0 && i % 5 == 0){
        contagem = contagem + `SnapCrackle`
        divisor = 0
        for(let j =1; j <= i; j++){
            if(i % j === 0){
                divisor = divisor + 1
            }
        }if(divisor === 2){
            contagem = contagem + `Prime`
        }
    }else if(i % 5 == 0){
            contagem = contagem + `Crackle`
            divisor = 0
        for(let j =1; j <= i; j++){
            if(i % j === 0){
                divisor = divisor + 1
            }
        }if(divisor === 2){
            contagem = contagem + `Prime`
        }
       
    }else if(i % 2 == 0){
       
        divisor = 0
        for(let j =1; j <= i; j++){
            if(i % j === 0){
                divisor = divisor + 1
            }
        }if(divisor === 2){
            contagem = contagem + `Prime`
        }else{
            contagem = contagem + `${i}`
        }   
    }else{
        contagem = contagem + `Snap` 
        divisor = 0
        for(let j =1; j <= i; j++){
            if(i % j === 0){
                divisor = divisor + 1
            }
        }if(divisor === 2){
            contagem = contagem + `Prime`
        }
    }
       if(i < maxValue) contagem = contagem + `, `
    }
    return `"${contagem}"`
    }

console.log(snapCracklePrime(15))



