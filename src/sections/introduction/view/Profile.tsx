import React from 'react';
import styles from '../style/Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src={'assets/profile.png'}
        alt='프로필 이미지'
        className={styles.profileImage}
      />
    </div>
  );
}
