import createStyle from './create.module.css';
import BackArrow from '../../assets/images/left.png';
import Menu from '../../assets/images/menu.png';
import Profile from '../../assets/images/profile.png';
import Image from 'next/image';

export default function Create() {
    return (
      <div className={createStyle['wrapper-create']}>
        <div className='container'>
            <div className={createStyle['create-nav']}>
                <div className={createStyle['create-back']}>
                    <a href="/">
                        <Image src={BackArrow} 
                            alt="Image Description"
                            width="100"      
                            height="100" 
                            placeholder='blur'
                            className={createStyle['back-arrow']}
                        />
                    </a>
                    <a href='/' className={createStyle['back-desc']}>Back</a>
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
            </div>
        </div>
      </div>
    );
  }