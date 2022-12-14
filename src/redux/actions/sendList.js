export default function sendList (name){
    return {
        type: 'SEND_LIST',

       payload: {
        name: name
       }

       
    }
}