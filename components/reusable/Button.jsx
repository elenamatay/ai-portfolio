function Button({ title, icon, onClick, className }) {
    return (
        <button onClick={onClick} className={`flex items-center rounded-lg bg-red-900 hover:bg-orange-600 text-white shadow-sm gap-4 duration-300 ${className}`}>
            {icon && <span className="text-xl">{icon}</span>}
            {title}
        </button>
    );
}

export default Button;