import HeaderStyle from '../styles/Header.module.css';

function Header() {
  return (
    <div>
        <h1 className={HeaderStyle.title}>
            <span>WebDEV</span> News
        </h1>
        <p className={HeaderStyle.description}>Keep up to date with dev news</p>
    </div>
  )
}

export default Header