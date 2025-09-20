interface SidebarSectionProps {
  title: string;
  items: string[];
  icon: string;
  className?: string;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  items,
  icon,
  className = "",
}) => {
  return (
    <div className={className}>
      <h3 className="text-green-400/80 text-xs uppercase tracking-wider mb-3 border-b border-green-400/20 pb-1">
        {title}
      </h3>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-green-400/60 flex items-center">
            <span className="text-green-400/40 mr-2">{icon}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarSection;
