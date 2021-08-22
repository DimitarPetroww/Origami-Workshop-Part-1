import './Link.css';

function Link({children}) {
  return (
    <li className="listItem">
        <a href="#">{children}</a>
    </li>
  );
}

export default Link;
