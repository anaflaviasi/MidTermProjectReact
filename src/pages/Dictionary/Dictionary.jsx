import React from "react";
import { Input } from 'reactstrap';
import './Dictionary.css';
import { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import axios from 'axios';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { apiKey, apiHost } from '../../constants/data';

import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
  } from 'reactstrap';

const Dictionary = () => {

    let [wordName, setWordName] = useState("");
    let [dataWord, setResponse] = useState([]);
    let [dataWordRandom, setResponseRandom] = useState([]);
    let cont = 0;


    const changeInputWordName = (event) => {
        setWordName(event.target.value);
    };

// Search by NAME
    useEffect(() => {
        getWordByName();
    }, []);

    const getWordByName = () => { 
        if (wordName === ''){
            wordName = 'rizz';
        }
        const options = {
        method: 'GET',
        url: 'https://urban-dictionary7.p.rapidapi.com/v0/define',
        params: {term: wordName},
        headers: {
            'X-RapidAPI-Key': apiKey,
             'X-RapidAPI-Host': apiHost
        }
        };

        axios.request(options).then(function (response) {
            setResponse(response.data.list);
            console.log(response.data.list);
        }).catch(function (error) {
            console.error(error);
        });
    }


// RANDOM Search
    useEffect(() => {
        getWordByRandom();
    }, []);

    
    const getWordByRandom = () => { 
        const options = {
        method: 'GET',
        url: 'https://urban-dictionary7.p.rapidapi.com/v0/random',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }
        };

        axios.request(options).then(function (response) {
            setResponseRandom(response.data.list);
            console.log(response.data.list);
        }).catch(function (error) {
            console.error(error);
        });
    }


// WORD OF THE DAY Search
    useEffect(() => {
        getWordOfTheDay();
    }, []);

    
    const getWordOfTheDay = () => { 
        const options = {
        method: 'GET',
        url: 'https://urban-dictionary7.p.rapidapi.com/v0/words_of_the_day',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }
        };

        axios.request(options).then(function (response) {
            setResponseRandom(response.data.list);
            console.log(response.data.list);
        }).catch(function (error) {
            console.error(error);
        });
    }


    return(
        <div>
            <div className="search-container"> 
                <div className="title-search">
                    <h1>Look up a word, learn it forever.</h1>
                </div>
                <div className="input-search">
                    <Input
                        value={wordName}
                        onChange={changeInputWordName}
                        placeholder="Search the word"
                    />
                    <button className="button-search" onClick={getWordByName}><FcSearch /></button>
                </div>
            </div>

            <div className="container-columns">
                <div className="container-col1">
        
                    {
                        dataWord.map((list, index) => {
                            console.log(list);
                            if (index === 0){
                                return <div className="word-container">
                                        <h1 className="word-h1">{list.word}</h1>
                                        <p className="word-definition">{list.definition}</p>
                                        <p className="word-example">Example: {list.example}</p>
                                        <div className="thumbs"> 
                                            <p>{list.thumbs_up} <FaThumbsUp size={20} style={{ fill: '#0d81c5' }}/></p>
                                            <p>{list.thumbs_down} <FaThumbsDown size={20} style={{ fill: '#bd091b' }} /></p>
                                        </div>
                                    </div>
                            }
                        })
                    }


                    <div className="more-definitions"> 
                        <ol>
                        {
                        dataWord.map((list, index) => {
                        console.log(list);
                            if (index === 0){
                                return <div class="label"> 
                                        <span class="word">More definitions of {list.word}</span>
                                       </div>
                            }
                            else {
                                return  <li>
                                            <div className="definition">{list.definition}</div>
                                            <div className="defContent">
                                                <div className="example">Example: {list.example}</div>
                                                <div className="thumbs"> 
                                                    <p>{list.thumbs_up} <FaThumbsUp size={15} style={{ fill: '#0d81c5' }}/></p>
                                                    <p>{list.thumbs_down} <FaThumbsDown size={15} style={{ fill: '#bd091b' }} /></p>
                                                </div>
                                            </div>
                                        </li>   
                            }
                        })
                        }    
                        </ol>
                    </div>
                </div>   

                <div className="container-col2">
                    <div className="random-word-container">
                        <div className="random-word-header">
                            <div class="label"> 
                                <span class="random-word-title">Examples from Urban Dictionary</span>
                            </div>    
                            <div class="dropdown-wrapper">
                                <div className="d-flex p-5 justify-content-center">
                                    <UncontrolledDropdown className="me-2" direction="down">
                                        <DropdownToggle caret color="primary">
                                            Select your word
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem onClick={getWordByRandom}>Random Word</DropdownItem>
                                            <DropdownItem  onClick={getWordOfTheDay}>Word of the Day</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </div>
                        </div>
                        <div className="random-word-definition-container">
                                {
                                dataWordRandom.map((list, index) => {
                                                console.log(list);
                                                const hrefId = '#' + list.word;
                                                cont += 1;
                                                return <a href={hrefId}>{cont}</a>
                                    }) 
                                }
                            <div className="random-word-definition">
                            
                                {
                                     dataWordRandom.map((list, index) => {
                                         console.log(list);
                                         return     <div className="random-word-slides" id={list.word}>
                                                                <div className="random-word-context">
                                                                    <h1 className="word-h1">{list.word}</h1>
                                                                    <p className="word-definition">{list.definition}</p>
                                                                    <p className="word-example">Example: {list.example}</p>
                                                                    <div className="thumbs-slides"> 
                                                                        <p>{list.thumbs_up}<FaThumbsUp size={20} style={{ fill: '#0d81c5' }}/></p>
                                                                        <p>{list.thumbs_down}<FaThumbsDown size={20} style={{ fill: '#bd091b' }} /></p>   
                                                                    </div>
                                                                </div>
                                                    </div>
                                     })
                                 } 
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    )
}

export default Dictionary;