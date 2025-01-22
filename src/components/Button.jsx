    /* eslint-disable react/prop-types */


const Button = ({title, leftIcon, rightIcon, id, containerClass }) => {
    return (
        <button id={id} className={`${containerClass} group relative z-10   w-fit cursor-pointer  overflow-hidden rounded-full px-7 py-3 text-black` }       > 
        
        {leftIcon}  
        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
            <div>{title} </div>

        </span>
        {rightIcon}
        </button>
    )   
}

export default Button;  