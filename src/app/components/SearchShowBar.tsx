import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from "react";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { fetchShows } from "../redux/actions/GetShows";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));


interface SearchShowBarProps { }

const SearchShowBar: React.FC<SearchShowBarProps> = (props) => {

    const dispatch: Dispatch<any> = useDispatch()
    const [query, setQuery] = useState<string>("doctor")
    const [searchInfo, setSearchInfo] = useState<string>("doctor")
    let history = useHistory();

    const getShows = async (filter: string) => {
        setSearchInfo(filter)
        dispatch(fetchShows(searchInfo))
    }

    useEffect(() => {
        getShows(searchInfo)
    }, [searchInfo])

    function handleSearch(action: React.FormEvent<HTMLFormElement>) {
        action.preventDefault()
        getShows(query)//.then(()=>history.push("/"))
        
    }

    const handleOnChange = (action) => {
        action.preventDefault()
        setQuery(action.target.value)
    }
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 3 }}
            >
              Shows
            </Typography>
            <form className="searchForm" onSubmit={handleSearch}>
              <Search>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={handleOnChange}
                />
              </Search>
              <Button type="submit" color="inherit">
                Search
              </Button>
            </form>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default SearchShowBar
