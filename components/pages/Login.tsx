import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';

export default function Login() {
  return (
    <div
      className={`bg-white h-full w-full flex flex-col items-center relative px-4 py-8 justify-between shadow-2xl overflow-hidden`}
    >
      {/* <img
        src="/elements/topleft.svg"
        alt="Top Left Decorator"
        width="100%"
        height="100%"
        className="absolute -top-8 -left-8 z-0"
      /> */}
      <div className="flex flex-col space-y-6 w-full items-center z-10">
        <div className="flex w-full justify-start">
          <Link href="/">
            <IconArrowLeft size={24} strokeWidth={3} />
          </Link>
        </div>

        <p className="font-semibold text-lg">
          Masukkan Email atau Nomor Telepon
        </p>

        <div className="flex flex-row items-center w-full">
          <div className="flex items-center justify-center text-[#5699fd] font-semibold w-1/2 h-12 border-b-2 border-[#5699fd]">
            <p>Email</p>
          </div>
          <div className="flex items-center justify-center text-[#e5e7eb] font-semibold w-1/2 h-12 border-b-2 cursor-not-allowed">
            <p>Nomor Telepon</p>
          </div>
        </div>

        <div className="w-full flex flex-col space-y-3">
          <p className="font-semibold">Email</p>
          <input
            type="text"
            className="border border-gray-300 rounded-lg h-12 w-full px-4"
            placeholder="Masukkan email"
          />
          <a className="text-xs text-[#5699fd] cursor-pointer">
            Email Anda bermasalah?
          </a>
        </div>
      </div>
      <div
        className="bg-[#5699fd] text-white flex items-center justify-center rounded-lg h-12 w-full z-10 relative cursor-pointer"
        onClick={() => (window.location.href = '/features/')}
      >
        <div className="absolute w-full flex justify-center -top-8 text-black">
          <p className="text-xs">
            Belum punya akun SATUSEHAT Mobile?{' '}
            <a className="text-[#5699fd]" href="/register/">
              Daftar
            </a>
          </p>
        </div>
        <p>Masuk</p>
      </div>
    </div>
  );
}
