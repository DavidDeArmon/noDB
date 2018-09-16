import axios from 'axios'

export default function AddWord(input){
    axios.post('/api/sentence',{
        word:input}).then((res)=>{
            console.log('post',res)
        }).catch(err=>console.log(err))
}