// components/PageHeader.tsx
type PageHeaderProps = {
  title: string;
  subtitle?: string;
  patternClassName?: string; // for different bg patterns
};

export default function PageHeader({
  title,
  subtitle,
  patternClassName,
}: PageHeaderProps) {
  return (
    <div className="services-wrapper mb-8">
      <div className="border-b-1 border-cru-border pt-8">
        <div className="container">
          {subtitle && <h4>{subtitle}</h4>}
          <h1>{title}</h1>
          {patternClassName && (
            <div className={`${patternClassName} w-full h-15 mt-12`} />
          )}
        </div>
      </div>
    </div>
  );
}
