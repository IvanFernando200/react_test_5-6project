const UserLogged = ({ setUser, user }) => {
  const handleLogout = () => {
    localStorage.clear("token");
    localStorage.clear("user");
    setUser();
  };

  return (
    <article>
      <header>
        <img
          src={
            user?.gender === "female"
              ? "/user-female-icon.jpeg"
              : "/user-male-icon.jpg"
          }
          alt=""
        />
      </header>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <button onClick={handleLogout}>Logout</button>
    </article>
  );
};

export default UserLogged;
