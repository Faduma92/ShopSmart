import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { Card, Button} from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import logo from './logoipsum.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function WhatsNew() {
  const [spacing, setSpacing] = React.useState(10);
  const classes = useStyles();

  

  return (
    <div>
    
      <h3>What's New</h3>
    <Grid container className={classes.root} spacing={5}>
      <Grid item xs={12}>
          
        <Grid container justify="center" spacing={spacing}>


          

          {[0, 1, 2, 4, 5].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} >

  <Card.Img variant="top" src={logo} />
  <Card.Body>
    <Card.Title>Product Name</Card.Title>
    <Card.Text>
     Price
    </Card.Text>
    <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
  </Card.Body>
  </Paper>

         

            </Grid>
          ))}
        </Grid>
      </Grid>

      
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            
          </Grid>
        </Paper>
      </Grid>
    </Grid>
    </div>
  );
}
