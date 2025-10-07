function Banner() {
  return (
    <>
      {/* <div className="z-0 absolute m-0 p-0 top-0 left-0 rotate-60 sm:rotate-50 md:rotate-40 lg:rotate-28 xl:rotate-30 trapezoid bg-linear-to-r from-slate-950 from-10% via-stone-600 via-30% to-slate-950 to-50% opacity-20 h-90 w-120 sm:w-200 md:w-250 lg:w-350 xl:w-450 xl:h-120 " /> */}
      {/* <div className="z-0 absolute m-0 p-0 top-0 right-0 rotate-50 sm:rotate-50 md:rotate-40 lg:rotate-28 xl:rotate-30 trapezoid bg-linear-to-bl from-slate-950 from-10% via-stone-600 via-30% to-slate-950 to-50% opacity-100 h-90 w-120 sm:w-200 md:w-250 lg:w-350 xl:w-450 xl:h-120 " /> */}
      {/* <div className="absolute left-3/6 rotate-40 top-0 trapezoid bg-linear-to-r from-slate-950 from-10% via-stone-600 via-30% to-slate-950 to-90% opacity-20 h-50 w-50" /> */}
      {/* <div className="absolute left-3/8 rotate-310 top-0 trapezoid bg-linear-to-r from-slate-950 from-10% via-stone-600 via-30% to-slate-950 to-90% opacity-20 h-50 w-50"/> */}
      {/* <div className="absolute left-4/9 rotate-359 top-0 trapezoid bg-linear-to-r from-slate-950 from-10% via-stone-600 via-30% to-slate-950 to-90% opacity-20 h-50 w-50"/> */}
      <div className="relative w-full h-64 overflow-hidden flex items-center justify-center z-20">
        {/* Circle */}
        <div className="flex items-center justify-center absolute shadow-2xl shadow-amber-50 rounded-full">
          <div className="w-40 h-40 rounded-full bg-gray-400 shadow-lg shadow-black/40 flex items-center justify-center">
            <div className="trapezoid bg-linear-to-tr from-slate-800 from-30% via-stone-600 via-50% to-slate-950 to-50% w-10 h-70 rotate-130 absolute z-[-1] opacity-20" />
            <div className="trapezoid bg-linear-to-tr from-slate-800 from-30% via-stone-600 via-50% to-slate-950 to-50% w-10 h-70 rotate-310 absolute z-[-1] opacity-20" />
            <div className="bg-linear-to-bl from-slate-950 via-stone-600 to-slate-950 w-10 h-85 rotate-50 absolute z-[-1] opacity-20" />
            <div className="bg-linear-to-bl from-slate-950 via-stone-600 to-slate-950 w-10 h-85 rotate-90 absolute z-[-1] opacity-20" />
            <div className="bg-linear-to-bl from-slate-950 via-stone-600 to-slate-950 w-10 h-88 rotate-180 absolute z-[-1] opacity-20" />
            <div
              className="w-32 h-32 rounded-full z-20"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 12%, rgba(255,255,255,0.02) 25%, rgba(0,0,0,0.06) 70%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
