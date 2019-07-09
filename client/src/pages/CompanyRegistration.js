import React, { Component, useState } from 'react';
import '../css/CompanyRegistration.css';
import { CompanyAutoSuggest } from "../components/CompanyAutoSuggest";
import { Row } from 'react-bootstrap';
import { MDBCollapse } from "mdbreact";
import { Dropdown } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Field, Form, FieldArray } from 'formik';
import { useDropzone } from 'react-dropzone';
import * as Yup from 'yup';
import axios from 'axios';
import { getJwt } from '../helpers/jwt';
import AvatarEditor from 'react-avatar-editor'

const options = [
    { key: 'angular', text: 'Angular', value: 'Angular' },
    { key: 'css', text: 'CSS', value: 'CSS' },
    { key: 'design', text: 'Graphic Design', value: 'Graphic Design' },
    { key: 'ember', text: 'Ember', value: 'Ember' },
    { key: 'html', text: 'HTML', value: 'HTML' },
    { key: 'ia', text: 'Information Architecture', value: 'Information Architecture' },
    { key: 'javascript', text: 'Javascript', value: 'Javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'Mechanical Engineering' },
    { key: 'meteor', text: 'Meteor', value: 'Meteor' },
    { key: 'node', text: 'NodeJS', value: 'NodeJS' },
    { key: 'plumbing', text: 'Plumbing', value: 'Plumbing' },
    { key: 'python', text: 'Python', value: 'Python' },
    { key: 'rails', text: 'Rails', value: 'Rails' },
    { key: 'react', text: 'React', value: 'React' },
    { key: 'repair', text: 'Kitchen Repair', value: 'Kitchen Repair' },
    { key: 'ruby', text: 'Ruby', value: 'Ruby' },
    { key: 'ui', text: 'UI Design', value: 'UI Design' },
    { key: 'ux', text: 'User Experience', value: 'User Experience' },
]
const val =[];
const initialValues = {
    startDate: new Date(),
    endDate: new Date(),
    company: {
       
    },
    education:[{
        
    }],
    projects: [{
        
    }],
    additionalEducation: [{

    }],
    achievements: [{
       
    }],
    skills: [],
    technologies: [],
    workExperience: [{
        
        workFrom: new Date(),
        workUntil: new Date()
    }],
    //skill: '',
}

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const SignupSchema = Yup.object().shape({
    company: {
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required')
    }
});

const onChange = (id, newValue) => {
    console.log(`changed to ${newValue}`);
    id === 'city' ? initialValues.company.city = newValue : initialValues.education[0].institution = newValue;
}

function Upload(props) {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
            console.log(JSON.stringify(
                {
                    uploadPhoto: acceptedFiles.map(file => ({
                        fileName: file.name,
                        type: file.type,
                        size: `${file.size} bytes`
                    })),
                },
                null,
                2
            ));
            console.log(props.index, props.id)
            if (props.id === "certificationLink") {
                props.values.additionalEducation[props.index].coursePhoto = acceptedFiles;
            }
            if (props.id === "achievement") {
                props.values.achievements[props.index].achievementPhoto = acceptedFiles;
            }
            if (props.id === "project") {
                props.values.projects[props.index].projectPhoto = acceptedFiles;
            }
        }
    });

    const thumbProject = (
        files.map(file => (
            <div className="img-thumbnail mt-2" style={thumb} key={file.name}>
                <div id="thumbInner" key={"thumb" + file.name}>

                    {props.id === "project" ?
                        ((props.values.projects[props.index].projectPhoto.length === 0) ?

                            <img key={file.size + "img"}
                                src={file.preview}
                                id="uploadImg"
                            />
                            :
                            props.values.projects[props.index].projectPhoto.map(file1 => (
                                <img key={file1.name + "img"}
                                    src={file1.preview}
                                    id="uploadImg" />
                            ))) : null}
                    {
                        props.id === "certificationLink" ?
                            ((props.values.additionalEducation[props.index].coursePhoto.length === 0 ?

                                <img key={file.size + "img1"}
                                    src={file.preview}
                                    id="uploadImg"
                                />
                                :
                                props.values.additionalEducation[props.index].coursePhoto.map(file2 => (
                                    <img key={file2.name + "img1"}
                                        src={file2.preview}
                                        id="uploadImg" />
                                )))) : null}
                    {
                        props.id === "achievement" ?
                            ((props.values.achievements[props.index].achievementPhoto.length === 0 ?

                                <img key={file.size + "img2"}
                                    src={file.preview}
                                    id="uploadImg"
                                />
                                :
                                props.values.achievements[props.index].achievementPhoto.map(file2 => (
                                    <img key={file2.name + "img2"}
                                        src={file2.preview}
                                        id="uploadImg" />
                                )))) : null}
                </div>
            </div>)));



    return (
        props.id === "project" ?
            <div className="container">
                <Row id="but1" {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p style={{ marginTop: "0.5vmax", color: "#6c757d" }}>Upload image</p>
                    <i key="owncon" id="ownUploadIcon" className="far fa-image"></i>

                </Row>
                <aside>
                    {thumbProject}
                </aside>
            </div> : <div className="container">
                <div id="uploadBut1" {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p style={{ marginLeft: "2vmax", color: "#6c757d" }}>Drop your image here, or click to select</p>
                </div>
                <aside id="thumbsContainer">
                    {thumbProject}
                </aside>
            </div>
    );
}
var indx=0;

class MyEditor extends React.Component {
    render() {
      return (
        <AvatarEditor
          image="https://cdnssinc-prod.softserveinc.com/img/crawler-preview.jpg"
          width={150}
          height={150}
          border={1}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={1.2}
          rotate={0}
           className="avatar"
        />
      )
    }
  }

export class CompanyRegistration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseAdditionalID: "",
            startDate: new Date(),
            endDate: new Date(),
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }
 
    
    handleSubmit = async (values) => {
             let success;
             let token  = getJwt();
             console.log(JSON.stringify(values));
             console.log(getJwt());
           await axios.post('/profile/company', JSON.stringify(values), {
                 headers: {
                     'Content-Type' : 'application/json',
                     'Accept' : 'application/json',
                     'Access-Control-Allow-Origin': '*',
                     'Access-Control-Allow-Credentials': 'true',
                     Authorization: `Bearer ${token}` }
             }).catch(function (error) {
                alert(error);
             }).then(function (response) {
                console.log('Status: ' + response.status);
                 if (response !== undefined) {
                     console.log('Status: ' + response.status);
                     if (response.status === 201) {
                        success = true;
                         console.log('success');
                     } else {
                        success = false;
                         alert('Sorry, try again');
                     }
                 }
             });
     
             if (success) {
                 console.log('redirect');
                 this.props.history.push('/');
             }
         }

    render() {

        return (
            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        values.company.city = initialValues.company.city;
                        values.education[0].institution = initialValues.education[0].institution;
                        values.startDate = this.state.startDate;
                        values.endDate = this.state.endDate;
                        console.log(JSON.stringify(
                        values,
                        null,
                        2));

                        this.handleSubmit(values);
                    }}

                >
                    {({ values, errors, touched, isSubmitting, setFieldValue, handleBlur, setFieldTouched }) =>
                        <Form>
                            <div className="bodycomp">
                                <div className="main3">

                                    {/* Rectangle */}
                                    <div className="rectangle2 comprectangle2 companyblack">
                                        <div className="emptyRectangle3">
                                            <h2 className="rightTitle2">Create Company account</h2>
                                        </div>
                                    </div>
                                    <MyEditor/>

                                    {/* Info Form */}
                                    <div className="mainInfo">

                                        <div className="rectGeneral1">
                                            <h2 className="rectText">General information</h2>
                                        </div>

                                        <div className="generalFormStyle">
                                            <Row>
                                                <div className="infoRow">
                                                    <Field name="company.name">
                                                        {({ field, form }) => (
                                                            <input {...field} required="required" onBlur={handleBlur} className="but1" type="text" placeholder="Company Name" />
                                                        )}
                                                    </Field>
                                                    {errors.firstName && touched.firstName ? (
                                                        <div className="error">{errors.firstName}</div>
                                                    ) : null}
                                                </div>
                                                <div className="infoRow">
                                                    <Field name="company.link">
                                                        {({ field, form }) => (
                                                            <input {...field} required="required" onBlur={handleBlur} className="but1" type="text" placeholder="Website" />
                                                        )}
                                                    </Field>
                                                    {errors.lastName && touched.lastName ? (
                                                        <div className="error">{errors.lastName}</div>
                                                    ) : null}
                                                </div>
                                                <div className="infoRow">
                                                    <div className="com">
                                                        <CompanyAutoSuggest
                                                            id="city"
                                                            name="company.city"
                                                            placeholder="Headquarter"
                                                            onBlur={handleBlur}
                                                            onChange={onChange} />
                                                    </div>
                                                </div>
                                            </Row>

                                            <Row>
                                                <div className="infoRow">
                                                    <div className="com">
                                                        <CompanyAutoSuggest
                                                            id="institution"
                                                            name="education[0].institution"
                                                            placeholder="Company Type"
                                                            onBlur={handleBlur}
                                                            onChange={onChange} style={{backgroundColor:'white'}} />
                                                    </div>
                                                </div>
                                                <div className="infoRow">
                                                    <Field name="education[0].specialization">
                                                        {({ field, form }) => (
                                                            <input {...field} onBlur={handleBlur} className="but1" type="text" placeholder="Specialization" />
                                                        )}
                                                    </Field>
                                                </div>
                                            </Row>
                                        </div>
                                    

                                        {/* Additional Information */}
                                        <div className="rectAdditional1">
                                            <h2 className="additionalRectText">Additional information</h2>
                                        </div>

                                        <div className="additionalformStyle1">
                                            <Row className="additionalRow">
                                                {/* <button className={this.state.button ? "additionalButtonTrue" : "additionalButtonFalse"}
                                            onClick={this.toggleCollapseAdditional("hide")}>Courses</button>*/}
                                                <button type="button" className="additionalButton1"
                                                    onClick={this.toggleCollapseAdditional("additionalEducation")}>Company history</button>
                                                <h2 className="line1">|</h2>
                                                <button type="button" className="additionalButton1"
                                                    onClick={this.toggleCollapseAdditional("achievements")}>Locations</button>
                                                <h2 className="line1">|</h2>
                                                <button type="button" className="additionalButton1" onClick={this.toggleCollapseAdditional("skills")}>Vacancies</button>
                                                <h2 className="line1">|</h2>
                                                <button type="button" className="additionalButton1" onClick={this.toggleCollapseAdditional("technology")}>Technologis</button>
                                                <h2 className="line1">|</h2>
                                                <button type="button" className="additionalButton1" onClick={this.toggleCollapseAdditional("workExperience")}>About</button>
                                            </Row>
                                            <MDBCollapse id="additionalEducation" isOpen={this.state.collapseAdditionalID}>
                                                <FieldArray key="coursearr" name="additionalEducation">
                                                    {({ push, remove }) =>
                                                        <Row key="courserow">
                                                            {values.additionalEducation && values.additionalEducation.length > 0 && values.additionalEducation.map((course, index) =>
                                                                <>
                                                                    <div key={"coursecol1" + index} style={{ marginLeft: "3vmax", marginTop: "5.4vh" }}>
                                                                        <Field key={"coursefield1" + index} name={`additionalEducation[${index}].certificationLink`}>
                                                                            {({ field, form }) => (
                                                                                <input {...field} key={"courseinput1" + index} onBlur={handleBlur} className="but1" type="text" placeholder="Course link" />
                                                                            )}
                                                                        </Field>
                                                                    </div>
                                                                    <div key={"coursecol2" + index} className="uploadBut">
                                                                        <Field name={`additionalEducation[${index}].coursePhoto`} key={"coursefield2" + index} id="certificationLink" values={values} index={index} component={Upload} >
                                                                        </Field>

                                                                    </div>
                                                                    {values.additionalEducation.length > 1 ? <button key={"courserem" + index} type="button" onClick={() => remove(index)} className="additionalButDel del"><i key="courseremicon" className="fas fa-minus"></i></button> : ''}
                                                                </>
                                                            )}
                                                            <button type="button" key={"courseadd"} onClick={() => push({ certificationLink: '', coursePhoto: [] })} className="additionalButAdd1"><i key="courseaddicon" className="fas fa-plus"></i></button>
                                                        </Row>
                                                    }
                                                </FieldArray>
                                            </MDBCollapse>

                                            <MDBCollapse id="achievements" isOpen={this.state.collapseAdditionalID}>
                                                <FieldArray name="achievements">
                                                    {({ push, remove }) =>
                                                        <Row>
                                                            {values.achievements && values.achievements.length > 0 && values.achievements.map((achievement, index) =>
                                                                <>
                                                                    <div style={{ marginLeft: "3vmax", marginTop: "5.4vh" }}>
                                                                        <Field name={`achievements[${index}].achievement`}>
                                                                            {({ field, form }) => (
                                                                                <input {...field} onBlur={handleBlur} className="but1" type="text" placeholder="Achievement link" />
                                                                            )}
                                                                        </Field>
                                                                    </div>
                                                                    <div className="uploadBut">
                                                                        <Field name={`achievements[${index}].achievementPhoto`} id="achievement" values={values} index={index} component={Upload} >
                                                                        </Field>
                                                                    </div>
                                                                    {values.achievements.length > 1 ? <button type="button" onClick={() => remove(index)} className="additionalButDel del"><i className="fas fa-minus"></i></button> : ''}
                                                                </>
                                                            )}
                                                            <button type="button" onClick={() => push({ achievement: '', achievementPhoto: [] })} className="additionalButAdd1"><i className="fas fa-plus"></i></button>
                                                        </Row>
                                                    }
                                                </FieldArray>
                                                <span className="skillsText">What are your achievements?</span>
                                            </MDBCollapse>

                                            <MDBCollapse id="skills" isOpen={this.state.collapseAdditionalID}>
                                                <div className="ownFormStyle" style={{ paddingBottom: "1vw" }}>
                                                    <Dropdown id="additionalDropDown1"
                                                        name='skills'
                                                        value={values.skills}
                                                        onBlur={(e, { name, value }) => setFieldTouched(name, value)}
                                                        onChange={(e, { name, value }) => setFieldValue(name, value)}
                                                        placeholder='Skills' fluid multiple selection options={options} />
                                                </div>
                                            </MDBCollapse>

                                            <MDBCollapse id="technology" isOpen={this.state.collapseAdditionalID}>
                                                <div className="ownFormStyle" style={{ paddingBottom: "1vw" }}>
                                                    <Dropdown id="additionalDropDown1"
                                                        name='technologies'
                                                        value={values.technologies}
                                                        onBlur={(e, { name, value }) => setFieldTouched(name, value)}
                                                        onChange={(e, { name, value }) => setFieldValue(name, value)}
                                                        placeholder='Technologies' fluid multiple selection options={options} />
                                                </div>
                                            </MDBCollapse>

                                            <MDBCollapse id="workExperience" isOpen={this.state.collapseAdditionalID}>
                                                <FieldArray name="workExperience">
                                                    {({ push, remove }) =>
                                                        <Row className="ownRow">
                                                            {values.workExperience && values.workExperience.length > 0 && values.workExperience.map((experienc, index) =>
                                                                <>
                                                                    <Row className="additionalRow" style={{ marginLeft: "2vw", marginBottom: "1vmax" }}>
                                                                        <div>
                                                                            <Field name={`workExperience[${index}].company`}>
                                                                                {({ field, form }) => (
                                                                                    <input {...field} onBlur={handleBlur} className="but1" type="text" placeholder="Company" />
                                                                                )}
                                                                            </Field>
                                                                        </div>
                                                                        <span className="line">|</span>
                                                                        <div>
                                                                            <Field name={`workExperience[${index}].position`}>
                                                                                {({ field, form }) => (
                                                                                    <input {...field} onBlur={handleBlur} className="but1" type="text" placeholder="Position" />
                                                                                )}
                                                                            </Field>
                                                                        </div>
                                                                        <span className="ownText" style={{ marginLeft: "2vmax" }}>Company {index + 1}</span>
                                                                        {values.workExperience.length > 1 ? <button type="button" onClick={() => remove(index)} className="ownButAdd1 del"><i className="fas fa-minus"></i></button> : ''}
                                                                    </Row>
                                                                    <Row className="additionalRow" style={{ marginLeft: "2vw", marginBottom: "1vmax" }}>
                                                                        <DatePicker
                                                                            className="but1"
                                                                            selected={values.workExperience[index].workFrom}
                                                                            selectsStart
                                                                            startDate={values.workExperience[index].workFrom}
                                                                            endDate={values.workExperience[index].workUntil}
                                                                            dateFormat="MM/yyyy"
                                                                            showMonthYearPicker
                                                                            onChange={(e) => this.handleChangeStart(e,values,index)}
                                                                        />
                                                                        
                                                                        <span className="line">|</span>

                                                                        <DatePicker
                                                                            className="but1"
                                                                            selected={values.workExperience[index].workUntil}
                                                                            selectsEnd
                                                                            startDate={values.workExperience[index].workFrom}
                                                                            endDate={values.workExperience[index].workUntil}
                                                                            dateFormat="MM/yyyy"
                                                                            showMonthYearPicker
                                                                            onChange={(e) => this.handleChangeEnd(e,values,index)}
                                                                        />
                                                                    </Row>
                                                                </>
                                                            )}
                                                            <button type="button" onClick={() => push({ company: '', position: '',workFrom: new Date(), workUntil: new Date() })} className="ownButAdd1"><i className="fas fa-plus"></i></button>
                                                        </Row>
                                                    }
                                                </FieldArray>
                                            </MDBCollapse>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="buttonsReg1">
                                <a href="/"><button type="button" className="skipButtonRegComp">Skip by now</button></a>
                                <button type="submit" className="createButtonRegComp">Create account</button>
                            </div>

                        </Form>
                    }
                </Formik>
            </div>
        );
    }

    /* Show/Hide */
    toggleCollapseAdditional = collapseAdditionalID => () => {
        this.setState(prevState => ({
            collapseAdditionalID: ((prevState.collapseAdditionalID !== collapseAdditionalID)) ? collapseAdditionalID : ""
        }));
    }
    handleChangeStart(date,values,index) {
        this.setState({
            startDate: date
        });
        values.workExperience[index].workFrom = date;
    }

    handleChangeEnd(date,values,index) {
        this.setState({
            endDate: date
        });
        values.workExperience[index].workUntil = date;
    }
}