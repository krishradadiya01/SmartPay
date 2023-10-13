import Images from '../Assets/Images';
import {US, UK, Singapore, China, Netherland, Indonesia} from '../Assets/Svgs';
import {moderateScale} from '../Common/constant';

export const OnBoardingData = [
  {
    image: Images.onBoarding1,
    Title: 'Finance app the safest and most trusted',
    Description:
      'Your finance work starts here. Our here to help you track and deal with speeding up your transactions.',
  },
  {
    image: Images.onBoarding2,
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
