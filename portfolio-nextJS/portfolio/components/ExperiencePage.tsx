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
        `Architected and implemented RESTful APIs, ensuring data flow and integration with microservices.`,
        `Engineered and optimised client-side components, enhancing performance and user experience.`,
        `Developed and deployed responsive web applications using Next.js, contributing to the full software development lifecycle from ideation to deployment.`,
        `Boosted application performance by 30% through client-side optimizations.`,
        `Successfully delivered 5 major features.`,
      ],
      from: "May",
      to: "Nov",
      year: "2023",
    },
  ];

  return (
    <Card>
      <div className="flex flex-col md:mt-0 md:pt-0 pt-24 w-full">
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
