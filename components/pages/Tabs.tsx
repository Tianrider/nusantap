const Tabs = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-[400px] h-full min-h-screen bg-white shadow-2xl mx-auto relative overflow-hidden">
        <div
          className={`relative flex h-full w-full flex-col items-center justify-between bg-white px-4 py-8 shadow-2xl overflow-hidden`}
        >
          <div className="z-10 flex w-full flex-row justify-end space-x-3">
            <div className="flex h-[38px] items-center justify-center rounded-full border border-[#d3d4d3] bg-white px-6">
              <p>Bahasa</p>
            </div>
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#d3d4d3] bg-white">
              {/* <IconQuestionMark size={24} color="#5699fd" strokeWidth={3} /> */}
            </div>
          </div>
          <div className="z-10 flex w-full flex-row items-center justify-center space-x-0 pr-2">
            <p className="text-3xl font-extralight">SATUSEHAT</p>
          </div>
          <div className="z-10 flex h-48 w-full flex-col space-y-3">
            <a
              className="relative flex h-16 w-full flex-col items-center justify-center rounded-lg bg-[#5699fd]"
              href="/login/"
            >
              <p className="text-white">Masuk</p>
              <p className="absolute -top-4 text-[8px] text-black">
                Fitur login belum terimplementasi, silakan langsung tekan tombol
                &quot;Masuk&quot;
              </p>
            </a>
            <a
              className="flex h-16 w-full items-center justify-center rounded-lg bg-[#e8f1fe]"
              href="/register/"
            >
              <p className="text-[#5699fd]">Daftar</p>
            </a>
            <div className="flex w-full justify-center">
              <p className="text-center text-xs text-gray-300">Versi 1.X.X</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
