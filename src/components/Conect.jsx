import React from 'react'

const Conect = () => {
    return (
        <>
            <div class="full-title">
                <div class="container">

                    <h1 class="mt-4 mb-3">Contact
                        <small>Subheading</small>
                    </h1>
                </div>
            </div>


            <div class="container">
                <div class="breadcrumb-main">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li class="breadcrumb-item active">Contact</li>
                    </ol>
                </div>
            </div>


            <div class="row">

                <div class="col-lg-8 mb-4">

                    <iframe width="100%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                        src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
                </div>

                <div class="col-lg-4 mb-4 contact-right">
                    <h3>Contact Details</h3>
                    <p>
                        3481 Melrose Place
                        <br />Beverly Hills, CA 90210
                        <br />
                    </p>
                    <p>
                        <abbr title="Phone">P</abbr>: (123) 456-7890
                    </p>
                    <p>
                        <abbr title="Email">E</abbr>:
                        <a href="mailto:name@example.com">name@example.com
                        </a>
                    </p>
                    <p>
                        <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-8 mb-4 contact-left">
                    <h3>Send us a Message</h3>
                    <form name="sentMessage" id="contactForm" novalidate>
                        <div class="control-group form-group">
                            <div class="controls">
                                <label>Full Name:</label>
                                <input type="text" class="form-control" id="name" required
                                    data-validation-required-message="Please enter your name." />
                                <p class="help-block"></p>
                            </div>
                        </div>
                        <div class="control-group form-group">
                            <div class="controls">
                                <label>Phone Number:</label>
                                <input type="tel" class="form-control" id="phone" required
                                    data-validation-required-message="Please enter your phone number." />
                            </div>
                        </div>
                        <div class="control-group form-group">
                            <div class="controls">
                                <label>Email Address:</label>
                                <input type="email" class="form-control" id="email" required
                                    data-validation-required-message="Please enter your email address." />
                            </div>
                        </div>
                        <div class="control-group form-group">
                            <div class="controls">
                                <label>Message:</label>
                                <textarea rows="5" cols="100" class="form-control" id="message" required
                                    data-validation-required-message="Please enter your message" maxlength="999"
                                    style={{ resize: 'none' }}></textarea>
                            </div>
                        </div>
                        <div id="success"></div>

                        <button type="submit" class="btn btn-primary" id="sendMessageButton">Send Message</button>
                    </form>
                </div>

            </div>






        </>
    )
}

export default Conect