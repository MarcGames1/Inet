import axios from "axios"


export const uploadImage = async (formdata)=>{
    const server = 'http://89.37.212.226:8000/'; 

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