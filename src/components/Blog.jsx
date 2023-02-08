import React, { useEffect, useState } from 'react'
import { Badge, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import InfiniteScroll from "react-infinite-scroll-component";
import Placeholder from 'react-bootstrap/Placeholder'
const Blog = ({setProgressBar}) => {  
  const [blogdata, setBlogdata] = useState({
    pageSize: 12,
    pageNo: 1,
    totalResults: 0,
    articles: []
  });
  const [loading, setLoading] = useState(false)
  
  useEffect(()=>{
    fatchData()
    // eslint-disable-next-line
  },[])

  const fatchData = async () => {  
    
   setLoading(true);
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=${blogdata.pageSize}&page=1&category=business&apiKey=9030dcb42d6149d588f3c536fd60a6fa`);
    const data = await response.json();
    
    setProgressBar(30)
      setBlogdata({
        pageSize: blogdata.pageSize,
        pageNo: blogdata.pageNo,
        totalResults: data.totalResults,
        articles: data.articles
      })    
     setProgressBar(100)
     setLoading(false);  
  };

  const fetchMoreData = async () => {    
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=${blogdata.pageSize}&page=${blogdata.pageNo + 1}&category=business&apiKey=9030dcb42d6149d588f3c536fd60a6fa`)
    const data = await response.json();         
      setBlogdata({
        pageSize: 12,
        pageNo: blogdata.pageNo + 1,
        totalResults: data.totalResults,
        articles: blogdata.articles.concat(...data.articles)
      })        
  };

  function formatAMPM(oridate) {
    let d = new Date(oridate);
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + "" + ampm;
    let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return {da, mo, strTime};
  }

  return (
    <section id="Blog" className="blogSection panel panelPadding">      
    
      <Container fluid="md">
        <div className="panelTitle">
          <h2>Blog</h2><span>Blog</span>
        </div>
        {loading && <div className='w-100 p-2 text-center text-primary'><Spinner /></div>}
          <InfiniteScroll
          dataLength={blogdata.articles.length}
          next={fetchMoreData}
          hasMore={blogdata.articles.length <= blogdata.totalResults ? true : false}
          loader={!(blogdata.articles.length >= blogdata.totalResults) ? <div className='w-100 p-2 text-center text-primary'><Spinner /></div> : ''}>               
          <Row xs={1} sm={2} md={2} lg={2} xl={3} xxl={4} className="g-4">
          {blogdata.articles.map((e)=>{return(             
            <Col key={e.url}>
            <Card className="shadow-sm">              
              <Badge className='position-absolute' bg="danger">{e.source.name}</Badge>
              <div className='position-relative'>
                <a href={e.url} target="blank">{e.urlToImage == null ? <Placeholder className="card-img-top w-100" as="img" animation="wave" ></Placeholder> : <Card.Img variant="top" src={e.urlToImage} />}</a>
                <div className='date'>{<Badge className='position-absolute dateBlock' bg="dark"><h4>{formatAMPM(e.publishedAt).da}</h4><span>{formatAMPM(e.publishedAt).mo}</span><hr className='my-2'/><small>{formatAMPM(e.publishedAt).strTime}</small></Badge>}</div>
              </div>
              <Card.Body>
                <Card.Title className="fw-bold text-truncate">{e.title}</Card.Title>
                <Card.Text className='text-truncate'>{e.description == null ? '...': e.description}</Card.Text>
              </Card.Body>
            </Card>
            </Col>           
          )})}      

          </Row>
          </InfiniteScroll>
        
      </Container>
    </section>
  )
}

export default Blog
