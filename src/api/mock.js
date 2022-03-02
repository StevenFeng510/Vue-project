import Mock from 'mockjs';
import homeApi from './mockServerData/home';
import userApi from './mockServerData/user';

Mock.mock('/api/home/getData', homeApi.getStatisticalData);
Mock.mock(/user\/add/, 'post', userApi.createUser);
Mock.mock(/user\/edit/, 'post', userApi.updateUser);

Mock.mock(/user\/getUser/, 'post', userApi.getUserList);
