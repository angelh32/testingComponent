
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from "react";
import { Link } from "react-router-dom";
import { removeHtmlTag } from "../tools/helpers";
import { Show } from "../types/types";
import "./ShowComponent.css";



// .replace(new RegExp(/\<[\/bp]\>/, 'g'),"")
interface ShowComponentProps {
    show: Show
}

const ShowComponent: React.FC<ShowComponentProps> = (props) => {
    const summary = props.show.summary? removeHtmlTag(props.show.summary) : "No Summary";
    const genres = props.show.genres.map(item=>{
        return <p key={`${Math.floor(Math.random() * 10000)}`}>{item}</p>
    })
    return (
      <Grid item xs={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="480"
            image={props.show.image}
            alt="Show image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.show.name}{' '}
              <span role="img" aria-label="star"> ⭐ </span>
              <span>{(props.show.score * 10).toFixed(1)}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {summary}
                <p>{props.show.status}</p>
                <p>{props.show.languaje}</p>
                <p><a href={`https://www.imdb.com/title/${props.show.imdb}/`}>IMDb</a></p>
                {genres}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/show/${props.show.id}`} >
            <Button size="small">Show Episodes`</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    );
}

export default ShowComponent
