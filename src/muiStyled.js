import { Box, Button, styled, Toolbar } from "@mui/material"

export const HeroImage = styled(Box)({
    width: '100%',
    height: '600px',
    objectFit: 'cover'
})

export const ToolbarFlex = styled(Toolbar)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})

export const SectionImage = styled(Box)({
    width: '100%',
    height: '500px',
    objectFit: 'cover'
})

export const IntroContent = styled(Box)(({theme})=> ({
    background : theme.palette.secondary.main,
    color: theme.palette.common.main,
    flex: '1',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
}))

export const IntroBtn = styled(Button)(({theme})=> ({
    background : theme.palette.primary.main,
    color: theme.palette.common.main,
    width: '200px'
}))

export const SubscribeBox = styled(Box)(({theme}) => ({
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: theme.palette.common.main
}))

export const FooterBox = styled(Box)(({theme}) => ({
    padding: '20px',
    width: '100%',
    backgroundColor: theme.palette.primary.main
}))

export const AboutHeader = styled(Box)(({theme}) => ({
    width: '100%',
    minHeight: '545px',
    backgroundColor: theme.palette.secondary.main
}))

export const LoadingWrapper = styled(Box)(({theme}) => ({
    position: 'fixed',
    top: '0',
    zIndex: '999',
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}))