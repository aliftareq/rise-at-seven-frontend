export default function Hero() {
  return (
    <section className="relative mt-[6px] h-[calc(100svh-39px)] min-h-[560px] overflow-hidden rounded-[18px] bg-black text-white md:mt-[10px] md:h-[calc(100svh-56px)] md:min-h-[720px] md:rounded-[32px]">
      {/* Temporary background until we extract the real asset */}
      <div className="absolute inset-0 scale-105 bg-[radial-gradient(circle_at_20%_35%,rgba(40,70,120,0.85),transparent_28%),radial-gradient(circle_at_75%_60%,rgba(210,135,40,0.9),transparent_32%),radial-gradient(circle_at_55%_25%,rgba(160,155,130,0.8),transparent_35%),linear-gradient(135deg,#090909,#6f7f8b)] blur-[6px]" />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative flex h-full flex-col items-center justify-center px-4 pt-16 text-center md:pt-24">
        <div className="mb-6 text-center text-[11px] font-bold uppercase leading-[0.95] tracking-[-0.04em] md:text-[18px]">
          <p>#1 Most Recommended</p>
          <p>Content Marketing Agency</p>
        </div>

        <h1 className="text-[47px] font-bold leading-[0.82] tracking-[-0.075em] md:text-[130px] xl:text-[150px]">
          <span className="block">We Create</span>
          <span className="block">
            Category{" "}
            <span className="hidden h-[88px] w-[120px] rounded-[18px] bg-white/25 align-middle md:inline-block" />{" "}
            Leaders
          </span>
        </h1>

        <p className="mt-5 text-[13px] font-bold leading-none tracking-[-0.05em] md:mt-8 md:text-[34px]">
          on every searchable platform
        </p>

        <div className="absolute bottom-5 left-3 right-3 flex justify-center md:bottom-9 md:left-8 md:right-8 md:justify-between">
          <p className="hidden max-w-[460px] text-left text-[22px] font-semibold leading-[1.25] tracking-[-0.05em] md:block">
            Organic media planners creating, distributing & optimising
            search-first content for SEO, Social, PR, Ai and LLM search
          </p>

          <p className="max-w-[220px] text-center text-[10px] font-bold leading-tight tracking-[-0.05em] md:max-w-[300px] md:text-right md:text-[24px]">
            4 Global Offices serving
            <br />
            UK, USA (New York) & EU
          </p>
        </div>
      </div>
    </section>
  );
}
