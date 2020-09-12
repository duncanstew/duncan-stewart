module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      backgroundImage: theme => ({
        'twitter-colored': "url('../Resources/Images/twitter-colored.jpg')",
        'instagram-colored': "url('../Resources/Images/instagram-colored.jpg')",
        'linkedin-colored': "url('../Resources/Images/linkedin-colored.jpg')",
        'github-colored': "url('../Resources/Images/github-colored.jpg')",
        'facebook-colored': "url('../Resources/Images/facebook-colored.jpg')",
      }),
      backgroundColor: {
        'custom-off-white': '#f5f8fa',
        'custom-bright-blue': '#0096cc',
        'custom-gray': '#696969',
        'custom-dark-gray': '#3a4145',
        'custom-other-gray': '#AAAAAA',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'roboto': ['Roboto'],
        'merriweather': ['Merriweather'],
        'opensans': ['Open+Sans']
      },
      fontSize: {
        '2.5xl': '1.7rem',
        '4.5xl': '2.5rem',
      },
      textColor: {
        'custom-off-white': '#f5f8fa',
        'custom-bright-blue': '#0096cc',
        'custom-gray': '#696969',
        'custom-dark-gray': '#3a4145',
        'custom-other-gray': '#AAAAAA',

      },
      spacing: {
        '15': '3.75rem',
        '75': '18.75rem',
        '88': '22rem',
  
      },
      opacity: {
        '125': '0.125',
      },
      minHeight: {
        '1/4': '25%',
      },
    },
  },
  variants: {
    transitionProperty: ['responsive','hover']
  },
  plugins: [],
}
