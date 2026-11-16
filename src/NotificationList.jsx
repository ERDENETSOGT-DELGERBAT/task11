
const notifications = [
  {
    id: 1,
    type: 'success',
    message: 'Profile updated successfully'
  },
  {
    id: 2,
    type: 'warning',
    message: 'Password expires in 3 days'
  },
  {
    id: 3,
    type: 'info',
    message: 'New lecture materials available'
  }
];

function NotificationItem({ type, message }) {
  const icon =
    type === 'success' ? '✅' :
    type === 'warning' ? '⚠️' :
    'ℹ️';

  return (
    <li className={`notification-item ${type}`}>
      <span className="notification-icon" aria-hidden="true">
        {icon}
      </span>
      <span>{message}</span>
    </li>
  );
}

function NotificationList() {
  return (
    <section className="notification-section">
      <p className="eyebrow">PRACTICE EXERCISE 2</p>
      <h2>Notifications</h2>

      <ul className="notification-list">
        {notifications.map(notification => (
          <NotificationItem
            key={notification.id}
            type={notification.type}
            message={notification.message}
          />
        ))}
      </ul>
    </section>
  );
}

export default NotificationList;
