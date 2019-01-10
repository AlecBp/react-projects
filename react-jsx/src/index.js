import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

// Bring other components
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create component 
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                author={faker.name.firstName()}
                timeStamp="Today at 2:56PM"
                content={faker.lorem.sentence()}
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                author={faker.name.firstName()}
                timeStamp="Today at 2:56PM"
                content={faker.lorem.sentence()}
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                author={faker.name.firstName()}
                timeStamp="Today at 2:56PM"
                content={faker.lorem.sentence()}
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};
// Render the component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);