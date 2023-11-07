import React, { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const OnlyTerminalLetteringLogo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="101"
    height="9"
    viewBox="0 0 101 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M71.6267 0.478577V1.01021V1.54058V2.07094V2.60258V3.13421V3.66458V4.19621V4.72658V5.25821V5.78858V6.32021V6.85058L71.0944 6.32021L70.5634 5.78858L70.0311 5.25821L69.5001 4.72658L68.9678 4.19621L68.4355 3.66458L67.9044 3.13421L67.3721 2.60258L66.8411 2.07094L66.3088 1.54058L65.7778 1.01021L65.2455 0.478577H64.7144H64.1821V1.01021V1.54058V2.07094V2.60258V3.13421V3.66458V4.19621V4.72658V5.25821V5.78858V6.32021V6.85058V7.38221V7.91384V8.44421V8.97458H64.7144H65.2455V8.44421V7.91384V7.38221V6.85058V6.32021V5.78858V5.25821V4.72658V4.19621V3.66458V3.13421V2.60258V2.07094L65.7778 2.60258L66.3088 3.13421L66.8411 3.66458L67.3721 4.19621L67.9044 4.72658L68.4355 5.25821L68.9678 5.78858L69.5001 6.32021L70.0311 6.85058L70.5634 7.38221L71.0944 7.91384L71.6267 8.44421L72.1578 8.97458H72.6901V8.44421V7.91384V7.38221V6.85058V6.32021V5.78858V5.25821V4.72658V4.19621V3.66458V3.13421V2.60258V2.07094V1.54058V1.01021V0.478577H72.1578H71.6267Z"
      fill="white"
    />
    <path
      d="M43.0863 8.97738V0.478577H44.1663L47.5863 3.93458L50.5023 0.478577H51.5823V8.97738H50.5023V2.13458L48.1263 5.01458H47.0463L44.1663 2.13458V8.97738H43.0863Z"
      fill="white"
    />
    <path
      d="M21.9805 0.478577H21.978H21.4482H20.9172H20.3849H19.8538H19.3215H18.7905H18.2582H17.7272H17.1949H16.6638H16.1315H15.6005H15.0682H14.5359V1.01021V1.54058V2.07094V2.60258V3.13421V3.66458V4.19621V4.72658V5.25821V5.78858V6.32021V6.85058V7.38221V7.91384V8.44421V8.97458H15.0682H15.6005H16.1315H16.6638H17.1949H17.7272H18.2582H18.7905H19.3215H19.8538H20.3849H20.9172H21.4482H21.978H21.9805H22.5103H23.0413V8.44421V7.91384H22.5103H21.9805H21.978H21.4482H20.9172H20.3849H19.8538H19.3215H18.7905H18.2582H17.7272H17.1949H16.6638H16.1315H15.6005V7.38221V6.85058V6.32021V5.78858H16.1315H16.6638H17.1949H17.7272H18.2582H18.7905H19.3215H19.8538H20.3823H20.3849H20.9146H21.4457H21.978V5.25821V4.72658H21.4457H20.9146H20.3849H20.3823H19.8538H19.3215H18.7905H18.2582H17.7272H17.1949H16.6638H16.1315H15.6005V4.19621V3.66458V3.13421V2.60258V2.07094V1.54058H16.1315H16.6638H17.1949H17.7272H18.2582H18.7905H19.3215H19.8538H20.3849H20.9172H21.4482H21.978H21.9805H22.5103H23.0413V1.01021V0.478577H22.5103H21.9805Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.280029 0.478577L0.280029 1.55858L3.98796 1.55858V8.97458H5.06796V1.55858L8.77603 1.55858V0.478577H5.06796H3.98796H0.280029Z"
      fill="white"
    />
    <rect x="57.3422" y="0.478577" width="1.08" height="8.496" fill="white" />
    <path
      d="M92.7336 0.478577H93.8136V8.03858H100.294V8.97458H92.7336V0.478577Z"
      fill="white"
    />
    <path
      d="M36.2614 9L34.3145 5.64725H35.3793L37.3261 9H36.2614Z"
      fill="white"
    />
    <path
      d="M36.2593 0.484917H28.8013V8.99895H29.8667V5.8054H37.3247V0.478577H36.2593V0.484917ZM36.2593 4.74511H29.8667V1.54901H36.2593V4.74511Z"
      fill="white"
    />
    <path
      d="M85.908 0.484917H78.45V8.99895H79.5154V5.8054H85.908V8.99895H86.9734V0.478577H85.908V0.484917ZM85.908 4.74511H79.5154V1.54901H85.908V4.74511Z"
      fill="white"
    />
  </svg>
);

export default OnlyTerminalLetteringLogo;
