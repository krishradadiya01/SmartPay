import splash from '../Containers/splash';
import onBoarding from '../Containers/onBoarding'
import AuthNavigation from './Type/AuthNavigation';
import SignInEmpty from '../Containers/Auth/SignInEmpty';
import PassRecovery from '../Containers/Auth/PassRecovery'
import OtpAuth from '../Containers/Auth/OtpAuth';
import VerifyIdentity from '../Containers/Auth/VerifyIdentity';
import CreatePass from '../Containers/Auth/CreatePass';
import SignUpEmpty from '../Containers/Auth/SignUpEmpty';
import CountryRes from '../Containers/Auth/CountryRes';
import Reasons from '../Containers/Auth/Reasons';
import CreatePin from '../Containers/Auth/CreatePin';
import FaceIdentity from '../Containers/Auth/FaceIdentity';
import ProofRes from '../Containers/Auth/ProofRes';
import CardOnBoarding from '../Containers/Auth/CardOnBoarding';
import CardStyle from '../Containers/Auth/CardStyle';
import NewCard from '../Containers/Auth/NewCard';

export const StackRoute = {
  splash,
  onBoarding,
  AuthNavigation,
};

export const AuthRoute = {
  SignInEmpty,
  PassRecovery,
  OtpAuth,
  VerifyIdentity,
  CreatePass,
  SignUpEmpty,
  CountryRes,
  Reasons,
  CreatePin,
  FaceIdentity,
  ProofRes,
  CardOnBoarding,
  CardStyle,
  NewCard,
};
