import React,{useState} from 'react'
import Img from "./Componenet/template-jdg-27.jpg"
export default function Login(props) {
    const [identl,setIdentl] = useState('')
    const [passl,setPassl]=useState('')
  
  return (
    <form >
        <h3 className='insc'>Connexion</h3>
        <img className='logo' src={Img} alt=""/>
        <table>
            <tr>
                <td><label>L'identifiant :</label></td>
                <td><input value={identl} onChange={(e) => setIdentl(e.target.value)} type="text"/></td>
            </tr>
            <tr>
                <td><label>Mot de passe :</label></td>
                <td><input value={passl} onChange={(e) => setPassl(e.target.value)} type="password"/></td>
            </tr>
        </table>
    </form>
  )
}
