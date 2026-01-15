"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Certificate } from "@/lib/types";
import { CertificateCard } from "./CertificatesCard";

type Props = {
  certificates: Certificate[];
};

export function CertificateCarousel({ certificates }: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {certificates.map((cert) => (
          <CarouselItem
            key={cert.id}
            className="basis-[70%] sm:basis-1/2 md:basis-1/4"
          >
            <CertificateCard certificate={cert} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
