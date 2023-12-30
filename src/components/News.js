import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


function News(props){

    const [article,setArticle]=useState([])
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1)
    const [totalPages,setTotalPages]=useState(0)

    document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1, props.category.length)} - NewsApp`



    const updateNews=async()=>{
        props.progress(10);
        let url = `https://newsdata.io/api/1/news?apikey=pub_35580a0540b2c4e3d0076c3eb94179824a8b2&country=${props.country}&category=${props.category}&language=en`
        setLoading(true)
        let data = await fetch(url)
        props.progress(30);
        let parsedData = await data.json()
        console.log(parsedData)
        props.progress(70);
        setArticle(parsedData.results)
        setPage(parsedData.nextPage)
        setTotalPages(parsedData.totalResults)
        setLoading(false)
        props.progress(100);
    }

    useEffect(()=>{
        updateNews();
        // eslint-disable-next-line
    },[])
    
    const fetchMoreData=async ()=> {
        props.progress(10);
        let url = `https://newsdata.io/api/1/news?apikey=pub_35580a0540b2c4e3d0076c3eb94179824a8b2&country=${props.country}&category=${props.category}&language=en${page===1?"":`&page=${page}`}`

        setLoading(true)
        let data = await fetch(url)
        props.progress(30);
        let parsedData = await data.json()
        props.progress(70);
        setArticle(article.concat(parsedData.results))
        setLoading(false)
        setPage(parsedData.nextPage)
        props.progress(100);
    };
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{ marginTop: '80px' }}>Top Headlines - {props.category.charAt(0).toUpperCase() + props.category.slice(1, props.category.length)}</h1>

                <InfiniteScroll
                    dataLength={article.length}
                    next={fetchMoreData}
                    hasMore={article.length <= totalPages}
                    loader={loading && <Spinner />}>

                    <div className="container">
                        <div className="row my-2">
                            {article.map((element) => {
                                return <div className="col md-4 my-3" key={element.url}>
                                    <NewsItem title={element.title !== null ? element.title : ""}
                                    
                                    description = {element.content !== null ? (element.content.length > 50 ? element.content.slice(0, 300): element.content) : ""} url={element.image_url != null ? element.image_url : Math.random("https://images.moneycontrol.com/static-mcnews/2023/12/stocks_sensex_nifty_stockmarket-770x433.jpg",
                                    "https://i0.wp.com/kashmirreader.com/wp-content/uploads/2020/11/Internet-Connectivity-Infrastructure-Policy.jpg?fit=488%2C307&ssl=1","https://i0.wp.com/kashmirreader.com/wp-content/uploads/2019/10/cabinet-meet-1.jpg?fit=620%2C415&ssl=1",
                                    "https://st1.latestly.com/wp-content/uploads/2020/10/Latestly-World-News-380x214.jpg",
                                    "https://media.assettype.com/freepressjournal/2023-03/cf452cd4-bfd4-45b9-b44e-162a52113e65/bomb_hc.jpg",
                                    )} author={element.author != null && element.creator.length > 0 ? element.creator : "Unknown"} time={element.pubDate} source={element.source_id} newsUrl={element.link} color={props.category === 'top' ? 'danger' : props.category === 'business' ? 'dark' : props.category === 'entertainment' ? 'secondary' : props.category === 'health' ? 'success' : props.category === 'sports' ? 'primary' : props.category === 'science' ? 'info' : 'warning'} />
                                </div>
                            })}
                        </div>

                    </div>
                </InfiniteScroll>
            </div>
        )
}



News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
