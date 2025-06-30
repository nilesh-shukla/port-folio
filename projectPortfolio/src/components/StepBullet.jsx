function StepBullet({ className, number, heading, paragraph }) {
  return (
    <div className={`box font-ralway flex flex-col bg-[#121212] p-5 w-[65%] rounded-2xl ${className}`}>
      <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-b from-[#121212] to-[#2D2E30] via[#1f1f1f] text-xl text-gray-500 mb-5`}>
        {number}
      </div>
      <h1 className="text-2xl text-white mb-3">{heading}</h1>
      <p className=" text-[#6C7179]">{paragraph}</p>
    </div>
    
  );
}

export default StepBullet;