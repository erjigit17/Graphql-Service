import { UserAPI } from './users/datasources/user-api';


const allDataSources = () => {
  return {
    userAPI: new UserAPI(),
  };
};

export default allDataSources

