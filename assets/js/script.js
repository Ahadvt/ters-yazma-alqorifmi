function ReversePrint(str) {
    let arry = str.split(" ")
    for (let i = 0; i < arry.length; i++) 
    {
        let charary = []
        charary = arry[i]
        for (let j = charary.length - 1; j >= 0; j--) {
            let ters =[]
            ters += charary[j];
            
            console.log(ters + " ");
        }
    }
    
}
ReversePrint("hello world")