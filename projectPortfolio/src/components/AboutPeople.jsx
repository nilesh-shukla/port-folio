
function AboutPeople({className, image, name, position, thoughts}) {
  return (
    <div className={`flex flex-col gap-3 bg-white p-4 rounded-4xl z-10 ${className}`}>
            <div className='flex gap-2 items-center'>
                <img src={image} className="w-10 lg:w-12 xl:w-8 rounded-lg" />
                <div className='flex xl:flex-row xl:items-center xl:gap-2 flex-col'>
                    <h1 style={{fontWeight : 100}}>{name}</h1>
                    <div className="hidden xl:inline w-1 h-1 bg-[#9e9e9e] rounded-full" />
                    <h1 className="text-[#878787] tracking-normal" style={{fontWeight: 200}}>{position}</h1>
                </div>
            </div>
            <p className="leading-5 text-[#444444]" style={{fontWeight: 200}}>{thoughts}</p>
    </div>
  )
}

export default AboutPeople