import './header.scss';
import person from '../person.js';



function header() {
    return (
      <header className="header">
        <img src={person.image} alt={person.alt} />
        <h1 className="header__title">{person.name}</h1>
        <p className="header__subtitle">{person.location}</p>
        <p className="header__description">{person.description}</p>
      </header>
    );
  }



export default header;