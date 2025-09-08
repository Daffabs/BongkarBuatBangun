export default function ImageScroll() {
  return (
    <main className="min-h-screen px-8 lg:px-0 py-0 md:py-16">
      {/* Parallax Section */}
      <section className="h-[75vh] flex justify-center items-center">
        <div
          className="w-[700px] md:w-[1000px] lg:w-[1200px] h-[100vh] 
                     bg-fixed bg-center bg-no-repeat bg-contain 
                     rounded-2xl overflow-hidden bg-scroll-white"
          style={{ backgroundImage: "url(/images/orang.png)" }}
        />
      </section>
    </main>
  );
}
