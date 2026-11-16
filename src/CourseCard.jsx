
function CourseCard({ title, instructor, credits, required }) {
  return (
    <article className="course-card">
      <div className="course-card-header">
        <span className="course-code">COURSE</span>
        <span className={required ? 'course-badge required' : 'course-badge elective'}>
          {required ? '필수' : '선택'}
        </span>
      </div>

      <h3>{title}</h3>

      <div className="course-details">
        <p><strong>Instructor:</strong> {instructor}</p>
        <p><strong>Credits:</strong> {credits}</p>
      </div>
    </article>
  );
}

export default CourseCard;
