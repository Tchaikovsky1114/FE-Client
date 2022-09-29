import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useUser } from '../../auth/hooks/useUser';
import { SignupRecordType } from '../../auth/signup/Signup';
import UserForm from '../../common/ui/UserForm';
import CardLayout from '../common/CardLayout';

const MyProfile = () => {

  const {user} = useUser()

  console.log(user);
  const [formValue, setFormValue] = useState<SignupRecordType>({
    lastname: '',
    firstname: '',
    lastReadname: '',
    firstReadname: '',
    postCode: '',
    address: '',
    detailAddress: '',
    phone: '',
    email: '',
    password: '',
    passwordConfirm: '',
    birthYear: '',
    birthMonth: '',
    birthDay: ''
  })
  return (
    <CardLayout title='정보 수정'>
      <Outlet />
    </CardLayout>
  );
};

export default MyProfile;