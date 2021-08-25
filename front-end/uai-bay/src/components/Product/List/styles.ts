import { makeStyles } from "@material-ui/core"


export const useStyles = makeStyles((theme) => ({
    listProduct: {
        border: '1px solid #E5E2E1', 
        borderRadius: '5px',
        width: '97%', 
        margin: '5px',
        borderLeft: '5px solid #3F51B5',
        marginLeft: '20px'
    },
    productDiv: {
        width: '85%',
        margin: '5px',
        padding: '5px'
    },
    buttonDiv: {
        width: '5%',
        display: 'flex'
    },
    newProductButtonDiv: {
        display: 'flex',
        margin: '10px',
        justifyContent: 'flex-end',
        width: '95%'
    }
}))