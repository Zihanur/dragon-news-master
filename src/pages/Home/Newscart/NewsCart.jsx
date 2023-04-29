import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaRegEye, FaShareAlt } from "react-icons/fa";

const NewsCart = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <div>
      <Card className="">
        <Card.Header className="d-flex align-items-center">
          <Image style={{ height: "40px" }} src={author.img} roundedCircle />
          <div className="ms-2 flex-grow-1">
            <p className="mb-0">{author.name}</p>
            <p>
              <small>{moment(author.published_date).format("yyyy-MM-D")}</small>
            </p>
          </div>
          <div className="d-flex gap-2">
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            <div>
              {details.length > 200 ? (
                <>
                  {details.slice(0, 200)}...
                  <Link to={`/news/${_id}`}>Read more</Link>
                </>
              ) : (
                <>{details}</>
              )}
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex align-items-center">
          <div className="flex-grow-1">
            <p>{rating.number}</p>
          </div>
          <div>
            <p className="d-flex align-items-center gap-2">
              <FaRegEye></FaRegEye>
              {total_view}
            </p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCart;
