import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    userDiv: {
        width: '95%',
        margin: '5px',
        padding: '5px'
    },
    listItem: {
        border: '1px solid #E5E2E1', 
        borderRadius: '5px',
        width: '100%', 
        margin: '5px',
        borderLeft: '5px solid #3F51B5'
    },
    trashDiv: {
        display: 'flex',
        width: '5%'
    }
}))
