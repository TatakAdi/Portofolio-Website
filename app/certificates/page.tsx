"use client";

import { CertificateCard } from "@/components/certificates/CertificatesCard";
import { Certificate } from "@/lib/types";
import certificates from "@/data/certificates.data";
import { useInView } from "@/hooks/useInView";

const allCertificates: Certificate[] = certificates;

export default function CertificatesPage() {
  const { ref, isVisible } = useInView();
  return (
    <main
      ref={ref}
      className={`container mx-auto space-y-8 px-8 py-10 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Certificates</h2>
        <p className="max-w-2xl text-muted-foreground">
          To support my learning process, I have completed several online
          courses and certification, including programs from Dicoding. These
          certification reflect my commitment to developing practical skills and
          gaining industry-relevant knowledge beyond the classroom.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {allCertificates.map((certificates) => (
          <CertificateCard key={certificates.id} certificate={certificates} />
        ))}
      </div>
    </main>
  );
}
