export default function Button (props){
    return (
        <>
            <button className='lg:border px-12 py-2 absolute -bottom-2 bg-white text-[10px] right-28 cursor-pointer rounded-4xl'>{props.buttons}</button> 
            <br />
        </>
    )
}