import { Strategy } from 'passport-local';

import AuthService from '../models/application/AuthService';
import User from '../models/model/User';

export default new Strategy(
    {
        usernameField: 'passport',
        passwordField: 'password'
    }, async (passport, password, done) => {
        try {
            //过去用户登录信息
            const authService = new AuthService();
            const user = await authService.login(123, 123, User);
            if (user) {
                done(null, user);
            } else {
                done(null, false, { message: 'Unknown user' });
            }
        } catch (err) {
            return done(err);
        }
    }
)