
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






