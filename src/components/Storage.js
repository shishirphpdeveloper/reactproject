const Storage = () => {

   let userObj={
    'username':'shishirphpdeveloper',
    'userpassword':'123123'
   }

    const fun1 = () => {
        localStorage.setItem('userinfo',JSON.stringify(userObj))

      
    }

    const fun2 = () => {
       console.log(JSON.parse(localStorage.getItem('userinfo')));
    }
    
    const fun3 = () => {
      
    }

    return <>
    <h2>Javascript Storage</h2>
    <button onClick={fun1}>Submit1</button>
    <button onClick={fun2}>Submit2</button>
    <button onClick={fun3}>Submit3</button>
    </>
}

export default Storage;