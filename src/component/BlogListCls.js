import React from 'react';

export class BlogListCls extends React.Component {

    render() {

        if (this.props.items.length > 0) {
            return (
                <div>
                    <span style={{ color: "red", fontSize: '15px' }} >Blogs Count : {this.props.items.length}</span>
                    {
                        this.props.items && <ul>
                            {this.props.items.reverse().map(item => (
                                <li style={{ color: "yellow" }} key={item.id}>{item.id}->{item.title}->{item.description}</li>
                            ))}
                        </ul>
                    }
                </div>
            )
        }
        else {
            return <div>No Blogs Available. Please Add First.</div>
        }
    }

}