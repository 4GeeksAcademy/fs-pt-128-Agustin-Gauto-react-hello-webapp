

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

                                      
export const editContacts = async (contact, dispatch, navigate) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/AgustinGauto/contacts/${contact.id}`, {

        method: "PUT",
        body: JSON.stringify(contact),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if(response.ok){
        await getContacts(dispatch);
        navigate("/")
    }
}

export const addContact = async (contact, dispatch, navigate) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/AgustinGauto/contacts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    });
    if (!response.ok) {
        alert("ERROR AL CREAR CONTACTO")
        return
    }
    const data = await response.json()
    dispatch({ type: "add_contact", payload: data });
    navigate("/");
}