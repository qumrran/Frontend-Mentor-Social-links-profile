import './buttonPanel.scss'


function ButtonPanel ({person}) {
    return (
        <section>
        <a href={person.socialMedia.github} className='btnPanel_button'>Github</a>
        <a href={person.socialMedia.frontendMentor} className='btnPanel_button'>Frontend Mentor</a>
        <a href={person.socialMedia.linkedin} className='btnPanel_button'>LinkedIn</a>
        <a href={person.socialMedia.twitter} className='btnPanel_button'>Twitter</a>
        <a href={person.socialMedia.instagram} className='btnPanel_button'>Instagram</a>
        </section>
       
    )
}


export default ButtonPanel;