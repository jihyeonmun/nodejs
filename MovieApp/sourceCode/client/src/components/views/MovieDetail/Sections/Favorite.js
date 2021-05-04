import React, {useEffect, useState} from 'react'
//import {movieInfo, movieId,userFrom} from '../MovieDetail';
import Axios from 'axios'
import {Button} from 'antd';
function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.movieTitle
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.movieRunTime

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)
    let variables = {
        userFrom,
        movieId,
        movieTitle,
        moviePost,
        movieRunTime
    }
    
    useEffect(() => {
        

        Axios.post('/api/favoriteNumber',variables)
            .then(response => {
                setFavoriteNumber(response.data.FavoriteNumber)
                if(response.data.success) {
                } else {
                    alert('숫자 정보를 가져오는데 실패했습니다.')
                }
            })

        Axios.post('/api/favorite/favorited',variables)
        .then(response => {
            if(response.data.success) {
                setFavorited(response.data.Favorited)
            } else {
                alert('정보를 가져오는데 실패했습니다.')
            }
        })
    }, [])

    const onclickFavorite = () => {
        if(Favorited) {
            Axios.post('/api/favorite/removeFromFavorite', variables )
            .then(response=> {
                if(response.data.success) {
                    setFavoriteNumber(FavoriteNumber - 1)
                    setFavorited(!Favorited)
                }
                else {
                    alert('Favorite 리스트에서 지우는 것을 실패했습니다. ')
                }
            }) 
        } else {
            Axios.post('/api/favorite/addToFavorite', variables )
            .then(response=> {
                if(response.data.success) {
                    setFavoriteNumber(FavoriteNumber + 1)
                    setFavorited(!Favorited)
                }
                else {
                    alert('Favorite 리스트에서 추가하는 걸 실패했습니다. ')
                }
            }) 
        }
    }

    return (
        <div>
            <Button onClick={onclickFavorite}>{Favorited? "Not Favorite" : "Add to Favorite"} {FavoriteNumber}</Button>
        </div>
    )
}

export default Favorite
