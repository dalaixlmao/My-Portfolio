import Card from "./Card";
import Experience from "./Experience";
import Headers from "./Headers";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Reslink",
      companyLink: "https://www.reslink.org/",
      description: [
        `Developed and maintained 10+ Restful APIs using Node.js and Express.js, ensuring smooth data flow for over 1000+ active users across the platform’s services, including project management and user profiles.`,
        `Played a key role in implementing the Project Service, allowing companies to create, manage, and track 50+ R&D projects efficiently. Integrated this with PostgreSQL using Prisma ORM reducing query execution time by 30% and improving data accuracy. allowing the platform to handle 200 additional concurrent users seamlessly.`,
        `Improved frontend performance of project and user dashboards by reducing load times by 20% using optimizations like code splitting and lazy loading, resulting in a 15% increase in user engagement, contributing to smoother interactions and higher retention rates.`,
        `Worked with 5+ cross-functional teams to develop features that streamlined the R&D process, improving project tracking accuracy by 25% and reducing milestone completion time by 15%.`,
      ],
      from: "May",
      to: "Nov",
      year: "2023",
    },
  ];

  return (
    <Card>
      <div className="z-10 flex flex-col md:mt-0 md:pt-0 pt-24 w-full">
        <Headers text="Experience" />
        <div className="flex flex-col mt-7">
          {experiences.map((elem, index) => {
            const { title, company, companyLink, description, from, to, year } =
              elem;
            return (
              <Experience
              key={index}
                title={title}
                company={company}
                companyLink={companyLink}
                description={description}
                from={from}
                to={to}
                year={year}
              />
            );
          })}
        </div>
      </div>
    </Card>
  );
}
