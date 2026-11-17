import type { ReactNode } from "react";
import { useState } from "react";

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export default function CollapsibleSection({
  title,
  children,
  defaultExpanded = false,
  className = "",
}: CollapsibleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`collapsible-section ${className}`}>
      <button
        type="button"
        className="collapsible-header"
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
      >
        <h2 className="collapsible-title">{title}</h2>
        <span className={`collapsible-icon ${isExpanded ? "expanded" : ""}`}>
          ▼
        </span>
      </button>
      <div
        className={`collapsible-content ${isExpanded ? "expanded" : ""}`}
        hidden={!isExpanded}
      >
        {/*
          Only mount children while expanded so heavy embeds (PDF iframes,
          large asset grids) do not load or download when the section is closed.
        */}
        {isExpanded ? (
          <div className="collapsible-content-inner">{children}</div>
        ) : null}
      </div>
    </div>
  );
}
