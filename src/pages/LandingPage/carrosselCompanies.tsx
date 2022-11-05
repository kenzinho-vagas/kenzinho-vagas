import { SetStateAction, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import api from '../../services/api';

interface ICompany {
    email: string,
    password: string,
    name: string,
    isAdmin: boolean,
    id: number
}

export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  const [allCompanies, setAllCompanies] = useState<ICompany[] | []>([])

  useEffect(() => {
    async function getCompanies() {
        try {
            const { data } = await api.get<ICompany[]>("/users?isAdmin=true")
            setAllCompanies(data)
        } catch (error) {
            console.error(error)
        }
    }

    getCompanies()
  }, [])

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} slide={false} variant="dark">
        {
            allCompanies.map(company => (
                <Carousel.Item>
                    <h2>{ company.name }</h2>
                    <div>
                      <h3>Número de vagas</h3>
                      <p>Lorem ipsum</p>
                    </div>
                </Carousel.Item>
            ))
        }
    </Carousel>
  );
}