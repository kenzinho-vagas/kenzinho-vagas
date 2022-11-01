import Create from "../../styles/CreateJob"

const CreateJob = () => {
    return (
        <Create>
            <div>
            <h3>Criar vaga</h3>
            <form>
                <label htmlFor="companyName">Nome da empresa</label>
                <input type="text" id="companyName" placeholder="Nome da empresa" />
                <label htmlFor="especiality">Especialidade</label>
                <input type="text" id="especiality" placeholder="Front-end, Back-end..." />
                <label htmlFor="tecnologies">Tecnologias</label>
                <input type="text" id="tecnologies" placeholder="React, JavaScript..." />
                <div className="tecnologies">
                    <p className="tech">React <button className="removeTech">X</button></p>
                    <button id="techAdd">ADD</button>
                </div>
                <label htmlFor="type">Tipo de vaga</label>
                <input type="text" id="type" placeholder="Presencial, Remota..." />
                <label htmlFor="salary">Salário</label>
                <input type="text" id="salary" placeholder="R$4.500,00" />
                <label htmlFor="level">Nível</label>
                <select id="level" placeholder="Escolha uma opção">
                    <option value="junior">Júnior</option>
                    <option value="pleno">Pleno</option>
                    <option value="senior">Sênior</option>
                </select>
                    <textarea id="description" cols={30} rows={10} placeholder="Ex: Atuará em todo o ciclo de vida do sistema (Planejar, arquitetar, desenvolver, testar, implementar, monitorar, documentar, etc.)"></textarea>
                <button type="submit">Salvar</button>
            </form>
            </div>
        </Create>
    )

}

export default CreateJob