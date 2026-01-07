export const getContacts = async() => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/AgustinGauto/contacts`)
    if(!response.ok){
        createAgenda()
    }
}

export const createAgenda() = async(contact) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/AgustinGauto`, {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
            "content-Type": "application/json"
        }
    })
    const data = await response.json()
    console.log(data);
       
}