export default function changeText(id){
    return{
        type: 'CHANGE_BUTTON',
        payload : {
          id:id
        }
    }
}