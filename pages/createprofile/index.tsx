import createStyle from './create.module.css';
import BackArrow from '../../assets/images/left.png';
import Menu from '../../assets/images/menu.png';
import Profile from '../../assets/images/profile.png';
import EditImg from '../../assets/images/edit-2.png';
import Image from 'next/image';
import AddImg from '../../assets/images/addImage.png';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { config } from 'process';

export default function Create() {
    const [create, setCreate] = useState(false);
    const [input, setInput] = useState();
    const [username, setUsername] = useState();
    const [profile, setProfile] = useState(null);
    const [dname, setDname] = useState('');
    const [gender, setGender] = useState('default');
    const [birthday, setBirthday] = useState('');
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [interest, setInterest] = useState([]);

    const onCreate = () => {
        setCreate(true);
    }

    const handleProfile = (e) => {
        setProfile(e.target.files[0]);
    }
    const handleDname = (e) => {
        setDname(e.target.value);
    }
    const handleGender = (e) => {
        setGender(e.target.value);
        console.log(gender)
    }
    const handleBirthday = (e) => {
        setBirthday(e.target.value);
    }
    const handleHeight = (e) => {
        setHeight(e.target.value);
    }
    const handleWeight = (e) => {
        setWeight(e.target.value);
    }

    const createProfile = () => {
        
        const formData = new FormData();
            formData.append("name", dname);
            formData.append("birthday", birthday);
            formData.append("height", height);
            formData.append("weight", weight);
            formData.append("interests", interest)
        
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            const config = {
                        headers: {
                            "x-access-token": token,
                        },
                    };    

        axios
            .post('https://techtest.youapp.ai/api/createProfile', formData, config)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
    }}

    const getProfile = () => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            const config = {
                        headers: {
                            "x-access-token": token,
                        },
                    };
            axios
                .get('https://techtest.youapp.ai/api/getProfile', config)
                .then((res) => {
                    setUsername(res.data.data.username)
                })
                .catch((err) => console.log(err))
        }
    }
    
    useEffect(() => {
        getProfile();
    })
    
    return (
      <div className={createStyle['wrapper-create']}>
        <div className='container'>

            <div className={createStyle['create-nav']}>
                <div className={createStyle['create-back']}>
                    <a href="/login">
                        <Image src={BackArrow} 
                            alt="Image Description"
                            width="100"      
                            height="100" 
                            placeholder='blur'
                            className={createStyle['back-arrow']}
                        />
                    </a>
                    <a href='/login' className={createStyle['back-desc']}>Back</a>
                </div>
                <p className={createStyle['create-user']}>user</p>
                <Image src={Menu} 
                            alt="Image Description"
                            width="100"      
                            height="100" 
                            placeholder='blur'
                            className={createStyle['create-menu']}
                />
            </div>
            
            <div className={createStyle['create-profile']}>
                <Image src={Profile} 
                                alt="Image Description"
                                width="100"      
                                height="100" 
                                placeholder='blur'
                                className={createStyle['create-img']}
                />
                {
                    username ? <h5 className={createStyle['user-profile']}>@{username}</h5> : null
                }
                
                <Image src={EditImg} 
                                alt="Image Description"
                                width="100"      
                                height="100" 
                                placeholder='blur'
                                className={createStyle['create-edit']}
                />
            </div>

            <div className={createStyle['create-about']}>
                <div className={createStyle['create-about-tittle']}>
                    <h5 className={createStyle['about-tittle']}>About</h5>
                    {
                        create ? <button onClick={createProfile} className={createStyle['create-save']}>Save & Update</button> : 
                                <Image src={EditImg} 
                                    alt="Image Description"
                                    width="100"      
                                    height="100" 
                                    placeholder='blur'
                                    className={createStyle['about-edit']}
                                    onClick={onCreate}
                                /> 
                    }
                    
                </div>
                {
                    create ? 
                    <div className={createStyle['create-form']}>
                        <div className={createStyle['form-addingpict']}>
                            {/* <Image src={AddImg} 
                                alt="Image Description"
                                width="100"      
                                height="100" 
                                placeholder='blur'
                                className={createStyle['add-img']}
                            /> */}
                            <input onChange={handleProfile} type='file'/>
                            <p className={createStyle['addpic-desc']}>Add Image</p>
                        </div>
                        <div className={createStyle['card-input']}>
                            <p className={createStyle['input-tittle']}>Display name:</p>
                            <input onChange={handleDname} className={createStyle['input-data']} placeholder='Enter Name' />
                        </div>
                        <div className={createStyle['card-input']}>
                            <label className={createStyle['input-tittle']}>Select gender:</label>
                            <select value={gender} onChange={handleGender} className={createStyle['input-data']}>
                                <option value="default" className={createStyle['bg-gender']} disabled selected hidden >Select Gender</option>
                                <option value="male" className={createStyle['bg-gender']}>Laki-laki</option>
                                <option value="female" className={createStyle['bg-gender']}>Perempuan</option>
                            </select>
                        </div>
                        <div className={createStyle['card-input']}>
                            <p className={createStyle['input-tittle']}>Birthday:</p>
                            <input onChange={handleBirthday} className={createStyle['input-data']} placeholder='DD MM YYYY' />
                        </div>
                        <div className={createStyle['card-input']}>
                            <p className={createStyle['input-tittle']}>Horoscope:</p>
                            <input disabled className={createStyle['input-data']} placeholder='--' />
                        </div>
                        <div className={createStyle['card-input']}>
                            <p className={createStyle['input-tittle']}>Zodiac:</p>
                            <input disabled className={createStyle['input-data']} placeholder='--' />
                        </div>
                        <div className={createStyle['card-input']}>
                            <p className={createStyle['input-tittle']}>Height:</p>
                            <input onChange={handleHeight} className={createStyle['input-data']} placeholder='Add height' />
                        </div>
                        <div className={createStyle['card-input']}>
                            <p className={createStyle['input-tittle']}>Weight:</p>
                            <input onChange={handleWeight} className={createStyle['input-data']} placeholder='Add weight' />
                        </div>
                    </div>
                    : 
                    <p className={createStyle['about-desc']}>Add in your your to help others know you better</p>
                }
            </div>

            <div className={createStyle['create-about']}>
                <div className={createStyle['create-about-tittle']}>
                    <h5 className={createStyle['about-tittle']}>Interest</h5>
                    <a href="/add">
                        <Image src={EditImg} 
                                    alt="Image Description"
                                    width="100"      
                                    height="100" 
                                    placeholder='blur'
                                    className={createStyle['about-edit']}
                        />
                    </a>
                </div>
                <p className={createStyle['about-desc']}>Add in your interest to find a better match</p>
            </div>

        </div>
      </div>
    );
  }