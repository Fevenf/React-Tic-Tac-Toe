import React from'react'

// const props ={
//     onClick: () => "function",
//     value: "x"
// };
// const {value} = props;
const style = {
    background : 'lightred',
    border: '2px solid darkred',
    fontSize:'30px',
    fontWeight: '800',
    cursor:'pointer',
    outline:'none',

};
const Square = ({value,onClick}) => (
< button style={style} onClick= {onClick} >
    {value}
</button>

);
export default Square;