import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    '@keyframes context': {
        '0%': {
            height: '0px',
            opacity: 0
        },
        '100%': {
            height: '50px',
            opacity: 1
        }
    },
    root: {
        display: 'flex',
        overflowY: 'hidden',
        alignItems: 'center',
        height: '98vh',
    },
    main_container: {
        display: 'flex', 
        justifyItems: 'center', 
        alignItems: 'center',
        flexDirection: 'column',
        border: '1px solid #E5E2E1',
        borderRadius: '5px',
        height: '60%',
        width: '40%',
        marginTop: '100px',
        borderLeft: '5px solid #3F51B5'
    },
    loginLabel: {
        fontFamily: 'Helvetica',
        fontSize: '40px',
        color: 'primary'
    },
    labelDiv: {
        display: 'flex',
        justifyContent: 'center'
    },
    textFieldStyle: {
        width: '80%',
        margin: '10px'
    },
    button: {
        width: '80%',
        marginBottom: '2px'
    },
    paper: {
        width: '98%',
        minHeight: '10vh',
        margin: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        overflow: 'scroll',
        flexWrap: 'wrap',
        transition: '500ms',
        background: '#fff',
        height: '60%'
      },
}))