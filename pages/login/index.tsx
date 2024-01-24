import LoginStyle from './login.module.css';
import BackArrow from '../../assets/images/left.png';
import Image from 'next/image';
import axios from 'axios';
import Router, { useRouter } from 'next/router';
import { useState } from 'react';


export default function Home() {
    const router = useRouter();

    const [em, setEm] = useState('');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const onEmail = (e) => {
        setEm(e.target.value);
        setUser(e.target.value);
    }
    const onPass = (e) =>  {
        setPass(e.target.value);
    }

    const handleLogin = () => {
        const payload = {
            email: em,
            username: user,
            password: pass 
        }
        axios 
            .post('https://techtest.youapp.ai/api/login', payload)
            .then((res) => {
                console.log(res)
                localStorage.setItem('token', res.data.access_token);
                router.push('/createprofile'); 
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    };
    
    return (
            <div className={LoginStyle['wrapper-login']}>
                <div className='container'>
                    <div className={LoginStyle['login-nav']}>
                        <a href="/register">
                            <Image src={BackArrow} 
                                alt="Image Description"
                                width="100"      
                                height="100" 
                                placeholder='blur'
                                className={LoginStyle['login-back']}
                            />
                        </a>
                        <a href="/register" className={LoginStyle['login-back-desc']}>Back</a>
                    </div>
                    <h1 className={LoginStyle['login-title']}>Login</h1>
                    <div>
                        <input onChange={onEmail} className={LoginStyle['input-login']} placeholder='Enter Username/Email' />
                    </div>
                    <div>
                        <input onChange={onPass} className={LoginStyle['input-login']} placeholder='Enter Password' type='password'/>
                    </div>
                    <button onClick={handleLogin} className={LoginStyle['button-login']}>Login</button>
                    <p className={LoginStyle['regis-desc']}>No account? <a href="/register" className={LoginStyle['regis-btn']}>Register here</a></p>
                </div>
            </div>
    );
  }