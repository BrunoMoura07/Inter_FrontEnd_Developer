import {useState} from "react"; 

function SmartCounter() {

    //useState retorna um vetor composto por: 1.vareavel statefull(aguarda o estado do elemento); 2. função amarrada a vareavel que atualize esse valor (reativo)
    
    const [quantity, upQuantity] = useState(0);

    return (
         <>
            <h>{quantity}</h>
            <button onClick={()=> upQuantity(quantity+1)}>
                Aumentar
            </button>
         </>
    ) 
}

export default SmartCounter; 