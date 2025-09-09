export default function Fotoscroll() {
  return (
    <main className="md:min-h-screen px-8 lg:px-0 py-16 md:py-16">
      {/* Parallax Section */}
      <section className="h-[25vh] sm:h-[75vh] md:h-[75vh] lg:h-[75vh] flex justify-center items-center">
        <div
          className="w-[700px] md:w-[1000px] lg:w-[1200px] h-[50vh] md:h-[100vh] sm:h-[100vh] lg:h-[100vh] 
                     bg-fixed bg-center bg-no-repeat bg-cover
                     rounded-2xl overflow-hidden"
          style={{ backgroundImage: "url(/images/l1.png)" }}
        />
      </section>
    </main>
  );
}
