import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grafica from './Grafica';

function GraficoPersonasOcup() {
    const sessionCenso = useSelector((state) => state.censo);
    const sessionOcupation = useSelector((state) => state.ocupation);

    const callback = (acc, val) => {
        if (acc[val.ocupacion]) {
            acc[val.ocupacion] = acc[val.ocupacion] + 1;
        } else {
            acc[val.ocupacion] = 1;
        }
        return acc;
    }

    const resultado = sessionCenso.reduce(callback, {});

    const cantCensados = Object.values(resultado);
    const ocupationsId = Object.keys(resultado);

    const ocupationsNombre = ocupationsId?.map(
        e => {
            const ocup = sessionOcupation?.find(o => o.id == e);
            return ocup?.ocupacion;
        }
    )

    return (
        <>
            <Grafica etiquetas={ocupationsNombre} datos={cantCensados}
                nombreGrafica="Censados por departamento"
                nombreDatos="Censos" />
        </>
    )
}

export default GraficoPersonasOcup