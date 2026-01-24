import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { benefitOne, benefitTwo } from "@/components/data";
import { TranslatedText } from "@/components/client/TranslatedText";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle={<TranslatedText i18nKey="section2.benefitsPreTitle" />}
        title={<TranslatedText i18nKey="section2.contractus" />}
      >
       <TranslatedText i18nKey="section2.description" />
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

    </Container>
  );
}
