import axios from "axios"
const server = process.env.NEXT_PUBLIC_API;


export const uploadImage = async (formdata)=>{
    
    

    

    const url = '/uploadeditorimages';

    try{
    const {data} = await axios.post(url, formdata, {headers: {'Content-Type': 'multipart/form-data'}})
    if(data?.err){
        console.log(err)
    }
    else{
       console.log(data)
       console.log(`${server}${data.path}`);
       const savedPath = `${server}${data.path}`;
       console.log(savedPath)
        return savedPath
    }
    
}
    catch (err) {
        console.log(err)
    }
}