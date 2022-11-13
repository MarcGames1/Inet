import axios from "axios"

export const getAuthorOptions = async () =>{
const {data} = await axios.get('/authors')
console.log("Helper Function => ",data)
const options = []
data.map(author =>{
    options.push({label: `${author.nume} ${author.prenume}}`, value:author._id})
})

return options
}