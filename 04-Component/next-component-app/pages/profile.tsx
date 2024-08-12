import Personal from '@/components/personal';
import Company from '@/components/company';

const Profile = () => {
  return (
    <>
      <Personal
        name="배용호"
        email="test@naver.com"
        phone="010-1111-1111"
        age={20}
      >
        <b>사용자 기본프로필</b>
      </Personal>

      <hr></hr>

      <Company
        company="switch"
        role="풀스택개발자"
        address="서울시 강남구 테헤란로"
      >
        <span>회사정보</span>
      </Company>
    </>
  );
};

export default Profile;
