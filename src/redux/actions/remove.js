export default function remove(id){
    return{
        type: 'REMOVE',
        payload: {
            id: id
        }
    }
}