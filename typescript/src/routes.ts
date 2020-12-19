import { Request, Response,  } from 'express';
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'diego@rocketseat.com.br',
    password: '123456',
    techs: [ 
      'Node.js', 
      'React', 
      'React-native',
      { title: 'Javascript', experience: 100 },
    ]
  });

  return response.json({ message: 'Hello World' });
}

