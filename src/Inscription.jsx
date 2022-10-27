import React,{useState} from 'react'
import Img from "./Componenet/template-jdg-27.jpg"
export default function Inscription({addStagaire}){
    const [ident,setIdent] = useState('')
    const [password,setPassword] = useState('')
    const [daten,setDaten] = useState('')
    const [ville,setVille] = useState('')
    const [genre,setGenre] = useState('')
    const [loisirs,setLoisirs] = useState([])
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const stagaire={
            ident,
            password,
            daten,
            ville,
            genre,
            loisirs
        }
        addStagaire(stagaire)
        setPassword('')
        setDaten('')
        setVille('')
        setGenre('')
        setLoisirs('')  
    }
    console.log()

    return(
    <div>
        <form onSubmit={handleFormSubmit}>
            
            <h3 className='insc'>Inscription</h3>
            <img className='logo' src={Img} alt=""/>
            <table>
                <tr>
                    <td><label>L'identifiant : </label></td>
                    <td><input value={ident} onChange={(e) => setIdent(e.target.value)} type="text"  className="form-control"/></td>
                </tr>
                <tr>
                    <td><label>Mot de passe : </label></td>
                    <td><input value={password} onChange={(e) => setPassword(e.target.value)} type="password"  className="form-control"/></td>
                </tr>
                <tr>
                    <td><label>Date de naissance: </label></td>
                    <td><input value={daten} onChange={(e) => setDaten(e.target.value)} type="date"/></td>
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
                    <td><input type="file" className='photo'/></td>
                    <td></td>
                </tr>
            </table>
            <button type="submit">S'inscrire</button>
        </form>
    </div>
    )
}