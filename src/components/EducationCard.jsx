function EducationCard({pic, grad, gpa, lgWid="60px", mdWid="55px", children}) {
  return <div className="w-full h-[130px] rounded-lg bg-stone-500/50 flex flex-col justify-center items-center text-center">
      <img src={pic} className={`w-[${lgWid}] lg:w-[${lgWid}] md:w-[${mdWid}] pt-1`} />
      <p className="text-xs lg:text-sm">{children}</p>
      <p className="text-xs text-stone-300/95">Graduated {grad}</p>
      <p className="text-xs text-stone-300/95">GPA: {gpa}</p>
  </div>;
}

export default EducationCard;
