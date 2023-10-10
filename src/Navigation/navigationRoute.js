import splash from '../Containers/splash';
import onBoarding from '../Containers/onBoarding'
import SignUpEmpty from '../Containers/Auth/SignInEmpty';
import AuthNavigation from './Type/AuthNavigation';
import PassRecovery from '../Containers/Auth/PassRecovery'
import VerifyIdentity from '../Containers/Auth/VerifyIdentity';
import ItsYou from '../Containers/Auth/ItsYou';
import CreatePass from '../Containers/Auth/CreatePass';

export const StackRoute = {
  splash,
  onBoarding,
  AuthNavigation,
};

export const AuthRoute = {
  SignUpEmpty,
  PassRecovery,
  VerifyIdentity,
  ItsYou,
  CreatePass
};
