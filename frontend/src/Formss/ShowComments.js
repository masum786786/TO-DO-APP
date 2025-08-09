import React, { useState } from "react";
import "./ShowComments.css";
import CommentsForm from "./CommentsForms";

const ShowComments = () => {
    const [commentData, setCommentsData] = useState([
        {
            username: "@masum",
            remarks: "good",
            rating: "3"
        }
    ]);

    const addNewComments = (comment) => {
        setCommentsData((currComments) => [...currComments, comment]);
        console.log("Comment added:", comment);
    };

    return (

        <div className="comments-page">
        <div className="comments-wrapper">
          <CommentsForm addNewComments={addNewComments} />
  
          <h2 className="section-title">Customer Comments</h2>
  
          <div className="comments-list">
            {commentData.map((c, index) => (
              <div className="comment-card" key={index}>
                <h3 className="username">{c.username}</h3>
                <p className="rating">
                  {"⭐".repeat(Number(c.rating))}{"☆".repeat(5 - Number(c.rating))}
                </p>
                <p className="remarks">{c.remarks}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default ShowComments;
