//Joe Kennerly
import React, { Component } from "react"


export default class ArticleCard extends Component {
  render() {
    return (
        <div key={this.props.article.id} className="card card--article">
          <div className="card-body">
            <div className="card-title">
              <h5>{this.props.article.title}</h5>
              <h6>{this.props.article.date}</h6>
              <h6>{this.props.article.synopsis}</h6>
              <h6>{this.props.article.url}</h6>
              <br />
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  this.props.history.push(`/this.props.articles/${this.props.article.id}/edit`)
                }}
              >
                Edit
              </button>
              <button
                onClick={() => this.props.deleteItem("this.props.articles", this.props.article.id)}
                className="card-link"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
    )
  }
}
