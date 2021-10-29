import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
// arvinder singh

const Clock = () => {

    var currentdate = new Date();
    var datetime = currentdate.toLocaleTimeString()

    const [count, setCount] = useState(datetime);

    const IncVal = () => {

        var currentdate = new Date();
        var currentDateTime = currentdate.toLocaleTimeString();
        setCount(currentDateTime);
        // console.log('clicked')
    }

    setInterval(IncVal , 1000);

    return (
        <>
            <div className='mainDiv'>
                <h1> {count} </h1>
            </div>
        </>
    )
}


const Home = () => {

    const history = useHistory();

    const [users, setUser] = useState([]);

    const callHomePage = async () => {
        const res = await fetch("/admin/")
        if(res.status === 400){
            history.push('/login')
        }
        else {
            const data = await res.json()
            setUser(data.userList)
        }
    }

    useEffect(() => {
        callHomePage()
    })

    
    return (
        <>
            <h1 className='text-center m-5'> Home Page </h1> 
            <div className='text-center m-5'> <Clock /> </div>
            <div className="text-center">

                {users.map(user => <li style={{listStyleType:"none"}}> {user} </li>)}
            
            </div>

        </>
    )
}

export default Home;






// const Home = () =>{

//     const history = useHistory();

//     const callHomePage = async (e) => {

//         // try{
//             const res = await fetch("//localhost:2000/" ,{
//                 method:"GET",
//                 headers:{
//                     "Content-Type" : "application/json",
//                     Accept : "application/json"
//                 },
//                 credentials: "include"
//             });


//             const data = await res;

//             console.log(data)

//             // if(!data.status === 200){
//             //     const error = new Error(res.error);
//             //     throw error;
//             // }
//             // else{
//             //     history
//             // }

//         // }
//         // catch(error){
//         //     console.log(error)
//         //     history.push('/login')
//         // }

//     }


//     useEffect(() => {
//         callHomePage();
//     }, [])

//     return (
//         <>


//         <h1> Home Page </h1>

//         </>
//     )
// }

// export default Home;