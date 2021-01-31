import {BUY_CAKE, MAKE_A_CAKE} from './cakeconstants'

export const buyCake = ()=>{
    return {
        type:BUY_CAKE
    };
}

export const  makeCake= ()=>{
return {
    type: MAKE_A_CAKE
};
}