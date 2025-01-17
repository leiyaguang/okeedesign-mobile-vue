import { CreateElement } from 'vue/types/vue';
import { createNamespace } from '../../utils';
import { RenderContent } from '../../utils/types';
export interface EmptyContentProps {
  emptyContentImage?: RenderContent<void>;
  emptyContentText?: RenderContent<void>;
}

const [createComponent, bem] = createNamespace('empty-content');

// @ts-ignore
function EmptyContent(h: CreateElement, props: EmptyContentProps) {
  const { emptyContentImage, emptyContentText } = props;

  return (
    <div class={bem()}>
      {typeof emptyContentImage === 'function'
        ? emptyContentImage()
        : emptyContentImage || (
            <svg
              width="160"
              height="91"
              viewBox="0 0 160 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.779739" width="160" height="90.2203" fill="white" fill-opacity="0.01" />
              <path
                d="M75.243 80.4273C97.5291 80.4273 115.595 74.5104 115.595 67.2115C115.595 59.9125 97.5291 53.9956 75.243 53.9956C52.957 53.9956 34.8906 59.9125 34.8906 67.2115C34.8906 74.5104 52.957 80.4273 75.243 80.4273Z"
                fill="url(#paint0_linear)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.6917 32.2028C35.7577 31.5421 37.4033 31.0451 41.3731 27.1846C45.3428 23.3241 49.3681 28.9564 55.338 26.6951C61.3078 24.4338 61.8535 21.6959 70.9848 30.0825C75.1939 33.6468 78.5418 32.2357 80.6048 33.6468C82.6678 35.0578 84.5821 40.6035 84.5821 40.6035H81.2555H31.6917C31.6917 40.6035 25.375 38.3851 25.375 36.9187C25.375 35.4523 27.6258 32.8634 31.6917 32.2028Z"
                fill="url(#paint1_linear)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M89.1165 42.5C92.2627 42.0117 93.5362 41.6444 96.608 38.7909C99.6798 35.9375 102.795 40.1005 107.414 38.4291C112.034 36.7577 112.456 34.7341 119.522 40.9328C122.779 43.5673 125.369 42.5243 126.966 43.5673C128.562 44.6103 130.043 48.7093 130.043 48.7093H127.469H89.1165C89.1165 48.7093 84.2285 47.0696 84.2285 45.9857C84.2285 44.9018 85.9702 42.9883 89.1165 42.5Z"
                fill="url(#paint2_linear)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M62.1088 19.1057C59.9226 19.1057 58.1504 20.878 58.1504 23.0641V66.6641C58.1504 66.8691 58.3165 67.0352 58.5215 67.0352H90.2361C92.9689 67.0352 95.1842 64.8199 95.1842 62.0872V24.541H103.964V24.0538C103.964 21.321 101.749 19.1057 99.0161 19.1057H94.8146C94.8141 19.1057 94.8136 19.1057 94.8131 19.1057H62.1088Z"
                fill="url(#paint3_linear)"
              />
              <rect
                opacity="0.712221"
                x="60.6172"
                y="21.5727"
                width="31.0132"
                height="42.9956"
                rx="1.52247"
                fill="url(#paint4_linear)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.0765 58.2247H51.1016V62.0872C51.1016 64.8199 53.3169 67.0352 56.0496 67.0352H90.4676C88.0557 66.9791 86.0765 65.0074 86.0765 62.5833V58.2247ZM95.0697 62.6404C95.064 65.0633 93.1024 67.0267 90.6802 67.0352C93.0725 66.9789 95.0389 65.0379 95.0697 62.6404Z"
                fill="url(#paint5_linear)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M99.5596 19.1057C97.1266 19.1057 95.1543 21.078 95.1543 23.511V27.2115H103.965V23.511C103.965 21.078 101.993 19.1057 99.5596 19.1057Z"
                fill="url(#paint6_linear)"
              />
              <path
                d="M46.873 32.1454L58.8237 38.1765L56.4003 41.4763L46.873 32.1454Z"
                fill="url(#paint7_linear)"
              />
              <path
                d="M46.873 32.1454L56.399 41.4757L57.1495 37.6098L46.873 32.1454Z"
                fill="url(#paint8_linear)"
              />
              <path
                d="M46.873 32.1454L52.7314 36.7442L57.1474 37.6086L46.873 32.1454Z"
                fill="url(#paint9_linear)"
              />
              <path
                d="M48.502 32.9659L62.3649 38.2632L58.8237 38.1756L48.502 32.9659Z"
                fill="url(#paint10_linear)"
              />
              <path
                opacity="0.398493"
                d="M101.85 27.9163C101.373 33.6828 98.8564 36.4074 96.3403 37.9289C92.3354 40.3508 87.7046 39.1453 86.5592 37.9289C84.6941 35.9485 88.1643 32.933 91.6022 35.1838C95.04 37.4346 85.5602 45.3668 75.6593 43.9622C65.7585 42.5576 57.7969 38.7193 57.7969 38.7193"
                stroke="url(#paint11_linear)"
                stroke-width="0.380617"
                stroke-linecap="round"
                stroke-dasharray="1.14"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M38.3359 56.5601C38.3359 56.3709 38.4893 56.2175 38.6785 56.2175H39.3718C39.561 56.2175 39.7144 56.3709 39.7144 56.5601V62.9896C39.7144 63.1788 39.561 63.3322 39.3718 63.3322H38.6785C38.4893 63.3322 38.3359 63.1788 38.3359 62.9896L38.3359 56.5601Z"
                fill="#F3F3F3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.6126 47.7296C36.3323 50.3878 31.9243 58.5405 38.1009 59.4533C44.2774 60.3662 44.0018 54.9396 42.9185 52.9977C41.8353 51.0558 40.6124 49.9684 40.6124 47.7296C40.6124 45.4908 38.8928 45.0714 37.6126 47.7296Z"
                fill="url(#paint12_linear)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M116.793 64.1427C116.793 63.9535 116.946 63.8001 117.136 63.8001H117.202C117.391 63.8001 117.545 63.9535 117.545 64.1427V67.7496C117.545 67.9388 117.391 68.0921 117.202 68.0921H117.136C116.946 68.0921 116.793 67.9388 116.793 67.7496L116.793 64.1427Z"
                fill="#F3F3F3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M116.315 58.323C115.479 59.9926 112.6 65.1136 116.633 65.687C120.667 66.2604 120.487 62.8518 119.78 61.632C119.072 60.4122 118.274 59.7292 118.274 58.323C118.274 56.9167 117.151 56.6533 116.315 58.323Z"
                fill="url(#paint13_linear)"
              />
              <rect
                width="15.5066"
                height="10.5727"
                rx="0.704846"
                transform="matrix(-1 0 0 1 112.775 54.7004)"
                fill="url(#paint14_linear)"
              />
              <path
                d="M97.9746 64.3575L96.9776 64.8805L94.6032 61.5047L95.9543 61.0441L97.9746 64.3575Z"
                fill="#FFBCA8"
              />
              <path
                d="M96.8694 64.6122C96.8694 64.6122 96.8294 64.6167 96.8103 64.6343C96.5427 64.8807 96.347 65.1404 96.2003 65.2705C95.9589 65.4847 95.7508 65.701 95.5937 65.8267C95.4366 65.9524 95.1363 66.1352 95.0144 66.2969C94.8925 66.4587 94.9136 66.6062 94.939 66.6956C94.9545 66.7504 94.9563 66.8534 95.0179 66.98C95.0415 67.0286 95.0839 67.0735 95.1261 67.0616C95.9004 66.8439 96.6626 66.4633 97.0892 66.2491C97.5108 66.0374 98.1517 65.7327 98.7073 65.4585C98.7645 65.4303 98.7792 65.3476 98.7481 65.2819C98.5674 64.9 98.468 64.6963 98.3632 64.5584C98.2629 64.4264 98.1649 64.2575 97.9783 64.1169C97.9469 64.0933 97.9038 64.0702 97.8807 64.1008C97.8126 64.1911 97.7564 64.2658 97.6895 64.3546C97.5739 64.5079 97.3331 64.5794 97.229 64.6036C97.1249 64.6279 96.8694 64.6122 96.8694 64.6122Z"
                fill="#3E466E"
              />
              <path
                d="M94.3949 65.3691L93.1954 65.219L94.7813 62.4978L96.3672 63.0263L94.3949 65.3691Z"
                fill="#FFBCA8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M100.107 59.3689C101.722 58.4529 104.544 56.8529 105.021 54.7555C105.637 52.0525 105.176 52.4984 105.176 52.4984L102.427 51.3286L99.7918 51.1762L99.628 51.806L98.5156 51.8726L97.2391 52.2325C97.2391 52.2325 93.6811 53.4173 91.611 55.0324C90.5285 55.877 90.6173 56.7173 90.9484 57.3268L90.9419 57.3301C90.9419 57.3301 93.0909 60.8128 94.3581 62.5524C93.9856 63.2837 93.7248 63.8185 93.7328 63.8711C93.76 64.0498 95.0698 64.5075 95.7071 64.5013C96.0643 64.4979 96.8329 63.2852 97.581 62.105C98.1679 61.1791 98.742 60.2732 99.095 59.9868C99.2748 59.8408 99.6406 59.6334 100.107 59.3689ZM95.8414 59.6961C95.1959 58.6243 94.4302 57.491 94.4302 57.491L94.1079 57.0049C94.1343 56.9935 94.155 56.9854 94.1692 56.9811C94.4132 56.9072 97.0302 56.4882 97.0302 56.4882L96.7984 57.8401C96.7914 57.8812 96.379 58.6691 95.8588 59.6629C95.853 59.6739 95.8472 59.685 95.8414 59.6961Z"
                fill="url(#paint15_linear)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M101.087 37.3686C101.087 37.3686 100.676 39.6576 101.474 40.0607C102.171 40.3841 101.499 41.1387 101.358 41.2208C101.217 41.3028 101.607 41.69 101.607 41.69C101.607 41.69 102.268 42.079 102.579 41.9998C102.89 41.9206 103.337 41.2208 103.337 41.2208C103.337 41.2208 102.504 40.5541 102.757 40.1512C103.01 39.7483 103.526 39.3108 103.526 39.3108C103.526 39.3108 104.026 38.8837 103.487 38.6611C103.617 38.2574 103.584 37.7399 103.584 37.7399L102.413 37.3686L101.222 37.0793L101.087 37.3686Z"
                fill="url(#paint16_linear)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M101.77 37.7587C103.095 37.4346 103.447 37.9325 103.447 38.1431C103.447 38.3537 103.322 38.8414 103.322 38.8414C103.322 38.8414 103.566 38.748 103.666 38.6995C104.073 38.5021 104.342 38.1521 104.437 37.8794C104.617 37.3699 104.09 36.2891 102.726 36.4502C102.25 36.3729 102.174 35.7713 101.348 36.1414C100.521 36.5114 100.242 36.227 100.242 36.6064C100.242 36.9858 100.276 38.1551 101.77 37.7587Z"
                fill="#353D64"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M98.4956 43.593C98.4956 43.593 97.1146 46.6237 96.8102 47.4216C96.6684 47.7527 93.1574 49.0697 93.1574 49.0697C93.1574 49.0697 91.9803 49.171 91.8114 49.7552C91.7474 50.0054 91.7761 50.4339 92.1755 50.4695C92.5748 50.505 93.3142 49.8797 93.3142 49.8797C93.3142 49.8797 97.2364 50.0177 97.9796 48.5975C98.7229 47.1774 100.243 44.2012 100.243 44.2012L98.6169 43.4229L98.4956 43.593Z"
                fill="url(#paint17_linear)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M101.167 40.9842C101.167 40.9842 102.357 42.2433 103.354 40.9842C103.47 40.9083 105.912 40.7895 107.643 43.5321C107.669 43.6883 106.186 45.2283 106.186 45.2283H105.883C105.883 45.2283 105.881 51.1619 105.176 54.1646C105.084 54.4769 97.8926 52.2433 97.8926 52.2433C97.8926 52.2433 98.2925 47.1532 98.7786 45.6358C98.6633 45.4086 97.0703 44.1495 97.0703 44.1495C97.0703 44.1495 97.5723 43.0971 98.5793 42.126C99.5863 41.1549 101.167 40.9842 101.167 40.9842Z"
                fill="#5B73EA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M105.756 44.8112C105.801 45.2007 107.228 46.5305 107.759 47.0074C107.891 47.0139 105.05 49.3558 104.829 49.6283C104.227 50.3717 104.437 51.1781 105.094 51.1781C105.751 51.1781 105.546 49.949 105.655 49.8851C107.565 48.7687 107.759 48.7687 109.023 48.0107C110.123 47.3893 108.652 45.5088 107.234 43.4346C105.816 41.3605 105.71 44.4218 105.756 44.8112Z"
                fill="url(#paint18_linear)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M105.884 42.0132C105.884 42.0132 106.345 42.2329 106.526 42.3415C106.841 42.5304 107.057 42.7165 107.196 42.8286C107.626 43.1762 107.843 43.5327 107.968 43.8002C108.072 43.9852 106.966 45.6608 105.884 45.4708C105.662 45.4619 105.178 44.4335 105.178 44.4335L105.884 42.0132Z"
                fill="#5B73EA"
              />
              <path
                d="M93.4206 64.9411C93.4206 64.9411 93.3863 64.92 93.3604 64.9221C92.9978 64.9516 92.6837 65.0357 92.4881 65.048C92.166 65.0681 91.8688 65.1105 91.6676 65.1128C91.4664 65.1151 91.1172 65.0743 90.9216 65.1267C90.726 65.1791 90.6518 65.3083 90.6168 65.3944C90.5953 65.4471 90.5332 65.5294 90.5038 65.6671C90.4926 65.7199 90.4983 65.7814 90.5389 65.798C91.2831 66.1032 92.1181 66.2725 92.5861 66.3663C93.0486 66.4591 93.7412 66.6136 94.3478 66.7396C94.4103 66.7525 94.4728 66.6964 94.4887 66.6255C94.5814 66.2133 94.6285 65.9915 94.6309 65.8184C94.6332 65.6526 94.6598 65.4592 94.5994 65.2336C94.5892 65.1956 94.5694 65.1508 94.5323 65.1608C94.4231 65.19 94.3329 65.2142 94.2254 65.243C94.04 65.2927 93.8063 65.2008 93.7092 65.1558C93.6122 65.1108 93.4206 64.9411 93.4206 64.9411Z"
                fill="#3E466E"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="34.8906"
                  y1="53.9956"
                  x2="34.8906"
                  y2="80.4273"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FCFCFE" />
                  <stop offset="1" stop-color="#EBEBF0" stop-opacity="0.01" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="28.1639"
                  y1="25.9193"
                  x2="28.1639"
                  y2="40.6035"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F6F6F7" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="86.3866"
                  y1="37.8557"
                  x2="86.3866"
                  y2="48.7093"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F6F6F7" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear"
                  x1="104.669"
                  y1="74.5024"
                  x2="104.669"
                  y2="15.0528"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D8DAE4" />
                  <stop offset="1" stop-color="#FAFAFC" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear"
                  x1="61.8648"
                  y1="21.5727"
                  x2="61.8648"
                  y2="61.1089"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#FAFCFE" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear"
                  x1="51.1016"
                  y1="58.2247"
                  x2="51.1016"
                  y2="67.0352"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EEF0F8" />
                  <stop offset="1" stop-color="#BDC0C8" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear"
                  x1="103.194"
                  y1="26.7189"
                  x2="103.194"
                  y2="20.0307"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EEF0F8" />
                  <stop offset="1" stop-color="#BDC0C8" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear"
                  x1="43.5292"
                  y1="36.5268"
                  x2="50.9976"
                  y2="45.3345"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.017183" stop-color="#D36C16" />
                  <stop offset="1" stop-color="#D16911" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear"
                  x1="42.6556"
                  y1="36.5899"
                  x2="50.9996"
                  y2="45.8419"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC652" />
                  <stop offset="1" stop-color="#D97945" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear"
                  x1="44.2292"
                  y1="34.6785"
                  x2="46.9832"
                  y2="40.7213"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FEBE86" />
                  <stop offset="1" stop-color="#FFD286" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear"
                  x1="44.4273"
                  y1="35.6211"
                  x2="46.6941"
                  y2="42.5617"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC185" />
                  <stop offset="1" stop-color="#FFD185" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear"
                  x1="59.0724"
                  y1="28.376"
                  x2="59.0724"
                  y2="43.6486"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFD185" stop-opacity="0.24949" />
                  <stop offset="1" stop-color="#DE8443" />
                </linearGradient>
                <linearGradient
                  id="paint12_linear"
                  x1="34.8906"
                  y1="45.8899"
                  x2="34.8906"
                  y2="59.5559"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EEEEEE" />
                  <stop offset="1" stop-color="#FCFCFD" />
                </linearGradient>
                <linearGradient
                  id="paint13_linear"
                  x1="114.537"
                  y1="57.1674"
                  x2="114.537"
                  y2="65.7514"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EEEEEE" />
                  <stop offset="1" stop-color="#FCFCFD" />
                </linearGradient>
                <linearGradient
                  id="paint14_linear"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="10.5727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EEF0F8" />
                  <stop offset="1" stop-color="#BDC0C8" />
                </linearGradient>
                <linearGradient
                  id="paint15_linear"
                  x1="91.865"
                  y1="63.1201"
                  x2="95.7867"
                  y2="52.3265"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7880C3" />
                  <stop offset="1" stop-color="#5C68BB" />
                </linearGradient>
                <linearGradient
                  id="paint16_linear"
                  x1="99.2356"
                  y1="40.4843"
                  x2="103.083"
                  y2="42.0421"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFD2C4" />
                  <stop offset="1" stop-color="#FFB9A3" />
                </linearGradient>
                <linearGradient
                  id="paint17_linear"
                  x1="93.1804"
                  y1="44.7465"
                  x2="94.3813"
                  y2="49.5899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFD2C4" />
                  <stop offset="1" stop-color="#FFB9A3" />
                </linearGradient>
                <linearGradient
                  id="paint18_linear"
                  x1="105.171"
                  y1="49.5722"
                  x2="107.053"
                  y2="44.4086"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFD2C4" />
                  <stop offset="1" stop-color="#FFB9A3" />
                </linearGradient>
              </defs>
            </svg>
          )}
      {typeof emptyContentText === 'function'
        ? emptyContentText()
        : emptyContentText || <span>暂无数据</span>}
    </div>
  );
}

export const emptyContentProps = {
  emptyContentImage: {
    type: null,
  },
  emptyContentText: {
    type: null,
  },
};

EmptyContent.props = emptyContentProps;

export default createComponent<EmptyContentProps>(EmptyContent);
