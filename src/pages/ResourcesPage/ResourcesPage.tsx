import PageTitle from "../../components/PageTitle/PageTitle";
import DeseretDocuments from "../../components/HowToRead/Deseret/DeseretDocuments";
import DeseretMoreResources from "../../components/HowToRead/Deseret/DeseretMoreResources";
import CollapsibleSection from "../../components/CollapsibleSection/CollapsibleSection";
import ProjectTiles from "../ProjectsPage/ProjectTiles";
import { PROJECTS_DATA as DESERET_PROJECTS_DATA } from "../../data/DeseretData/DESERET_PROJECTS_DATA";
import "../ProjectsPage/ProjectsPage.css";
import "./ResourcesPage.css";

export default function ResourcesPage() {
  return (
    <div className="resourcesPage">
      <PageTitle title="Resources" />

      <DeseretDocuments />
      <DeseretMoreResources />

      <CollapsibleSection title="ScriptWorks Projects" defaultExpanded={true}>
        <p>
          Completed Deseret Alphabet transcriptions you can preview and
          download.
        </p>
        <div className="projectsPage projectsPage--tiles resourcesProjects">
          <ProjectTiles projects={DESERET_PROJECTS_DATA} />
        </div>
      </CollapsibleSection>
    </div>
  );
}
