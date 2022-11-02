import Create from "../../styles/CreateJob";

const CreateJob = () => {
  return (
    <Create>
      <div className="divCreate">
        <h3>Criar vaga</h3>
        <div className="divForm">
          <form>
            <div className="formColumn">
              <label htmlFor="companyName">Nome da empresa</label>
              <input
                type="text"
                id="companyName"
                placeholder="Nome da empresa"
              />
              <label htmlFor="especiality">Especialidade</label>
              <input
                type="text"
                id="especiality"
                placeholder="Front-end, Back-end..."
              />
              <label htmlFor="type">Tipo de vaga</label>
              <input
                type="text"
                id="type"
                placeholder="Presencial, Remota..."
              />
              <label htmlFor="salary">Salário</label>
              <input type="text" id="salary" placeholder="R$4.500,00" />
              <label htmlFor="tecnology">Tecnologia</label>
              <input type="text"  id="tecnology" placeholder="Ex: React, JavaScript, Html..."/>
            </div>
            <div className="formColumn">
              <label htmlFor="level">Nível</label>
              <select id="level" placeholder="Escolha uma opção">
                <option value="" disabled selected>
                  Selecione uma opção
                </option>
                <option value="junior">Júnior</option>
                <option value="pleno">Pleno</option>
                <option value="senior">Sênior</option>
              </select>
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                cols={30}
                rows={11}
                placeholder="Ex: Atuará em todo o ciclo de vida do sistema (Planejar, arquitetar, desenvolver, testar, implementar, monitorar, documentar, etc.)"
              ></textarea>
              <button type="submit" id="btnSaveJob">
                Criar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Create>
  );
};

export default CreateJob;
