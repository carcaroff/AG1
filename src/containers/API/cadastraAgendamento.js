const cadastraAgendamento = data => {
    try {
        /** Comentar pois não temos o backend finalizado **/
        /*
        const response = fetch(`http://localhost:8888/prog-web/consulta/`, {
            method: "POST",
            body: data
        });
        return response.json();
        */
        return data;
    } catch (e) {
        console.log(e);
    }
};

export default cadastraAgendamento;