import React, { useState } from 'react'
import ReactDOM from 'react-dom';

import { faTimes, faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';

import './Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ModalAddMenu({ open, children, onClose, props }) {
      
      const [ inputs, setInputs ] = useState({
            author: "",
            title: "",
            description: "",
            imageUrl: ""
      })
      
      const {author, title, description, imageUrl} = inputs;

      const onChange = (e) => {
            setInputs({ ...inputs, [e.target.author]: e.target.value });
      };

      if (!open) return null

      return ReactDOM.createPortal(
            <>
            
                  <div className="dashboard-overlay" />
                  
                  <div className="dashboardaddmenu">

                        { children }

                        <button className="closebutton" onClick={ onClose }><FontAwesomeIcon icon={faTimes} /></button>
                        
                        <p className="add-menu-title">add a <span style={{color: "rgb(52, 152, 219)"}}>new </span> book</p>

                        <div className="main-add-menu">
                              <input
                                    type="text"
                                    name="author"
                                    placeholder="author*"
                                    //value={author}
                                    onChange={e=>onChange(e)}
                              />

                              <input
                                    type="text"
                                    name="title"
                                    placeholder="title*"
                                    //value={title}
                                    onChange={e=>onChange(e)}
                              />
                              
                              <textarea 
                                    type="textarea"
                                    name="description"
                                    placeholder="description (max 250)"
                                    maxLength={250}
                                    //value={description}
                                    onChange={e=>onChange(e)}
                              />
                              <div>
                                    <label htmlFor="file-upload-text" className="custom-file-upload">
                                    <FontAwesomeIcon icon={faCloudUploadAlt} /><i>&nbsp;&nbsp;*txt</i>
                                    </label>
                                    <input type="file" className="imageAdd" id="file-upload-text" name="text-upload" multiple accept="text/plain"/>

                                    <label htmlFor="file-upload-image" className="custom-file-upload-bottom">
                                    <FontAwesomeIcon icon={faCloudUploadAlt} /><i>&nbsp;&nbsp;*jpg *png</i>
                                    </label>
                                    <input type="file" className="imageAdd-top" id="file-upload-image" name="imageUrl" multiple accept=".JPG, .PNG, .JPEG"/>

                                    <button className="dashboard-add-menu-send" name="" value="Login" onClick={ onClose }>add</button>
                              </div>
                              
                        </div>
                        
                  </div>

            </>,

            document.getElementById("portal-modal-add-menu")
      )
}

export const ModalEditMenu = ({ open, children, onClose, props }) => {
      
      const [ inputs, setInputs ] = useState({
            author: "",
            title: "",
            description: "",
            imageUrl: ""
      })
      
      const {author, title, description, imageUrl} = inputs;

      const onChange = (e) => {
            setInputs({ ...inputs, [e.target.author]: e.target.value });
      };

      if (!open) return null

      return ReactDOM.createPortal(
            <>
            
                  <div className="dashboard-overlay" />
                  
                  <div className="dashboardaddmenu">

                        { children }

                        <button className="closebutton" onClick={ onClose }><FontAwesomeIcon icon={faTimes} /></button>
                        
                        <p className="add-menu-title">edit a <span style={{color: "rgb(52, 152, 219)"}}>book </span></p>

                        <div className="main-add-menu">
                              <input
                                    type="text"
                                    name="author"
                                    placeholder="author*"
                                    //value={author}
                                    onChange={e=>onChange(e)}
                              />

                              <input
                                    type="text"
                                    name="title"
                                    placeholder="title*"
                                    //value={title}
                                    onChange={e=>onChange(e)}
                              />
                              
                              <textarea 
                                    type="textarea"
                                    name="description"
                                    placeholder="description (max 250)"
                                    maxLength={250}
                                    //value={description}
                                    onChange={e=>onChange(e)}
                              />
                              <div>
                                    <label htmlFor="file-upload-text" className="custom-file-upload">
                                    <FontAwesomeIcon icon={faCloudUploadAlt} /><i>&nbsp;&nbsp;*txt</i>
                                    </label>
                                    <input type="file" className="imageAdd" id="file-upload-text" name="text-upload" multiple accept="text/plain"/>

                                    <label htmlFor="file-upload-image" className="custom-file-upload-bottom">
                                    <FontAwesomeIcon icon={faCloudUploadAlt} /><i>&nbsp;&nbsp;*jpg *png</i>
                                    </label>
                                    <input type="file" className="imageAdd-top" id="file-upload-image" name="imageUrl" multiple accept=".JPG, .PNG, .JPEG"/>

                                    <button className="dashboard-add-menu-send" name="" value="Login" onClick={ onClose }>accept</button>
                              </div>
                              
                        </div>
                        
                  </div>

            </>,

            document.getElementById("portal-modal-add-menu")
      )
}

export default ModalAddMenu; 