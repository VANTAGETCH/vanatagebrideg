type BrandMarkProps = {
  className?: string;
  eager?: boolean;
};

export function BrandMark({ className = "h-10 w-auto", eager = false }: BrandMarkProps) {
  return (
    <img
      src="/logo.svg"
      alt="Vantage Bridge Technologies logo"
      width={900}
      height={517}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      className={className}
    />
  );
}
