// import User from '../models/user';
// import AuthService from '../models/application/AuthService';
// import User from '../models/model/User';

import RequestJsonApi from '../libs/RequestJsonApi';
import SaasApiServiceLocation from '../models/apiServiceLocation/SaasApiServiceLocation';

export default async (ctx, next) => {
  const title = '首页';
  const bodyclass = 'saasIndex'

  
  // const authService = new AuthService();

  // const user = await authService.login(123, 123, User);

  // console.log(user);
  
  // let data = {
  //     data: {
  //         type: 'users',
  //         attributes: { 
  //             cellPhone1: 123, 
  //             password: 123
  //         }
  //     }
  // };
  // const requestJsonApi = new RequestJsonApi(SaasApiServiceLocation.get(), '/users', data);
  // const { header, body } = await requestJsonApi.post();
  // console.log(header);
  // console.log(header.statusCode);
  // console.log(body);

  

  // let body = await authService.login();
  // await userAdapter.verification();
  // await verification();
  // const user = new User();

  // const { res, body } = await user.get('/');

  // const requestJsonApi1 = new RequestJsonApi('https://api.github.com', '/');
  // const { res1, body1 } = await requestJsonApi1.get();
  // console.log(res);
  // console.log(body1);
  // ctx.cookies.set('test', 'value3');
  // ctx.cookies.set('test2', 'value2');

  // if (ctx.isAuthenticated()) {
  //   console.log('isAuthenticated');
  //   ctx.logout();
  // }

  const pageJs = webpackIsomorphicTools.assets().javascript.index;

  await ctx.render('index/index', {
    title, bodyclass, pageJs
  })
}
