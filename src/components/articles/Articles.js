//Joe Kennerly
import React, { Component } from "react"
import ArticleForm from "./ArticleForm"
import "./Articles.css"

class Articles extends Component {
  render() {
    let moment = require("moment")
    return (
      <React.Fragment>
        <ArticleForm moment={moment} {...this.props} />
        <section className="articles">
          {
            this.props.articles.sort((a, b) => {
              return moment(a.date).unix() - moment(b.date).unix()
            }).map(article => (
            <div key={article.id} className="card card--article">
              <div className="card-body">
                <div className="card-title">
                  <h5>{article.title}</h5>
                  <h6>{article.synopsis}</h6>
                  <a href={article.url}>{article.url}</a><br / >
                  <h6>{article.date}</h6>
                  <button
                    type="button"
                    className="btn btn-successgs"
                    onClick={() => {
                      this.props.history.push(`/articles/${article.id}/edit`)
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => this.props.deleteItem("articles", article.id)}
                    className="card-link"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </React.Fragment>
    )
  }
}

export default Articles
