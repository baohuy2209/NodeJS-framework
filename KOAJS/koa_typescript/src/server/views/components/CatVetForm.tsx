import * as React from "react";
import { ICatVetFormProps } from "./interface/ICatVetFormProps";

const CatVetForm: React.FunctionComponent<ICatVetFormProps> = (props) => {
  return (
    <form action="/catvet" method="post">
      <input type="hidden" name="id" value={props.cat.id} />
      <div className="form-group">
        <label>Cat Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          value={props.cat.name}
          readOnly
        />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input
          type="text"
          name="age"
          className="form-control"
          value={props.cat.age}
          readOnly
        />
      </div>
      <div className="form-check">
        <input
          name="likesFish"
          type="checkbox"
          className="form-check-input"
          checked={props.cat.likesFish}
          readOnly
        />
        <label className="form-check-label"> Likes Fish</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Send to CatVet
      </button>
    </form>
  );
};

export default CatVetForm;
