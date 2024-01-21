import LoginStyle from '../login/login.module.css';
import BackArrow1 from '../../assets/images/backArrow.png';
import Image from 'next/image';


export default function Register() {
    return (
            <div className={LoginStyle['wrapper-login']}>
                <div className='container'>
                    <a href='/'>
                        <Image src={BackArrow1} 
                            alt="Image Description"
                            width="100"      
                            height="100" 
                            placeholder='blur'
                            className={LoginStyle['backArrow']}
                        />
                    </a>
                    <h1 className={LoginStyle['login-title']}>Login</h1>
                    <div>
                        <input className={LoginStyle['input-login']} placeholder='Enter Username/Email' />
                    </div>
                    <div>
                        <input className={LoginStyle['input-login']} placeholder='Enter Password' type='password'/>
                    </div>
                    <button className={LoginStyle['button-login']}>Register</button>
                    <p className={LoginStyle['regis-desc']}>No account? <a href="/register" className={LoginStyle['regis-btn']}>Login here</a></p>
                </div>
            </div>
    );
  }