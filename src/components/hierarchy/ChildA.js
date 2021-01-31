import React , {useContext, useState} from 'react'
import ChildB from './ChildB'
import balanceContext from '../../BalanceContext'

function ChildA() {
    const [val, setVal] = useContext(balanceContext);
    const[withDrawal, setWithDrawal]=useState(0)
    return (
        <div>
            <h3>Avail Bal. {val}</h3>
            {/* <button onClick={()=>setVal(val + 1)}>+</button> */}
            <input type="number" val={withDrawal} onChange={(event)=>setWithDrawal(event.target.value)} />
            <button onClick={()=>{setVal(val-withDrawal)}}>withdrawal</button>
            <ChildB />
        </div>
    )
}

export default ChildA
