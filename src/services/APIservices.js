

export const getContacts = async (dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/AgustinGauto/contacts`)
    if (!response.ok) {
        createAgenda()
        return
    }
    const data = await response.json()
    dispatch({ type: "set_contacts", payload: data.contacts })
}

export const createAgenda = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/AgustinGauto`, {
        method: "POST",
    })
}

export const deleteContact = async (id, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/AgustinGauto/contacts/${id}`,{
        method: "DELETE",
    })
    if(response.ok)getContacts(dispatch)
}

                                      
export const editContacts = async (contact) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/AgustinGauto/contacts/${contact.id}`, {

        method: "PUT",
        body: JSON.stringify(contact),
        headers: {
            "Content-Typer": "application/json"
        }
    })
    const data = await response.json()
    console.log(data);
}
