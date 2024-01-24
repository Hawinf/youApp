import LoginStyle from '../login/login.module.css';
import BackArrow from '../../assets/images/left.png';
import Image from 'next/image';
import { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';

export default function Register() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const hanldeUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRegister = () => {
        const payload = {
            email: email,
            username: username,
            password: password
          }

        axios
            .post('https://techtest.youapp.ai/api/register', payload)
            .then((res) => {
                router.push('/login');
            })
            .catch((err) => {
                if (err.response.status == 400) {
                    alert('"password must be longer than or equal to 8 characters"')
                }
            })
    }
    return (
            <div className={LoginStyle['wrapper-login']}>
                <div className='container'>
                    <div className={LoginStyle['login-nav']}>
                        <a href="/login">
                            <Image src={BackArrow} 
                                alt="Image Description"
                                width="100"      
                                height="100" 
                                placeholder='blur'
                                className={LoginStyle['login-back']}
                            />
                        </a>
                        <a href="/login" className={LoginStyle['login-back-desc']}>Back</a>
                    </div>
                    <h1 className={LoginStyle['login-title']}>Register</h1>
                    <div>
                        <input onChange={handleEmail} className={LoginStyle['input-login']} placeholder='Enter Email' />
                    </div>
                    <div>
                        <input onChange={hanldeUsername} className={LoginStyle['input-login']} placeholder='Create Username' />
                    </div>
                    <div>
                        <input onChange={handlePassword} className={LoginStyle['input-login']} placeholder='Create Password' type='password'/>
                    </div>
                    <div>
                        <input onChange={handlePassword} className={LoginStyle['input-login']} placeholder='Confirm Password' type='password'/>
                    </div>
                    <button onClick={handleRegister} className={LoginStyle['button-login']}>Register</button>
                    <p className={LoginStyle['regis-desc']}>No account? <a href="/login" className={LoginStyle['regis-btn']}>Login here</a></p>
                </div>
            </div>
    );
  }