import React from "react";
import classes from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import functions from '../utils/Auth';
const Signup = () => {
    const obj = functions();
    const navigate = useNavigate();
    const rytSignHandler = (event) => {
        navigate("/login");
    };

    //states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const proceedButtonHandler = async () => {
        let [firstname,lastname] = name.split(" ");
        lastname = lastname==undefined ? "" : lastname
        if( firstname.length==0||
            email.length==0||
            password.length==0||
            confirmpassword.length==0){
            alert("Enter required fields!!");
            return;
          }
        
        if(!email.includes("@")){
          alert("Enter valid email");
          return;
        }
        if(password.length<6){
          alert("length of password should be greater than 6");
          return;
        }
        if(password!=confirmpassword){
          alert("password and confirm password mismatch");
          return;
        }
        const userInfo ={
          name : firstname,
          email:email,
          password1 :password,
        }
        obj.registerUser(userInfo);
    };

    return (
        <div className={classes.signupDom}>
            <div className={classes.leftBody}></div>
            <div className={classes.rightBody}>
                <div className={classes.section_0}>
                    <span>Already a member?</span>
                    <button
                        className={classes.rytSign}
                        onClick={rytSignHandler}
                    >
                        Sign in
                    </button>
                </div>
                <div className={classes.section_2}>
                    <div className={classes.dynamicSignup}>
                        <form
                            className={classes.signupSection}
                        >
                            <div className={classes.nameInput}>
                                <div className={classes.nameSection}>
                                    <label className={classes.nameLabel}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        className={classes.nameTextInput}
                                        onChange = {(e)=>setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className={classes.userNameSection}>
                                    {/* <label className={classes.nameLabel}>
                                        Date Of Birth
                                    </label>
                                    <input
                                        type="date"
                                        value={dob}
                                        className={classes.signupChoiceSelect}
                                        onChange = {(e)=>setDob(e.target.value)}
                                    /> */}
                                       
                                </div>
                            </div>
                            <div className={classes.emailInput}>
                                <label className={classes.nameLabel}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    className={classes.nameTextInput}
                                    onChange = {(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <div className={classes.passwordInput}>
                                <label className={classes.nameLabel}>
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className={classes.nameTextInput}
                                    placeholder=" 6+ characters"
                                    value={password}
                                    onChange = {(e)=>setPassword(e.target.value)}
                                />
                            </div>
                            <div className={classes.passwordInput}>
                                <label className={classes.nameLabel}>
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    placeholder=" 6+ characters"
                                    className={classes.nameTextInput}
                                    value = {confirmpassword}
                                    onChange = {(e)=>setConfirmpassword(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className={classes.section_3}>
                    <div className={classes.sudSection_3_1}>
                        <button
                            className={classes.createAcbutton}
                            onClick={proceedButtonHandler}
                        >
                            Proceed
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;