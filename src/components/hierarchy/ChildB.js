import React , {useContext, useState} from 'react'
import balanceContext from '../../BalanceContext'

function ChildB() {
    const [val, setVal] = useContext(balanceContext);
    const[diposit, setDiposit] = useState(0);
    const onDipositAction =()=>{
        console.log(val, diposit)
        setVal(val+parseFloat(diposit))
        // setDiposit(0)
    }
    return (
        <div>
            <h4>Avail Bal. {val}</h4>
            <input type="number" val={diposit} onChange={(event)=>setDiposit(event.target.value)} />
            <button onClick={onDipositAction}>diposit</button>
            {/* <button onClick={()=>setVal(val + 1)}>+</button> */}
        </div>
    )
}

export default ChildB
