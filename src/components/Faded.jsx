import { useState,useEffect } from "react";
function FadeTransition({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      setIsVisible(true);
      return () => setIsVisible(false);
    }, []);
    
    return (
      <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    );
  }

export default FadeTransition