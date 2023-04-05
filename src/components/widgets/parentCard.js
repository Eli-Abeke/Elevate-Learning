import {React, useState} from 'react'

export default function parentCard(props) {
    
    const name= props.name
    const descriptions= props.description
    const level= props.level
    const content= props.content

    const initialState = ""
    const [isLoading, setLoading] = useState(true);
    const [Content, setContent] = useState(initialState);


  return (
    <div>
        
    </div>
  )
}
