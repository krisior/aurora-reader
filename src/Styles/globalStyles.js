import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
      
      #particle-canvas {
            background-color:       ${({ theme }) => theme.backgroundParticlesBackgroundColor };
      }

      /*NAVBAR*/
      
      a {
            color:                  ${({ theme }) => theme.navbarAColor };
      }

      .navbar {
            background-color:       ${({ theme }) => theme.navbarBackgroundColor };
      }

      .logo-button {
            background-image:       ${({ theme }) => theme.navbarLogoButtonImage };
            background-color:       ${({ theme }) => theme.navbarLogoButtonBackgroundColor };
      }

      .logo-button:hover {
            background-color:       ${({ theme }) => theme.navbarLogoButtonBackgroundColorHover };
      }

      .icon-button {
            background-color:       ${({ theme }) => theme.navbarIconButtonBackgroundColor };
      }

      .icon-button:hover {
            background-color:       ${({ theme }) => theme.navbarIconButtonBackgroundColorHover };
            color:                  ${({ theme }) => theme.navbarIconButtonColorHover };
      }

      .icon-button svg {
            color:                  ${({ theme }) => theme.navbarIconButtonSVGFill };
      }

      .dropdown {
            background-color:       ${({ theme }) => theme.navbarDropdownBackgroundColor };
      }

      .menu-item:hover {
            background-color:       ${({ theme }) => theme.navbarDropdownMenuItemBackgroundColorHover };
      }

      .icon-right {
            color:                  ${({ theme }) => theme.navbarDropdownIconRight };
      }

      .icon-left {
            color:                  ${({ theme }) => theme.navbarDropdownIconLeft };
      }

      .small-about-text-gradient {
            background-color:       ${({ theme }) => theme.smallAboutTextGradientBackgroundColor };
            background-image:       ${({ theme }) => theme.smallAboutTextGradientBackgroundImage };
      }

      /*LOGIN_REGISTER*/

      .box-1 {
            background-color:       ${({ theme }) => theme.loginRegisterBoxBackgroundColor };
      }        
      
      button {
            border:                 ${({ theme }) => theme.loginRegisterButtonBorder };
            background-color:       ${({ theme }) => theme.loginRegisterButtonBackgroundColor };
            color:                  ${({ theme }) => theme.loginRegisterButtonColor };
      }
        
      button.register-button-box-1 {
            color:                  ${({ theme }) => theme.loginRegisterRegisterButtonColor };
            background-color:       ${({ theme }) => theme.loginRegisterRegisterButtonBackgroundColor };
            border:                 ${({ theme }) => theme.loginRegisterRegisterButtonBorder };
      }
        
      button.register-button-box-1:hover {
            background-color:       ${({ theme }) => theme.loginRegisterRegisterButtonBackgroundColorHover };
            color:                  ${({ theme }) => theme.loginRegisterRegisterButtonColorHover };
            border:                 ${({ theme }) => theme.loginRegisterRegisterButtonBorderHover };
      }
        
      button.login-button-box-1:hover {
            border-color:           ${({ theme }) => theme.loginRegisterLoginButtonBorderColorHover };
      }

      /*WELCOME*/

      .aurora-name {
            color:                  ${({ theme }) => theme.welcomeTextColor };
      }

      .aurora-quote-animation {
            --colorSecond:          ${({ theme }) => theme.welcomeAuroraQuoteAnimationSecondColor };
      
      }

      /*LOGINFORM*/
        
      .box-1-loginform input[type = "text"], .box-1-loginform input[type = "password"], .box-1-loginform input[type = "email"] {
            
            border:                 ${({ theme }) => theme.loginFormInputBorder };
            background-color:       ${({ theme }) => theme.loginFormInputBackgroundColor };
            color:                  ${({ theme }) => theme.loginFormInputColor };
      }
        
      .box-1-loginform input[type = "text"]:focus, .box-1-loginform input[type = "password"]:focus, .box-1-loginform input[type = "email"]:focus {
            border-color:           ${({ theme }) => theme.loginFormInputBorderColorHover };
      }

      .box-1-loginform input[type = "text"]::placeholder, .box-1-loginform input[type = "password"]::placeholder, .box-1-loginform input[type = "email"]::placeholder {
            color:                  ${({ theme }) => theme.loginFormPlaceholder }
      }
        
      button.loginform {
            border:                 ${({ theme }) => theme.loginFormButtonBorder };
            background-color:       ${({ theme }) => theme.loginFormButtonBackgroundColor };
            color:                  ${({ theme }) => theme.loginFormButtonColor };
      }
        
      button.loginform:hover {
            border-color:           ${({ theme }) => theme.loginFormButtonBorderColorHover };
      }

      .new-to-aurora-1 {
            color:                  ${({ theme }) => theme.loginFormNewToAuroraColor }
      }

      .show-password-login {        
            color:                  ${({ theme }) => theme.registerFormShowPassword };
        }
        
      
      /*REGISTERFORM*/
        
      .box-1-registerform input[type = "text"], .box-1-registerform input[type = "password"], .box-1-registerform input[type = "email"] {
            
            border:                 ${({ theme }) => theme.registerFormInputBorder };
            background-color:       ${({ theme }) => theme.registerFormInputBackgroundColor };
            color:                  ${({ theme }) => theme.registerFormInputColor };
      }
        
      .box-1-registerform input[type = "text"]:focus, .box-1-registerform input[type = "password"]:focus, .box-1-registerform input[type = "email"]:focus {
            border-color:           ${({ theme }) => theme.registerFormInputBorderColorHover };
      }

      .box-1-registerform input[type = "text"]::placeholder, .box-1-registerform input[type = "password"]::placeholder, .box-1-registerform input[type = "email"]::placeholder {
            color:                  ${({ theme }) => theme.registerFormPlaceholder }
      }
        
      button.registerform {
            border:                 ${({ theme }) => theme.registerFormButtonBorder };
            background-color:       ${({ theme }) => theme.registerFormButtonBackgroundColor };
            color:                  ${({ theme }) => theme.registerFormButtonColor };
      }
        
      button.registerform:hover {
            border-color:           ${({ theme }) => theme.registerFormButtonBorderColorHover };
      }

      .already-an-account {
            color:                  ${({ theme }) => theme.registerFormAlreadyAccountColor };
      }

      .show-password {        
            color:                  ${({ theme }) => theme.registerFormShowPassword };
      }

      /*MAINPAGE*/

      

