import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col border-2 border-black bg-transparent transition-all duration-150 hover:outline hover:outline-2 hover:outline-black",
        className,
      )}
    >
      {header}
      <div className="p-4">
        {icon}
        <div className="font-[family-name:var(--font-ibm-plex-mono)] font-bold text-lg text-black">
          {title}
        </div>
        <div className="font-[family-name:var(--font-ibm-plex-mono)] text-xs font-normal text-black mt-1">
          {description}
        </div>
      </div>
    </div>
  );
};
