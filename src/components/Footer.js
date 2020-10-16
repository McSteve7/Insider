import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <div className="">
            <div className="bg-purple-100 text-white text-center space-x-3 w-full py-6 px-4">
                <div className="inline-block"><a href="www.twitter.com/peekinsidepod">Twitter</a></div>
                <div className="inline-block"><a href="#">Instagram</a></div>
                <div className="inline-block"><a href="#">LinkedIn</a></div>

            </div>
            </div>
        )
    }
}
