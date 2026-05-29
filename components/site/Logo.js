export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-11 w-[76px] shrink-0 overflow-hidden">
        <img
          src="/wsc-Photoroom.png"
          alt="WSC Healthcare logo"
          className="h-full w-full object-contain object-center"
        />
      </div>
      <div className="leading-none pt-0.5">
        <div className="font-bold tracking-tight text-[18px] text-[#0a1f17]">WSC <span className="text-[#0B6E4F]">Healthcare</span></div>
        <div className="text-[9px] tracking-[0.28em] text-[#0a1f17]/55 uppercase mt-1.5">Healthcare Intelligence</div>
      </div>
    </div>
  );
}
