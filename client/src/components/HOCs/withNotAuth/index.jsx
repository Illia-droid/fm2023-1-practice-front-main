import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../store/slices/userSlice';
import Spinner from '../../Spinner/Spinner';

const withNotAuth = (Component) => {
  return (props) => {
    const { history } = props;
    const { isFetching, data } = useSelector((state) => state.userStore);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getUser(history.replace)); //eslint-disable-next-line
    }, []);
    if (isFetching) {
      return <Spinner mtop />;
    }
    if (!data) {
      return <Component history={history} />;
    }
    return null;
  };
};
export default withNotAuth;
