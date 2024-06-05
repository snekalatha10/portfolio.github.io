import type { NextPage } from "next";

const Academics: NextPage = () => {
  return (
    <main>
      <section className="about section py-8" id="about">
        <div className="container mx-auto px-4">
          <div className="row mb-8 justify-center">
            <div className="education p-4 text-center">
              <div className="text-center mb-12">
                <h1 className="text-white font-semibold text-5xl">Education</h1>
              </div>
              <div className="timeline p-4 rounded shadow-md inline-block">
                {[
                  {
                    date: "2019 to 2024",
                    title: "MSc Software System",
                    description:
                      "From 2019 I started my journey to become an Software Engineer from PSG College of Arts & Science, Coimbatore to being an Tech enthusiast."
                  },
                  {
                    date: "May 2019",
                    title: "Higher Secondary School Education",
                    description:
                      "In 2019 I passed HSC from Jai Saradha Matric Hr Sec School with 82%."
                  },
                  {
                    date: "May 2017",
                    title: "SSLC",
                    description:
                      "In 2017 I passed SSLC from Jai Saradha Matric Hr Sec School with 96%."
                  }
                ].map(({ date, title, description }) => (
                  <div key={title} className="timeline-item mb-4 text-white">
                    <div className="circle-dot bg-blue-500 w-3 h-3 rounded-full inline-block" />
                    <h6 className="timeline-date text-gray-500 inline-block ml-2">
                      <i className="fa fa-calendar" /> {date}
                    </h6>
                    <h4 className="timeline-title font-semibold mt-2">{title}</h4>
                    <p className="timeline-text mt-2">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row mb-8">
            <div className="experience text-center p-4">
              <div className="text-center mb-12">
                <h1 className="text-white font-semibold text-5xl">Experience</h1>
              </div>
              <div className="timeline p-4 rounded shadow-md">
                {[
                  {
                    date: "Nov 2023 to May 2024",
                    title: "Frontend Developer Intern",
                    description:
                      "During my time at MindGraph Technologies Pvt Ltd, I served as a Frontend Developer Intern, where I had the opportunity to work with cutting-edge technologies like Next.js and React.js. I took pride in crafting clean and efficient code to develop responsive and user-friendly websites. Collaborating closely with my team, I diligently translated requirements into tangible solutions, ensuring that our projects met and exceeded expectations."
                  },
                  {
                    date: "Jun 2022 to Nov 2022",
                    title: "SEO & PHP Developer Intern",
                    description:
                      "During my internship period, I delved into the realm of digital marketing during my tenure at Boostability Pvt Ltd, where I immersed myself in the world of SEO and PHP development. I spearheaded various initiatives to enhance website visibility and engagement, employing strategies such as keyword research, internal link building, and SEO audit analysis. Crafting compelling email templates and writing engaging blogs further showcased my versatility and dedication to delivering impactful results."
                  }
                ].map(({ date, title, description }) => (
                  <div key={title} className="timeline-item mb-4 text-white">
                    <div className="circle-dot bg-blue-500 w-3 h-3 rounded-full inline-block" />
                    <h6 className="timeline-date text-gray-500 inline-block ml-2">
                      <i className="fa fa-calendar" /> {date}
                    </h6>
                    <h4 className="timeline-title font-semibold mt-2">{title}</h4>
                    <p className="timeline-text mt-2">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academics;
