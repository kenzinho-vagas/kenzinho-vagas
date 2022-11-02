import Company from '../../img/company.png'
import Level from '../../img/level.png'
import Type from '../../img/type.png'
import Salary from '../../img/salary.png'
import ListJobsAdmin from '../../styles/ListJobsAdmin'
import BtnCloseJob from '../../img/closeJob.png'
import { ButtonPrimary } from '../../styles/Buttons'


const JobsCreateds = () => {
    return (
        <ListJobsAdmin>
            <h2>Vagas criadas</h2>
            <ul>
                <li>
                    <button className="btnDeleteJob"><img  src={BtnCloseJob} alt="Botao excluir vaga" /></button>
                    <h3>  Programador Back End</h3>
                    <p><img src={Company} alt="Empresa"/> Empresa</p>
                    <p><img src={Level} alt="Nivel"/>Nível: Júnior</p>
                    <p><img src={Type} alt="Tipo"/>Remoto</p>
                    <p><img src={Salary} alt="Salario" />R$5.000 a R$6.000</p>
                    <div className="buttonsJob">
                        <ButtonPrimary>Editar</ButtonPrimary>
                        <ButtonPrimary>Candidatos</ButtonPrimary>
                    </div>
                </li>
                <li>
                    <button className="btnDeleteJob"><img  src={BtnCloseJob} alt="Botao excluir vaga" /></button>
                    <h3>  Programador Back End</h3>
                    <p><img src={Company} alt="Empresa"/> Empresa</p>
                    <p><img src={Level} alt="Nivel"/>Nível: Júnior</p>
                    <p><img src={Type} alt="Tipo"/>Remoto</p>
                    <p><img src={Salary} alt="Salario" />R$5.000 a R$6.000</p>
                    <div className="buttonsJob">
                        <ButtonPrimary>Editar</ButtonPrimary>
                        <ButtonPrimary>Candidatos</ButtonPrimary>
                    </div>
                </li>
                <li>
                    <button className="btnDeleteJob"><img  src={BtnCloseJob} alt="Botao excluir vaga" /></button>
                    <h3>  Programador Back End</h3>
                    <p><img src={Company} alt="Empresa"/> Empresa</p>
                    <p><img src={Level} alt="Nivel"/>Nível: Júnior</p>
                    <p><img src={Type} alt="Tipo"/>Remoto</p>
                    <p><img src={Salary} alt="Salario" />R$5.000 a R$6.000</p>
                    <div className="buttonsJob">
                        <ButtonPrimary>Editar</ButtonPrimary>
                        <ButtonPrimary>Candidatos</ButtonPrimary>
                    </div>
                </li>
                <li>
                    <button className="btnDeleteJob"><img  src={BtnCloseJob} alt="Botao excluir vaga" /></button>
                    <h3>  Programador Back End</h3>
                    <p><img src={Company} alt="Empresa"/> Empresa</p>
                    <p><img src={Level} alt="Nivel"/>Nível: Júnior</p>
                    <p><img src={Type} alt="Tipo"/>Remoto</p>
                    <p><img src={Salary} alt="Salario" />R$5.000 a R$6.000</p>
                    <div className="buttonsJob">
                        <ButtonPrimary>Editar</ButtonPrimary>
                        <ButtonPrimary>Candidatos</ButtonPrimary>
                    </div>
                </li>
            </ul>
        </ListJobsAdmin>
    )
}

export default JobsCreateds