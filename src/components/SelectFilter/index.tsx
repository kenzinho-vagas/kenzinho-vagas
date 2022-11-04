import { useEffect, useState } from "react";
import { api } from "../../services/api";
// import { listenerCount } from "process";

interface IFilterObjectUser {
  tech: string;
  salary: string;
  type: string;
}

const SelectFilter = () => {
  const [selectTech, setSelectTech] = useState("");
  const [selectSalary, setSelectSalary] = useState("");
  const [selectType, setSelectType] = useState("");
  const [List, setList] = useState([
    {
      company_name: "Empresa 01",
      specialty: "Back-end",
      salary: "7000",
      kind_of_work: "Presencial",
      tech: ["React", "Node.js"],
      level: "Sênior",
      jobURL:
        "https://marcusmarques.com.br/wp-content/uploads/2019/04/logotipo-logomarca.jpg",
      description:
        "Vaga destinada a júniors (2 a 4 anos de experiência), além disso é imprescíndivel que o programador tenha experiência com Node.js e TypeScript",
      candidates: [
        {
          email: "teste@mail.com",
          name: "Teste Testando",
          linkedin: "/teste",
          level: "Junior",
          bio: "Aprendendo a programar",
          specialty: "Front-end",
          id: 2,
        },
      ],
      userId: "1",
      id: 1,
    },
    {
      company_name: "Empresa 02",
      specialty: "Front-end",
      salary: "2000",
      kind_of_work: "Remoto",
      tech: ["Angular"],
      level: "Pleno",
      jobURL:
        "https://www.designevo.com/res/templates/thumb_small/green-and-blue-investment-building.webp",
      description:
        "Vaga destinada a desenvolvedores plenos (5 a 10 anos de experiência), além disso é imprescíndivel que o programador tenha experiência com React e TypeScript",
      candidates: [
        {
          email: "teste@mail.com",
          name: "Teste Testando",
          linkedin: "/teste",
          level: "Junior",
          bio: "Aprendendo a programar",
          specialty: "Front-end",
          id: 2,
        },
        {
          email: "luan@mail.com",
          name: "luan",
          linkedin: "/luan123",
          level: "Junior",
          bio: "Aprendendo a programar",
          specialty: "Front-end",
          id: 3,
        },
      ],
      userId: "1",
      id: 2,
    },
    {
      company_name: "Empresa 03",
      specialty: "FullStack",
      salary: "4000",
      kind_of_work: "Presencial",
      tech: ["React", "Angular"],
      level: "Sênior",
      jobURL:
        "https://marcusmarques.com.br/wp-content/uploads/2017/03/logotipo.jpg",
      description:
        "Vaga destinada a desenvolvedores sêniors (mais de 10 anos de experiência), além disso é imprescíndivel que o programador tenha experiência com Node.js e React",
      candidates: [
        {
          email: "teste@mail.com",
          password:
            "$2a$10$m9k9/Jo0R8OLAEc6xCTAfe64db337Ov.o3xiHYHSC9N.kuiBM07Dq",
          name: "Teste Testando",
          linkedin: "/teste",
          level: "Junior",
          bio: "Aprendendo a programar",
          specialty: "Front-end",
          isAdmin: false,
          id: 2,
        },
        {
          email: "luan@mail.com",
          name: "luan",
          linkedin: "/luan123",
          level: "Junior",
          bio: "Aprendendo a programar",
          specialty: "Front-end",
          id: 3,
        },
      ],
      userId: "1",
      id: 3,
    },
    {
      company_name: "Empresa 04",
      specialty: "FullStack",
      salary: "3000",
      kind_of_work: "Presencial",
      tech: ["Node.js"],
      level: "Sênior",
      jobURL:
        "https://marcusmarques.com.br/wp-content/uploads/2017/03/logotipo.jpg",
      description:
        "Vaga destinada a desenvolvedores sêniors (mais de 10 anos de experiência), além disso é imprescíndivel que o programador tenha experiência com Node.js e React",
      candidates: [
        {
          email: "teste@mail.com",
          password:
            "$2a$10$m9k9/Jo0R8OLAEc6xCTAfe64db337Ov.o3xiHYHSC9N.kuiBM07Dq",
          name: "Teste Testando",
          linkedin: "/teste",
          level: "Junior",
          bio: "Aprendendo a programar",
          specialty: "Front-end",
          isAdmin: false,
          id: 2,
        },
        {
          email: "luan@mail.com",
          name: "luan",
          linkedin: "/luan123",
          level: "Junior",
          bio: "Aprendendo a programar",
          specialty: "Front-end",
          id: 3,
        },
      ],
      userId: "1",
      id: 3,
    },
    {
      company_name: "Empresa 03",
      specialty: "FullStack",
      salary: "5000",
      kind_of_work: "Presencial",
      tech: ["TypeScript", "Node.js", "Angular"],
      level: "Sênior",
      jobURL:
        "https://marcusmarques.com.br/wp-content/uploads/2017/03/logotipo.jpg",
      description:
        "Vaga destinada a desenvolvedores sêniors (mais de 10 anos de experiência), além disso é imprescíndivel que o programador tenha experiência com Node.js e React",
      candidates: [
        {
          email: "teste@mail.com",
          password:
            "$2a$10$m9k9/Jo0R8OLAEc6xCTAfe64db337Ov.o3xiHYHSC9N.kuiBM07Dq",
          name: "Teste Testando",
          linkedin: "/teste",
          level: "Junior",
          bio: "Aprendendo a programar",
          specialty: "Front-end",
          isAdmin: false,
          id: 2,
        },
        {
          email: "luan@mail.com",
          name: "luan",
          linkedin: "/luan123",
          level: "Junior",
          bio: "Aprendendo a programar",
          specialty: "Front-end",
          id: 3,
        },
      ],
      userId: "1",
      id: 3,
    },
  ]);
  const [listFiltred, setListFiltred] = useState([]);
  const [teste, setTeste] = useState([]);

  //   useEffect(() => {
  //     async function getVagas() {
  //       const { data } = await api.get(
  //         `https://kenzinho-vagas.herokuapp.com/companyJobs`
  //       );

  //       setList(data);
  //     }
  //     getVagas();
  //   }, []);

  //   testeOption();

  const filterSelect = (object: IFilterObjectUser) => {
    console.log(List);
    if (object.salary === "" && object.type === "") {
      const resultFiltred = List.filter((element) => {
        return element.tech.join(",").includes(object.tech) === true;
      });

      setListFiltred(resultFiltred);
    } else if (object.tech === "" && object.type === "") {
      const resultFiltred = List.filter((element) => {
        return (
          +element.salary >= +object.salary &&
          +element.salary <= +object.salary + 5000
        );
      });

      setListFiltred(resultFiltred);
    } else if (object.tech === "" && object.salary === "") {
      const resultFiltred = List.filter((element) => {
        return element.kind_of_work === object.type;
      });

      setListFiltred(resultFiltred);
    } else if (object.tech === "") {
      const resultFiltred = List.filter((element) => {
        return (
          +element.salary >= +object.salary &&
          +element.salary <= +object.salary + 5000 &&
          element.kind_of_work === object.type
        );
      });

      setListFiltred(resultFiltred);
    } else if (object.salary === "") {
      const resultFiltred = List.filter((element) => {
        return (
          element.tech.join(",").includes(object.tech) === true &&
          element.kind_of_work === object.type
        );
      });

      setListFiltred(resultFiltred);
    } else if (object.type === "") {
      const resultFiltred = List.filter((element) => {
        return (
          +element.salary >= +object.salary &&
          +element.salary <= +object.salary + 5000 &&
          element.tech.join(",").includes(object.tech) === true
        );
      });

      setListFiltred(resultFiltred);
    } else {
      const resultFiltred = List.filter((element) => {
        return (
          +element.salary >= +object.salary &&
          +element.salary <= +object.salary + 5000 &&
          element.tech.join(",").includes(object.tech) === true &&
          element.kind_of_work === object.type
        );
      });

      setListFiltred(resultFiltred);
    }
  };

  return (
    <>
      <div className="selectFilter">
        <form
          action=""
          onSubmit={(event) => {
            filterSelect(
              (event.preventDefault(),
              {
                tech: selectTech,
                salary: selectSalary,
                type: selectType,
              })
            );
          }}
        >
          <select
            onChange={(event) => setSelectTech(event.target.value)}
            id="tech"
          >
            <option value="">Tecnologias</option>
            <option value="React">React</option>
            <option value="Java">Java</option>
            <option value="Node.js">Node.js</option>
          </select>
          <select
            onChange={(event) => setSelectSalary(event.target.value)}
            id="wage"
          >
            <option value="">Salários</option>
            <option value="1000">R$0 a R$5.000</option>
            <option value="5000">R$5.000 a R$10.000</option>
            <option value="10000">R$10.000 a R$15.000</option>
            <option value="15000">R$15.000 a R$20.000</option>
            <option value="20000">R$20.000 a R$25.000</option>
            <option value="25000">R$25.000 a R$30.000</option>
          </select>
          <select
            onChange={(event) => setSelectType(event.target.value)}
            id="kindWork"
          >
            <option value="">Tipo de vaga</option>
            <option value="Presencial">Presencial</option>
            <option value="Remoto">Remoto</option>
            <option value="Híbrido">Híbrido</option>
          </select>
          <button>Filtrar</button>
        </form>
      </div>
    </>
  );
};

export default SelectFilter;
