import React from "react";
import { useState } from "react";
import { SignUpPageStyle } from "./signup-page-style";

const SignUpPageComponent = () => {
    return (
        <SignUpPageStyle>
            <div className="main">
                <form action="" className="container">
                    <h1 className="heading" style={{textAlign: "center"}}>
                        <span style={{color: "blue"}}>Welcome to</span> <br />
                        Aptitude Guru Hem
                        <span style={{color: "red"}}> LMS</span>
                    </h1>
                    <div className="form">
                        <div className="form-container">
                            <div className="two-column">
                                <div className="input-container class-one">
                                    <label htmlFor="firstName">First Name</label>
                                    <div>
                                        <input type="text" id="firstName" placeholder="Enter first name" name="firstName"></input>
                                    </div>
                                </div>
                                <div className="input-container class-two">
                                    <label for="lastName">Last Name</label>
                                    <div>
                                        <input type="text" id="lastName" placeholder="Enter last name" name="lastName"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-layout">
                                <div className="input-container">
                                    <label for="collegeName">Select College</label>
                                    <div>
                                    <input name="collegeName" type="text" value="AGH B2C"></input>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label for="year">Select Passout Year</label>
                                    <div>
                                        <input name="year" type="text" value="2024"></input>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label for="department">Department</label>
                                    <div>
                                        <input name="department" type="text" value="CSE"></input>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label for="ugorpg">Ug or Pg</label>
                                    <div>
                                        <input name="ugorpg" type="text" value="UG"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="two-column">
                                <div className="input-container class-three">
                                    <label for="email">Email</label>
                                    <div>
                                        <input autocomplete="true" type="email" id="email" placeholder="Enter email address" name="email"></input>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label for="mobile">Mobile</label>
                                    <div className="input-container">
                                        <div className="phone-number-container">
                                            <div className="countryCode">
                                                <select placeholder="Code" name="countryCode"><option value="+93">AFG</option><option value="+355">ALB</option><option value="+376">AND</option><option value="+213">DZA</option><option value="+244">AGO</option><option value="+1-268">ATG</option><option value="+54">ARG</option><option value="+374">ARM</option><option value="+61">AUS</option><option value="+43">AUT</option><option value="+994">AZE</option><option value="+1-242">BHS</option><option value="+973">BHR</option><option value="+880">BGD</option><option value="+1-246">BRB</option><option value="+375">BLR</option><option value="+32">BEL</option><option value="+501">BLZ</option><option value="+229">BEN</option><option value="+975">BTN</option><option value="+591">BOL</option><option value="+387">BIH</option><option value="+267">BWA</option><option value="+55">BRA</option><option value="+673">BRN</option><option value="+359">BGR</option><option value="+226">BFA</option><option value="+257">BDI</option><option value="+855">KHM</option><option value="+237">CMR</option><option value="+1">CAN</option><option value="+238">CPV</option><option value="+236">CAF</option><option value="+235">TCD</option><option value="+56">CHL</option><option value="+86">CHN</option><option value="+57">COL</option><option value="+269">COM</option><option value="+242">COG</option><option value="+506">CRI</option><option value="+385">HRV</option><option value="+53">CUB</option><option value="+357">CYP</option><option value="+420">CZE</option><option value="+45">DNK</option><option value="+253">DJI</option><option value="+1-767">DMA</option><option value="+1-809, +1-829, +1-849">DOM</option><option value="+670">TLS</option><option value="+593">ECU</option><option value="+20">EGY</option><option value="+503">SLV</option><option value="+240">GNQ</option><option value="+291">ERI</option><option value="+372">EST</option><option value="+251">ETH</option><option value="+679">FJI</option><option value="+358">FIN</option><option value="+33">FRA</option><option value="+241">GAB</option><option value="+220">GMB</option><option value="+995">GEO</option><option value="+49">DEU</option><option value="+233">GHA</option><option value="+30">GRC</option><option value="+1-473">GRD</option><option value="+502">GTM</option><option value="+224">GIN</option><option value="+245">GNB</option><option value="+592">GUY</option><option value="+509">HTI</option><option value="+504">HND</option><option value="+36">HUN</option><option value="+354">ISL</option><option value="+91">IND</option><option value="+62">IDN</option><option value="+98">IRN</option><option value="+964">IRQ</option><option value="+353">IRL</option><option value="+972">ISR</option><option value="+39">ITA</option><option value="+1-876">JAM</option><option value="+81">JPN</option><option value="+962">JOR</option><option value="+7">KAZ</option><option value="+254">KEN</option><option value="+686">KIR</option><option value="+383">KOS</option><option value="+965">KWT</option><option value="+996">KGZ</option><option value="+856">LAO</option><option value="+371">LVA</option><option value="+961">LBN</option><option value="+266">LSO</option><option value="+231">LBR</option><option value="+218">LBY</option><option value="+423">LIE</option><option value="+370">LTU</option><option value="+352">LUX</option><option value="+389">MKD</option><option value="+261">MDG</option><option value="+265">MWI</option><option value="+60">MYS</option><option value="+960">MDV</option><option value="+223">MLI</option><option value="+356">MLT</option><option value="+692">MHL</option><option value="+222">MRT</option><option value="+230">MUS</option><option value="+52">MEX</option><option value="+691">FSM</option><option value="+373">MDA</option><option value="+377">MCO</option><option value="+976">MNG</option><option value="+382">MNE</option><option value="+212">MAR</option><option value="+258">MOZ</option><option value="+95">MMR</option><option value="+264">NAM</option><option value="+674">NRU</option><option value="+977">NPL</option><option value="+31">NLD</option><option value="+64">NZL</option><option value="+505">NIC</option><option value="+227">NER</option><option value="+234">NGA</option><option value="+850">PRK</option><option value="+47">NOR</option><option value="+968">OMN</option><option value="+92">PAK</option><option value="+680">PLW</option><option value="+970">PSE</option><option value="+507">PAN</option><option value="+675">PNG</option><option value="+595">PRY</option><option value="+51">PER</option><option value="+63">PHL</option><option value="+48">POL</option><option value="+351">PRT</option><option value="+974">QAT</option><option value="+40">ROU</option><option value="+7">RUS</option><option value="+250">RWA</option><option value="+1-869">KNA</option><option value="+1-758">LCA</option><option value="+1-784">VCT</option><option value="+685">WSM</option><option value="+378">SMR</option><option value="+239">STP</option><option value="+966">SAU</option><option value="+221">SEN</option><option value="+381">SRB</option><option value="+248">SYC</option><option value="+232">SLE</option><option value="+65">SGP</option><option value="+421">SVK</option><option value="+386">SVN</option><option value="+677">SLB</option><option value="+252">SOM</option><option value="+27">ZAF</option><option value="+82">KOR</option><option value="+211">SSD</option><option value="+34">ESP</option><option value="+94">LKA</option><option value="+249">SDN</option><option value="+597">SUR</option><option value="+268">SWZ</option><option value="+46">SWE</option><option value="+41">CHE</option><option value="+963">SYR</option><option value="+886">TWN</option><option value="+992">TJK</option><option value="+255">TZA</option><option value="+66">THA</option><option value="+228">TGO</option><option value="+676">TON</option><option value="+1-868">TTO</option><option value="+216">TUN</option><option value="+90">TUR</option><option value="+993">TKM</option><option value="+688">TUV</option><option value="+256">UGA</option><option value="+380">UKR</option><option value="+971">ARE</option><option value="+44">GBR</option><option value="+1">USA</option><option value="+598">URY</option><option value="+998">UZB</option><option value="+678">VUT</option><option value="+379">VAT</option><option value="+58">VEN</option><option value="+84">VNM</option><option value="+967">YEM</option><option value="+260">ZMB</option><option value="+263">ZWE</option></select>
                                            </div>
                                            <div className="mobileNumber">
                                                <input type="number" id="mobile" placeholder="Enter Mobile number" name="mobile"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="two-column">
                                <div className="input-container class-one">
                                    <label for="password">Password</label>
                                    <div>
                                        <input autocomplete="true" type="password" id="password" placeholder="Enter the password" name="password"></input>
                                    </div>
                                    <ul class="sc-jXbUNg fniMew"><li class="gray">minimun 8 character</li><li class="gray">one lowercase character</li><li class="gray">one special character</li><li class="gray">one uppercase character</li><li class="gray">one number</li></ul>
                                </div>
                                <div className="input-container class-two">
                                    <label for="confirmpassword">Confirm Password</label>
                                    <div>
                                        <input autocomplete="true" type="password" id="confirmpassword" placeholder="Enter the confirm password" name="confirmPassword"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="button">Submit</button>
                    </div>
                </form>
            </div>
        </SignUpPageStyle>
    );
};
export default SignUpPageComponent;