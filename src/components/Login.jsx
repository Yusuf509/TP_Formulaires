import React,{useState} from 'react'
import './Login.css'
import { useNavigate, NavLink} from 'react-router-dom'
import Img from "./template-jdg-27.jpg"
export default function Login(props) {
    const dataS = JSON.parse(localStorage.getItem('stagaires'))
    const [identl,setIdentl] = useState('')
    const [passl,setPassl]=useState('')
    const redi = useNavigate()
    const login = (e)=>{
        e.preventDefault()
        dataS.map((i)=> {if (i.ident ===identl && i.password===passl){
                (
                    function(){
                    redi("/dashbord",{state:{nom:i.nom}})
                })()
                document.getElementById("ident").innerHTML=""
                document.getElementById("pass").innerHTML=""
            }
            else if(i.ident !== identl) {
                document.getElementById("ident").innerHTML="L'identifiant né exeste pas"
            }
            else if(i.ident === identl){
            if(i.password !== passl){
                document.getElementById("pass").innerHTML="Mot de passe incorrect"
            }}
        }
        )
    } 

  
  return (
    <form className='formlogin' >
        <h3 className='insc'>Connexion</h3>
        <img className='logo' src={Img} alt=""/>
        <input value={identl} onChange={(e) => setIdentl(e.target.value)} type="text" placeholder="L'identifiant"/>
        <small id='ident' ></small>
        <input value={passl} onChange={(e) => setPassl(e.target.value)} type="password" placeholder="Mot de passe" />
        <small id='pass'></small>
        <button onClick={login}>Se connecter</button>
        <NavLink className="link" to='/'>Inscription</NavLink>
    </form>
  )
}
