import { Grid, IconButton, List, ListItem, ListItemIcon, Typography } from '@material-ui/core'
import React, { FC, useEffect } from 'react'
import { Employee } from '../../../store/Employee/types'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import DeleteIcon from "@material-ui/icons/Delete";


import { useStyles } from './styles'
import { useDispatch } from 'react-redux';
import { fetchEmployee } from '../../../store/Employee/actions';

interface EmployeeListProps{
    employees: Employee[]
}

export const EmployeeList: FC<EmployeeListProps> = ({ employees }: EmployeeListProps) => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchEmployee())
    }, [dispatch])

    const classes = useStyles()

    return(
        <Grid item>
            <List>
                {employees.map((employee) => (
                    <ListItem key={employee.id} className={classes.employeeList}>
                        <ListItemIcon>
                            <AssignmentIndIcon />
                        </ListItemIcon>
                        <div className={classes.employeeDiv}>
                            <Typography>
                                {employee.name} - {employee.telephone}
                            </Typography>
                            <div>
                                <Typography>
                                    {employee.salary}
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.buttonDiv}>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </ListItem>
                ))}
            </List>
        </Grid>
    )
}