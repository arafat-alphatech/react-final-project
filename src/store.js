import createStore from "unistore";
import devtools from "unistore/devtools";
import axios from "axios";
import persistStore from 'unissist'
import localStorageAdapter from 'unissist/integrations/localStorageAdapter';

const initialState = {
    listBooks: [],
    book: [],
    is_login: false,
    token: ''

  };
  
const store =
process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));


const adapter = localStorageAdapter();
persistStore(store, adapter);

const actions = store => ({ 
    getAllBooks:  async (state) => {
        const url = "http://192.168.43.240:8000/public/books"
        await axios
        .get(url)
        .then((response) => {
            store.setState({
                listBooks: response.data.result.Result
            })
        })
        .catch((err) => {
            console.log(err)
        })
    },
    
    handleSearch: async (state, value) => {

        const url = "http://192.168.43.240:8000/public/books?title=" + value
        console.log(url)
        await axios
        .get(url)
        .then((response) => {
            store.setState({
                listBooks: response.data.result.Result
            })
        })
        .catch((err) => {
            console.log(err)
        })
    },

    handlePinjam: async (state, book_id, pemilik_id) => {

        const url = "http://192.168.43.240:8000/users/request"
        const body = {
            book_id: book_id,
            owner_id: pemilik_id
        }        
        const token = localStorage.getItem("token");
        const header = {
            headers: {
              Authorization: "Bearer " + token
            }
        }
        console.log(body)
        await axios
        .post(url, body, header)
        .then((response) => {
            alert("Pinjaman berhasil di proses, silahkan tunggu persetujuan pemiliki buku")
        })
        .catch((err) => {
            console.log(err)
        })
    },
})


export { store, actions }