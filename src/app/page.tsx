import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { DigitalProducts } from "@/components/sections/DigitalProducts";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <Services />
      <Solutions />
      <Projects />
      <Process />
      <About />
      <TechStack />
      <WhyWorkWithMe />
      <DigitalProducts />
      <FAQ />
      <Contact />
    </>
  );
}
