import React from 'react'
import  './certi.css'
import {BsCircle} from 'react-icons/bs'
import {MdLocationPin} from 'react-icons/md'
import {IoIosCall} from 'react-icons/io'
import {GrMail} from 'react-icons/gr'
import {SiWebauthn} from 'react-icons/si'
function Cv() {
  return (
    <div className="certi">

        <div className="cv-header">
            {/* <p><BsCircle size={40}  className='c-img' /></p> */}
            <div className='c-img'></div>
            <div className='h-text'>
              <h2> DARLENE</h2>
              <h2>S. SCOTT</h2>
              <h4>DEVELOPMENTAL SPECIALIST</h4>
            </div>
            
        </div>
        <div className='main'>
              <div className='c-left'>
              
              <div>
                <div className='c-list'>
              <h2>CONTACTS</h2>
               <ul>
                  <li><MdLocationPin/></li>
                  <li>4262 Davis Lane,Denverr Co 3456</li>
                </ul>

                <ul>
                  <li><IoIosCall/></li>
                  <li>+245-344-456-41</li>
                </ul>

                <ul>
                  <li><GrMail/></li>
                  <li>darlen@gmail.com</li>
                </ul>

                <ul>
                  <li><SiWebauthn/></li>
                  <li>darene.com</li>
                </ul>
              </div>
              
              </div>
              <div className='c-leftD'>
              <h1 className='txt'>Career Objective</h1>
                <p>To develop new skill and ability
                  in Developmental Specialist field
                  by filling a position with an 
                  establish organization
                </p>
              </div>
               
              </div>
              <div className='c-right'>

                <div className='c-right1'>
                  <h1 className='txt'> WORK EXPERIENCE </h1>
                  <h5>Developmental Specialist | Monarch Human Service</h5>
                  <p>2023-Present</p>
                  <ul>
                    <li>Provide teaching and consultation to team members</li>
                    <li>participtated as a mumber of the interdisciplinary
                      Program Team in Program Development, assignment of 
                      ILS skills,writihg,including revisions to current program as neeeded,
                      and implementing the program
                    </li>
                    <li>Meet with other community service providers to best serve
                      children through effective community network
                    </li>
                    <li>Maintained assigned client records according tp program 
                      procedures
                    </li>
                    
                  </ul>
                  </div>

                  <div className='c-right2'>
                    <h4 className='txt'>Devlopmental Specialist | Ventures Communinty Services </h4>
                    <p>2014-2016</p>
                    <ul>
                      <li>Ensured the program met cleaniness and Saftey requirement</li>
                      <li>Collaborated as a Trans disciplinary team member for
                        program planning and delivery of services, including 
                        co-treatments,as well as attending in-service training,
                        team meetings, professional devlopment, and group and individual supervison.

                      </li>
                      <li>Oversaw the supervision and evaluation of Activity Specialist
                        and Community Advocates.
                      </li>
                      <li>Colaborated and maintained positive relationships with ancillary services,community
                        services, community members,other service providers, and significant
                        others
                      </li>
                      <li>Developed, implemented and operated a program model consistent with
                        the vision of maximizing community involvement and poviding 
                        personalized, flexibly supported to the individualsed served
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

                

    
  )
}

export default Cv