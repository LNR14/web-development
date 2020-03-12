import axios from "axios";

const baseURL = "http://localhost:4000/"

export default {
    postMessage(url = baseURL + 'postMessage/') {
        return {
            fetchAll: () => axios.get(url),
            fetchByID: id => axios(url+id),
            create: newRecord => axios(url,newRecord),
            update: (id,updateRecord) => axios.put(url + id,updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}