import React, { useEffect, useState, useContext } from 'react'

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CachedIcon from '@material-ui/icons/Cached';
import { Grid } from '@material-ui/core';

// Services
import { getItem } from '../services/quoteService'
import QuoteContext from '../services/quoteContext'

const useStyles = makeStyles((theme) => ({
    item: {
        textAlign:'center'
    }
  }));


const Quote = () => {
    const classes = useStyles()
    const [quote, setQuote] = useState({
        text: '',
        author: ''
    })

    const quotes = useContext(QuoteContext)

    const replaceQuote = () => {
        let newQuote = getItem(quotes)
        if(newQuote)
            newQuote.text !== quote.text ? setQuote(newQuote) : replaceQuote()
    }

    useEffect(() => {
        replaceQuote()
        return () => {
            setQuote({
                text: '',
                author: ''
            })
        }
    }, [quotes])

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{padding:'15px'}} className={classes.item}>
                    <h2>"{quote ? quote.text : ''}"</h2>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.item}>
                    <cite>- {quote ? quote.author : 'unknown'}</cite>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.item}>
                    <Button startIcon={<CachedIcon />} variant="outlined" color='primary' onClick={()=>replaceQuote()}>New Quote</Button>
                </Grid>
            </Grid>       
        </div>
    )
}

export default Quote
