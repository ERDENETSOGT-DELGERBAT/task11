function ProfileCard({
  name,
  role,
  email,
  avatarUrl = 'https://via.placeholder.com/80'
}) {
  return (
    <div className="profile-person-card">
      <img
        src={avatarUrl}
        alt={name}
        className="profile-avatar"
      />

      <h2>{name}</h2>
      <p>{role}</p>

      <a href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  );
}

export default ProfileCard;
