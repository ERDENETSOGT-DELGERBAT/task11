
import StudentProfileCard from './StudentProfileCard.jsx';
import ProfileCard from './ProfileCard.jsx';
import NotificationList from './NotificationList.jsx';
import Card from './Card.jsx';
import CourseCatalog from './CourseCatalog.jsx';

function App() {
  return (
    <main className="app-container">
      <header className="page-header">
        <p className="eyebrow">GACHON UNIVERSITY</p>
        <h1>Student Directory</h1>
        <p className="subtitle">Computer Engineering · Year 2</p>
      </header>

      <section className="student-grid" aria-label="Student profiles">
        <StudentProfileCard
          name="Erdenetsogt Delgerbat"
          studentId="202539430"
          major="Computer Engineering"
          year={2}
          gpa="4.1"
        />

        <StudentProfileCard
          name="Erdenesambuu"
          studentId="202539462"
          major="Computer Engineering"
          year={2}
          gpa="4.0"
        />

        <StudentProfileCard
          name="Chingun"
          studentId="202539480"
          major="Computer Engineering"
          year={2}
          gpa="3.8"
        />
      </section>

      <section className="practice-section">
        <p className="eyebrow">PRACTICE EXERCISE 1</p>
        <h2>Profile Card Component</h2>

        <ProfileCard
          name="Dr. Toshpulatov"
          role="Professor"
          email="muhiddin@gachon.ac.kr"
        />
      </section>

      <NotificationList />

      <section className="practice-section">
        <p className="eyebrow">PRACTICE EXERCISE 3</p>
        <h2>Reusable Card Component</h2>

        <div className="content-card-grid">
          <Card title="Lecture Topics">
            <ul className="card-list">
              <li>React Components</li>
              <li>Props</li>
              <li>Rendering Lists</li>
            </ul>
          </Card>

          <Card title="Homework">
            <p>
              Build a React Portfolio Gallery using reusable
              components, project data, and technology filters.
            </p>
          </Card>
        </div>
      </section>

      <CourseCatalog />

      <footer className="page-footer">
        Web Programming · Week 11 · React Components & Props
      </footer>
    </main>
  );
}

export default App;
