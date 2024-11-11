interface LogoProps extends React.SVGAttributes<SVGElement> {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 625, height = 103, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 625 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="logoTitle logoDesc"
      focusable="false"
      {...props}
    >
      <title id="logoTitle">Bishoy Gamal logo</title>
      <desc id="logoDesc">A decorative SVG of Bishoy Gamal name</desc>
      <path d="M22.4696 83.848C18.5829 83.848 14.6609 83.7067 10.7036 83.424C6.74625 83.212 3.28358 82.7173 0.315579 81.94V10.602C1.87025 10.3193 3.53091 10.072 5.29758 9.85999C7.06425 9.57733 8.86625 9.36533 10.7036 9.224C12.5409 9.08266 14.3429 8.97666 16.1096 8.90599C17.9469 8.83533 19.6782 8.79999 21.3036 8.79999C25.7556 8.79999 29.8896 9.15333 33.7056 9.85999C37.5216 10.496 40.8076 11.5913 43.5636 13.146C46.3902 14.7007 48.5809 16.75 50.1356 19.294C51.6902 21.838 52.4676 24.9827 52.4676 28.728C52.4676 32.1907 51.6196 35.1587 49.9236 37.632C48.2982 40.1053 46.0016 42.084 43.0336 43.568C47.4856 45.052 50.7716 47.2427 52.8916 50.14C55.0116 53.0373 56.0716 56.712 56.0716 61.164C56.0716 68.7253 53.3156 74.414 47.8036 78.23C42.2916 81.9753 33.8469 83.848 22.4696 83.848ZM13.4596 49.928V72.294C14.9436 72.4353 16.5336 72.5413 18.2296 72.612C19.9256 72.6827 21.4802 72.718 22.8936 72.718C25.6496 72.718 28.1936 72.5413 30.5256 72.188C32.9282 71.8347 34.9776 71.234 36.6736 70.386C38.4402 69.4673 39.8182 68.266 40.8076 66.782C41.8676 65.298 42.3976 63.39 42.3976 61.058C42.3976 56.8887 40.8782 53.9913 37.8396 52.366C34.8009 50.7407 30.5962 49.928 25.2256 49.928H13.4596ZM13.4596 39.434H22.8936C27.9816 39.434 31.9742 38.7273 34.8716 37.314C37.7689 35.83 39.2176 33.2153 39.2176 29.47C39.2176 25.9367 37.6982 23.428 34.6596 21.944C31.6916 20.46 27.8049 19.718 22.9996 19.718C20.9502 19.718 19.1129 19.7533 17.4876 19.824C15.9329 19.8947 14.5902 20.0007 13.4596 20.142V39.434ZM82.2776 83H69.4516V27.562H82.2776V83ZM83.6556 11.344C83.6556 13.7467 82.8783 15.6547 81.3236 17.068C79.7689 18.4813 77.9316 19.188 75.8116 19.188C73.6209 19.188 71.7483 18.4813 70.1936 17.068C68.6389 15.6547 67.8616 13.7467 67.8616 11.344C67.8616 8.87066 68.6389 6.92733 70.1936 5.514C71.7483 4.10066 73.6209 3.394 75.8116 3.394C77.9316 3.394 79.7689 4.10066 81.3236 5.514C82.8783 6.92733 83.6556 8.87066 83.6556 11.344ZM112.527 73.778C115.919 73.778 118.392 73.3893 119.947 72.612C121.501 71.764 122.279 70.3507 122.279 68.372C122.279 66.5347 121.431 65.0153 119.735 63.814C118.109 62.6127 115.389 61.3053 111.573 59.892C109.241 59.044 107.085 58.1607 105.107 57.242C103.199 56.2527 101.538 55.122 100.125 53.85C98.7112 52.578 97.5805 51.0587 96.7325 49.292C95.9552 47.4547 95.5665 45.2287 95.5665 42.614C95.5665 37.526 97.4392 33.5333 101.185 30.636C104.93 27.668 110.018 26.184 116.449 26.184C119.699 26.184 122.809 26.502 125.777 27.138C128.745 27.7033 130.971 28.2687 132.455 28.834L130.123 39.222C128.709 38.586 126.907 38.0207 124.717 37.526C122.526 36.9607 119.982 36.678 117.085 36.678C114.47 36.678 112.35 37.1373 110.725 38.056C109.099 38.904 108.287 40.2467 108.287 42.084C108.287 43.0027 108.428 43.8153 108.711 44.522C109.064 45.2287 109.629 45.9 110.407 46.536C111.184 47.1013 112.209 47.702 113.481 48.338C114.753 48.9033 116.307 49.504 118.145 50.14C121.183 51.2707 123.763 52.4013 125.883 53.532C128.003 54.592 129.734 55.8287 131.077 57.242C132.49 58.5847 133.515 60.1393 134.151 61.906C134.787 63.6727 135.105 65.7927 135.105 68.266C135.105 73.566 133.126 77.594 129.169 80.35C125.282 83.0353 119.699 84.378 112.421 84.378C107.545 84.378 103.623 83.954 100.655 83.106C97.6865 82.3287 95.6018 81.6927 94.4005 81.198L96.6265 70.492C98.5345 71.2693 100.796 72.0113 103.411 72.718C106.096 73.4247 109.135 73.778 112.527 73.778ZM147.086 83V2.864L159.912 0.743998V28.198C161.325 27.7033 162.95 27.2793 164.788 26.926C166.696 26.5727 168.568 26.396 170.406 26.396C174.858 26.396 178.532 27.032 181.43 28.304C184.398 29.5053 186.765 31.2367 188.532 33.498C190.298 35.6887 191.535 38.3387 192.242 41.448C193.019 44.5573 193.408 48.02 193.408 51.836V83H180.582V53.85C180.582 50.882 180.37 48.3733 179.946 46.324C179.592 44.204 178.956 42.508 178.038 41.236C177.19 39.8933 176.024 38.9393 174.54 38.374C173.056 37.738 171.218 37.42 169.028 37.42C167.332 37.42 165.6 37.5967 163.834 37.95C162.067 38.3033 160.76 38.6213 159.912 38.904V83H147.086ZM258.919 55.228C258.919 59.6093 258.283 63.602 257.011 67.206C255.739 70.81 253.937 73.884 251.605 76.428C249.273 78.972 246.446 80.9507 243.125 82.364C239.874 83.7773 236.27 84.484 232.313 84.484C228.356 84.484 224.752 83.7773 221.501 82.364C218.25 80.9507 215.459 78.972 213.127 76.428C210.795 73.884 208.958 70.81 207.615 67.206C206.343 63.602 205.707 59.6093 205.707 55.228C205.707 50.8467 206.343 46.8893 207.615 43.356C208.958 39.752 210.795 36.678 213.127 34.134C215.53 31.59 218.356 29.6467 221.607 28.304C224.858 26.8907 228.426 26.184 232.313 26.184C236.2 26.184 239.768 26.8907 243.019 28.304C246.34 29.6467 249.167 31.59 251.499 34.134C253.831 36.678 255.633 39.752 256.905 43.356C258.248 46.8893 258.919 50.8467 258.919 55.228ZM245.775 55.228C245.775 49.716 244.574 45.37 242.171 42.19C239.839 38.9393 236.553 37.314 232.313 37.314C228.073 37.314 224.752 38.9393 222.349 42.19C220.017 45.37 218.851 49.716 218.851 55.228C218.851 60.8107 220.017 65.2273 222.349 68.478C224.752 71.7287 228.073 73.354 232.313 73.354C236.553 73.354 239.839 71.7287 242.171 68.478C244.574 65.2273 245.775 60.8107 245.775 55.228ZM316.153 27.562C310.429 48.6207 303.786 67.7007 296.225 84.802C294.811 87.982 293.363 90.7027 291.879 92.964C290.395 95.2253 288.734 97.098 286.897 98.582C285.059 100.066 283.01 101.126 280.749 101.762C278.487 102.469 275.873 102.822 272.905 102.822C270.926 102.822 268.947 102.61 266.969 102.186C265.061 101.762 263.612 101.303 262.623 100.808L264.955 90.526C267.499 91.5153 270.007 92.01 272.481 92.01C275.802 92.01 278.381 91.1973 280.219 89.572C282.127 88.0173 283.787 85.5793 285.201 82.258C281.173 74.4847 277.286 66.0047 273.541 56.818C269.866 47.6313 266.58 37.8793 263.683 27.562H277.357C278.063 30.53 278.911 33.7453 279.901 37.208C280.961 40.6707 282.091 44.204 283.293 47.808C284.494 51.3413 285.766 54.8747 287.109 58.408C288.451 61.9413 289.794 65.2273 291.137 68.266C293.398 61.9767 295.518 55.2987 297.497 48.232C299.475 41.0947 301.277 34.2047 302.903 27.562H316.153ZM360.837 19.612C353.276 19.612 347.481 21.9793 343.453 26.714C339.496 31.378 337.517 37.8793 337.517 46.218C337.517 50.1753 337.977 53.8147 338.895 57.136C339.885 60.3867 341.298 63.178 343.135 65.51C345.043 67.842 347.375 69.6793 350.131 71.022C352.958 72.294 356.244 72.93 359.989 72.93C362.321 72.93 364.335 72.8593 366.031 72.718C367.727 72.506 369.07 72.2587 370.059 71.976V45.582H383.415V80.88C381.578 81.5867 378.469 82.364 374.087 83.212C369.706 84.06 364.653 84.484 358.929 84.484C353.629 84.484 348.789 83.636 344.407 81.94C340.026 80.244 336.281 77.7707 333.171 74.52C330.133 71.2693 327.765 67.2767 326.069 62.542C324.373 57.8073 323.525 52.366 323.525 46.218C323.525 40.07 324.444 34.6287 326.281 29.894C328.189 25.1593 330.769 21.1667 334.019 17.916C337.27 14.5947 341.086 12.086 345.467 10.39C349.849 8.69399 354.513 7.84599 359.459 7.84599C362.851 7.84599 365.855 8.09333 368.469 8.588C371.155 9.012 373.451 9.50666 375.359 10.072C377.267 10.6373 378.822 11.238 380.023 11.874C381.295 12.51 382.179 12.9693 382.673 13.252L378.645 24.17C376.525 22.898 373.875 21.838 370.695 20.99C367.586 20.0713 364.3 19.612 360.837 19.612ZM417.719 73.99C421.676 73.99 424.679 73.778 426.729 73.354V59.15C426.022 58.938 424.997 58.726 423.655 58.514C422.312 58.302 420.828 58.196 419.203 58.196C417.789 58.196 416.341 58.302 414.857 58.514C413.443 58.726 412.136 59.1147 410.935 59.68C409.804 60.2453 408.885 61.058 408.179 62.118C407.472 63.1073 407.119 64.3793 407.119 65.934C407.119 68.9727 408.073 71.0927 409.981 72.294C411.889 73.4247 414.468 73.99 417.719 73.99ZM416.659 26.184C420.899 26.184 424.467 26.714 427.365 27.774C430.262 28.834 432.559 30.318 434.255 32.226C436.021 34.134 437.258 36.466 437.965 39.222C438.742 41.9073 439.131 44.8753 439.131 48.126V81.728C437.152 82.152 434.149 82.6467 430.121 83.212C426.163 83.848 421.676 84.166 416.659 84.166C413.337 84.166 410.299 83.848 407.543 83.212C404.787 82.576 402.419 81.5513 400.441 80.138C398.533 78.7247 397.013 76.8873 395.883 74.626C394.823 72.3647 394.293 69.5733 394.293 66.252C394.293 63.072 394.893 60.3867 396.095 58.196C397.367 56.0053 399.063 54.2387 401.183 52.896C403.303 51.4827 405.741 50.4933 408.497 49.928C411.323 49.292 414.256 48.974 417.295 48.974C418.708 48.974 420.192 49.08 421.747 49.292C423.301 49.4333 424.962 49.716 426.729 50.14V48.02C426.729 46.536 426.552 45.1227 426.199 43.78C425.845 42.4373 425.209 41.2713 424.291 40.282C423.443 39.222 422.277 38.4093 420.793 37.844C419.379 37.2787 417.577 36.996 415.387 36.996C412.419 36.996 409.698 37.208 407.225 37.632C404.751 38.056 402.737 38.5507 401.183 39.116L399.593 28.728C401.218 28.1627 403.585 27.5973 406.695 27.032C409.804 26.4667 413.125 26.184 416.659 26.184ZM486.426 53.85C486.426 48.0553 485.684 43.886 484.2 41.342C482.786 38.7273 480.101 37.42 476.144 37.42C474.73 37.42 473.176 37.526 471.48 37.738C469.784 37.95 468.512 38.1267 467.664 38.268V83H454.838V29.364C457.311 28.6573 460.526 27.986 464.484 27.35C468.512 26.714 472.752 26.396 477.204 26.396C481.02 26.396 484.129 26.8907 486.532 27.88C489.005 28.8693 491.054 30.1767 492.68 31.802C493.457 31.2367 494.446 30.636 495.648 30C496.849 29.364 498.192 28.7987 499.676 28.304C501.16 27.7387 502.714 27.2793 504.34 26.926C506.036 26.5727 507.732 26.396 509.428 26.396C513.738 26.396 517.272 27.032 520.028 28.304C522.854 29.5053 525.045 31.2367 526.6 33.498C528.225 35.6887 529.32 38.374 529.886 41.554C530.522 44.6633 530.84 48.0907 530.84 51.836V83H518.014V53.85C518.014 48.0553 517.307 43.886 515.894 41.342C514.48 38.7273 511.76 37.42 507.732 37.42C505.682 37.42 503.739 37.7733 501.902 38.48C500.064 39.116 498.686 39.752 497.768 40.388C498.333 42.1547 498.722 44.0273 498.934 46.006C499.146 47.9847 499.252 50.1047 499.252 52.366V83H486.426V53.85ZM566.057 73.99C570.014 73.99 573.017 73.778 575.067 73.354V59.15C574.36 58.938 573.335 58.726 571.993 58.514C570.65 58.302 569.166 58.196 567.541 58.196C566.127 58.196 564.679 58.302 563.195 58.514C561.781 58.726 560.474 59.1147 559.273 59.68C558.142 60.2453 557.223 61.058 556.517 62.118C555.81 63.1073 555.457 64.3793 555.457 65.934C555.457 68.9727 556.411 71.0927 558.319 72.294C560.227 73.4247 562.806 73.99 566.057 73.99ZM564.997 26.184C569.237 26.184 572.805 26.714 575.703 27.774C578.6 28.834 580.897 30.318 582.593 32.226C584.359 34.134 585.596 36.466 586.303 39.222C587.08 41.9073 587.469 44.8753 587.469 48.126V81.728C585.49 82.152 582.487 82.6467 578.459 83.212C574.501 83.848 570.014 84.166 564.997 84.166C561.675 84.166 558.637 83.848 555.881 83.212C553.125 82.576 550.757 81.5513 548.779 80.138C546.871 78.7247 545.351 76.8873 544.221 74.626C543.161 72.3647 542.631 69.5733 542.631 66.252C542.631 63.072 543.231 60.3867 544.433 58.196C545.705 56.0053 547.401 54.2387 549.521 52.896C551.641 51.4827 554.079 50.4933 556.835 49.928C559.661 49.292 562.594 48.974 565.633 48.974C567.046 48.974 568.53 49.08 570.085 49.292C571.639 49.4333 573.3 49.716 575.067 50.14V48.02C575.067 46.536 574.89 45.1227 574.537 43.78C574.183 42.4373 573.547 41.2713 572.629 40.282C571.781 39.222 570.615 38.4093 569.131 37.844C567.717 37.2787 565.915 36.996 563.725 36.996C560.757 36.996 558.036 37.208 555.563 37.632C553.089 38.056 551.075 38.5507 549.521 39.116L547.931 28.728C549.556 28.1627 551.923 27.5973 555.033 27.032C558.142 26.4667 561.463 26.184 564.997 26.184ZM622.468 84.06C618.652 83.9893 615.472 83.5653 612.928 82.788C610.454 82.0107 608.476 80.9153 606.992 79.502C605.508 78.018 604.448 76.216 603.812 74.096C603.246 71.9053 602.964 69.432 602.964 66.676V2.864L615.79 0.743998V64.238C615.79 65.7927 615.896 67.1 616.108 68.16C616.39 69.22 616.85 70.1387 617.486 70.916C618.122 71.6227 618.97 72.188 620.03 72.612C621.16 72.9653 622.574 73.248 624.27 73.46L622.468 84.06Z" />
    </svg>
  );
};
export default Logo;