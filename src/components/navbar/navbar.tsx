import "./navbar.css";
type navprops = {
  title: string;
  navData: Array<{ name: string; path: string }>;
};

export const Navbar = (props: navprops) => {
  const navElements = props.navData.map((item, index: number) => (
    <li key={index}>
      <a href={item.path}>{item.name} </a>
    </li>
  ));

  return (
    <header>
      <h1 id="nav-title"> {props.title}</h1>
      <nav>
        <ul>{navElements}</ul>
      </nav>
    </header>
  );
};
