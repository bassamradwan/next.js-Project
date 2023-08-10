/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler:{
        styledComponents: true
    },
    i18n: {
        locales: ['en', 'ar' ],
        defaultLocale: 'en',
      },
      env:{
        REGISTER_URL: process.env.REGISTER_URL,
        LOGIN_URL: process.env.LOGIN_URL,
        FORGET_PASSWORD_URL: process.env.FORGET_PASSWORD_URL,
        PASSWORD_RESET_URL: process.env.PASSWORD_RESET_URL,
        CHECK_CODE_URL: process.env.CHECK_CODE_URL, 
        GET_CATEGORIES_URL: process.env.GET_CATEGORIES_URL,
        GET_BLOGS_URL: process.env.GET_BLOGS_URL,
        GET_BLOG_CATEGORIES_URL: process.env.GET_BLOG_CATEGORIES_URL,
        GET_SETTINGS_URL: process.env.GET_SETTINGS_URL,
        GET_CITIES_URL: process.env.GET_CITIES_URL,
        HOSPITAL_SEARCH_URL: process.env.HOSPITAL_SEARCH_URL,
        TECHNICIAN_SEARCH_URL: process.env.TECHNICIAN_SEARCH_URL,
        GET_ADS_URL: process.env.GET_ADS_URL,
        GET_AD_DETAILS_URL: process.env.GET_AD_DETAILS_URL,
        MAKE_OFFER_URL: process.env.MAKE_OFFER_URL,
        BASE_URL: process.env.BASE_URL
      }

};

module.exports = nextConfig;
