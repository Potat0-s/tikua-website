interface FlavorCardProps {
  name: string;
  subtitle: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  image: string;
  benefits: string[];
}

export default function FlavorCard({
  name,
  subtitle,
  description,
  color,
  icon,
  image,
  benefits,
}: FlavorCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${color}20 0%, ${color}05 100%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${color}15` }}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-foreground">
              {name}
            </h3>
            <p className="text-sm" style={{ color }}>
              {subtitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground/70 text-sm mb-4">{description}</p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-2">
          {benefits.map((benefit) => (
            <span
              key={benefit}
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                backgroundColor: `${color}15`,
                color: color,
              }}
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
