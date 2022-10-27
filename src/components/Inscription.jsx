import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import Img from "./template-jdg-27.jpg"
import './Inscription.css'
export default function Inscription({addStagaire,stagaires}){
    const [ident,setIdent] = useState('')
    const [nom,setNom] = useState('')
    const [password,setPassword] = useState('')
    const [daten,setDaten] = useState('')
    const [ville,setVille] = useState('')
    const [genre,setGenre] = useState('')
    const [loisirs,setLoisirs] = useState([])
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        if(password.match(/[0-9]/g) && password.match(/[A-Z]/g) && password.match(/[a-z]/g) && password.match(/[^a-zA-Z\d]/g) && password.length>=8){
            const stagaire={
                ident,
                nom,
                password,
                daten,
                ville,
                genre,
                loisirs
            }
            addStagaire(stagaire)
            setIdent('')
            setNom('')
            setPassword('')
            setDaten('')
            setVille('')
            setGenre('')
            setLoisirs('') 
        }else {
            alert("Mot de passe et faible ")
        }
        
}

    console.log()
    

    return(
    <div>
        <form className='forminsc' onSubmit={handleFormSubmit}>
            
            <h3 className='insc'>Inscription</h3>
            <img className='logo' src={Img} alt=""/>
            <table>
                <tr>
                    <td><label>L'identifiant : </label></td>
                    <td><input value={ident} onChange={(e) => setIdent(e.target.value)} type="text"  className="form-control" required/></td>
                </tr>
                <tr>
                    <td><label>Nom complite</label></td>
                    <td><input value={nom} onChange={(e) => setNom(e.target.value)} type="text"  className="form-control" required/></td>
                </tr>
                <tr>
                    <td><label>Mot de passe : </label></td>
                    <td><input value={password} onChange={(e) => setPassword(e.target.value)} type="password"  className="form-control" required/></td>
                </tr>
                <tr>
                    <td><label>Date de naissance: </label></td>
                    <td><input value={daten} onChange={(e) => setDaten(e.target.value)} type="date" required/></td>
                </tr>
                <tr>
                    <td><label>Ville : </label></td>
                    <td> 
                        <select value={ville} onChange={(e) => setVille(e.target.value)}><option>OUARZAZATE</option><option>TINGHIR</option><option>AGADIR</option><option>MARRAKECH</option></select>
                    </td>
                </tr>
                <tr>
                    <td><label>Genre : </label></td>
                    <td>
                        <spam><input value={"Homme"} onChange={(e) => setGenre(e.target.value)} type="radio" name="genre"/> Homme</spam>
                        <spam><input value={"Femme"} onChange={(e) => setGenre(e.target.value)} type="radio" name="genre" /> Femme</spam>
                    </td>
                </tr>
                <tr>
                    <td><label>Loisirs : </label></td>
                    <td>
                        <spam><input value={"Sport"} onChange={(e) => setLoisirs([...loisirs," ",e.target.value])} type="checkbox" /> Sport</spam>
                        <spam><input value={"Lecture"} onChange={(e) => setLoisirs([...loisirs," ",e.target.value])} type="checkbox" /> Lecture</spam>
                        <spam><input value={"Musique"} onChange={(e) => setLoisirs([...loisirs," ",e.target.value])} type="checkbox" /> Musique</spam>
                    </td>
                </tr>
                <tr>
                    <td>Photo</td>
                    <td><input type="file" className='photo' /></td>
                    <td></td>
                </tr>
            </table>
            <button type="submit" >S'inscrire</button>
            <p>J'ai déja inscris : <NavLink className="link" to='/login'>connexion</NavLink></p>
            
        </form>
        {}
        {
            stagaires.length > 0 && stagaires.map((stagaire,i) => <p key={i} className='student-name'>Je suis {stagaire.ident} né le {stagaire.daten} à {stagaire.ville} et mes loisers sont : {stagaire.loisirs}</p>)
          }
    </div>
    )
}