import COURSES from "../courses.json";
import Card from "./Card";

const Courses = () => {
  return (
    <section id="courses" className="">
      <div className="flex flex-col gap-5">
        {COURSES.map((course) => (
          <Card
            key={course.course}
            from={course.time.from}
            to={course.time.to}
            role={course.course}
            place={course.academy}
            description={course.description}
            technologies={course.technologies}
            learning
            href={course.certificate}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
