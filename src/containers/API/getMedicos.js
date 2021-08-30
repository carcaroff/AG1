const getMedicos = _ => {
    try {
        /** Comentar pois não temos o backend finalizado **/
        /*
            const response = fetch(`http://localhost:8888/prog-web/medico/`, );
            return response.json();
        */
        return [
            {
                codigo: 1,
                nome: "Medico X"
            },
            {
                codigo: 2,
                nome: "Medico Y"
            },
            {
                codigo: 3,
                nome: "Medico Z"
            },
        ];
    } catch (e) {
        console.log(e);
    }
};

export default getMedicos;