import './Decrement.css';

const Decrement = ({handle})=>{
    return(
        <button className='button' onClick={handle}>
            Decrement
        </button>
    )
}

export default Decrement;