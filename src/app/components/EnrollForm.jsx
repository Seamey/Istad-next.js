
'use client';
import { Label, Select } from 'flowbite-react';
import { Button, Checkbox, TextInput } from 'flowbite-react';

export default function EnrollForm() {
    return (
        <section className='w-10/12 mx-auto bg-slate-50 '>
            <form className="flex w-11/12 flex-col gap-4 m-10">
                <div className='grid md:grid-cols-2 gap-8 '>
                    <div >
                        <div className="mb-2 block">
                            <Label htmlFor="text" value="FULL NAME (EN) *" />
                        </div>
                        <TextInput id="text" type="text" placeholder="Chan Tola" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="EMAIL *" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="ChanTola@gmail.com" required />
                    </div>
                    <div>

                        <div className="mb-2 block">
                            <Label htmlFor="gender" value="GENDER *" placeholder="Select your gender" />
                        </div>
                        <Select id="gender" required>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="EMAIL *" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="ChanTola@gmail.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="DATE OF BIRTH *" />
                        </div>
                        <TextInput id="email1" type="text" placeholder="13/12/1997" required />
                    </div>
                    <div>

                        <div className="mb-2 block">
                            <Label htmlFor="gender" value="EDUCATION *" placeholder="Select education" />
                        </div>
                        <Select id="education" required>
                            <option>Frist year</option>
                            <option>Second year</option>
                            <option>Third year</option>
                            <option>Fourth year</option>
                            <option>Graduates</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="PLACE OF BIRTH *" />
                        </div>
                        <TextInput id="email1" type="text" placeholder="Phom penh" />
                        <Select id="address" required>
                            <option value="0" disabled selected>Select province</option>
                            <option value="1">Banteay Meanchey</option>
                            <option value="2">Battambang</option>
                            <option value="3">Kampong Cham</option>
                            <option value="4">Kampong Chhnang</option>
                            <option value="5">Kampong Speu</option>
                            <option value="6">Kampong Thom</option>
                            <option value="7">Kampot</option>
                            <option value="8">Kandal</option>
                            <option value="9">Koh Kong</option>
                            <option value="10">Kratie</option>
                            <option value="11">Mondul Kiri</option>
                            <option value="12">Phnom Penh</option>
                            <option value="13">Preah Vihear</option>
                            <option value="14">Prey Veng</option>
                            <option value="15">Pursat</option>
                            <option value="16">Ratanak Kiri</option>
                            <option value="17">Siemreap</option>
                            <option value="18">Preah Sihanouk</option>
                            <option value="19">Stung Treng</option>
                            <option value="20">Svay Rieng</option>
                            <option value="21">Takeo</option>
                            <option value="22">Oddar Meanchey</option>
                            <option value="23">Kep</option>
                            <option value="24">Pailin</option>
                            <option value="25">Tboung Khmum</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="UNIVERSITY *" />
                        </div>
                        <TextInput id="email1" type="text" placeholder='Select course' />
                        <Select id="course" required>
                            <option value="0" disabled selected>Select university</option>
                            <option value="1">ACLEDA Institute of Business</option>
                            <option value="2">American University of Phnom Penh</option>
                            <option value="3">Asia Euro University</option>
                            <option value="4">Beltei International University</option>
                            <option value="5">Build Bright University</option>
                            <option value="42">Cambodia Academy of Digital Technology</option>
                            <option value="7">Cambodian Mekong University</option>
                            <option value="6">Cambodia University for Specialties</option>
                            <option value="8">CamEd Business School</option>
                            <option value="9">Chenla University</option>
                            <option value="10">East Asia Management University</option>
                            <option value="11">Economics and Finance Institute</option>
                            <option value="12">Human Resources University</option>
                            <option value="13">IIC University of Technology</option>
                            <option value="14">Institute of Technology of Cambodia</option>
                            <option value="15">International University</option>
                            <option value="43">IT Academy STEP Cambodia</option>
                            <option value="16">Khemarak University</option>
                            <option value="17">Limkokwing University of Creative Technology, Cambodia</option>
                            <option value="18">National Institute of Business</option>
                            <option value="19">National Institute of Education</option>
                            <option value="20">National Polytechnic Institute of Cambodia</option>
                            <option value="21">National University of Management</option>
                            <option value="22">Norton University</option>
                            <option value="40">Other</option>
                            <option value="23">Panha Chiet University</option>
                            <option value="24">Paññasastra University of Cambodia</option>
                            <option value="25">Paragon International University</option>
                            <option value="26">Phnom Penh International University</option>
                            <option value="27">Preah Sihanouk Raja Buddhist University</option>
                            <option value="28">Prek Leap National College of Agriculture</option>
                            <option value="29">Royal Academy of Cambodia</option>
                            <option value="30">Royal University of Agriculture</option>
                            <option value="31">Royal University of Fine Arts</option>
                            <option value="32">Royal University of Law and Economics</option>
                            <option value="33">Royal University of Phnom Penh</option>
                            <option value="41">Setec Institute</option>
                            <option value="34">The University of Cambodia</option>
                            <option value="35">University of Battambang</option>
                            <option value="36">University of Management and Economics</option>
                            <option value="37">University of Puthisastra</option>
                            <option value="38">Vanda Institute</option>
                            <option value="39">Western University Cambodia</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="EMAIL *" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="ChanTola@gmail.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block ">
                            <Label htmlFor="course" value="current address" className="font-bold uppercase tracking-[.25em]" />
                            <span className="text-red-500">*</span>
                        </div>
                        <Select id="course" required>
                            <option value="0" disabled selected>Select current address</option>
                            <option value="1">Chamkar Mon</option>
                            <option value="2">Doun Penh</option>
                            <option value="3">Prampir Meakkakra</option>
                            <option value="4">Tuol Kouk</option>
                            <option value="5">Dangkao</option>
                            <option value="6">Mean Chey</option>
                            <option value="7">Russey Keo</option>
                            <option value="8">Saensokh</option>
                            <option value="9">Pur SenChey</option>
                            <option value="10">Chrouy Changvar</option>
                            <option value="11">Praek Pnov</option>
                            <option value="12">Chbar Ampov</option>
                            <option value="13">Boeng Keng Kang</option>
                            <option value="14">Kamboul</option>
                        </Select>
                    </div>

                </div>
                <div className="pt-10 text-red-500 font-bold">
                <h3>👉 Please filter available courses to select the class..!</h3>
            </div>
                <div>
                    <div className="mb-2 block ">
                        <Label htmlFor="email1" value="COURSE *" />
                    </div>
                    <TextInput id="email1" type="text" placeholder="Selecte course" required />
                    <Select id="education" required>
                        <option>Front end</option>
                        <option>Flutter Mobile development</option>
                        <option>DevOps </option>
                        <option>Spring Framework</option>
                        <option>Java Programming</option>
                        <option>Other</option>
                    </Select>
                </div>
            </form>
            


            <div className="flex justify-end gap-4 my-4">
                <button
                    className="w-40 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded uppercase">
                    Cancel
                </button>
                <button type="submit"
                    className="w-40 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded uppercase">
                    Enroll Now
                </button>
            </div>
        </section>
    );
}
