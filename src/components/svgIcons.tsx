export function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={`h-3 w-3 ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 8 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
      />
    </svg>
  );
}

//========================================================================================

export function SearchIcon() {
  return (
    <svg
      className="h-4 w-4 text-gray-500 dark:text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  );
}

//========================================================================================

export function MoonIcon() {
  return (
    <svg
      className="h-4 w-4 text-primary"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
      />
    </svg>
  );
}

//========================================================================================

export function SunIcon() {
  return (
    <svg
      className="h-4 w-4 text-yellow-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <span className="[&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 320 512"
      >
        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
      </svg>
    </span>
  );
}

export function GoogleIcon() {
  return (
    <span className="[&>svg]:h-5 [&>svg]:w-5">
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_5_73)">
          <mask
            id="mask0_5_73"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="10"
            y="8"
            width="11"
            height="11"
          >
            <path
              d="M20.58 10.7386C20.58 9.9941 20.5132 9.27814 20.3891 8.5909H10.5V12.6525H16.1509C15.9075 13.965 15.1677 15.0771 14.0557 15.8216V18.4561H17.4491C19.4346 16.6281 20.58 13.9364 20.58 10.7386Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_5_73)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.5 18.4561H20.58V8.5909H10.5V18.4561Z"
              fill="#5070A8"
            />
          </g>
          <mask
            id="mask1_5_73"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="1"
            y="12"
            width="17"
            height="9"
          >
            <path
              d="M10.4997 21C13.3347 21 15.7116 20.0598 17.4488 18.4562L14.0555 15.8216C13.1152 16.4517 11.9125 16.8239 10.4997 16.8239C7.76495 16.8239 5.45014 14.9768 4.62453 12.495H1.11658V15.2155C2.84431 18.6471 6.39514 21 10.4997 21Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_5_73)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.11658 21H17.4488V12.495H1.11658V21Z"
              fill="#2F9E4F"
            />
          </g>
          <mask
            id="mask2_5_73"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="5"
            width="5"
            height="11"
          >
            <path
              d="M4.62477 12.4949C4.41473 11.865 4.2954 11.192 4.2954 10.4999C4.2954 9.80791 4.41473 9.13495 4.62477 8.50494V5.78455H1.11682C0.405699 7.20202 0 8.80564 0 10.4999C0 12.1943 0.405699 13.798 1.11682 15.2154L4.62477 12.4949Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask2_5_73)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 15.2154H4.62477V5.78455H0V15.2154Z"
              fill="#EFB529"
            />
          </g>
          <mask
            id="mask3_5_73"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="1"
            y="0"
            width="17"
            height="9"
          >
            <path
              d="M10.4997 4.17613C12.0413 4.17613 13.4254 4.70594 14.5136 5.74637L17.5252 2.73478C15.7067 1.04049 13.3299 0 10.4997 0C6.39514 0 2.84431 2.35297 1.11658 5.7846L4.62453 8.50498C5.45014 6.02319 7.76495 4.17613 10.4997 4.17613Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask3_5_73)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.11658 8.50498H17.5252V0H1.11658V8.50498Z"
              fill="#D53E36"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_5_73">
            <rect width="21" height="21" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
}
