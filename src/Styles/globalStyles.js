import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
      
      .background-particles-background {
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
            background-color:       ${({ theme }) => theme.navbarLogoButtonBackgroundColor };
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

      navbarLogoButtonBackgroundColor:                      'rgba(231, 231, 231, 0.9)',
      
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
      
      navbarLogoButtonBackgroundColor:                      'rgba(83, 83, 83, 0.9)',

      navbarDropdownBackgroundColor:                        'rgb(83, 83, 83)',

      navbarDropdownMenuItemBackgroundColorHover:           'rgba(110, 110, 110, 0.8)',
      navbarDropdownIconRight:                              'rgba(246, 246, 246, 0.8)',
      navbarDropdownIconLeft:                               'rgba(246, 246, 246, 0.8)',

      smallAboutTextGradientBackgroundColor:                'rgb(22, 22, 22)',
      smallAboutTextGradientBackgroundImage:                'linear-gradient(-45deg, rgb(255, 255, 255), rgba(100, 195, 255, 0.9))',

      /*LOGIN_REGISTER*/

      loginRegisterBoxBackgroundColor:                      'transparent',
      loginRegisterButtonBorder:                            '3px solid rgb(170, 170, 170)',
      loginRegisterButtonBackgroundColor:                   'rgba(83, 83, 83, 0.9)',
      loginRegisterButtonColor:                             'rgb(246, 246, 246)',

      loginRegisterLoginButtonBorderColorHover:             'rgb(52, 152, 219)',

      loginRegisterRegisterButtonBorder:                    '3px solid rgba(255, 255, 255, 0)',
      loginRegisterRegisterButtonBackgroundColor:           'rgba(246, 246, 246, 0.8)',
      loginRegisterRegisterButtonColor:                     'rgb(11, 11, 11)',

      loginRegisterRegisterButtonBorderHover:               '3px solid rgb(52, 152, 219)',
      loginRegisterRegisterButtonBackgroundColorHover:      'rgba(83, 83, 83, 0.9)',
      loginRegisterRegisterButtonColorHover:                'rgb(246, 246, 246)',

      /*WELCOME*/

      welcomeTextColor:                                     'rgb(246, 246, 246)',
};