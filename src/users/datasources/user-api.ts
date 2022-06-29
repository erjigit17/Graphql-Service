import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { TypeUserBody } from '../types';
import { usersServiceUrl } from '../../settings';


export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = usersServiceUrl + '/v1/users';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  getUser(userId: string) {
    return this.get(`/${userId}`);
  }

  login(email: string, password: string) {
    return this.post(`/login`, { email, password });
  }

  register(body: TypeUserBody) {
    return this.post(`/register`, body);
  }

}
