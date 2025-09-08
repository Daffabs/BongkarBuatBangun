import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const audio = audioRef.current;
    if (audio) {
      const playAudio = () => {
        audio.play().catch((e) => {
          console.warn("Autoplay blocked:", e);
        });
        document.removeEventListener("click", playAudio);
      };

      // Trigger audio play setelah klik pertama (untuk menghindari blokir autoplay)
      document.addEventListener("click", playAudio);
    }
  }, []);

  return (
    <>
      {/* Audio backsound global */}
      <audio ref={audioRef} loop>
        <source src="/backsound/itiraf2.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <Component {...pageProps} />
    </>
  );
}
