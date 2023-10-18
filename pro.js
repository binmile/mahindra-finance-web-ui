 const Apple=() =>{
    for (var i = 1; i <= 5; i++) {
        //closure are used here //
        const res=(i)=>{
            setTimeout(() =>{
                console.log("checking", i);
    
            }, i * 1000);
        }
        res(i)
       
    }
}
Apple();