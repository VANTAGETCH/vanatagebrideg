import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  eager?: boolean;
};

export function BrandMark({ className = "h-10 w-auto", eager = false }: BrandMarkProps) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={4096}
      height={2354}
      sizes="160px"
      quality={100}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      className={className}
    />
  );
}
