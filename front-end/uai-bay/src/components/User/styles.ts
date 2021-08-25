import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
  fade: {
    overflow: 'hidden', 
    marginTop: '80px', 
    borderTop: '8px solid #3F51B5', 
    borderRadius: '3px', 
    marginLeft: '20px'
  },
    paper: {
        width: '98%',
        minHeight: '10vh',
        margin: '5px',
        display: 'flex',
        flexDirection: 'column',       
        overflow: 'scroll',
        transition: '500ms',
        background: '#fff'
      },
      container: {
        width: '100%',
      
      }
}))