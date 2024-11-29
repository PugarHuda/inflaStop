import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardBody } from "@nextui-org/card";

export default function Home() {
  return (
    <div className="relative h-screen bg-radial-gradient">
      {/* Latar Belakang */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-black"></div>

      {/* Konten Utama */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative z-10">
        <div className="inline-block max-w-xl text-center justify-center">
          {/* APY Card in the top-right corner */}
          <Card className="absolute top-0 right-4 z-20 p shadow-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
            <CardBody>
              <p className="text-lg font-bold text-green-500 dark:text-green-400">
                Max Protection Inflation 29%
              </p>
            </CardBody>
          </Card>

          <span className="text-4xl font-bold text-slate-900 dark:text-white">
            StableCoin AntiInflation &nbsp;
          </span>
          <span className="text-4xl font-bold text-violet-600 dark:text-violet-400">
            Protect Value, Achieve Stability &nbsp;
          </span>
          <div className="mt-4 text-lg text-slate-700 dark:text-slate-300">
            A blockchain-based solution designed to safeguard your assets from
            inflation while providing stability and growth opportunities.
          </div>
        </div>

        {/* Tombol */}
        <div className="flex gap-1">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/borrow"
          >
            Start
          </Link>
        </div>
      </section>
    </div>
  );
}
