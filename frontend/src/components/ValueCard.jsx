// components/ValueCard.jsx
export const ValueCard = ({ icon, title, description, colorScheme = "primary" }) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    danger: "bg-danger/10 text-danger"
  };

  return (
    <div className="bg-background border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300">
      <div className="flex items-start gap-3">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClasses[colorScheme]}`}>
          {icon}
        </div>
        <div>
          <h4 className="text-base font-bold mb-1.5 text-foreground">{title}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};