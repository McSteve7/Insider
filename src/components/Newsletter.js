import React, { Component } from 'react'
import Logo from '../images/logo.png'
import ScriptTag from 'react-script-tag'

const Form = props => (<script async data-uid="56a42fced3" src="https://skilled-author-111.ck.page/56a42fced3/index.js"></script>
)

export default class Newsletter extends Component {
    render() {
        return (
            
            <div>
            <div className=" w-full py-6 px-4">
            <div className="px-4 pt-3 pb-4 -mx-4 border-gray-400 text-center" id="Newsletter">
                <div id="mc_embed_signup">
                    <form className="mt-2" action="https://apeekpod.us2.list-manage.com/subscribe/post?u=be4acab1bc3c7c9796f5ace91&amp;id=c4c9f05687" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div className="max-w-xl mx-auto" id="mc_embed_signup_scroll">
                        <h2 className="text-xl text-left pb-2 inline-block font-semibold text-gray-800">Join Our Newsletter</h2>
                          
                            <div className="flex items-center mc-field-group">
                                <input className="focus:bg-white focus:shadow w-full px-2 py-4 mr-2  bg-gray-100 shadow-inner rounded-md border border-gray-400 required email focus:outline-none" type="email" name="EMAIL" id="mce-EMAIL" required="required"/>
                                <button className="bg-purple-100 flex items-center px-5 py-2 rounded shadow " style={{marginLeft: -7.8 + 'rem'}}><input className="bg-purple-100 text-white" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" /></button>

                            </div>
                            <div id="mce-responses">
		                        <div className="response" id="mce-error-response"></div>
		                        <div className="response" id="mce-success-response"></div>
	                        </div>

                            <div className="hidden" aria-hidden="true"><input type="text" name="b_be4acab1bc3c7c9796f5ace91_c4c9f05687" tabindex="-1" value=""/></div>
                                <div className="hidden"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>


                        
                            
                        </div>
                    </form>
                </div>          
            </div>
            </div>
            <fieldset src={this.Form} />
            </div>
        )
    }
}

