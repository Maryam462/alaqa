import Image from "next/image";
import type { ComponentType, CSSProperties } from "react";

const originalAssets: Record<string, string> = {
  Python: "python", Figma: "figma", GCP: "googlecloud", Firebase: "firebase",
};

export function TechnologyIcon({ name, Icon, color, className }: {
  name: string; Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color: string; className?: string;
}) {
  const asset = originalAssets[name];
  return asset
    ? <Image src={"/images/technologies/" + asset + ".svg"} alt="" aria-hidden width={32} height={32} unoptimized style={{ filter: "none" }} className={className} />
    : <Icon className={className} style={{ color }} />;
}
