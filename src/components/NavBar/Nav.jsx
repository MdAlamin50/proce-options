import Links from "../Links/Links";

const Nav = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "NotFound", path: "*" },
  ];

  return (
    <div>
        <ul className="md:flex">
            {
                routes.map(route => <Links key={route.id} route={route}></Links>)
            }
        </ul>
    </div>
  );
};

export default Nav;