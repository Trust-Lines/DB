import './FooterMenu.css';

const columns = [
  { title: 'Menu', links: ['Home', 'News', 'About us'] },
  { title: 'News', links: ['Latest News', 'Blog', 'Events'] },
  { title: 'About us', links: ['Our Story', 'Our Mission', 'Our Goal'] },
];

export default function FooterMenu() {
  return (
    <nav className="fmenu">
      {columns.map((col) => (
        <div key={col.title} className="fmenu__col">
          <p className="label">{col.title}</p>
          <ul>
            {col.links.map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
