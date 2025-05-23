import COURSES from "../courses.json";
import Card from "./Card";
import ScrollFadeInWrapper from "./custom/ScrollFadeInWrapper";

const Courses = () => {
  return (
    <section id="courses" className="">
      <div className="flex flex-col gap-5">
        <h2 className="md:hidden text-6xl font-thin text-slate-300 my-10">
          <span className="font-bold">LEARNING</span> PATH
        </h2>
        {COURSES.map((course) => (
          <ScrollFadeInWrapper key={course.course}>
            <Card
              from={course.time.from}
              to={course.time.to}
              role={course.course}
              place={course.academy}
              description={course.description}
              technologies={course.technologies}
              learning
              href={course.certificate}
            />
          </ScrollFadeInWrapper>
        ))}
      </div>
    </section>
  );
};

export default Courses;
