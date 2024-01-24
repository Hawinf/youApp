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

    const onCreate = () => {
        setCreate(true);
    }

    // if (typeof window !== 'undefined') {
    //     const token = localStorage.getItem('token');
    // }

    useEffect(() => {
        // const config = {
        //     header: {
        //         'x-access-token': token,
        //     },
        // };
        if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        }
        
        axios
            .get('https://techtest.youapp.ai/api/getProfile', {header: { access_token: token} })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err))
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
                <p className={createStyle['create-user']}>@User Name</p>
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
                <h5 className={createStyle['user-profile']}>@johnDee</h5>
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
                        create ? <button className={createStyle['create-save']}>Save & Update</button> : 
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
                            <Image src={AddImg} 
                                alt="Image Description"
                                width="100"      
                                height="100" 
                                placeholder='blur'
                                className={createStyle['add-img']}
                            />
                            <p className={createStyle['addpic-desc']}>Add Image</p>
                        </div>
                        <div className={createStyle['card-input']}>
                            <p className={createStyle['input-tittle']}>Display name:</p>
                            <input className={createStyle['input-data']} placeholder='Enter Name' />
                        </div>
                        <div className={createStyle['card-input']}>
                            <label className={createStyle['input-tittle']}>Choose a car:</label>
                            <select className={createStyle['input-data']}>
                                <option className={createStyle['bg-gender']} disabled >Select Gender</option>
                                <option className={createStyle['bg-gender']}>Laki-laki</option>
                                <option className={createStyle['bg-gender']}>Perempuan</option>
                            </select>
                        </div>
                        <div className={createStyle['card-input']}>
                            <p className={createStyle['input-tittle']}>Birthday:</p>
                            <input className={createStyle['input-data']} placeholder='DD MM YYYY' />
                        </div>
                        <div className={createStyle['card-input']}>
                            <p className={createStyle['input-tittle']}>Horoscope:</p>
                            <input className={createStyle['input-data']} placeholder='--' />
                        </div>
                        <div className={createStyle['card-input']}>
                            <p className={createStyle['input-tittle']}>Zodiac:</p>
                            <input className={createStyle['input-data']} placeholder='--' />
                        </div>
                        <div className={createStyle['card-input']}>
                            <p className={createStyle['input-tittle']}>Height:</p>
                            <input className={createStyle['input-data']} placeholder='Add height' />
                        </div>
                        <div className={createStyle['card-input']}>
                            <p className={createStyle['input-tittle']}>Weight:</p>
                            <input className={createStyle['input-data']} placeholder='Add weight' />
                        </div>
                    </div>
                    : 
                    <p className={createStyle['about-desc']}>Add in your your to help others know you better</p>
                }
            </div>

            <div className={createStyle['create-about']}>
                <div className={createStyle['create-about-tittle']}>
                    <h5 className={createStyle['about-tittle']}>Interest</h5>
                    <Image src={EditImg} 
                                alt="Image Description"
                                width="100"      
                                height="100" 
                                placeholder='blur'
                                className={createStyle['about-edit']}
                    />
                </div>
                <p className={createStyle['about-desc']}>Add in your interest to find a better match</p>
            </div>

        </div>
      </div>
    );
  }