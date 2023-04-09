import React from "react";
import './Home.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { apiKey, apiHost } from '../../constants/data';


const Home = () => {

    let [dataWordDay, setResponse] = useState([]);
    let cont = 0;

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
            setResponse(response.data.list);
            console.log(response.data.list);
        }).catch(function (error) {
            console.error(error);
        });
    }

        return( 
            <div className="Home">
                    <div className="title-search">
                    <h1>Word of the Day</h1>
                </div>
                <div className="Home_content">
                    <div className="random-word-definition-container">
                        {
                        dataWordDay.map((list, index) => {
                                        console.log(list);
                                        const hrefId = '#' + list.word;
                                        cont += 1;
                                        return <a href={hrefId}>{cont}</a>
                            }) 
                        }

                        <div className="random-word-definition">
                            {
                            dataWordDay.map((list, index) => {
                                console.log(list);
                                return <div className="random-word-slides" id={list.word}>
                                            <div className="random-word-context">
                                                <h1 className="word-h1">{list.word}</h1>
                                                <p className="word-definition">{list.definition}</p>
                                                <p className="word-example">Example: {list.example}</p>
                                                <div className="thumbs-slides"> 
                                                    <p>{list.thumbs_up} <FaThumbsUp className="icon-size" style={{ fill: '#0d81c5' }}/></p>
                                                    <p>{list.thumbs_down} <FaThumbsDown className="icon-size" style={{ fill: '#bd091b' }} /></p>   
                                                </div>
                                            </div>
                                        </div>
                                })
                            } 
                        </div>
                    </div>
                </div>
            </div>

                    
    );
}

export default Home;