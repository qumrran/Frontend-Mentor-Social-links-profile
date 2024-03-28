import './header.scss';



function Header({person}) {
    return (
      <header className="header">
        <img className='header__avatar' src={person.image} alt={person.alt} />
        <h1 className="header__title">{person.name}</h1>
        <p className="header__subtitle">{person.location}</p>
        <p className="header__description">{person.description}</p>
      </header>
    );
  }



export default Header;