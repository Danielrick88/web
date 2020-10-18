import React from 'react';
import styles from './contributors.module.css';
import PersonasSection from '../personas-section/personas-section';
import Button from '../UI/button/button';

const Contributors = () => {
  const contributors = [
    {
      rol: "Co-Organizador",
      name: "Richard Palacios G",
      photo: "https://avatars0.githubusercontent.com/u/11642622?v=4",
      github: "https://richardpalaciosg.dev/",
      website: "https://richardpalaciosg.dev/",
      email: "https://richardpalaciosg.dev/",
      twitter: "https://richardpalaciosg.dev/",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit id tempus cras orci accumsan, commodo semper sagittis consequat turpis hac malesuada felis nisi senectus est. "
    },
    {
      rol: "Co-Organizador",
      name: "Edisson Reinozo",
      photo: "https://avatars3.githubusercontent.com/u/14936466?v=4",
      github: "http://edzzn.com/",
      website: "http://edzzn.com/",
      email: "http://edzzn.com/",
      twitter: "http://edzzn.com/",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit id tempus cras orci accumsan, commodo semper sagittis consequat turpis hac malesuada felis nisi senectus est. "
    },
    {
      rol: "Co-Organizador",
      name: "Israel Teneda",
      photo: "https://avatars2.githubusercontent.com/u/20668624?v=4",
      github: "https://github.com/israteneda",
      website: "https://github.com/israteneda",
      email: "https://github.com/israteneda",
      twitter: "https://github.com/israteneda",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit id tempus cras orci accumsan, commodo semper sagittis consequat turpis hac malesuada felis nisi senectus est. "
    },
    {
      rol: "Co-Organizador",
      name: "Jordan Jaramillo",
      photo: "https://avatars2.githubusercontent.com/u/62086742?v=4",
      github: "https://github.com/jordanrjcode",
      website: "https://github.com/jordanrjcode",
      email: "https://github.com/jordanrjcode",
      twitter: "https://github.com/jordanrjcode",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit id tempus cras orci accumsan, commodo semper sagittis consequat turpis hac malesuada felis nisi senectus est. "
    },
    {
      rol: "Co-Organizador",
      name: "Eduardo Ayora Ochoa",
      photo: "https://avatars1.githubusercontent.com/u/49033198?v=4",
      github: "https://github.com/EduardoAyora",
      website: "https://github.com/EduardoAyora",
      email: "https://github.com/EduardoAyora",
      twitter: "https://github.com/EduardoAyora",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit id tempus cras orci accumsan, commodo semper sagittis consequat turpis hac malesuada felis nisi senectus est. "
    },
    {
      rol: "Co-Organizador",
      name: "David Padilla",
      photo: "https://avatars3.githubusercontent.com/u/25573926?v=4",
      github: "https://www.davidpadilla.dev/",
      website: "https://www.davidpadilla.dev/",
      email: "https://www.davidpadilla.dev/",
      twitter: "https://www.davidpadilla.dev/",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit id tempus cras orci accumsan, commodo semper sagittis consequat turpis hac malesuada felis nisi senectus est. "
    },
    {
      rol: "Co-Organizador",
      name: "Freddy Abad",
      photo: "https://avatars0.githubusercontent.com/u/38579765?v=4",
      github: "https://github.com/FreddieAbad",
      website: "https://github.com/FreddieAbad",
      email: "https://github.com/FreddieAbad",
      twitter: "https://github.com/FreddieAbad",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit id tempus cras orci accumsan, commodo semper sagittis consequat turpis hac malesuada felis nisi senectus est. "
    },
    {
      rol: "Co-Organizador",
      name: "Miguel Rios R",
      photo: "https://avatars3.githubusercontent.com/u/25510181?v=4",
      github: "https://miguelriosr.com/",
      website: "https://miguelriosr.com/",
      email: "https://miguelriosr.com/",
      twitter: "https://miguelriosr.com/",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit id tempus cras orci accumsan, commodo semper sagittis consequat turpis hac malesuada felis nisi senectus est. "
    },
    {
      rol: "Co-Organizador",
      name: "Carlos G. Encalada B.",
      photo: "https://avatars2.githubusercontent.com/u/55223838?v=4",
      github: "http://karlosencalada.dev",
      website: "http://karlosencalada.dev",
      email: "http://karlosencalada.dev",
      twitter: "http://karlosencalada.dev",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit id tempus cras orci accumsan, commodo semper sagittis consequat turpis hac malesuada felis nisi senectus est. "
    }
  ]
  const title = "Contribuidores"
  const description = "Personas que han contribuido con su conocimiento en nuestra comunidad."
  return (
    <div className={styles.contributors}>
      <PersonasSection title={title} description={description} personas={contributors}/>
      <div className={styles.contributors__add}>
        <Button type="tertiary" >Agregarme a este panel</Button>
      </div>
    </div>
  )
}

export default Contributors;
