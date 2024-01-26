import AddStyle from './add.module.css';
import BackArrow from '../../assets/images/left.png';
import Image from 'next/image';

export default function Add() {
    return (
      <div className={AddStyle['wrapper-add']}>
        <div className='container'>
            <div className={AddStyle['add-nav']}>
              <div className={AddStyle['addnav-left']}>
                <a href="/profile">
                          <Image src={BackArrow} 
                              alt="Image Description"
                              width="100"      
                              height="100" 
                              placeholder='blur'
                              className={AddStyle['back-add']}
                          />
                </a>
                <a href="/profile" className={AddStyle['add-back']}>Back</a>
              </div>
              <div className={AddStyle['addnav-right']}>
                <button className={AddStyle['add-save']}>Save</button>
              </div>
            </div>
            <div className={AddStyle['interest-card']}>
              <h5 className={AddStyle['interest-tittle']}>Tell everyone about yourself</h5>
              <h2 className={AddStyle['interest-desc']}>What interest you?</h2>
            </div>
            <input className={AddStyle['interest-input']} />
        </div>
      </div>
    );
  }