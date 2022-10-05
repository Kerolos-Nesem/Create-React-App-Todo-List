import React from 'react'


//function to add todos in right.js

function Left (props){
    
function addingTodos (){
        //when clicked, add todo to list
        const newTodo = document.getElementById('input').value
    
        props.setList(
            props.list.concat(newTodo)
        )
    
}
//props = an object 
//props = {setList: setList()} 

return(

<div id='left'>

    
    <input type="text" placeholder="Enter Todo's" id='input'/>
    <button onClick={addingTodos}>Submit</button>

    
    

</div>)

}

export default Left;