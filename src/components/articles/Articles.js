import React, { Component } from "react"
import ArticleForm from "./ArticleForm"

class Articles extends Component {
  state = {
    articles: []
  }

  render() {
      //if there is an active user
      console.log(this.props)
      return (
        <React.Fragment>
          <ArticleForm {...this.props}/>
          <section className="articles">
          {
            this.props.articles.map(article =>
                <div key={article.id} className="card card--article">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>{article.name}</h5>
                                <h6>{article.date}</h6>
                                <h5>{article.location}</h5>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick=
                                    {() =>
                                        {
                                        this.props.history.push(`/articles/${article.id}/edit`);
                                        }
                                    }>
                                    Edit
                                </button>
                            <a href="#"
                                // onClick={() => this.props.deleteItem("articles", article.id)}
                                className="card-link">Delete</a>
                            </div>
                        </div>
                    </div>
            )
          }
          </section>
        </React.Fragment>
      )
  }
}

export default Articles
