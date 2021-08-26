import { Fade, Paper } from '@material-ui/core'
import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { getEmployees } from '../../store/Employee/selectors'
import { EmployeeList } from './List'


export const EmployeeComponent: FC = () => {

    const employees = useSelector(getEmployees)
    const [listMode, setListMode] = useState(true)

    return(
        <Fade
        style={{
            overflow: "hidden",
            borderTop: "8px solid #3F51B5",
            borderRadius: "3px",
            marginLeft: "20px",
          }}
          timeout={500}
          in={true}
          mountOnEnter
          unmountOnExit
        >
            <Paper>
                {listMode && (<EmployeeList employees={employees} />)}
            </Paper>
        </Fade>
    )
}