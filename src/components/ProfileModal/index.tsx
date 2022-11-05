import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { IEditeProfile, IProfileContext, ProfileContext } from "../../contexts/UserContext";
import { DivForm, DivModal } from "../../styles/Modal";
import { CgCloseO } from "react-icons/cg";
import * as yup from "yup";

const ProfileModal = () => {
    const {isProfileModal, setProfileModal, profileUser, editeProfile} = useContext<IProfileContext>(ProfileContext);

    const schema = yup.object().shape({
        level: yup.string(),
        bio: yup.string(),
        specialty: yup.string()
    })

    const {register, handleSubmit} = useForm <IEditeProfile> ({
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
                            <form onSubmit={handleSubmit(editeProfile)}>
                                <div className="formColumns">
                                <div className="formLeft">
                                    <label htmlFor="name">Nome</label>
                                    <input type="text" placeholder={profileUser?.name} disabled/>
                                    <label htmlFor="email">E-mail</label>
                                    <input type="text" placeholder={profileUser?.email} disabled/>
                                    <label htmlFor="linkedin">Linkedin</label>
                                    <input type="text" placeholder={profileUser?.linkedin} disabled/> 
                                </div>
                                <div className="formRight">
                                    <label htmlFor="level">Nível do Cargo</label>
                                    <select id="level" {...register("level")} >
                                        <option value="">Nível atual: {profileUser?.level}</option>
                                        <option value="Júnior">Júnior</option>
                                        <option value="Pleno">Pleno</option>
                                        <option value="Sênior">Sênior</option>
                                    </select>
                                    <label htmlFor="bio">Bio</label>
                                    <input type="text" {...register("bio")} placeholder={profileUser?.bio} />
                                    <label htmlFor="specialty">Especialidade</label>
                                    <select id="specialty" {...register("specialty")} >
                                        <option value="">Especialidade atual: {profileUser?.specialty}</option>
                                        <option value="Front-End">Front-End</option>
                                        <option value="Back-End">Back-End</option>
                                        <option value="FullStack">FullStack</option>
                                    </select>
                                </div>
                                </div>
                                
                                <button type="submit">Editar Perfil</button>
                            </form>
                        </DivForm>
                    </div>
                </div>
            </div>
       </DivModal>
    )
}

export default ProfileModal;