// Profile.js
import React from 'react';
import '../style/Profile.css'; // CSS 파일 가져오기

export default function Profile() {
  return (
    <div className="profile-container">
      <img
        src={'assets/profile.png'}
        alt='프로필 이미지'
        className="profile-image" // CSS 클래스 사용
      />
    </div>
  );
}
