import React from "react";

const NewsItem = (props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
              <span className="badge rounded-pill bg-danger">
                {source}
              </span>
          </div>
              
          <img
            src={
              !imageUrl
                ? "https://www.livemint.com/lm-img/img/2024/03/22/1600x900/gb8791cdb0a94352ddea52c7a4ee26fa27b7ee26374decb0ceb9616e0b8286f33326ae2a0a3f8fee277fb216a269d91e69f2848658afca618ebb233d631d8f392_1280_1711101377078_1711101390447.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              
            </h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
