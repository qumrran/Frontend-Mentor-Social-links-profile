import './buttonPanel.scss'


function ButtonPanel ({person}) {
    return (
        <section className='btnPanel'>
        <a href={person.socialMedia.github} className='btnPanel__button'>Github</a>
        <a href={person.socialMedia.frontendMentor} className='btnPanel__button'>Frontend Mentor</a>
        <a href={person.socialMedia.linkedin} className='btnPanel__button'>LinkedIn</a>
        <a href={person.socialMedia.twitter} className='btnPanel__button'>Twitter</a>
        <a href={person.socialMedia.instagram} className='btnPanel__button'>Instagram</a>
        </section>
       
    )
}


export default ButtonPanel;