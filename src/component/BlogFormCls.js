import React from 'react';
import { BlogListCls } from './BlogListCls';

export class BlogForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.blogId = React.createRef();
        this.blogTitle = React.createRef();
        this.blogDesc = React.createRef();
        this.state = { blogList: [] }
    }

    componentDidMount() {
        const list = localStorage.getItem('blog');
        const updatedBlogList = JSON.parse(list)
        if (updatedBlogList)
            this.setState(state => ({
                blogList: state.blogList.concat(updatedBlogList)
            }))
    }

    handleSubmit(e) {
        e.preventDefault();
        var blogAlreadySaved = false;
        const temp = localStorage.getItem('blog');
        const tempList = JSON.parse(temp);

        if (tempList) {
            for (let item of tempList) {
                console.log(item);
                if (item.id === this.blogId.current.value) {

                    blogAlreadySaved = true;

                    item.title = this.blogTitle.current.value
                    item.description = this.blogDesc.current.value

                }

            }

            if (!blogAlreadySaved) {
                let blogData = {
                    id: this.blogId.current.value,
                    title: this.blogTitle.current.value,
                    description: this.blogDesc.current.value
                };
                tempList.push(blogData)
            }

            this.setState(state => {

                localStorage.setItem("blog", JSON.stringify(tempList));
                return ({
                    blogList: tempList
                })
            })

        }
        else {
            let blogData = {
                id: this.blogId.current.value,
                title: this.blogTitle.current.value,
                description: this.blogDesc.current.value
            };
            this.setState(state => {
                const list = state.blogList.concat(blogData)
                localStorage.setItem("blog", JSON.stringify(list));
                return ({
                    blogList: state.blogList.concat(blogData)
                })
            }
            )
        }
        return;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Blog Id:
                        <input type="text" ref={this.blogId} style={{ fontSize: '30px', paddingLeft: '10px', margin: '10px' }}></input>
                        </label>
                    </div>
                    <div>
                        <label>
                            Blog Title:
                        <input type="text" ref={this.blogTitle} style={{ fontSize: '30px', paddingLeft: '10px', margin: '10px' }}></input>
                        </label>
                    </div>
                    <div>
                        <label>
                            Blog Description:
                        <input type="text" ref={this.blogDesc} style={{ fontSize: '30px', paddingLeft: '10px', margin: '10px' }}></input>
                        </label>
                    </div>



                    <button style={{ fontSize: '30px', margin: '10px' }}>
                        Submit Blog
                    </button>

                </form>

                <div>
                    {this.state.blogList && <BlogListCls items={this.state.blogList} />}
                </div>

            </div>
        )
    }


}

export default BlogForm