`;

export const lightTheme = {
      
      backgroundParticlesBackgroundColor:                   'rgb(255, 255, 255)',

      /*NAVBAR*/

      navbarAColor:                                         'rgb(22, 22, 22)',
      navbarBackgroundColor:                                'none',

      navbarIconButtonBackgroundColor:                      'rgba(220, 220, 220, 0.8)',
      navbarIconButtonColorHover:                           'rgb(48, 136, 194)',
      navbarIconButtonBackgroundColorHover:                 'rgba(255, 255, 255, 0.6)',
      navbarIconButtonSVGFill:                              'rgb(22, 22, 22)',

      navbarLogoButtonImage:                                'url(https://raw.githubusercontent.com/krisior/aurora-reader/main/src/Icons/logo_lightmode.svg)',
      navbarLogoButtonBackgroundColor:                      'rgba(246, 246, 246, 0.95)',
      navbarLogoButtonBackgroundColorHover:                 'rgba(255, 255, 255, 0.8)',
      
      navbarDropdownBackgroundColor:                        'rgb(231, 231, 231)',

      navbarDropdownMenuItemBackgroundColorHover:           'rgba(212, 212, 212, 0.8)',
      navbarDropdownIconRight:                              'rgba(83, 83, 83, 0.8)',
      navbarDropdownIconLeft:                               'rgba(83, 83, 83, 0.8)',

      smallAboutTextGradientBackgroundColor:                'rgb(22, 22, 22)',
      smallAboutTextGradientBackgroundImage:                'linear-gradient(45deg, rgb(22, 22, 22), rgba(52, 152, 219, 0.8))',

      /*LOGIN_REGISTER*/

      loginRegisterBoxBackgroundColor:                      'transparent',
      loginRegisterButtonBorder:                            '3px solid rgb(83, 83, 83)',
      loginRegisterButtonBackgroundColor:                   'rgba(255, 255, 255, 0.6)',
      loginRegisterButtonColor:                             'rgb(22, 22, 22)',

      loginRegisterLoginButtonBorderColorHover:             'rgb(52, 152, 219)',

      loginRegisterRegisterButtonBorder:                    '3px solid rgba(255, 255, 255, 0)',
      loginRegisterRegisterButtonBackgroundColor:           'rgba(83, 83, 83, 0.8)',
      loginRegisterRegisterButtonColor:                     'rgb(255, 255, 255)',

      loginRegisterRegisterButtonBorderHover:               '3px solid rgb(52, 152, 219)',
      loginRegisterRegisterButtonBackgroundColorHover:      'rgba(255, 255, 255, 0.6)',
      loginRegisterRegisterButtonColorHover:                'rgb(22, 22, 22)',

      /*WELCOME*/

      welcomeTextColor:                                     'rgb(22, 22, 22)',
      welcomeAuroraQuoteAnimationSecondColor:               'rgb(22, 22, 22)',

      /*LOGINFORM*/

      loginFormInputBorder:                                 '3px solid rgb(83, 83, 83)',
      loginFormInputBackgroundColor:                        'rgba(255, 255, 255, 0.6)',
      loginFormInputColor:                                  'rgb(22, 22, 22)',

      loginFormPlaceholder:                                 'rgba(22, 22, 22, 0.6)',
      loginFormInputBorderColorHover:                       'rgb(52, 152, 219)',

      loginFormButtonBorder:                                '3px solid rgb(83, 83, 83)',
      loginFormButtonBackgroundColor:                       'rgba(255, 255, 255, 0.6)',
      loginFormButtonColor:                                 'rgb(22, 22, 22)',

      loginFormButtonBorderColorHover:                      'rgb(52, 152, 219)',

      loginFormNewToAuroraColor:                            'rgb(22, 22, 22)',

      /*REGISTERFORM*/

      registerFormInputBorder:                              '3px solid rgb(83, 83, 83)',
      registerFormInputBackgroundColor:                     'rgba(255, 255, 255, 0.6)',
      registerFormInputColor:                               'rgb(22, 22, 22)',

      registerFormPlaceholder:                              'rgba(22, 22, 22, 0.6)',
      registerFormInputBorderColorHover:                    'rgb(52, 152, 219)',

      registerFormButtonBorder:                             '3px solid rgb(83, 83, 83)',
      registerFormButtonBackgroundColor:                    'rgba(255, 255, 255, 0.6)',
      registerFormButtonColor:                              'rgb(22, 22, 22)',

      registerFormButtonBorderColorHover:                   'rgb(52, 152, 219)',

      registerFormAlreadyAccountColor:                      'rgb(22, 22, 22)',

      registerFormShowPassword:                             'rgb(22, 22, 22)',

      /*MAINPAGE*/

      
};

export const darkTheme = {
      
      backgroundParticlesBackgroundColor:                   'rgb(44, 44, 49)',

      /*NAVBAR*/

      navbarAColor:                                         'rgb(246, 246, 246)',
      navbarBackgroundColor:                                'none',

      navbarIconButtonBackgroundColor:                      'rgba(83, 83, 83, 0.9)',
      navbarIconButtonColorHover:                           'rgb(83, 83, 83)',
      navbarIconButtonBackgroundColorHover:                 'rgba(160, 160, 160, 0.9)',
      navbarIconButtonSVGFill:                              'rgb(246, 246, 246)',
      
      navbarLogoButtonImage:                                'url(https://raw.githubusercontent.com/krisior/aurora-reader/main/src/Icons/logo_darkmode.svg)',
      navbarLogoButtonBackgroundColor:                      'rgba(44, 44, 44, 0.6)',
      navbarLogoButtonBackgroundColorHover:                 'rgba(80, 80, 80, 0.8)',
  
      navbarDropdownBackgroundColor:                        'rgb(83, 83, 83)',

      navbarDropdownMenuItemBackgroundColorHover:           'rgba(110, 110, 110, 0.8)',
      navbarDropdownIconRight:                              'rgba(246, 246, 246, 0.8)',
      navbarDropdownIconLeft:                               'rgba(246, 246, 246, 0.8)',

      smallAboutTextGradientBackgroundColor:                'rgb(22, 22, 22)',
      smallAboutTextGradientBackgroundImage:                'linear-gradient(-45deg, rgb(255, 255, 255), rgba(100, 195, 255, 0.9))',
      
      /*LOGIN_REGISTER*/

      loginRegisterBoxBackgroundColor:                      'transparent',
      loginRegisterButtonBorder:                            '3px solid rgba(83, 83, 83, 0.7)',
      loginRegisterButtonBackgroundColor:                   'rgba(83, 83, 83, 0.9)',
      loginRegisterButtonColor:                             'rgb(246, 246, 246)',

      loginRegisterLoginButtonBorderColorHover:             'rgb(52, 152, 219)',

      loginRegisterRegisterButtonBorder:                    '3px solid rgba(255, 255, 255, 0)',
      loginRegisterRegisterButtonBackgroundColor:           'rgba(255, 255, 255, 0.8)',
      loginRegisterRegisterButtonColor:                     'rgb(11, 11, 11)',

      loginRegisterRegisterButtonBorderHover:               '3px solid rgb(52, 152, 219)',
      loginRegisterRegisterButtonBackgroundColorHover:      'rgba(83, 83, 83, 0.9)',
      loginRegisterRegisterButtonColorHover:                'rgb(246, 246, 246)',

      /*WELCOME*/

      welcomeTextColor:                                     'rgb(246, 246, 246)',
      welcomeAuroraQuoteAnimationSecondColor:               'rgb(246, 246, 246)',

      /*LOGINFORM*/

      loginFormInputBorder:                                 '3px solid rgb(83, 83, 83)',
      loginFormInputBackgroundColor:                        'rgb(83, 83, 83)',
      loginFormInputColor:                                  'rgb(246, 246, 246)',

      loginFormPlaceholder:                                 'rgb(246, 246, 246, 0.6)',
      loginFormInputBorderColorHover:                       'rgb(52, 152, 219)',

      loginFormButtonBorder:                                '3px solid rgba(22, 22, 22, 0.6)',
      loginFormButtonBackgroundColor:                       'rgba(83, 83, 83, 0.9)',
      loginFormButtonColor:                                 'rgb(246, 246, 246)',

      loginFormButtonBorderColorHover:                      'rgb(52, 152, 219)',

      loginFormNewToAuroraColor:                            'rgb(246, 246, 246)',

      /*REGISTERFORM*/

      registerFormInputBorder:                              '3px solid rgb(83, 83, 83)',
      registerFormInputBackgroundColor:                     'rgb(83, 83, 83)',
      registerFormInputColor:                               'rgb(246, 246, 246)',

      registerFormPlaceholder:                              'rgb(246, 246, 246, 0.6)',
      registerFormInputBorderColorHover:                    'rgb(52, 152, 219)',

      registerFormButtonBorder:                             '3px solid rgba(22, 22, 22, 0.6)',
      registerFormButtonBackgroundColor:                    'rgba(83, 83, 83, 0.9)',
      registerFormButtonColor:                              'rgb(246, 246, 246)',

      registerFormButtonBorderColorHover:                   'rgb(52, 152, 219)',

      registerFormAlreadyAccountColor:                      'rgb(246, 246, 246)',

      registerFormShowPassword:                             'rgb(246, 246, 246)',

      /*MAINPAGE*/

      
};