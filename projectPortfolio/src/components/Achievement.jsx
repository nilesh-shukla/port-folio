
function Achievement({ className, bgColor, children }) {
  return (
    <div className={`p-5 rounded-4xl ${bgColor} ${className}`}>

      {children}
        
    </div>
    )
}

export default Achievement