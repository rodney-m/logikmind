import React from 'react'

const Header = () => {
    return (
      
          
    <header id="header" class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-xl-5">
                    <div class="text-container">
                        <h1 class="h1-large">Accelerate Your Digital Transformation</h1>
                        <p class="p-large">Accelerate IT and drive business transformation by utilizing our world-class consulting and support solutions
                        </p>

                  
                        <form id="signUpForm">
                            <div class="form-group mail-form-container">
                                <input type="email" class="form-control " id="email" required placeholder="email address" />
                                {/* <label class="label-control" for="email">Email address</label> */}
                            </div>
                            <div class="form-group button-container">
                                <button type="submit" class="form-control-submit-button">SignUp</button>
                            </div>
                        </form>

                    </div>
                </div> 
                <div class="col-lg-6 col-xl-7">
                    <div class="image-container">
                        {/* <img class="img-fluid" src="images/header-image.png" alt="alternative"> */}
                    </div>
                </div>
            </div>
        </div> 
    </header> 
   
    )
}

export default Header
