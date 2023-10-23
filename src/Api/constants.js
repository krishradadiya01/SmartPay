import Images from '../Assets/Images';
import {US, UK, Singapore, China, Netherland, Indonesia} from '../Assets/Svgs';
import {moderateScale} from '../Common/constant';
import {colors} from '../Themes/colors';
import strings from '../I18n/mergeString';

export const OnBoardingData = [
  {
    image: Images.OnBoarding1,
    Title: 'Finance app the safest and most trusted',
    Description:
      'Your finance work starts here. Our here to help you track and deal with speeding up your transactions.',
  },
  {
    image: Images.OnBoarding2,
    Title: 'The fastest transaction process only here',
    Description:
      'Get easy to pay all your bills with just a few steps. Paying your bills become fast and efficient.',
  },
];

export const CountriesData = [
  {
    svgIcon: <US height={moderateScale(24)} width={moderateScale(32)} />,
    title: 'US',
    FullName: 'United States',
    id: 1,
  },
  {
    svgIcon: <UK height={moderateScale(24)} width={moderateScale(32)} />,
    title: 'GB',
    FullName: 'United Kingdom',
    id: 2,
  },
  {
    svgIcon: <Singapore height={moderateScale(24)} width={moderateScale(32)} />,
    title: 'SG',
    FullName: 'Singapore',
    id: 3,
  },
  {
    svgIcon: <China height={moderateScale(24)} width={moderateScale(32)} />,
    title: 'CN',
    FullName: 'China',
    id: 4,
  },
  {
    svgIcon: (
      <Netherland height={moderateScale(24)} width={moderateScale(32)} />
    ),
    title: 'NL',
    FullName: 'Netherland',
    id: 5,
  },
  {
    svgIcon: <Indonesia height={moderateScale(24)} width={moderateScale(32)} />,
    title: 'ID',
    FullName: 'Indonesia',
    id: 6,
  },
];

export const HomeData = [
  {
    image: Images.Gym,
    name: 'Gym',
    subName: 'Payment',
    dollars: '- $45.99',
    color: colors.black,
  },
  {
    image: Images.Deposit2,
    name: 'Bank of America',
    subName: 'Deposit',
    dollars: '+ $1,328.00',
    color: colors.numbersColor,
  },
  {
    image: Images.Sent,
    name: 'To Brody Armando',
    subName: 'Sent',
    dollars: '- $699.00',
    color: colors.black,
  },
];

export const ContactsData = [
  {
    image: Images.Girl,
    name: strings.GirlName,
    id: 1,
  },
  {
    image: Images.Boy,
    name: strings.BoyName,
    id: 2,
  },
  {
    image: Images.Girl,
    name: strings.Girl2name,
    id: 3,
  },
];

export const DollarsData = [strings.$1000, strings.$2000, strings.$3000];

export const percentageData = [
  strings.per10,
  strings.per50,
  strings.per70,
  strings.per100,
];

export const TodayData = [
  {
    image: Images.UiKit,
    mainName: strings.SmartPayUi,
    subName: strings.UiNet,
    payments: strings.NineNine,
  },
  {
    image: Images.Gym,
    mainName: strings.Gym,
    subName: strings.Payment,
    payments: strings.FourFive,
  },
  {
    image: Images.Deposit2,
    mainName: strings.BOA,
    subName: strings.Deposit,
    payments: strings.OneThreeTwoEight,
    color: colors.numbersColor,
  },
];

export const YesterdayData = [
  {
    image: Images.BitCoin,
    mainName: strings.Bitcoin,
    subName: strings.Deposit,
    payments: strings.TwoFiveFIveZero,
  },
  {
    image: Images.Deposit2,
    mainName: strings.BOA,
    subName: strings.Deposit,
    payments: strings.OneThreeTwoEight,
    color: colors.numbersColor,
  },
  {
    image: Images.Gym,
    mainName: strings.Gym,
    subName: strings.Payment,
    payments: strings.FourFive,
  },
];

export const SpotifyData = [
  {
    image: Images.Spotify,
    mainName: strings.SpotifyPremium,
    subName: strings.Payment,
    payments: strings.TwoFour,
    date: strings.Dec28,
  },
  {
    image: Images.Spotify,
    mainName: strings.SpotifyPremium,
    subName: strings.Payment,
    payments: strings.OneTwoFour,
    date: strings.Nov28,
  },
  {
    image: Images.Spotify,
    mainName: strings.SpotifyPremium,
    subName: strings.Payment,
    payments: strings.fiveFour,
    date: strings.Oct28,
  },
  {
    image: Images.Spotify,
    mainName: strings.SpotifyPremium,
    subName: strings.Payment,
    payments: strings.TwoFour,
    date: strings.Dec28,
  },
  {
    image: Images.Spotify,
    mainName: strings.SpotifyPremium,
    subName: strings.Payment,
    payments: strings.OneTwoFour,
    date: strings.Nov28,
  },
];
