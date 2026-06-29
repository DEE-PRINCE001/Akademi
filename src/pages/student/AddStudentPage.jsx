import React from 'react'
import GeneralHeader from '../../components/Layout/GeneralHeader'
import TextInput from '../../components/inputs/TextInput'
import TextArea from '../../components/inputs/TextArea'
import ImageUploader from '../../components/inputs/ImageUploader'
import Button from '../../components/labels/Button'
import { useNavigate } from 'react-router-dom'

const AddStudentPage = () => {
    const navigate = useNavigate()
    return (
        <div className='flex-1 flex flex-col space-y-7 h-full overflow-hidden scrollbar-none w-auto m-0'>
            <GeneralHeader title={"Add New Student"} />
            <div className='flex-1 min-h-0 overflow-auto scrollbar-none flex flex-col space-y-8'>
                <div className='rounded-xl flex-1 min-h-0 flex flex-col space-y-8'>
                    <div>
                        <div className='rounded-t-2xl bg-primary px-8 py-2.5 text-white font-bold text-[18px]'>Student Details</div>
                        <div className='flex-1 rounded-b-2xl bg-white p-5'>
                            <div className='flex flex-col space-y-1 lg:flex-row lg:space-x-5 lg:space-y-0'>
                                <div className='lg:w-[15%]'>
                                    <ImageUploader />
                                </div>

                                <div className='flex-1 flex flex-col space-y-2'>

                                    {/* <div className='flex-1 rounded-b-2xl bg-white p-5 grid grid-cols-[1fr_1fr_0.15fr] gap-5'> */}
                                    <div className='w-full flex flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0'>

                                        <TextInput required="true" label="First Name" />
                                        <TextInput required="true" label="Last Name" />

                                    </div>
                                    <div className='w-full flex flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0'>

                                        <div className='flex space-x-3 items-end w-full'>
                                            <TextInput required="true" label="Date & Place of Birth" placeholder="September 2013" />
                                            <TextInput required="true" placeholder="September 2017" />
                                        </div>
                                        <TextInput required="true" label="Parent Name" placeholder="Yoaco, Ogbomoso" />

                                    </div>
                                    <div className='w-full flex flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0'>

                                        <TextInput required="true" label="Email" />
                                        <TextInput required="true" label="Phone" />

                                    </div>
                                    <div className='w-full flex flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0'>

                                        <TextArea required label="Address" maxLength={2000}
                                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                                        <div className='w-full'></div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className='rounded-t-2xl bg-primary px-8 py-2.5 text-white font-bold text-[18px]'>Parent Details</div>
                        <div className='flex-1 rounded-b-2xl bg-white p-5'>
                            <div className='flex flex-col space-y-2 lg:w-[90%]'>

                                <div className='w-full flex flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0'>

                                    <TextInput required="true" label="First Name" />
                                    <TextInput required="true" label="Last Name" />

                                </div>
                                <div className='w-full flex flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0'>

                                    <TextInput required="true" label="Email" />
                                    <TextInput required="true" label="Phone" />

                                </div>
                                <div className='w-full flex flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0'>

                                    <TextArea required label="Address" maxLength={2000}
                                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                                    <div className='w-full flex flex-col space-y-5'>
                                        <label className="block text-primary-text text-[14px] font-bold mb-2">
                                            Payments <span>*</span>
                                        </label>
                                        <div className='flex space-x-5'>
                                            <label className='flex space-x-2 text-[14px] text-grey-300'>
                                                <input type="radio"
                                                    name='paymentType'
                                                    value={"Cash"}
                                                    className="accent-primary" />
                                                <p>
                                                    Cash
                                                </p>
                                            </label>
                                            <label className='flex space-x-2 text-[14px] text-grey-300'>
                                                <input type="radio"
                                                    name='paymentType'
                                                    value={"Debit"}
                                                    className="accent-primary" />
                                                <p>
                                                    Debit
                                                </p>
                                            </label>


                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div>
                        <div className='flex-1 flex justify-end space-x-3 mb-5'>
                            <Button size={"px-3 py-2 text-xs"}>Save as Draft</Button>
                            <Button size={"px-3 py-2 text-xs"} onClick={() => navigate("/students")}
                                colors={"bg-primary text-white border border-primary"}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudentPage;