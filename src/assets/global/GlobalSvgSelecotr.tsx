import React from 'react'

interface Props {
    id: string;
}

export const GlobalSvgSelecotr = ({ id }: Props) => {
    switch (id) {
        case "vk":
            return (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 0C6.71601 0 0 6.7157 0 15C0 23.2843 6.71601 30 15 30C23.284 30 30 23.2843 30 15C30 6.7157 23.284 0 15 0ZM22.6088 16.6223C23.3079 17.3052 24.0476 17.9478 24.6752 18.7013C24.9532 19.0346 25.2153 19.3792 25.4148 19.7669C25.6996 20.3196 25.4425 20.9257 24.9477 20.9586L21.8747 20.958C21.081 21.0236 20.4494 20.7035 19.9169 20.1609C19.4919 19.7285 19.0975 19.2666 18.6881 18.8194C18.5208 18.6359 18.3447 18.4631 18.1347 18.3272C17.7158 18.0546 17.3518 18.1381 17.1118 18.5758C16.8672 19.0211 16.8114 19.5146 16.788 20.0102C16.7546 20.7348 16.5361 20.9242 15.809 20.9583C14.2554 21.031 12.7814 20.7953 11.4114 20.0121C10.2028 19.3212 9.26731 18.3462 8.45217 17.2423C6.86486 15.0902 5.64921 12.7283 4.55693 10.2985C4.3111 9.7513 4.49095 9.45852 5.09463 9.44716C6.0976 9.42783 7.10056 9.43028 8.10353 9.44624C8.51171 9.45268 8.78179 9.68624 8.93862 10.0714C9.48061 11.4049 10.1451 12.6737 10.9777 13.8503C11.1996 14.1637 11.4261 14.4761 11.7486 14.6974C12.1047 14.9417 12.376 14.861 12.5438 14.4635C12.6513 14.2109 12.6976 13.9409 12.7209 13.6702C12.8007 12.743 12.8102 11.8162 12.6721 10.8927C12.5862 10.3148 12.2612 9.94158 11.6851 9.83233C11.3917 9.77678 11.4347 9.66813 11.5774 9.50056C11.8251 9.21084 12.0571 9.03161 12.5208 9.03161L15.9928 9.031C16.5401 9.13841 16.6628 9.38394 16.7371 9.93514L16.7402 13.7936C16.7337 14.0069 16.8473 14.6391 17.2303 14.7787C17.5372 14.88 17.7397 14.6339 17.9233 14.4396C18.7559 13.556 19.3492 12.5131 19.8804 11.4338C20.1149 10.9577 20.3171 10.4652 20.5136 9.97166C20.6596 9.60675 20.8868 9.42721 21.2986 9.43335L24.642 9.43734C24.7406 9.43734 24.8406 9.43826 24.9382 9.45514C25.5017 9.55151 25.6561 9.79396 25.4817 10.3436C25.2074 11.2073 24.6743 11.9266 24.1531 12.6479C23.5946 13.4201 22.9989 14.1652 22.4458 14.9408C21.9376 15.6497 21.9778 16.0066 22.6088 16.6223Z" fill="white" />
                </svg>
            );

        case "te":
            return (
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M30 15.6562C30 23.9405 23.2843 30.6562 15 30.6562C6.71572 30.6562 0 23.9405 0 15.6562C0 7.37197 6.71572 0.65625 15 0.65625C23.2843 0.65625 30 7.37197 30 15.6562ZM15.5375 11.7299C14.0786 12.3367 11.1627 13.5927 6.78989 15.4979C6.07981 15.7802 5.70785 16.0565 5.67399 16.3266C5.61675 16.7831 6.18841 16.9629 6.96686 17.2076C7.07275 17.241 7.18248 17.2755 7.29495 17.312C8.06083 17.561 9.09105 17.8522 9.62664 17.8638C10.1125 17.8743 10.6547 17.674 11.2533 17.2629C15.339 14.505 17.448 13.111 17.5804 13.081C17.6739 13.0598 17.8033 13.0331 17.891 13.1111C17.9786 13.189 17.9701 13.3366 17.9608 13.3762C17.9041 13.6176 15.6601 15.7039 14.4989 16.7835C14.1369 17.12 13.8801 17.3587 13.8276 17.4132C13.71 17.5355 13.5901 17.651 13.475 17.762C12.7635 18.4479 12.2299 18.9622 13.5045 19.8022C14.1171 20.2059 14.6072 20.5396 15.0962 20.8726C15.6302 21.2364 16.1629 21.5991 16.852 22.0509C17.0276 22.166 17.1952 22.2855 17.3586 22.4019C17.9801 22.845 18.5385 23.243 19.2283 23.1795C19.6291 23.1426 20.0431 22.7658 20.2534 21.6418C20.7502 18.9853 21.727 13.2294 21.9528 10.8575C21.9726 10.6497 21.9478 10.3837 21.9277 10.267C21.9077 10.1502 21.866 9.98389 21.7143 9.86075C21.5345 9.71492 21.2571 9.68418 21.133 9.68635C20.5688 9.6963 19.7033 9.99727 15.5375 11.7299Z" fill="white" />
                </svg>

            );
        case "tw":
            return (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 0C6.7157 0 0 6.7157 0 15C0 23.2843 6.7157 30 15 30C23.2843 30 30 23.2843 30 15C30 6.7157 23.2843 0 15 0ZM24.0706 10.9998C24.0776 11.1769 24.0813 11.3543 24.0813 11.5326C24.0813 17.9402 19.2055 24.5678 11.0461 24.5678C8.55192 24.5678 6.12338 23.8561 4.02322 22.5091C3.97933 22.4811 3.96123 22.4268 3.97872 22.378C3.99621 22.3295 4.04563 22.2994 4.09627 22.3053C4.44859 22.3473 4.8089 22.3682 5.16644 22.3682C7.10701 22.3682 8.94414 21.7682 10.498 20.6299C8.6354 20.4727 7.03458 19.2123 6.45882 17.4141C6.44685 17.3767 6.45545 17.3359 6.48123 17.3064C6.50731 17.2769 6.54721 17.264 6.58527 17.2711C7.10148 17.369 7.62629 17.3754 8.13207 17.2932C6.21115 16.6963 4.86107 14.8969 4.86107 12.8483L4.86169 12.7887C4.86261 12.7498 4.88379 12.7142 4.91754 12.6948C4.951 12.6752 4.99274 12.6749 5.0265 12.6939C5.52737 12.972 6.08164 13.1506 6.65033 13.219C5.54639 12.3391 4.89821 11.0053 4.89821 9.57852C4.89821 8.7554 5.11611 7.94639 5.52859 7.23898C5.54701 7.20737 5.57954 7.18711 5.61575 7.18435C5.65228 7.18067 5.68757 7.19662 5.71059 7.22486C7.97003 9.99621 11.2935 11.7026 14.8475 11.922C14.7882 11.6237 14.7582 11.3162 14.7582 11.0059C14.7582 8.4399 16.8457 6.35263 19.4115 6.35263C20.6728 6.35263 21.8919 6.871 22.7656 7.77698C23.7505 7.57627 24.6887 7.21412 25.5554 6.70036C25.595 6.67673 25.6447 6.68041 25.6812 6.70895C25.7168 6.7378 25.7316 6.78568 25.7174 6.82987C25.4237 7.74844 24.851 8.54977 24.0816 9.12829C24.8062 9.00215 25.5094 8.78916 26.1781 8.49238C26.2229 8.47182 26.276 8.4847 26.3082 8.52245C26.3402 8.56051 26.3429 8.61483 26.3153 8.65596C25.7061 9.56777 24.9511 10.3562 24.0706 10.9998Z" fill="white" />
                </svg>

            );
        case "wa":
            return (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.6288 4.35949C22.8338 1.55947 19.0288 -0.0104714 15.063 5.25704e-05C6.82923 5.25704e-05 0.128204 6.66821 0.125339 14.8646C0.121823 17.4732 0.809609 20.0366 2.11931 22.2962L0 30L7.91862 27.9329C10.1085 29.1205 12.5627 29.7427 15.0566 29.7427H15.063C23.2954 29.7427 29.997 23.0738 29.9999 14.8775C30.0127 10.9312 28.4387 7.14386 25.6288 4.35949ZM21.8729 17.9745C21.4997 17.7884 19.6648 16.8904 19.3224 16.7627C18.9801 16.6352 18.7315 16.5767 18.483 16.9488C18.2345 17.3209 17.519 18.157 17.3013 18.4051C17.0835 18.653 16.8658 18.6837 16.4925 18.4977C16.1194 18.3117 14.9169 17.9196 13.4909 16.6545C12.3814 15.6693 11.6287 14.4533 11.4138 14.0812C11.199 13.7091 11.3909 13.511 11.5778 13.3228C11.7454 13.1567 11.951 12.8894 12.1372 12.6721C12.3234 12.4547 12.3865 12.3007 12.5103 12.0526C12.6343 11.8046 12.5726 11.5879 12.4795 11.4019C12.3865 11.2158 11.6394 9.38751 11.3286 8.64407C11.0256 7.91987 10.7184 8.01752 10.4892 8.00255C10.2743 7.99186 10.0222 7.98973 9.77294 7.98973C9.39047 7.99968 9.02958 8.16815 8.77738 8.45447C8.43574 8.82654 7.4717 9.72466 7.4717 11.553C7.4717 13.3813 8.80889 15.1475 8.99511 15.3956C9.18134 15.6437 11.6273 19.3951 15.3696 21.0046C16.0646 21.3029 16.7748 21.5646 17.4975 21.7887C18.3913 22.0738 19.2049 22.0317 19.8481 21.9362C20.5644 21.8293 22.0563 21.0373 22.3678 20.1698C22.6793 19.3025 22.6787 18.5583 22.5827 18.4036C22.4867 18.2489 22.246 18.1634 21.8729 17.9773V17.9745Z" fill="white" />
                </svg>
            );

        case "enter":
            return (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_212_38)">
                        <path d="M15.3589 0C6.87639 0 0 6.71573 0 15C0 23.2843 6.87639 30 15.3589 30C20.1467 30 24.5724 27.8452 27.4652 24.2317C27.807 23.8048 27.7296 23.188 27.2925 22.8542C26.8553 22.5204 26.2238 22.5959 25.882 23.0229C23.3662 26.1656 19.5217 28.0374 15.3589 28.0374C7.98625 28.0374 2.00957 22.2003 2.00957 15C2.00957 7.79965 7.98625 1.96262 15.3589 1.96262C19.461 1.96262 23.2554 3.77983 25.7749 6.84501C26.1223 7.26764 26.7547 7.33522 27.1874 6.99594C27.6202 6.65667 27.6893 6.03902 27.342 5.61639C24.445 2.092 20.0768 0 15.3589 0ZM14.542 10.2936L10.4821 14.3535C10.0897 14.7459 10.0822 15.3747 10.4655 15.7579L14.4305 19.723C14.8138 20.1062 15.4425 20.0988 15.8349 19.7064C16.2273 19.314 16.2348 18.6852 15.8515 18.302L13.53 15.9801L28.9952 15.9813C29.5501 15.9813 30 15.542 30 15C30 14.458 29.5501 14.0187 28.9952 14.0187L13.593 14.0181L15.9298 11.6814C16.3222 11.289 16.3296 10.6602 15.9464 10.277C15.5632 9.89377 14.9344 9.9012 14.542 10.2936Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_212_38">
                            <rect width="30" height="30" fill="white" transform="matrix(-1 0 0 1 30 0)" />
                        </clipPath>
                    </defs>
                </svg>

            );

        case "up":
            return (
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M150 75C150 33.5736 116.421 0 75 0C33.5793 0 0 33.5736 0 75C0 116.421 33.5793 150 75 150C116.421 150 150 116.421 150 75ZM6.00549 75C6.00549 36.9538 36.9595 5.99977 75.0057 5.99977C113.052 5.99977 144.006 36.9538 144.006 75C144.006 113.046 113.058 144 75.0057 144C36.9595 144 6.00549 113.046 6.00549 75Z" fill="#352F24" />
                    <path d="M107.015 70.4159L111.229 66.1914L74.9975 29.873L38.7715 66.1914L42.9859 70.4159L72.0212 41.3111V113.771H77.9794V41.3111L107.015 70.4159Z" fill="#352F24" />
                </svg>

            );

        case "back":
            return (
                <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 472.615 472.615" xmlSpace="preserve">
                    <g>
                        <g>
                            <path d="M167.158,117.315l-0.001-77.375L0,193.619l167.157,153.679v-68.555c200.338,0.004,299.435,153.932,299.435,153.932
                       c3.951-19.967,6.023-40.609,6.023-61.736C472.615,196.295,341.8,117.315,167.158,117.315z"/>
                        </g>
                    </g>
                </svg>

            );
        case "completed":
            return (
                <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.3111 0.414094C30.0837 1.08631 30.2282 2.33968 29.6339 3.21356L11.9869 29.1655C11.6774 29.6206 11.2094 29.9031 10.7025 29.9402C10.1958 29.9776 9.69943 29.7659 9.34035 29.3599L0.516863 19.3784C-0.172287 18.5987 -0.172287 17.3348 0.516863 16.5551C1.20603 15.7755 2.32337 15.7755 3.01253 16.5551L10.4149 24.9289L26.8365 0.779236C27.4306 -0.0946617 28.5387 -0.258138 29.3111 0.414094Z" fill="#1AC617" />
                </svg>
            );
        case "cancel":
            return (
                <svg width="25" height="25" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 2L2 32M2.00006 2L32 32" stroke="#FF3737" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "pencil":
            return (
                <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 30L11.25 26.25L30 7.5L22.5 0L3.75 18.75L0 30ZM3.75 26.25L5.64 20.64L9.39 24.39L3.75 26.25ZM7.5 18.75L18.75 7.5L22.5 11.25L11.25 22.5L7.5 18.75Z" fill="black" />
                </svg>
            );
        default:
            return null;
    }
};
