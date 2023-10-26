import splash from '../Containers/splash';
import OnBoarding from '../Containers/OnBoarding'
import AuthNavigation from './Type/AuthNavigation';
import TabNavigation from './Type/TabNavigation';
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
import HomeScreen from '../Containers/Screen/HomeScreen';
import MyCardScreen from '../Containers/Screen/MyCardScreen';
import ScanScreen from '../Containers/Screen/ScanScreen'
import ActivityScreen from '../Containers/Screen/ActivityScreen';
import ProfileScreen from '../Containers/Screen/ProfileScreen';
import TransferMoney from '../Components/HomeTab/TransferMoney';
import SendMoney from '../Components/HomeTab/SendMoney';
import TransferProof from '../Components/HomeTab/TransferProof';
import TopUpScreen from '../Components/HomeTab/TopUpScreen';
import Confirmation from '../Components/HomeTab/Confirmation'
import WithDrawBalance from '../Components/HomeTab/WithDrawBalance';
import HistoryTrans from '../Components/HomeTab/HistoryTrans';
import HistoryDetails from '../Components/HomeTab/HistoryDetails';
import SeeMyCard from '../Components/MyCardTab/SeeMyCard';
import EditCard from '../Components/MyCardTab/EditCard';

export const StackRoute = {
  splash,
  OnBoarding,
  AuthNavigation,
  TabNavigation,
  TransferMoney,
  SendMoney,
  TransferProof,
  TopUpScreen,
  Confirmation,
  WithDrawBalance,
  HistoryTrans,
  HistoryDetails,
  SeeMyCard,
  EditCard
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

export const TabRoute = {
  HomeScreen,
  MyCardScreen,
  ScanScreen,
  ActivityScreen,
  ProfileScreen
}
