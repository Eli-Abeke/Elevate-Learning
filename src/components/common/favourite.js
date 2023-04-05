import {React, useState} from "react"

export default function Favourite(props) {
    const [Liked, setLiked] = useState(props.liked);

    function toggle (){
        setLiked(!Liked)
    }

    console.log(Liked)
    return (
        <button onClick={toggle}>
            <span class={`text-4xl material-symbols-rounded ${ (Liked == true) ? "block" : "hidden"}`}>favorite</span>
            <span class={`text-4xl material-symbols-outlined ${ (Liked == true) ? "hidden" : "block"}`}>favorite</span>
        </button>
    )
}
