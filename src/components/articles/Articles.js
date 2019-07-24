//Joe Kennerly
import React, { Component } from "react"
import ArticleForm from "./ArticleForm"
import ArticleCard from "./ArticleCard"
import "./Articles.css"

class Articles extends Component {
  render() {
    return (
      <React.Fragment>
        <ArticleForm {...this.props} />
        <section className="articles">
          {this.props.articles.map(article => (
            // <ArticleCard key={article.id} article={article} deleteItem={this.props.deleteItem} updateItem={this.props.updateItem}/>
            <div key={article.id} className="card card--article">
              <div className="card-body">
                <div className="card-title">
                  <h5>{article.title}</h5>
                  <h6>{article.date}</h6>
                  <h6>{article.synopsis}</h6>
                  <h6>{article.url}</h6><br / >
                  <button
                    type="button"
                    className="btn btn-success"
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
