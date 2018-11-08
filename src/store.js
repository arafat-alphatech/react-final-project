import createStore from "unistore";
import devtools from "unistore/devtools";
import axios from "axios";
import persistStore from 'unissist'
import localStorageAdapter from 'unissist/integrations/localStorageAdapter';

const initialState = {
    listBooks: []

  };
  
const store =
process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));


const adapter = localStorageAdapter();
persistStore(store, adapter);

const actions = store => ({
 
    handleSearch: async (state, value) => {
        const url = "http://localhost:5000/api/public/items?judul=" + value
        console.log(url)
        await axios
        .get(url)
        .then((response) => {
            store.setState({
                listBooks: response.data.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    },

})


export { store, actions }