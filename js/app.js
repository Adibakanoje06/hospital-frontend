async function loadPatients(){

    const response = await fetch(
        "http://localhost:8080/patients"
    );

    const data = await response.json();

    document.getElementById("output")
    .innerHTML = JSON.stringify(data);

}

async function addPatient(){

    const patient = {

        name: document.getElementById("name").value,

        age: document.getElementById("age").value

    };

    await fetch(
        "http://localhost:8080/patients",
        {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(patient)

        }
    );

    loadPatients();

}