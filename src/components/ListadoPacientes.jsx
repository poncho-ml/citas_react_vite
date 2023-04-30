import { useEffect } from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    // useEffect(() => {
    //     if(pacientes.length > 0){
    //         // console.log('Nuevo Paciente')
    //     }
    // }, [pacientes])

    return (

        <div className="md:w-1/2 lg:w-3/5">
            {pacientes && pacientes.length ?
                <>
                    <h2 className="font-black text-3xl text-center text-indigo-600">ListadoPacientes</h2>
                    <p className="text-xl mt-5 mb-5 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    <div className="">
                        {pacientes.map((paciente) => {
                            return (
                                <Paciente
                                    key={paciente.id}
                                    paciente={paciente}
                                    setPaciente={setPaciente}
                                    eliminarPaciente={eliminarPaciente}
                                />
                            )
                        })}
                    </div>
                </>

                :

                <>
                    <h2 className="font-black text-3xl text-center text-indigo-600">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-5 text-center">
                        Agrega pacientes {''}
                        <span className="text-indigo-600 font-bold">y aparecerán debajo</span>
                    </p>
                    <div className="h-3/5 overflow-y-scroll">
                        {pacientes.map((paciente) => {
                            return (
                                <Paciente
                                    key={paciente.id}
                                    paciente={paciente}
                                />
                            )
                        })}
                    </div>
                </>

            }


        </div>
    )
}

export default ListadoPacientes