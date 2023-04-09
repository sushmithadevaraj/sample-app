import { useState } from "react";

const usestateobject = () => {
    const [name, setName] = useState('peter')
    return(
        <h4>{name}</h4>
    )
}

export default usestateobject;