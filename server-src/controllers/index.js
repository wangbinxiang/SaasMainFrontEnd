import User from '../models/user';
import UserAdapter, { verification } from '../models/adapter/userAdapter';
import AuthService from '../models/application/authService';

export default async (ctx, next) => {
  const title = '首页';
  const bodyclass = 'saasIndex'

  const authService = new AuthService(UserAdapter);


  // const requestJsonApi = new RequestJsonApi('https://api.github.com');

  

  await authService.login();
  // await userAdapter.verification();
  // await verification();
  // const user = new User();

  // const { res, body } = await user.get('/');

  // const { res, body } = await requestJsonApi.get('/');
  //console.log(res);
  //console.log(body);
  ctx.cookies.set('test', 'value3');
  // ctx.cookies.set('test2', 'value2');

  // if (ctx.isAuthenticated()) {
  //   console.log('isAuthenticated');
  //   ctx.logout();
  // }

  const pageJs = webpackIsomorphicTools.assets().javascript.app;

  console.log(pageJs);

  await ctx.render('index/index', {
    title, bodyclass, pageJs
  })
}
