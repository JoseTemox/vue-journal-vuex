// export const myAction = async({commit}) =>{
// }

import journalApi from "@/api/journalApi"


export const loadEntries = async({commit}) =>{

    const { data } = await journalApi('/entries.json')

    if(!data){
        commit('setEntries', [])
        return
    }
    const entries = []
    for( let id of Object.keys(data)){
        entries.push({
            id,
        ...data[id]})
    }

    commit('setEntries', entries)
}

export const updateEntries = async({commit},entry) =>{
    const { date, picture, text, id } = entry
    const dataToSave = { date,picture,text }
    const response = await journalApi.put(`/entries/${id}.json`,dataToSave)
    console.log(response)

    commit('updateEntry', {...entry})
}

export const createEntry = async({commit}, entry) =>{

    const { date, picture, text, id } = entry
    const dataToSave = { date, picture, text, id }
    const { data } = await journalApi.post(`entries.json`,dataToSave)
    dataToSave.id = data.name
    commit('addEntry',dataToSave)
    return data.name
}

export const deleteEntry = async({commit}, id) =>{
    await journalApi.delete(`/entries/${id}.json`)
    commit('deleteEntry', id)
    return id
}


