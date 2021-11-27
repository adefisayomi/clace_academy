import styles from './styles/signup.module.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function signup () {

    return (
        <div className= {styles.signup}>

            <div className= {styles.signup_image}>
                    <h1>signup - <span>tailoring 101 class</span> </h1>
            </div>

                <form>
                    <span className= {styles.signup_form_header}>
                        <h1>signup for our <span>tailoring 101 class</span> </h1>
                    </span>

                    <span className= {styles.form_input}>
                        <TextField id="standard-basic" required type= 'text' label="Name" placeholder= 'First & Last name' />
                        <br/>
                        <TextField id="standard-basic" required type= 'email' label="Email" placeholder= 'yours@email.com' />
                        <br/>
                        <TextField id="standard-basic" required type= 'phone' label="Phone Number" placeholder= '+234812345678' />
                    </span>

                    <span className= {styles.form_submit_section}>
                        <p>
                            <input required type="checkbox" value=""  checked/>
                            i acknowledge that all the information contained in this form are true to the best of my knowledge.
                        </p>
                        <Button variant="contained" id= {styles.form_buttom} color="primary">
                            signup
                        </Button>
                    </span>
                </form>

            {/* <div className= {styles.signup_image}>
                <img src= {image} alt='Register image'/>
            </div>

            <div className= {styles.signup_form}>
                <span className= {styles.signup_form_header}>
                    <h1>signup for our <span>tailoring 101 class</span> </h1>
                </span>

                <form> */}

      {/* <div class="form-floating">
          <input type="text" name="name" value= "{{ name if name }}" required class="form-control" id="name"  placeholder="First and Last name"/>
          <label style="color: grey;" for="name">Name</label>
      </div>

      <div class="form-floating">
          <input type="email" required value= "{{ email if email }}" name="email" class="form-control" id="email" placeholder="email@example.com"/>
          <label style="color: grey;" for="email">Email</label>
      </div>

      <div class="form-floating">
        <input type="phone" required name="phone" value= "{{ phone if phone }}" class="form-control" id="phone" placeholder="+23412345678" />
        <label style="color: grey;" for="phone">Phone</label>
      </div>
      <div class="form-floating">
        <select class="form-select" name="class_mode" id="floatingSelectGrid" aria-label="Floating label select example">
          <option value="weekdays">weekdays</option>
          <option value="weekends">weekends</option>
        </select>
        <label style="color: grey;" for="floatingSelectGrid">Class Mode</label>
      </div> */}

                {/* <div className= {styles.submit_section}>
                    <p>
                        <input required type="checkbox" value="" id="flexCheckChecked" checked/>
                        i acknowledge that all the information contained in this form are true to the best of my knowledge.</p>
                    <button type="submit" form="register_form">Register</button>
                </div>

                </form>
            </div> */}
        </div>
    )
}