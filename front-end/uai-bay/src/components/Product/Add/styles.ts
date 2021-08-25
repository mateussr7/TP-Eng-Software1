import { makeStyles } from "@material-ui/core"


export const useStyles = makeStyles((theme) => ({
    textFieldDiv: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
    },
    textFieldStyle: {
        width: '50%',
        margin: '10px'
    },
    buttonDiv: {
        display: 'flex',
        padding: '5px'
    }
}))