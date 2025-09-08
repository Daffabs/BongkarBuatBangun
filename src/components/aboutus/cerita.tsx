import { Button } from "@/components/ui/button";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    // src: string;
    // alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const Cerita = ({
  mainImage = {
    src: "/images/logo_lampu2.png",
    alt: "placeholder",
  },
  secondaryImage = {
    src: "/images/orang2.png",
    alt: "placeholder",
  },
  breakout = {
    // src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    // alt: "logo",
    title: "Wujudkan Bersama BBB",
    description: "BBB hadir sebagai sahabat dalam mewujudkan visi kawan terutama dalam menghadirkan solusi IT, menciptakan karya visual yang menginspirasi, dan membangun proyek dengan integritas.",
    buttonText: "Hubungi Kami ➝",
    buttonUrl: "/indexkontak",
  },
}: About3Props = {}) => {
  return (
    <section className="py-0">
      <div className="container">
        <div className="grid gap-7 lg:grid-cols-3">
          <img src={mainImage.src} alt={mainImage.alt} className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2" />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              {/* <img src={breakout.src} alt={breakout.alt} className="mr-auto h-12" /> */}
              <div>
                <p className="mb-2 text-2xl font-semibold text-black">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto border-black text-black hover:border-blue-500 hover:text-blue-500" asChild>
                <a href={breakout.buttonUrl} target="_blank">
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
            <img src={secondaryImage.src} alt={secondaryImage.alt} className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cerita };
