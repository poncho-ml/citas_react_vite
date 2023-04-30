import { useState, useEffect } from 'react';
import Error from './Error';



const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            // console.log('Cambió el paciente')
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])
    

    const generarId = () => {
        const fecha = Date.now().toString(36)
        const random = Math.random().toString(36).substring(2);
        return fecha + random
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        // Validación del Formulario
        if([nombre,propietario,email,alta,sintomas].includes('')){
            // console.log('Hay algún campo vacío')
            setError(true);
        } else {
            // console.log('Todos los campos están llenos')
            setError(false);
            
            // Objeto de paciente
            const objetoPaciente = {
                nombre,
                propietario,
                email,
                alta,
                sintomas
            }

            if(paciente.id){
                //Editando
                objetoPaciente.id = paciente.id;

                const pacientesActualizados = pacientes.map((pacienteState) => {
                    return(
                        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
                    )
                })
                setPacientes(pacientesActualizados);

                setPaciente([]);


            } else {
                //Agregando
                objetoPaciente.id = generarId();
                setPacientes([...pacientes, objetoPaciente]);
            }


            // Reiniciar Formulario
            setNombre('');
            setPropietario('');
            setEmail('');
            setAlta('');
            setSintomas('');
        }
        
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Formulario</h2>
            <p className="text-lg mt-5 text-center mb-5">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">Adminístralos</span>
            </p>
            <form 
                action="" 
                className="bg-white shadow-md rounded-lg py-10 px-5 sticky top-5"
                onSubmit={handleSubmit}
            >
                {/* {error ? 'Hay un error' : 'No hay errores'} */}
                {/* { error && 'Hay un error'} */}
                {/* { formSubmitted ? error ? 'Hay un error' : console.log('No hay errores') : '' } */}
                { error && <Error><p>Todos los campos son obligatorios</p></Error> }
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-800 font-bold uppercase text-left">Nombre mascota</label>
                    <input 
                        id="mascota" 
                        type="text" 
                        placeholder="Nombre de la mascota" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400" 
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-800 font-bold uppercase text-left">Nombre propietario</label>
                    <input 
                        id="propietario" 
                        type="text" 
                        placeholder="Nombre del propietario" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-800 font-bold uppercase text-left">Email</label>
                    <input 
                        id="email" 
                        type="email" 
                        placeholder="Email de contacto" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-800 font-bold uppercase text-left">Alta</label>
                    <input 
                        id="alta" 
                        type="date" 
                        placeholder="Fecha" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400"
                        value={alta}
                        onChange={ (e) => setAlta(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-800 font-bold uppercase text-left">Síntomas</label>
                    {/* <input id="alta" type="date" placeholder="Fecha" className="border-2 w-full p-2 mt-2 placeholder-gray-400"/> */}
                    <textarea 
                        name="" 
                        id="sintomas" 
                        placeholder="Describe los síntomas" 
                        className="w-full border-2 mt-2 p-2" 
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                    />
                </div>
                <input 
                    type="submit" 
                    className="bg-indigo-600 text-white font-bold p-3 rounded-md w-full uppercase hover:bg-indigo-700 cursor-pointer transition-all" 
                    value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </div>
    )
}

export default Formulario