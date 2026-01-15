import { Certificate } from "@/lib/types";
import { CertificateCarousel } from "@/components/certificates/CertificatesCarousel";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";

type CertificateProps = {
  certificates: Certificate[];
};

export default function CertificatesSection({
  certificates,
}: CertificateProps) {
  const { ref, isVisible } = useInView();
  const highlighted = certificates.filter((c) => c.isHighlighted);
  return (
    <section id="certificates" className="py-24 overflow-x-hidden">
      <div
        ref={ref}
        className={`flex items-center justify-between transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6">Certifications</h2>
        <Link
          href="/certificates"
          className="text-sm text-muted-foreground hover:underline hover:text-foreground"
        >
          View All
        </Link>
      </div>
      <div
        ref={ref}
        className={`relative overflow-hidden transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <CertificateCarousel certificates={highlighted} />
      </div>
    </section>
  );
}
