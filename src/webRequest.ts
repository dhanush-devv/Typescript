import axios,{type AxiosResponse} from 'axios'

interface Todo{
    userId:number;
    id:number;
    title:string;
    completed:boolean
}

// axios.get('https://api.github.com/user')
// .then(response=>{
//     console.log(response.data)
// })

const fetchData=async()=>{
    try {
        const response:AxiosResponse<Todo>=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
       console.log(response.data)
    } catch (error:any) {
       // console.log(error.message)
       if(axios.isAxiosError(error)){
        console.log('Axios error',error.message)
       }
    }
}
fetchData();

