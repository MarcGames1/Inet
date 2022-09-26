import axios from 'axios'

export const handleForm = async ({api, nume, prenume, text, servicii})=>{

    try{

        const {data} = axios.post(api, {nume, prenume, text, servicii})
        if (data?.error) {
            console.log(data);
            return { err };
        } else {
            console.log(data);
            return {data}
        }
    }
     catch (err){
            return {err};
     }

}
            