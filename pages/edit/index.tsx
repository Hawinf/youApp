import editStyle from './edit.module.css';
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
      <div className={editStyle['wrapper-create']}>
        <div className='container'>

            <div className={editStyle['create-nav']}>
                <div className={editStyle['create-back']}>
                    <a href="/">
                        <Image src={BackArrow} 
                            alt="Image Description"
                            width="100"      
                            height="100" 
                            placeholder='blur'
                            className={editStyle['back-arrow']}
                        />
                    </a>
                    <a href='/' className={editStyle['back-desc']}>Back</a>
                </div>
                <p className={editStyle['create-user']} >@User Name</p>
            </div>
            
            <div className={editStyle['create-profile']}>
                <Image src={Profile} 
                                alt="Image Description"
                                width="100"      
                                height="100" 
                                placeholder='blur'
                                className={editStyle['create-img']}
                />
                <h5 className={editStyle['user-profile']}>@johnDee</h5>
                <Image src={EditImg} 
                                alt="Image Description"
                                width="100"      
                                height="100" 
                                placeholder='blur'
                                className={editStyle['create-edit']}
                />
            </div>

            <div className={editStyle['create-about']}>
                <div className={editStyle['create-about-tittle']}>
                    <h5 className={editStyle['about-tittle']}>About</h5>
                    {
                        create ? <button className={editStyle['create-save']}>Save & Update</button> : 
                                <Image src={EditImg} 
                                    alt="Image Description"
                                    width="100"      
                                    height="100" 
                                    placeholder='blur'
                                    className={editStyle['about-edit']}
                                    onClick={onCreate}
                                /> 
                    }
                    
                </div>
                {
                    create ? 
                    <div className={editStyle['create-form']}>
                        <div className={editStyle['form-addingpict']}>
                            <Image src={AddImg} 
                                alt="Image Description"
                                width="100"      
                                height="100" 
                                placeholder='blur'
                                className={editStyle['add-img']}
                            />
                            <p className={editStyle['addpic-desc']}>Add Image</p>
                        </div>
                        <div className={editStyle['card-input']}>
                            <p className={editStyle['input-tittle']}>Display name:</p>
                            <input className={editStyle['input-data']} placeholder='Enter Name' />
                        </div>
                        <div className={editStyle['card-input']}>
                            <label className={editStyle['input-tittle']}>Choose a car:</label>
                            <select className={editStyle['input-data']}>
                                <option className={editStyle['bg-gender']} disabled >Select Gender</option>
                                <option className={editStyle['bg-gender']}>Laki-laki</option>
                                <option className={editStyle['bg-gender']}>Perempuan</option>
                            </select>
                        </div>
                        <div className={editStyle['card-input']}>
                            <p className={editStyle['input-tittle']}>Birthday:</p>
                            <input className={editStyle['input-data']} placeholder='DD MM YYYY' />
                        </div>
                        <div className={editStyle['card-input']}>
                            <p className={editStyle['input-tittle']}>Horoscope:</p>
                            <input className={editStyle['input-data']} placeholder='--' />
                        </div>
                        <div className={editStyle['card-input']}>
                            <p className={editStyle['input-tittle']}>Zodiac:</p>
                            <input className={editStyle['input-data']} placeholder='--' />
                        </div>
                        <div className={editStyle['card-input']}>
                            <p className={editStyle['input-tittle']}>Height:</p>
                            <input className={editStyle['input-data']} placeholder='Add height' />
                        </div>
                        <div className={editStyle['card-input']}>
                            <p className={editStyle['input-tittle']}>Weight:</p>
                            <input className={editStyle['input-data']} placeholder='Add weight' />
                        </div>
                    </div>
                    : 
                    <p className={editStyle['about-desc']}>Add in your your to help others know you better</p>
                }
            </div>

            <div className={editStyle['create-about']}>
                <div className={editStyle['create-about-tittle']}>
                    <h5 className={editStyle['about-tittle']}>Interest</h5>
                    <Image src={EditImg} 
                                alt="Image Description"
                                width="100"      
                                height="100" 
                                placeholder='blur'
                                className={editStyle['about-edit']}
                    />
                </div>
                <p className={editStyle['about-desc']}>Add in your interest to find a better match</p>
            </div>

        </div>
      </div>
    );
  }