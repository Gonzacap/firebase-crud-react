import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const LinksForm = ( { addOrEditLink, cancelUpdate, currentId } ) => {
  const initialStateValues = {
    url: "",
    name: "",
    description: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditLink(values);
    setValues({...initialStateValues})
  };

  const getLinkById = async (id) => {
    const doc = await db.collection("links").doc(id).get();
    setValues({ ...doc.data() });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    cancelUpdate();
    setValues({...initialStateValues});
  };

  useEffect(() => {
    if (currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(currentId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-text">
          <i className="material-symbols-outlined">insert_link</i>
        </div>
        <input
          type="url"
          className="form-control"
          placeholder="https://someurl.xyz"
          value={values.url}
          name="url"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text">
          <i className="material-symbols-outlined">create</i>
        </div>
        <input
          type="text"
          value={values.name}
          name="name"
          placeholder="Website Name"
          className="form-control"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          rows="3"
          className="form-control"
          placeholder="Write a Description"
          name="description"
          value={values.description}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <button className="btn btn-primary btn-block">
        {currentId === "" ? "Save" : "Update"}
      </button>
      { currentId && (
        <button 
          className="btn btn-secondary btn-block"
          onClick={handleCancel}
        >
          Cancel
        </button>
      ) }
    </form>
  );
};

export default LinksForm;