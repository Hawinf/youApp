import LoginStyle from '../login/login.module.css';
import BackArrow from '../../assets/images/left.png';
import Image from 'next/image';


export default function Register() {
    return (
            <div className={LoginStyle['wrapper-login']}>
                <div className='container'>
                    <div className={LoginStyle['login-nav']}>
                        <a href="/">
                            <Image src={BackArrow} 
                                alt="Image Description"
                                width="100"      
                                height="100" 
                                placeholder='blur'
                                className={LoginStyle['login-back']}
                            />
                        </a>
                        <a href="/" className={LoginStyle['login-back-desc']}>Back</a>
                    </div>
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