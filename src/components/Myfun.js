const Myfun = () => {  

    const add = (a,b) => {
        const promiseoject = new Promise(function(resolve,reject){
            if(a<0 || b<0)
            reject('wrong input')
            else
            {
                setTimeout(resolve(a+b),5000);
            }
            
        })
        return promiseoject;
    }

    const mul = (a,b) => {
        const promiseoject = new Promise(function(resolve,reject){
            if(a<0 || b<0)
            reject('wrong input')
            else
            resolve(a*b);
        })
        return promiseoject;
    }

  

    async function show(){
        
        try{
            let x = await add(2,3);
            let y = await mul(2,3);
        }
        catch(error){
            console.log(error);
        }
    
    }

    console.log("First");
    show();
    console.log("Third");
    
    return <>
    hello
    </>

}

export default Myfun;