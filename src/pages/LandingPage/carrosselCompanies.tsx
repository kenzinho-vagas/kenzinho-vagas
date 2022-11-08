import { SetStateAction, useEffect, useState } from 'react';
import { IJobsProps } from '../../components/Cards';
import Carousel from 'react-bootstrap/Carousel';
import api from '../../services/api';

interface ICompany {
    email: string,
    password: string,
    name: string,
    isAdmin: boolean,
    id: number;
}

interface ICompanyInfo {
  name: string, 
  jobs: number;
}

export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  const [allCompanies, setAllCompanies] = useState<ICompany[] | []>([]);
  const [companiesData, setCompaniesData] = useState<ICompanyInfo[]| []>([]);
  const [uniqueCompaniesData, setUniqueCompaniesData] = useState<ICompanyInfo[]| []>([]);

  useEffect(() => {
    async function getCompanies() {
        if (allCompanies) {
          try {
            const { data } = await api.get<ICompany[]>("/users?isAdmin=true");
            setAllCompanies(data);
          } catch (error) {
            console.error(error);
          }
        }
    }

    getCompanies()
  }, [])

  useEffect(() => {
    async function getJobsCompanies() {
      try {
        allCompanies.forEach(async (company) => {
          const { data } = await api.get<IJobsProps[]>(`/companyJobs?company_name=${company.name}`);
          setCompaniesData((previousData) => [...previousData, {name: company.name, jobs: data.length}]);
        })
      } catch (error) {
          console.error(error);
      }
    }
    
    getJobsCompanies()
  }, [allCompanies])

  useEffect(() => {
    const dataNotDuplicated = Array.from(new Set(companiesData.map(company => company.name)))
    .map(nameEl => {
      return companiesData.find(company => company.name === nameEl)
    })

    console.log(dataNotDuplicated)
    setUniqueCompaniesData(dataNotDuplicated)
  }, [])
  
  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} slide={false} variant="dark">
        {
            uniqueCompaniesData.map((company, index) => {
                return (
                  <Carousel.Item key={ index }>
                      <h2>{ company.name }</h2>
                      <p>{ company.jobs } vagas</p>
                  </Carousel.Item>
                )
            })
        }
    </Carousel>
  );
}