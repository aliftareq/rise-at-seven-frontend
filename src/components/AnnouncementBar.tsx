export default function AnnouncementBar() {
  const text =
    "🚨 Where are your customers actually searching? Download the report";

  return (
    <div className="group w-full overflow-hidden rounded-full bg-[#aef7df] text-black">
      <div className="relative flex h-7 items-center justify-center px-4 md:h-9">
        <div className="relative h-3 overflow-hidden md:h-4.5">
          <p className="flex h-3 items-center justify-center whitespace-nowrap text-center text-[9px] font-bold leading-[1.1] tracking-[-0.03em] transition-transform duration-300 ease-out group-hover:-translate-y-full md:h-[18px] md:text-[14px]">
            {text}
          </p>

          <p className="absolute left-0 top-full flex h-3 items-center justify-center whitespace-nowrap text-center text-[9px] font-bold leading-[1.1] tracking-[-0.03em] transition-transform duration-300 ease-out group-hover:-translate-y-full md:h-[18px] md:text-[14px]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
