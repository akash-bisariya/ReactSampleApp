import React from 'react';

export class BlogListCls extends React.Component {

    render() {

        if (this.props.items.length > 0) {
            return (
                <div>
                    <span style={{ color: "yellow", fontSize: '15px' }} >Total Blog Count : {this.props.items.length}</span>
                    {
                        this.props.items && <ul>
                            {this.props.items.reverse().map(item => (
                                <li style={{ color: "green" }} key={item.id}>{item.id}->{item.title}->{item.description}</li>
                            ))}
                        </ul>
                    }
                </div>
            )
        }
        else {
            console.log(this.props.items)
            return <div>Blog List Is Empty</div>
        }

        // return (
        //     <div>
        //         {
        //              this.props.items && <ul>
        //                 { this.props.items.map(item => (
        //                  <li key={item.title}>{item.description}</li>
        //                  ))}
        //             </ul> 
        //         }
        //     </div>
        // );
    }

}