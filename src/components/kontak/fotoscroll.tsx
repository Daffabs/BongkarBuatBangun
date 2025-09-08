export default function Fotoscroll() {
  return (
    <main className="min-h-screen px-8 lg:px-0 py-16 md:py-36">
      {/* Parallax Section */}
      <section className="h-[75vh] flex justify-center items-center">
        <div className="w-[700px] md:w-[1000px] lg:w-[1200px] h-[100vh] rounded-2xl overflow-hidden">
          <video
            src="/video/laptop.mp4" // ganti dengan path video kamu
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
