
import CourseCard from './CourseCard.jsx';

const courses = [
  {
    id: 1,
    title: 'Web Programming',
    instructor: 'Dr. Toshpulatov',
    credits: 3,
    required: true
  },
  {
    id: 2,
    title: 'Database Systems',
    instructor: 'Dr. Kim',
    credits: 3,
    required: true
  },
  {
    id: 3,
    title: 'Mobile App Dev',
    instructor: 'Dr. Lee',
    credits: 2,
    required: false
  }
];

function CourseCatalog() {
  return (
    <section className="practice-section course-catalog-section">
      <p className="eyebrow">PRACTICE CHALLENGE</p>
      <h2>Course Catalog</h2>

      <p className="course-intro">
        Example courses with instructor information, credits,
        and course requirements.
      </p>

      <div className="course-grid">
        {courses.map(course => (
          <CourseCard
            key={course.id}
            title={course.title}
            instructor={course.instructor}
            credits={course.credits}
            required={course.required}
          />
        ))}
      </div>
    </section>
  );
}

export default CourseCatalog;
