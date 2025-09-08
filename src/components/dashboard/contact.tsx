// src/app/footer/page.tsx
"use client";

import Link from "next/link";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_3bd7btq", // ganti dengan Service ID dari EmailJS
          "template_c2zcbgm", // ganti dengan Template ID
          formRef.current,
          "L3-IMEVSw4TNvfdB-" // ganti dengan Public Key dari EmailJS
        )
        .then(
          () => {
            alert("✅ Pesan berhasil dikirim!");
            formRef.current?.reset();
          },
          (error) => {
            alert("❌ Gagal mengirim pesan: " + error.text);
          }
        );
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center py-8 sm:py-10 md:py-14 lg:py-0">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-12 w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Left Section */}
        <div className="flex flex-col justify-between bg-neutral-900 p-4 sm:p-6 md:p-8 rounded-2xl">
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <Link href="/" className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Beranda
            </Link>
            <Link href="/indexaboutus" className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Tentang Kami
            </Link>
            <Link href="/indexkarya" className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Karya
            </Link>
            <Link href="/indexservice" className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Layanan
            </Link>
            <Link href="/indexkontak" className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Kontak
            </Link>
          </div>

          {/* <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-400 mt-6 sm:mt-8 gap-2 sm:gap-0">
            <Link href="#">Privacy Policy ➝</Link>
            <Link href="#">Terms & conditions ➝</Link>
          </div> */}
        </div>

        {/* Middle Section */}
        <div className="flex flex-col justify-between space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-neutral-900 p-3 sm:p-4 rounded-2xl text-sm sm:text-base">bongkarbuatbangun@gmail.com</div>
            <div className="bg-neutral-900 p-3 sm:p-4 rounded-2xl text-sm sm:text-base">+62 8953-5640-1866</div>
            <div className="bg-neutral-900 p-3 sm:p-4 rounded-2xl text-sm sm:text-base">Jl. Muararajeun Kulon No.7</div>

            {/* Maps Embed */}
            <div className="bg-neutral-900 rounded-2xl overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.007865239463!2d110.36621651526245!3d-7.824556794352037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578c72602139%3A0x6d7f5a71d64d1e11!2sJl.%20Muararajeun%20Kulon%20No.7!5e0!3m2!1sid!2sid!4v1699999999999!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col bg-neutral-900 p-4 sm:p-6 md:p-8 rounded-2xl">
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-white">Form Kontak</h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="Nama Depan"
                required
                className="w-full sm:w-1/2 px-3 py-2 sm:py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm sm:text-base"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Nama Belakang"
                required
                className="w-full sm:w-1/2 px-3 py-2 sm:py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm sm:text-base"
              />
            </div>
            <input type="email" name="email" placeholder="Email" required className="w-full px-3 py-2 sm:py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm sm:text-base" />
            <input type="title" name="title" placeholder="Subjek" required className="w-full px-3 py-2 sm:py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm sm:text-base" />
            <textarea name="message" rows={4} placeholder="Pesan Anda" required className="w-full px-3 py-2 sm:py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm sm:text-base"></textarea>
            <button type="submit" className="w-full bg-lime-300 text-black font-semibold py-2 sm:py-3 rounded-lg hover:bg-lime-500 transition text-sm sm:text-base">
              Kirim
            </button>
          </form>
          <div className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6">Bongkar Buat Bangun © 2025</div>
        </div>
      </div>
    </div>
  );
}
