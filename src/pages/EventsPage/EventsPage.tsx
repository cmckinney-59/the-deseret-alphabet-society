import PageTitle from "../../components/PageTitle/PageTitle";
import "./EventsPage.css";

export default function EventsPage() {
  return (
    <article className="eventsPage">
      <PageTitle title="Events" />
      <p className="eventsPageLead">
        Gatherings, lectures, and workshops related to the Deseret Alphabet will
        be listed here.
      </p>
      <p className="eventsPageEmpty">No upcoming events are scheduled yet.</p>
    </article>
  );
}
