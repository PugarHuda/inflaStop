import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <Card className="card ">
          <CardBody>
            <p>APY 29%</p>
          </CardBody>
        </Card>
        <span className={title()}>StableCoin AntiInflation &nbsp;</span>
        <span className={title({ color: "violet" })}>
          Protect Value, Achieve Stability &nbsp;
        </span>
        <br />
        <span className={title()}></span>
        <div className={subtitle({ class: "mt-4" })}>
          A blockchain-based solution designed to safeguard your assets from
          inflation while providing stability and growth opportunities.
        </div>
      </div>

      <div className="flex gap-3">
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
        {/* <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link> */}
      </div>

      <div className="mt-8">
        {/* <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet> */}
      </div>
    </section>
  );
}
