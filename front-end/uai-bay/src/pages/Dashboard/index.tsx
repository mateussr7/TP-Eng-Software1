import { AppBar, Divider, Drawer, Grid, IconButton, List, Toolbar, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React, { FC, useEffect, useState } from 'react'
import useStyles from './styles'
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { ItemsList } from '../../components/MenuItems'
import { Route, Switch } from 'react-router-dom'
import User from '../../components/User'
import { useSelector } from 'react-redux'
import { getLogged } from '../../store/User/selectors'
import { useHistory } from 'react-router'
import { Login } from '../../components/Login'
import { SignUp } from '../../components/SignUp'
import { Product } from '../../components/Product'

const Dashboard: FC = () => {

    const classes = useStyles()
    const [open, setOpen] = useState<boolean>(true)
    const logged: boolean = useSelector(getLogged)
    const history = useHistory()

    useEffect(() => {
        if(!logged)
            history.push('/login')
    })

    function handleOpenChange(){
        setOpen(!open)
    }

    return <div className={classes.root}>
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    onClick={handleOpenChange}
                >
                <MenuIcon />
                </IconButton>
                <Typography className={classes.title}>Uai-Bay</Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            open={open}
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
            }}
        >
            <div>
                <IconButton onClick={handleOpenChange}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List><ItemsList logged={logged} /></List>
        </Drawer>
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
                <Container className={classes.container} maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={12}>
                            <Switch>
                                <Route path="/customers" component={User}/>
                                <Route path="/login" component={Login} />
                                <Route path="/signup" component={SignUp} />
                                <Route path="/products" component={Product} />
                            </Switch>
                        </Grid>
                    </Grid>
                </Container>
            
        </main>
    </div>
}

export default Dashboard