import React, {useContext} from 'react'
import ChildA from './ChildA'
import balanceContext from '../../BalanceContext'

function Parent() {
    console.log(useContext(balanceContext))
    const [val, setVal] = useContext(balanceContext);
    return (
        <div>
            <h2>Avail Bal. {val}</h2>
            {/* <button onClick={()=>setVal(val + 1)}>+</button> */}
            <ChildA />
        </div>
    )
}

export default Parent
