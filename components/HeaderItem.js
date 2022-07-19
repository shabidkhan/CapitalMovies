const HeaderItem = ({title,Icon,color}) => {
  return (
    <div className={`flex flex-col items-center cursur-pointer group w-12 sm:w-20 hover:${color||"text-white"}`}>
        <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
        <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
    </div>
  )
}

export default HeaderItem