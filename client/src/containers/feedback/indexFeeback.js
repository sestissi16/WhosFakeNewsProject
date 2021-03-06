import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import './indexFeedback.css'


const Feedback = () => (
    <div id="feedbackPageContainer">
        <div id="feedbackContent">
            <div id="feedbackHeader">
                <h3 id="feedbackHeaderMessage"><strong><em>Give us feedback and contact us!</em></strong></h3>
            </div>
            <div id="feedbackBody">
                <div id="feedbackBodyContent">
                    <div id="feedbackInfo">
                        <div id="feedbackInfoTitle">
                            <h2>Some examples of what you can contact us about:</h2>
                        </div>
                        <div id="feedbackInfoText">
                            <ul>
                                <li id="feedbackInfoListItem">
                                    Wanting to help with the project
                                </li>
                                <li id="feedbackInfoListItem">
                                    Having a question about the project or how something works
                                </li>
                                <li id="feedbackInfoListItem">
                                    Finding an issue with the website or extension
                                </li>
                                <li id="feedbackInfoListItem">
                                    Having a suggestion about what to change or add
                                </li>
                                <li id="feedbackInfoListItem">
                                    Having a resource that you want to share
                                </li>
                            </ul>
                            <div id="feedbackInfoNote">
                                <h5>
                                    Write what you want to talk about in the Subject Line below!<br/> 
                                    Then tell us more about it in the Email Body section!
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div id="feedbackEmailForm">
                        <h1 id="feedbackEmailFormTitle">Feedback Form</h1>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    id='form-input-control-first-name'
                                    control={Input}
                                    label='First name'
                                    placeholder='First name'
                                />
                                <Form.Field
                                    id='form-input-control-last-name'
                                    control={Input}
                                    label='Last name'
                                    placeholder='Last name'
                                />
                            </Form.Group>
                            <Form.Field
                                id='form-input-control-email'
                                control={Input}
                                label='Email'
                                placeholder='joe@gmail.com'
                                // error={{
                                //     content: 'Please enter a valid email address',
                                //     pointing: 'below',
                                // }}
                            />
                            <Form.Field
                                id='form-input-control-subject'
                                control={Input}
                                label='Subject Line'
                                placeholder='Write what you wanted to contact us about'
                            />
                            <Form.Field
                                id='form-textarea-control-body'
                                control={TextArea}
                                label='Email body'
                                placeholder='Where you can write whatever you wanted to send us'
                            />
                            <Form.Field
                                id='form-button-control-public'
                                control={Button}
                                content='Send'
                                label='Send Form'
                                color='red'
                            />
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Feedback