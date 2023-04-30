const Error = ({children}) => {
  return (
    <div className="w-full bg-red-700 p-3 text-white font-bold text-center mb-3 rounded-md">
        {children}
    </div>
  )
}

export default Error