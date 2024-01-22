import profileStyle from './profile.module.css';
import BackArrow from '../../assets/images/left.png';
import Profile from '../../assets/images/profile.png';
import EditImg from '../../assets/images/edit-2.png';
import Image from 'next/image';
import AddImg from '../../assets/images/addImage.png';
import { useState } from 'react';

export default function Create() {
    const [create, setCreate] = useState(false);

    const onCreate = () => {
        setCreate(true);
    }
    return (
      <div className={profileStyle['wrapper-create']}>
        <div className='container'>

            <div className={profileStyle['create-nav']}>
                <div className={profileStyle['create-back']}>
                    <a href="/">
                        <Image src={BackArrow} 
                            alt="Image Description"
                            width="100"      
                            height="100" 
                            placeholder='blur'
                            className={profileStyle['back-arrow']}
                        />
                    </a>
                    <a href='/' className={profileStyle['back-desc']}>Back</a>
                </div>
                <p className={profileStyle['create-user']} >@User Name</p>
            </div>
            
            <div className={profileStyle['create-profile']}>
                <Image src={Profile} 
                                alt="Image Description"
                                width="100"      
                                height="100" 
                                placeholder='blur'
                                className={profileStyle['create-img']}
                />
                <div className={profileStyle['user-profile']}>
                  <h5 className={profileStyle['user-name']}>@johnDee</h5>
                  <p className={profileStyle['user-gender']}>Gender</p>
                </div>
            </div>

            <div className={profileStyle['create-about']}>
                <div className={profileStyle['create-about-tittle']}>
                    <h5 className={profileStyle['about-tittle']}>About</h5>
                    {
                        create ? <button className={profileStyle['create-save']}>Save & Update</button> : 
                                <Image src={EditImg} 
                                    alt="Image Description"
                                    width="100"      
                                    height="100" 
                                    placeholder='blur'
                                    className={profileStyle['about-edit']}
                                    onClick={onCreate}
                                /> 
                    }
                    
                </div>
                {
                    create ? 
                    <div className={profileStyle['create-form']}>
                        <div className={profileStyle['form-addingpict']}>
                            <Image src={AddImg} 
                                alt="Image Description"
                                width="100"      
                                height="100" 
                                placeholder='blur'
                                className={profileStyle['add-img']}
                            />
                            <p className={profileStyle['addpic-desc']}>Add Image</p>
                        </div>
                        <div className={profileStyle['card-input']}>
                            <p className={profileStyle['input-tittle']}>Display name:</p>
                            <input className={profileStyle['input-data']} placeholder='Enter Name' />
                        </div>
                        <div className={profileStyle['card-input']}>
                            <label className={profileStyle['input-tittle']}>Choose a car:</label>
                            <select className={profileStyle['input-data']}>
                                <option className={profileStyle['bg-gender']} disabled >Select Gender</option>
                                <option className={profileStyle['bg-gender']}>Laki-laki</option>
                                <option className={profileStyle['bg-gender']}>Perempuan</option>
                            </select>
                        </div>
                        <div className={profileStyle['card-input']}>
                            <p className={profileStyle['input-tittle']}>Birthday:</p>
                            <input className={profileStyle['input-data']} placeholder='DD MM YYYY' />
                        </div>
                        <div className={profileStyle['card-input']}>
                            <p className={profileStyle['input-tittle']}>Horoscope:</p>
                            <input className={profileStyle['input-data']} placeholder='--' />
                        </div>
                        <div className={profileStyle['card-input']}>
                            <p className={profileStyle['input-tittle']}>Zodiac:</p>
                            <input className={profileStyle['input-data']} placeholder='--' />
                        </div>
                        <div className={profileStyle['card-input']}>
                            <p className={profileStyle['input-tittle']}>Height:</p>
                            <input className={profileStyle['input-data']} placeholder='Add height' />
                        </div>
                        <div className={profileStyle['card-input']}>
                            <p className={profileStyle['input-tittle']}>Weight:</p>
                            <input className={profileStyle['input-data']} placeholder='Add weight' />
                        </div>
                    </div>
                    : 
                    <p className={profileStyle['about-desc']}>Add in your your to help others know you better</p>
                }
            </div>

            <div className={profileStyle['create-about']}>
                <div className={profileStyle['create-about-tittle']}>
                    <h5 className={profileStyle['about-tittle']}>Interest</h5>
                    <Image src={EditImg} 
                                alt="Image Description"
                                width="100"      
                                height="100" 
                                placeholder='blur'
                                className={profileStyle['about-edit']}
                    />
                </div>
                <p className={profileStyle['about-desc']}>Add in your interest to find a better match</p>
            </div>

        </div>
      </div>
    );
  }