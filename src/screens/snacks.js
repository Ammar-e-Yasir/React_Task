import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/context'

function Snacks() {
    const { state, dispatch } = useContext(GlobalContext);
    const [newSnack, setNewSnack] = useState('');
    const [newDrink, setNewDrink] = useState('');

    const updateSnack = () => {
        console.log('newSnack', newSnack);
        dispatch({ type: "UPDATE_SNACK", payload: newSnack });
    }
    const updateDrink = ()=>{
        console.log('newDrink'  , newDrink);
        dispatch({type:"UPDATE_DRINK" , payload:newDrink})

    }

    return (
        <div>
            <h3>This is yummy {state?.snacks} and {state?.drink} for {state?.user?.userName}</h3>
            <input type="text" value={newSnack} onChange={(ev) => { setNewSnack(ev.target.value) }} />
        
            <button onClick={updateSnack}>Update Snack</button>
            
        
            {/* <h3>This is yummy {state?.snacks} and {state?.drink} for {state?.user?.userName}</h3> */}
            <input type="text" value={newDrink} onChange={(ev) => { setNewDrink(ev.target.value) }} />
            <button onClick={updateDrink}>Update Drink</button>
        </div>
    )
}

export default Snacks;