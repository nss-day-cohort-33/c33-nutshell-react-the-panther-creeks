//Daniel Krusch
import React, { Component } from "react";
import APIManager from "../../modules/APIManager"

export default class FriendSearch extends Component {

  render() {
    //if there is an active user
    return (
      <React.Fragment>
        <section className="friends">
        {
                this.props.potentialFriends.map(friend =>
                    {
                        console.log(!friend.id === +sessionStorage.getItem("activeUser"))
                        if (!(friend.id === +sessionStorage.getItem("activeUser")))
                        {
                            return <div key={friend.id} className="card card--friend">
                            <div className="card-body">
                                <div className="card-title">
                                    <h5>{friend.username}</h5>
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick=
                                        {() =>
                                            {
                                            let obj = {
                                                friend_id: friend.id,
                                                user_id: +sessionStorage.getItem("activeUser")
                                            }
                                            this.props.addFriend("friends", obj)
                                            }
                                        }>Add
                                    </button>
                                    </div>
                            </div>
                        </div>
                        }
                    }
                )
            }
        </section>
      </React.Fragment>
    );
  }
}
