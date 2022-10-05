import React from 'react'

function Right (props){
//props = an object 
//props = {list: {list}}
const list = [];

for(let i = 0; i < props.list.length; i++){

    list.push(<li> {props.list[i]} <button className='delete' onClick={ ()=> del(i) }> Delete</button> </li>)

}

function del (target) {

    props.setList(props.list.filter((el,i)=>{
            return i != target 
            
    }))

}

return (
        <div id='right'>
            <ul>
            {list}
            </ul>
        </div>
    )

}

export default Right;