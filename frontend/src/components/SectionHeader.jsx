// components/SectionHeader.jsx
export const SectionHeader = ({ label, title, description }) => {
  return (
    <div>
      <div className="mb-3">
        <span className="text-[10px] text-primary tracking-widest font-semibold uppercase">
          {label}
        </span>
      </div>
      <h2 className="text-3xl font-black mb-4 text-foreground italic leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};