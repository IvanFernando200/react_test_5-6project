import { Outlet } from "react-router-dom";

const FooterPage = () => {
  return (
    <div>
      <Outlet />
      <footer>THis work is made with love ❤</footer>
    </div>
  );
};

export default FooterPage;
