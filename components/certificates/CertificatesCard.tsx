"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Certificate } from "@/lib/types";

type Props = {
  certificate: Certificate;
};

export function CertificateCard({ certificate }: Props) {
  const { title, image, year, platform } = certificate;
  return (
    <div className="group block">
      <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative aspect-3/2 w-full overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        </div>

        <CardContent className="space-y-1 p-3">
          <h3 className="text-sm font-semibold leading-tight">{title}</h3>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              {platform} · {year}
            </p>
            {certificate.isHighlighted && (
              <Badge variant="secondary" className="text-[10px]">
                Featured
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
