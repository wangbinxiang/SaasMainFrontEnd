import { Strategy } from 'passport-local';

import AuthenticateService from '../models/application/AuthenticateService';
import User from '../models/model/User';

export default new Strategy(
    {
        usernameField: 'passport',
        passwordField: 'password'
    }, async (passport, password, done) => {
        try {
            //过去用户登录信息
            const authenticateService = new AuthenticateService();
            const user = await authenticateService.login(passport, password, User);
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