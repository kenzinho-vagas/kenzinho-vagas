import { useEffect, useState } from 'react'
import Email from '../../img/email.png'
import Level from '../../img/level.png'
import Linkedin from '../../img/linkedin.png'
import Stack from '../../img/stack.png'
import api from '../../services/api'

function CardCandidates({ elem }) {
    const [candidate, setCandidate] = useState(null)
    async function getCandidate() {
        try {
            const {data} = await api.get(`users/${elem.userId}`)
            setCandidate(data)
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        getCandidate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


  return (
    candidate ? (<li>
        <h3>{candidate.name}</h3>
        <p>
          <img src={Email} alt="Logo email" />
          {candidate.email}
        </p>
        <p>
          <img src={Level} alt="Level" />
          Júnior
        </p>
        <p>
          <img src={Linkedin} alt="" /> {candidate.linkedin}
        </p>
        <p>
          <img src={Stack} alt="Stack" />
          {candidate.level}
        </p>
      </li>) : (
              <li>
                  <h2>Não há candidatos</h2>
              </li>
      )
  );
}

export default CardCandidates;