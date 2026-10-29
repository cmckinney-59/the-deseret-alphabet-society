import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import DeseretTable from "./DeseretTable";

export default function DeseretHowToRead() {
  return (
    <CollapsibleSection title="How To Read" defaultExpanded={true}>
      <DeseretTable />
    </CollapsibleSection>
  );
}
