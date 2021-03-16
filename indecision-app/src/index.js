import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

export default function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today @ 2:00am"
          text="Hi How are you?"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Natasha"
          timeAgo="Today @ 3:00am"
          text="I'm good and you?"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Giovanni"
          timeAgo="Today @ 4:00am"
          text="Hi How are you?"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ozzie"
          timeAgo="Today @ 5:00am"
          text="I'm good and you?"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Lana"
          timeAgo="Today @ 6:00am"
          text="Hi How are you?"
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
