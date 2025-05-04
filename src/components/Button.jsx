function Button({ children, primary, href, onClick, className = "" }) {
    const baseClasses = "px-4 py-2 rounded font-medium transition-all duration-200 flex items-center gap-2";
    const primaryClasses = primary 
      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg" 
      : "bg-gray-100 text-blue-600 hover:bg-gray-200";
    
    const allClasses = `${baseClasses} ${primaryClasses} ${className}`;
    
    return href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={allClasses}>
        {children}
      </a>
    ) : (
      <button onClick={onClick} className={allClasses}>
        {children}
      </button>
    );
  }

export default Button