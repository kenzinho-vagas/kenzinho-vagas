import { useContext, useState } from "react";
import { JobContext } from "../../contexts/JobContextDU";

const SelectFilter = () => {
  const [selectTech, setSelectTech] = useState<string>("");
  const [selectSalary, setSelectSalary] = useState<string>("");
  const [selectType, setSelectType] = useState<string>("");

  const { filterSelect, allJobs } = useContext(JobContext);
  const [testeTech, setTesteTech] = useState([]);

  const techinfo = () => {
    const teste = allJobs.map((element) => {
      return element.tech;
    });

    const teste2 = teste.reduce((list, sub) => list.concat(sub), []);

    var teste3 = teste2.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });

    console.log(teste3);
    // return teste3;
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
            {/* // {allJobs
            //   .map((Element) => Element.tech)
            //   .reduce((list, sub) => list.concat(sub), [])
            //   .filter((elem, index, self) => index === self.indexOf(elem))
            //   .map((teste, churros) => {
            //     return (
            //       console.log(teste),
            //       (
            //         <option key={churros} value="">
            //           {teste}
            //         </option>
            //       )
            //     );
            //   })} */}
            {/* {allJobs.map((element) => {
              return (
                console.log(element.tech),
                (<option value="">{element.tech}</option>)
              );
            })} */}
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
