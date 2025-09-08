export default function FotoScroll() {
  return (
    <main className="min-h-screen px-0 py-0 md:py-16">
      {/* Parallax Section */}
      <section className="h-[75vh] flex justify-center items-center">
        <div
          className="w-full max-w-[1200px] h-[100vh] 
                     bg-fixed bg-center bg-no-repeat bg-cover
                     rounded-2xl overflow-hidden"
          style={{ backgroundImage: "url(/images/barudak/semua2.png)" }}
        />
      </section>
    </main>
  );
}
