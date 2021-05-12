import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Buttons from '../../atoms/button/index'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#EBEBEB'
  },
  cardMedia: {
    paddingTop: '70%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));
 
const ContentGrid = ( props ) => {
  const { projectList } = props.data
  const classes = useStyles()
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {projectList.map((items) => (
          <Grid item key={items} xs={12} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={items.img}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {items.title}
                </Typography>
                <Typography>
                  {items.text}
                </Typography>
              </CardContent>
                <Buttons data= { items } />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
 
export default ContentGrid;
