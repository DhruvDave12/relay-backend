import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { getToken } from 'src/constants/getToken';
import { SignupInput } from 'src/graphql.types';
import { AuthenticationService } from './authentication.service';
import { Authentication } from './entities/authentication.entity';

@Resolver(() => Authentication)
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Mutation('signup')
  createAuthentication(@Args('input') input: SignupInput) {
    return this.authenticationService.signup(input);
  }

  @Query('getUser')
  getUser(@Context() context) {
    const token = getToken(context);
    return this.authenticationService.getUser(token);
  }
}
