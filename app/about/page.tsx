"use client";

import { useInView } from "@/hooks/useInView";

type AboutSectionProps = {
  title: string;
  paragraphs: React.ReactNode[];
  blocks?: React.ReactNode[];
  isVisible: boolean;
};

function AboutSectionText({
  title,
  paragraphs,
  isVisible,
  blocks,
}: AboutSectionProps) {
  return (
    <section
      className={`space-y-6 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <div className="space-y-4">
        {paragraphs.map((text, idx) => (
          <p key={idx} className="text-foreground leading-relaxed text-justify">
            {text}
          </p>
        ))}
      </div>

      {blocks && <div className="space-y-4">{blocks}</div>}
    </section>
  );
}

export default function AboutPage() {
  const { ref, isVisible } = useInView();

  return (
    <main className="w-full min-h-screen px-6 md:px-12 py-20 flex justify-center">
      <div
        ref={ref}
        className={`max-w-5xl w-full space-y-20 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <section className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl">
            A brief overview of who I am, what I do, and how I continue to grow
            as a developer and a person
          </p>
        </section>

        <AboutSectionText
          title="Background"
          paragraphs={[
            <>
              I am a final-year Informatics student with a strong interest in
              building meaningful digital products, particularly in web
              development. I enjoy transforming ideas into clean, responsive,
              and user-focused interfaces that balances functionanly and
              aesthetics.
            </>,
            <>
              My journey in programmingstarted from academic coursework, but it
              quickly grew into a deeper curiosity about how modern web
              applications are designed, structured, and maintained. Since then,
              I have been continously improving my skills through hands-on
              projects, independent learning, and structured online programs.
            </>,
          ]}
          isVisible
        />
        <AboutSectionText
          title="What I Do"
          isVisible
          paragraphs={[
            <>
              I primarily focus on frontend development, where I work with
              technologies such as <strong>React</strong>,{" "}
              <strong>Next.js</strong>, and <strong>Tailwind CSS</strong> to
              build modern, scalable, and accessible user interfaces. I am
              comfortables translating UI design into reusable components and
              ensuring responsive behaviour accross different screen size.
            </>,
            <>
              In addition to web development, I have experience in mobile
              application development using <strong>Flutter</strong>, gained
              through academic project. This experience has helped me understand
              cross-platform development principles and strengthen my overall
              problem-solving skills.
            </>,
          ]}
        />
        <AboutSectionText
          title="Learning Mindset"
          paragraphs={[
            <>
              I believe that learningin technology is a continous process.
              Beyond formal education, I actively explore documentation, online
              courses, and real-world projects to strengthen my fundamentals and
              stay aligned with industry practices.
            </>,
            <>
              Recently, I have been deepening my undertanding of machine
              learning fundamentals, focusing on core concepts and basic model
              implementation. While still at an early stage, this exploration
              has broadened my perspective on how data-driven approaches can
              complement modern software development.
            </>,
          ]}
          isVisible
        />

        <AboutSectionText
          title="Experience & Projects"
          isVisible
          paragraphs={[
            <>
              Throughout my academic journey, I have worked on various projects
              ranging from personal experiments to structured academic
              assingment. These projects allowed me to practice building
              complete application flows, collaborating in small teams, and
              appliying best practices in version control and code organization
            </>,
            <>
              Each project has contributed to my growth not only as a developer,
              but also as a learner who values clarity, maintainability, and
              continous improvement.
            </>,
          ]}
        />
        <AboutSectionText
          title="Certifications & Achievements"
          isVisible
          paragraphs={[
            <>
              To support my learning process, I have completed several online
              courses and certification, including programs from Dicoding. These
              certification reflect my commitment to developing practical skills
              and gaining industry-relevant knowledge beyond the classroom.
            </>,
          ]}
          blocks={[
            <div
              key="certificate-carousel"
              className="border border-dashed border-border rounded-xl p-6 text-center text-muted-foreground"
            >
              Certificate carousel will be displayed here
            </div>,
          ]}
        />

        <AboutSectionText
          title="Currently"
          isVisible
          paragraphs={[
            <>
              At the moment, I am focusing on completing my final project while
              continuing to improve my technical skills. I am actively preparing
              myself for intership opportunities where I can contibute to
              real-world projects, learn from experienced developers, and grow
              in a profesional environment.
            </>,
          ]}
        />

        <section className="pt-10 border-t border-border space-y-4">
          <h3 className="text-2xl font-semibold">Let's Connect</h3>
          <p className="text-muted-foreground max-w-xl">
            I am always open to new learning opportunities, collaborations, and
            challenges. Feel free to explore my projects or get in touch.
          </p>
        </section>
      </div>
    </main>
  );
}
