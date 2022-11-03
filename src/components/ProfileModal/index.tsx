import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import { useContext } from "react"
import { IUserContext, UserContext } from "../../contexts/UserContext"
import { DivForm, DivModal } from "../../styles/Modal"
import {CgCloseO} from "react-icons/cg"

const ProfileModal = () => {

    const {isProfileModal, setProfileModal, profileUser} = useContext<IUserContext>(UserContext)

    const schema = yup.object().shape({
        level: yup.string(),
        bio: yup.string(),
        specialty: yup.string()
    })

    const {register, handleSubmit} = useForm ({
        resolver: yupResolver(schema)
    })

    return (
       <DivModal>
            <div className="containerModal">
                <div className="overlayModal">
                    <div className="modal">
                        <div className="modalHeader">
                            <div className="modalHeaderTitle">
                            <h3>EDITAR PERFIL</h3>
                            </div>
                            
                            <div className="modalHeaderBtn">
                                <CgCloseO onClick={() => setProfileModal(!isProfileModal)} className="iconClose"/>
                            </div>
                        </div>
                        <DivForm>
                            <form>
                                <label htmlFor="name">Nome</label>
                                <input type="text" placeholder={profileUser?.name} disabled/>
                                <label htmlFor="email">E-mail</label>
                                <input type="text" placeholder={profileUser?.email} disabled/>
                                <label htmlFor="linkedin">Linkedin</label>
                                <input type="text" placeholder={profileUser?.linkedin} disabled/>

                                <label htmlFor="level">Nível do Cargo</label>
                                <select id="level" {...register("level")} value={profileUser?.level}>
                                    <option value="Júnior">Júnior</option>
                                    <option value="Pleno">Pleno</option>
                                    <option value="Sênior">Sênior</option>
                                </select>
                                <label htmlFor="bio">Bio</label>
                                <input type="text" {...register("bio")} value={profileUser?.bio} />
                                <label htmlFor="specialty">Especialidade</label>
                                <select id="specialty" {...register("specialty")} value={profileUser?.specialty}>
                                    <option value="Front-End">Front-End</option>
                                    <option value="Back-End">Back-End</option>
                                    <option value="FullStack">FullStack</option>
                                </select>
                                <button type="submit">Editar Perfil</button>
                            </form>
                        </DivForm>
                    </div>
                </div>
            </div>
       </DivModal>
    )
}

export default ProfileModal