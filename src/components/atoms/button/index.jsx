import React from 'react';
import { Button } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions';


const Buttons = (props) => {
    const { data } = props
        if (data.isPublic) {
            return(
                <CardActions>
                    <Button size="small" variant="contained" color="primary" href={data.linkPage} target="_blank">
                        visitar
                    </Button>
                    <Button size="small" color="primary" variant="contained" href={data.linkCode} target="_blank">
                        ver código
                    </Button>
                </CardActions>
            )
        } if (data.NoInterface) {
            return (
                <CardActions>
                    <Button size="small" variant="contained" color="primary" href={data.linkCode} target="_blank">
                        Ver codigo
                    </Button>
                </CardActions>
            )
        } else {
            return (
                <CardActions>
                    <Button size="small" variant="contained" color="primary" href={data.linkPage} target="_blank">
                        visitar
                    </Button>
                </CardActions>
            )
        }
}

export default Buttons;