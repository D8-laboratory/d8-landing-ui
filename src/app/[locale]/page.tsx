import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { LifecycleVision } from "@/components/LifecycleVision";

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <LifecycleVision />
    </>
  );
}
