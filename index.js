function sumofArray(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum
}

function multiplyArray(array){
    let mult=1;
    for(let i=0;i<array.length;i++){
        mult=mult*array[i];
    }
    return mult
}

function subofArray(array){
    let sub=array[0];
    for(let i=1;i<array.length;i++){
        sub=sub-array[i];
    }
    return sub
}


function parse(data){
    for(i=0;i<data.length;i++){
        if (data[i].Operator=="+"){
            let Sum=0;
            (data[i].Course).map((val)=>{
                Sum=Sum+val
            })
            console.log("Sum :",Sum)
        }
        else if(data[i].Operator=="-"){   
            console.log("Subtraction :",subofArray(data[i].array))  
            }
        else if(data[i].Operator=="+o*o-"){
        operatorAr =  (data[i].Operator).split("o")
            for(let j = 0;j<operatorAr.length;j++){ 
                if (operatorAr[j] =="+"){
                    let sum = sumofArray(data[i].array)
                } else if(operatorAr[j] =="*"){
                    let multiply = multiplyArray(data[i].array)
                }else if(operatorAr[j] =="-"){
                    let ans=multiplyArray(data[i].array)-sumofArray(data[i].array);
                    console.log("Answer is :" , ans)
                }
                }
        }
        else if(data[i].Operator=="% 20"){
            const newArray =(data[i].array).map((val)=>{
                return val%20
            })
        console.log("newArray :",newArray)
        }
}
}
let data=require("C:\\Users\\DAVID\\Desktop\\Hackathon\\new.json")
parse(data)


