import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export default function ViewUser() {

    /*
    const [user,setUser]=useState({
        name: "",
        username: "",
        email: ""
    })
    */

    const [user,setUser]=useState({
        id: "",
        id_marca: "",
        caracteristicas: "",
        placa: "",
        num_bus: "",
        estado: "",
        fecha_creacion: ""
    })

    //const {id}=useParams();
    const location = useLocation();  // Obteniendo estado del Link
    const { id } = location.state || {};  // acceso a id desde el estado
    console.log('ID del parámetro:', id);

    useEffect( ()=>{
        loadUser()
    },[])

    //uso de ENDOPOINT /bus/id
    const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:4000/bus/${id}`)
        setUser(result.data)
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4 text-primary">Consumo de endpoint /bus/id</h2>

                <div className="card">
                    <div className="card-header">
                        Detalles del bus con id: {user.id}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>id_marca: </b>
                                {user.id_marca}
                            </li>
                            <li className="list-group-item">
                                <b>caracteristicas: </b>
                                {user.caracteristicas}
                            </li>
                            <li className="list-group-item">
                                <b>placa: </b>
                                {user.placa}
                            </li>
                            <li className="list-group-item">
                                <b>num_bus: </b>
                                {user.num_bus}
                            </li>
                            <li className="list-group-item">
                                <b>estado: </b>
                                {user.estado}
                            </li>
                            <li className="list-group-item">
                                <b>fecha_creacion: </b>
                                {user.fecha_creacion}
                            </li>
     
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/"}>Back to home</Link>
            </div>
        </div>
    </div>
  )
}
