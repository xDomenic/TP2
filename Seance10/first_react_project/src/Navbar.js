// Compoennt example
const NavItems = [
  { title: "Acceuil", link: "/" },
  { title: "Contact", link: "/contact" },
  { title: "info", link: "/info" },
];

export const Navbar = () => {
  return (
    <nav>
      <ul>
        {NavItems.map((e) => {
          return <li> {e.title} </li>;
        })}
      </ul>
    </nav>
  );
};
