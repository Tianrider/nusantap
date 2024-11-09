/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  IconArrowLeft,
  IconPlus,
  IconMessageQuestion,
  IconUserFilled,
  IconDotsVertical,
  IconDots,
  IconTrash,
} from '@tabler/icons-react';
import ScrollableFeed from 'react-scrollable-feed';
import { useEffect, useRef, useState } from 'react';

interface Profile {
  nama: string;
  tanggalLahir: string;
}

export default function Select() {
  const containerRef = useRef(null);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const count = profiles.length; // Get count from profiles array directly

  useEffect(() => {
    try {
      // Get profiles from localStorage
      const storedProfiles = localStorage.getItem('profiles');

      if (!storedProfiles) {
        // If no profiles exist in localStorage
        setProfiles([]);
        return;
      }

      const parsedProfiles = JSON.parse(storedProfiles);

      // Validate that parsedProfiles is an array
      if (Array.isArray(parsedProfiles)) {
        setProfiles(parsedProfiles);
      } else {
        setProfiles([]);
      }
    } catch (error) {
      // Handle JSON parse errors
      console.error('Error loading profiles:', error);
      setProfiles([]);
    }
  }, []);

  const calculateAge = (birthDate: string): number => {
    const birth = new Date(birthDate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    // Adjust age if birthday hasn't occurred this year
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-[400px] h-full min-h-screen bg-white shadow-2xl mx-auto relative overflow-hidden">
        <div ref={containerRef} className="h-full w-full">
          <ScrollableFeed
            className={`bg-white h-full w-full flex flex-col items-center relative px-4 py-8 justify-between shadow-2xl overflow-hidden`}
          >
            <div className="flex flex-col space-y-6 w-full items-center z-10">
              <div className="flex w-full justify-start">
                <Link href="/features">
                  <IconArrowLeft size={24} strokeWidth={3} />
                </Link>
              </div>

              <div className="w-full justify-between flex-row flex">
                <p className="font-semibold text-lg w-full">
                  Pilih Profil Anak
                </p>
                <IconMessageQuestion
                  size={24}
                  strokeWidth={2}
                  className="cursor-not-allowed"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 w-full">
                {profiles.map((profile, index) => (
                  <div key={index} className="relative">
                    <div
                      className="absolute top-[0.65rem] right-[0.65rem] text-red-400 cursor-pointer"
                      onClick={() => {
                        // Confirm delete
                        if (
                          !confirm(
                            'Apakah Anda yakin ingin menghapus profil ini?',
                          )
                        )
                          return;

                        const newProfiles = profiles.filter(
                          (_, i) => i !== index,
                        );
                        setProfiles(newProfiles);
                        localStorage.setItem(
                          'profiles',
                          JSON.stringify(newProfiles),
                        );
                      }}
                    >
                      <IconTrash size={24} strokeWidth={2} />
                    </div>
                    <div
                      className="w-full aspect-square border-2 shadow-lg rounded-xl flex flex-col items-center justify-center space-y-5 cursor-pointer"
                      onClick={() => {
                        window.location.href = `/scan?profile=${index}`;
                      }}
                    >
                      <div className="bg-[#4ae6b7] w-20 h-20 rounded-full flex items-center justify-center text-white">
                        <IconUserFilled size={36} strokeWidth={2} />
                      </div>
                      <div className="flex flex-col space-y-1 text-center">
                        <p className="text-sm font-semibold">{profile.nama}</p>
                        <p className="text-gray-400 text-xs">
                          {calculateAge(profile.tanggalLahir)} tahun
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <a
                  className={`${count >= 5 ? 'hidden' : ''} w-full aspect-square border-2 border-custblue border-dashed rounded-xl flex flex-col items-center justify-center space-y-5 text-custblue`}
                  href="/create-profile"
                >
                  <div className="bg-custlightblue w-20 h-20 rounded-full flex items-center justify-center">
                    <IconPlus size={32} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col space-y-1 text-center">
                    <p className="text-sm font-semibold">Tambah Profil Anak</p>
                    <p className="text-gray-400 text-xs">
                      Maksimal 5 profil dalam
                      <br />1 akun.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </ScrollableFeed>
        </div>
      </div>
    </div>
  );
}
