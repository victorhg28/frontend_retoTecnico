import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Home() {

    const [users,setUsers]=useState([]);

    useEffect( ()=>{
        loadUsers();
    }
    );

    //uso de ENDOPOINT /bus
    const loadUsers =async ()=>{
        const result=await axios.get("http://localhost:4000/bus"); 
        setUsers(result.data);
    };


  return (
    <div classsName="container">
        <div className="py-4">
            <h2 className="text-center m-4 text-primary">Consumo de endpoint /bus</h2>

            <table className="table shadow">
                <thead>
                    <tr>
                        {/*<th scope="col">#</th>*/}
                        <th scope="col">id</th>
                        <th scope="col">#bus</th>
                        <th scope="col">placa</th>
                        <th scope="col">fecha</th>
                        <th scope="col">caracteristicas</th>
                        <th scope="col">id_marcaBus</th>
                        <th scope="col">estado</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user,index)=>{
                            return(
                            <tr>
                                {/*<th scope="row" key={index}>{index+1}</th>*/}
                                <td>{user.id}</td>
                                <td>{user.num_bus}</td>
                                <td>{user.placa}</td>
                                <td>{user.fecha_creacion}</td>
                                <td>{user.caracteristicas}</td>
                                <td>{user.id_marca}</td>
                                <td>{user.estado}</td>
                                <td>
                                    {/*<Link className="btn btn-dark" to="/viewuser">ver</Link>*/}
                                    {/*<Link className="btn btn-dark" to={`/viewuser/${user.id}`}>ver</Link>*/}
                                    <Link className="btn btn-dark" to="/viewuser" state={{ id: user.id }}>ver</Link>
                                </td>
                            </tr>)
                        })
                    }
                    
                </tbody>
            </table>




        </div>
    </div>
  )
}
